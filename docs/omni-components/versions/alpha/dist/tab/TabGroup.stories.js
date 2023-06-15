import"../chunks-js/chunk.HFQ75O5I.js";import"../chunks-js/chunk.DQUPYYSW.js";import"../chunks-js/chunk.VAH5TOPR.js";import{a as h}from"../chunks-js/chunk.JSH3M4FH.js";import{b as c}from"../chunks-js/chunk.XOIHXH3W.js";import{b as t}from"../chunks-js/chunk.FVJIJQ42.js";import{c as l}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{x as T,z as r}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as p}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as m}from"../chunks-js/chunk.L3RZWW2F.js";import{h as y,m as f,p as g}from"../chunks-js/chunk.BF43NN75.js";f();g();var d=y(h(),1);var J={title:"UI Components/Tab Group",component:"omni-tab-group"},K={render:a=>m`
    <div style="height: 200px;">
    <omni-tab-group
        data-testid='test-tab-group'
        >
        ${p(a["[Default Slot]"])}
    </omni-tab-group>
    </div>
`,name:"Interactive",args:{"[Default Slot]":T`<omni-tab data-omni-tab-label="Tab-1">
    <omni-label label="Tab 1 content label"></omni-label>
</omni-tab>
<omni-tab data-omni-tab-label="Tab-2">
    <omni-label label="Tab 2 content label"></omni-label>
</omni-tab>
<omni-tab data-omni-tab-label="Tab-3">
    <omni-label label="Tab 3 content label"></omni-label>
</omni-tab>`},play:async a=>{let o=l(a.canvasElement).getByTestId("test-tab-group"),b=d.fn();o.addEventListener("click",b);let e=await r(o.shadowRoot,".tab-bar");await t(e).toBeTruthy();let n=e.querySelectorAll(".tab");await t(n).toBeTruthy();let i=[...n],u=i.find(s=>s.children.length>1);await c.click(i[1])}},P={render:a=>m`
    <omni-tab-group
        data-testid='test-tab-group'>
        <omni-tab             
        data-omni-tab-label="Tab 1">
            <omni-label label='Label of Tab 1'></omni-label>
        </omni-tab>
        <omni-tab 
        data-omni-tab-active            
        data-omni-tab-label="Tab 2">
            <omni-label label='Label of Tab 2'></omni-label>
        </omni-tab>
        <omni-tab             
        data-omni-tab-label="Tab 3">
            <omni-label label='Label of Tab 3'></omni-label>
        </omni-tab>
    </omni-tab-group>

`,frameworkSources:[{framework:"React",load:a=>`import { OmniTabGroup, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabGroup>
    <OmniTab data-omni-tab-label="Tab 1">
        <OmniLabel label='Label of Tab 1'/>
    </OmniTab>
    <OmniTab data-omni-tab-active  data-omni-tab-label="Tab 2">
        <OmniLabel label='Label of Tab 2'/>
    </OmniTab>
    <OmniTab data-omni-tab-label="Tab 3">
        <OmniLabel label='Label of Tab 3'/>
    </OmniTab>
</OmniTabGroup>;`}],args:{},name:"Active",description:"Set a slotted tab that should be active.",play:async a=>{let o=l(a.canvasElement).getByTestId("test-tab-group"),b=d.fn();o.addEventListener("click",b);let e=await r(o.shadowRoot,".tab-bar");await t(e).toBeTruthy();let n=e.querySelectorAll(".tab");await t(n).toBeTruthy();let i=[...n],u=i[1];await t(n).toBeTruthy(),await t(u).toBeTruthy(),await c.click(i[0]);let s=i[0];await t(s.children[1].className==="indicator").toBeTruthy()}},Q={render:a=>m`
    <omni-tab-group
        data-testid='test-tab-group'>
        ${p(a["[Default Slot]"])}
    </omni-tab-group>
`,frameworkSources:[{framework:"React",load:a=>`import { OmniTabGroup, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

// Note that styles are applied to the slotted content via the style property
const App = () => 
<OmniTabGroup>
    <OmniTab data-omni-tab-label="Tab 1">
        <OmniLabel label='Label of Tab 1'/>
    </OmniTab>
    <OmniTab data-omni-tab-label="Tab 2">
        <OmniLabel label='Label of Tab 2'/>
    </OmniTab>
    <OmniTab data-omni-tab-label="Tab 3">
        <OmniLabel label='Label of Tab 3'/>
    </OmniTab>
</OmniTabGroup>;`}],name:"Tabs",description:"Render a omni-tab-group component with nested omni-tab components",args:{"[Default Slot]":T`<omni-tab 
        data-omni-tab-label="Tab 1"            
        data-testid="test-tab-1">
        <div>
            <omni-label label="Label of Tab 1"></omni-label>
        </div>
    </omni-tab>
    <omni-tab           
        data-omni-tab-label="Tab 2">
        <div>
            <omni-label label="Label of Tab 2"></omni-label>
        </div>
    </omni-tab>
    <omni-tab            
        data-omni-tab-label="Tab 3">
        <div>
            <omni-label label="Label of Tab 3"></omni-label>
        </div>
    </omni-tab>`},play:async a=>{let o=l(a.canvasElement).getByTestId("test-tab-group"),b=await r(o.shadowRoot,".tab-bar");await t(b).toBeTruthy();let e=b.querySelectorAll(".tab");await t(e).toBeTruthy()}};export{P as Active,K as Interactive,Q as Tabs,J as default};
//# sourceMappingURL=TabGroup.stories.js.map
