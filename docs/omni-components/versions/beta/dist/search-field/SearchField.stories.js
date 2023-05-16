import"../chunks-js/chunk.7L7ETYZG.js";import"../chunks-js/chunk.SP23GGNY.js";import{a as y,b,c as $,d as B,e as v,f as A,g as C,h as E}from"../chunks-js/chunk.SJHRYVDL.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as w}from"../chunks-js/chunk.IRJIQSYL.js";import{a as i}from"../chunks-js/chunk.G3QHRCKP.js";import{a as u,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{l as a}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as o}from"../chunks-js/chunk.6QCQBNRL.js";import{b as c,c as x}from"../chunks-js/chunk.N6OKW4B2.js";import{d as f}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,d as t}from"../chunks-js/chunk.F6MIXR4E.js";import{h as L,m as h,p as S}from"../chunks-js/chunk.BF43NN75.js";h();S();var m=L(w(),1);var Z={title:"UI Components/Search Field",component:"omni-search-field"},_={render:e=>r`
        <omni-search-field
            data-testid="test-search-field"
            label="${o(e.label)}"
            value="${e.value}"
            hint="${o(e.hint)}"
            error="${o(e.error)}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}">${e.prefix?r`${`\r
`}${i(a("prefix",e.prefix))}`:t}
            ${e.clear?r`${`\r
`}${i(a("clear",e.clear))}`:t}${e.suffix?r`${`\r
`}${i(a("suffix",e.suffix))}`:t}${e.prefix||e.suffix||e.clear?`\r
`:t}</omni-search-field>
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var p;let l=x(e.canvasElement).getByTestId("test-search-field"),d=m.fn(),I=m.fn();l.addEventListener("input",d),l.addEventListener("click",I);let n=(p=l.shadowRoot)==null?void 0:p.getElementById("inputField");u(n);let s="Batman";await F.type(n,s),await c(()=>f(n).toHaveValue(s),{timeout:3e3}),await c(()=>f(d).toBeCalledTimes(s.length),{timeout:3e3})}},ee=y("omni-search-field"),re=b("omni-search-field"),te=$("omni-search-field"),ie=B("omni-search-field"),oe=C("omni-search-field","Clear my name"),ae=v("omni-search-field"),le=A("omni-search-field"),ne=E("omni-search-field");export{oe as Clear,ne as Disabled,te as ErrorLabel,re as Hint,_ as Interactive,ee as Label,ae as Prefix,le as Suffix,ie as Value,Z as default};
//# sourceMappingURL=SearchField.stories.js.map
