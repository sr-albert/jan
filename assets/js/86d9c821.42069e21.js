"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7364],{52147:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=i(85893),t=i(11151);const s={title:"Engine"},l=void 0,a={id:"docs/engineering/engine",title:"Engine",description:"Currently Under Development",source:"@site/docs/docs/engineering/engine.md",sourceDirName:"docs/engineering",slug:"/docs/engineering/engine",permalink:"/docs/engineering/engine",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/docs/engineering/engine.md",tags:[],version:"current",lastUpdatedBy:"hiro",lastUpdatedAt:1703148207,formattedLastUpdatedAt:"Dec 21, 2023",frontMatter:{title:"Engine"},sidebar:"docsSidebar",previous:{title:"Chats",permalink:"/docs/engineering/chats"},next:{title:"Files",permalink:"/docs/engineering/files"}},d={},o=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Engine Default Parameter Files",id:"engine-default-parameter-files",level:2},{value:"Example",id:"example",level:3},{value:"Adding an Engine",id:"adding-an-engine",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Currently Under Development"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"In the Jan application, engines serve as primary entities with the following capabilities:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Engine will be installed through ",(0,r.jsx)(n.code,{children:"inference-extensions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Models will depend on engines to do ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Inference_engine",children:"inference"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Engine configuration and required metadata will be stored in a json file."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Default parameters for engines are stored in JSON files located in the ",(0,r.jsx)(n.code,{children:"/engines"})," folder."]}),"\n",(0,r.jsxs)(n.li,{children:["These parameter files are named uniquely with ",(0,r.jsx)(n.code,{children:"engine_id"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Engines are referenced directly using ",(0,r.jsx)(n.code,{children:"engine_id"})," in the ",(0,r.jsx)(n.code,{children:"model.json"})," file."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"jan/\nengines/\nnitro.json\nopenai.json\n.....\n"})}),"\n",(0,r.jsx)(n.h2,{id:"engine-default-parameter-files",children:"Engine Default Parameter Files"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Each inference engine requires default parameters to function in cases where user-provided parameters are absent."}),"\n",(0,r.jsx)(n.li,{children:"These parameters are stored in JSON files, structured as simple key-value pairs."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of an engine file for ",(0,r.jsx)(n.code,{children:"engine_id"})," ",(0,r.jsx)(n.code,{children:"nitro"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n    "ctx_len": 512,\n    "ngl": 100,\n    "embedding": false,\n    "n_parallel": 1,\n    "cont_batching": false\n    "prompt_template": "<|im_start|>system\\n{system_message}<|im_end|>\\n<|im_start|>user\\n{prompt}<|im_end|>\\n<|im_start|>assistant"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For detailed engine parameters, refer to: ",(0,r.jsx)(n.a,{href:"https://nitro.jan.ai/features/load-unload#table-of-parameters",children:"Nitro's Model Settings"})]}),"\n",(0,r.jsx)(n.h2,{id:"adding-an-engine",children:"Adding an Engine"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Engine parameter files are automatically generated upon installing an ",(0,r.jsx)(n.code,{children:"inference-extension"})," in the Jan application."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var r=i(67294);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);