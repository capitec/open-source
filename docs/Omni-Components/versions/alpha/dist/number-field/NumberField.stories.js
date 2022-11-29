import"../chunks-js/chunk.YEPLYK62.js";import"../chunks-js/chunk.QZMZ3CLH.js";import"../chunks-js/chunk.EMNPHWST.js";import{a as F,b as y,c as B,d as S,e as v,f as $,g as A,h as N}from"../chunks-js/chunk.YNLZDQX4.js";import{a as x,b as c,c as C}from"../chunks-js/chunk.LME64W74.js";import{k as f}from"../chunks-js/chunk.6N73YD4F.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as s}from"../chunks-js/chunk.BDUZEV7N.js";import{a as i}from"../chunks-js/chunk.O6CDAD4G.js";import{b as l,c as b}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as a}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.FS4G6H4L.js";import"../chunks-js/chunk.63F4QTY7.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{c as t,e as r}from"../chunks-js/chunk.CDDA2I3H.js";import{h as g,l as d,o as p}from"../chunks-js/chunk.2ZZQBHAA.js";d();p();var I=g(C(),1);var W={title:"UI Components/Number Field",component:"omni-number-field",argTypes:F},X={render:e=>t`
    <omni-number-field
      data-testid="test-number-field"
      label="${i(e.label)}"
      .value="${e.value}"
      .data="${e.data}"
      hint="${i(e.hint)}"
      error="${i(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${s(f("prefix",e.prefix))}`:r}${e.suffix?t`${`\r
`}${s(f("suffix",e.suffix))}`:r}${e.prefix||e.suffix?`\r
`:r}
    </omni-number-field>
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let o=b(e.canvasElement).getByTestId("test-number-field");o.value="";let u=I.fn();o.addEventListener("input",u);let n=o.shadowRoot.getElementById("inputField");x(n);let m="12345";await c.type(n,m,{pointerEventsCheck:0}),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await l(()=>a(n).toHaveValue(parseInt(m)),{timeout:3e3}),await l(()=>a(u).toBeCalledTimes(m.length),{timeout:3e3}))}},Y=y("omni-number-field"),Z=B("omni-number-field"),ee=S("omni-number-field"),te=v("omni-number-field",123),re=$("omni-number-field"),ie=A("omni-number-field"),oe=N("omni-number-field");export{oe as Disabled,ee as Error_Label,Z as Hint,X as Interactive,Y as Label,re as Prefix,ie as Suffix,te as Value,W as default};
//# sourceMappingURL=NumberField.stories.js.map
