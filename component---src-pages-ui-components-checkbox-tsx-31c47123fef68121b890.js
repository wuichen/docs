(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{AriH:function(e,t,n){"use strict";n("pJf4"),n("q8oJ"),n("sC2a"),n("rzGZ"),n("Dq+y"),n("8npG");var a=n("q1tI"),c=n.n(a),s=n("vOnD"),o=n("XDRZ"),b=n("uUQJ"),l=n("doq6");t.a=Object(s.f)((function(e){var t=e.keys,n=e.theme;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement(o.h,{key:e},c.a.createElement(o.i,null,c.a.createElement("h2",{style:{textTransform:"uppercase"}},e),c.a.createElement(b.b,{className:"striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Name"),c.a.createElement("td",null,"Theme Variable"),c.a.createElement("td",null,"Default Value"))),c.a.createElement("tbody",null,Object(l.a)(n.name,e).map((function(e){return c.a.createElement("tr",{key:e.key},c.a.createElement("td",null,e.key),c.a.createElement("td",null,e.parent),c.a.createElement("td",{dangerouslySetInnerHTML:{__html:(t=e.value,t?(t=t.toString().replace(/(#[a-f0-9]{6}|rgba.*?\))/gi,'$&<span class="color-swatch" style="background: $&"/>')).replace(/,/g,", "):"")}}));var t}))))))})))}))},Fj2X:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var a=n("q1tI"),c=n.n(a),s=n("XDRZ"),o=n("1Yd/"),b=n("SB4r"),l=(n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("7ljp")),p=n("ux+I"),u=(n("xtjI"),n("4DPX"),n("Iro9"));function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={};u.j.forEach((function(e){return k[e]=!1}));var j=function(){var e=Object(a.useState)(k),t=e[0],n=e[1];return c.a.createElement(s.h,null,c.a.createElement("header",null,"Checkbox Status"),c.a.createElement(s.i,null,c.a.createElement(s.K,null,u.j.map((function(e){return c.a.createElement(s.p,{key:e,breakPoint:{xs:!0}},c.a.createElement(s.o,{checked:t[e],status:e,onChange:function(a){return function(e,a){var c;n(m(m({},t),{},((c={})[a]=e,c)))}(a,e)}},e))})),c.a.createElement(s.p,{breakPoint:{xs:!0}},c.a.createElement(s.o,{checked:!0,onChange:function(){return{}},disabled:!0},"disabled")))))},O=n("eW/1"),N=n("LNQM");var d={_frontmatter:{}},g=O.a;function f(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(l.b)(g,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(N.a,{mdxType:"MdxCard"},Object(l.b)("h2",{id:"checkbox"},"Checkbox"),Object(l.b)("p",null,"Styled checkbox component"),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(l.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," Checkbox ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(l.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@paljs/ui'"),Object(l.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(l.b)(p.a,{code:Object(l.b)("div",{className:"gatsby-highlight"},Object(l.b)("pre",{className:"language-jsx"},Object(l.b)("code",null,Object(l.b)("span",{className:"token keyword"},"import")," React",Object(l.b)("span",{className:"token punctuation"},",")," ",Object(l.b)("span",{className:"token punctuation"},"{")," useState ",Object(l.b)("span",{className:"token punctuation"},"}")," ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'react'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"import")," ",Object(l.b)("span",{className:"token punctuation"},"{")," Checkbox",Object(l.b)("span",{className:"token punctuation"},",")," Row",Object(l.b)("span",{className:"token punctuation"},",")," Col",Object(l.b)("span",{className:"token punctuation"},",")," Card",Object(l.b)("span",{className:"token punctuation"},",")," CardBody",Object(l.b)("span",{className:"token punctuation"},",")," Status ",Object(l.b)("span",{className:"token punctuation"},"}")," ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'@paljs/ui'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token keyword"},"import")," ",Object(l.b)("span",{className:"token punctuation"},"{")," status ",Object(l.b)("span",{className:"token punctuation"},"}")," ",Object(l.b)("span",{className:"token keyword"},"from")," ",Object(l.b)("span",{className:"token string"},"'../shared'"),Object(l.b)("span",{className:"token punctuation"},";"),"\n","\n",Object(l.b)("span",{className:"token keyword"},"const")," initState",Object(l.b)("span",{className:"token operator"},":")," any ",Object(l.b)("span",{className:"token operator"},"=")," ",Object(l.b)("span",{className:"token punctuation"},"{"),Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token punctuation"},";"),"\n","status",Object(l.b)("span",{className:"token punctuation"},"."),Object(l.b)("span",{className:"token function"},"forEach"),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token parameter"},"key"),Object(l.b)("span",{className:"token punctuation"},")")," ",Object(l.b)("span",{className:"token operator"},"=>")," ",Object(l.b)("span",{className:"token punctuation"},"("),"initState",Object(l.b)("span",{className:"token punctuation"},"["),"key",Object(l.b)("span",{className:"token punctuation"},"]")," ",Object(l.b)("span",{className:"token operator"},"=")," ",Object(l.b)("span",{className:"token boolean"},"false"),Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},";"),"\n","\n",Object(l.b)("span",{className:"token keyword"},"function")," ",Object(l.b)("span",{className:"token function"},"Example"),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token punctuation"},")")," ",Object(l.b)("span",{className:"token punctuation"},"{"),"\n","  ",Object(l.b)("span",{className:"token keyword"},"const")," ",Object(l.b)("span",{className:"token punctuation"},"["),"checkbox",Object(l.b)("span",{className:"token punctuation"},",")," setCheckbox",Object(l.b)("span",{className:"token punctuation"},"]")," ",Object(l.b)("span",{className:"token operator"},"=")," ",Object(l.b)("span",{className:"token function"},"useState"),Object(l.b)("span",{className:"token punctuation"},"("),"initState",Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},";"),"\n","  ",Object(l.b)("span",{className:"token keyword"},"const")," ",Object(l.b)("span",{className:"token function-variable function"},"onChangeCheckbox")," ",Object(l.b)("span",{className:"token operator"},"=")," ",Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token parameter"},"value",Object(l.b)("span",{className:"token operator"},":")," boolean",Object(l.b)("span",{className:"token punctuation"},",")," key",Object(l.b)("span",{className:"token operator"},":")," Status"),Object(l.b)("span",{className:"token punctuation"},")")," ",Object(l.b)("span",{className:"token operator"},"=>")," ",Object(l.b)("span",{className:"token punctuation"},"{"),"\n","    ",Object(l.b)("span",{className:"token function"},"setCheckbox"),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token punctuation"},"{")," ",Object(l.b)("span",{className:"token operator"},"..."),"checkbox",Object(l.b)("span",{className:"token punctuation"},",")," ",Object(l.b)("span",{className:"token punctuation"},"["),"key",Object(l.b)("span",{className:"token punctuation"},"]"),Object(l.b)("span",{className:"token operator"},":")," value ",Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},";"),"\n","  ",Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token punctuation"},";"),"\n","  ",Object(l.b)("span",{className:"token keyword"},"return")," ",Object(l.b)("span",{className:"token punctuation"},"("),"\n","    ",Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Card")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","      "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),"header"),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"Checkbox Status"),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),"header"),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","      "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"CardBody")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","        "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Row")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token punctuation"},"{"),"status",Object(l.b)("span",{className:"token punctuation"},"."),Object(l.b)("span",{className:"token function"},"map"),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token parameter"},"key"),Object(l.b)("span",{className:"token punctuation"},")")," ",Object(l.b)("span",{className:"token operator"},"=>")," ",Object(l.b)("span",{className:"token punctuation"},"("),"\n","            ",Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Col"))," ",Object(l.b)("span",{className:"token attr-name"},"key"),Object(l.b)("span",{className:"token script language-javascript"},Object(l.b)("span",{className:"token script-punctuation punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},"{"),"key",Object(l.b)("span",{className:"token punctuation"},"}"))," ",Object(l.b)("span",{className:"token attr-name"},"breakPoint"),Object(l.b)("span",{className:"token script language-javascript"},Object(l.b)("span",{className:"token script-punctuation punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},"{"),Object(l.b)("span",{className:"token punctuation"},"{")," xs",Object(l.b)("span",{className:"token operator"},":")," ",Object(l.b)("span",{className:"token boolean"},"true")," ",Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token punctuation"},"}")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","              "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Checkbox"))," ",Object(l.b)("span",{className:"token attr-name"},"checked"),Object(l.b)("span",{className:"token script language-javascript"},Object(l.b)("span",{className:"token script-punctuation punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},"{"),"checkbox",Object(l.b)("span",{className:"token punctuation"},"["),"key",Object(l.b)("span",{className:"token punctuation"},"]"),Object(l.b)("span",{className:"token punctuation"},"}"))," ",Object(l.b)("span",{className:"token attr-name"},"status"),Object(l.b)("span",{className:"token script language-javascript"},Object(l.b)("span",{className:"token script-punctuation punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},"{"),"key",Object(l.b)("span",{className:"token punctuation"},"}"))," ",Object(l.b)("span",{className:"token attr-name"},"onChange"),Object(l.b)("span",{className:"token script language-javascript"},Object(l.b)("span",{className:"token script-punctuation punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},"{"),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token parameter"},"value"),Object(l.b)("span",{className:"token punctuation"},")")," ",Object(l.b)("span",{className:"token operator"},"=>")," ",Object(l.b)("span",{className:"token function"},"onChangeCheckbox"),Object(l.b)("span",{className:"token punctuation"},"("),"value",Object(l.b)("span",{className:"token punctuation"},",")," key",Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},"}")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","                "),Object(l.b)("span",{className:"token punctuation"},"{"),"key",Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token plain-text"},"\n","              "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Checkbox")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","            "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Col")),Object(l.b)("span",{className:"token punctuation"},">")),"\n","          ",Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Col"))," ",Object(l.b)("span",{className:"token attr-name"},"breakPoint"),Object(l.b)("span",{className:"token script language-javascript"},Object(l.b)("span",{className:"token script-punctuation punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},"{"),Object(l.b)("span",{className:"token punctuation"},"{")," xs",Object(l.b)("span",{className:"token operator"},":")," ",Object(l.b)("span",{className:"token boolean"},"true")," ",Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token punctuation"},"}")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","            "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"<"),Object(l.b)("span",{className:"token class-name"},"Checkbox"))," ",Object(l.b)("span",{className:"token attr-name"},"checked")," ",Object(l.b)("span",{className:"token attr-name"},"onChange"),Object(l.b)("span",{className:"token script language-javascript"},Object(l.b)("span",{className:"token script-punctuation punctuation"},"="),Object(l.b)("span",{className:"token punctuation"},"{"),Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token punctuation"},")")," ",Object(l.b)("span",{className:"token operator"},"=>")," ",Object(l.b)("span",{className:"token punctuation"},"("),Object(l.b)("span",{className:"token punctuation"},"{"),Object(l.b)("span",{className:"token punctuation"},"}"),Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},"}"))," ",Object(l.b)("span",{className:"token attr-name"},"disabled"),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","              ","disabled","\n","            "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Checkbox")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","          "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Col")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","        "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Row")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","      "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"CardBody")),Object(l.b)("span",{className:"token punctuation"},">")),Object(l.b)("span",{className:"token plain-text"},"\n","    "),Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token tag"},Object(l.b)("span",{className:"token punctuation"},"</"),Object(l.b)("span",{className:"token class-name"},"Card")),Object(l.b)("span",{className:"token punctuation"},">")),"\n","  ",Object(l.b)("span",{className:"token punctuation"},")"),Object(l.b)("span",{className:"token punctuation"},";"),"\n",Object(l.b)("span",{className:"token punctuation"},"}"),"\n","\n",Object(l.b)("span",{className:"token keyword"},"export")," ",Object(l.b)("span",{className:"token keyword"},"default")," Example",Object(l.b)("span",{className:"token punctuation"},";"),"\n"))),mdxType:"DemoComponent"},Object(l.b)(j,{mdxType:"Demo_a67a8325402f02530624c2f265a9ee0c"})),Object(l.b)("p",null,"when you pass ",Object(l.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"onChange")," props this will be un Controlled component just back value"),Object(l.b)("p",null,"You want to control Component just pass ",Object(l.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"checked")," props and control with his value")))}f.isMDXComponent=!0;var h=n("uHnj"),y=n("AriH"),E=[{name:"checked",type:"boolean",description:"You want to control Component just pass `checked` props and control with his value"},{name:"disabled",type:"boolean",description:"disabled input"},{name:"status",type:"string",description:"Checkbox status "+u.k},{name:"onChange()",type:"function",description:"Callback with boolean value"},{name:"onBlur()",type:"function",description:"Callback with event"},{name:"className",type:"string",description:"You can pass any css class to modify style"},{name:"style",type:"object",description:"You can pass any css object to modify style"}];function x(){return c.a.createElement(s.K,null,c.a.createElement(o.a,{title:"Checkbox Component"}),c.a.createElement(s.p,{breakPoint:{xs:12}},c.a.createElement(b.a,{title:"Checkbox Component"},c.a.createElement(f,null),c.a.createElement(h.a,{name:"Checkbox",props:E}),c.a.createElement(y.a,{keys:["checkbox"]}))))}},Iro9:function(e,t,n){"use strict";n.d(t,"j",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"l",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return u})),n.d(t,"m",(function(){return r})),n.d(t,"k",(function(){return m})),n.d(t,"i",(function(){return i})),n.d(t,"g",(function(){return k})),n.d(t,"b",(function(){return j}));var a=["Info","Success","Danger","Primary","Warning","Control","Basic"],c=["start","end","right","left","top","bottom"],s=["click","hover","focus","hint"],o=["Tiny","Small","Medium","Large","Giant"],b=["Rectangle","SemiRound","Round"],l=["filled","outline","ghost","hero"],p=["topRight","topLeft","bottomRight","bottomLeft","topStart","topEnd","bottomStart","bottomEnd"].join(" | "),u=c.join(" | "),r=s.join(" | "),m=a.join(" | "),i=o.join(" | "),k=b.join(" | "),j=l.join(" | ")},LNQM:function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),s=n("XDRZ"),o=n("vOnD"),b=n("uUQJ");function l(){var e=u(["\n    "," {\n      margin-top: -3.75rem;\n      padding-top: 4.75rem;\n      padding-right: 40px;\n      padding-left: 40px;\n    }\n    img {\n      text-align: center;\n      max-width: 100%;\n    }\n\n    li {\n      margin-top: 10px;\n    }\n\n    .note {\n      border-radius: 0.25rem;\n      margin-bottom: 1rem;\n      padding: 0.6rem;\n\n      .note-title {\n        font-weight: 500;\n        text-transform: uppercase;\n        margin-bottom: 1.5rem;\n      }\n\n      .note-body {\n        font-size: 0.875rem;\n        line-height: 1.5;\n      }\n\n      &.note-info,\n      &.note-info p {\n        color: ",";\n        background-color: #f0f6ff;\n      }\n\n      &.note-warning {\n        color: ",";\n        background-color: #fffae4;\n      }\n    }\n\n    .color-swatch {\n      display: inline-block;\n      border: 1px solid black;\n      width: 0.875rem;\n      height: 0.875rem;\n      margin-left: 7px;\n      margin-bottom: -2px;\n      border-radius: 2px;\n    }\n    p {\n      font-size: ",";\n      line-height: 1.5;\n    }\n    a {\n      color: ",";\n      font-weight: ",";\n      text-decoration: none;\n      &:hover {\n        color: ",";\n        text-decoration: underline;\n      }\n    }\n    .menu-items > .menu-item {\n      margin-bottom: 0.5rem;\n      font-weight: bold;\n      a:hover {\n        font-weight: bold;\n        text-decoration: none;\n      }\n      li {\n        font-size: 0.875rem;\n        font-weight: normal;\n      }\n      li.menu-group {\n        font-weight: bold;\n        padding-top: 1.25rem;\n        padding-bottom: 1rem;\n      }\n    }\n  "]);return l=function(){return e},e}function p(){var e=u(["\n  table {\n    ","\n  }\n  ","\n"]);return p=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),e.raw=t,e}var r=Object(o.d)(s.h)(p(),(function(e){var t=e.theme;return Object(b.a)(t)}),(function(e){var t=e.theme;return Object(o.c)(l(),s.i,t.colorInfo600,t.colorWarning600,t.textParagraphFontSize,t.linkTextColor,t.cardTextFontWeight,t.linkTextHoverColor)}));t.a=function(e){var t=e.children;return c.a.createElement(r,null,c.a.createElement(s.i,null,t))}},SB4r:function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),s=n("XDRZ");t.a=function(e){var t,n=Object(a.useState)(0),o=n[0],b=n[1];return c.a.createElement(a.Fragment,null,c.a.createElement(s.h,null,c.a.createElement("header",null,e.title),c.a.createElement(s.R,{onSelect:function(e){return b(e)},fullWidth:!0},c.a.createElement(s.Q,{icon:{name:"eye-outline",options:{animation:{type:"zoom"}}},title:"Overview"}),c.a.createElement(s.Q,{icon:{name:"settings-outline",options:{animation:{type:"zoom"}}},title:"Api"}),(null===(t=e.children)||void 0===t?void 0:t.length)>2?c.a.createElement(s.Q,{icon:{name:"droplet-outline",options:{animation:{type:"zoom"}}},title:"Theme"}):c.a.createElement(c.a.Fragment,null))),e.children[o])}},uHnj:function(e,t,n){"use strict";n("pJf4");var a=n("q1tI"),c=n.n(a),s=n("XDRZ"),o=n("uUQJ");t.a=function(e){return c.a.createElement(s.h,null,c.a.createElement(s.i,null,c.a.createElement("h2",null,e.name),c.a.createElement("h3",null,"Props"),c.a.createElement("p",null,e.hint),c.a.createElement(o.b,{className:"striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Name"),c.a.createElement("td",null,"Type"),c.a.createElement("td",null,"Description"))),c.a.createElement("tbody",null,e.props.map((function(e){return c.a.createElement("tr",{key:e.name},c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.description))})))),e.methods&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Methods"),c.a.createElement(o.b,{className:"striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Name"),c.a.createElement("td",null,"Type"),c.a.createElement("td",null,"Description"))),c.a.createElement("tbody",null,e.methods.map((function(e){return c.a.createElement("tr",{key:e.name},c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.description))})))))))}},"ux+I":function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),s=n("XDRZ"),o=n("vOnD");function b(){var e=p(["\n    border: 1px solid ",";\n    border-radius: ",";\n    background-color: ",";\n    .gatsby-highlight {\n      border-bottom-left-radius: ",";\n      border-bottom-right-radius: ",";\n      margin: -1.25rem !important;\n    }\n  "]);return b=function(){return e},e}function l(){var e=p(["\n  ","\n"]);return l=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),e.raw=t,e}var u=o.d.div(l(),(function(e){var t=e.theme;return Object(o.c)(b(),t.cardBorderColor,t.cardBorderRadius,t.layoutBackgroundColor,t.cardBorderRadius,t.cardBorderRadius)}));t.a=function(e){var t=e.code,n=e.children;return c.a.createElement(s.K,null,c.a.createElement(s.p,{breakPoint:{xs:12}},c.a.createElement(u,null,c.a.createElement(s.R,null,c.a.createElement(s.Q,{title:"preview"},n),c.a.createElement(s.Q,{title:"code"},t)))))}}}]);
//# sourceMappingURL=component---src-pages-ui-components-checkbox-tsx-31c47123fef68121b890.js.map