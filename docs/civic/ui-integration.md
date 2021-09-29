---
sidebar_position: 4
---

# UI integration: Civic's React component
Civic has provided a plug and play React Component. This provides an easy way to request a Gateway Token from a decentralised Application with minimal setup.

## Basic Setup

1. **Install the React component**
   
    ```shell
    npm i @civic/solana-gateway-react
    ```
   
2. **Include the Gateway Context Provider ([more info](https://app.gitbook.com/@civic-1/s/gateway/~/drafts/-MkIXrKS63CteWYs62ME/civic-gateway-dapp-integration-guide#the-gateway-provider))**
   
    You can access the Gateway token by using the Gateway Provider that is part of the library. For a list of required and optional properties, please review the detailed section on the [Gateway Context Provider](https://app.gitbook.com/@civic-1/s/gateway/~/drafts/-MkIXrKS63CteWYs62ME/civic-gateway-dapp-integration-guide#the-gateway-provider).
   
   Note: The useGateway hook will only work in components wrapped by `<GatewayProvider>`. The Civic Pass state cannot be used outside of the `<GatewayProvider>` context. It's suggested to place the `<GatewayProvider>` as high up in the component tree as possible, to ensure the Civic Pass state is available across the dApp.

    ```jsx
    import { GatewayProvider } from "@civic/solana-gateway-react";
    
    <GatewayProvider  wallet={wallet} gatekeeperNetwork={gatekeeperNetwork}>
      {children}
    </GatewayProvider>
    ```

3. **Finally add the Identity Button**
   
    The IdentityButton must be inside the `<GatewayProvider>` context to ensure status updates are automatically reflected by the button.

    ```jsx
    import IdentityButton from '@civic/solana-gateway-react';
    ...
    <IdentityButton />
    ```

## Advanced Setup

It is also possible to use a custom button and / or iframe wrapper. See the [documentation on npm](https://www.npmjs.com/package/@civic/solana-gateway-react) for more details.

## The Identity Button

The IdentityButton is a reference implementation of a UI component to communicate to dApp users the current status of their Gateway Token, or Gateway Token request. It changes appearance with text and icons to indicate when the user needs to take action and can be clicked by the user at any point in the process. The initial click for a new user will initiate the flow for the user to create a new Gateway Token. Once the user has gone through KYC and submitted their Gateway Token request via the Civic compliance iFrame, any subsequent click will launch the Civic compliance iframe with a screen describing the current status of the flow.

| Property | Description | Type |
| --- | --- | --- |
| **mode** | The default setting of the button is dark. We also provide a `light mode`. | DARK \| LIGHT |
| **animation** | The button provides a neat animation on hover. The default value is `dark mode`. | true \| false |
#
```jsx
import {
  IdentityButton,
  ButtonMode,
} from '@civic/solana-gateway-react';

<IdentityButton mode={ButtonMode.LIGHT} animation={true} />
```

## The Gateway Provider

The **GatewayProvider** is a React component that gives children access to the GatewayContext through the **useGateway** function. This component holds the state for a given Gateway Token or Gateway Token request.

```jsx
import { GatewayProvider } from "@civic/solana-gateway-react";

<GatewayProvider
  wallet={wallet}
  gatekeeperNetwork={gatekeeperNetwork}>
</GatewayProvider>
```
#
| Property | Description | Type |
| --- | --- | --- |
| **wallet** | An object representing the user's wallet. This may be `undefined` if no wallet has been connected to the dApp yet. | An object with two properties ( see below ) |
| **wallet.publicKey** | The user wallet's public key | `PublicKey` from `@solana/web3.js` |
| **wallet.signTransaction** | A function that asks the user's wallet to sign a transaction. | `(transaction: Transaction) => Promise<Transaction>` where `Transaction` is from `@solana/web3.js` |
| **gatekeeperNetwork** | The public key of the gatekeeper network. This needs to match the network within which the Civic gatekeeper issues tokens.  | `PublicKey` from `@solana/web3.js` |

## The useGateway hook

The React component exposes state about the process of requesting a gateway token, as well as the token itself. It also provides a function to request a new gateway token. These can be accessed through the `useGateway` hook:

```jsx
import { useGateway } from "@civic/solana-gateway-react";
```

### Requesting a gateway token

A function is provided to initiate a request for a new gateway token:

```jsx
const { requestGatewayToken } = useGateway()
```

This could be triggered by a button, for example:

```jsx
<button onclick={requestGatewayToken}>Validate your wallet</button> 
```

Calling this function should open an iframe connected to the Civic Gatekeeper, which will guide the user through a flow to verify their identity and other prerequisites.

### Reading the gateway state
Besides the `refreshGatewayToken` function, the `useGateway` hook also exposes some state variables to indicate the status of the Civic Pass request flows and the state of the token itself.

```jsx
const { gatewayStatus, gatewayToken } = useGateway();
```
#
| Property | Description | Type |
| --- | --- | --- |
| **gatewayStatus** | Indicates the overall status of the Civic Pass. This should ideally displayed to the user. Some states are linked to an on-chain gateway token, while others indicate progress or error conditions during which a gateway token might not exist.  | `GatewayStatus` from `@civic/solana-gateway-react` |
| **gatewayToken** | Represents the on-chain Solana structure for the gateway token. This will only be defined if the on-chain token is ACTIVE and dApp usage should be allowed. If the token does not exist or is in a non-active state (e.g. Frozen), this state variable will be undefined . The dApp could disable certain parts of the UI when gatewayToken is `undefined` to prevent dApp usage. This complements the on-chain Rust check, but should not replace it. | `GatewayToken` from `@identity.com/solana-gateway-ts` |

### The Gateway Status
The following is a list of all the possible states of the Civic Pass

### Statuses where a Civic Pass exists
| Status | Description | Behaviour when triggered |
| --- | --- | --- |
| `ACTIVE` | The Civic Pass is Active. The user can trade. | Opens the Civic Pass modal dialog with a user-friendly explanation of the status. |
| `EXPIRED` | The Civic Pass has expired An IP check and proof of wallet ownership are required to refresh it. | Proof of wallet ownership is automatically initiated |
| `FROZEN` | The Pass has been frozen, for example because the user connected from a blocked IP | Opens the Civic Pass modal dialog with a user-friendly explanation of the status. |
| `REVOKED` | The Pass has been revoked, for example because the user connected from a banned IP | Opens the Civic Pass modal dialog with a user-friendly explanation of the status. |

### Statuses where a Civic Pass may not exist yet

| Status | Description | Behaviour when triggered |
| --- | --- | --- |
| `UNKNOWN` | No user wallet is connected or no gatekeeper network set | *None* |
| `CHECKING` | Checking whether a Pass exists for the connected wallet. | *None* |
| `NOT_REQEUSTED` | The wallet is connected but no Pass has been requested yet. | Opens the Civic Pass modal dialog and initiates the token request flow |
| `COLLECTING_USER_INFORMATION` | The Pass request is in progress (the wallet owner is undergoing KYC) | *None* |
| `CONFIRM_WALLET_TRANSACTION` | The user needs to confirm wallet ownership on their wallet | Opens the Civic Pass modal dialog with a user-friendly explanation of the status. |
| `IN_REVIEW` | The Pass has been requested and the Gatekeeper is reviewing the request | Opens the Civic Pass modal dialog with a user-friendly explanation of the status. |

### Error statuses
| Status | Description | Behaviour when triggered |
| --- | --- | --- |
| `LOCATION_NOT_SUPPORTED` | The user's location is not currently supported | Opens the Civic Pass modal dialog with a user-friendly explanation of the status. |
| `REJECTED` | The token requests has been rejected by the Gatekeeper | Opens the Civic Pass modal dialog with a user-friendly explanation of the status. |

## Complete example
Here is an example of a React app with one component called `TradingComponent`. The component is wrapped inside Civic's `GatewayProvider` so it can access the Civic Pass state through the `useGateway` hook.

There are two buttons:

- The `IdentityButton` is provided by Civic. The user clicks this button to start the verification process. The button also shows the current state of the Civic Pass.
- The `Trade` button represents the dApp functionality that should be protected by Civic Pass. The `{gatewayToken && <button...` expression hides the button until a valid gatewayToken is found. This `gatewayToken` must also be passed to smart contracts as outlined in the [On-Chain Integration](./on-chain-integration) section.

### Install dependencies:

```shell
yarn add @civic/solana-gateway-react
yarn add @solana/web3.js
```
#
```typescript jsx
import { Keypair, PublicKey, Transaction } from '@solana/web3.js';
import { GatewayProvider, useGateway, IdentityButton } from '@civic/solana-gateway-react';


// Contact your Civic representative for the correct Gatekeeper Network to use.
const gatekeeperNetwork = new PublicKey('gatbGF9DvLAw3kWyn1EmH5Nh1Sqp8sTukF7yaQpSc71');

// In a real app the wallet would be provided by the user.
const userKeypair: Keypair = Keypair.generate();

// This Wallet interface is widely used, for e.g. by https://github.com/project-serum/sol-wallet-adapter
type Wallet = { publicKey: PublicKey, signTransaction: (tx: Transaction) => Promise<Transaction> }
const dummyWallet: Wallet = {
  publicKey: userKeypair.publicKey,
  signTransaction: async (tx: Transaction): Promise<Transaction> => {
    // In a real app, the user will be asked to sign the transaction.
    tx.sign(userKeypair);
    return tx;
  }
};

function TradingComponent() {
  // gatewayToken will be defined once the user has a valid Civic Pass.
  // The token must also be passed to smart contracts that integrate with Civic Pass.
  const { gatewayToken } = useGateway();

  return <div>
    {/* The user will click this IdentityButton to request a Civic Pass */}
    <IdentityButton />
    <div>
       {/* This button represents the functionality that should be secured behind a Civic Pass */}
      {gatewayToken && <button>Trade</button>}
    </div>
    <div>
      {!gatewayToken && <span>You need a Civic Pass to use this dApp</span>}
    </div>
  </div>
}

function App() {
  return <GatewayProvider
      wallet={dummyWallet}
      gatekeeperNetwork={gatekeeperNetwork}
>
  <TradingComponent/>
</GatewayProvider>
}

export default App;

```
