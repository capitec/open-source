import{E as r,x as c}from"../chunks-js/chunk.5CHB66EF.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZVGMNGQN.js";import"../chunks-js/chunk.AWN7JMZV.js";import"../chunks-js/chunk.SG4R3JV5.js";import"../chunks-js/chunk.ZAPR5LYJ.js";import"../chunks-js/chunk.FW3DTE4B.js";import{a as m}from"../chunks-js/chunk.BRAXTSQY.js";import"../chunks-js/chunk.JIWX2J4S.js";import"../chunks-js/chunk.77M5452K.js";import"../chunks-js/chunk.QRX6OAEP.js";import{a as p}from"../chunks-js/chunk.A5JWGKKF.js";import"../chunks-js/chunk.PQH6VL5Y.js";import"../chunks-js/chunk.FMKVMQ43.js";import"../chunks-js/chunk.2KHELDCI.js";import{b as o}from"../chunks-js/chunk.6H2RNHNO.js";import{m as s,p as l}from"../chunks-js/chunk.BF43NN75.js";s();l();var n={render:t=>o`
    <omni-button
      data-testid="test-button"
      type="${t.type}"
      label="${p(t.label)}"
      slot-position="${t.slotPosition}"
      ?disabled=${t.disabled}>
      ${m(t["[Default Slot]"])}
    </omni-button>
  `,frameworkSources:[{framework:"Vue",load:t=>{var e;return r((e=n==null?void 0:n.render)==null?void 0:e.call(n,t),void 0,a=>a.replace(" disabled",' :disabled="true"'))}}],name:"Interactive",args:{type:"secondary",label:"Button",slotPosition:"top",disabled:!1,"[Default Slot]":c`<omni-icon icon="@material/thumb_up"></omni-icon>`}},x={render:t=>o` <omni-button type="${t.type}" label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.type?` type='${t.type}'`:""}/>;`}],name:"Type",description:"Set the type of button to render using different combinations of primary and alternate colours.",args:{type:"primary",label:"Click"}},P={render:t=>o` <omni-button label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display within.",args:{label:"Click"}},v={render:()=>o`
    <omni-button data-testid="test-button">
      <omni-icon size="default" icon="./assets/images/direction.svg"></omni-icon>
    </omni-button>
  `,frameworkSources:[{framework:"React",load:()=>`import { OmniButton } from "@capitec/omni-components-react/button";
import { OmniIcon } from "@capitec/omni-components-react/icon";

const App = () => <OmniButton>
                    <OmniIcon size="default" icon="./assets/images/direction.svg" />
                  </OmniButton>;`}],name:"Slot",description:"Set html content to display within.",args:{}},i={render:t=>o` <omni-button disabled label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.disabled?" disabled":""}/>;`},{framework:"Vue",load:t=>{var e;return r((e=i==null?void 0:i.render)==null?void 0:e.call(i,t),void 0,a=>a.replace(" disabled",' :disabled="true"'))}}],name:"Disabled",description:()=>o`<span>Set this in order to prevent interaction. Done internally via <code class="language-css">pointer-events: none</code></span>.`,args:{label:"Disabled",disabled:!0}};export{i as Disabled,n as Interactive,P as Label,v as Slot,x as Type};
//# sourceMappingURL=Button.stories.js.map
