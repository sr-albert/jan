"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6986],{20893:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(85893),a=n(3905);const i={title:"Assistants"},r=void 0,l={id:"specs/assistants",title:"Assistants",description:"Assistants can use models and tools.",source:"@site/docs/specs/assistants.md",sourceDirName:"specs",slug:"/specs/assistants",permalink:"/specs/assistants",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/assistants.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1700739178,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Assistants"}},o={},c=[{value:"User Stories",id:"user-stories",level:2},{value:"Assistant Object",id:"assistant-object",level:2},{value:"Assistant lifecycle",id:"assistant-lifecycle",level:3},{value:"Assistants API",id:"assistants-api",level:2},{value:"Get list assistants",id:"get-list-assistants",level:3},{value:"Get assistant",id:"get-assistant",level:3},{value:"Create an assistant",id:"create-an-assistant",level:3},{value:"Modify an assistant",id:"modify-an-assistant",level:3},{value:"Delete Assistant",id:"delete-assistant",level:3},{value:"Assistants Filesystem",id:"assistants-filesystem",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Assistants can use models and tools."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["OpenAI Equivalent: ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/assistants",children:"https://platform.openai.com/docs/api-reference/assistants"})]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Jan's ",(0,t.jsx)(s.code,{children:"Assistants"})," are even more powerful than OpenAI due to customizable code in ",(0,t.jsx)(s.code,{children:"index.js"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"user-stories",children:"User Stories"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Users can download an assistant via a web URL"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Wireframes here"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Users can import an assistant from local directory"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Wireframes here"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Users can configure assistant settings"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Wireframes here"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"assistant-object",children:"Assistant Object"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"assistant.json"})}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["OpenAI Equivalen: ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/assistants/object",children:"https://platform.openai.com/docs/api-reference/assistants/object"})]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  // Jan specific properties\n  "avatar": "https://lala.png",\n  "thread_location": "ROOT/threads",  // Default to root (optional field)\n  // TODO: add moar\n\n  // OpenAI compatible properties: https://platform.openai.com/docs/api-reference/assistants\n  "id": "asst_abc123",\n  "object": "assistant",\n  "created_at": 1698984975,\n  "name": "Math Tutor",\n  "description": null,\n  "instructions": "...",\n  "tools": [\n    {\n      "type": "retrieval"\n    },\n    {\n      "type": "web_browsing"\n    }\n  ],\n  "file_ids": ["file_id"],\n  "models": ["<model_id>"],\n  "metadata": {}\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"assistant-lifecycle",children:"Assistant lifecycle"}),"\n",(0,t.jsx)(s.p,{children:"Assistant has 4 states (enum)"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"to_download"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"downloading"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"ready"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"running"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"assistants-api",children:"Assistants API"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["What would modifying Assistant do? (doesn't mutate ",(0,t.jsx)(s.code,{children:"index.js"}),"?)","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["By default, ",(0,t.jsx)(s.code,{children:"index.js"})," loads ",(0,t.jsx)(s.code,{children:"assistant.json"})," file and executes exactly like so. This supports builders with little time to write code."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"assistant.json"})," is 1 source of truth for the definitions of ",(0,t.jsx)(s.code,{children:"models"})," and ",(0,t.jsx)(s.code,{children:"built-in tools"})," that they can use it without writing more code."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"get-list-assistants",children:"Get list assistants"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["OpenAI Equivalent: ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/assistants/listAssistants",children:"https://platform.openai.com/docs/api-reference/assistants/listAssistants"})]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Example request"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'  curl {JAN_URL}/v1/assistants?order=desc&limit=20 \\\n    -H "Content-Type: application/json"\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Example response"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "object": "list",\n  "data": [\n    {\n      "id": "asst_abc123",\n      "object": "assistant",\n      "created_at": 1698982736,\n      "name": "Coding Tutor",\n      "description": null,\n      "models": ["model_zephyr_7b", "azure-openai-gpt4-turbo"],\n      "instructions": "You are a helpful assistant designed to make me better at coding!",\n      "tools": [],\n      "file_ids": [],\n      "metadata": {},\n      "state": "ready"\n    },\n  ],\n  "first_id": "asst_abc123",\n  "last_id": "asst_abc789",\n  "has_more": false\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"get-assistant",children:"Get assistant"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["OpenAI Equivalent: ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/assistants/getAssistant",children:"https://platform.openai.com/docs/api-reference/assistants/getAssistant"})]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Example request"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'  curl {JAN_URL}/v1/assistants/{assistant_id}   \\\n    -H "Content-Type: application/json"\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Example response"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "asst_abc123",\n  "object": "assistant",\n  "created_at": 1699009709,\n  "name": "HR Helper",\n  "description": null,\n  "models": ["model_zephyr_7b", "azure-openai-gpt4-turbo"],\n  "instructions": "You are an HR bot, and you have access to files to answer employee questions about company policies.",\n  "tools": [\n    {\n      "type": "retrieval"\n    }\n  ],\n  "file_ids": [\n    "file-abc123"\n  ],\n  "metadata": {},\n  "state": "ready"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"create-an-assistant",children:"Create an assistant"}),"\n",(0,t.jsx)(s.p,{children:"Create an assistant with models and instructions."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["OpenAI Equivalent: ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/assistants/createAssistant",children:"https://platform.openai.com/docs/api-reference/assistants/createAssistant"})]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Example request"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'  curl -X POST {JAN_URL}/v1/assistants   \\\n    -H "Content-Type: application/json" \\\n    -d {\n      "instructions": "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",\n      "name": "Math Tutor",\n      "tools": [{"type": "retrieval"}],\n      "model": ["model_zephyr_7b", "azure-openai-gpt4-turbo"]\n    }\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Example response"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "asst_abc123",\n  "object": "assistant",\n  "created_at": 1698984975,\n  "name": "Math Tutor",\n  "description": null,\n  "model": ["model_zephyr_7b", "azure-openai-gpt4-turbo"]\n  "instructions": "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",\n  "tools": [\n    {\n      "type": "retrieval"\n    }\n  ],\n  "file_ids": [],\n  "metadata": {},\n  "state": "ready"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"modify-an-assistant",children:"Modify an assistant"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["OpenAI Equivalent: ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/assistants/modifyAssistant",children:"https://platform.openai.com/docs/api-reference/assistants/modifyAssistant"})]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Example request"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'  curl -X POST {JAN_URL}/v1/assistants/{assistant_id}   \\\n    -H "Content-Type: application/json" \\\n    -d {\n      "instructions": "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",\n      "name": "Math Tutor",\n      "tools": [{"type": "retrieval"}],\n      "model": ["model_zephyr_7b", "azure-openai-gpt4-turbo"]\n    }\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Example response"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "asst_abc123",\n  "object": "assistant",\n  "created_at": 1698984975,\n  "name": "Math Tutor",\n  "description": null,\n  "model": ["model_zephyr_7b", "azure-openai-gpt4-turbo"]\n  "instructions": "You are a personal math tutor. When asked a question, write and run Python code to answer the question.",\n  "tools": [\n    {\n      "type": "retrieval"\n    }\n  ],\n  "file_ids": [],\n  "metadata": {},\n  "state": "ready"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"delete-assistant",children:"Delete Assistant"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["OpenAI Equivalent: ",(0,t.jsx)(s.a,{href:"https://platform.openai.com/docs/api-reference/assistants/deleteAssistant",children:"https://platform.openai.com/docs/api-reference/assistants/deleteAssistant"}),"\n`- Example request"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"curl -X DELETE {JAN_URL}/v1/assistant/model-zephyr-7B\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Example response"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "asst_abc123",\n  "object": "assistant.deleted",\n  "deleted": true,\n  "state": "to_download"\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"assistants-filesystem",children:"Assistants Filesystem"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"/assistants\n    /jan\n        assistant.json    # Assistant configs (see below)\n\n        # For any custom code\n        package.json      # Import npm modules\n                          # e.g. Langchain, Llamaindex\n        /src              # Supporting files (needs better name)\n            index.js      # Entrypoint\n            process.js    # For electron IPC processes (needs better name)\n\n        # `/threads` at root level\n        # `/models` at root level\n    /shakespeare\n        assistant.json\n        package.json\n        /src\n            index.js\n            process.js\n\n        /threads          # Assistants remember conversations in the future\n        /models           # Users can upload custom models\n            /finetuned-model\n"})})]})}function p(e={}){const{wrapper:s}={...(0,a.ah)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3905:(e,s,n)=>{n.d(s,{ah:()=>c});var t=n(67294);function a(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function i(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?i(Object(n),!0).forEach((function(s){a(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function l(e,s){if(null==e)return{};var n,t,a=function(e,s){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],s.indexOf(n)>=0||(a[n]=e[n]);return a}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),c=function(e){var s=t.useContext(o),n=s;return e&&(n="function"==typeof e?e(s):r(r({},s),e)),n},d={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},p=t.forwardRef((function(e,s){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,j=h["".concat(o,".").concat(u)]||h[u]||d[u]||i;return n?t.createElement(j,r(r({ref:s},p),{},{components:n})):t.createElement(j,r({ref:s},p))}));p.displayName="MDXCreateElement"}}]);