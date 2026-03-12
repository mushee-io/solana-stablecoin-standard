# Policy Engine

## Purpose

The Policy Engine allows issuers to define operational and compliance rules outside the core token program.

## Supported action types

- `mint`
- `burn`
- `freeze`
- `thaw`
- `pause`
- `unpause`
- `blacklist_add`
- `blacklist_remove`
- `seize`

## Supported effects

- `allow`
- `deny`
- `require_approval`
- `require_dual_approval`
- `flag`

## Example rules

```json
{
  "id": "mint-over-threshold",
  "name": "Large mint approval",
  "enabled": true,
  "action": "mint",
  "condition": { "amount_gt": 50000000000 },
  "effect": "require_approval",
  "approvals": 1
}
```
