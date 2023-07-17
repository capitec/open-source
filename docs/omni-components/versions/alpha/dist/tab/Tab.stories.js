import"../chunks-js/chunk.XLJEC6IH.js";import"../chunks-js/chunk.O4APVQFJ.js";import"../chunks-js/chunk.MW4VXBNP.js";import{a as S}from"../chunks-js/chunk.AFJ2VLBG.js";import{b as s}from"../chunks-js/chunk.IEAYXHP4.js";import{c as T}from"../chunks-js/chunk.WXU7FCN5.js";import{e as t}from"../chunks-js/chunk.F2C2BPNZ.js";import{E as u,z as i}from"../chunks-js/chunk.ZCQBBFJF.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n}from"../chunks-js/chunk.L3RZWW2F.js";import{h as g,m as f,p as O}from"../chunks-js/chunk.BF43NN75.js";f();O();var w=g(S(),1);var K={render:()=>n`
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
</OmniTabGroup>;`}],name:"Basic",description:()=>n`
    <div>
        This is the recommended use. Headers for each tab is set by the <code>header</code> attribute.
    <div>
    `,play:async o=>{let a=T(o.canvasElement).getByTestId("test-tab-group"),e=await i(a.shadowRoot,".tab-bar");await t(e).toBeTruthy();let r=[...e.querySelectorAll("omni-tab-header")];await t(r.length).toBe(3);let l=(await i(a.shadowRoot,"slot:not([name])")).assignedElements();await t(l.length).toBe(3)}},d={render:()=>n`
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
`,frameworkSources:[{framework:"Vue",load:o=>{var a;return u((a=d==null?void 0:d.render)==null?void 0:a.call(d,o),void 0,e=>e.replace(" active",' :active="true"'))}},{framework:"React",load:()=>`import { OmniTabGroup, OmniTab } from "@capitec/omni-components-react/tab";
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
</OmniTabGroup>;`}],args:{},name:"Active",description:()=>n`
    <div>
     Set the <code>active</code> attribute on an <code class="language-html">&lt;omni-tab&gt;</code> to indicate its active. By default, the first slotted one is active.
    <div>
    `,play:async o=>{let a=T(o.canvasElement).getByTestId("test-tab-group"),e=await i(a.shadowRoot,".tab-bar");await t(e).toBeTruthy();let r=[...e.querySelectorAll("omni-tab-header")],b=r.find(m=>m.hasAttribute("data-active"));await t(b).toBeTruthy(),await t(b).toEqual(r[1]),await s.click(r[0]);let p=(await i(a.shadowRoot,"slot:not([name])")).assignedElements().find(m=>m.hasAttribute("active")),L=(await i(p.shadowRoot,"slot")).assignedElements().find(m=>m.getAttribute("label")==="Label of Tab 1");await t(L).toBeTruthy()}},c={render:()=>n`
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
`,frameworkSources:[{framework:"Vue",load:o=>{var a;return u((a=c==null?void 0:c.render)==null?void 0:a.call(c,o),void 0,e=>e.replace(" disabled",' :disabled="true"'))}},{framework:"React",load:()=>`import { OmniTabGroup, OmniTab } from "@capitec/omni-components-react/tab";
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
</OmniTabGroup>;`}],name:"Disabled",description:()=>n`
    <div>
     Set the <code>disabled</code> attribute on an <code class="language-html">&lt;omni-tab&gt;</code> to indicate its disabled.
    <div>
    `,args:{},play:async o=>{let a=T(o.canvasElement).getByTestId("test-tab-group"),e=w.fn();a.addEventListener("tab-select",e);let b=[...(await i(a.shadowRoot,".tab-bar")).querySelectorAll("omni-tab-header")],l=b.find(p=>p.hasAttribute("data-disabled"));await t(l).toEqual(b[2]),await s.click(l),await s.click(l),await t(e).toBeCalledTimes(0),await s.click(b[1]),await t(e).toBeCalledTimes(1)}};export{d as Active,K as Basic,c as Disabled};
//# sourceMappingURL=Tab.stories.js.map
