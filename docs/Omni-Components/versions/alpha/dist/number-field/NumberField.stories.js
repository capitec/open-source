import"../chunks-js/chunk.SIHRYJT5.js";import"../chunks-js/chunk.THZL7OFV.js";import"../chunks-js/chunk.DPILG6RJ.js";import{a as F,b as y,c as S,d as v,e as B,f as $,g as N}from"../chunks-js/chunk.UNJAO2OT.js";import{a as x,b as c,c as C}from"../chunks-js/chunk.LME64W74.js";import{k as f}from"../chunks-js/chunk.Q4ATS6NG.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.SPIAQSDI.js";import"../chunks-js/chunk.US2AYN3N.js";import{a}from"../chunks-js/chunk.SUEZUCRO.js";import{a as i}from"../chunks-js/chunk.O6CDAD4G.js";import{b as l,c as b}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as s}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.LPEZ6TWE.js";import"../chunks-js/chunk.XLVYYAUR.js";import"../chunks-js/chunk.H227IO2J.js";import"../chunks-js/chunk.CHYIO324.js";import{c as t,e as r}from"../chunks-js/chunk.CDDA2I3H.js";import{h as I,l as d,o as p}from"../chunks-js/chunk.2ZZQBHAA.js";d();p();var A=I(C(),1);var Q={title:"UI Components/Number Field",component:"omni-number-field"},W={render:e=>t`
    <omni-number-field
      data-testid="test-number-field"
      label="${i(e.label)}"
      .value="${e.value}"
      .data="${e.data}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${a(f("prefix",e.prefix))}`:r}${e.suffix?t`${`\r
`}${a(f("suffix",e.suffix))}`:r}${e.prefix||e.suffix?`\r
`:r}
    </omni-number-field>
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let o=b(e.canvasElement).getByTestId("test-number-field");o.value="";let u=A.fn();o.addEventListener("input",u);let n=o.shadowRoot.getElementById("inputField");x(n);let m="12345";await c.type(n,m,{pointerEventsCheck:0}),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await l(()=>s(n).toHaveValue(parseInt(m)),{timeout:3e3}),await l(()=>s(u).toBeCalledTimes(m.length),{timeout:3e3}))}},X=F("omni-number-field"),Y=y("omni-number-field"),Z=S("omni-number-field"),ee=v("omni-number-field",123),te=B("omni-number-field"),re=$("omni-number-field"),ie=N("omni-number-field");export{ie as Disabled,Z as Error_Label,Y as Hint,W as Interactive,X as Label,te as Prefix,re as Suffix,ee as Value,Q as default};
//# sourceMappingURL=NumberField.stories.js.map
