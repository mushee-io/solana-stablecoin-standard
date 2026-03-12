export type PolicyAction =
  | "mint"
  | "burn"
  | "freeze"
  | "thaw"
  | "pause"
  | "unpause"
  | "blacklist_add"
  | "blacklist_remove"
  | "seize";

export type PolicyEffect =
  | "allow"
  | "deny"
  | "require_approval"
  | "require_dual_approval"
  | "flag";

export type PolicyRule = {
  id: string;
  name: string;
  enabled: boolean;
  action: PolicyAction;
  condition: Record<string, unknown>;
  effect: PolicyEffect;
  approvals?: number;
};

export type PolicyBundle = {
  version: string;
  name: string;
  rules: PolicyRule[];
};

export type EvaluationContext = {
  action: PolicyAction;
  amount?: bigint;
  walletRisk?: number;
};

export type EvaluationResult = {
  allowed: boolean;
  decision: PolicyEffect | "allow";
  requiredApprovals: number;
  matchedPolicies: string[];
  messages: string[];
};
