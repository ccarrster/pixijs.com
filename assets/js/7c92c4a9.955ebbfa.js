"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[6550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={hide_table_of_contents:!0},i="Bitmap Text",p={unversionedId:"examples/text/bitmap-text",id:"examples/text/bitmap-text",title:"Bitmap Text",description:"",source:"@site/docs/examples/text/bitmap-text.md",sourceDirName:"examples/text",slug:"/examples/text/bitmap-text",permalink:"/examples/text/bitmap-text",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/text/bitmap-text.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Video",permalink:"/examples/sprite/video"},next:{title:"From Font",permalink:"/examples/text/from-font"}},s={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bitmap-text"},"Bitmap Text"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ background: '#1099bb', resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nPIXI.Assets.load('https://beta.pixijs.com/assets/bitmap-font/desyrel.xml').then(() =>\n{\n    const bitmapFontText = new PIXI.BitmapText(\n        'bitmap fonts are supported!\\nWoo yay!', {\n            fontName: 'Desyrel',\n            fontSize: 55,\n            align: 'left',\n        },\n    );\n\n    bitmapFontText.x = 50;\n    bitmapFontText.y = 200;\n\n    app.stage.addChild(bitmapFontText);\n});\n")))}m.isMDXComponent=!0}}]);