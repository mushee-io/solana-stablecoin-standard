export type StablecoinPreset = "sss-1" | "sss-2";

export type StablecoinFeatures = {
  compliance: boolean;
  transferHook: boolean;
  permanentDelegate: boolean;
  pause: boolean;
  policyEngine: boolean;
  auditLedger: boolean;
};

export type SimulationResult = {
  allowed: boolean;
  decision: string;
  matchedPolicies: string[];
  requiredApprovals: number;
  messages: string[];
};
