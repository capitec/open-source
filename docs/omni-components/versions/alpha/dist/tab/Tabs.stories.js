import"../chunks-js/chunk.QBZFTDUD.js";import"../chunks-js/chunk.NDEMMUG2.js";import"../chunks-js/chunk.E4G6RS5W.js";import"../chunks-js/chunk.VAH5TOPR.js";import{a as B}from"../chunks-js/chunk.JSH3M4FH.js";import{b as v}from"../chunks-js/chunk.XOIHXH3W.js";import{b as t}from"../chunks-js/chunk.FVJIJQ42.js";import{c as b}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as w,x as f,z as m}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as g}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,e as p}from"../chunks-js/chunk.L3RZWW2F.js";import{h as x,m as y,p as L}from"../chunks-js/chunk.BF43NN75.js";y();L();var O=x(B(),1);var W={title:"UI Components/Tabs",component:"omni-tabs"},A={render:a=>r`
    <omni-tabs data-testid='test-tabs'>
        ${a["[Default Slot]"]?r`${`\r
`}${g(a["[Default Slot]"])}`:p}
    </omni-tabs>
`,frameworkSources:[{framework:"Vue",load:a=>w(A.render(a),void 0,e=>e.replace(" active",' :active="true"').replace(" disabled",' :disabled="true"'))}],name:"Interactive",args:{"[Default Slot]":f`<omni-tab header='Tab 1'>
    <div>Tab 1 Content</div>
</omni-tab>
<omni-tab header='Tab 2'>
    <div>Tab 2 Content</div>
</omni-tab>
<omni-tab header='Tab 3'>
    <div>Tab 3 Content</div>
</omni-tab>`},play:async a=>{let e=b(a.canvasElement).getByTestId("test-tabs"),n=O.fn();e.addEventListener("click",n);let s=await m(e.shadowRoot,".tab-bar");await t(s).toBeTruthy();let i=s.querySelectorAll("omni-tab-header");await t(i).toBeTruthy();let o=[...i],l=o.find(d=>d.hasAttribute("data-active"));await t(l).toBeTruthy,await v.click(o[1]);let u=o.find(d=>d.hasAttribute("data-active"));await t(u).toBeTruthy}},X={render:a=>r`
    <omni-tabs data-testid='test-tabs'>
        ${a["[Default Slot]"]?r`${`\r
`}${g(a["[Default Slot]"])}`:p}
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
</OmniTabs>;`}],name:"Basic",description:()=>r`
    <div>
        This is the recommended use of the <code class="language-html">&lt;omni-tabs&gt;</code> component with the nested <code class="language-html">&lt;omni-tab&gt;</code> component(s), this will result in a dynamically generated headers for each tab based on the value of the <code class="language-js">header</code> attribute of the <code class="language-html">&lt;omni-tab&gt;</code>.
    <div>
    `,args:{"[Default Slot]":f`<omni-tab header='Tab 1'>
            <div>Tab 1 Content</div>
        </omni-tab>
        <omni-tab header='Tab 2'>
            <div>Tab 2 Content</div>
        </omni-tab>
        <omni-tab header="Tab 3">
            <div>Tab 3 Content</div>
        </omni-tab>
        `},play:async a=>{let e=b(a.canvasElement).getByTestId("test-tabs"),n=await m(e.shadowRoot,".tab-bar");await t(n).toBeTruthy();let s=n.querySelectorAll("omni-tab-header");await t(s).toBeTruthy();let i=[...s];await t(i.length).toBe(3);let o=i.find(l=>l.hasAttribute("data-active"));await t(o).toBeTruthy}},h={render:()=>r`
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

`,frameworkSources:[{framework:"Vue",load:a=>{var e;return w((e=h==null?void 0:h.render)==null?void 0:e.call(h,a),void 0,n=>n.replace(" active",' :active="true"'))}},{framework:"React",load:()=>`import { OmniTabs, OmniTab } from "@capitec/omni-components-react/tab";
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
</OmniTabs>;`}],args:{},name:"Active",description:()=>r`
    <div>
        Set which <code class="language-html">&lt;omni-tab&gt;</code> in the <code class="language-html">&lt;omni-tabs&gt;</code> should be selected. This is based on setting the <code class="language-js">active</code> attribute.
    <div>
    `,play:async a=>{let e=b(a.canvasElement).getByTestId("test-tabs"),n=await m(e.shadowRoot,".tab-bar");await t(n).toBeTruthy();let s=n.querySelectorAll("omni-tab-header");await t(s).toBeTruthy();let i=[...s],o=i.find(l=>l.hasAttribute("data-active"));await t(o).toBeTruthy,await t(o).toEqual(i[1])}},T={render:()=>r`
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

`,frameworkSources:[{framework:"Vue",load:a=>{var e;return w((e=T==null?void 0:T.render)==null?void 0:e.call(T,a),void 0,n=>n.replace(" disabled",' :disabled="true"'))}},{framework:"React",load:()=>`import { OmniTabs, OmniTab } from "@capitec/omni-components-react/tab";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniTabs>
    <OmniTab header="Tab 1">
        <OmniLabel label='Label of Tab 1'/>
    </OmniTab>
    <OmniTab header="Tab 2" disabled>
        <OmniLabel label='Label of Tab 2'/>
    </OmniTab>
    <OmniTab header="Tab 3" disabled>
        <OmniLabel label='Label of Tab 3'/>
    </OmniTab>
</OmniTabs>;`}],name:"Disabled",description:()=>r`
    <div>
        Set which <code class="language-html">&lt;omni-tab&gt;</code> in the <code class="language-html">&lt;omni-tabs&gt;</code> component should be disabled. This is based on setting the <code class="language-js">disabled</code> attribute.
    <div>
    `,args:{},play:async a=>{let e=b(a.canvasElement).getByTestId("test-tabs"),n=await m(e.shadowRoot,".tab-bar");await t(n).toBeTruthy();let s=n.querySelectorAll("omni-tab-header");await t(s).toBeTruthy();let i=[...s],o=i.find(l=>l.hasAttribute("data-disabled"));await t(o).toBeTruthy,await t(o).toEqual(i[2])}},Y={render:a=>r`
    <omni-tabs data-testid='test-tabs'>
        ${a["[Default Slot]"]?r`${`\r
`}${g(a["[Default Slot]"])}`:p}
    </omni-tabs>
`,frameworkSources:[{framework:"React",load:()=>`import { OmniTabs, OmniTab } from "@capitec/omni-components-react/tab";
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
</OmniTabs>;`}],name:"Advanced",args:{"[Default Slot]":f`
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
        `},description:()=>r`
    <div>
        For slotting custom content into the header use the <code class="language-html">&lt;omni-tab-header&gt;</code> component in the <code class="language-html">&lt;omni-tabs&gt;</code> component.
    <div>
    `,play:async a=>{let e=b(a.canvasElement).getByTestId("test-tabs"),n=O.fn();e.addEventListener("click",n);let s=await m(e.shadowRoot,".tab-bar");await t(s).toBeTruthy();let i=s.querySelector('slot[name="header"]');await t(i).toBeTruthy();let o=i==null?void 0:i.assignedElements().filter(c=>c.tagName.toLowerCase()==="omni-tab-header");await t(o).toBeTruthy();let l=o==null?void 0:o.find(c=>c.hasAttribute("data-active"));await t(l).toBeTruthy();let u=l==null?void 0:l.querySelector("omni-icon");await t(u).toBeTruthy();let d=l==null?void 0:l.querySelector("svg");await t(d).toBeTruthy(),await v.click(o[1]);let S=o.find(c=>c.hasAttribute("data-active"));await t(S).toBeTruthy}};export{h as Active,Y as Advanced,X as Basic,T as Disabled,A as Interactive,W as default};
//# sourceMappingURL=Tabs.stories.js.map
