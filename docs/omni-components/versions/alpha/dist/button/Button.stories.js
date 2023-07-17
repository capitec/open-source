import{E as a,x as c}from"../chunks-js/chunk.ZCQBBFJF.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as l}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.YN7IXZEJ.js";import{a as p}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o}from"../chunks-js/chunk.L3RZWW2F.js";import{m as s,p as m}from"../chunks-js/chunk.BF43NN75.js";s();m();var d=["primary","secondary","clear","white"],u=["left","top","right","bottom"],D={title:"UI Components/Button",component:"omni-button",argTypes:{type:{control:"radio",options:d},slotPosition:{control:"radio",options:u},"slot-position":{control:!1},"[Default Slot]":{control:"text"}}},n={render:t=>o`
    <omni-button
      data-testid="test-button"
      type="${t.type}"
      label="${p(t.label)}"
      slot-position="${t.slotPosition}"
      ?disabled=${t.disabled}>
      ${l(t["[Default Slot]"])}
    </omni-button>
  `,frameworkSources:[{framework:"Vue",load:t=>{var e;return a((e=n==null?void 0:n.render)==null?void 0:e.call(n,t),void 0,r=>r.replace(" disabled",' :disabled="true"'))}}],name:"Interactive",args:{type:"secondary",label:"Button",slotPosition:"top",disabled:!1,"[Default Slot]":c`<omni-icon icon="@material/thumb_up"></omni-icon>`}},L={render:t=>o` <omni-button type="${t.type}" label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.type?` type='${t.type}'`:""}/>;`}],name:"Type",description:"Set the type of button to render using different combinations of primary and alternate colours.",args:{type:"primary",label:"Click"}},R={render:t=>o` <omni-button label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display within.",args:{label:"Click"}},T={render:()=>o`
    <omni-button data-testid="test-button">
      <omni-icon size="default" icon="./assets/images/direction.svg"></omni-icon>
    </omni-button>
  `,frameworkSources:[{framework:"React",load:()=>`import { OmniButton } from "@capitec/omni-components-react/button";
import { OmniIcon } from "@capitec/omni-components-react/icon";

const App = () => <OmniButton>
                    <OmniIcon size="default" icon="./assets/images/direction.svg" />
                  </OmniButton>;`}],name:"Slot",description:"Set html content to display within.",args:{}},i={render:t=>o` <omni-button disabled label="${t.label}" data-testid="test-button"></omni-button> `,frameworkSources:[{framework:"React",load:t=>`import { OmniButton } from "@capitec/omni-components-react/button";

const App = () => <OmniButton${t.label?` label='${t.label}'`:""}${t.disabled?" disabled":""}/>;`},{framework:"Vue",load:t=>{var e;return a((e=i==null?void 0:i.render)==null?void 0:e.call(i,t),void 0,r=>r.replace(" disabled",' :disabled="true"'))}}],name:"Disabled",description:()=>o`<span>Set this in order to prevent interaction. Done internally via <code class="language-css">pointer-events: none</code></span>.`,args:{label:"Disabled",disabled:!0}};export{i as Disabled,n as Interactive,R as Label,T as Slot,L as Type,D as default};
//# sourceMappingURL=Button.stories.js.map
