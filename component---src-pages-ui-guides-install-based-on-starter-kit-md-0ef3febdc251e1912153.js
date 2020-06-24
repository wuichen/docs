(window.webpackJsonp=window.webpackJsonp||[]).push([[50,11,14],{"7eUV":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),o=a("eW/1"),r=a("LNQM"),s=a("1Yd/");var i={},c={_frontmatter:i},l=o.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s.a,{title:"Install Based on Starter Kit",mdxType:"SEO"}),Object(n.b)(r.a,{mdxType:"MdxCard"},Object(n.b)("h1",{id:"install-based-on-starter-kit"},"Install Based on Starter Kit"),Object(n.b)("p",null,"Starting Pal.js UI from ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/paljs/gatsby-admin-template"}),"gatsby-admin-template")," starter kit is the easiest way to run your first Pal.js UI application."),Object(n.b)("p",null,"Please note, that ",Object(n.b)("strong",{parentName:"p"},"gatsby-admin-template")," is just a frontend application. Backend integration can be done relatively simple, but you should be aware that all the data is mocked using JavaScript objects.\nIf you want the data to be dynamic, you should consider developing a backend integration by your own.\nThe Pal.js UI team doesn't consider providing generic integration layer as a part of this project because every backend API has a different structure in terms of data format and URLs."),Object(n.b)("h2",{id:"install-tools"},"Install tools"),Object(n.b)("p",null,"To install gatsby-admin-template on your machine you need to have the following tools installed:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Git - ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://git-scm.com"}),"https://git-scm.com")),Object(n.b)("li",{parentName:"ul"},"Node.js - ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://nodejs.org"}),"https://nodejs.org")," Please note the ",Object(n.b)("strong",{parentName:"li"},"version")," should be ",Object(n.b)("strong",{parentName:"li"},">=8")),Object(n.b)("li",{parentName:"ul"},"Npm - Node.js package manager, comes with Node.js. Please make sure npm ",Object(n.b)("strong",{parentName:"li"},"version")," is ",Object(n.b)("strong",{parentName:"li"},">=5")),Object(n.b)("li",{parentName:"ul"},"You might also need some specific native packages depending on your operating system like ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"build-essential")," on Ubuntu")),Object(n.b)("div",{className:"note note-warning"},Object(n.b)("div",{className:"note-title"},"Warning!"),Object(n.b)("div",{className:"note-body"},"Please note that ",Object(n.b)("strong",null,"it is not possible")," to build gatsby-admin-template",Object(n.b)("strong",null," without these tools")," and it will not be possible because of the way how React is built.")),Object(n.b)("h2",{id:"download-the-code"},"Download the code"),Object(n.b)("p",null,"When you completed tools setup, you need to download the code of ",Object(n.b)("strong",{parentName:"p"},"gatsby-admin-template")," application. The easiest way to do that is to clone GitHub repository:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"git")," clone https://github.com/paljs/gatsby-admin-template.git"))),Object(n.b)("p",null,"After clone is completed, you need to install npm modules:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"cd")," gatsby-admin-template ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," i ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"yarn")))),Object(n.b)("div",{className:"note note-warning"},Object(n.b)("div",{className:"note-title"},"Warning!"),Object(n.b)("div",{className:"note-body"},"Please make sure that installation process successfully completed without errors.")),Object(n.b)("h2",{id:"run-local-copy"},"Run local copy"),Object(n.b)("p",null,"To run a local copy in development mode, execute:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," run dev ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"yarn")," dev"))),Object(n.b)("p",null,"Go to ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"http://localhost:8000"}),"http://localhost:8000")," in your browser."),Object(n.b)("h2",{id:"production-bundle"},"Production bundle"),Object(n.b)("p",null,"To create a bundle in production mode, execute:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," run build ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"yarn")," build"))),Object(n.b)("p",null,"This will clear up your ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"public")," folder (where release files are located) and generate a release build.\nNow you can copy the sources from the ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"public")," folder and use it with any backend frameworks")))}b.isMDXComponent=!0},LNQM:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("XDRZ"),s=a("vOnD"),i=a("uUQJ"),c=Object(s.d)(r.h).withConfig({displayName:"MdxCard__StyledCard",componentId:"wfpehl-0"})(["table{","}",""],(function(e){var t=e.theme;return Object(i.a)(t)}),(function(e){var t=e.theme;return Object(s.c)(["","{margin-top:-3.75rem;padding-top:4.75rem;padding-right:40px;padding-left:40px;}img{text-align:center;max-width:100%;}li{margin-top:10px;}.note{border-radius:0.25rem;margin-bottom:1rem;padding:0.6rem;.note-title{font-weight:500;text-transform:uppercase;margin-bottom:1.5rem;}.note-body{font-size:0.875rem;line-height:1.5;}&.note-info,&.note-info p{color:",";background-color:#f0f6ff;}&.note-warning{color:",";background-color:#fffae4;}}.color-swatch{display:inline-block;border:1px solid black;width:0.875rem;height:0.875rem;margin-left:7px;margin-bottom:-2px;border-radius:2px;}p{font-size:",";line-height:1.5;}a{color:",";font-weight:",";text-decoration:none;&:hover{color:",";text-decoration:underline;}}.menu-items > .menu-item{margin-bottom:0.5rem;font-weight:bold;a:hover{font-weight:bold;text-decoration:none;}li{font-size:0.875rem;font-weight:normal;}li.menu-group{font-weight:bold;padding-top:1.25rem;padding-bottom:1rem;}}"],r.i,t.colorInfo600,t.colorWarning600,t.textParagraphFontSize,t.linkTextColor,t.cardTextFontWeight,t.linkTextHoverColor)}));t.a=function(e){var t=e.children;return o.a.createElement(c,null,o.a.createElement(r.i,null,t))}},uUQJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("vOnD"),o=function(e){return Object(n.c)(["border-spacing:0;tbody tr:nth-child(2n){background-color:",";}tbody tr:hover{background:"," !important;}thead tr{background:",";th{border-top:1px solid ",";border-left:1px solid ",";:last-child{border-right:1px solid ",";}}}tr{:last-child{td{border:1px solid ",";}}}th,td{margin:0;padding:0.5rem;border-top:1px solid ",";border-left:1px solid ",";:last-child{border-right:1px solid ",";}}td{padding:1rem 0.5rem;&:first-child{font-weight:500;}a{color:",";font-weight:",";text-decoration:none;&:hover{color:",";text-decoration:underline;}}}"],e.backgroundBasicColor2,e.backgroundBasicColor3,e.backgroundBasicColor2,e.backgroundBasicColor3,e.backgroundBasicColor3,e.backgroundBasicColor3,e.backgroundBasicColor2,e.backgroundBasicColor2,e.backgroundBasicColor2,e.backgroundBasicColor2,(function(e){return e.theme.linkTextColor}),(function(e){return e.theme.cardTextFontWeight}),(function(e){return e.theme.linkTextHoverColor}))},r=n.d.table.withConfig({displayName:"Table",componentId:"sc-1m5m5jy-0"})(["width:100%;"," &.striped{tbody tr:nth-child(odd){background:",";}td{padding:1rem 0.5rem;}}.color-swatch{display:inline-block;border:1px solid black;width:0.875rem;height:0.875rem;margin-left:7px;margin-bottom:-2px;border-radius:2px;}"],(function(e){var t=e.theme;return o(t)}),(function(e){return e.theme.layoutBackgroundColor}));t.b=r}}]);
//# sourceMappingURL=component---src-pages-ui-guides-install-based-on-starter-kit-md-0ef3febdc251e1912153.js.map