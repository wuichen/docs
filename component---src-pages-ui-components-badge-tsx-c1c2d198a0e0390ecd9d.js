(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{AriH:function(e,t,n){"use strict";n("pJf4"),n("q8oJ"),n("sC2a"),n("rzGZ"),n("Dq+y"),n("8npG");var a=n("q1tI"),s=n.n(a),c=n("vOnD"),o=n("XDRZ"),l=n("uUQJ"),r=n("doq6");t.a=Object(c.f)((function(e){var t=e.keys,n=e.theme;return s.a.createElement(s.a.Fragment,null,t.map((function(e){return s.a.createElement(o.h,{key:e},s.a.createElement(o.i,null,s.a.createElement("h2",{style:{textTransform:"uppercase"}},e),s.a.createElement(l.b,{className:"striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Name"),s.a.createElement("td",null,"Theme Variable"),s.a.createElement("td",null,"Default Value"))),s.a.createElement("tbody",null,Object(r.a)(n.name,e).map((function(e){return s.a.createElement("tr",{key:e.key},s.a.createElement("td",null,e.key),s.a.createElement("td",null,e.parent),s.a.createElement("td",{dangerouslySetInnerHTML:{__html:(t=e.value,t?(t=t.toString().replace(/(#[a-f0-9]{6}|rgba.*?\))/gi,'$&<span class="color-swatch" style="background: $&"/>')).replace(/,/g,", "):"")}}));var t}))))))})))}))},Iro9:function(e,t,n){"use strict";n.d(t,"j",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"l",(function(){return c})),n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return i})),n.d(t,"m",(function(){return p})),n.d(t,"k",(function(){return m})),n.d(t,"i",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"b",(function(){return j}));var a=["Info","Success","Danger","Primary","Warning","Control","Basic"],s=["start","end","right","left","top","bottom"],c=["click","hover","focus","hint"],o=["Tiny","Small","Medium","Large","Giant"],l=["Rectangle","SemiRound","Round"],r=["filled","outline","ghost","hero"],b=["topRight","topLeft","bottomRight","bottomLeft","topStart","topEnd","bottomStart","bottomEnd"].join(" | "),i=s.join(" | "),p=c.join(" | "),m=a.join(" | "),u=o.join(" | "),d=l.join(" | "),j=r.join(" | ")},LNQM:function(e,t,n){"use strict";var a=n("q1tI"),s=n.n(a),c=n("XDRZ"),o=n("vOnD"),l=n("uUQJ");function r(){var e=i(["\n    "," {\n      margin-top: -3.75rem;\n      padding-top: 4.75rem;\n      padding-right: 40px;\n      padding-left: 40px;\n    }\n    img {\n      text-align: center;\n      max-width: 100%;\n    }\n\n    li {\n      margin-top: 10px;\n    }\n\n    .note {\n      border-radius: 0.25rem;\n      margin-bottom: 1rem;\n      padding: 0.6rem;\n\n      .note-title {\n        font-weight: 500;\n        text-transform: uppercase;\n        margin-bottom: 1.5rem;\n      }\n\n      .note-body {\n        font-size: 0.875rem;\n        line-height: 1.5;\n      }\n\n      &.note-info,\n      &.note-info p {\n        color: ",";\n        background-color: #f0f6ff;\n      }\n\n      &.note-warning {\n        color: ",";\n        background-color: #fffae4;\n      }\n    }\n\n    .color-swatch {\n      display: inline-block;\n      border: 1px solid black;\n      width: 0.875rem;\n      height: 0.875rem;\n      margin-left: 7px;\n      margin-bottom: -2px;\n      border-radius: 2px;\n    }\n    p {\n      font-size: ",";\n      line-height: 1.5;\n    }\n    a {\n      color: ",";\n      font-weight: ",";\n      text-decoration: none;\n      &:hover {\n        color: ",";\n        text-decoration: underline;\n      }\n    }\n    .menu-items > .menu-item {\n      margin-bottom: 0.5rem;\n      font-weight: bold;\n      a:hover {\n        font-weight: bold;\n        text-decoration: none;\n      }\n      li {\n        font-size: 0.875rem;\n        font-weight: normal;\n      }\n      li.menu-group {\n        font-weight: bold;\n        padding-top: 1.25rem;\n        padding-bottom: 1rem;\n      }\n    }\n  "]);return r=function(){return e},e}function b(){var e=i(["\n  table {\n    ","\n  }\n  ","\n"]);return b=function(){return e},e}function i(e,t){return t||(t=e.slice(0)),e.raw=t,e}var p=Object(o.d)(c.h)(b(),(function(e){var t=e.theme;return Object(l.a)(t)}),(function(e){var t=e.theme;return Object(o.c)(r(),c.i,t.colorInfo600,t.colorWarning600,t.textParagraphFontSize,t.linkTextColor,t.cardTextFontWeight,t.linkTextHoverColor)}));t.a=function(e){var t=e.children;return s.a.createElement(p,null,s.a.createElement(c.i,null,t))}},SB4r:function(e,t,n){"use strict";var a=n("q1tI"),s=n.n(a),c=n("XDRZ");t.a=function(e){var t,n=Object(a.useState)(0),o=n[0],l=n[1];return s.a.createElement(a.Fragment,null,s.a.createElement(c.h,null,s.a.createElement("header",null,e.title),s.a.createElement(c.R,{onSelect:function(e){return l(e)},fullWidth:!0},s.a.createElement(c.Q,{icon:{name:"eye-outline",options:{animation:{type:"zoom"}}},title:"Overview"}),s.a.createElement(c.Q,{icon:{name:"settings-outline",options:{animation:{type:"zoom"}}},title:"Api"}),(null===(t=e.children)||void 0===t?void 0:t.length)>2?s.a.createElement(c.Q,{icon:{name:"droplet-outline",options:{animation:{type:"zoom"}}},title:"Theme"}):s.a.createElement(s.a.Fragment,null))),e.children[o])}},rABp:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("q1tI"),s=n.n(a),c=n("XDRZ"),o=n("1Yd/"),l=n("SB4r"),r=(n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("7ljp")),b=n("ux+I");var i=function(){return s.a.createElement(c.h,null,s.a.createElement("header",{style:{position:"relative"}},s.a.createElement(c.e,{status:"Success",position:"topRight"},"New"),s.a.createElement(c.e,{status:"Danger",position:"bottomLeft"},"+99")),s.a.createElement(c.i,null,"Card body."))},p=n("eW/1"),m=n("LNQM");var u={_frontmatter:{}},d=p.a;function j(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(r.b)(d,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(m.a,{mdxType:"MdxCard"},Object(r.b)("h2",{id:"badge"},"Badge"),Object(r.b)("p",null,"Badge is a simple labeling component. It can be used to add additional information to any content or highlight unread items."),Object(r.b)("p",null,"Element is absolute positioned, so parent should be ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position"}),"positioned element"),". It means parent position should be set to anything except ",Object(r.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"static"),", e.g. ",Object(r.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"relative"),", ",Object(r.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"absolute"),", ",Object(r.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"fixed"),", or ",Object(r.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"sticky"),"."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(r.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(r.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(r.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," Badge ",Object(r.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(r.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(r.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@paljs/ui'"),Object(r.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(r.b)("p",null,"Badge with default position and status(color):"),Object(r.b)("div",{className:"gatsby-highlight","data-language":"jsx"},Object(r.b)("pre",Object.assign({parentName:"div"},{className:"language-jsx"}),Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),Object(r.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(r.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(r.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(r.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Badge")),Object(r.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),Object(r.b)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"badge text"),Object(r.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(r.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(r.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),Object(r.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Badge")),Object(r.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.b)("p",null,"For example, badge can be placed into ",Object(r.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Card")," header:"),Object(r.b)(b.a,{code:Object(r.b)("div",{className:"gatsby-highlight"},Object(r.b)("pre",{className:"language-jsx"},Object(r.b)("code",null,Object(r.b)("span",{className:"token keyword"},"import")," React ",Object(r.b)("span",{className:"token keyword"},"from")," ",Object(r.b)("span",{className:"token string"},"'react'"),Object(r.b)("span",{className:"token punctuation"},";"),"\n",Object(r.b)("span",{className:"token keyword"},"import")," ",Object(r.b)("span",{className:"token punctuation"},"{")," Card",Object(r.b)("span",{className:"token punctuation"},",")," CardBody",Object(r.b)("span",{className:"token punctuation"},",")," Badge ",Object(r.b)("span",{className:"token punctuation"},"}")," ",Object(r.b)("span",{className:"token keyword"},"from")," ",Object(r.b)("span",{className:"token string"},"'@paljs/ui'"),Object(r.b)("span",{className:"token punctuation"},";"),"\n","\n",Object(r.b)("span",{className:"token keyword"},"function")," ",Object(r.b)("span",{className:"token function"},"Example"),Object(r.b)("span",{className:"token punctuation"},"("),Object(r.b)("span",{className:"token punctuation"},")")," ",Object(r.b)("span",{className:"token punctuation"},"{"),"\n","  ",Object(r.b)("span",{className:"token keyword"},"return")," ",Object(r.b)("span",{className:"token punctuation"},"("),"\n","    ",Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"<"),Object(r.b)("span",{className:"token class-name"},"Card")),Object(r.b)("span",{className:"token punctuation"},">")),Object(r.b)("span",{className:"token plain-text"},"\n","      "),Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"<"),"header")," ",Object(r.b)("span",{className:"token attr-name"},"style"),Object(r.b)("span",{className:"token script language-javascript"},Object(r.b)("span",{className:"token script-punctuation punctuation"},"="),Object(r.b)("span",{className:"token punctuation"},"{"),Object(r.b)("span",{className:"token punctuation"},"{")," position",Object(r.b)("span",{className:"token operator"},":")," ",Object(r.b)("span",{className:"token string"},"'relative'")," ",Object(r.b)("span",{className:"token punctuation"},"}"),Object(r.b)("span",{className:"token punctuation"},"}")),Object(r.b)("span",{className:"token punctuation"},">")),Object(r.b)("span",{className:"token plain-text"},"\n","        "),Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"<"),Object(r.b)("span",{className:"token class-name"},"Badge"))," ",Object(r.b)("span",{className:"token attr-name"},"status"),Object(r.b)("span",{className:"token attr-value"},Object(r.b)("span",{className:"token punctuation"},"="),Object(r.b)("span",{className:"token punctuation"},'"'),"Success",Object(r.b)("span",{className:"token punctuation"},'"'))," ",Object(r.b)("span",{className:"token attr-name"},"position"),Object(r.b)("span",{className:"token attr-value"},Object(r.b)("span",{className:"token punctuation"},"="),Object(r.b)("span",{className:"token punctuation"},'"'),"topRight",Object(r.b)("span",{className:"token punctuation"},'"')),Object(r.b)("span",{className:"token punctuation"},">")),Object(r.b)("span",{className:"token plain-text"},"\n","          ","New","\n","        "),Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"</"),Object(r.b)("span",{className:"token class-name"},"Badge")),Object(r.b)("span",{className:"token punctuation"},">")),Object(r.b)("span",{className:"token plain-text"},"\n","        "),Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"<"),Object(r.b)("span",{className:"token class-name"},"Badge"))," ",Object(r.b)("span",{className:"token attr-name"},"status"),Object(r.b)("span",{className:"token attr-value"},Object(r.b)("span",{className:"token punctuation"},"="),Object(r.b)("span",{className:"token punctuation"},'"'),"Danger",Object(r.b)("span",{className:"token punctuation"},'"'))," ",Object(r.b)("span",{className:"token attr-name"},"position"),Object(r.b)("span",{className:"token attr-value"},Object(r.b)("span",{className:"token punctuation"},"="),Object(r.b)("span",{className:"token punctuation"},'"'),"bottomLeft",Object(r.b)("span",{className:"token punctuation"},'"')),Object(r.b)("span",{className:"token punctuation"},">")),Object(r.b)("span",{className:"token plain-text"},"\n","          ","+99","\n","        "),Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"</"),Object(r.b)("span",{className:"token class-name"},"Badge")),Object(r.b)("span",{className:"token punctuation"},">")),Object(r.b)("span",{className:"token plain-text"},"\n","      "),Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"</"),"header"),Object(r.b)("span",{className:"token punctuation"},">")),Object(r.b)("span",{className:"token plain-text"},"\n","      "),Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"<"),Object(r.b)("span",{className:"token class-name"},"CardBody")),Object(r.b)("span",{className:"token punctuation"},">")),Object(r.b)("span",{className:"token plain-text"},"Card body."),Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"</"),Object(r.b)("span",{className:"token class-name"},"CardBody")),Object(r.b)("span",{className:"token punctuation"},">")),Object(r.b)("span",{className:"token plain-text"},"\n","    "),Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token tag"},Object(r.b)("span",{className:"token punctuation"},"</"),Object(r.b)("span",{className:"token class-name"},"Card")),Object(r.b)("span",{className:"token punctuation"},">")),"\n","  ",Object(r.b)("span",{className:"token punctuation"},")"),Object(r.b)("span",{className:"token punctuation"},";"),"\n",Object(r.b)("span",{className:"token punctuation"},"}"),"\n","\n",Object(r.b)("span",{className:"token keyword"},"export")," ",Object(r.b)("span",{className:"token keyword"},"default")," Example",Object(r.b)("span",{className:"token punctuation"},";"),"\n"))),mdxType:"DemoComponent"},Object(r.b)(i,{mdxType:"Demo_f462335bcc71821c09cc0eb8cf34b25e"}))))}j.isMDXComponent=!0;var O=n("uHnj"),g=n("AriH"),N=n("Iro9"),k=[{name:"position",type:"string",description:"Can be set to one of predefined positions: "+N.e},{name:"status",type:"string",description:"(adds specific styles): "+N.k},{name:"children",type:"string",description:"component content"}];function f(){return s.a.createElement(c.K,null,s.a.createElement(o.a,{title:"Badge Component"}),s.a.createElement(c.p,{breakPoint:{xs:12}},s.a.createElement(l.a,{title:"Badge Component"},s.a.createElement(j,null),s.a.createElement(O.a,{name:"Badge",props:k}),s.a.createElement(g.a,{keys:["badge"]}))))}},uHnj:function(e,t,n){"use strict";n("pJf4");var a=n("q1tI"),s=n.n(a),c=n("XDRZ"),o=n("uUQJ");t.a=function(e){return s.a.createElement(c.h,null,s.a.createElement(c.i,null,s.a.createElement("h2",null,e.name),s.a.createElement("h3",null,"Props"),s.a.createElement("p",null,e.hint),s.a.createElement(o.b,{className:"striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Name"),s.a.createElement("td",null,"Type"),s.a.createElement("td",null,"Description"))),s.a.createElement("tbody",null,e.props.map((function(e){return s.a.createElement("tr",{key:e.name},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.type),s.a.createElement("td",null,e.description))})))),e.methods&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"Methods"),s.a.createElement(o.b,{className:"striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Name"),s.a.createElement("td",null,"Type"),s.a.createElement("td",null,"Description"))),s.a.createElement("tbody",null,e.methods.map((function(e){return s.a.createElement("tr",{key:e.name},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.type),s.a.createElement("td",null,e.description))})))))))}},"ux+I":function(e,t,n){"use strict";var a=n("q1tI"),s=n.n(a),c=n("XDRZ"),o=n("vOnD");function l(){var e=b(["\n    border: 1px solid ",";\n    border-radius: ",";\n    background-color: ",";\n    .gatsby-highlight {\n      border-bottom-left-radius: ",";\n      border-bottom-right-radius: ",";\n      margin: -1.25rem !important;\n    }\n  "]);return l=function(){return e},e}function r(){var e=b(["\n  ","\n"]);return r=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),e.raw=t,e}var i=o.d.div(r(),(function(e){var t=e.theme;return Object(o.c)(l(),t.cardBorderColor,t.cardBorderRadius,t.layoutBackgroundColor,t.cardBorderRadius,t.cardBorderRadius)}));t.a=function(e){var t=e.code,n=e.children;return s.a.createElement(c.K,null,s.a.createElement(c.p,{breakPoint:{xs:12}},s.a.createElement(i,null,s.a.createElement(c.R,null,s.a.createElement(c.Q,{title:"preview"},n),s.a.createElement(c.Q,{title:"code"},t)))))}}}]);
//# sourceMappingURL=component---src-pages-ui-components-badge-tsx-c1c2d198a0e0390ecd9d.js.map