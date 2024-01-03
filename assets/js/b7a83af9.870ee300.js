"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={slug:"/",sidebar_position:0},a="IBC-Go Documentation",c={unversionedId:"intro",id:"version-v8.0.x/intro",title:"IBC-Go Documentation",description:"Welcome to the documentation for IBC-Go, the Golang implementation of the Inter-Blockchain Communication Protocol! Looking for information on ibc-rs? Click here to go to the ibc-rs github repo.",source:"@site/versioned_docs/version-v8.0.x/00-intro.md",sourceDirName:".",slug:"/",permalink:"/v8/",draft:!1,tags:[],version:"v8.0.x",sidebarPosition:0,frontMatter:{slug:"/",sidebar_position:0},sidebar:"defaultSidebar",next:{title:"Overview",permalink:"/v8/ibc/overview"}},s={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ibc-go-documentation"},"IBC-Go Documentation"),(0,r.kt)("p",null,"Welcome to the documentation for IBC-Go, the Golang implementation of the Inter-Blockchain Communication Protocol! Looking for information on ibc-rs? ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-rs"},"Click here to go to the ibc-rs github repo"),"."),(0,r.kt)("p",null,"The Inter-Blockchain Communication Protocol (IBC) is an end-to-end, connection-oriented, stateful protocol for reliable, ordered, and authenticated communication between heterogeneous blockchains arranged in an unknown and dynamic topology."),(0,r.kt)("p",null,"IBC is a protocol that allows blockchains to talk to each other. Chains that speak IBC can share any type of data as long as it's encoded in bytes, enabling the industry\u2019s most feature-rich cross-chain interactions. IBC is secure and permissionless."),(0,r.kt)("p",null,"The protocol realizes this interoperability by specifying a set of data structures, abstractions, and semantics that can be implemented by any distributed ledger that satisfies a small set of requirements."),(0,r.kt)("p",null,"IBC can be used to build a wide range of cross-chain applications that include token transfers, atomic swaps, multi-chain smart contracts (with or without mutually comprehensible VMs), cross-chain account control, and data and code sharding of various kinds."))}m.isMDXComponent=!0}}]);