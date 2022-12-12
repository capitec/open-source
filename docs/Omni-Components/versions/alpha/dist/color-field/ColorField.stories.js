import"../chunks-js/chunk.HV6SPQWE.js";import"../chunks-js/chunk.THZL7OFV.js";import"../chunks-js/chunk.DPILG6RJ.js";import{a as x,b,c as F,d as y,e as C,f as B}from"../chunks-js/chunk.UNJAO2OT.js";import{b as u,c as E}from"../chunks-js/chunk.LME64W74.js";import{k as m}from"../chunks-js/chunk.Q4ATS6NG.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.SPIAQSDI.js";import"../chunks-js/chunk.US2AYN3N.js";import{a as d}from"../chunks-js/chunk.SUEZUCRO.js";import{a as i}from"../chunks-js/chunk.O6CDAD4G.js";import{b as a,c as s}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as r}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.LPEZ6TWE.js";import"../chunks-js/chunk.XLVYYAUR.js";import"../chunks-js/chunk.H227IO2J.js";import"../chunks-js/chunk.CHYIO324.js";import{c as t,e as l}from"../chunks-js/chunk.CDDA2I3H.js";import{h as A,l as p,o as c}from"../chunks-js/chunk.2ZZQBHAA.js";p();c();var S=A(E(),1);var G={title:"UI Components/Color Field",component:"omni-color-field"},J={render:e=>t`
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
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let n=s(e.canvasElement).getByTestId("test-color-field").shadowRoot.getElementById("inputField");await r(n.type).toBe("color")}},K=x("omni-color-field"),Q=b("omni-color-field"),W=F("omni-color-field"),X=y("omni-color-field","#f6b73c"),Y=C("omni-color-field"),Z=B("omni-color-field"),ee={render:e=>t`<omni-color-field data-testid="test-field" label="${i(e.label)}" disabled></omni-color-field>`,name:"Disabled",args:{label:"Disabled",disabled:!0},play:async e=>{let o=s(e.canvasElement).getByTestId("test-field"),n=o.attributes.getNamedItem("disabled");await r(n).toBeTruthy();let f=S.fn();o.addEventListener("input",f);let $=o.shadowRoot.getElementById("inputField");await u.type($,"Value Update 3",{pointerEventsCheck:0}),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await a(()=>r(o.value).toBeFalsy(),{timeout:3e3}),await a(()=>r(f).toBeCalledTimes(0),{timeout:3e3}))}};export{ee as Disabled,W as Error_Label,Q as Hint,J as Interactive,K as Label,Y as Prefix,Z as Suffix,X as Value,G as default};
//# sourceMappingURL=ColorField.stories.js.map
