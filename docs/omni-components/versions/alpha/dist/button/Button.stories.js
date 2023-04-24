import"../chunks-js/chunk.WV2GEXQ2.js";import{a as B}from"../chunks-js/chunk.IRJIQSYL.js";import{a as b}from"../chunks-js/chunk.PJH7M65U.js";import{a as u}from"../chunks-js/chunk.G3QHRCKP.js";import{b as c}from"../chunks-js/chunk.MHLMY33S.js";import{w as y}from"../chunks-js/chunk.Q7LXY37U.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import{c as r}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as f,m as p,p as d}from"../chunks-js/chunk.BF43NN75.js";p();d();var m=f(B(),1);var w=["primary","secondary","clear","white"],S=["left","top","right","bottom"],N={title:"UI Components/Button",component:"omni-button",argTypes:{type:{control:"radio",options:w},slotPosition:{control:"radio",options:S},"slot-position":{control:!1},"[Default Slot]":{control:"text"}}},U={render:t=>l`
    <omni-button
      data-testid="test-button"
      type="${t.type}"
      label="${b(t.label)}"
      slot-position="${t.slotPosition}"
      ?disabled=${t.disabled}>
      ${u(t["[Default Slot]"])}
    </omni-button>
  `,name:"Interactive",args:{type:"secondary",label:"Button",slotPosition:"top",disabled:!1,"[Default Slot]":y`<omni-icon icon="@material/thumb_up"></omni-icon>`},play:async t=>{let e=r(t.canvasElement).getByTestId("test-button"),o=m.fn();e.addEventListener("click",()=>o()),await c.click(e,{pointerEventsCheck:0}),await c.click(e,{pointerEventsCheck:0}),await i(o).toBeCalledTimes(2)},frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.type?` type='${t.type}'`:""}${t.slotPosition?` slot-position='${t.slotPosition}'`:""}${t.disabled?" disabled":""}${t["[Default Slot]"]?`>
                      {console.error('Slotted content might require additional imports and potential React wrappers.')}
                      ${t["[Default Slot]"]}
                  </OmniButton>`:"/>"};`}]},_={render:t=>l` <omni-button type="${t.type}" label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.type?` type='${t.type}'`:""}/>;`}],name:"Type",description:"Set the type of button to render using different combinations of primary and alternate colours.",args:{type:"primary",label:"Click"},play:async t=>{var n;let o=(n=r(t.canvasElement).getByTestId("test-button").shadowRoot)==null?void 0:n.getElementById("button"),a=o==null?void 0:o.classList.contains("primary");await i(a).toBeTruthy()}},$={render:t=>l` <omni-button label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display within.",args:{label:"Click"},play:async t=>{var n,s;let o=(n=r(t.canvasElement).getByTestId("test-button").shadowRoot)==null?void 0:n.getElementById("label"),a=(o==null?void 0:o.innerText)===((s=$.args)==null?void 0:s.label);await i(a).toBeTruthy()}},G={render:()=>l`
    <omni-button data-testid="test-button">
      <omni-icon size="default" icon="./assets/images/direction.svg"></omni-icon>
    </omni-button>
  `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";
import { OmniIcon } from "@capitec/omni-components-react/icon";

const App = () => <OmniButton>
                    <OmniIcon size="default" icon="./assets/images/direction.svg" />
                  </OmniButton>;`}],name:"Slot",description:"Set html content to display within.",args:{},play:async t=>{var n;let o=(n=r(t.canvasElement).getByTestId("test-button").shadowRoot)==null?void 0:n.querySelector("slot"),a=o==null?void 0:o.assignedElements().find(s=>s.tagName.toLowerCase()==="omni-icon");await i(a).toBeTruthy()}},J={render:t=>l` <omni-button disabled label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.disabled?" disabled":""}/>;`}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async t=>{var s;let e=r(t.canvasElement).getByTestId("test-button"),o=(s=e.shadowRoot)==null?void 0:s.getElementById("button"),a=o==null?void 0:o.classList.contains("disabled");await i(a).toBeTruthy();let n=m.fn();e.addEventListener("click",h=>{n()}),await i(()=>c.click(e)).rejects.toThrow(/pointer-events: none/),await i(()=>c.click(e)).rejects.toThrow(/pointer-events: none/),await i(n).toBeCalledTimes(0)}};export{J as Disabled,U as Interactive,$ as Label,G as Slot,_ as Type,N as default};
//# sourceMappingURL=Button.stories.js.map
