import"../chunks-js/chunk.V7QVXXID.js";import"../chunks-js/chunk.VB3ZKFMN.js";import{a as i}from"../chunks-js/chunk.XCXCHO25.js";import{c as m}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{m as s}from"../chunks-js/chunk.BQ6JZBYB.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.KSLF5GY7.js";import"../chunks-js/chunk.XQ6LOMNM.js";import"../chunks-js/chunk.DVHQDKY6.js";import{a as o}from"../chunks-js/chunk.SUFNDWVH.js";import"../chunks-js/chunk.QFUUHCSV.js";import"../chunks-js/chunk.6HAYHFHP.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.RWAXFZOX.js";import"../chunks-js/chunk.QA3WYCV3.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as e,e as r}from"../chunks-js/chunk.L3RZWW2F.js";import{m as n,p as a}from"../chunks-js/chunk.BF43NN75.js";n();a();var A={title:"UI Components/Toast",component:"omni-toast"},D={render:t=>e`
        <omni-toast
            data-testid="test-toast"
            detail="${i(t.detail)}"
            header="${i(t.header)}"
            type="${i(t.type)}"
            ?closeable="${t.closeable}">
            ${t.prefix?e`${o(s("prefix",t.prefix))}`:r}
            ${o(t["[Default Slot]"])}
            ${t.close?e`${o(s("close",t.close))}`:r}
        </omni-toast>
    `,name:"Interactive",args:{closeable:!1,detail:"The toast description",header:"The toast message",type:"success",prefix:void 0,"[Default Slot]":void 0,close:void 0},play:async t=>{m(t.canvasElement).getByTestId("test-toast").focus()}};export{D as Interactive,A as default};
//# sourceMappingURL=Toast.stories.js.map
