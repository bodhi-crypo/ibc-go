"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(n),d=l,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,c[1]=i;for(var o=2;o<r;o++)c[o]=n[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={title:"Client",sidebar_label:"Client",sidebar_position:7,slug:"/ibc/light-clients/wasm/client"},c="Client",i={unversionedId:"light-clients/wasm/client",id:"version-v8.0.x/light-clients/wasm/client",title:"Client",description:"CLI",source:"@site/versioned_docs/version-v8.0.x/03-light-clients/04-wasm/08-client.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/client",permalink:"/v8/ibc/light-clients/wasm/client",draft:!1,tags:[],version:"v8.0.x",sidebarPosition:7,frontMatter:{title:"Client",sidebar_label:"Client",sidebar_position:7,slug:"/ibc/light-clients/wasm/client"},sidebar:"defaultSidebar",previous:{title:"Contracts",permalink:"/v8/ibc/light-clients/wasm/contracts"},next:{title:"Migrations",permalink:"/v8/ibc/light-clients/wasm/migrations"}},s={},o=[{value:"CLI",id:"cli",level:2},{value:"Transactions",id:"transactions",level:3},{value:"<code>store-code</code>",id:"store-code",level:4},{value:"Query",id:"query",level:3},{value:"<code>checksums</code>",id:"checksums",level:4},{value:"<code>code</code>",id:"code",level:4},{value:"gRPC",id:"grpc",level:2},{value:"<code>Checksums</code>",id:"checksums-1",level:3},{value:"<code>Code</code>",id:"code-1",level:3}],p={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client"},"Client"),(0,l.kt)("h2",{id:"cli"},"CLI"),(0,l.kt)("p",null,"A user can query and interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"08-wasm")," module using the CLI. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," flag to discover the available commands:"),(0,l.kt)("h3",{id:"transactions"},"Transactions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"08-wasm")," submodule."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd tx ibc-wasm --help\n")),(0,l.kt)("h4",{id:"store-code"},(0,l.kt)("inlineCode",{parentName:"h4"},"store-code")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"store-code")," command allows users to submit a governance proposal with a ",(0,l.kt)("inlineCode",{parentName:"p"},"MsgStoreCode")," to store the byte code of a Wasm light client contract."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd tx ibc-wasm store-code [path/to/wasm-file] [flags]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"path/to/wasm-file")," is the path to the ",(0,l.kt)("inlineCode",{parentName:"p"},".wasm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".wasm.gz")," file."),(0,l.kt)("h3",{id:"query"},"Query"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,l.kt)("inlineCode",{parentName:"p"},"08-wasm")," state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query ibc-wasm --help\n")),(0,l.kt)("h4",{id:"checksums"},(0,l.kt)("inlineCode",{parentName:"h4"},"checksums")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"checksums")," command allows users to query the list of checksums of Wasm light client contracts stored in the Wasm VM via the ",(0,l.kt)("inlineCode",{parentName:"p"},"MsgStoreCode"),". The checksums are hex-encoded."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query ibc-wasm checksums [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query ibc-wasm checksums\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'checksums:\n- c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64\npagination:\n  next_key: null\n  total: "1"\n')),(0,l.kt)("h4",{id:"code"},(0,l.kt)("inlineCode",{parentName:"h4"},"code")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," command allows users to query the Wasm byte code of a light client contract given the provided input checksum."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./simd q ibc-wasm code\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"simd query ibc-wasm code c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"code: AGFzb...AqBBE=\n")),(0,l.kt)("h2",{id:"grpc"},"gRPC"),(0,l.kt)("p",null,"A user can query the ",(0,l.kt)("inlineCode",{parentName:"p"},"08-wasm")," module using gRPC endpoints."),(0,l.kt)("h3",{id:"checksums-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"Checksums")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Checksums")," endpoint allows users to query the list of checksums of Wasm light client contracts stored in the Wasm VM via the ",(0,l.kt)("inlineCode",{parentName:"p"},"MsgStoreCode"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ibc.lightclients.wasm.v1.Query/Checksums\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"grpcurl -plaintext \\\n  -d '{}' \\\n  localhost:9090 \\\n  ibc.lightclients.wasm.v1.Query/Checksums\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "checksums": [\n    "c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64"\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,l.kt)("h3",{id:"code-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"Code")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Code")," endpoint allows users to query the Wasm byte code of a light client contract given the provided input checksum."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ibc.lightclients.wasm.v1.Query/Code\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n  -d \'{"checksum":"c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64"}\' \\\n  localhost:9090 \\\n  ibc.lightclients.wasm.v1.Query/Code\n')),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "code": AGFzb...AqBBE=\n}\n')))}m.isMDXComponent=!0}}]);