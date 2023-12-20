"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5114],{14847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(85893),i=t(11151),s=t(74866),a=t(85162);const l={title:"Installation",slug:"/install",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},o=void 0,d={id:"guides/installation/README",title:"Installation",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/guides/02-installation/README.mdx",sourceDirName:"guides/02-installation",slug:"/install",permalink:"/install",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/02-installation/README.mdx",tags:[],version:"current",lastUpdatedBy:"0xSage",lastUpdatedAt:1703051081,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"Installation",slug:"/install",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"guidesSidebar",previous:{title:"Overview",permalink:"/guides"},next:{title:"Mac",permalink:"/install/mac"}},c={},u=[{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Working with Models",id:"working-with-models",level:3},{value:"Importing Models",id:"importing-models",level:3},{value:"Working with the Local Server",id:"working-with-the-local-server",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Cross platform",id:"cross-platform",level:2},{value:"Requirements for Jan",id:"requirements-for-jan",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Disk space",id:"disk-space",level:4},{value:"Random Access Memory (RAM) and Graphics Processing Unit Video Random Access Memory (GPU VRAM)",id:"random-access-memory-ram-and-graphics-processing-unit-video-random-access-memory-gpu-vram",level:4},{value:"Relationship between RAM and VRAM Sizes in Relation to LLM Models",id:"relationship-between-ram-and-vram-sizes-in-relation-to-llm-models",level:4},{value:"Architecture",id:"architecture",level:3},{value:"CPU",id:"cpu",level:4},{value:"GPU",id:"gpu",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In this quickstart we'll show you how to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Download the Jan Desktop client - Mac, Windows, Linux, (and toaster) compatible"}),"\n",(0,r.jsx)(n.li,{children:"Download and customize models"}),"\n",(0,r.jsx)(n.li,{children:"Import custom models"}),"\n",(0,r.jsxs)(n.li,{children:["Use the local server at port ",(0,r.jsx)(n.code,{children:"1337"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To download the latest stable release: ",(0,r.jsx)(n.a,{href:"https://jan.ai/",children:"https://jan.ai/"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To download a nightly release (highly unstable but lots of new features): ",(0,r.jsx)(n.a,{href:"https://github.com/janhq/jan/releases",children:"https://github.com/janhq/jan/releases"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For a detailed installation guide for your operating system, see the following:"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,r.jsx)(a.Z,{value:"mac",label:"macOS",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/install/mac",children:"Mac installation guide"})})}),(0,r.jsx)(a.Z,{value:"win",label:"Windows",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/install/windows",children:"Windows installation guide"})})}),(0,r.jsx)(a.Z,{value:"linux",label:"Linux",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/install/linux",children:"Linux installation guide"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To build Jan Desktop from scratch (and have the right to tinker!)"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/install/from-source",children:"Build from Source"})," guide."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"working-with-models",children:"Working with Models"}),"\n",(0,r.jsx)(n.p,{children:"Jan provides a list of recommended models to get you started.\nYou can find them in the in-app Hub."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cmd + k"}),' and type "hub" to open the Hub.']}),"\n",(0,r.jsx)(n.li,{children:"Download your preferred models."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cmd + k"}),' and type "chat" to open the conversation UI and start chatting.']}),"\n",(0,r.jsx)(n.li,{children:"Your model may take a few seconds to start up."}),"\n",(0,r.jsx)(n.li,{children:"You can customize the model settings, at each conversation thread level, on the right panel."}),"\n",(0,r.jsxs)(n.li,{children:["To change model defaults globally, edit the ",(0,r.jsx)(n.code,{children:"model.json"})," file. See the ",(0,r.jsx)(n.a,{href:"/guides/models",children:"Models"})," guide."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"importing-models",children:"Importing Models"}),"\n",(0,r.jsx)(n.p,{children:"Jan is compatible with all GGUF models."}),"\n",(0,r.jsxs)(n.p,{children:["For more information on how to import custom models, not found in the Hub, see the ",(0,r.jsx)(n.a,{href:"/guides/models",children:"Models"})," guide."]}),"\n",(0,r.jsx)(n.h2,{id:"working-with-the-local-server",children:"Working with the Local Server"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This feature is currently under development. So expect bugs!"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Jan runs a local server on port ",(0,r.jsx)(n.code,{children:"1337"})," by default."]}),"\n",(0,r.jsx)(n.p,{children:"The endpoints are OpenAI compatible."}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/guides/server",children:"API server guide"})," for more information."]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"TODO: Merge this in:"}),"\n",(0,r.jsx)(n.p,{children:"Getting up and running open-source AI models on your own computer with Jan is quick and easy. Jan is lightweight and can run on a variety of hardware and platform versions. Specific requirements tailored to your platform are outlined below."}),"\n",(0,r.jsx)(n.h2,{id:"cross-platform",children:"Cross platform"}),"\n",(0,r.jsx)(n.p,{children:"A free, open-source alternative to OpenAI that runs on the Linux, macOS, and Windows operating systems. Please refer to the specific guides below for your platform"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/install/linux",children:"Linux"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/install/mac",children:"MacOS (Mac Intel Chip and Mac Apple Silicon Chip)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/install/windows",children:"Windows"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"requirements-for-jan",children:"Requirements for Jan"}),"\n",(0,r.jsx)(n.h3,{id:"hardware",children:"Hardware"}),"\n",(0,r.jsx)(n.p,{children:"Jan is a lightweight platform designed for seamless download, storage, and execution of open-source Large Language Models (LLMs). With a small download size of less than 200 MB and a disk footprint of under 300 MB, Jan is optimized for efficiency and should run smoothly on modern hardware."}),"\n",(0,r.jsx)(n.p,{children:"To ensure optimal performance while using Jan and handling LLM models, it is recommended to meet the following system requirements:"}),"\n",(0,r.jsx)(n.h4,{id:"disk-space",children:"Disk space"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Minimum requirement","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"At least 5 GB of free disk space is required to accommodate the download, storage, and management of open-source LLM models."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Recommended","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For an optimal experience and to run most available open-source LLM models on Jan, it is recommended to have 10 GB of free disk space."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"random-access-memory-ram-and-graphics-processing-unit-video-random-access-memory-gpu-vram",children:"Random Access Memory (RAM) and Graphics Processing Unit Video Random Access Memory (GPU VRAM)"}),"\n",(0,r.jsx)(n.p,{children:"The amount of RAM on your system plays a crucial role in determining the size and complexity of LLM models you can effectively run. Jan can be utilized on traditional computers where RAM is a key resource. For enhanced performance, Jan also supports GPU acceleration, utilizing the VRAM of your graphics card."}),"\n",(0,r.jsx)(n.h4,{id:"relationship-between-ram-and-vram-sizes-in-relation-to-llm-models",children:"Relationship between RAM and VRAM Sizes in Relation to LLM Models"}),"\n",(0,r.jsx)(n.p,{children:"The RAM and GPU VRAM requirements are dependent on the size and complexity of the LLM models you intend to run. The following are some general guidelines to help you determine the amount of RAM or VRAM you need to run LLM models on Jan"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"8 GB of RAM: Suitable for running smaller models like 3B models or quantized 7B models"}),"\n",(0,r.jsx)(n.li,{children:'16 GB of RAM(recommended): This is considered the "minimum usable models" threshold, particularly for 7B models (e.g Mistral 7B, etc)'}),"\n",(0,r.jsx)(n.li,{children:"Beyond 16GB of RAM: Required for handling larger and more sophisticated model, such as 70B models."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(n.p,{children:"Jan is designed to run on muptiple architectures, versatility and widespread usability. The supported architectures include:"}),"\n",(0,r.jsx)(n.h4,{id:"cpu",children:"CPU"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"x86: Jan is well-suited for systems with x86 architecture, which is commonly found in traditional desktops and laptops. It ensures smooth performance on a variety of devices using x86 processors."}),"\n",(0,r.jsx)(n.li,{children:"ARM: Jan is optimized to run efficiently on ARM-based systems, extending compatibility to a broad range of devices using ARM processors."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"gpu",children:"GPU"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NVIDIA: Jan optimizes the computational capabilities of NVIDIA GPUs, achieving efficiency through the utilization of llama.cpp. This strategic integration enhances the performance of Jan, particularly in resource-intensive Language Model (LLM) tasks. Users can expect accelerated processing and improved responsiveness when leveraging the processing capabilities inherent in NVIDIA GPUs."}),"\n",(0,r.jsx)(n.li,{children:"AMD: Users with AMD GPUs can seamlessly integrate Jan's GPU acceleration, offering a comprehensive solution for diverse hardware configurations and preferences."}),"\n",(0,r.jsx)(n.li,{children:"ARM64 Mac: Jan seamlessly supports ARM64 architecture on Mac systems, leveraging Metal for efficient GPU operations. This ensures a smooth and efficient experience for users with Apple Silicon Chips, utilizing the power of Metal for optimal performance on ARM64 Mac devices."}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(36905);const i={tabItem:"tabItem_Ymn6"};var s=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),i=t(36905),s=t(12466),a=t(16550),l=t(20469),o=t(91980),d=t(67392),c=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[d,u]=p({queryString:t,groupId:i}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,c.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),g=(()=>{const e=d??f;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(d(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);