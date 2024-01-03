"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={},o="ADR 026: IBC Client Recovery Mechanisms",l={unversionedId:"adr-026-ibc-client-recovery-mechanisms",id:"adr-026-ibc-client-recovery-mechanisms",title:"ADR 026: IBC Client Recovery Mechanisms",description:"Changelog",source:"@site/architecture/adr-026-ibc-client-recovery-mechanisms.md",sourceDirName:".",slug:"/adr-026-ibc-client-recovery-mechanisms",permalink:"/architecture/adr-026-ibc-client-recovery-mechanisms",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ADR 025: IBC Passive Channels",permalink:"/architecture/adr-025-ibc-passive-channels"},next:{title:"ADR 27: Add support for Wasm based light client",permalink:"/architecture/adr-027-ibc-wasm"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Summary",id:"summary",level:3},{value:"Exceptional cases",id:"exceptional-cases",level:3},{value:"Security model",id:"security-model",level:3},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-026-ibc-client-recovery-mechanisms"},"ADR 026: IBC Client Recovery Mechanisms"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2020/06/23: Initial version"),(0,a.kt)("li",{parentName:"ul"},"2020/08/06: Revisions per review & to reference version"),(0,a.kt)("li",{parentName:"ul"},"2021/01/15: Revision to support substitute clients for unfreezing"),(0,a.kt)("li",{parentName:"ul"},"2021/05/20: Revision to simplify consensus state copying, remove initial height"),(0,a.kt)("li",{parentName:"ul"},"2022/04/08: Revision to deprecate AllowUpdateAfterExpiry and AllowUpdateAfterMisbehaviour"),(0,a.kt)("li",{parentName:"ul"},"2022/07/15: Revision to allow updating of TrustingPeriod"),(0,a.kt)("li",{parentName:"ul"},"2023/09/05: Revision to migrate from gov v1beta1 to gov v1")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Accepted")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"At launch, IBC will be a novel protocol, without an experienced user-base. At the protocol layer, it is not possible to distinguish between client expiry or misbehaviour due to genuine faults (Byzantine behavior) and client expiry or misbehaviour due to user mistakes (failing to update a client, or accidentally double-signing). In the base IBC protocol and ICS 20 fungible token transfer implementation, if a client can no longer be updated, funds in that channel will be permanently locked and can no longer be transferred. To the degree that it is safe to do so, it would be preferable to provide users with a recovery mechanism which can be utilised in these exceptional cases."),(0,a.kt)("h3",{id:"exceptional-cases"},"Exceptional cases"),(0,a.kt)("p",null,"The state of concern is where a client associated with connection(s) and channel(s) can no longer be updated. This can happen for several reasons:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The chain which the client is following has halted and is no longer producing blocks/headers, so no updates can be made to the client"),(0,a.kt)("li",{parentName:"ol"},"The chain which the client is following has continued to operate, but no relayer has submitted a new header within the unbonding period, and the client has expired",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"This could be due to real misbehaviour (intentional Byzantine behaviour) or merely a mistake by validators, but the client cannot distinguish these two cases"))),(0,a.kt)("li",{parentName:"ol"},"The chain which the client is following has experienced a misbehaviour event, and the client has been frozen & thus can no longer be updated")),(0,a.kt)("h3",{id:"security-model"},"Security model"),(0,a.kt)("p",null,"Two-thirds of the validator set (the quorum for governance, module participation) can already sign arbitrary data, so allowing governance to manually force-update a client with a new header after a delay period does not substantially alter the security model."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"We elect not to deal with chains which have actually halted, which is necessarily Byzantine behaviour and in which case token recovery is not likely possible anyways (in-flight packets cannot be timed-out, but the relative impact of that is minor)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Require Tendermint light clients (ICS 07) to be created with the following additional flags"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"allow_update_after_expiry")," (boolean, default true). Note that this flag has been deprecated, it remains to signal intent but checks against this value will not be enforced."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Require Tendermint light clients (ICS 07) to expose the following additional internal query functions"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Expired() boolean"),", which returns whether or not the client has passed the trusting period since the last update (in which case no headers can be validated)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Require Tendermint light clients (ICS 07) & solo machine clients (ICS 06) to be created with the following additional flags"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"allow_update_after_misbehaviour")," (boolean, default true). Note that this flag has been deprecated, it remains to signal intent but checks against this value will not be enforced."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Require Tendermint light clients (ICS 07) to expose the following additional state mutation functions"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Unfreeze()"),", which unfreezes a light client after misbehaviour and clears any frozen height previously set"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new governance proposal with ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRecoverClient"),"."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Create a new Msg with two client identifiers (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),") and a signer."),(0,a.kt)("li",{parentName:"ol"},"The first client identifier is the proposed client to be updated. This client must be either frozen or expired."),(0,a.kt)("li",{parentName:"ol"},"The second client is a substitute client. It carries all the state for the client which may be updated. It must have identical client and chain parameters to the client which may be updated (except for latest height, frozen height, and chain-id). It should be continually updated during the voting period."),(0,a.kt)("li",{parentName:"ol"},"If this governance proposal passes, the client on trial will be updated to the latest state of the substitute."),(0,a.kt)("li",{parentName:"ol"},"The signer must be the authority set for the ibc module.")),(0,a.kt)("p",{parentName:"li"},"Previously, ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowUpdateAfterExpiry")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AllowUpdateAfterMisbehaviour")," were used to signal the recovery options for an expired or frozen client, and governance proposals were not allowed to overwrite the client if these parameters were set to false. However, this has now been deprecated because a code migration can overwrite the client and consensus states regardless of the value of these parameters. If governance would vote to overwrite a client or consensus state, it is likely that governance would also be willing to perform a code migration to do the same."),(0,a.kt)("p",{parentName:"li"},"In addition, ",(0,a.kt)("inlineCode",{parentName:"p"},"TrustingPeriod")," was initially not allowed to be updated by a client upgrade proposal. However, due to the number of situations experienced in production where the ",(0,a.kt)("inlineCode",{parentName:"p"},"TrustingPeriod")," of a client should be allowed to be updated because of ie: initial misconfiguration for a canonical channel, governance should be allowed to update this client parameter."),(0,a.kt)("p",{parentName:"li"},"In versions older than ibc-go v8, ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRecoverClient")," was a governance proposal type ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientUpdateProposal"),". It has been removed and replaced by ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRecoverClient")," in the migration from governance v1beta1 to governance v1."),(0,a.kt)("p",{parentName:"li"},"Note that this should NOT be lightly updated, as there may be a gap in time between when misbehaviour has occurred and when the evidence of misbehaviour is submitted. For example, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnbondingPeriod")," is 2 weeks and the ",(0,a.kt)("inlineCode",{parentName:"p"},"TrustingPeriod")," has also been set to two weeks, a validator could wait until right before ",(0,a.kt)("inlineCode",{parentName:"p"},"UnbondingPeriod")," finishes, submit false information, then unbond and exit without being slashed for misbehaviour. Therefore, we recommend that the trusting period for the 07-tendermint client be set to 2/3 of the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnbondingPeriod"),"."))),(0,a.kt)("p",null,"Note that clients frozen due to misbehaviour must wait for the evidence to expire to avoid becoming refrozen."),(0,a.kt)("p",null,"This ADR does not address planned upgrades, which are handled separately as per the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/client/ics-007-tendermint-client#upgrades"},"specification"),"."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Establishes a mechanism for client recovery in the case of expiry"),(0,a.kt)("li",{parentName:"ul"},"Establishes a mechanism for client recovery in the case of misbehaviour"),(0,a.kt)("li",{parentName:"ul"},"Constructing an ClientUpdate Proposal is as difficult as creating a new client")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Additional complexity in client creation which must be understood by the user"),(0,a.kt)("li",{parentName:"ul"},"Coping state of the substitute adds complexity"),(0,a.kt)("li",{parentName:"ul"},"Governance participants must vote on a substitute client")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("p",null,"No neutral consequences."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ics/issues/421"},"Prior discussion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ics/issues/439"},"Epoch number discussion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ics/issues/445"},"Upgrade plan discussion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/issues/3672"},"Migration from gov v1beta1 to gov v1"))))}u.isMDXComponent=!0}}]);