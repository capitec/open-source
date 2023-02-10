import"../chunks-js/chunk.CRXO7TLG.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.OLTCQXBT.js";import{a as F,b as y,c as T,d as S,e as B,f as b,g as $}from"../chunks-js/chunk.K2EQSFIF.js";import{k as l}from"../chunks-js/chunk.P4DNRGFH.js";import"../chunks-js/chunk.LYPQHKQX.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as r}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as c,c as h}from"../chunks-js/chunk.LME64W74.js";import{a as o}from"../chunks-js/chunk.R4IMIBZU.js";import{c as u}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as n}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as t,d as i}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as A,l as m,o as p}from"../chunks-js/chunk.2ZZQBHAA.js";m();p();var v=A(h(),1);var K={title:"UI Components/Text Field",component:"omni-text-field"},O={render:e=>t`
    <omni-text-field
      data-testid="test-text-field"
      label="${o(e.label)}"
      value="${e.value}"
      hint="${o(e.hint)}"
      error="${o(e.error)}"
      ?disabled="${e.disabled}"
      >${e.prefix?t`${`\r
`}${r(l("prefix",e.prefix))}`:i}${e.suffix?t`${`\r
`}${r(l("suffix",e.suffix))}`:i}${e.prefix||e.suffix?`\r
`:i}</omni-text-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{var x;let s=u(e.canvasElement).getByTestId("test-text-field"),a=v.fn();s.addEventListener("input",a);let f=(x=s.shadowRoot)==null?void 0:x.getElementById("inputField");await c.type(f,"Value Update",{pointerEventsCheck:0});let d="Value Update";await n(f).toHaveValue(d),await n(a).toBeCalledTimes(d.length)}},Q=F("omni-text-field"),W=y("omni-text-field"),X=T("omni-text-field"),Y=S("omni-text-field"),Z=B("omni-text-field"),ee=b("omni-text-field"),te=$("omni-text-field");export{te as Disabled,X as Error_Label,W as Hint,O as Interactive,Q as Label,Z as Prefix,ee as Suffix,Y as Value,K as default};
//# sourceMappingURL=TextField.stories.js.map
