export type AuditActionType =
  | "mint"
  | "burn"
  | "freeze"
  | "thaw"
  | "pause"
  | "unpause"
  | "blacklist_add"
  | "blacklist_remove"
  | "seize"
  | "policy_apply"
  | "approval_grant"
  | "approval_reject";

export type AuditRecord = {
  id: string;
  actionType: AuditActionType;
  mint: string;
  initiator: string;
  approver?: string;
  targetWallet?: string;
  amount?: string;
  reason?: string;
  policyDecision?: string;
  txSignature?: string;
  status: "pending" | "executed" | "rejected";
  createdAt: string;
};
