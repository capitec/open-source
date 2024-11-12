import"../chunks-js/chunk.PQSAI6GU.js";import"../chunks-js/chunk.MGP4WY7D.js";import"../chunks-js/chunk.CHB6HBKV.js";import{a as f,b as c,c as d,d as h,e as x,f as p,g as u,h as b,i as $}from"../chunks-js/chunk.AFWAFKII.js";import"../chunks-js/chunk.B6J23Y56.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as s,m as l}from"../chunks-js/chunk.NXMGYN5J.js";import"../chunks-js/chunk.HWW7Q3DW.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.FPKTYYRH.js";import"../chunks-js/chunk.ROSXE42L.js";import"../chunks-js/chunk.WLLX574P.js";import"../chunks-js/chunk.B24VSKLO.js";import{a as o}from"../chunks-js/chunk.DJIVMBLF.js";import"../chunks-js/chunk.JOXUPYMK.js";import{a as i}from"../chunks-js/chunk.3F3IIFA7.js";import{a as t}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.263MQTZQ.js";import"../chunks-js/chunk.O3UNTVN7.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as r,g as a}from"../chunks-js/chunk.63YMDT6M.js";import{m as n,p as m}from"../chunks-js/chunk.BF43NN75.js";n();m();var A={render:e=>r`
        <omni-search-field
            data-testid="test-search-field"
            label="${t(e.label)}"
            value="${e.value}"
            max-length=${i(e.maxLength)}
            hint="${t(e.hint)}"
            error="${t(e.error)}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}">${e.prefix?r`${`\r
`}${o(l("prefix",e.prefix))}`:a}
            ${e.clear?r`${`\r
`}${o(l("clear",e.clear))}`:a}${e.suffix?r`${`\r
`}${o(l("suffix",e.suffix))}`:a}${e.prefix||e.suffix||e.clear?`\r
`:a}</omni-search-field>
    `,frameworkSources:[{framework:"Vue",load:e=>s(A.render(e),void 0,S=>S.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",maxLength:void 0}},T={render:e=>r`
        <omni-search-field
            data-testid="test-search-field"
            label="${t(e.label)}"
            value="${e.value}"
            max-length=${i(e.maxLength)}>
        </omni-search-field>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniSearchField } from "@capitec/omni-components-react/search-field";

const App = () => <OmniSearchField${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}${e.maxLength?` max-length='${e.maxLength}'`:""}/>;`}],name:"Max Length",description:"Limit the character input length based on the value provided.",args:{label:"Max Length",maxLength:5}},N=f("omni-search-field"),R=c("omni-search-field"),j=d("omni-search-field"),q=h("omni-search-field"),z=u("omni-search-field","Clear my name"),G=b("omni-search-field","Clear my name"),J=x("omni-search-field"),K=p("omni-search-field"),Q=$("omni-search-field");export{z as Clearable,G as Custom_Clear_Slot,Q as Disabled,j as Error_Label,R as Hint,A as Interactive,N as Label,T as Max_Length,J as Prefix,K as Suffix,q as Value};
//# sourceMappingURL=SearchField.stories.js.map
