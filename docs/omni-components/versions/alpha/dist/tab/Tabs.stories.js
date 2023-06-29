import"../chunks-js/chunk.PKO3EBCH.js";import"../chunks-js/chunk.DRHLE6Y6.js";import"../chunks-js/chunk.6TCSJFKT.js";import"../chunks-js/chunk.VAH5TOPR.js";import{a as x}from"../chunks-js/chunk.JSH3M4FH.js";import{b as h}from"../chunks-js/chunk.XOIHXH3W.js";import{b as t}from"../chunks-js/chunk.FVJIJQ42.js";import{c as T}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as v,m as E,x as u,z as d}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as p}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as i,e as g}from"../chunks-js/chunk.L3RZWW2F.js";import{h as H,m as y,p as L}from"../chunks-js/chunk.BF43NN75.js";y();L();var S=H(x(),1);var X={title:"UI Components/Tabs",component:"omni-tabs",argTypes:{header:{control:"text"}}},A={render:a=>i`
    <omni-tabs data-testid='test-tabs'>
        ${a.header?i`${`\r
`}${p(E("header",a.header))}`:g}
        ${a["[Default Slot]"]?i`${`\r
`}${p(a["[Default Slot]"])}`:g}
    </omni-tabs>
`,frameworkSources:[{framework:"Vue",load:a=>v(A.render(a),void 0,e=>e.replace(" active",' :active="true"').replace(" disabled",' :disabled="true"'))}],name:"Interactive",description:()=>i`
        <p>
        The <code class="language-html">&lt;omni-tabs&gt;</code> component will display content based on the nested <code class="language-html">&lt;omni-tab&gt;</code> component(s). 
        </p>
        <p>
        Tab headers are rendered by either setting the <code>header</code> attribute of the <code class="language-html">&lt;omni-tab&gt;</code> component or via slotted <code class="language-html">&lt;omni-tab-header&gt;</code> component(s) that targets the <code class="language-html">&lt;omni-tabs&gt;</code> header slot. 
        </p>
    `,args:{header:"","[Default Slot]":u`<omni-tab header='Tab 1'>
    <div>Tab 1 Content</div>
</omni-tab>
<omni-tab header='Tab 2'>
    <div>Tab 2 Content</div>
</omni-tab>
<omni-tab header='Tab 3'>
    <div>Tab 3 Content</div>
</omni-tab>`},play:async a=>{let e=T(a.canvasElement).getByTestId("test-tabs"),n=S.fn();e.addEventListener("tab-select",n);let m=await d(e.shadowRoot,".tab-bar");await t(m).toBeTruthy();let o=[...m.querySelectorAll("omni-tab-header")],r=o.find(s=>s.hasAttribute("data-active"));await t(r).toEqual(o[0]),await h.click(o[1]);let c=o.find(s=>s.hasAttribute("data-active"));await t(c).toEqual(o[1]),await t(n).toBeCalledTimes(1);let b=(await d(e.shadowRoot,"slot:not([name])")).assignedElements().find(s=>s.hasAttribute("active"));await t(b.header).toEqual("Tab 2")}},Y={render:a=>i`
    <omni-tabs data-testid='test-tabs'>
        ${a["[Default Slot]"]?i`${`\r
`}${p(a["[Default Slot]"])}`:g}
    </omni-tabs>
`,frameworkSources:[{framework:"React",load:()=>`import { OmniTabs, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabs>
<OmniTab header="Tab 1">
    <OmniLabel label='Label of Tab 1'/>
</OmniTab>
<OmniTab header="Tab 2">
    <OmniLabel label='Label of Tab 2'/>
</OmniTab>
<OmniTab header="Tab 3">
    <OmniLabel label='Label of Tab 3'/>
</OmniTab>
</OmniTabs>;`}],name:"Basic",description:()=>i`
    <div>
        This is the recommended use of the <code class="language-html">&lt;omni-tabs&gt;</code> with nested <code class="language-html">&lt;omni-tab&gt;</code> component(s), headers for each tab is set by setting the <code class="language-js">header</code> attribute of the <code class="language-html">&lt;omni-tab&gt;</code>.
    <div>
    `,args:{"[Default Slot]":u`<omni-tab header='Tab 1'>
            <div>Tab 1 Content</div>
        </omni-tab>
        <omni-tab header='Tab 2'>
            <div>Tab 2 Content</div>
        </omni-tab>
        <omni-tab header="Tab 3">
            <div>Tab 3 Content</div>
        </omni-tab>
        `},play:async a=>{let e=T(a.canvasElement).getByTestId("test-tabs"),n=await d(e.shadowRoot,".tab-bar");await t(n).toBeTruthy();let l=[...n.querySelectorAll("omni-tab-header")];await t(l.length).toBe(3);let r=(await d(e.shadowRoot,"slot:not([name])")).assignedElements();await t(r.length).toBe(3)}},w={render:()=>i`
    <omni-tabs data-testid='test-tabs'>
        <omni-tab header='Tab 1'>
            <omni-label label='Label of Tab 1'></omni-label>
        </omni-tab>
        <omni-tab header="Tab 2" active>
            <omni-label label='Label of Tab 2'></omni-label>
        </omni-tab>
        <omni-tab header="Tab 3">
            <omni-label label='Label of Tab 3'></omni-label>
        </omni-tab>
    </omni-tabs>

`,frameworkSources:[{framework:"Vue",load:a=>{var e;return v((e=w==null?void 0:w.render)==null?void 0:e.call(w,a),void 0,n=>n.replace(" active",' :active="true"'))}},{framework:"React",load:()=>`import { OmniTabs, OmniTab } from "@capitec/omni-components-react/tab";
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
</OmniTabs>;`}],args:{},name:"Active",description:()=>i`
    <div>
        Set which <code class="language-html">&lt;omni-tab&gt;</code> nested in the <code class="language-html">&lt;omni-tabs&gt;</code> should be active by default. By setting the <code>active</code> attribute of one of the nested <code class="language-html">&lt;omni-tab&gt;</code> component.
    <div>
    `,play:async a=>{let e=T(a.canvasElement).getByTestId("test-tabs"),n=await d(e.shadowRoot,".tab-bar");await t(n).toBeTruthy();let l=[...n.querySelectorAll("omni-tab-header")],o=l.find(s=>s.hasAttribute("data-active"));await t(o).toBeTruthy(),await t(o).toEqual(l[1]),await h.click(l[0]);let c=(await d(e.shadowRoot,"slot:not([name])")).assignedElements().find(s=>s.hasAttribute("active")),b=(await d(c.shadowRoot,"slot")).assignedElements().find(s=>s.getAttribute("label")==="Label of Tab 1");await t(b).toBeTruthy()}},f={render:()=>i`
    <omni-tabs data-testid='test-tabs'>
        <omni-tab header='Tab 1'>
            <omni-label label='Label of Tab 1'></omni-label>
        </omni-tab>
        <omni-tab header="Tab 2">
            <omni-label label='Label of Tab 2'></omni-label>
        </omni-tab>
        <omni-tab header="Tab 3" disabled>
            <omni-label label='Label of Tab 3'></omni-label>
        </omni-tab>
    </omni-tabs>

`,frameworkSources:[{framework:"Vue",load:a=>{var e;return v((e=f==null?void 0:f.render)==null?void 0:e.call(f,a),void 0,n=>n.replace(" disabled",' :disabled="true"'))}},{framework:"React",load:()=>`import { OmniTabs, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabs>
    <OmniTab header="Tab 1">
        <OmniLabel label='Label of Tab 1'/>
    </OmniTab>
    <OmniTab header="Tab 2">
        <OmniLabel label='Label of Tab 2'/>
    </OmniTab>
    <OmniTab header="Tab 3" disabled>
        <OmniLabel label='Label of Tab 3'/>
    </OmniTab>
</OmniTabs>;`}],name:"Disabled",description:()=>i`
    <div>
        Set a <code class="language-html">&lt;omni-tab&gt;</code> nested in the <code class="language-html">&lt;omni-tabs&gt;</code> component to be disabled by setting <code>disabled</code> attribute.
    <div>
    `,args:{},play:async a=>{let e=T(a.canvasElement).getByTestId("test-tabs"),n=S.fn();e.addEventListener("tab-select",n);let o=[...(await d(e.shadowRoot,".tab-bar")).querySelectorAll("omni-tab-header")],r=o.find(c=>c.hasAttribute("data-disabled"));await t(r).toEqual(o[2]),await h.click(r),await h.click(r),await t(n).toBeCalledTimes(0),await h.click(o[1]),await t(n).toBeCalledTimes(1)}},_={render:a=>i`
    <omni-tabs data-testid='test-tabs'>
        ${a["[Default Slot]"]?i`${`\r
`}${p(a["[Default Slot]"])}`:g}
    </omni-tabs>
`,frameworkSources:[{framework:"React",load:()=>`import { OmniTabs, OmniTab, OmniTabHeader } from "@capitec/omni-components-react/tab";
import { OmniIcon } from "@capitec/omni-components-react/icon";

const App = () =>
<OmniTabs>
 <OmniTabHeader slot="header" for="up">
  <OmniIcon size="default">
   <svg xmlns="http://www.w3.org/2000/svg" fill="orange" width="20px" height="20px"><path d="M5.47 8.47a.75.75 0 0 0 1.06 1.06l4.72-4.72V21c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .75-.75V4.81l4.72 4.72a.75.75 0 0 0 .976.073l.084-.073a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.06 0Z"/></svg>
  </OmniIcon>
 </OmniTabHeader>
 <OmniTabHeader slot="header" for="down">
  <OmniIcon size="default">
   <svg xmlns="http://www.w3.org/2000/svg"  fill="green" width="20px" height="20px"><path d="M18.53 15.53a.75.75 0 0 0-1.06-1.06l-4.72 4.72V3a.75.75 0 0 0-.648-.743L12 2.25a.75.75 0 0 0-.75.75v16.19l-4.72-4.72a.75.75 0 0 0-.976-.073l-.084.073a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0Z"/></svg>
  </OmniIcon>
 </OmniTabHeader>
 <OmniTabHeader slot="header" for="left">
  <OmniIcon size="default">
   <svg xmlns="http://www.w3.org/2000/svg" fill="purple" width="20px" height="20px"><path d="M8.47 5.47a.75.75 0 0 1 1.06 1.06l-4.72 4.72H21a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.75.75H4.81l4.72 4.72a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06Z"/></svg>
  </OmniIcon>
 </OmniTabHeader>
 <OmniTabHeader slot="header" for="right">
  <OmniIcon size="default">
   <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="20px" height="20px"><path d="M15.53 5.47a.75.75 0 0 0-1.06 1.06l4.72 4.72H3a.75.75 0 0 0-.743.648L2.25 12c0 .414.336.75.75.75h16.19l-4.72 4.72a.75.75 0 0 0-.073.976l.073.084a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06Z"/></svg>
  </OmniIcon>
 </OmniTabHeader>
 <OmniTab id="up">
 <div>Up</div>
</OmniTab>
<OmniTab id="down">
 <div>Down</div>
</OmniTab>
<OmniTab id="left">
 <div>Left</div>
</OmniTab>
<OmniTab id="right">
 <div>Right</div>
</OmniTab>
</OmniTabs>;`}],name:"Advanced",args:{"[Default Slot]":u`
        <omni-tab-header slot="header" for="up">
            <omni-icon size="default">
            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" width="20px" height="20px"><path d="M5.47 8.47a.75.75 0 0 0 1.06 1.06l4.72-4.72V21c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .75-.75V4.81l4.72 4.72a.75.75 0 0 0 .976.073l.084-.073a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.06 0Z"/></svg>
            </omni-icon>
        </omni-tab-header>
        <omni-tab-header slot="header" for="down">
            <omni-icon size="default">
            <svg xmlns="http://www.w3.org/2000/svg"  fill="green" width="20px" height="20px"><path d="M18.53 15.53a.75.75 0 0 0-1.06-1.06l-4.72 4.72V3a.75.75 0 0 0-.648-.743L12 2.25a.75.75 0 0 0-.75.75v16.19l-4.72-4.72a.75.75 0 0 0-.976-.073l-.084.073a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0Z"/></svg>
            </omni-icon>
        </omni-tab-header>
        <omni-tab-header slot="header" for="left">
            <omni-icon size="default">
            <svg xmlns="http://www.w3.org/2000/svg" fill="purple" width="20px" height="20px"><path d="M8.47 5.47a.75.75 0 0 1 1.06 1.06l-4.72 4.72H21a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.75.75H4.81l4.72 4.72a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06Z"/></svg>
            </omni-icon>
        </omni-tab-header>
        <omni-tab-header slot="header" for="right">
            <omni-icon size="default">
            <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="20px" height="20px"><path d="M15.53 5.47a.75.75 0 0 0-1.06 1.06l4.72 4.72H3a.75.75 0 0 0-.743.648L2.25 12c0 .414.336.75.75.75h16.19l-4.72 4.72a.75.75 0 0 0-.073.976l.073.084a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06Z"/></svg>
            </omni-icon>
        </omni-tab-header>
        <omni-tab id="up">
            <div>Up</div>
        </omni-tab>
        <omni-tab id="down">
            <div>Down</div>
        </omni-tab>
        <omni-tab id="left">
            <div>Left</div>
        </omni-tab>
        <omni-tab id="right">
            <div>Right</div>
        </omni-tab>
        `},description:()=>i`
    <div>
        For slotting custom content into the header use the <code class="language-html">&lt;omni-tab-header&gt;</code> component that targets the header slot of the <code class="language-html">&lt;omni-tabs&gt;</code> component and ensure you have a <code class="language-html">&lt;omni-tab&gt;</code> component which has an <code>id</code> attribute that matches the <code class="language-html">&lt;omni-tab-header&gt;</code> <code>for</code> attribute to display slotted content.
    <div>
    `,play:async a=>{let e=T(a.canvasElement).getByTestId("test-tabs"),n=await d(e.shadowRoot,".tab-bar");await t(n).toBeTruthy();let m=n.querySelector('slot[name="header"]');await t(m).toBeTruthy();let l=m==null?void 0:m.assignedElements().filter(b=>b.tagName.toLowerCase()==="omni-tab-header");await t(l).toBeTruthy();let o=l==null?void 0:l.find(b=>b.hasAttribute("data-active"));await t(o).toBeTruthy();let r=o==null?void 0:o.querySelector("omni-icon");await t(r).toBeTruthy();let c=o==null?void 0:o.querySelector("svg");await t(c).toBeTruthy(),await h.click(l[1]);let O=l.find(b=>b.hasAttribute("data-active"));await t(O).toBeTruthy()}};export{w as Active,_ as Advanced,Y as Basic,f as Disabled,A as Interactive,X as default};
//# sourceMappingURL=Tabs.stories.js.map
