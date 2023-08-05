import{r as w}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var q={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=w,E=Symbol.for("react.element"),O=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,P=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function S(a,e,s){var r,t={},i=null,d=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(d=e.ref);for(r in e)z.call(e,r)&&!R.hasOwnProperty(r)&&(t[r]=e[r]);if(a&&a.defaultProps)for(r in e=a.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:E,type:a,key:i,ref:d,props:t,_owner:P.current}}u.Fragment=O;u.jsx=S;u.jsxs=S;q.exports=u;var h=q.exports;const p=({primary:a=!1,size:e="small",border:s="square",label:r,...t})=>h.jsx("button",{type:"button",className:[a?"text-white bg-blue-wapple":"text-blue-wapple bg-white border border-solid border-blue-wapple",e==="small"?"text-sm px-40 py-3":"text-2xl font-bold px-28 py-6",s==="square"?"rounded":"rounded-[6.25rem]"].join(" "),...t,children:r});try{p.displayName="AButton",p.__docgenInfo={description:"",displayName:"AButton",props:{primary:{defaultValue:{value:"false"},description:"",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"big"'}]}},border:{defaultValue:{value:"square"},description:"",name:"border",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"round"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const N={title:"Atoms/AButton",component:p,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{primary:!0,label:"Primary",border:"square",size:"small"}},n={args:{primary:!1,label:"Secondary",border:"square",size:"small"}},l={args:{primary:!0,label:"Big",border:"round",size:"big"}};var m,c,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Primary',
    border: 'square',
    size: 'small'
  }
}`,...(y=(c=o.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var b,f,_;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Secondary',
    border: 'square',
    size: 'small'
  }
}`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var g,x,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Big',
    border: 'round',
    size: 'big'
  }
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const k=["Primary","Secondary","Big"];export{l as Big,o as Primary,n as Secondary,k as __namedExportsOrder,N as default};
//# sourceMappingURL=AButton.stories-86a35ac5.js.map
