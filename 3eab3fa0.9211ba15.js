(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,O=s["".concat(c,".").concat(u)]||s[u]||m[u]||a;return n?o.a.createElement(O,i(i({ref:t},l),{},{components:n})):o.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),a=(n(0),n(132)),c={id:"_interfaces_.components",title:"Interface: Components",sidebar_label:"Components"},i={unversionedId:"api/interfaces/_interfaces_.components",id:"api/interfaces/_interfaces_.components",isDocsHomePage:!1,title:"Interface: Components",description:'"interfaces".Components',source:"@site/docs/api/interfaces/_interfaces_.components.md",slug:"/api/interfaces/_interfaces_.components",permalink:"/api/interfaces/_interfaces_.components",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.components.md",version:"current",sidebar_label:"Components"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"EmptyPlaceholder",id:"emptyplaceholder",children:[]},{value:"Footer",id:"footer",children:[]},{value:"Group",id:"group",children:[]},{value:"Header",id:"header",children:[]},{value:"Item",id:"item",children:[]},{value:"List",id:"list",children:[]},{value:"ScrollSeekPlaceholder",id:"scrollseekplaceholder",children:[]},{value:"Scroller",id:"scroller",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".Components"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Components"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"emptyplaceholder"},"EmptyPlaceholder"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"EmptyPlaceholder"),": ComponentType"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/52e8582/src/interfaces.ts#L68"}),"interfaces.ts:68"))),Object(a.b)("p",null,"Set to render a custom UI when the list is empty."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"footer"},"Footer"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Footer"),": ComponentType"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/52e8582/src/interfaces.ts#L44"}),"interfaces.ts:44"))),Object(a.b)("p",null,"Set to render a component at the bottom of the list."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"group"},"Group"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Group"),": ComponentType","<",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.groupprops"}),"GroupProps"),">"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/52e8582/src/interfaces.ts#L52"}),"interfaces.ts:52"))),Object(a.b)("p",null,"Set to customize the group item wrapping element. Use only if you would like to render list from elements different than a ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"header"},"Header"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Header"),": ComponentType"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/52e8582/src/interfaces.ts#L40"}),"interfaces.ts:40"))),Object(a.b)("p",null,"Set to render a component at the top of the list."),Object(a.b)("p",null,"The header remains above the top items and does not remain sticky."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"item"},"Item"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Item"),": ComponentType","<",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.itemprops"}),"ItemProps"),">"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/52e8582/src/interfaces.ts#L48"}),"interfaces.ts:48"))),Object(a.b)("p",null,"Set to customize the item wrapping element. Use only if you would like to render list from elements different than a ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"list"},"List"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"List"),": ComponentType","<","ComponentPropsWithRef","<",'"',"div",'"',">>"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/52e8582/src/interfaces.ts#L63"}),"interfaces.ts:63"))),Object(a.b)("p",null,"Set to customize the items wrapper. Use only if you would like to render list from elements different than a ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scrollseekplaceholder"},"ScrollSeekPlaceholder"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"ScrollSeekPlaceholder"),": ComponentType","<","{ height: number ; index: number  }>"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/52e8582/src/interfaces.ts#L71"}),"interfaces.ts:71"))),Object(a.b)("p",null,"Set to render an item placeholder when the user scrolls fast.  See the ",Object(a.b)("inlineCode",{parentName:"p"},"scrollSeek")," property for more details."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"scroller"},"Scroller"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"Scroller"),": ComponentType","<",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#htmlprops"}),"HTMLProps")," & { ref: Ref","<","HTMLDivElement>  }>"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/52e8582/src/interfaces.ts#L58"}),"interfaces.ts:58"))),Object(a.b)("p",null,"Set to customize the outermost scrollable element. This should not be necessary in general,\nas the component passes its HTML attribute props to it."))}b.isMDXComponent=!0}}]);