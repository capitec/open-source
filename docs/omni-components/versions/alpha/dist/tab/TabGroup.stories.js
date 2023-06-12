import"../chunks-js/chunk.HFQ75O5I.js";import"../chunks-js/chunk.3NNY34ES.js";import"../chunks-js/chunk.VAH5TOPR.js";import{c as a}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{x as l}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as o}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import{a as m}from"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as e}from"../chunks-js/chunk.L3RZWW2F.js";import{m as b,p as i}from"../chunks-js/chunk.BF43NN75.js";b();i();var G={title:"UI Components/Tab Group",component:"omni-tab-group"},L={render:t=>e`
    <div style="height: 400px; width: 400px;">
    <omni-tab-group
        data-testid='test-tab-group'
        selected-index="${m(t.selectedIndex)}"
        >
        ${o(t["[Default Slot]"])}
    </omni-tab-group></div>
`,name:"Interactive",args:{selectedIndex:void 0,"[Default Slot]":l`<omni-tab data-omni-tab-label="Tab-1">
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
</omni-tab>`},play:async t=>{let n=a(t.canvasElement).getByTestId("test-tab")}},j={render:t=>e`

    <omni-tab-group
        data-testid='test-tab-group'>
        <omni-tab             
        data-omni-tab-label="Tab 1">
        </omni-tab>
        <omni-tab             
        data-omni-tab-label="Tab 2">
        </omni-tab>
        <omni-tab             
        data-omni-tab-label="Tab 3">
        </omni-tab>
    </omni-tab-group>

`,name:"Active",description:"Set a text value to display within the omni-tab.",args:{selectedIndex:0},play:async t=>{let n=a(t.canvasElement).getByTestId("test-tab")}},H={render:t=>e`
    <omni-tab-group
        data-testid='test-tab-group'>
        ${o(t["[Default Slot]"])}

    </omni-tab-group>
`,name:"Tabs",description:"Render a omni-tab-group component with nested omni-tab components",args:{"[Default Slot]":l`<omni-tab 
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
    </omni-tab>`},play:async t=>{let n=a(t.canvasElement).getByTestId("test-tab")}};export{j as Active,L as Interactive,H as Tabs,G as default};
//# sourceMappingURL=TabGroup.stories.js.map
