import"../chunks-js/chunk.V3AH72NQ.js";import{a as B}from"../chunks-js/chunk.IRJIQSYL.js";import"../chunks-js/chunk.LCIHREUY.js";import{b as c}from"../chunks-js/chunk.MHLMY33S.js";import{a as y}from"../chunks-js/chunk.6QCQBNRL.js";import{c as r}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import{E as m,x as f}from"../chunks-js/chunk.JVZL4EXU.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import{a as b}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.ZPV4YWBP.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as w,m as p,p as u}from"../chunks-js/chunk.BF43NN75.js";p();u();var d=w(B(),1);var g=["primary","secondary","clear","white"],S=["left","top","right","bottom"],_={title:"UI Components/Button",component:"omni-button",argTypes:{type:{control:"radio",options:g},slotPosition:{control:"radio",options:S},"slot-position":{control:!1},"[Default Slot]":{control:"text"}}},k={render:t=>l`
    <omni-button
      data-testid="test-button"
      type="${t.type}"
      label="${y(t.label)}"
      slot-position="${t.slotPosition}"
      ?disabled=${t.disabled}>
      ${b(t["[Default Slot]"])}
    </omni-button>
  `,frameworkSources:[{framework:"Vue",load:t=>m(k.render(t),void 0,e=>e.replace(" disabled",' :disabled="true"'))}],name:"Interactive",args:{type:"secondary",label:"Button",slotPosition:"top",disabled:!1,"[Default Slot]":f`<omni-icon icon="@material/thumb_up"></omni-icon>`},play:async t=>{let e=r(t.canvasElement).getByTestId("test-button"),o=d.fn();e.addEventListener("click",()=>o()),await c.click(e,{pointerEventsCheck:0}),await c.click(e,{pointerEventsCheck:0}),await a(o).toBeCalledTimes(2)}},G={render:t=>l` <omni-button type="${t.type}" label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.type?` type='${t.type}'`:""}/>;`}],name:"Type",description:"Set the type of button to render using different combinations of primary and alternate colours.",args:{type:"primary",label:"Click"},play:async t=>{var n;let o=(n=r(t.canvasElement).getByTestId("test-button").shadowRoot)==null?void 0:n.getElementById("button"),i=o==null?void 0:o.classList.contains("primary");await a(i).toBeTruthy()}},h={render:t=>l` <omni-button label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display within.",args:{label:"Click"},play:async t=>{var n,s;let o=(n=r(t.canvasElement).getByTestId("test-button").shadowRoot)==null?void 0:n.getElementById("label"),i=(o==null?void 0:o.innerText)===((s=h.args)==null?void 0:s.label);await a(i).toBeTruthy()}},J={render:()=>l`
    <omni-button data-testid="test-button">
      <omni-icon size="default" icon="./assets/images/direction.svg"></omni-icon>
    </omni-button>
  `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";
import { OmniIcon } from "@capitec/omni-components-react/icon";

const App = () => <OmniButton>
                    <OmniIcon size="default" icon="./assets/images/direction.svg" />
                  </OmniButton>;`}],name:"Slot",description:"Set html content to display within.",args:{},play:async t=>{var n;let o=(n=r(t.canvasElement).getByTestId("test-button").shadowRoot)==null?void 0:n.querySelector("slot"),i=o==null?void 0:o.assignedElements().find(s=>s.tagName.toLowerCase()==="omni-icon");await a(i).toBeTruthy()}},T={render:t=>l` <omni-button disabled label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.disabled?" disabled":""}/>;`},{framework:"Vue",load:t=>m(T.render(t),void 0,e=>e.replace(" disabled",' :disabled="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async t=>{var s;let e=r(t.canvasElement).getByTestId("test-button"),o=(s=e.shadowRoot)==null?void 0:s.getElementById("button"),i=o==null?void 0:o.classList.contains("disabled");await a(i).toBeTruthy();let n=d.fn();e.addEventListener("click",v=>{n()}),await a(()=>c.click(e)).rejects.toThrow(/pointer-events: none/),await a(()=>c.click(e)).rejects.toThrow(/pointer-events: none/),await a(n).toBeCalledTimes(0)}};export{T as Disabled,k as Interactive,h as Label,J as Slot,G as Type,_ as default};
//# sourceMappingURL=Button.stories.js.map
