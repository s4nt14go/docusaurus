---
sidebar_position: 3
---

# On-chain integration

The identity.com on-chain-identity-gateway repository contains a Rust crate called integration-lib . The dApp smart contracts will call this lib to verify gateway tokens before processing a transaction.

Once the integration-lib is imported, it can be called as follows to check whether a given gateway token is valid.

The following parameters must be passed as inputs to the dApp transaction:

- userWallet : The user of the dApp (e.g. the trader in a defi application) . A Civic Pass must have been already issued to this wallet.
- gateway_token The address of the Civic Pass returned from useGateway
- gatekeeper_network The gatekeeper network on which the Civic Pass has been issued. Please contact a Civic account manager for the specific Gatekeeper Network you should use. For more information about Gatekeeper Networks, see here .

The Civic Pass (gateway token) can be accessed in the dApp through the useGateway hook on the Civic React Component , once the user has passed the Gatekeeper verification.

```rust
use solana_gateway::Gateway;

// This check happens before the dApp transaction is processed
fn process() {
// The owner of the gateway token
let userWallet: AccountInfo;
// The gateway token presented by the owner
let gateway_token: AccountInfo;
// The gatekeeper network key
let gatekeeper_network: Pubkey;

    let gateway_verification_result:Result<(), GatewayError> =
        Gateway::verify_gateway_token_account_info(
            &gateway_token_account_info, &userWallet.key, &gatekeeper
        );
}
```

## Error handling

The Gateway call will return a GatewayError if something goes wrong or the token is invalid. The possible values can be seen in error.rs . In this case, the dApp smart contract should reject the transaction.
