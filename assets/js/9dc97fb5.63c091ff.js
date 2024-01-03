"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?i.createElement(b,r(r({ref:t},c),{},{components:a})):i.createElement(b,r({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=a(87462),n=(a(67294),a(3905));const l={title:"Capability Module",sidebar_label:"Capability Module",sidebar_position:12,slug:"/ibc/capability-module"},r="Capability Module",o={unversionedId:"ibc/capability-module",id:"ibc/capability-module",title:"Capability Module",description:"Overview",source:"@site/docs/01-ibc/12-capability-module.md",sourceDirName:"01-ibc",slug:"/ibc/capability-module",permalink:"/main/ibc/capability-module",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Capability Module",sidebar_label:"Capability Module",sidebar_position:12,slug:"/ibc/capability-module"},sidebar:"defaultSidebar",previous:{title:"Troubleshooting",permalink:"/main/ibc/troubleshooting"},next:{title:"Overview",permalink:"/main/apps/transfer/overview"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Contents",id:"contents",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Capabilities",id:"capabilities",level:3},{value:"Stores",id:"stores",level:3},{value:"State",id:"state",level:2},{value:"Persisted KV store",id:"persisted-kv-store",level:3},{value:"In-memory KV store",id:"in-memory-kv-store",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"capability-module"},"Capability Module"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"modules/capability")," is an implementation of a Cosmos SDK module, per ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-003-dynamic-capability-store.md"},"ADR 003"),", that allows for provisioning, tracking, and authenticating multi-owner capabilities at runtime."),(0,n.kt)("p",null,"The keeper maintains two states: persistent and ephemeral in-memory. The persistent\nstore maintains a globally unique auto-incrementing index and a mapping from\ncapability index to a set of capability owners that are defined as a module and\ncapability name tuple. The in-memory ephemeral state keeps track of the actual\ncapabilities, represented as addresses in local memory, with both forward and reverse indexes.\nThe forward index maps module name and capability tuples to the capability name. The\nreverse index maps between the module and capability name and the capability itself."),(0,n.kt)("p",null,'The keeper allows the creation of "scoped" sub-keepers which are tied to a particular\nmodule by name. Scoped keepers must be created at application initialization and\npassed to modules, which can then use them to claim capabilities they receive and\nretrieve capabilities which they own by name, in addition to creating new capabilities\n& authenticating capabilities passed by other modules. A scoped keeper cannot escape its scope,\nso a module cannot interfere with or inspect capabilities owned by other modules.'),(0,n.kt)("p",null,"The keeper provides no other core functionality that can be found in other modules\nlike queriers, REST and CLI handlers, and genesis state."),(0,n.kt)("h2",{id:"initialization"},"Initialization"),(0,n.kt)("p",null,"During application initialization, the keeper must be instantiated with a persistent\nstore key and an in-memory store key."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type App struct {\n  // ...\n\n  capabilityKeeper *capability.Keeper\n}\n\nfunc NewApp(...) *App {\n  // ...\n\n  app.capabilityKeeper = capabilitykeeper.NewKeeper(codec, persistentStoreKey, memStoreKey)\n}\n")),(0,n.kt)("p",null,"After the keeper is created, it can be used to create scoped sub-keepers which\nare passed to other modules that can create, authenticate, and claim capabilities.\nAfter all the necessary scoped keepers are created and the state is loaded, the\nmain capability keeper must be sealed to prevent further scoped keepers from\nbeing created."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func NewApp(...) *App {\n  // ...\n\n  // Creating a scoped keeper\n  scopedIBCKeeper := app.CapabilityKeeper.ScopeToModule(ibchost.ModuleName)\n\n  // Seal the capability keeper to prevent any further modules from creating scoped\n  // sub-keepers.\n  app.capabilityKeeper.Seal()\n\n  return app\n}\n")),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#capability-module"},(0,n.kt)("inlineCode",{parentName:"a"},"modules/capability")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#initialization"},"Initialization")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#contents"},"Contents")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#concepts"},"Concepts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#capabilities"},"Capabilities")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#stores"},"Stores")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#state"},"State"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#persisted-kv-store"},"Persisted KV store")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#in-memory-kv-store"},"In-memory KV store"))))))),(0,n.kt)("h2",{id:"concepts"},"Concepts"),(0,n.kt)("h3",{id:"capabilities"},"Capabilities"),(0,n.kt)("p",null,"Capabilities are multi-owner. A scoped keeper can create a capability via ",(0,n.kt)("inlineCode",{parentName:"p"},"NewCapability"),"\nwhich creates a new unique, unforgeable object-capability reference. The newly\ncreated capability is automatically persisted; the calling module need not call\n",(0,n.kt)("inlineCode",{parentName:"p"},"ClaimCapability"),". Calling ",(0,n.kt)("inlineCode",{parentName:"p"},"NewCapability")," will create the capability with the\ncalling module and name as a tuple to be treated the capabilities first owner."),(0,n.kt)("p",null,"Capabilities can be claimed by other modules which add them as owners. ",(0,n.kt)("inlineCode",{parentName:"p"},"ClaimCapability"),"\nallows a module to claim a capability key which it has received from another\nmodule so that future ",(0,n.kt)("inlineCode",{parentName:"p"},"GetCapability")," calls will succeed. ",(0,n.kt)("inlineCode",{parentName:"p"},"ClaimCapability")," MUST\nbe called if a module which receives a capability wishes to access it by name in\nthe future. Again, capabilities are multi-owner, so if multiple modules have a\nsingle Capability reference, they will all own it. If a module receives a capability\nfrom another module but does not call ",(0,n.kt)("inlineCode",{parentName:"p"},"ClaimCapability"),", it may use it in the executing\ntransaction but will not be able to access it afterwards."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AuthenticateCapability")," can be called by any module to check that a capability\ndoes in fact correspond to a particular name (the name can be un-trusted user input)\nwith which the calling module previously associated it."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GetCapability")," allows a module to fetch a capability which it has previously\nclaimed by name. The module is not allowed to retrieve capabilities which it does\nnot own."),(0,n.kt)("h3",{id:"stores"},"Stores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MemStore"),(0,n.kt)("li",{parentName:"ul"},"KeyStore")),(0,n.kt)("h2",{id:"state"},"State"),(0,n.kt)("h3",{id:"persisted-kv-store"},"Persisted KV store"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Global unique capability index"),(0,n.kt)("li",{parentName:"ol"},"Capability owners")),(0,n.kt)("p",null,"Indexes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unique index: ",(0,n.kt)("inlineCode",{parentName:"li"},'[]byte("index") -> []byte(currentGlobalIndex)')),(0,n.kt)("li",{parentName:"ul"},"Capability Index: ",(0,n.kt)("inlineCode",{parentName:"li"},'[]byte("capability_index") | []byte(index) -> ProtocolBuffer(CapabilityOwners)'))),(0,n.kt)("h3",{id:"in-memory-kv-store"},"In-memory KV store"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Initialized flag"),(0,n.kt)("li",{parentName:"ol"},"Mapping between the module and capability tuple and the capability name"),(0,n.kt)("li",{parentName:"ol"},"Mapping between the module and capability name and its index")),(0,n.kt)("p",null,"Indexes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Initialized flag: ",(0,n.kt)("inlineCode",{parentName:"li"},'[]byte("mem_initialized")')),(0,n.kt)("li",{parentName:"ul"},"RevCapabilityKey: ",(0,n.kt)("inlineCode",{parentName:"li"},'[]byte(moduleName + "/rev/" + capabilityName) -> []byte(index)')),(0,n.kt)("li",{parentName:"ul"},"FwdCapabilityKey: ",(0,n.kt)("inlineCode",{parentName:"li"},'[]byte(moduleName + "/fwd/" + capabilityPointerAddress) -> []byte(capabilityName)'))))}u.isMDXComponent=!0}}]);