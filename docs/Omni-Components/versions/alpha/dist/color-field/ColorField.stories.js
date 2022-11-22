import"../chunks-js/chunk.NXDK47BY.js";import"../chunks-js/chunk.ZPUNSNI6.js";import"../chunks-js/chunk.WCJA2MWU.js";import{a as y,b,c as x,d as F,e as B,f as C,g as S}from"../chunks-js/chunk.6O544RSM.js";import{b as u,c as E}from"../chunks-js/chunk.LME64W74.js";import{j as m}from"../chunks-js/chunk.IK4T76RY.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as d}from"../chunks-js/chunk.SNOJQC4W.js";import{a as i}from"../chunks-js/chunk.R4IMIBZU.js";import{b as a,c as s}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as r}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.6TMBBBK2.js";import"../chunks-js/chunk.WVW5AE5A.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{b as t,d as l}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as $,l as p,o as c}from"../chunks-js/chunk.2ZZQBHAA.js";p();c();var g=$(E(),1);var K={title:"UI Components/Color Field",component:"omni-color-field",argTypes:y},Q={render:e=>t`
    <omni-color-field
      data-testid="test-color-field"
      label="${i(e.label)}"
      .value="${e.value}"
      .data="${e.data}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${d(m("prefix",e.prefix))}`:l}${e.suffix?t`${`\r
`}${d(m("suffix",e.suffix))}`:l}${e.prefix||e.suffix?`\r
`:l}</omni-color-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let n=s(e.canvasElement).getByTestId("test-color-field").shadowRoot.getElementById("inputField");await r(n.type).toBe("color")}},W=b("omni-color-field"),X=x("omni-color-field"),Y=F("omni-color-field"),Z=B("omni-color-field","#f6b73c"),ee=C("omni-color-field"),oe=S("omni-color-field"),te={render:e=>t`<omni-color-field data-testid="test-field" label="${i(e.label)}" disabled></omni-color-field>`,name:"Disabled",args:{label:"Disabled",disabled:!0},play:async e=>{let o=s(e.canvasElement).getByTestId("test-field"),n=o.attributes.getNamedItem("disabled");await r(n).toBeTruthy();let f=g.fn();o.addEventListener("input",f);let A=o.shadowRoot.getElementById("inputField");await u.type(A,"Value Update 3",{pointerEventsCheck:0}),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await a(()=>r(o.value).toBeFalsy(),{timeout:3e3}),await a(()=>r(f).toBeCalledTimes(0),{timeout:3e3}))}};export{te as Disabled,Y as Error_Label,X as Hint,Q as Interactive,W as Label,ee as Prefix,oe as Suffix,Z as Value,K as default};
//# sourceMappingURL=ColorField.stories.js.map
