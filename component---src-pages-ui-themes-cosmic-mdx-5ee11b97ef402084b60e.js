(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"jW+q":function(e,t,a){"use strict";a("Z2Ku"),a("L9s1"),a("a1Th"),a("Btvt"),a("pIFo");var n=a("q1tI"),r=a.n(n),l=a("XDRZ"),c=a("Wbzz"),u=a("uUQJ"),m=a("doq6");t.a=function(e){var t=Object(n.useState)(""),a=t[0],o=t[1];return r.a.createElement(l.h,null,r.a.createElement(l.i,null,r.a.createElement("h2",{style:{textTransform:"uppercase"}},e.theme),"default"!==e.theme&&r.a.createElement("p",null,"inherited from default theme"),r.a.createElement(l.v,{fullWidth:!0},r.a.createElement("input",{placeholder:"search for",type:"text",value:a,onChange:function(e){return o(e.target.value)}})),r.a.createElement(u.b,{className:"striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Value"),r.a.createElement("td",null,"Parent"))),r.a.createElement("tbody",null,Object(m.a)(e.theme).map((function(t){if(t.key.includes(a))return r.a.createElement("tr",{key:t.key,id:t.key},r.a.createElement("td",null,r.a.createElement(c.Link,{to:"/themes/"+e.theme+"#"+t.key},t.key)),r.a.createElement("td",{dangerouslySetInnerHTML:{__html:(n=t.value,(n=n.toString().replace(/(#[a-f0-9]{6}|rgba.*?\))/gi,'$&<span class="color-swatch" style="background: $&"/>')).replace(/,/g,", "))}}),r.a.createElement("td",null,function(t){return t.default&&t.parent?r.a.createElement(c.Link,{to:"/themes/default#"+t.parent},t.parent," (default)"):t.default?r.a.createElement(c.Link,{to:"/themes/default#"+t.key},t.key," (default)"):t.parent?r.a.createElement(c.Link,{to:"/themes/"+e.theme+"#"+t.parent},t.parent):""}(t)));var n}))))))}},z4IB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return u})),a.d(t,"default",(function(){return i}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),r=a("eW/1"),l=a("jW+q"),c=a("1Yd/");var u={},m={_frontmatter:u},o=r.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(o,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c.a,{title:"Cosmic Theme",mdxType:"SEO"}),Object(n.b)(l.a,{theme:"cosmic",mdxType:"ThemeTable"}))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-themes-cosmic-mdx-5ee11b97ef402084b60e.js.map