import { EvaluationContext, EvaluationResult, PolicyBundle } from "./types";

export function evaluatePolicies(bundle: PolicyBundle, context: EvaluationContext): EvaluationResult {
  const matchedPolicies: string[] = [];
  const messages: string[] = [];
  let decision: EvaluationResult["decision"] = "allow";
  let requiredApprovals = 0;

  for (const rule of bundle.rules) {
    if (!rule.enabled || rule.action !== context.action) continue;
    const condition = rule.condition ?? {};
    const amountGt = typeof condition.amount_gt === "number" ? condition.amount_gt : undefined;
    const always = condition.always === true;
    const walletRiskGte = typeof condition.wallet_risk_gte === "number" ? condition.wallet_risk_gte : undefined;

    const amountMatches = amountGt !== undefined && context.amount !== undefined ? Number(context.amount) > amountGt : false;
    const riskMatches = walletRiskGte !== undefined && context.walletRisk !== undefined ? context.walletRisk >= walletRiskGte : false;
    if (!(always || amountMatches || riskMatches)) continue;

    matchedPolicies.push(rule.id);
    messages.push(`${rule.name}: ${rule.effect}`);

    if (rule.effect === "deny") {
      return { allowed: false, decision: "deny", requiredApprovals: 0, matchedPolicies, messages };
    }
    if (rule.effect === "require_dual_approval") {
      decision = "require_dual_approval";
      requiredApprovals = Math.max(requiredApprovals, rule.approvals ?? 2);
    } else if (rule.effect === "require_approval") {
      if (decision !== "require_dual_approval") decision = "require_approval";
      requiredApprovals = Math.max(requiredApprovals, rule.approvals ?? 1);
    }
  }

  return { allowed: true, decision, requiredApprovals, matchedPolicies, messages };
}
