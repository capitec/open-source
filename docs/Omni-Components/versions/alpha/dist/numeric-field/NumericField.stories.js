import"../chunks-js/chunk.UIT6FP5R.js";import"../chunks-js/chunk.WX72FDFV.js";import"../chunks-js/chunk.VD46RQZR.js";import"../chunks-js/chunk.5C7JWS23.js";import"../chunks-js/chunk.YZK4APAO.js";import"../chunks-js/chunk.QZMZ3CLH.js";import"../chunks-js/chunk.ZP7U5EIB.js";import{a as h,b as F,c as $,d as B,e as C,f as v,g as T,h as k}from"../chunks-js/chunk.YNLZDQX4.js";import{b as n,c as L}from"../chunks-js/chunk.LME64W74.js";import{k as u}from"../chunks-js/chunk.6N73YD4F.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as m}from"../chunks-js/chunk.BDUZEV7N.js";import{a as d}from"../chunks-js/chunk.O6CDAD4G.js";import{b as p,c as y}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as t}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.7HCHYC7E.js";import"../chunks-js/chunk.FS4G6H4L.js";import"../chunks-js/chunk.63F4QTY7.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{c as r,e as a}from"../chunks-js/chunk.CDDA2I3H.js";import{a as S,b as x,h as A,l as E,o as w}from"../chunks-js/chunk.2ZZQBHAA.js";E();w();var b=A(L(),1);var ee={title:"UI Components/Numeric Field",component:"omni-numeric-field",argTypes:x(S({},h),{increase:{control:"text"},decrease:{control:"text"}})},te={render:e=>r`
    <omni-numeric-field
      data-testid="test-numeric-field"
      label="${d(e.label)}"
      .value="${e.value}"
      .data="${e.data}"
      hint="${d(e.hint)}"
      error="${d(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?r`${`\r
`}${m(u("prefix",e.prefix))}`:a}${e.suffix?r`${`\r
`}${m(u("suffix",e.suffix))}`:a}${e.increase?r`${`\r
`}${m(u("increase",e.increase))}`:a}${e.decrease?r`${`\r
`}${m(u("decrease",e.decrease))}`:a}${e.prefix||e.suffix||e.increase||e.decrease?`\r
`:a}</omni-numeric-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:"",increase:"",decrease:""},play:async e=>{let o=y(e.canvasElement).getByTestId("test-numeric-field"),s=b.fn();o.addEventListener("input",s),o.addEventListener("click",s);let i=o.shadowRoot.querySelector("slot[name=increase]"),l=o.shadowRoot.querySelector("slot[name=decrease]");await t(i).toBeTruthy(),await t(l).toBeTruthy(),await n.click(l,{pointerEventsCheck:0}),await n.click(i,{pointerEventsCheck:0}),await n.click(l,{pointerEventsCheck:0}),await n.click(i,{pointerEventsCheck:0}),await n.click(i,{pointerEventsCheck:0});let f=o.shadowRoot.getElementById("inputField"),c="12345";await n.type(f,c,{pointerEventsCheck:0}),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await p(()=>t(f).toHaveValue(212345),{timeout:1e4}),await p(()=>t(s).toBeCalledTimes(11),{timeout:1e4}))}},oe=F("omni-numeric-field"),ie=$("omni-numeric-field"),ne=B("omni-numeric-field"),re=C("omni-numeric-field",123),se=v("omni-numeric-field"),ae=T("omni-numeric-field"),le=k("omni-numeric-field"),ce={render:e=>r`
    <omni-numeric-field data-testid="test-password-field" label="${d(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon slot="increase"></omni-lock-open-icon>
      <omni-lock-closed-icon slot="decrease"></omni-lock-closed-icon>
    </omni-numeric-field>
  `,name:"Custom Icon Slot",args:{label:"Custom Icon Slot"},play:async e=>{let o=y(e.canvasElement).getByTestId("test-password-field"),s=o.shadowRoot.querySelector("slot[name=increase]"),i=o.shadowRoot.querySelector("slot[name=decrease]");await t(s).toBeTruthy(),await t(i).toBeTruthy();let l=s.assignedElements().find(c=>c.tagName.toLocaleLowerCase()==="omni-lock-open-icon"),f=i.assignedElements().find(c=>c.tagName.toLocaleLowerCase()==="omni-lock-closed-icon");await t(l).toBeTruthy(),await t(f).toBeTruthy()}};export{ce as Custom_Icon_Slot,le as Disabled,ne as Error_Label,ie as Hint,te as Interactive,oe as Label,se as Prefix,ae as Suffix,re as Value,ee as default};
//# sourceMappingURL=NumericField.stories.js.map
