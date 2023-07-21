import"../chunks-js/chunk.PKO3EBCH.js";import"../chunks-js/chunk.4VT63HPY.js";import"../chunks-js/chunk.VAH5TOPR.js";import{E as n}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a}from"../chunks-js/chunk.L3RZWW2F.js";import{m,p as r}from"../chunks-js/chunk.BF43NN75.js";m();r();var k={render:()=>a`
    <omni-tab-group data-testid="test-tab-group">
        <omni-tab header="Tab 1">
            <div>Tab 1 Content</div>
        </omni-tab>
     <omni-tab header="Tab 2">
        <div>Tab 2 Content</div>
    </omni-tab>
    <omni-tab header="Tab 3">
        <div>Tab 3 Content</div>
    </omni-tab>
    </omni-tab-group>
`,frameworkSources:[{framework:"React",load:()=>`import { OmniTabGroup, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabGroup>
 <OmniTab header="Tab 1">
    <OmniLabel label="Label of Tab 1"/>
 </OmniTab>
 <OmniTab header="Tab 2">
    <OmniLabel label="Label of Tab 2"/>
 </OmniTab>
 <OmniTab header="Tab 3">
    <OmniLabel label="Label of Tab 3"/>
 </OmniTab>
</OmniTabGroup>;`}],name:"Basic",description:()=>a`
    <div>
        This is the recommended use. Headers for each tab is set by the <code>header</code> attribute.
    <div>
    `},o={render:()=>a`
    <omni-tab-group data-testid='test-tab-group'>
        <omni-tab header="Tab 1">
            <omni-label label="Label of Tab 1"></omni-label>
        </omni-tab>
        <omni-tab header="Tab 2" active>
            <omni-label label="Label of Tab 2"></omni-label>
        </omni-tab>
        <omni-tab header="Tab 3">
            <omni-label label="Label of Tab 3"></omni-label>
        </omni-tab>
    </omni-tab-group>
`,frameworkSources:[{framework:"Vue",load:i=>{var e;return n((e=o==null?void 0:o.render)==null?void 0:e.call(o,i),void 0,t=>t.replace(" active",' :active="true"'))}},{framework:"React",load:()=>`import { OmniTabGroup, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabGroup>
 <OmniTab header="Tab 1">
     <OmniLabel label='Label of Tab 1'/>
 </OmniTab>
 <OmniTab header="Tab 2" active>
     <OmniLabel label='Label of Tab 2'/>
 </OmniTab>
 <OmniTab header="Tab 3">
     <OmniLabel label='Label of Tab 3'/>
 </OmniTab>
</OmniTabGroup>;`}],args:{},name:"Active",description:()=>a`
    <div>
     Set the <code>active</code> attribute on an <code class="language-html">&lt;omni-tab&gt;</code> to indicate its active. By default, the first slotted one is active.
    <div>
    `},b={render:()=>a`
    <omni-tab-group data-testid="test-tab-group">
        <omni-tab header="Tab 1">
            <omni-label label="Label of Tab 1"></omni-label>
        </omni-tab>
        <omni-tab header="Tab 2">
            <omni-label label="Label of Tab 2"></omni-label>
        </omni-tab>
        <omni-tab header="Tab 3" disabled>
            <omni-label label="Label of Tab 3"></omni-label>
        </omni-tab>
    </omni-tab-group>
`,frameworkSources:[{framework:"Vue",load:i=>{var e;return n((e=b==null?void 0:b.render)==null?void 0:e.call(b,i),void 0,t=>t.replace(" disabled",' :disabled="true"'))}},{framework:"React",load:()=>`import { OmniTabGroup, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabGroup>
 <OmniTab header="Tab 1">
    <OmniLabel label="Label of Tab 1"/>
 </OmniTab>
 <OmniTab header="Tab 2">
    <OmniLabel label="Label of Tab 2"/>
 </OmniTab>
 <OmniTab header="Tab 3" disabled>
    <OmniLabel label="Label of Tab 3"/>
 </OmniTab>
</OmniTabGroup>;`}],name:"Disabled",description:()=>a`
    <div>
     Set the <code>disabled</code> attribute on an <code class="language-html">&lt;omni-tab&gt;</code> to indicate its disabled.
    <div>
    `,args:{}};export{o as Active,k as Basic,b as Disabled};
//# sourceMappingURL=Tab.stories.js.map
