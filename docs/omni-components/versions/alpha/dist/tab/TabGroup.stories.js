import"../chunks-js/chunk.HFQ75O5I.js";import"../chunks-js/chunk.3NNY34ES.js";import"../chunks-js/chunk.VAH5TOPR.js";import{c as t}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{x as b}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as o}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as e}from"../chunks-js/chunk.L3RZWW2F.js";import{m as n,p as i}from"../chunks-js/chunk.BF43NN75.js";n();i();var F={title:"UI Components/Tab Group",component:"omni-tab-group"},D={render:a=>e`
    <div style="height: 400px; width: 400px;">
    <omni-tab-group
        data-testid='test-tab-group'
        >
        ${o(a["[Default Slot]"])}
    </omni-tab-group>
    </div>
`,name:"Interactive",args:{"[Default Slot]":b`<omni-tab data-omni-tab-label="Tab-1">
    <div>
        <omni-label label="Tab 1 content label"></omni-label>
        <omni-label label="Tab 1 content label"></omni-label>
        <omni-label label="Tab 1 content label"></omni-label>
    </div>
</omni-tab>
<omni-tab data-omni-tab-label="Tab-2">
    <omni-label label="Tab 2 content label"></omni-label>
</omni-tab>
<omni-tab data-omni-tab-label="Tab-3">
    <omni-label label="Tab 3 content label"></omni-label>
</omni-tab>`},play:async a=>{let l=t(a.canvasElement).getByTestId("test-tab-group")}},E={render:a=>e`
    <omni-tab-group
        data-testid='test-tab-group'>
        <omni-tab             
        data-omni-tab-label="Tab 1">
        </omni-tab>
        <omni-tab 
        data-omni-tab-active            
        data-omni-tab-label="Tab 2">
        </omni-tab>
        <omni-tab             
        data-omni-tab-label="Tab 3">
        </omni-tab>
    </omni-tab-group>

`,frameworkSources:[{framework:"React",load:a=>`import { OmniTabGroup } from "@capitec/omni-components-react/tab-group";
import { OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabGroup>
<OmniTab data-omni-tab-label="Tab 1">
    <OmniLabel label='Label of Tab 1' type='title'>;
</OmniTab>
<OmniTab data-omni-tab-active  data-omni-tab-label="Tab 2">
    <OmniLabel label='Label of Tab 2' type='title'/>;
</OmniTab>
<OmniTab data-omni-tab-label="Tab 3">
    <OmniLabel label='Label of Tab 3' type='title'/>;
</OmniTab>
</OmniTabGroup>;`}],args:{},name:"Active",description:"Set a slotted tab that should be active.",play:async a=>{let l=t(a.canvasElement).getByTestId("test-tab-group")}},k={render:a=>e`
    <omni-tab-group
        data-testid='test-tab-group'>
        ${o(a["[Default Slot]"])}
    </omni-tab-group>
`,frameworkSources:[{framework:"React",load:a=>`import { OmniTabGroup } from "@capitec/omni-components-react/tab-group";
import { OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

// Note that styles are applied to the slotted content via the style property
const App = () => 
<OmniTabGroup>
    <OmniTab data-omni-tab-label="Tab 1">
        <OmniLabel label='Label of Tab 1' type='title'>;
    </OmniTab>
    <OmniTab data-omni-tab-label="Tab 2">
        <OmniLabel label='Label of Tab 2' type='title'/>;
    </OmniTab>
    <OmniTab data-omni-tab-label="Tab 3">
        <OmniLabel label='Label of Tab 3' type='title'/>;
    </OmniTab>
</OmniTabGroup>;`}],name:"Tabs",description:"Render a omni-tab-group component with nested omni-tab components",args:{"[Default Slot]":b`<omni-tab 
        data-omni-tab-label="Tab 1"            
        data-testid="test-tab-1">
        <div>
            <omni-label label="Tab 1 content label"></omni-label>
            <omni-label label="Tab 1 content label"></omni-label>
            <omni-label label="Tab 1 content label"></omni-label>
        </div>
    </omni-tab>
    <omni-tab           
        data-omni-tab-label="Tab 2">
        <div>
            <omni-label label="Tab 2 content label"></omni-label>
            <omni-label label="Tab 2 content label"></omni-label>
            <omni-label label="Tab 2 content label"></omni-label>
        </div>
    </omni-tab>
    <omni-tab            
        data-omni-tab-label="Tab 3">
        <div>
            <omni-label label="Tab 3 content label"></omni-label>
            <omni-label label="Tab 3 content label"></omni-label>
            <omni-label label="Tab 3 content label"></omni-label>
        </div>
    </omni-tab>`},play:async a=>{let l=t(a.canvasElement).getByTestId("test-tab")}};export{E as Active,D as Interactive,k as Tabs,F as default};
//# sourceMappingURL=TabGroup.stories.js.map
