import"../chunks-js/chunk.HCCNYMLF.js";import"../chunks-js/chunk.EV3QB76L.js";import"../chunks-js/chunk.57MN2DDF.js";import{E as n}from"../chunks-js/chunk.NXMGYN5J.js";import"../chunks-js/chunk.HWW7Q3DW.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.FPKTYYRH.js";import"../chunks-js/chunk.ROSXE42L.js";import"../chunks-js/chunk.WLLX574P.js";import"../chunks-js/chunk.B24VSKLO.js";import"../chunks-js/chunk.DJIVMBLF.js";import"../chunks-js/chunk.JOXUPYMK.js";import"../chunks-js/chunk.3F3IIFA7.js";import"../chunks-js/chunk.263MQTZQ.js";import"../chunks-js/chunk.O3UNTVN7.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as a}from"../chunks-js/chunk.63YMDT6M.js";import{m,p as r}from"../chunks-js/chunk.BF43NN75.js";m();r();var k={render:()=>a`
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
