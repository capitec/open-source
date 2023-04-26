import"../chunks-js/chunk.26N7V3DZ.js";import"../chunks-js/chunk.WCB52SLW.js";import"../chunks-js/chunk.HKWFE27C.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import{a as E,b as $,c as v,d as B,e as g,f as C,g as P,h as A}from"../chunks-js/chunk.NOUGGDW5.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as I}from"../chunks-js/chunk.IRJIQSYL.js";import{a as d}from"../chunks-js/chunk.PJH7M65U.js";import{a as n}from"../chunks-js/chunk.G3QHRCKP.js";import{a as b,b as c}from"../chunks-js/chunk.MHLMY33S.js";import{k as m}from"../chunks-js/chunk.C6CJZ2DD.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{b as f,c as w}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as s,d as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as T,m as x,p as F}from"../chunks-js/chunk.BF43NN75.js";x();F();var L=T(I(),1);var ie={title:"UI Components/Password Field",component:"omni-password-field"},re={render:e=>s`
    <omni-password-field
      data-testid="test-password-field"
      label="${d(e.label)}"
      value="${e.value}"
      hint="${d(e.hint)}"
      error="${d(e.error)}"
      ?disabled="${e.disabled}"
      ?clearable="${e.clearable}">${e.prefix?s`${`\r
`}${n(m("prefix",e.prefix))}`:l}${e.suffix?s`${`\r
`}${n(m("suffix",e.suffix))}`:l}${e.hide?s`${`\r
`}${n(m("hide",e.hide))}`:l}${e.show?s`${`\r
`}${n(m("show",e.show))}`:l}</omni-password-field>
  `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",hide:"",show:""},play:async e=>{var u,S,y;let t=w(e.canvasElement).getByTestId("test-password-field");t.value="";let o=L.fn();t.addEventListener("input",o),t.addEventListener("click",o);let r=(u=t.shadowRoot)==null?void 0:u.getElementById("inputField");b(r);let a=(S=t.shadowRoot)==null?void 0:S.querySelector("slot[name=show]");await i(a).toBeTruthy(),await c.click(a,{pointerEventsCheck:0});let p=(y=t.shadowRoot)==null?void 0:y.querySelector("slot[name=hide]");await i(p).toBeTruthy(),await c.click(p,{pointerEventsCheck:0}),await c.type(r,"Value Update",{pointerEventsCheck:0});let h="Value Update";await f(()=>i(r).toHaveValue(h),{timeout:3e3}),await f(()=>i(o).toBeCalledTimes(h.length+1),{timeout:3e3})}},ae=E("omni-password-field"),le=$("omni-password-field"),ne=v("omni-password-field"),de=B("omni-password-field","Password123"),me=P("omni-password-field","Password123"),pe=g("omni-password-field"),ce=C("omni-password-field"),fe=A("omni-password-field","Password123"),we={render:e=>s`
    <omni-password-field data-testid="test-password-field" label="${d(e.label)}" ?disabled="${e.disabled}">
      <omni-lock-open-icon style="fill: orange;" slot="show"></omni-lock-open-icon>
      <omni-lock-closed-icon style="fill: lightgreen;" slot="hide"></omni-lock-closed-icon>
    </omni-password-field>
  `,name:"Custom Icon Slot",description:"Set html content to display as the visibility indicators of the field.",args:{label:"Custom Icon Slot"},play:async e=>{var a;let o=(a=w(e.canvasElement).getByTestId("test-password-field").shadowRoot)==null?void 0:a.querySelector("slot[name=show]");await i(o).toBeTruthy();let r=o==null?void 0:o.assignedElements().find(p=>p.tagName.toLocaleLowerCase()==="omni-lock-open-icon");await i(r).toBeTruthy()}};export{me as Clear,we as Custom_Icon_Slot,fe as Disabled,ne as Error_Label,le as Hint,re as Interactive,ae as Label,pe as Prefix,ce as Suffix,de as Value,ie as default};
//# sourceMappingURL=PasswordField.stories.js.map
