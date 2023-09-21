"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[137],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),c=i,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||n;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2429:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(7462),i=(a(7294),a(3905));const n={},l="Travail pratique #1 (A2023)",s={unversionedId:"tp/tp1",id:"tp/tp1",title:"Travail pratique #1 (A2023)",description:"1 (A2023)",source:"@site/docs/tp/tp1.md",sourceDirName:"tp",slug:"/tp/tp1",permalink:"/3A5-Automatisation/tp/tp1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tp"},o={},u=[{value:"Mandat",id:"mandat",level:2},{value:"Le fichier d\u2019entr\xe9e",id:"le-fichier-dentr\xe9e",level:3},{value:"Comptes utilisateurs",id:"comptes-utilisateurs",level:3},{value:"Lancement du script",id:"lancement-du-script",level:3},{value:"Validation du param\xe8tre",id:"validation-du-param\xe8tre",level:3},{value:"Journalisation",id:"journalisation",level:3},{value:"Traitement des conflits de noms",id:"traitement-des-conflits-de-noms",level:3},{value:"Consignes",id:"consignes",level:2},{value:"Conseils",id:"conseils",level:2},{value:"Crit\xe8res d\u2019\xe9valuation",id:"crit\xe8res-d\xe9valuation",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"travail-pratique-1-a2023"},"Travail pratique #1 (A2023)"),(0,i.kt)("p",null,"Ce TP est \xe0 faire individuellement. Il compte pour ",(0,i.kt)("strong",{parentName:"p"},"20%")," de la note du cours. La remise doit obligatoirement se faire par GitHub Classroom."),(0,i.kt)("h2",{id:"mandat"},"Mandat"),(0,i.kt)("p",null,"Vous devez d\xe9velopper un script PowerShell qui vise \xe0 cr\xe9er des utilisateurs ",(0,i.kt)("strong",{parentName:"p"},"locaux")," en lot sous Windows 10, d\xe9finis dans un fichier CSV."),(0,i.kt)("h3",{id:"le-fichier-dentr\xe9e"},"Le fichier d\u2019entr\xe9e"),(0,i.kt)("p",null,"Le fichier CSV est construit dans le format suivant, s\xe9par\xe9 par des points-virgules :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"Prenom";"Nom";"NoEmpl";"Admin"\n"Alice";"Robert";"10001";"Non"\n"Bob";"Graton";"10002";"Non"\n"Caroline";"Tremblay";"10003";"Oui"\n"Claude";"Gagnon";"10004";"Non"\n"Denis";"Denis";"10005";"Non"\n"Claude";"Tremblay";"10100";"Non"\n"Cyrille";"Tremblay";"10101";"Oui"\n')),(0,i.kt)("p",null,"On y trouve le pr\xe9nom, le nom et le num\xe9ro d\u2019employ\xe9 de chaque utilisateur \xe0 cr\xe9er, ainsi qu\u2019un champ identifiant si l\u2019utilisateur doit \xeatre administrateur du syst\xe8me (oui ou non)."),(0,i.kt)("p",null,"Deux fichiers vous sont fournis : users.csv et users2.csv. Le premier ne contient aucun conflit de nom, le deuxi\xe8me en contient. Je vous les fournis ainsi pour faciliter vos tests. J\u2019utiliserai un autre fichier avec des utilisateurs diff\xe9rents pour la correction, et je m\u2019attends \xe0 ce que votre script fonctionne tout aussi bien."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Notez que je n\u2019exige pas que votre script fonctionne pour les utilisateurs dont le nom de famille est inf\xe9rieur \xe0 4 lettres. Dans mon fichier de correction, tous les utilisateurs ont un nom de famille d\u2019au moins 4 lettres.")),(0,i.kt)("h3",{id:"comptes-utilisateurs"},"Comptes utilisateurs"),(0,i.kt)("p",null,"Votre script devra cr\xe9er un compte local pour chaque utilisateur sp\xe9cifi\xe9 dans ce fichier. Voici les consignes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le ",(0,i.kt)("strong",{parentName:"p"},"nom d\u2019utilisateur")," doit \xeatre la premi\xe8re lettre du pr\xe9nom et les 4 premi\xe8res du nom de famille, en ",(0,i.kt)("strong",{parentName:"p"},"lettres minuscules"),". (Dans ce travail, il n\u2019y aura pas de noms de famille de moins de 4 caract\xe8res).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le ",(0,i.kt)("strong",{parentName:"p"},"nom complet")," de l\u2019utilisateur est son pr\xe9nom suivi de son nom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"La ",(0,i.kt)("strong",{parentName:"p"},"Description")," de l\u2019utilisateur est son num\xe9ro d\u2019employ\xe9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le ",(0,i.kt)("strong",{parentName:"p"},"mot de passe")," doit \xeatre les 2 premi\xe8res lettres du nom de famille en ",(0,i.kt)("strong",{parentName:"p"},"majuscules"),", les 2 premi\xe8res lettres du pr\xe9nom en ",(0,i.kt)("strong",{parentName:"p"},"minuscules"),", suivi du num\xe9ro d\u2019employ\xe9.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Si l\u2019utilisateur doit \xeatre ",(0,i.kt)("strong",{parentName:"p"},"admin"),", il doit \xeatre ajout\xe9 au groupe des ",(0,i.kt)("strong",{parentName:"p"},"administrateurs")," du syst\xe8me, sinon il doit \xeatre dans le groupe des ",(0,i.kt)("strong",{parentName:"p"},"utilisateurs r\xe9guliers"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le compte doit expirer ",(0,i.kt)("strong",{parentName:"p"},"dans 30 jours"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Infos de l&#39;utilisateur",src:a(719).Z,width:"390",height:"396"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Les commandes \xe0 utiliser sont celles du module ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-ca/powershell/module/microsoft.powershell.localaccounts/?view=powershell-5.1"},"microsoft.powershell.localaccounts"),". Celles-ci pourraient particuli\xe8rement vous int\xe9resser :"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-ca/powershell/module/microsoft.powershell.localaccounts/get-localuser?view=powershell-5.1"},"Get-LocalUser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-ca/powershell/module/microsoft.powershell.localaccounts/new-localuser?view=powershell-5.1"},"New-LocalUser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-ca/powershell/module/microsoft.powershell.localaccounts/get-localgroup?view=powershell-5.1"},"Get-LocalGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-ca/powershell/module/microsoft.powershell.localaccounts/get-localgroupmember?view=powershell-5.1"},"Get-LocalGroupMember")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/fr-ca/powershell/module/microsoft.powershell.localaccounts/add-localgroupmember?view=powershell-5.1"},"Add-LocalGroupMember")))),(0,i.kt)("h3",{id:"lancement-du-script"},"Lancement du script"),(0,i.kt)("p",null,"Le script doit rouler en tant qu\u2019administrateur. Si vous testez le script sans droits admin, il est normal qu\u2019il ne fonctionne pas. ",(0,i.kt)("strong",{parentName:"p"},"Il n\u2019est pas demand\xe9 que votre script valide s\u2019il est lanc\xe9 en admin ou demande une \xe9l\xe9vation"),"."),(0,i.kt)("p",null,"Le script doit ",(0,i.kt)("strong",{parentName:"p"},"exiger")," un param\xe8tre ",(0,i.kt)("inlineCode",{parentName:"p"},"-Path")," (obligatoire) dans lequel on sp\xe9cifie le chemin du fichier CSV \xe0 charger. Le script doit alors cr\xe9er les utilisateurs locaux selon les param\xe8tres indiqu\xe9s dans le fichier. Il doit aussi retourner les comptes utilisateurs cr\xe9\xe9s dans le pipeline. On doit aussi pouvoir passer le chemin par l\u2019entr\xe9e du pipeline, au lieu de sp\xe9cifier le param\xe8tre ",(0,i.kt)("inlineCode",{parentName:"p"},"-Path"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Exemple d&#39;ex\xe9cution",src:a(1405).Z,width:"806",height:"276"})),(0,i.kt)("p",null,"Les comptes ainsi cr\xe9\xe9s devraient \xeatre visibles dans la console Computer Management (",(0,i.kt)("inlineCode",{parentName:"p"},"compmgmt.msc")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"lusrmgr.msc"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"R\xe9sultat dans la console graphique",src:a(7025).Z,width:"806",height:"344"})),(0,i.kt)("h3",{id:"validation-du-param\xe8tre"},"Validation du param\xe8tre"),(0,i.kt)("p",null,"Le script doit planter si le chemin sp\xe9cifi\xe9 en param\xe8tre est invalide. Pour ce faire, vous devez utiliser les fonctionnalit\xe9s de validation des param\xe8tres de PowerShell."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Exemple de param\xe8tre non valide",src:a(9012).Z,width:"806",height:"276"})),(0,i.kt)("h3",{id:"journalisation"},"Journalisation"),(0,i.kt)("p",null,"Le script doit aussi garder une trace de toutes les actions qu\u2019il entreprend dans le fichier ",(0,i.kt)("strong",{parentName:"p"},"Import-LocalUsers.log")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"D\xe9but du script"),(0,i.kt)("li",{parentName:"ul"},"Traitement d\u2019un utilisateur"),(0,i.kt)("li",{parentName:"ul"},"Cr\xe9ation de l\u2019utilisateur"),(0,i.kt)("li",{parentName:"ul"},"Ajout aux admins si n\xe9cessaire"),(0,i.kt)("li",{parentName:"ul"},"Fin du script")),(0,i.kt)("p",null,"Chaque ligne doit \xeatre horodat\xe9e (timestamp) dans le format illustr\xe9, avec une pr\xe9cision en millisecondes et le fuseau horaire. Cette fonctionnalit\xe9 doit \xeatre r\xe9alis\xe9e au moyen d\u2019une ",(0,i.kt)("strong",{parentName:"p"},"fonction"),", et cette derni\xe8re doit avoir un maximum d\u2019autonomie. Par ailleurs, le fichier doit \xeatre situ\xe9 sous ",(0,i.kt)("strong",{parentName:"p"},"C:","\\","Users","\\",(0,i.kt)("em",{parentName:"strong"},"utilisateur"),"\\","AppData","\\","Local","\\","Import-LocalUsers","\\")," (celui-ci doit \xeatre cr\xe9\xe9 automatiquement s\u2019il n\u2019existe pas). Vous devez utiliser au maximum les variables d\u2019environnement offertes par Windows."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Exemple de fichier log",src:a(1627).Z,width:"847",height:"363"})),(0,i.kt)("h3",{id:"traitement-des-conflits-de-noms"},"Traitement des conflits de noms"),(0,i.kt)("p",null,"Lors du traitement des utilisateurs, il se peut qu\u2019il y ait plusieurs utilisateurs qui portent des noms semblables, qui auraient des noms d\u2019utilisateurs identiques. Programmez la logique n\xe9cessaire dans votre script pour que si un nom d\u2019utilisateur doit \xeatre identique \xe0 un existant, il doit \xeatre suivi d\u2019un 1, puis d'un 2, puis d\u2019un 3, et ainsi de suite, comme illustr\xe9 ci-dessous."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Conflits de noms",src:a(4537).Z,width:"660",height:"183"})),(0,i.kt)("h2",{id:"consignes"},"Consignes"),(0,i.kt)("p",null,"Vous devez remettre ce travail sur GitHub. Vous \xeates libres d\u2019utiliser le client Git de votre choix (VS Code, GitKraken, GitHub Desktop, SourceTree, git cli, etc.)"),(0,i.kt)("p",null,"Vous avez ",(0,i.kt)("strong",{parentName:"p"},"jusqu\u2019\xe0 une semaine avant la remise")," pour soumettre votre script pour une \xe9valuation formative sur GitHub. Pour ce faire, faites un commit avec la description ","\xab","\xa0","\xc9valuation formative","\xa0","\xbb",". Je vous donnerai des commentaires sur ce que vous avez de fait."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\xc0 moins d'une semaine de la remise finale, il sera trop tard pour la remise formative.")),(0,i.kt)("h2",{id:"conseils"},"Conseils"),(0,i.kt)("p",null,"Voici quelques conseils qui pourraient vous aider \xe0 mener \xe0 bien ce travail :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avant de commencer \xe0 coder, d\xe9crivez les \xe9tapes en pseudo-code pour d\xe9terminer la logique g\xe9n\xe9rale du script. Vous pourrez ensuite ","\xab","\xa0","traduire","\xa0","\xbb"," ce pseudo-code en PowerShell, \xe9tape par \xe9tape."),(0,i.kt)("li",{parentName:"ul"},"Utilisez une machine virtuelle pour tester votre script. Vous pouvez installer VS Code sur votre VM pour d\xe9velopper votre script."),(0,i.kt)("li",{parentName:"ul"},"Lancez VS Code en tant qu\u2019administrateur pour pouvoir tester votre script directement dans Code."),(0,i.kt)("li",{parentName:"ul"},"Utilisez le param\xe8tre ",(0,i.kt)("inlineCode",{parentName:"li"},"-WhatIf")," pour tester votre script sans qu\u2019une action r\xe9elle ne soit pos\xe9e."),(0,i.kt)("li",{parentName:"ul"},"Faites-vous un petit script de nettoyage pour effacer les utilisateurs cr\xe9\xe9s en trop."),(0,i.kt)("li",{parentName:"ul"},"Utilisez GitHub \xe0 votre avantage. D\xe8s que vous avez r\xe9ussi quelque chose dans votre script, faites un commit et un push dans GitHub. Vous pourrez ainsi profiter de l\u2019historique."),(0,i.kt)("li",{parentName:"ul"},"Testez des parties de votre script au lieu de lancer le script au complet \xe0 chaque fois. N\u2019h\xe9sitez pas \xe0 tester les commandes toutes seules, d\xe9finir des variables manuellement pour tester, etc.")),(0,i.kt)("h2",{id:"crit\xe8res-d\xe9valuation"},"Crit\xe8res d\u2019\xe9valuation"),(0,i.kt)("p",null,"Le script sera \xe9valu\xe9 selon les crit\xe8res suivants :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Crit\xe8re d'\xe9valuation"),(0,i.kt)("th",{parentName:"tr",align:null},"Pond\xe9ration"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Conception et fonctionnement g\xe9n\xe9ral"),(0,i.kt)("td",{parentName:"tr",align:null},"10%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Param\xe8tres du script"),(0,i.kt)("td",{parentName:"tr",align:null},"10%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Traitement du fichier d\u2019entr\xe9e"),(0,i.kt)("td",{parentName:"tr",align:null},"5%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cr\xe9ation des utilisateurs"),(0,i.kt)("td",{parentName:"tr",align:null},"40%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Journalisation"),(0,i.kt)("td",{parentName:"tr",align:null},"10%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lisibilit\xe9 et documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"10%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Respect des consignes"),(0,i.kt)("td",{parentName:"tr",align:null},"5%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Fran\xe7ais \xe9crit"),(0,i.kt)("td",{parentName:"tr",align:null},"10%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Total")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"100%"))))),(0,i.kt)("p",null,"Voici les d\xe9tails de ce qui sera \xe9valu\xe9 pour chaque crit\xe8re:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Conception et fonctionnement g\xe9n\xe9ral ","[10%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Le script fonctionne du premier coup"),(0,i.kt)("li",{parentName:"ul"},"Aucune erreur n\u2019est affich\xe9e pendant l\u2019ex\xe9cution"),(0,i.kt)("li",{parentName:"ul"},"Logique g\xe9n\xe9rale du script (pas de code inutile ou redondant)"),(0,i.kt)("li",{parentName:"ul"},"Respect des bonnes pratiques de programmation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Param\xe8tres du script ","[10%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"D\xe9finition des param\xe8tres conformes \xe0 l\u2019\xe9nonc\xe9"),(0,i.kt)("li",{parentName:"ul"},"Param\xe8tre obligatoire"),(0,i.kt)("li",{parentName:"ul"},"Validation de l\u2019existence du fichier en entr\xe9e"),(0,i.kt)("li",{parentName:"ul"},"Traitement du param\xe8tre par l\u2019entr\xe9e du pipeline"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Traitement du fichier d\u2019entr\xe9e ","[5%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lecture juste du fichier CSV en entr\xe9e"),(0,i.kt)("li",{parentName:"ul"},"Utilisation des commandes et param\xe8tres appropri\xe9s"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cr\xe9ation des utilisateurs ","[40%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cr\xe9ation correcte des comptes utilisateurs locaux"),(0,i.kt)("li",{parentName:"ul"},"Le nom des utilisateurs est conforme \xe0 l\u2019\xe9nonc\xe9 "),(0,i.kt)("li",{parentName:"ul"},"Utilisation ad\xe9quates des commandes"),(0,i.kt)("li",{parentName:"ul"},"Ajout des comptes non-admins au groupe des utilisateurs"),(0,i.kt)("li",{parentName:"ul"},"Ajout des comptes admin au groupe des administrateurs"),(0,i.kt)("li",{parentName:"ul"},"Les conflits de noms sont r\xe9solus conform\xe9ment \xe0 l\u2019\xe9nonc\xe9"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Journalisation ","[10%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\xc9criture des \xe9tapes d\u2019ex\xe9cution dans un fichier log"),(0,i.kt)("li",{parentName:"ul"},"Emploi d\u2019une fonction de journalisation"),(0,i.kt)("li",{parentName:"ul"},"Autonomie de la fonction"),(0,i.kt)("li",{parentName:"ul"},"Emplacement du fichier log conforme \xe0 la demande"),(0,i.kt)("li",{parentName:"ul"},"Utilisation ad\xe9quate des variables d\u2019environnement"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lisibilit\xe9 et documentation ","[10%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Choix judicieux des noms de variables et de fonctions"),(0,i.kt)("li",{parentName:"ul"},"Utilisation judicieuse des commentaires"),(0,i.kt)("li",{parentName:"ul"},"Indentation correcte"),(0,i.kt)("li",{parentName:"ul"},"Propret\xe9 du code"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Respect des consignes ","[5%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Remise du script sur GitHub tel que demand\xe9"),(0,i.kt)("li",{parentName:"ul"},"Nom du script et des param\xe8tres tel que demand\xe9"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fran\xe7ais \xe9crit ","[10%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"L\u2019\xe9valuation du fran\xe7ais porte sur les commentaires et la description des commit dans GitHub"),(0,i.kt)("li",{parentName:"ul"},"Voir la grille d\u2019\xe9valuation du fran\xe7ais \xe9crit, dans le plan de cours")))))}d.isMDXComponent=!0},4537:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/conflit_noms-edce542b2a905d294f06ba2e866c7d5c.png"},9012:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/erreur_validation-1ee1681ad6aceae6d7657aa233b1c029.png"},1405:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/execution-9e25d1e354e59bce0863d355aa2bfd00.png"},1627:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fichier_log-50bf33b5e9e1df296b1d52428d38acbc.png"},719:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/info_utilisateur-0a9d5f2248070ee4ca3d2c0678a34ef0.png"},7025:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/resultat_gui-aeb47168d03d1b3bdf8c4dc2af8f2660.png"}}]);