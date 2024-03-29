import"../chunks-js/chunk.PKO3EBCH.js";import"../chunks-js/chunk.4VT63HPY.js";import"../chunks-js/chunk.FN3REF6I.js";import"../chunks-js/chunk.VAH5TOPR.js";import{a as E}from"../chunks-js/chunk.JSH3M4FH.js";import{b as h}from"../chunks-js/chunk.XOIHXH3W.js";import{b as e}from"../chunks-js/chunk.FVJIJQ42.js";import{c as p}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as f,m as u,x as T,z as m}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as s}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,e as i}from"../chunks-js/chunk.L3RZWW2F.js";import{h as y,m as c,p as b}from"../chunks-js/chunk.BF43NN75.js";c();b();var g=y(E(),1);var A={render:t=>n`
    <omni-tab-group data-testid="test-tab-group">
        ${t.header?n`${`\r
`}${s(u("header",t.header))}`:i}
        ${t["[Default Slot]"]?n`${`\r
`}${s(t["[Default Slot]"])}`:i}
    </omni-tab-group>
`,frameworkSources:[{framework:"Vue",load:t=>f(A.render(t),void 0,a=>a.replace(" active",' :active="true"').replace(" disabled",' :disabled="true"'))}],name:"Interactive",description:()=>n`
        <p>
        The <code class="language-html">&lt;omni-tab-group&gt;</code> component will display content based on the slotted <code class="language-html">&lt;omni-tab&gt;</code> component(s). 
        </p>
        <p>
        For an advanced use case check the <omni-hyperlink href='./components/tab-header'><code class="language-html">&lt;omni-tab-header&gt;</code></omni-hyperlink> example.
        </p>
    `,args:{header:"","[Default Slot]":T`<omni-tab header="Tab 1">
    <div>Tab 1 Content</div>
</omni-tab>
<omni-tab header="Tab 2">
    <div>Tab 2 Content</div>
</omni-tab>
<omni-tab header="Tab 3">
    <div>Tab 3 Content</div>
</omni-tab>`},play:async t=>{let a=p(t.canvasElement).getByTestId("test-tab-group"),d=g.fn();a.addEventListener("tab-select",d);let l=await m(a.shadowRoot,".tab-bar");await e(l).toBeTruthy();let o=[...l.querySelectorAll("omni-tab-header")],v=o.find(r=>r.hasAttribute("data-active"));await e(v).toEqual(o[0]),await h.click(o[1]);let w=o.find(r=>r.hasAttribute("data-active"));await e(w).toEqual(o[1]),await e(d).toBeCalledTimes(1);let S=(await m(a.shadowRoot,"slot:not([name])")).assignedElements().find(r=>r.hasAttribute("active"));await e(S.header).toEqual("Tab 2")}};export{A as Interactive};
//# sourceMappingURL=TabGroup.stories.js.map
