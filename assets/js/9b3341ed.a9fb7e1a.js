"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[585],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9637:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:4},s="UI integration: Civic's React component",p={unversionedId:"civic-pass/ui-integration",id:"civic-pass/ui-integration",isDocsHomePage:!1,title:"UI integration: Civic's React component",description:"Civic has provided a plug and play React Component. This provides an easy way to request a Gateway Token from a decentralised Application with minimal setup.",source:"@site/docs/civic-pass/ui-integration.md",sourceDirName:"civic-pass",slug:"/civic-pass/ui-integration",permalink:"/docusaurus/docs/civic-pass/ui-integration",editUrl:"https://github.com/s4nt14go/docusaurus/edit/main/docs/civic-pass/ui-integration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"On-chain integration",permalink:"/docusaurus/docs/civic-pass/on-chain-integration"},next:{title:"Section 1",permalink:"/docusaurus/docs/api-libs/seccion1"}},d=[{value:"Basic Setup",id:"basic-setup",children:[]},{value:"Advanced Setup",id:"advanced-setup",children:[]},{value:"The Identity Button",id:"the-identity-button",children:[]},{value:"The Gateway Provider",id:"the-gateway-provider",children:[]},{value:"The useGateway hook",id:"the-usegateway-hook",children:[{value:"Requesting a gateway token",id:"requesting-a-gateway-token",children:[]},{value:"Reading the gateway state",id:"reading-the-gateway-state",children:[]},{value:"The Gateway Status",id:"the-gateway-status",children:[]},{value:"Statuses where a Civic Pass exists",id:"statuses-where-a-civic-pass-exists",children:[]},{value:"Statuses where a Civic Pass may not exist yet",id:"statuses-where-a-civic-pass-may-not-exist-yet",children:[]},{value:"Error statuses",id:"error-statuses",children:[]}]},{value:"Complete example",id:"complete-example",children:[{value:"Install dependencies:",id:"install-dependencies",children:[]}]}],u={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ui-integration-civics-react-component"},"UI integration: Civic's React component"),(0,i.kt)("p",null,"Civic has provided a plug and play React Component. This provides an easy way to request a Gateway Token from a decentralised Application with minimal setup."),(0,i.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Install the React component")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @civic/solana-gateway-react\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Include the Gateway Context Provider (",(0,i.kt)("a",{parentName:"strong",href:"https://app.gitbook.com/@civic-1/s/gateway/~/drafts/-MkIXrKS63CteWYs62ME/civic-gateway-dapp-integration-guide#the-gateway-provider"},"more info"),")")),(0,i.kt)("p",{parentName:"li"}," You can access the Gateway token by using the Gateway Provider that is part of the library. For a list of required and optional properties, please review the detailed section on the ",(0,i.kt)("a",{parentName:"p",href:"https://app.gitbook.com/@civic-1/s/gateway/~/drafts/-MkIXrKS63CteWYs62ME/civic-gateway-dapp-integration-guide#the-gateway-provider"},"Gateway Context Provider"),"."),(0,i.kt)("p",{parentName:"li"},"Note: The useGateway hook will only work in components wrapped by ",(0,i.kt)("inlineCode",{parentName:"p"},"<GatewayProvider>"),". The Civic Pass state cannot be used outside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<GatewayProvider>")," context. It's suggested to place the ",(0,i.kt)("inlineCode",{parentName:"p"},"<GatewayProvider>")," as high up in the component tree as possible, to ensure the Civic Pass state is available across the dApp."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { GatewayProvider } from "@civic/solana-gateway-react";\n\n<GatewayProvider  wallet={wallet} gatekeeperNetwork={gatekeeperNetwork}>\n  {children}\n</GatewayProvider>\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Finally add the Identity Button")),(0,i.kt)("p",{parentName:"li"},"The IdentityButton must be inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"<GatewayProvider>")," context to ensure status updates are automatically reflected by the button."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import IdentityButton from '@civic/solana-gateway-react';\n...\n<IdentityButton />\n")))),(0,i.kt)("h2",{id:"advanced-setup"},"Advanced Setup"),(0,i.kt)("p",null,"It is also possible to use a custom button and / or iframe wrapper. See the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@civic/solana-gateway-react"},"documentation on npm")," for more details."),(0,i.kt)("h2",{id:"the-identity-button"},"The Identity Button"),(0,i.kt)("p",null,"The IdentityButton is a reference implementation of a UI component to communicate to dApp users the current status of their Gateway Token, or Gateway Token request. It changes appearance with text and icons to indicate when the user needs to take action and can be clicked by the user at any point in the process. The initial click for a new user will initiate the flow for the user to create a new Gateway Token. Once the user has gone through KYC and submitted their Gateway Token request via the Civic compliance iFrame, any subsequent click will launch the Civic compliance iframe with a screen describing the current status of the flow."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"mode")),(0,i.kt)("td",{parentName:"tr",align:null},"The default setting of the button is dark. We also provide a ",(0,i.kt)("inlineCode",{parentName:"td"},"light mode"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"DARK ","|"," LIGHT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"animation")),(0,i.kt)("td",{parentName:"tr",align:null},"The button provides a neat animation on hover. The default value is ",(0,i.kt)("inlineCode",{parentName:"td"},"dark mode"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"true ","|"," false")))),(0,i.kt)("h1",{id:""}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import {\n  IdentityButton,\n  ButtonMode,\n} from '@civic/solana-gateway-react';\n\n<IdentityButton mode={ButtonMode.LIGHT} animation={true} />\n")),(0,i.kt)("h2",{id:"the-gateway-provider"},"The Gateway Provider"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"GatewayProvider")," is a React component that gives children access to the GatewayContext through the ",(0,i.kt)("strong",{parentName:"p"},"useGateway")," function. This component holds the state for a given Gateway Token or Gateway Token request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { GatewayProvider } from "@civic/solana-gateway-react";\n\n<GatewayProvider\n  wallet={wallet}\n  gatekeeperNetwork={gatekeeperNetwork}>\n</GatewayProvider>\n')),(0,i.kt)("h1",{id:"-1"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"wallet")),(0,i.kt)("td",{parentName:"tr",align:null},"An object representing the user's wallet. This may be ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," if no wallet has been connected to the dApp yet."),(0,i.kt)("td",{parentName:"tr",align:null},"An object with two properties ( see below )")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"wallet.publicKey")),(0,i.kt)("td",{parentName:"tr",align:null},"The user wallet's public key"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")," from ",(0,i.kt)("inlineCode",{parentName:"td"},"@solana/web3.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"wallet.signTransaction")),(0,i.kt)("td",{parentName:"tr",align:null},"A function that asks the user's wallet to sign a transaction."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(transaction: Transaction) => Promise<Transaction>")," where ",(0,i.kt)("inlineCode",{parentName:"td"},"Transaction")," is from ",(0,i.kt)("inlineCode",{parentName:"td"},"@solana/web3.js"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"gatekeeperNetwork")),(0,i.kt)("td",{parentName:"tr",align:null},"The public key of the gatekeeper network. This needs to match the network within which the Civic gatekeeper issues tokens."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PublicKey")," from ",(0,i.kt)("inlineCode",{parentName:"td"},"@solana/web3.js"))))),(0,i.kt)("h2",{id:"the-usegateway-hook"},"The useGateway hook"),(0,i.kt)("p",null,"The React component exposes state about the process of requesting a gateway token, as well as the token itself. It also provides a function to request a new gateway token. These can be accessed through the ",(0,i.kt)("inlineCode",{parentName:"p"},"useGateway")," hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useGateway } from "@civic/solana-gateway-react";\n')),(0,i.kt)("h3",{id:"requesting-a-gateway-token"},"Requesting a gateway token"),(0,i.kt)("p",null,"A function is provided to initiate a request for a new gateway token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const { requestGatewayToken } = useGateway()\n")),(0,i.kt)("p",null,"This could be triggered by a button, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onclick={requestGatewayToken}>Validate your wallet</button> \n")),(0,i.kt)("p",null,"Calling this function should open an iframe connected to the Civic Gatekeeper, which will guide the user through a flow to verify their identity and other prerequisites."),(0,i.kt)("h3",{id:"reading-the-gateway-state"},"Reading the gateway state"),(0,i.kt)("p",null,"Besides the ",(0,i.kt)("inlineCode",{parentName:"p"},"refreshGatewayToken")," function, the ",(0,i.kt)("inlineCode",{parentName:"p"},"useGateway")," hook also exposes some state variables to indicate the status of the Civic Pass request flows and the state of the token itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const { gatewayStatus, gatewayToken } = useGateway();\n")),(0,i.kt)("h1",{id:"-2"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"gatewayStatus")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the overall status of the Civic Pass. This should ideally displayed to the user. Some states are linked to an on-chain gateway token, while others indicate progress or error conditions during which a gateway token might not exist."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GatewayStatus")," from ",(0,i.kt)("inlineCode",{parentName:"td"},"@civic/solana-gateway-react"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"gatewayToken")),(0,i.kt)("td",{parentName:"tr",align:null},"Represents the on-chain Solana structure for the gateway token. This will only be defined if the on-chain token is ACTIVE and dApp usage should be allowed. If the token does not exist or is in a non-active state (e.g. Frozen), this state variable will be undefined . The dApp could disable certain parts of the UI when gatewayToken is ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," to prevent dApp usage. This complements the on-chain Rust check, but should not replace it."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GatewayToken")," from ",(0,i.kt)("inlineCode",{parentName:"td"},"@identity.com/solana-gateway-ts"))))),(0,i.kt)("h3",{id:"the-gateway-status"},"The Gateway Status"),(0,i.kt)("p",null,"The following is a list of all the possible states of the Civic Pass"),(0,i.kt)("h3",{id:"statuses-where-a-civic-pass-exists"},"Statuses where a Civic Pass exists"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviour when triggered"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ACTIVE")),(0,i.kt)("td",{parentName:"tr",align:null},"The Civic Pass is Active. The user can trade."),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Civic Pass modal dialog with a user-friendly explanation of the status.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"EXPIRED")),(0,i.kt)("td",{parentName:"tr",align:null},"The Civic Pass has expired An IP check and proof of wallet ownership are required to refresh it."),(0,i.kt)("td",{parentName:"tr",align:null},"Proof of wallet ownership is automatically initiated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FROZEN")),(0,i.kt)("td",{parentName:"tr",align:null},"The Pass has been frozen, for example because the user connected from a blocked IP"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Civic Pass modal dialog with a user-friendly explanation of the status.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"REVOKED")),(0,i.kt)("td",{parentName:"tr",align:null},"The Pass has been revoked, for example because the user connected from a banned IP"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Civic Pass modal dialog with a user-friendly explanation of the status.")))),(0,i.kt)("h3",{id:"statuses-where-a-civic-pass-may-not-exist-yet"},"Statuses where a Civic Pass may not exist yet"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviour when triggered"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"UNKNOWN")),(0,i.kt)("td",{parentName:"tr",align:null},"No user wallet is connected or no gatekeeper network set"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"None"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CHECKING")),(0,i.kt)("td",{parentName:"tr",align:null},"Checking whether a Pass exists for the connected wallet."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"None"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"NOT_REQEUSTED")),(0,i.kt)("td",{parentName:"tr",align:null},"The wallet is connected but no Pass has been requested yet."),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Civic Pass modal dialog and initiates the token request flow")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"COLLECTING_USER_INFORMATION")),(0,i.kt)("td",{parentName:"tr",align:null},"The Pass request is in progress (the wallet owner is undergoing KYC)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"None"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CONFIRM_WALLET_TRANSACTION")),(0,i.kt)("td",{parentName:"tr",align:null},"The user needs to confirm wallet ownership on their wallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Civic Pass modal dialog with a user-friendly explanation of the status.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"IN_REVIEW")),(0,i.kt)("td",{parentName:"tr",align:null},"The Pass has been requested and the Gatekeeper is reviewing the request"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Civic Pass modal dialog with a user-friendly explanation of the status.")))),(0,i.kt)("h3",{id:"error-statuses"},"Error statuses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Behaviour when triggered"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LOCATION_NOT_SUPPORTED")),(0,i.kt)("td",{parentName:"tr",align:null},"The user's location is not currently supported"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Civic Pass modal dialog with a user-friendly explanation of the status.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"REJECTED")),(0,i.kt)("td",{parentName:"tr",align:null},"The token requests has been rejected by the Gatekeeper"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the Civic Pass modal dialog with a user-friendly explanation of the status.")))),(0,i.kt)("h2",{id:"complete-example"},"Complete example"),(0,i.kt)("p",null,"Here is an example of a React app with one component called ",(0,i.kt)("inlineCode",{parentName:"p"},"TradingComponent"),". The component is wrapped inside Civic's ",(0,i.kt)("inlineCode",{parentName:"p"},"GatewayProvider")," so it can access the Civic Pass state through the ",(0,i.kt)("inlineCode",{parentName:"p"},"useGateway")," hook."),(0,i.kt)("p",null,"There are two buttons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"IdentityButton")," is provided by Civic. The user clicks this button to start the verification process. The button also shows the current state of the Civic Pass."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Trade")," button represents the dApp functionality that should be protected by Civic Pass. The ",(0,i.kt)("inlineCode",{parentName:"li"},"{gatewayToken && <button...")," expression hides the button until a valid gatewayToken is found. This ",(0,i.kt)("inlineCode",{parentName:"li"},"gatewayToken")," must also be passed to smart contracts as outlined in the ",(0,i.kt)("a",{parentName:"li",href:"./on-chain-integration"},"On-Chain Integration")," section.")),(0,i.kt)("h3",{id:"install-dependencies"},"Install dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @civic/solana-gateway-react\nyarn add @solana/web3.js\n")),(0,i.kt)("h1",{id:"-3"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import { Keypair, PublicKey, Transaction } from '@solana/web3.js';\nimport { GatewayProvider, useGateway, IdentityButton } from '@civic/solana-gateway-react';\n\n\n// Contact your Civic representative for the correct Gatekeeper Network to use.\nconst gatekeeperNetwork = new PublicKey('gatbGF9DvLAw3kWyn1EmH5Nh1Sqp8sTukF7yaQpSc71');\n\n// In a real app the wallet would be provided by the user.\nconst userKeypair: Keypair = Keypair.generate();\n\n// This Wallet interface is widely used, for e.g. by https://github.com/project-serum/sol-wallet-adapter\ntype Wallet = { publicKey: PublicKey, signTransaction: (tx: Transaction) => Promise<Transaction> }\nconst dummyWallet: Wallet = {\n  publicKey: userKeypair.publicKey,\n  signTransaction: async (tx: Transaction): Promise<Transaction> => {\n    // In a real app, the user will be asked to sign the transaction.\n    tx.sign(userKeypair);\n    return tx;\n  }\n};\n\nfunction TradingComponent() {\n  // gatewayToken will be defined once the user has a valid Civic Pass.\n  // The token must also be passed to smart contracts that integrate with Civic Pass.\n  const { gatewayToken } = useGateway();\n\n  return <div>\n    {/* The user will click this IdentityButton to request a Civic Pass */}\n    <IdentityButton />\n    <div>\n       {/* This button represents the functionality that should be secured behind a Civic Pass */}\n      {gatewayToken && <button>Trade</button>}\n    </div>\n    <div>\n      {!gatewayToken && <span>You need a Civic Pass to use this dApp</span>}\n    </div>\n  </div>\n}\n\nfunction App() {\n  return <GatewayProvider\n      wallet={dummyWallet}\n      gatekeeperNetwork={gatekeeperNetwork}\n>\n  <TradingComponent/>\n</GatewayProvider>\n}\n\nexport default App;\n\n")))}c.isMDXComponent=!0}}]);