import"../chunks-js/chunk.A4EVYELW.js";import"../chunks-js/chunk.THZL7OFV.js";import"../chunks-js/chunk.DPILG6RJ.js";import{a as c,b as F,c as y,d as S,e as T,f as B,g as $}from"../chunks-js/chunk.XUTGOUJO.js";import{b as u,c as A}from"../chunks-js/chunk.LME64W74.js";import{k as l}from"../chunks-js/chunk.G4V22OAM.js";import"../chunks-js/chunk.SPIAQSDI.js";import{a as r}from"../chunks-js/chunk.SUEZUCRO.js";import{a as o}from"../chunks-js/chunk.O6CDAD4G.js";import{c as p}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as n}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.LPEZ6TWE.js";import"../chunks-js/chunk.XLVYYAUR.js";import"../chunks-js/chunk.H227IO2J.js";import"../chunks-js/chunk.CHYIO324.js";import{c as t,e as i}from"../chunks-js/chunk.CDDA2I3H.js";import{h as v,l as x,o as m}from"../chunks-js/chunk.2ZZQBHAA.js";x();m();var b=v(A(),1);var J={title:"UI Components/Text Field",component:"omni-text-field"},K={render:e=>t`
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
  `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let a=p(e.canvasElement).getByTestId("test-text-field"),s=b.fn();a.addEventListener("input",s);let d=a.shadowRoot.getElementById("inputField");await u.type(d,"Value Update",{pointerEventsCheck:0});let f="Value Update";await n(d).toHaveValue(f),await n(s).toBeCalledTimes(f.length)}},O=c("omni-text-field"),Q=F("omni-text-field"),W=y("omni-text-field"),X=S("omni-text-field"),Y=T("omni-text-field"),Z=B("omni-text-field"),ee=$("omni-text-field");export{ee as Disabled,W as Error_Label,Q as Hint,K as Interactive,O as Label,Y as Prefix,Z as Suffix,X as Value,J as default};
//# sourceMappingURL=TextField.stories.js.map
