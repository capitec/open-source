import"../chunks-js/chunk.PKO3EBCH.js";import"../chunks-js/chunk.YEUBKIGR.js";import"../chunks-js/chunk.VAH5TOPR.js";import{a as S}from"../chunks-js/chunk.JSH3M4FH.js";import{b as r}from"../chunks-js/chunk.XOIHXH3W.js";import{b as t}from"../chunks-js/chunk.FVJIJQ42.js";import{c as T}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as p,z as i}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b}from"../chunks-js/chunk.L3RZWW2F.js";import{h as L,m as g,p as w}from"../chunks-js/chunk.BF43NN75.js";g();w();var O=L(S(),1);var N={render:()=>b`
    <omni-tabs data-testid="test-tabs">
        <omni-tab header="Tab 1">
            <div>Tab 1 Content</div>
        </omni-tab>
     <omni-tab header="Tab 2">
        <div>Tab 2 Content</div>
    </omni-tab>
    <omni-tab header="Tab 3">
        <div>Tab 3 Content</div>
    </omni-tab>
    </omni-tabs>
`,frameworkSources:[{framework:"React",load:()=>`import { OmniTabs, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabs>
    <OmniTab header="Tab 1">
        <OmniLabel label="Label of Tab 1"/>
    </OmniTab>
    <OmniTab header="Tab 2">
        <OmniLabel label="Label of Tab 2"/>
    </OmniTab>
    <OmniTab header="Tab 3">
        <OmniLabel label="Label of Tab 3"/>
    </OmniTab>
</OmniTabs>;`}],name:"Basic",description:()=>b`
    <div>
        This is the recommended use of the <code class="language-html">&lt;omni-tabs&gt;</code> with slotted <code class="language-html">&lt;omni-tab&gt;</code> component(s), headers for each tab are set by setting the <code>header</code> attribute of the <code class="language-html">&lt;omni-tab&gt;</code>(s).
    <div>
    `,play:async o=>{let a=T(o.canvasElement).getByTestId("test-tabs"),e=await i(a.shadowRoot,".tab-bar");await t(e).toBeTruthy();let l=[...e.querySelectorAll("omni-tab-header")];await t(l.length).toBe(3);let s=(await i(a.shadowRoot,"slot:not([name])")).assignedElements();await t(s.length).toBe(3)}},d={render:()=>b`
    <omni-tabs data-testid='test-tabs'>
        <omni-tab header="Tab 1">
            <omni-label label="Label of Tab 1"></omni-label>
        </omni-tab>
        <omni-tab header="Tab 2" active>
            <omni-label label="Label of Tab 2"></omni-label>
        </omni-tab>
        <omni-tab header="Tab 3">
            <omni-label label="Label of Tab 3"></omni-label>
        </omni-tab>
    </omni-tabs>

`,frameworkSources:[{framework:"Vue",load:o=>{var a;return p((a=d==null?void 0:d.render)==null?void 0:a.call(d,o),void 0,e=>e.replace(" active",' :active="true"'))}},{framework:"React",load:()=>`import { OmniTabs, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabs>
    <OmniTab header="Tab 1">
        <OmniLabel label='Label of Tab 1'/>
    </OmniTab>
    <OmniTab header="Tab 2" active>
        <OmniLabel label='Label of Tab 2'/>
    </OmniTab>
    <OmniTab header="Tab 3">
        <OmniLabel label='Label of Tab 3'/>
    </OmniTab>
</OmniTabs>;`}],args:{},name:"Active",description:()=>b`
    <div>
        Set which <code class="language-html">&lt;omni-tab&gt;</code> slotted in the <code class="language-html">&lt;omni-tabs&gt;</code> should be active by default. By setting the <code>active</code> attribute of one of the slotted <code class="language-html">&lt;omni-tab&gt;</code> component.
    <div>
    `,play:async o=>{let a=T(o.canvasElement).getByTestId("test-tabs"),e=await i(a.shadowRoot,".tab-bar");await t(e).toBeTruthy();let l=[...e.querySelectorAll("omni-tab-header")],n=l.find(m=>m.hasAttribute("data-active"));await t(n).toBeTruthy(),await t(n).toEqual(l[1]),await r.click(l[0]);let h=(await i(a.shadowRoot,"slot:not([name])")).assignedElements().find(m=>m.hasAttribute("active")),u=(await i(h.shadowRoot,"slot")).assignedElements().find(m=>m.getAttribute("label")==="Label of Tab 1");await t(u).toBeTruthy()}},c={render:()=>b`
    <omni-tabs data-testid="test-tabs">
        <omni-tab header="Tab 1">
            <omni-label label="Label of Tab 1"></omni-label>
        </omni-tab>
        <omni-tab header="Tab 2">
            <omni-label label="Label of Tab 2"></omni-label>
        </omni-tab>
        <omni-tab header="Tab 3" disabled>
            <omni-label label="Label of Tab 3"></omni-label>
        </omni-tab>
    </omni-tabs>

`,frameworkSources:[{framework:"Vue",load:o=>{var a;return p((a=c==null?void 0:c.render)==null?void 0:a.call(c,o),void 0,e=>e.replace(" disabled",' :disabled="true"'))}},{framework:"React",load:()=>`import { OmniTabs, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabs>
    <OmniTab header="Tab 1">
        <OmniLabel label="Label of Tab 1"/>
    </OmniTab>
    <OmniTab header="Tab 2">
        <OmniLabel label="Label of Tab 2"/>
    </OmniTab>
    <OmniTab header="Tab 3" disabled>
        <OmniLabel label="Label of Tab 3"/>
    </OmniTab>
</OmniTabs>;`}],name:"Disabled",description:()=>b`
    <div>
        Set a <code class="language-html">&lt;omni-tab&gt;</code> slotted in the <code class="language-html">&lt;omni-tabs&gt;</code> component to be disabled by setting <code>disabled</code> attribute.
    <div>
    `,args:{},play:async o=>{let a=T(o.canvasElement).getByTestId("test-tabs"),e=O.fn();a.addEventListener("tab-select",e);let n=[...(await i(a.shadowRoot,".tab-bar")).querySelectorAll("omni-tab-header")],s=n.find(h=>h.hasAttribute("data-disabled"));await t(s).toEqual(n[2]),await r.click(s),await r.click(s),await t(e).toBeCalledTimes(0),await r.click(n[1]),await t(e).toBeCalledTimes(1)}};export{d as Active,N as Basic,c as Disabled};
//# sourceMappingURL=Tab.stories.js.map
