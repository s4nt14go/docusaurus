---
sidebar_position: 1
slug: /
---

# The Civic Pass solution

Civic Pass allows dApps to restrict access to only users who have gone through KYC and received a Civic Pass. As an on-chain solution it gives peace of mind to dApp users that everyone they interact with, even anonymously, meets their criteria for KYC.

## The Civic gatekeeper

Civic hosts an access control service which ensure users wishing to use a dApp adheres to the dApps compliance rules . It allows you to perform checks such as Identity Verification, liveness, and OFAC allowed country verification. This is powered by Civic's [Secure Identity Platform](https://docs.civic.com). Once Civic confirms that a user meets the dApp's requirements, it issues a Civic Pass on-chain to that user’s wallet address.

## The On-Chain Civic Pass

The Civic Pass (also referred to as "gateway token") is an on-chain structure representing a wallet's permission to make use of any dApp which trusts the particular gatekeeper network. It records the user's wallet address, which gatekeeper network issued the pass, whether it's active, and when it expires, among other fields. The presence of an active token proves that the gatekeeper verified the user according to the dApp's criteria.
Using Civic's [Rust integration library](https://civic-1.gitbook.io/gateway/civic-gateway-dapp-integration-guide#on-chain-integration), the dApp's smart contracts can verify the state of the Civic Pass before allowing transactions through, thereby blocking non-compliant users from using the dApp.

## The gatekeeper network

A gatekeeper network defines a framework (set of rules) by which prospective Civic Pass holders are vetted and by which tokens must be issued.

The network then allows entry to one or more gatekeepers which it has vetted and trusts to enforce the network’s rules and issue passes correctly. Any dApp that trusts the gatekeeper network will honour tokens issued by any of its gatekeepers.

A gatekeeper may act in multiple networks enforcing different rules for each, and a network may have multiple gatekeepers.

## The dApp UI integration

Once the dApp's Solana transactions are guarded by Civic Pass, the dApp UI should be updated to

- guide the user through obtaining a Civic Pass and keeping it active, and

- reflect the state of the Civic Pass at any point, and maybe disable parts of the UI when an active pass is not found.

To this end, Civic provides a [React component](./ui-integration.md) as reference implementation for talking to the Civic Gatekeeper and on-chain gateway program. In this guide we will explore this React component.
High-level flow

![Components](/img/components.png)
