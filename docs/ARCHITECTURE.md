# Architecture

## Overview

Stablecoin OS is structured as four layers:

1. **Standards engine**
2. **Developer tooling**
3. **Issuer operations**
4. **Operator interface**

This keeps the on-chain logic small and composable while allowing issuer-facing workflows to evolve independently.

## Standards engine

### Core program
Responsible for:
- initialize
- mint
- burn
- freeze / thaw
- pause / unpause
- role management
- minter quotas
- feature flags

### Transfer-hook program
Responsible for:
- blacklist enforcement on transfer
- future risk / allowlist checks
- SSS-2 compliance validation

## Issuer operations layer

### Policy Engine
Evaluates rules before action execution.

Examples:
- large mint requires approval
- seizure requires dual control
- block action if wallet is high risk
- deny mint if daily cap is exceeded

### Simulation Service
Runs action previews and returns:
- allow / deny decision
- policy reasons
- required approvals
- expected events
- expected accounts touched

### Audit Ledger
Stores action trails with:
- initiator
- approver
- reason
- tx signature
- timestamps
- before / after metadata
