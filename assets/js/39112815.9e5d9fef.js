"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[20],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),s=n(16550),o=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=o??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var g=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},36983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),l=n(85162);const s={},o="Rencontre 20 - Planification de t\xe2ches",u={unversionedId:"cours/r20",id:"cours/r20",title:"Rencontre 20 - Planification de t\xe2ches",description:"1. Planification de t\xe2ches",source:"@site/docs/cours/r20.md",sourceDirName:"cours",slug:"/cours/r20",permalink:"/3A5-Automatisation/cours/r20",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Rencontre 19 - Administration \xe0 distance",permalink:"/3A5-Automatisation/cours/r19"}},c={},p=[{value:"Le planificateur de t\xe2ches",id:"le-planificateur-de-t\xe2ches",level:2},{value:"Composition d&#39;une t\xe2che planifi\xe9e",id:"composition-dune-t\xe2che-planifi\xe9e",level:3},{value:"Planification d&#39;une t\xe2che (GUI)",id:"planification-dune-t\xe2che-gui",level:2},{value:"D\xe9clencheur (<em>Trigger</em>)",id:"d\xe9clencheur-trigger",level:3},{value:"Action (<em>Action</em>)",id:"action-action",level:3},{value:"Conditions et param\xe8tres",id:"conditions-et-param\xe8tres",level:3},{value:"Forcer le lancement une t\xe2che planifi\xe9e",id:"forcer-le-lancement-une-t\xe2che-planifi\xe9e",level:3},{value:"Gestion des t\xe2ches planifi\xe9es en PowerShell",id:"gestion-des-t\xe2ches-planifi\xe9es-en-powershell",level:2},{value:"D\xe9finir le d\xe9clencheur",id:"d\xe9finir-le-d\xe9clencheur",level:3},{value:"D\xe9finir l&#39;action",id:"d\xe9finir-laction",level:3},{value:"D\xe9finir le principal",id:"d\xe9finir-le-principal",level:3},{value:"Enregistrer la t\xe2che planifi\xe9e",id:"enregistrer-la-t\xe2che-planifi\xe9e",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rencontre-20---planification-de-t\xe2ches"},"Rencontre 20 - Planification de t\xe2ches"),(0,r.kt)("admonition",{title:"R\xe9sum\xe9 de la s\xe9ance",type:"note"},(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"deroulement",label:"\ud83d\udc68\u200d\ud83c\udfeb D\xe9roulement du cours",mdxType:"TabItem"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Planification de t\xe2ches"),(0,r.kt)("li",{parentName:"ol"},"TP2"))),(0,r.kt)(l.Z,{value:"exercices",label:"\ud83d\udcbb Exercices \xe0 compl\xe9ter",mdxType:"TabItem"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"TP2"))),(0,r.kt)(l.Z,{value:"ressources",label:"\ud83d\udcda Ressources \xe0 consulter",mdxType:"TabItem"},(0,r.kt)("p",{parentName:"admonition"},"La pr\xe9sentation PowerPoint est sur le Teams du cours, sous le canal G\xe9n\xe9ral > Fichiers > Supports de cours.")))),(0,r.kt)("h2",{id:"le-planificateur-de-t\xe2ches"},"Le planificateur de t\xe2ches"),(0,r.kt)("p",null,"Le planificateur de t\xe2ches sert, comme son nom l'indique, \xe0 planifier des op\xe9rations sous Windows afin qu'elles d\xe9marrent automatiquement selon certains crit\xe8res et dans certaines conditions. Il est tr\xe8s utile dans de nombreux contextes, comme la planification de t\xe2ches de maintenance r\xe9guli\xe8res, le d\xe9marrage d'op\xe9rations automatique au d\xe9marrage du syst\xe8me ou \xe0 l'ouverture d'une session utilisateur, le nettoyage automatique de fichiers temporaires, la prise de sauvegardes r\xe9guli\xe8res, etc."),(0,r.kt)("p",null,"Avec l'interface graphique, on utilise la console MMC du planificateur de t\xe2ches, ",(0,r.kt)("inlineCode",{parentName:"p"},"taskschd"),", ou encore la console de gestion de l'ordinateur, ",(0,r.kt)("inlineCode",{parentName:"p"},"compmgmt.msc"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(95130).Z,width:"448",height:"252"})),(0,r.kt)("p",null,'Les t\xe2ches planifi\xe9es sont organis\xe9es sous forme d\'arborescence. La racine (nomm\xe9e "biblioth\xe8que du planificateur de t\xe2ches", ou simplement, ',(0,r.kt)("strong",{parentName:"p"},"/"),") contient un certain nombre de t\xe2ches planifi\xe9es d\xe9j\xe0 mises en place \xe0 l'installation de Windows ou d'un logiciel, mais d'autres t\xe2ches sont stock\xe9es dans des conteneurs sous la racine."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15236).Z,width:"572",height:"446"})),(0,r.kt)("p",null,"Pour cr\xe9er une t\xe2che \xe0 l'aide de l'interface graphique, il suffit d'ouvrir le menu contextuel par un clic-droit sur le conteneur o\xf9 cr\xe9er la t\xe2che. Il existe deux mani\xe8re de cr\xe9er une t\xe2che: simplifi\xe9e (\"",(0,r.kt)("em",{parentName:"p"},"cr\xe9er une t\xe2che de base..."),'") et avanc\xe9e ("',(0,r.kt)("em",{parentName:"p"},"cr\xe9er une t\xe2che..."),'"). Il est pr\xe9f\xe9rable de ne pas choisir une t\xe2che de base, puisque certaines options sont inaccessibles.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92933).Z,width:"486",height:"422"})),(0,r.kt)("h3",{id:"composition-dune-t\xe2che-planifi\xe9e"},"Composition d'une t\xe2che planifi\xe9e"),(0,r.kt)("p",null,"Une t\xe2che planifi\xe9e est en ensemble de plusieurs \xe9l\xe9ments d'information. Ils sont assembl\xe9s ensemble pour former une t\xe2che planifi\xe9e incrite dans le planificateur."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(86753).Z,width:"371",height:"270"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"L'information d'enregistrement (",(0,r.kt)("strong",{parentName:"p"},"RegistrationInfo"),") contient les propri\xe9t\xe9s de la t\xe2che qui concernent son enregistrement dans le planificateur, comme le nom de la t\xe2che, sa description et son emplacement dans l'arborescence du planificateur.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Les d\xe9clencheurs (",(0,r.kt)("strong",{parentName:"p"},"Trigger"),") d\xe9finissent dans quelle circonstance la t\xe2che pourra \xeatre lanc\xe9e. Par exemple, au d\xe9marrage de l'ordinateur, \xe0 l'ouverture de session, \xe0 chaque vendredi minuit, ou m\xeame lorsqu'un \xe9v\xe9nement syst\xe8me est d\xe9tect\xe9. Il peut y en avoir plus d'un.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Les actions (",(0,r.kt)("strong",{parentName:"p"},"Action"),") d\xe9finissent une action (comme le lancement d'une commande ou d'un script) \xe0 ex\xe9cuter chaque fois que la t\xe2che est d\xe9clench\xe9e. Il peut y en avoir plusieurs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Le principal de s\xe9curit\xe9 (",(0,r.kt)("strong",{parentName:"p"},"Principal"),") d\xe9crit avec quelle identit\xe9 (un compte utilisateur ou un groupe) la t\xe2che sera lanc\xe9e. Si le principal est un compte utilisateur, alors c'est sous ce compte que la t\xe2che sera ex\xe9cut\xe9e (comme si l'utilisateur l'avait fait manuellement). Si le principal est un groupe, la t\xe2che sera lanc\xe9e au nom de l'utilisateur courant uniquement s'il est membre de ce groupe.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Les param\xe8tres (",(0,r.kt)("strong",{parentName:"p"},"Settings"),") d\xe9crivent diverses options concernant la t\xe2che. Par exemple, la t\xe2che doit-elle \xeatre ex\xe9cut\xe9e m\xeame si l'ordinateur tourne sur la batterie, ou le comportement \xe0 adopter si la t\xe2che \xe9choue."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(70526).Z,width:"808",height:"490"})),(0,r.kt)("h2",{id:"planification-dune-t\xe2che-gui"},"Planification d'une t\xe2che (GUI)"),(0,r.kt)("p",null,"Voici les \xe9l\xe9ments importants \xe0 configurer pour cr\xe9er une t\xe2che planifi\xe9e au moyen de l'interface graphique."),(0,r.kt)("h3",{id:"d\xe9clencheur-trigger"},"D\xe9clencheur (",(0,r.kt)("em",{parentName:"h3"},"Trigger"),")"),(0,r.kt)("p",null,"Une t\xe2che planifi\xe9e comprend un ou plusieurs d\xe9clencheurs, c'est-\xe0-dire des \xe9v\xe9nements qui d\xe9marreront automatiquement la t\xe2che."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(86175).Z,width:"856",height:"534"})),(0,r.kt)("p",null,"Plusieurs types de d\xe9clencheurs sont disponibles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xc0 l'heure programm\xe9e"),(0,r.kt)("li",{parentName:"ul"},"\xc0 l'ouverture de session"),(0,r.kt)("li",{parentName:"ul"},"Au d\xe9marage"),(0,r.kt)("li",{parentName:"ul"},"Apr\xe8s une p\xe9riode d'activit\xe9 "),(0,r.kt)("li",{parentName:"ul"},"Sur un \xe9v\xe9nement (syst\xe8me)"),(0,r.kt)("li",{parentName:"ul"},"Lors de la cr\xe9ation/modification de la t\xe2che"),(0,r.kt)("li",{parentName:"ul"},"Au moment de la connexion \xe0 une session utilisateur (par exemple, RDP)"),(0,r.kt)("li",{parentName:"ul"},"Au moment de la d\xe9connexion \xe0 une session utilisateur"),(0,r.kt)("li",{parentName:"ul"},"Au verrouillage du poste de travail (Win+L)"),(0,r.kt)("li",{parentName:"ul"},"Au d\xe9verrouillage du poste de travail")),(0,r.kt)("h3",{id:"action-action"},"Action (",(0,r.kt)("em",{parentName:"h3"},"Action"),")"),(0,r.kt)("p",null,"Une t\xe2che planifi\xe9e comprend une ou plusieurs actions qui seront lanc\xe9es lorsque la t\xe2che sera d\xe9clench\xe9e. Le principal type d'action est le lancement d'une commande (\"",(0,r.kt)("em",{parentName:"p"},"d\xe9marrer un programme"),'").'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(77843).Z,width:"642",height:"246"})),(0,r.kt)("p",null,"Pour lancer une commande, il faut d\xe9finir trois param\xe8tres:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Programme/script"),(0,r.kt)("td",{parentName:"tr",align:null},"Le nom ou chemin du fichier ex\xe9cutable \xe0 appeler seulement.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ajouter des arguments (facultatif)"),(0,r.kt)("td",{parentName:"tr",align:null},"Tous les arguments apr\xe8s le nom de l'ex\xe9cutable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Commencer dans (facultatif)"),(0,r.kt)("td",{parentName:"tr",align:null},"Le r\xe9pertoire de travail dans lequel lancer la commande.")))),(0,r.kt)("p",null,"Par exemple, pour qu'une t\xe2che ex\xe9cute le script PowerShell ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Scripts\\MonScript.ps1"),", il faudrait que le nom du programme soit ",(0,r.kt)("inlineCode",{parentName:"p"},"powershell.exe")," et que les arguments soient ",(0,r.kt)("inlineCode",{parentName:"p"},"-File C:\\Scripts\\MonScript.ps1 -ExecutionPolicy Bypass"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(43574).Z,width:"464",height:"299"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Pour conna\xeetre la syntaxe de la commande Powershell.exe, vous pouvez lancer ",(0,r.kt)("inlineCode",{parentName:"p"},"Powershell.exe /?")," pour acc\xe9der \xe0 la rubrique d'aide."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:n(6816).Z,width:"730",height:"281"}))),(0,r.kt)("h3",{id:"conditions-et-param\xe8tres"},"Conditions et param\xe8tres"),(0,r.kt)("p",null,"Les onglets Conditions et Param\xe8tres contiennent des options suppl\xe9mentaires sur la t\xe2che."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46790).Z,width:"587",height:"448"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(28589).Z,width:"587",height:"448"})),(0,r.kt)("h3",{id:"forcer-le-lancement-une-t\xe2che-planifi\xe9e"},"Forcer le lancement une t\xe2che planifi\xe9e"),(0,r.kt)("p",null,"On peut forcer l'ex\xe9cution d'une t\xe2che planifi\xe9e directement par la console. C'est pratique pour la tester."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41572).Z,width:"1018",height:"360"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Comme bien des consoles MMC, vous pouvez g\xe9rer les t\xe2ches planifi\xe9es sur une machine distante \xe0 partir de la console. Vous devez \xeatre administrateur local de la machine distante, et les pare-feux doivent laisser passer le protocole MSRPC."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:n(6489).Z,width:"592",height:"431"}))),(0,r.kt)("h2",{id:"gestion-des-t\xe2ches-planifi\xe9es-en-powershell"},"Gestion des t\xe2ches planifi\xe9es en PowerShell"),(0,r.kt)("p",null,"PowerShell offre un ensemble de commandes pour contr\xf4ler, localement ou \xe0 distance, les t\xe2ches planifi\xe9es."),(0,r.kt)("p",null,"Pour ce faire, il y a plusieurs commandes \xe0 faire, puisqu'il faut cr\xe9er chaque \xe9l\xe9ment de la t\xe2che planifi\xe9e individuellement, puis les mettre ensemble pour l'enregistrer dans la biblioth\xe8que du planificateur de t\xe2ches."),(0,r.kt)("h3",{id:"d\xe9finir-le-d\xe9clencheur"},"D\xe9finir le d\xe9clencheur"),(0,r.kt)("p",null,"Il existe plusieurs d\xe9clencheurs. Il suffit ici de cr\xe9er un nouveau d\xe9clencheur du type souhait\xe9. Il faut le stocker dans une variable."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(33022).Z,width:"730",height:"235"})),(0,r.kt)("h3",{id:"d\xe9finir-laction"},"D\xe9finir l'action"),(0,r.kt)("p",null,"Il faut d\xe9finir l'action, soit le programme a ex\xe9cuter. Tout comme avec l'interface graphique, le programme \xe0 sp\xe9cifier dans le param\xe8tre -Execute n'est que l'ex\xe9cutable \xe0 lancer. Si c'est un script PowerShell, alors on met \"powershell.exe\". Si c'est un autre programme, on met uniquement le nom du programme, sans ses arguments."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92767).Z,width:"730",height:"236"})),(0,r.kt)("h3",{id:"d\xe9finir-le-principal"},"D\xe9finir le principal"),(0,r.kt)("p",null,"Le principal d\xe9signe l'utilisateur au nom duquel la t\xe2che sera ex\xe9cut\xe9e."),(0,r.kt)("p",null,"Nous avons deux options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sp\xe9cifier un compte utilisateur sp\xe9cifique (",(0,r.kt)("inlineCode",{parentName:"li"},"-UserID"),")"),(0,r.kt)("li",{parentName:"ul"},"Sp\xe9cifier un groupe (",(0,r.kt)("inlineCode",{parentName:"li"},"-GroupID"),")")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73820).Z,width:"730",height:"266"})),(0,r.kt)("p",null,"Si le principal est un utilisateur, la t\xe2che sera faite au nom de ce compte pr\xe9cis."),(0,r.kt)("p",null,"Si le principal est un groupe, la t\xe2che sera faite au nom de l'utilisateur courant, uniquement si celui-ci fait partie du groupe. Lorsque le principal est un groupe, il est impossible que la t\xe2che soit lanc\xe9e lorsque l'utilisateur n'est pas logg\xe9."),(0,r.kt)("h3",{id:"enregistrer-la-t\xe2che-planifi\xe9e"},"Enregistrer la t\xe2che planifi\xe9e"),(0,r.kt)("p",null,"Une fois tous les \xe9l\xe9ments en place, il ne reste plus qu'\xe0 enregistrer la t\xe2che planifi\xe9e. On lui donne alors un nom, une description et un emplacement dans le planificateur, puis on lui donne une ou plusieurs actions, un ou plusieurs d\xe9clencheurs ainsi qu'un principal."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31145).Z,width:"729",height:"181"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Il est aussi possible de contr\xf4ler les t\xe2ches planifi\xe9es sur un ordinateur distant. On peut simplement passer par une session distante (PSSession) au moyen de la commande Invoke-Command."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:n(2291).Z,width:"570",height:"270"}))))}h.isMDXComponent=!0},95130:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_01-083757c0f53310935feb5cdd4e98ea8d.png"},15236:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_02-56d205cd86506626b5a50f4fbd96e63b.png"},92933:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_03-dd911f0b064bd012be01833832e1b049.png"},70526:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_04-1a8d02d3a5e551dbe924eb3e1953b1f2.png"},86753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_05-9a17c24b66a27486d7717196943ce633.png"},77843:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_action01-7000678738875d6441dedd82e6bcdcd7.png"},43574:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_action02-8ebfbbf359478f172106f7c37269709c.png"},6816:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_action03-05a32e074505d251f1289f42f4db7498.png"},46790:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_condition01-92ea24c0d9d242fe1b1678d3faeda799.png"},41572:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_forceexec-605db66f9dce228b23b516bc841f9e30.png"},28589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_parameters01-5f312503b665086d8c02d9009e6f02b0.png"},92767:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_posh_newaction-bfed654b1bc0efd5baa42f035aea0429.png"},73820:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_posh_newprincipal-f2f891a7988f86454900f958ff4f0a29.png"},33022:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_posh_newtrigger-2a4df83a3f2aedbd6a68dc8dd513c4ac.png"},31145:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_posh_register-5eaa05a642ff6ffa5511c846858d32cc.png"},2291:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_posh_remote01-ef50b093f8354149583ef12a4eb6bcb9.png"},6489:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_remote-36e7cf26e7430cd882f9875cb53b6d63.png"},86175:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/taskschd_trigger01-b0804a68d3ce0316080f1a7b63836829.png"}}]);