(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{AriH:function(e,a,t){"use strict";t("pJf4"),t("q8oJ"),t("sC2a"),t("rzGZ"),t("Dq+y"),t("8npG");var n=t("q1tI"),s=t.n(n),c=t("vOnD"),o=t("XDRZ"),b=t("uUQJ"),l=t("doq6");a.a=Object(c.f)((function(e){var a=e.keys,t=e.theme;return s.a.createElement(s.a.Fragment,null,a.map((function(e){return s.a.createElement(o.h,{key:e},s.a.createElement(o.i,null,s.a.createElement("h2",{style:{textTransform:"uppercase"}},e),s.a.createElement(b.b,{className:"striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Name"),s.a.createElement("td",null,"Theme Variable"),s.a.createElement("td",null,"Default Value"))),s.a.createElement("tbody",null,Object(l.a)(t.name,e).map((function(e){return s.a.createElement("tr",{key:e.key},s.a.createElement("td",null,e.key),s.a.createElement("td",null,e.parent),s.a.createElement("td",{dangerouslySetInnerHTML:{__html:(a=e.value,a?(a=a.toString().replace(/(#[a-f0-9]{6}|rgba.*?\))/gi,'$&<span class="color-swatch" style="background: $&"/>')).replace(/,/g,", "):"")}}));var a}))))))})))}))},LNQM:function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),c=t("XDRZ"),o=t("vOnD"),b=t("uUQJ");function l(){var e=m(["\n    "," {\n      margin-top: -3.75rem;\n      padding-top: 4.75rem;\n      padding-right: 40px;\n      padding-left: 40px;\n    }\n    img {\n      text-align: center;\n      max-width: 100%;\n    }\n\n    li {\n      margin-top: 10px;\n    }\n\n    .note {\n      border-radius: 0.25rem;\n      margin-bottom: 1rem;\n      padding: 0.6rem;\n\n      .note-title {\n        font-weight: 500;\n        text-transform: uppercase;\n        margin-bottom: 1.5rem;\n      }\n\n      .note-body {\n        font-size: 0.875rem;\n        line-height: 1.5;\n      }\n\n      &.note-info,\n      &.note-info p {\n        color: ",";\n        background-color: #f0f6ff;\n      }\n\n      &.note-warning {\n        color: ",";\n        background-color: #fffae4;\n      }\n    }\n\n    .color-swatch {\n      display: inline-block;\n      border: 1px solid black;\n      width: 0.875rem;\n      height: 0.875rem;\n      margin-left: 7px;\n      margin-bottom: -2px;\n      border-radius: 2px;\n    }\n    p {\n      font-size: ",";\n      line-height: 1.5;\n    }\n    a {\n      color: ",";\n      font-weight: ",";\n      text-decoration: none;\n      &:hover {\n        color: ",";\n        text-decoration: underline;\n      }\n    }\n    .menu-items > .menu-item {\n      margin-bottom: 0.5rem;\n      font-weight: bold;\n      a:hover {\n        font-weight: bold;\n        text-decoration: none;\n      }\n      li {\n        font-size: 0.875rem;\n        font-weight: normal;\n      }\n      li.menu-group {\n        font-weight: bold;\n        padding-top: 1.25rem;\n        padding-bottom: 1rem;\n      }\n    }\n  "]);return l=function(){return e},e}function p(){var e=m(["\n  table {\n    ","\n  }\n  ","\n"]);return p=function(){return e},e}function m(e,a){return a||(a=e.slice(0)),e.raw=a,e}var i=Object(o.d)(c.h)(p(),(function(e){var a=e.theme;return Object(b.a)(a)}),(function(e){var a=e.theme;return Object(o.c)(l(),c.i,a.colorInfo600,a.colorWarning600,a.textParagraphFontSize,a.linkTextColor,a.cardTextFontWeight,a.linkTextHoverColor)}));a.a=function(e){var a=e.children;return s.a.createElement(i,null,s.a.createElement(c.i,null,a))}},SB4r:function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),c=t("XDRZ");a.a=function(e){var a,t=Object(n.useState)(0),o=t[0],b=t[1];return s.a.createElement(n.Fragment,null,s.a.createElement(c.h,null,s.a.createElement("header",null,e.title),s.a.createElement(c.R,{onSelect:function(e){return b(e)},fullWidth:!0},s.a.createElement(c.Q,{icon:{name:"eye-outline",options:{animation:{type:"zoom"}}},title:"Overview"}),s.a.createElement(c.Q,{icon:{name:"settings-outline",options:{animation:{type:"zoom"}}},title:"Api"}),(null===(a=e.children)||void 0===a?void 0:a.length)>2?s.a.createElement(c.Q,{icon:{name:"droplet-outline",options:{animation:{type:"zoom"}}},title:"Theme"}):s.a.createElement(s.a.Fragment,null))),e.children[o])}},XCYZ:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t("q1tI"),s=t.n(n),c=t("XDRZ"),o=t("1Yd/"),b=t("SB4r"),l=(t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("7ljp")),p=t("ux+I"),m=t("vOnD");function i(){var e=function(e,a){a||(a=e.slice(0));return e.raw=a,e}(["\n  height: 50vh;\n  overflow: hidden;\n  .first {\n    background-color: #edeef7;\n  }\n"]);return i=function(){return e},e}var r=m.d.div(i());function u(){return s.a.createElement(r,null,s.a.createElement(c.w,null,s.a.createElement(c.z,null,s.a.createElement(c.N,null,s.a.createElement("header",null,"Sidebar header"),s.a.createElement(c.O,null,"Sidebar Body")),s.a.createElement(c.A,null,s.a.createElement(c.y,null,s.a.createElement(c.x,{className:"first"},"Layout Content"))))))}function j(){var e=function(e,a){a||(a=e.slice(0));return e.raw=a,e}(["\n  height: 50vh;\n  overflow: hidden;\n  .first {\n    background-color: #edeef7;\n  }\n"]);return j=function(){return e},e}var O=m.d.div(j());function N(){return s.a.createElement(O,null,s.a.createElement(c.w,null,s.a.createElement(c.z,null,s.a.createElement(c.N,{state:"compacted"}),s.a.createElement(c.A,null,s.a.createElement(c.y,null,s.a.createElement(c.x,{className:"first"},"Layout Content"))))))}var k=t("eW/1"),d=t("LNQM");var g={_frontmatter:{}},h=k.a;function y(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(l.b)(h,Object.assign({},g,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)(d.a,{mdxType:"MdxCard"},Object(l.b)("h2",{id:"sidebar"},"Sidebar"),Object(l.b)("p",null,"Layout sidebar component."),Object(l.b)(p.a,{code:Object(l.b)("div",{className:"gatsby-highlight"},Object(l.b)("pre",{className:"language-jsx"},Object(l.b)("code",null,Object(l.b)("span",{className:"token keyword"},"import")," React ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'react'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"import")," ",Object(l.b)("span",{className:"token punctuation"},"{")," Layout",Object(l.b)("span",{className:"token punctuation"},",")," LayoutColumns",Object(l.b)("span",{className:"token punctuation"},",")," LayoutColumn",Object(l.b)("span",{className:"token punctuation"},",")," LayoutContainer",Object(l.b)("span",{className:"token punctuation"},",")," LayoutContent",Object(l.b)("span",{className:"token punctuation"},",")," Sidebar",Object(l.b)("span",{className:"token punctuation"},",")," SidebarBody ",Object(l.b)("span",{className:"token punctuation"},"}")," ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'@paljs/ui'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"import")," styled ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'styled-components'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"const")," SimpleStyle ",Object(l.b)("span",{className:"token operator"},"=")," styled",Object(l.b)("span",{className:"token punctuation"},"."),"div",Object(l.b)("span",{className:"token template-string"},Object(l.b)("span",{className:"token template-punctuation string"},"`"),Object(l.b)("span",{className:"token string"},"\n","  ","height: 50vh;","\n","  ","overflow: hidden;","\n","  ",".first ","{","\n","    ","background-color: #edeef7;","\n","  ","}","\n"),Object(l.b)("span",{className:"token template-punctuation string"},"`")),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"export")," ",Object(l.b)("span",{className:"token keyword"},"default")," ",Object(l.b)("span",{className:"token keyword"},"function")," ",Object(l.b)("span",{className:"token function"},"Basic"),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token punctuation"},")")," ",Object(l.b)("span",{className:"token punctuation"},"{"),"\n","  ",Object(l.b)("span",{className:"token keyword"},"return")," ",Object(l.b)("span",{className:"token punctuation"},"("),"\n","    ",Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"SimpleStyle")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","      "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Layout")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","        "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"LayoutContainer")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Sidebar")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","            "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),"header"),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"Sidebar header"),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),"header"),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","            "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"SidebarBody")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"Sidebar Body"),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"SidebarBody")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Sidebar")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"LayoutContent")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","            "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"LayoutColumns")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","              "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"LayoutColumn"))," ",Object(l.b)("span",{className:"token attr-name"},"className"),Object(l.b)("span",{className:"token attr-value"},Object(l.b)("span",{className:"token punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},'"'),"first",Object(l.b)("span",{className:"token punctuation"},'"')),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"Layout Content"),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"LayoutColumn")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","            "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"LayoutColumns")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"LayoutContent")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","        "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"LayoutContainer")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","      "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Layout")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","    "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"SimpleStyle")),Object(l.b)("span",{className:"token punctuation"},">")),"\n","  ",Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token punctuation"},"}"),"\n"))),mdxType:"DemoComponent"},Object(l.b)(u,{mdxType:"Demo_746b44b4df5b91793559b85a88111cc6"})),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(l.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," Sidebar",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," SidebarBody ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@paljs/ui'"),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(l.b)("p",null,"Sidebar can be placed on the left, or the right side of the layout, or on start/end position of layout (depends on document direction, left to right or right to left) It can be fixed (shown above the content) or can push the layout when opened."),Object(l.b)("p",null,"There are four states - ",Object(l.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"hidden")," ",Object(l.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"visible")," ",Object(l.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"compacted")," ",Object(l.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"expanded"),". By default, sidebar content is fixed and saves its position while the page is being scrolled."),Object(l.b)("p",null,"Compacted sidebar example:"),Object(l.b)(p.a,{code:Object(l.b)("div",{className:"gatsby-highlight"},Object(l.b)("pre",{className:"language-jsx"},Object(l.b)("code",null,Object(l.b)("span",{className:"token keyword"},"import")," React ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'react'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"import")," ",Object(l.b)("span",{className:"token punctuation"},"{")," Layout",Object(l.b)("span",{className:"token punctuation"},",")," LayoutColumns",Object(l.b)("span",{className:"token punctuation"},",")," LayoutColumn",Object(l.b)("span",{className:"token punctuation"},",")," LayoutContainer",Object(l.b)("span",{className:"token punctuation"},",")," LayoutContent",Object(l.b)("span",{className:"token punctuation"},",")," Sidebar ",Object(l.b)("span",{className:"token punctuation"},"}")," ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'@paljs/ui'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"import")," styled ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'styled-components'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"const")," SimpleStyle ",Object(l.b)("span",{className:"token operator"},"=")," styled",Object(l.b)("span",{className:"token punctuation"},"."),"div",Object(l.b)("span",{className:"token template-string"},Object(l.b)("span",{className:"token template-punctuation string"},"`"),Object(l.b)("span",{className:"token string"},"\n","  ","height: 50vh;","\n","  ","overflow: hidden;","\n","  ",".first ","{","\n","    ","background-color: #edeef7;","\n","  ","}","\n"),Object(l.b)("span",{className:"token template-punctuation string"},"`")),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"export")," ",Object(l.b)("span",{className:"token keyword"},"default")," ",Object(l.b)("span",{className:"token keyword"},"function")," ",Object(l.b)("span",{className:"token function"},"Compacted"),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token punctuation"},")")," ",Object(l.b)("span",{className:"token punctuation"},"{"),"\n","  ",Object(l.b)("span",{className:"token keyword"},"return")," ",Object(l.b)("span",{className:"token punctuation"},"("),"\n","    ",Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"SimpleStyle")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","      "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Layout")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","        "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"LayoutContainer")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Sidebar"))," ",Object(l.b)("span",{className:"token attr-name"},"state"),Object(l.b)("span",{className:"token attr-value"},Object(l.b)("span",{className:"token punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},'"'),"compacted",Object(l.b)("span",{className:"token punctuation"},'"'))," ",Object(l.b)("span",{className:"token punctuation"},"/>")),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"LayoutContent")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","            "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"LayoutColumns")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","              "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"LayoutColumn"))," ",Object(l.b)("span",{className:"token attr-name"},"className"),Object(l.b)("span",{className:"token attr-value"},Object(l.b)("span",{className:"token punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},'"'),"first",Object(l.b)("span",{className:"token punctuation"},'"')),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"Layout Content"),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"LayoutColumn")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","            "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"LayoutColumns")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"LayoutContent")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","        "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"LayoutContainer")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","      "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Layout")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","    "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"SimpleStyle")),Object(l.b)("span",{className:"token punctuation"},">")),"\n","  ",Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token punctuation"},"}"),"\n"))),mdxType:"DemoComponent"},Object(l.b)(N,{mdxType:"Demo_52d6b7d9e946958aa7d411f93c5c2adb"})),Object(l.b)("p",null,"Sidebar also supports a ",Object(l.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"responsive")," behavior, listening to window size change and changing its size respectably."),Object(l.b)("h3",{id:"header"},"header"),Object(l.b)("p",null,"Sidebar header container."),Object(l.b)("p",null,"Placeholder which contains a sidebar header content, placed at the very top of the sidebar outside of the scroll area.\njust html element."),Object(l.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(l.b)("pre",Object.assign({parentName:"div"},{className:"language-html"}),Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"header"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"header"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),Object(l.b)("h3",{id:"sidebarbody"},"SidebarBody"),Object(l.b)("p",null,"Sidebar scroll area container."),Object(l.b)("div",{className:"gatsby-highlight","data-language":"jsx"},Object(l.b)("pre",Object.assign({parentName:"div"},{className:"language-jsx"}),Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"SidebarBody")),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"body"),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"SidebarBody")),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),Object(l.b)("h3",{id:"footer"},"footer"),Object(l.b)("p",null,"Sidebar footer container."),Object(l.b)("p",null,"Placeholder which contains a sidebar footer content, placed at the very bottom of the sidebar outside of the scroll area."),Object(l.b)("p",null,"just html element"),Object(l.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(l.b)("pre",Object.assign({parentName:"div"},{className:"language-html"}),Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"footer"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"footer"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),Object(l.b)("h3",{id:"sidebar-ref-methods"},"Sidebar Ref methods"),Object(l.b)("p",null,"you can use sidebar ref methods like this example:"),Object(l.b)("div",{className:"gatsby-highlight","data-language":"jsx"},Object(l.b)("pre",Object.assign({parentName:"div"},{className:"language-jsx"}),Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," React",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," useRef ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'react'"),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"Layout"),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," sidebarRef ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"useRef"),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Sidebar"))," ",Object(l.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"ref"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"sidebarRef",Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n    ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(l.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"onClick"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")")," ",Object(l.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),"=>")," sidebarRef",Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),"current",Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"toggle"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(l.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))))))}y.isMDXComponent=!0;var f=t("uHnj"),x=t("AriH"),v=[{name:"state",type:"string",description:"Initial sidebar state, expanded | compacted | visible | hidden default: expanded"},{name:"property",type:"string",description:"can be placed sidebar in right | left | start | end of layout default: start"},{name:"fixed",type:"boolean",description:"Makes sidebar fixed (shown above the layout content)"},{name:"containerFixed",type:"boolean",description:"Makes sidebar container fixed"},{name:"responsive",type:"boolean",description:"Makes sidebar listen to media query events and change its behavior"},{name:"compactedBreakpoints",type:"array of string",description:"Controls on which screen sizes sidebar should be switched to compacted state. Works only when responsive mode is on. Default values are ['xs', 'is', 'sm', 'md', 'lg']."},{name:"hiddenBreakpoints",type:"array of string",description:"Controls on which screen sizes sidebar should be switched to collapsed state. Works only when responsive mode is on. Default values are ['xs', 'is']."}],E=[{name:"toggle()",type:"Ref Method",description:"change sidebar state if in expanded take to compacted if in hidden take to visible and opposite"},{name:"hide()",type:"Ref Method",description:"change sidebar state if in hidden take to visible it used in Menu component to hide sidebar after click link"}];function w(){return s.a.createElement(c.K,null,s.a.createElement(o.a,{title:"Sidebar Components"}),s.a.createElement(c.p,{breakPoint:{xs:12}},s.a.createElement(b.a,{title:"Sidebar Components"},s.a.createElement(y,null),s.a.createElement(f.a,{name:"Sidebar",props:v,methods:E}),s.a.createElement(x.a,{keys:["sidebar"]}))))}},uHnj:function(e,a,t){"use strict";t("pJf4");var n=t("q1tI"),s=t.n(n),c=t("XDRZ"),o=t("uUQJ");a.a=function(e){return s.a.createElement(c.h,null,s.a.createElement(c.i,null,s.a.createElement("h2",null,e.name),s.a.createElement("h3",null,"Props"),s.a.createElement("p",null,e.hint),s.a.createElement(o.b,{className:"striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Name"),s.a.createElement("td",null,"Type"),s.a.createElement("td",null,"Description"))),s.a.createElement("tbody",null,e.props.map((function(e){return s.a.createElement("tr",{key:e.name},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.type),s.a.createElement("td",null,e.description))})))),e.methods&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"Methods"),s.a.createElement(o.b,{className:"striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Name"),s.a.createElement("td",null,"Type"),s.a.createElement("td",null,"Description"))),s.a.createElement("tbody",null,e.methods.map((function(e){return s.a.createElement("tr",{key:e.name},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.type),s.a.createElement("td",null,e.description))})))))))}},"ux+I":function(e,a,t){"use strict";var n=t("q1tI"),s=t.n(n),c=t("XDRZ"),o=t("vOnD");function b(){var e=p(["\n    border: 1px solid ",";\n    border-radius: ",";\n    background-color: ",";\n    .gatsby-highlight {\n      border-bottom-left-radius: ",";\n      border-bottom-right-radius: ",";\n      margin: -1.25rem !important;\n    }\n  "]);return b=function(){return e},e}function l(){var e=p(["\n  ","\n"]);return l=function(){return e},e}function p(e,a){return a||(a=e.slice(0)),e.raw=a,e}var m=o.d.div(l(),(function(e){var a=e.theme;return Object(o.c)(b(),a.cardBorderColor,a.cardBorderRadius,a.layoutBackgroundColor,a.cardBorderRadius,a.cardBorderRadius)}));a.a=function(e){var a=e.code,t=e.children;return s.a.createElement(c.K,null,s.a.createElement(c.p,{breakPoint:{xs:12}},s.a.createElement(m,null,s.a.createElement(c.R,null,s.a.createElement(c.Q,{title:"preview"},t),s.a.createElement(c.Q,{title:"code"},a)))))}}}]);
//# sourceMappingURL=component---src-pages-ui-components-sidebar-tsx-5aef2279e65aac71515d.js.map