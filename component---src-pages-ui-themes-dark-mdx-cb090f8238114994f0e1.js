(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{Kq8Y:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp"),r=a("eW/1"),l=a("jW+q"),u=a("1Yd/");var c={},m={_frontmatter:c},o=r.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(o,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(u.a,{title:"Default Theme",mdxType:"SEO"}),Object(n.b)(l.a,{theme:"dark",mdxType:"ThemeTable"}))}d.isMDXComponent=!0},"jW+q":function(e,t,a){"use strict";a("gu/5"),a("eoYm"),a("q8oJ"),a("8npG"),a("sC2a");var n=a("q1tI"),r=a.n(n),l=a("XDRZ"),u=a("Wbzz"),c=a("uUQJ"),m=a("doq6");t.a=function(e){var t=Object(n.useState)(""),a=t[0],o=t[1];return r.a.createElement(l.h,null,r.a.createElement(l.i,null,r.a.createElement("h2",{style:{textTransform:"uppercase"}},e.theme),"default"!==e.theme&&r.a.createElement("p",null,"inherited from default theme"),r.a.createElement(l.v,{fullWidth:!0},r.a.createElement("input",{placeholder:"search for",type:"text",value:a,onChange:function(e){return o(e.target.value)}})),r.a.createElement(c.b,{className:"striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Value"),r.a.createElement("td",null,"Parent"))),r.a.createElement("tbody",null,Object(m.a)(e.theme).map((function(t){if(t.key.includes(a))return r.a.createElement("tr",{key:t.key,id:t.key},r.a.createElement("td",null,r.a.createElement(u.Link,{to:"/themes/"+e.theme+"#"+t.key},t.key)),r.a.createElement("td",{dangerouslySetInnerHTML:{__html:(n=t.value,(n=n.toString().replace(/(#[a-f0-9]{6}|rgba.*?\))/gi,'$&<span class="color-swatch" style="background: $&"/>')).replace(/,/g,", "))}}),r.a.createElement("td",null,function(t){return t.default&&t.parent?r.a.createElement(u.Link,{to:"/themes/default#"+t.parent},t.parent," (default)"):t.default?r.a.createElement(u.Link,{to:"/themes/default#"+t.key},t.key," (default)"):t.parent?r.a.createElement(u.Link,{to:"/themes/"+e.theme+"#"+t.parent},t.parent):""}(t)));var n}))))))}}}]);
//# sourceMappingURL=component---src-pages-ui-themes-dark-mdx-cb090f8238114994f0e1.js.map