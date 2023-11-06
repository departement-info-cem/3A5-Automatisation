"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),s=r(91980),u=r(67392),c=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var v=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},47292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),l=r(85162);const i={},s="Rencontre 11 - Port\xe9e (et travail sur le TP1)",u={unversionedId:"cours/r11",id:"cours/r11",title:"Rencontre 11 - Port\xe9e (et travail sur le TP1)",description:"1. Pr\xe9sentation de la notion de port\xe9e (scope) en PowerShell",source:"@site/docs/cours/r11.md",sourceDirName:"cours",slug:"/cours/r11",permalink:"/3A5-Automatisation/cours/r11",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Rencontre 10 - Travail sur le TP1",permalink:"/3A5-Automatisation/cours/r10"},next:{title:"Rencontre 12 - Travail sur le TP1",permalink:"/3A5-Automatisation/cours/r12"}},c={},p=[{value:"Qu&#39;est-ce que la port\xe9e (scope)?",id:"quest-ce-que-la-port\xe9e-scope",level:2},{value:"Port\xe9e locale",id:"port\xe9e-locale",level:2},{value:"Port\xe9e script",id:"port\xe9e-script",level:2},{value:"Port\xe9e globale",id:"port\xe9e-globale",level:2},{value:"Visibilit\xe9 priv\xe9e",id:"visibilit\xe9-priv\xe9e",level:2},{value:"Dotsourcing",id:"dotsourcing",level:2},{value:"Bonnes pratiques",id:"bonnes-pratiques",level:2},{value:"R\xe9f\xe9rences",id:"r\xe9f\xe9rences",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rencontre-11---port\xe9e-et-travail-sur-le-tp1"},"Rencontre 11 - Port\xe9e (et travail sur le TP1)"),(0,n.kt)("admonition",{title:"R\xe9sum\xe9 de la s\xe9ance",type:"note"},(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"deroulement",label:"\ud83d\udc68\u200d\ud83c\udfeb D\xe9roulement du cours",mdxType:"TabItem"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Pr\xe9sentation de la notion de port\xe9e (scope) en PowerShell"),(0,n.kt)("li",{parentName:"ol"},"Travail sur le TP1"))),(0,n.kt)(l.Z,{value:"exercices",label:"\ud83d\udcbb Exercices \xe0 compl\xe9ter",mdxType:"TabItem"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Travail sur le TP1"))),(0,n.kt)(l.Z,{value:"ressources",label:"\ud83d\udcda Ressources \xe0 consulter",mdxType:"TabItem"},(0,n.kt)("p",{parentName:"admonition"},"La pr\xe9sentation PowerPoint est sur le Teams du cours, sous le canal G\xe9n\xe9ral > Fichiers > Supports de cours.")))),(0,n.kt)("h2",{id:"quest-ce-que-la-port\xe9e-scope"},"Qu'est-ce que la port\xe9e (scope)?"),(0,n.kt)("p",null,"La port\xe9e, ou \xe9tendue, ou ",(0,n.kt)("em",{parentName:"p"},"scope")," en anglais, est le m\xe9canisme qui d\xe9finit dans quel cas une ressource PowerShell, comme une variable, une fonction ou un alias, est accessible \xe0 l'ext\xe9rieur du script ou de la fonction duquel il a \xe9t\xe9 cr\xe9\xe9."),(0,n.kt)("p",null,"La port\xe9e ",(0,n.kt)("strong",{parentName:"p"},"globale")," r\xe9f\xe8re \xe0 la session PowerShell. Lorsqu'on d\xe9marre une session, par exemple en d\xe9marrant une fen\xeatre PowerShell, tout ce qui y est cr\xe9\xe9 est dans la port\xe9e globale."),(0,n.kt)("p",null,"Lorsqu'on d\xe9marre un script \xe0 partir de cette session, les objets cr\xe9\xe9s dans le script sont contenus ne sont pas accessibles dans la session PowerShell apr\xe8s la fin de l'ex\xe9cution du script."),(0,n.kt)("p",null,"Lorsqu'on tente d'acc\xe9der \xe0 un objet (comme la lecture d'une variable ou l'appel d'une fonction), PowerShell tente de trouver cet objet dans la port\xe9e courante (locale). S'il n'est pas d\xe9clar\xe9 dans cette port\xe9e, PowerShell tentera de le trouver en remontant la hi\xe9rarchie jusqu'\xe0 ce qu'il en trouve un qui soit d\xe9fini."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Port\xe9es PowerShell",src:r(93380).Z,width:"937",height:"394"})),(0,n.kt)("h2",{id:"port\xe9e-locale"},"Port\xe9e locale"),(0,n.kt)("p",null,"Lorsqu'une variable est d\xe9clar\xe9e dans un script ou une fonction, elle poss\xe8de par d\xe9faut une port\xe9e ",(0,n.kt)("strong",{parentName:"p"},"locale"),", c'est \xe0 dire qu'elle cessera d'exister lorsque son ex\xe9cution sera termin\xe9e."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Variable de port\xe9e locale",src:r(35223).Z,width:"710",height:"360"})),(0,n.kt)("p",null,"Si on tente d'acc\xe9der \xe0 une variable qui n'est pas d\xe9finie, alors PowerShell recherchera cette variable dans la port\xe9e du parent. Si plusieurs variables du m\xeame nom existent dans diff\xe9rentes port\xe9es, c'est la plus proche qui est obtenue."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"H\xe9ritage des port\xe9es",src:r(25213).Z,width:"710",height:"360"})),(0,n.kt)("h2",{id:"port\xe9e-script"},"Port\xe9e script"),(0,n.kt)("p",null,"On peut d\xe9clarer une variable dans une port\xe9e sup\xe9rieure en sp\xe9cifiant un pr\xe9fixe de port\xe9e. Par exemple, si on souhaite qu'une variable d\xe9finie dans une fonction de script puisse \xeatre lue dans le script, \xe0 l'ext\xe9rieur de la fonction, on lui ajoute un pr\xe9fixe ",(0,n.kt)("inlineCode",{parentName:"p"},"$script:"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(1433).Z,width:"710",height:"360"})),(0,n.kt)("p",null,"Si la variable existe \xe0 la fois dans la port\xe9e globale et dans la port\xe9e du script, la plus proche l'emporte."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(55452).Z,width:"710",height:"360"})),(0,n.kt)("h2",{id:"port\xe9e-globale"},"Port\xe9e globale"),(0,n.kt)("p",null,"Une variable globale existe partout dans la session PowerShell, y compris dans le terminal, dans le code d'un script ou dans une fonction comprise dans le script. On d\xe9finit une variable globale en lui donnant le pr\xe9fixe ",(0,n.kt)("inlineCode",{parentName:"p"},"$global:"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(84976).Z,width:"710",height:"360"})),(0,n.kt)("h2",{id:"visibilit\xe9-priv\xe9e"},"Visibilit\xe9 priv\xe9e"),(0,n.kt)("p",null,"Quand on d\xe9finit une variable de port\xe9e locale, celle-ci sera quand m\xeame accessible \xe0 une port\xe9e enfant. Pour bloquer ce m\xe9canisme, on peut forcer une variable \xe0 ce qu'elle soit inaccessible \xe0 une port\xe9e enfant."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(83064).Z,width:"510",height:"360"})),(0,n.kt)("h2",{id:"dotsourcing"},"Dotsourcing"),(0,n.kt)("p",null,"Il arrive qu'on veuille ex\xe9cuter un script ou une fonction dans la port\xe9e locale, de sorte que toutes les variables et fonctions qui y sont d\xe9clar\xe9es persistent apr\xe8s leur ex\xe9cution. On doit alors indiquer le caract\xe8re ",(0,n.kt)("inlineCode",{parentName:"p"},".")," avant de lancer le script. Cette op\xe9ration s'appelle le ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"dotsourcing")),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(72444).Z,width:"710",height:"360"})),(0,n.kt)("p",null,"On peut \xe9galement ",(0,n.kt)("em",{parentName:"p"},"dotsourcer")," une fonction de la m\xeame mani\xe8re, m\xeame si cette manoeuvre est tr\xe8s peu utile dans la majorit\xe9 des cas."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(6995).Z,width:"710",height:"360"})),(0,n.kt)("h2",{id:"bonnes-pratiques"},"Bonnes pratiques"),(0,n.kt)("p",null,"Bien qu'il puisse \xeatre tentant de permettre \xe0 des fonctions ou des scripts de d\xe9clarer des variables qui puissent \xeatre lues \xe0 l'ext\xe9rieur, on doit autant que possible \xe9viter d'interf\xe9rer avec les port\xe9es PowerShell."),(0,n.kt)("p",null,"Rappelez-vous le principe de la bo\xeete noire. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si votre script (ou votre fonction) a besoin d'une information ext\xe9rieure pour faire son travail, passez-lui en ",(0,n.kt)("strong",{parentName:"li"},"param\xe8tre"),";"),(0,n.kt)("li",{parentName:"ul"},"Si votre script (ou votre fonction) doit communiquer une information \xe0 l'ext\xe9rieur, faites-la sortir par le pipeline.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Si une fonction ou un script doit sortir plusieurs informations de nature diff\xe9rente, vous devriez encapsuler ces valeurs dans un ",(0,n.kt)("inlineCode",{parentName:"p"},"PSCustomObject")," et sortir cet objet par le pipeline."),(0,n.kt)("p",{parentName:"admonition"},"Au lieu de faire ceci:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'function Get-Bob {\n    $global:Nom = "Bob"\n    $global:Age = 42\n}\n\nGet-Bob\n\nWrite-Host ($global:Nom + " a " + $global:Age + " ans.")\n')),(0,n.kt)("p",{parentName:"admonition"},"Faites plut\xf4t ceci:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'function Get-Bob {\n    [PSCustomObject]@{\n        Nom = "Bob"\n        Age = 42\n    }\n}\n\n$Bob = Get-Bob\n\nWrite-Host ($Bob.Nom + " a " + $Bob.Age + " ans.")\n'))),(0,n.kt)("p",null,"Aussi, ",(0,n.kt)("strong",{parentName:"p"},"affectez toujours vos variables")," avant de les appeler. Si votre script assume qu'au d\xe9but de son ex\xe9cution, les variables n'existent pas, il pourrait arriver une situation probl\xe9matique lorsque celle-ci a \xe9t\xe9 affect\xe9e dans la session en cours."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Si vous voulez savoir si une variable existe \xe0 la port\xe9e locale, vous pouvez tester son \xe9galit\xe9 \xe0 ",(0,n.kt)("inlineCode",{parentName:"p"},"$null"),". Dans ce cas, par pr\xe9caution, utilisez le pr\xe9fixe ",(0,n.kt)("inlineCode",{parentName:"p"},"$local:")," pour forcer l'utilisation de la variable locale."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"if ($null -ne $local:MaVariable) {\n    # La variable $MaVariable existe dans la port\xe9e locale.\n}\n"))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"D\xe9finir des objets PowerShell, comme des variables, des fonctions et des alias, \xe0 l'ext\xe9rieur de la port\xe9e locale peut conduire \xe0 des probl\xe8mes. En voici une illustration:"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"image",src:r(39941).Z,width:"525",height:"341"})),(0,n.kt)("p",{parentName:"admonition"},"En l'apparence anodin, ce script d\xe9finit une fonction Get-ChildItem dans la port\xe9e global, ce qui a pour effet de surcharger la commande Get-ChildItem. Voici le code du script:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'Function global:Get-ChildItem {\n    Write-Host "Mouahahaha j\'ai hack\xe9 PowerShell!!!" -ForegroundColor Red\n}\n\nWrite-Host "Bonjour!"\n'))),(0,n.kt)("h2",{id:"r\xe9f\xe9rences"},"R\xe9f\xe9rences"),(0,n.kt)("p",null,"Voici quelques sites int\xe9ressants pour mieux comprendre le fonction des port\xe9es en PowerShell:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scopes?view=powershell-5.1"},"about Scopes - PowerShell | Microsoft Learn"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.varonis.com/fr/blog/portee-variable-powershell"},"Guide de port\xe9e des variables dans PowerShell : Utilisation de la port\xe9e dans les scripts et les modules | Varonis"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0CutdM6B_6U"},"Windows PowerShell Fundamentals Chapter 13 - Scope - YouTube")))))}b.isMDXComponent=!0},35223:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope01-fe0124771ee72cb5036f166e99625b11.png"},25213:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope02-f995baef1f710e33dacb87c6313513f6.png"},1433:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope03-3e6cd16b2c1b4ae91e1dc42f0a0289b7.png"},55452:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope04-b80fb8017ff26a53196a0cf1f6b43307.png"},84976:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope05-10eca27b61ec645238f9496b9dc954ce.png"},6995:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope06-6c8fa6a7b4cea116c24b8e4fb624cd74.png"},72444:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope07-0788829a3046da707ffcd5dd1af5ca1f.png"},93380:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope09-814b0ed8ad484a0efc5d0f47bd7b1416.png"},83064:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope10-d42b9df572417bc389214afb313ca0db.png"},39941:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/scope11-1375b4dd7b9d24ad885e98a3d083f658.png"}}]);