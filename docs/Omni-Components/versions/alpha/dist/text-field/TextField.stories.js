import"../chunks-js/chunk.MQL6GXTD.js";import"../chunks-js/chunk.QZMZ3CLH.js";import"../chunks-js/chunk.ZP7U5EIB.js";import{a as c,b as y,c as F,d as T,e as B,f as S,g as $,h as b}from"../chunks-js/chunk.YNLZDQX4.js";import{b as u,c as h}from"../chunks-js/chunk.LME64W74.js";import{k as l}from"../chunks-js/chunk.6N73YD4F.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as r}from"../chunks-js/chunk.BDUZEV7N.js";import{a as o}from"../chunks-js/chunk.O6CDAD4G.js";import{c as p}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as n}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.FS4G6H4L.js";import"../chunks-js/chunk.63F4QTY7.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{c as t,e as i}from"../chunks-js/chunk.CDDA2I3H.js";import{h as A,l as x,o as m}from"../chunks-js/chunk.2ZZQBHAA.js";x();m();var v=A(h(),1);var K={title:"UI Components/Text Field",component:"omni-text-field",argTypes:c},O={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${o(e.label)}"
      .value="${e.value}"
      .data="${e.data}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${r(l("prefix",e.prefix))}`:i}${e.suffix?t`${`\r
`}${r(l("suffix",e.suffix))}`:i}${e.prefix||e.suffix?`\r
`:i}</omni-text-field
    >
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let a=p(e.canvasElement).getByTestId("test-text-field"),s=v.fn();a.addEventListener("input",s);let f=a.shadowRoot.getElementById("inputField");await u.type(f,"Value Update",{pointerEventsCheck:0});let d="Value Update";await n(f).toHaveValue(d),await n(s).toBeCalledTimes(d.length)}},Q=y("omni-text-field"),W=F("omni-text-field"),X=T("omni-text-field"),Y=B("omni-text-field"),Z=S("omni-text-field"),ee=$("omni-text-field"),te=b("omni-text-field");export{te as Disabled,X as Error_Label,W as Hint,O as Interactive,Q as Label,Z as Prefix,ee as Suffix,Y as Value,K as default};
//# sourceMappingURL=TextField.stories.js.map
