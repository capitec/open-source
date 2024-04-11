import"../chunks-js/chunk.6YZVJEDK.js";import"../chunks-js/chunk.FYB3SILJ.js";import"../chunks-js/chunk.KGCS7GKM.js";import{a as f,b as c,c as m,d,e as p,f as x,g as b,h as u,i as h}from"../chunks-js/chunk.3UYRIGUL.js";import"../chunks-js/chunk.553RDMBX.js";import"../chunks-js/chunk.A6RJOB4D.js";import"../chunks-js/chunk.34WDYOTS.js";import{E as n,m as t}from"../chunks-js/chunk.LIHXMBR3.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.YISFJ54N.js";import"../chunks-js/chunk.TQF2Y64M.js";import"../chunks-js/chunk.FCGABMD4.js";import"../chunks-js/chunk.D5GPI5IO.js";import"../chunks-js/chunk.VXWK2PFN.js";import{a}from"../chunks-js/chunk.I4G3FJEU.js";import"../chunks-js/chunk.D57IHIAB.js";import"../chunks-js/chunk.DUTPH62F.js";import{a as l}from"../chunks-js/chunk.C3AR2WR4.js";import"../chunks-js/chunk.ZJGON3BB.js";import"../chunks-js/chunk.P6J7VJ5B.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as r,g as o}from"../chunks-js/chunk.UDCULUBW.js";import{m as i,p as s}from"../chunks-js/chunk.BF43NN75.js";i();s();var $={render:e=>r`
        <omni-search-field
            data-testid="test-search-field"
            label="${l(e.label)}"
            value="${e.value}"
            hint="${l(e.hint)}"
            error="${l(e.error)}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}">${e.prefix?r`${`\r
`}${a(t("prefix",e.prefix))}`:o}
            ${e.clear?r`${`\r
`}${a(t("clear",e.clear))}`:o}${e.suffix?r`${`\r
`}${a(t("suffix",e.suffix))}`:o}${e.prefix||e.suffix||e.clear?`\r
`:o}</omni-search-field>
    `,frameworkSources:[{framework:"Vue",load:e=>n($.render(e),void 0,S=>S.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""}},T=f("omni-search-field"),M=c("omni-search-field"),N=m("omni-search-field"),j=d("omni-search-field"),q=b("omni-search-field","Clear my name"),z=u("omni-search-field","Clear my name"),G=p("omni-search-field"),J=x("omni-search-field"),K=h("omni-search-field");export{q as Clearable,z as Custom_Clear_Slot,K as Disabled,N as Error_Label,M as Hint,$ as Interactive,T as Label,G as Prefix,J as Suffix,j as Value};
//# sourceMappingURL=SearchField.stories.js.map
