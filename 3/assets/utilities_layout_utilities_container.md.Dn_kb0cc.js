import{_ as u,c as r,I as e,w as s,R as p,k as t,a,D as i,o as d,F as _,E as k}from"./chunks/framework.DkhUyr1-.js";const B=JSON.parse('{"title":"容器","description":"","frontmatter":{},"headers":[],"relativePath":"utilities/layout/utilities/container.md","filePath":"utilities/layout/utilities/container.md","lastUpdated":null}'),g={name:"utilities/layout/utilities/container.md"},m=p('<h1 id="容器" tabindex="-1">容器 <a class="header-anchor" href="#容器" aria-label="Permalink to &quot;容器&quot;">​</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p>使用 <code>container</code> 类将元素宽度限制为当前<a href="/zui/3/guide/config/base/screens.html">屏幕断点</a>，具体规则如下：</p>',3),E={class:"table"},b=t("thead",null,[t("tr",null,[t("th",null,"屏幕断点"),t("th",null,"CSS 属性")])],-1),f=t("tr",null,[t("td",null,"默认"),t("td",null,[t("code",null,"width: 100%;")])],-1),y={class:"font-mono"},T=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"提示"),t("p",null,[t("code",null,".container"),a(" 还会为元素添加 "),t("code",null,"margin-left: auto; margin-right: auto;"),a("，使得元素默认居中显示。")])],-1),x=t("h2",{id:"用法",tabindex:"-1"},[a("用法 "),t("a",{class:"header-anchor",href:"#用法","aria-label":'Permalink to "用法"'},"​")],-1),P=t("div",{class:"container h-56 font-mono bg-opacity-50 center canvas backdrop-blur-lg"}," .container ",-1),v=t("div",{class:"language-html vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),t("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),t("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),t("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"container"'),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),a(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  .container")]),a(`
`),t("span",{class:"line"},[t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),t("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1);function C(V,F,S,N,$,w){const n=i("CssPropValue"),o=i("Example"),c=i("PluginTabsTab"),h=i("PluginTabs");return d(),r("div",null,[m,e(o,{padding:"p-0"},{default:s(()=>[t("table",E,[b,t("tbody",null,[f,(d(),r(_,null,k(["sm","md","lg","xl","2xl"],l=>t("tr",{key:l},[t("td",y,[a("@media (min-width: "),e(n,{prop:`--screen-${l}`,target:"body"},null,8,["prop"]),a(")")]),t("td",null,[t("code",null,[a("max-width: "),e(n,{prop:`--screen-${l}`,target:"body"},null,8,["prop"]),a(";")])])])),64))])])]),_:1}),T,x,e(h,null,{default:s(()=>[e(c,{label:"示例"},{default:s(()=>[e(o,{background:"blue-circle"},{default:s(()=>[P]),_:1})]),_:1}),e(c,{label:"HTML"},{default:s(()=>[v]),_:1})]),_:1})])}const D=u(g,[["render",C]]);export{B as __pageData,D as default};
