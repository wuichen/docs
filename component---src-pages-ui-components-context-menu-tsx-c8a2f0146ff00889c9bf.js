(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{AriH:function(e,t,n){"use strict";n("pJf4"),n("q8oJ"),n("sC2a"),n("rzGZ"),n("Dq+y"),n("8npG");var a=n("q1tI"),o=n.n(a),c=n("vOnD"),s=n("XDRZ"),r=n("uUQJ"),l=n("doq6");t.a=Object(c.f)((function(e){var t=e.keys,n=e.theme;return o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement(s.h,{key:e},o.a.createElement(s.i,null,o.a.createElement("h2",{style:{textTransform:"uppercase"}},e),o.a.createElement(r.b,{className:"striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Name"),o.a.createElement("td",null,"Theme Variable"),o.a.createElement("td",null,"Default Value"))),o.a.createElement("tbody",null,Object(l.a)(n.name,e).map((function(e){return o.a.createElement("tr",{key:e.key},o.a.createElement("td",null,e.key),o.a.createElement("td",null,e.parent),o.a.createElement("td",{dangerouslySetInnerHTML:{__html:(t=e.value,t?(t=t.toString().replace(/(#[a-f0-9]{6}|rgba.*?\))/gi,'$&<span class="color-swatch" style="background: $&"/>')).replace(/,/g,", "):"")}}));var t}))))))})))}))},LNQM:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),c=n("XDRZ"),s=n("vOnD"),r=n("uUQJ");function l(){var e=m(["\n    "," {\n      margin-top: -3.75rem;\n      padding-top: 4.75rem;\n      padding-right: 40px;\n      padding-left: 40px;\n    }\n    img {\n      text-align: center;\n      max-width: 100%;\n    }\n\n    li {\n      margin-top: 10px;\n    }\n\n    .note {\n      border-radius: 0.25rem;\n      margin-bottom: 1rem;\n      padding: 0.6rem;\n\n      .note-title {\n        font-weight: 500;\n        text-transform: uppercase;\n        margin-bottom: 1.5rem;\n      }\n\n      .note-body {\n        font-size: 0.875rem;\n        line-height: 1.5;\n      }\n\n      &.note-info,\n      &.note-info p {\n        color: ",";\n        background-color: #f0f6ff;\n      }\n\n      &.note-warning {\n        color: ",";\n        background-color: #fffae4;\n      }\n    }\n\n    .color-swatch {\n      display: inline-block;\n      border: 1px solid black;\n      width: 0.875rem;\n      height: 0.875rem;\n      margin-left: 7px;\n      margin-bottom: -2px;\n      border-radius: 2px;\n    }\n    p {\n      font-size: ",";\n      line-height: 1.5;\n    }\n    a {\n      color: ",";\n      font-weight: ",";\n      text-decoration: none;\n      &:hover {\n        color: ",";\n        text-decoration: underline;\n      }\n    }\n    .menu-items > .menu-item {\n      margin-bottom: 0.5rem;\n      font-weight: bold;\n      a:hover {\n        font-weight: bold;\n        text-decoration: none;\n      }\n      li {\n        font-size: 0.875rem;\n        font-weight: normal;\n      }\n      li.menu-group {\n        font-weight: bold;\n        padding-top: 1.25rem;\n        padding-bottom: 1rem;\n      }\n    }\n  "]);return l=function(){return e},e}function i(){var e=m(["\n  table {\n    ","\n  }\n  ","\n"]);return i=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),e.raw=t,e}var p=Object(s.d)(c.h)(i(),(function(e){var t=e.theme;return Object(r.a)(t)}),(function(e){var t=e.theme;return Object(s.c)(l(),c.i,t.colorInfo600,t.colorWarning600,t.textParagraphFontSize,t.linkTextColor,t.cardTextFontWeight,t.linkTextHoverColor)}));t.a=function(e){var t=e.children;return o.a.createElement(p,null,o.a.createElement(c.i,null,t))}},SB4r:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),c=n("XDRZ");t.a=function(e){var t,n=Object(a.useState)(0),s=n[0],r=n[1];return o.a.createElement(a.Fragment,null,o.a.createElement(c.h,null,o.a.createElement("header",null,e.title),o.a.createElement(c.R,{onSelect:function(e){return r(e)},fullWidth:!0},o.a.createElement(c.Q,{icon:{name:"eye-outline",options:{animation:{type:"zoom"}}},title:"Overview"}),o.a.createElement(c.Q,{icon:{name:"settings-outline",options:{animation:{type:"zoom"}}},title:"Api"}),(null===(t=e.children)||void 0===t?void 0:t.length)>2?o.a.createElement(c.Q,{icon:{name:"droplet-outline",options:{animation:{type:"zoom"}}},title:"Theme"}):o.a.createElement(o.a.Fragment,null))),e.children[s])}},aknr:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=[{name:"items",type:"array of item",description:"this contain array of menu item see down to know item props ↓"},{name:"toggleSidebar",type:"function",description:"when you put menu inside sidebar you can pass here toggleSidebar={() => sidebarRef.current.hide()} like this to hide sidebar when user click menu"},{name:"Link",type:"Component",description:"You must pass Link component here to use it in menu links and must be @reach/router Link component or any other package built in @reach/router like gatsby"},{name:"className",type:"string",description:"You can pass any css class to modify style. you have option add 'inverse' Makes colors inverse based on current theme"},{name:"style",type:"object",description:"You can pass any css object to modify style"}],o=[{name:"toggle()",type:"Ref Method",description:"toggle all menu items default: collapsed"}],c=[{name:"title",type:"string",description:"Item title"},{name:"link",type:"string",description:"Router link use for Link component"},{name:"icon",type:"string | IconProps",description:"icon css classes or EvaIcon component props"},{name:"group",type:"boolean",description:"Whether the item is just a group (non-clickable)"},{name:"expanded",type:"boolean",description:"expand item if have children from start"},{name:"hidden",type:"boolean",description:"hide item"},{name:"target",type:"string",description:"html a tag target"},{name:"url",type:"string",description:"external link will use a tag not Link component"},{name:"children",type:"array of item",description:"it take all this props ↑"}]},jt0K:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n("q1tI"),o=n.n(a),c=n("XDRZ"),s=n("1Yd/"),r=n("SB4r"),l=(n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("7ljp")),i=n("ux+I"),m=n("Wbzz");var p=function(){return o.a.createElement(c.r,{className:"with-margin inline-block",placement:"bottom",items:[{title:"Profile",link:{to:"/profile"}},{title:"Log out",link:{to:"/logout"}}],Link:m.Link},o.a.createElement(c.f,{fullWidth:!0},"Context Menu"))},u=n("eW/1"),b=n("LNQM");var d={_frontmatter:{}},k=u.a;function j(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(l.b)(k,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b.a,{mdxType:"MdxCard"},Object(l.b)("h2",{id:"contextmenu"},"ContextMenu"),Object(l.b)("p",null,"Full featured context menu"),Object(l.b)("p",null,"Just pass menu items array:"),Object(l.b)(i.a,{code:Object(l.b)("div",{className:"gatsby-highlight"},Object(l.b)("pre",{className:"language-jsx"},Object(l.b)("code",null,Object(l.b)("span",{className:"token keyword"},"import")," React ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'react'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"import")," ",Object(l.b)("span",{className:"token punctuation"},"{")," ContextMenu",Object(l.b)("span",{className:"token punctuation"},",")," Button ",Object(l.b)("span",{className:"token punctuation"},"}")," ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'@paljs/ui'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"import")," ",Object(l.b)("span",{className:"token punctuation"},"{")," Link ",Object(l.b)("span",{className:"token punctuation"},"}")," ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'gatsby'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n","\n",Object(l.b)("span",{className:"token keyword"},"function")," ",Object(l.b)("span",{className:"token function"},"Basic"),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token punctuation"},")")," ",Object(l.b)("span",{className:"token punctuation"},"{"),"\n","  ",Object(l.b)("span",{className:"token keyword"},"return")," ",Object(l.b)("span",{className:"token punctuation"},"("),"\n","    ",Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"ContextMenu")),"\n","      ",Object(l.b)("span",{className:"token attr-name"},"className"),Object(l.b)("span",{className:"token attr-value"},Object(l.b)("span",{className:"token punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},'"'),"with-margin inline-block",Object(l.b)("span",{className:"token punctuation"},'"')),"\n","      ",Object(l.b)("span",{className:"token attr-name"},"placement"),Object(l.b)("span",{className:"token attr-value"},Object(l.b)("span",{className:"token punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},'"'),"bottom",Object(l.b)("span",{className:"token punctuation"},'"')),"\n","      ",Object(l.b)("span",{className:"token attr-name"},"items"),Object(l.b)("span",{className:"token script language-javascript"},Object(l.b)("span",{className:"token script-punctuation punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},"{"),Object(l.b)("span",{className:"token punctuation"},"["),"\n","        ",Object(l.b)("span",{className:"token punctuation"},"{")," title",Object(l.b)("span",{className:"token operator"},":")," ",Object(l.b)("span",{className:"token string"},"'Profile'"),Object(l.b)("span",{className:"token punctuation"},",")," link",Object(l.b)("span",{className:"token operator"},":")," ",Object(l.b)("span",{className:"token punctuation"},"{")," to",Object(l.b)("span",{className:"token operator"},":")," ",Object(l.b)("span",{className:"token string"},"'/profile'")," ",Object(l.b)("span",{className:"token punctuation"},"}")," ",Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token punctuation"},","),"\n","        ",Object(l.b)("span",{className:"token punctuation"},"{")," title",Object(l.b)("span",{className:"token operator"},":")," ",Object(l.b)("span",{className:"token string"},"'Log out'"),Object(l.b)("span",{className:"token punctuation"},",")," link",Object(l.b)("span",{className:"token operator"},":")," ",Object(l.b)("span",{className:"token punctuation"},"{")," to",Object(l.b)("span",{className:"token operator"},":")," ",Object(l.b)("span",{className:"token string"},"'/logout'")," ",Object(l.b)("span",{className:"token punctuation"},"}")," ",Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token punctuation"},","),"\n","      ",Object(l.b)("span",{className:"token punctuation"},"]"),Object(l.b)("span",{className:"token punctuation"},"}")),"\n","      ",Object(l.b)("span",{className:"token attr-name"},"Link"),Object(l.b)("span",{className:"token script language-javascript"},Object(l.b)("span",{className:"token script-punctuation punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},"{"),"Link",Object(l.b)("span",{className:"token punctuation"},"}")),"\n","    ",Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","      "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Button"))," ",Object(l.b)("span",{className:"token attr-name"},"fullWidth"),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"Context Menu"),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Button")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","    "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"ContextMenu")),Object(l.b)("span",{className:"token punctuation"},">")),"\n","  ",Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token punctuation"},"}"),"\n","\n",Object(l.b)("span",{className:"token keyword"},"export")," ",Object(l.b)("span",{className:"token keyword"},"default")," Basic",Object(l.b)("span",{className:"token punctuation"},";"),"\n"))),mdxType:"DemoComponent"},Object(l.b)(p,{mdxType:"Demo_c7dcd31fb96ff68aadb99339cbcf0c1d"})),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(l.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," ContextMenu ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@paljs/ui'"),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(l.b)("p",null,"this component just ",Object(l.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Menu")," in ",Object(l.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Popover")," with some css style to custom it.")))}j.isMDXComponent=!0;var O=n("uHnj"),g=n("AriH"),N=[{name:"items",type:"array of item",description:"this contain array of menu item see down to know item props ↓"},{name:"Link",type:"Component",description:"You must pass Link component here to use it in menu links and must be @reach/router Link component or any other package built in @reach/router like gatsby"},{name:"placement",type:"string",description:"Position will be calculated relatively host element based on the position. Can be top, right, bottom, left, start or end. and it Required"},{name:"children",type:"any",description:"this target content can be button link any thing and it Required"},{name:"eventListener",type:"function",description:"component have eventListener to scrollArea but if you want to add eventListener to any other container just pass value that accepted in `querySelector` id: #scroll class: .scroll"},{name:"className",type:"string",description:"You can pass any css class to modify style"},{name:"style",type:"object",description:"You can pass any css object to modify style"}],f=n("aknr");function h(){return o.a.createElement(c.K,null,o.a.createElement(s.a,{title:"ContextMenu Component"}),o.a.createElement(c.p,{breakPoint:{xs:12}},o.a.createElement(r.a,{title:"ContextMenu Component"},o.a.createElement(j,null),o.a.createElement(o.a.Fragment,null,o.a.createElement(O.a,{name:"ContextMenu",props:N,hint:"items prop take array of object item go down to see his props ↓"}),o.a.createElement(O.a,{name:"Item",props:f.a})),o.a.createElement(g.a,{keys:["context"]}))))}},uHnj:function(e,t,n){"use strict";n("pJf4");var a=n("q1tI"),o=n.n(a),c=n("XDRZ"),s=n("uUQJ");t.a=function(e){return o.a.createElement(c.h,null,o.a.createElement(c.i,null,o.a.createElement("h2",null,e.name),o.a.createElement("h3",null,"Props"),o.a.createElement("p",null,e.hint),o.a.createElement(s.b,{className:"striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Name"),o.a.createElement("td",null,"Type"),o.a.createElement("td",null,"Description"))),o.a.createElement("tbody",null,e.props.map((function(e){return o.a.createElement("tr",{key:e.name},o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.type),o.a.createElement("td",null,e.description))})))),e.methods&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Methods"),o.a.createElement(s.b,{className:"striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Name"),o.a.createElement("td",null,"Type"),o.a.createElement("td",null,"Description"))),o.a.createElement("tbody",null,e.methods.map((function(e){return o.a.createElement("tr",{key:e.name},o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.type),o.a.createElement("td",null,e.description))})))))))}},"ux+I":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),c=n("XDRZ"),s=n("vOnD");function r(){var e=i(["\n    border: 1px solid ",";\n    border-radius: ",";\n    background-color: ",";\n    .gatsby-highlight {\n      border-bottom-left-radius: ",";\n      border-bottom-right-radius: ",";\n      margin: -1.25rem !important;\n    }\n  "]);return r=function(){return e},e}function l(){var e=i(["\n  ","\n"]);return l=function(){return e},e}function i(e,t){return t||(t=e.slice(0)),e.raw=t,e}var m=s.d.div(l(),(function(e){var t=e.theme;return Object(s.c)(r(),t.cardBorderColor,t.cardBorderRadius,t.layoutBackgroundColor,t.cardBorderRadius,t.cardBorderRadius)}));t.a=function(e){var t=e.code,n=e.children;return o.a.createElement(c.K,null,o.a.createElement(c.p,{breakPoint:{xs:12}},o.a.createElement(m,null,o.a.createElement(c.R,null,o.a.createElement(c.Q,{title:"preview"},n),o.a.createElement(c.Q,{title:"code"},t)))))}}}]);
//# sourceMappingURL=component---src-pages-ui-components-context-menu-tsx-c8a2f0146ff00889c9bf.js.map