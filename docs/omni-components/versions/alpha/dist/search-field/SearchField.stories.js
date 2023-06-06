import"../chunks-js/chunk.SKCT6BMN.js";import"../chunks-js/chunk.L6QSAJCX.js";import{a as y,b as B,c as $,d as C,e as A,f as v,g as E,h as I,i as L}from"../chunks-js/chunk.EWZHBVOA.js";import"../chunks-js/chunk.QHXD4ILF.js";import"../chunks-js/chunk.55232CD4.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{a as H}from"../chunks-js/chunk.IRJIQSYL.js";import{a as x,b}from"../chunks-js/chunk.MHLMY33S.js";import{a as o}from"../chunks-js/chunk.XCXCHO25.js";import{b as c,c as S}from"../chunks-js/chunk.N6OKW4B2.js";import{d as m}from"../chunks-js/chunk.W54IKPJD.js";import{E as F,m as l}from"../chunks-js/chunk.VX4HTDBM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.KSLF5GY7.js";import"../chunks-js/chunk.XQ6LOMNM.js";import"../chunks-js/chunk.DVHQDKY6.js";import{a as i}from"../chunks-js/chunk.SUFNDWVH.js";import"../chunks-js/chunk.QFUUHCSV.js";import"../chunks-js/chunk.6HAYHFHP.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.RWAXFZOX.js";import"../chunks-js/chunk.QA3WYCV3.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,e as a}from"../chunks-js/chunk.L3RZWW2F.js";import{h as g,m as h,p as u}from"../chunks-js/chunk.BF43NN75.js";h();u();var d=g(H(),1);var re={title:"UI Components/Search Field",component:"omni-search-field"},T={render:e=>t`
        <omni-search-field
            data-testid="test-search-field"
            label="${o(e.label)}"
            value="${e.value}"
            hint="${o(e.hint)}"
            error="${o(e.error)}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}">${e.prefix?t`${`\r
`}${i(l("prefix",e.prefix))}`:a}
            ${e.clear?t`${`\r
`}${i(l("clear",e.clear))}`:a}${e.suffix?t`${`\r
`}${i(l("suffix",e.suffix))}`:a}${e.prefix||e.suffix||e.clear?`\r
`:a}</omni-search-field>
    `,frameworkSources:[{framework:"Vue",load:e=>F(T.render(e),void 0,r=>r.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var p;let r=S(e.canvasElement).getByTestId("test-search-field"),f=d.fn(),w=d.fn();r.addEventListener("input",f),r.addEventListener("click",w);let n=(p=r.shadowRoot)==null?void 0:p.getElementById("inputField");x(n);let s="Batman";await b.type(n,s),await c(()=>m(n).toHaveValue(s),{timeout:3e3}),await c(()=>m(f).toBeCalledTimes(s.length),{timeout:3e3})}},te=y("omni-search-field"),ae=B("omni-search-field"),ie=$("omni-search-field"),oe=C("omni-search-field"),le=E("omni-search-field","Clear my name"),ne=I("omni-search-field","Clear my name"),se=A("omni-search-field"),ce=v("omni-search-field"),me=L("omni-search-field");export{le as Clearable,ne as Custom_Clear_Slot,me as Disabled,ie as ErrorLabel,ae as Hint,T as Interactive,te as Label,se as Prefix,ce as Suffix,oe as Value,re as default};
//# sourceMappingURL=SearchField.stories.js.map
