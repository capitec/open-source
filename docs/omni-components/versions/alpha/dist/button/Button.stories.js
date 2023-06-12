import"../chunks-js/chunk.DXJESG3Z.js";import{a as S}from"../chunks-js/chunk.JSH3M4FH.js";import{b as c}from"../chunks-js/chunk.XOIHXH3W.js";import{a as w}from"../chunks-js/chunk.XCXCHO25.js";import{b as a}from"../chunks-js/chunk.FVJIJQ42.js";import{c as l}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as d,x as B}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as f}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r}from"../chunks-js/chunk.L3RZWW2F.js";import{h as g,m as b,p as y}from"../chunks-js/chunk.BF43NN75.js";b();y();var u=g(S(),1);var h=["primary","secondary","clear","white"],k=["left","top","right","bottom"],_={title:"UI Components/Button",component:"omni-button",argTypes:{type:{control:"radio",options:h},slotPosition:{control:"radio",options:k},"slot-position":{control:!1},"[Default Slot]":{control:"text"}}},m={render:t=>r`
    <omni-button
      data-testid="test-button"
      type="${t.type}"
      label="${w(t.label)}"
      slot-position="${t.slotPosition}"
      ?disabled=${t.disabled}>
      ${f(t["[Default Slot]"])}
    </omni-button>
  `,frameworkSources:[{framework:"Vue",load:t=>{var e;return d((e=m==null?void 0:m.render)==null?void 0:e.call(m,t),void 0,o=>o.replace(" disabled",' :disabled="true"'))}}],name:"Interactive",args:{type:"secondary",label:"Button",slotPosition:"top",disabled:!1,"[Default Slot]":B`<omni-icon icon="@material/thumb_up"></omni-icon>`},play:async t=>{let e=l(t.canvasElement).getByTestId("test-button"),o=u.fn();e.addEventListener("click",()=>o()),await c.click(e,{pointerEventsCheck:0}),await c.click(e,{pointerEventsCheck:0}),await a(o).toBeCalledTimes(2)}},G={render:t=>r` <omni-button type="${t.type}" label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.type?` type='${t.type}'`:""}/>;`}],name:"Type",description:"Set the type of button to render using different combinations of primary and alternate colours.",args:{type:"primary",label:"Click"},play:async t=>{var n;let o=(n=l(t.canvasElement).getByTestId("test-button").shadowRoot)==null?void 0:n.getElementById("button"),i=o==null?void 0:o.classList.contains("primary");await a(i).toBeTruthy()}},T={render:t=>r` <omni-button label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display within.",args:{label:"Click"},play:async t=>{var n,s;let o=(n=l(t.canvasElement).getByTestId("test-button").shadowRoot)==null?void 0:n.getElementById("label"),i=(o==null?void 0:o.innerText)===((s=T.args)==null?void 0:s.label);await a(i).toBeTruthy()}},J={render:()=>r`
    <omni-button data-testid="test-button">
      <omni-icon size="default" icon="./assets/images/direction.svg"></omni-icon>
    </omni-button>
  `,frameworkSources:[{framework:"React",load:()=>`import { OmniButton } from "@capitec/omni-components-react/button";
import { OmniIcon } from "@capitec/omni-components-react/icon";

const App = () => <OmniButton>
                    <OmniIcon size="default" icon="./assets/images/direction.svg" />
                  </OmniButton>;`}],name:"Slot",description:"Set html content to display within.",args:{},play:async t=>{var n;let o=(n=l(t.canvasElement).getByTestId("test-button").shadowRoot)==null?void 0:n.querySelector("slot"),i=o==null?void 0:o.assignedElements().find(s=>s.tagName.toLowerCase()==="omni-icon");await a(i).toBeTruthy()}},p={render:t=>r` <omni-button disabled label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.disabled?" disabled":""}/>;`},{framework:"Vue",load:t=>{var e;return d((e=p==null?void 0:p.render)==null?void 0:e.call(p,t),void 0,o=>o.replace(" disabled",' :disabled="true"'))}}],name:"Disabled",description:()=>r`<span>Set this in order to prevent interaction. Done internally via <code class="language-css">pointer-events: none</code></span>.`,args:{label:"Disabled",disabled:!0},play:async t=>{var s;let e=l(t.canvasElement).getByTestId("test-button"),o=(s=e.shadowRoot)==null?void 0:s.getElementById("button"),i=o==null?void 0:o.classList.contains("disabled");await a(i).toBeTruthy();let n=u.fn();e.addEventListener("click",C=>{n()}),await a(()=>c.click(e)).rejects.toThrow(/pointer-events: none/),await a(()=>c.click(e)).rejects.toThrow(/pointer-events: none/),await a(n).toBeCalledTimes(0)}};export{p as Disabled,m as Interactive,T as Label,J as Slot,G as Type,_ as default};
//# sourceMappingURL=Button.stories.js.map
