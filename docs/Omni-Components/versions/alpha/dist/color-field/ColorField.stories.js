import"../chunks-js/chunk.KHBNKBGZ.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.CTDWZZOC.js";import{a as x,b,c as F,d as y,e as C,f as B}from"../chunks-js/chunk.YOIKDZ7P.js";import{k as m}from"../chunks-js/chunk.L4KSVVY6.js";import"../chunks-js/chunk.D6UL6COZ.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as d}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as u,c as A}from"../chunks-js/chunk.LME64W74.js";import{a as i}from"../chunks-js/chunk.R4IMIBZU.js";import{b as s,c as a}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as r}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as t,d as l}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as g,l as p,o as c}from"../chunks-js/chunk.2ZZQBHAA.js";p();c();var v=g(A(),1);var G={title:"UI Components/Color Field",component:"omni-color-field"},J={render:e=>t`
    <omni-color-field
      data-testid="test-color-field"
      label="${i(e.label)}"
      value="${e.value}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${d(m("prefix",e.prefix))}`:l}${e.suffix?t`${`\r
`}${d(m("suffix",e.suffix))}`:l}${e.prefix||e.suffix?`\r
`:l}</omni-color-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let n=a(e.canvasElement).getByTestId("test-color-field").shadowRoot.getElementById("inputField");await r(n.type).toBe("color")}},K=x("omni-color-field"),Q=b("omni-color-field"),W=F("omni-color-field"),X=y("omni-color-field","#f6b73c"),Y=C("omni-color-field"),Z=B("omni-color-field"),ee={render:e=>t`<omni-color-field data-testid="test-field" label="${i(e.label)}" disabled></omni-color-field>`,name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{let o=a(e.canvasElement).getByTestId("test-field"),n=o.attributes.getNamedItem("disabled");await r(n).toBeTruthy();let f=v.fn();o.addEventListener("input",f);let S=o.shadowRoot.getElementById("inputField");await u.type(S,"Value Update 3",{pointerEventsCheck:0}),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await s(()=>r(o.value).toBeFalsy(),{timeout:3e3}),await s(()=>r(f).toBeCalledTimes(0),{timeout:3e3}))}};export{ee as Disabled,W as Error_Label,Q as Hint,J as Interactive,K as Label,Y as Prefix,Z as Suffix,X as Value,G as default};
//# sourceMappingURL=ColorField.stories.js.map
