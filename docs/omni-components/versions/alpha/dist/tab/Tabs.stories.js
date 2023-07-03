import"../chunks-js/chunk.PKO3EBCH.js";import"../chunks-js/chunk.DRHLE6Y6.js";import"../chunks-js/chunk.7AX47Z4X.js";import"../chunks-js/chunk.VAH5TOPR.js";import{a as y}from"../chunks-js/chunk.JSH3M4FH.js";import{b as p}from"../chunks-js/chunk.XOIHXH3W.js";import{b as e}from"../chunks-js/chunk.FVJIJQ42.js";import{c as h}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as T,m as u,x as g,z as d}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as i}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,e as s}from"../chunks-js/chunk.L3RZWW2F.js";import{h as E,m as c,p as b}from"../chunks-js/chunk.BF43NN75.js";c();b();var f=E(y(),1);var A={render:t=>r`
    <omni-tabs data-testid="test-tabs">
        ${t.header?r`${`\r
`}${i(u("header",t.header))}`:s}
        ${t["[Default Slot]"]?r`${`\r
`}${i(t["[Default Slot]"])}`:s}
    </omni-tabs>
`,frameworkSources:[{framework:"Vue",load:t=>T(A.render(t),void 0,a=>a.replace(" active",' :active="true"').replace(" disabled",' :disabled="true"'))}],name:"Interactive",description:()=>r`
        <p>
        The <code class="language-html">&lt;omni-tabs&gt;</code> component will display content based on the nested <code class="language-html">&lt;omni-tab&gt;</code> component(s). 
        </p>
        <p>
        Tab headers are rendered by either setting the <code>header</code> attribute of the <code class="language-html">&lt;omni-tab&gt;</code> component or via slotted <code class="language-html">&lt;omni-tab-header&gt;</code> component(s) that targets the <code class="language-html">&lt;omni-tabs&gt;</code> header slot. 
        </p>
    `,args:{header:"","[Default Slot]":g`<omni-tab header="Tab 1">
    <div>Tab 1 Content</div>
</omni-tab>
<omni-tab header="Tab 2">
    <div>Tab 2 Content</div>
</omni-tab>
<omni-tab header="Tab 3">
    <div>Tab 3 Content</div>
</omni-tab>`},play:async t=>{let a=h(t.canvasElement).getByTestId("test-tabs"),l=f.fn();a.addEventListener("tab-select",l);let m=await d(a.shadowRoot,".tab-bar");await e(m).toBeTruthy();let o=[...m.querySelectorAll("omni-tab-header")],v=o.find(n=>n.hasAttribute("data-active"));await e(v).toEqual(o[0]),await p.click(o[1]);let w=o.find(n=>n.hasAttribute("data-active"));await e(w).toEqual(o[1]),await e(l).toBeCalledTimes(1);let S=(await d(a.shadowRoot,"slot:not([name])")).assignedElements().find(n=>n.hasAttribute("active"));await e(S.header).toEqual("Tab 2")}};export{A as Interactive};
//# sourceMappingURL=Tabs.stories.js.map
