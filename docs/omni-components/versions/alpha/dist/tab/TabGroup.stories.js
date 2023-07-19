import"../chunks-js/chunk.QNDZZT7F.js";import"../chunks-js/chunk.XLJEC6IH.js";import"../chunks-js/chunk.O4APVQFJ.js";import"../chunks-js/chunk.MW4VXBNP.js";import{a as E}from"../chunks-js/chunk.AFJ2VLBG.js";import{b as f}from"../chunks-js/chunk.IEAYXHP4.js";import{c as T}from"../chunks-js/chunk.WXU7FCN5.js";import{e}from"../chunks-js/chunk.F2C2BPNZ.js";import{E as u,m as p,x as h,z as m}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as s}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,e as i}from"../chunks-js/chunk.L3RZWW2F.js";import{h as y,m as c,p as b}from"../chunks-js/chunk.BF43NN75.js";c();b();var g=y(E(),1);var A={render:t=>n`
    <omni-tab-group data-testid="test-tab-group">
        ${t.header?n`${`\r
`}${s(p("header",t.header))}`:i}
        ${t["[Default Slot]"]?n`${`\r
`}${s(t["[Default Slot]"])}`:i}
    </omni-tab-group>
`,frameworkSources:[{framework:"Vue",load:t=>u(A.render(t),void 0,a=>a.replace(" active",' :active="true"').replace(" disabled",' :disabled="true"'))}],name:"Interactive",description:()=>n`
        <p>
        The <code class="language-html">&lt;omni-tab-group&gt;</code> component will display content based on the slotted <code class="language-html">&lt;omni-tab&gt;</code> component(s). 
        </p>
        <p>
        For an advanced use case check the <omni-hyperlink href='./components/tab-header'><code class="language-html">&lt;omni-tab-header&gt;</code></omni-hyperlink> example.
        </p>
    `,args:{header:"","[Default Slot]":h`<omni-tab header="Tab 1">
    <div>Tab 1 Content</div>
</omni-tab>
<omni-tab header="Tab 2">
    <div>Tab 2 Content</div>
</omni-tab>
<omni-tab header="Tab 3">
    <div>Tab 3 Content</div>
</omni-tab>`},play:async t=>{let a=T(t.canvasElement).getByTestId("test-tab-group"),d=g.fn();a.addEventListener("tab-select",d);let l=await m(a.shadowRoot,".tab-bar");await e(l).toBeTruthy();let o=[...l.querySelectorAll("omni-tab-header")],v=o.find(r=>r.hasAttribute("data-active"));await e(v).toEqual(o[0]),await f.click(o[1]);let w=o.find(r=>r.hasAttribute("data-active"));await e(w).toEqual(o[1]),await e(d).toBeCalledTimes(1);let S=(await m(a.shadowRoot,"slot:not([name])")).assignedElements().find(r=>r.hasAttribute("active"));await e(S.header).toEqual("Tab 2")}};export{A as Interactive};
//# sourceMappingURL=TabGroup.stories.js.map
