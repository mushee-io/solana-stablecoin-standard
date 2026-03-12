import type { StablecoinFeatures, SimulationResult } from "./types";

export class SolanaStablecoin {
  constructor(public readonly features: StablecoinFeatures) {}

  core = {
    mint: async () => "TODO_MINT_SIG",
    burn: async () => "TODO_BURN_SIG",
    freeze: async () => "TODO_FREEZE_SIG",
    thaw: async () => "TODO_THAW_SIG",
    pause: async () => "TODO_PAUSE_SIG",
    unpause: async () => "TODO_UNPAUSE_SIG",
  };

  compliance = {
    blacklistAdd: async () => "TODO_BLACKLIST_ADD_SIG",
    blacklistRemove: async () => "TODO_BLACKLIST_REMOVE_SIG",
    seize: async () => "TODO_SEIZE_SIG",
    isBlacklisted: async () => false,
  };

  policy = {
    evaluateAction: async (): Promise<SimulationResult> => ({ allowed: true, decision: "allow", matchedPolicies: [], requiredApprovals: 0, messages: [] }),
    simulate: async (): Promise<SimulationResult> => ({ allowed: true, decision: "allow", matchedPolicies: [], requiredApprovals: 0, messages: [] }),
    listPolicies: async () => [],
  };

  audit = {
    listEvents: async () => [],
    exportCsv: async () => "TODO_CSV_EXPORT",
    exportJson: async () => [],
  };

  minters = {
    add: async () => "TODO_MINTER_ADD_SIG",
    remove: async () => "TODO_MINTER_REMOVE_SIG",
    list: async () => [],
    quotaStatus: async () => ({ quota: "0", minted: "0", remaining: "0" }),
  };
}
