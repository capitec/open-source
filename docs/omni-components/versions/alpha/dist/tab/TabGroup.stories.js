import"../chunks-js/chunk.AMHTFALX.js";import"../chunks-js/chunk.VP6HATZ4.js";import"../chunks-js/chunk.VAH5TOPR.js";import{a as y}from"../chunks-js/chunk.JSH3M4FH.js";import{b as c}from"../chunks-js/chunk.XOIHXH3W.js";import{b as t}from"../chunks-js/chunk.FVJIJQ42.js";import{c as m}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{x as d,z as r}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as p}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as l}from"../chunks-js/chunk.L3RZWW2F.js";import{h,m as g,p as f}from"../chunks-js/chunk.BF43NN75.js";g();f();var T=h(y(),1);var J={title:"UI Components/Tab Group",component:"omni-tab-group"},K={render:a=>l`
    <div style="height: 200px;">
    <omni-tab-group
        data-testid='test-tab-group'
        >
        ${p(a["[Default Slot]"])}
    </omni-tab-group>
    </div>
`,name:"Interactive",args:{"[Default Slot]":d`<omni-tab data-omni-tab-label="Tab-1">
    <omni-label label="Tab 1 content label"></omni-label>
</omni-tab>
<omni-tab data-omni-tab-label="Tab-2">
    <omni-label label="Tab 2 content label"></omni-label>
</omni-tab>
<omni-tab data-omni-tab-label="Tab-3">
    <omni-label label="Tab 3 content label"></omni-label>
</omni-tab>`},play:async a=>{let o=m(a.canvasElement).getByTestId("test-tab-group"),n=T.fn();o.addEventListener("click",n);let e=await r(o.shadowRoot,".tab-bar");await t(e).toBeTruthy();let b=e.querySelectorAll(".tab");await t(b).toBeTruthy();let i=[...b],u=i.find(s=>s.children.length>1);await c.click(i[1])}},P={render:a=>l`
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
</OmniTabGroup>;`}],args:{},name:"Active",description:()=>l`
    <div>
        Set which <code class="language-html">&lt;omni-tab&gt;</code> component in the <code class="language-html">&lt;omni-tab-group&gt;</code> component should be selected on initial render. This is based on setting the <code class="language-js">data-omni-tab-active</code> attribute.
    <div>
    `,play:async a=>{let o=m(a.canvasElement).getByTestId("test-tab-group"),n=T.fn();o.addEventListener("click",n);let e=await r(o.shadowRoot,".tab-bar");await t(e).toBeTruthy();let b=e.querySelectorAll(".tab");await t(b).toBeTruthy();let i=[...b],u=i[1];await t(b).toBeTruthy(),await t(u).toBeTruthy(),await c.click(i[0]);let s=i[0];await t(s.children[1].className==="indicator").toBeTruthy()}},Q={render:a=>l`
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
</OmniTabGroup>;`}],name:"Tabs",description:()=>l`
    <div>
        Render a <code class="language-html">&lt;omni-tab-group&gt;</code> component with nested <code class="language-html">&lt;omni-tab&gt;</code> components.
    <div>
    `,args:{"[Default Slot]":d`<omni-tab 
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
    </omni-tab>`},play:async a=>{let o=m(a.canvasElement).getByTestId("test-tab-group"),n=await r(o.shadowRoot,".tab-bar");await t(n).toBeTruthy();let e=n.querySelectorAll(".tab");await t(e).toBeTruthy()}};export{P as Active,K as Interactive,Q as Tabs,J as default};
//# sourceMappingURL=TabGroup.stories.js.map
