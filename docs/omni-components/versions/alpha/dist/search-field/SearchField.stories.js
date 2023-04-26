import"../chunks-js/chunk.7L7ETYZG.js";import"../chunks-js/chunk.SP23GGNY.js";import{a as y,b,c as B,d as $,e as v,f as A,g as C,h as E}from"../chunks-js/chunk.YD3W5R6Q.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as g}from"../chunks-js/chunk.IRJIQSYL.js";import{a as s}from"../chunks-js/chunk.G3QHRCKP.js";import{a as u,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{l as c}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as i}from"../chunks-js/chunk.PJH7M65U.js";import{b as n,c as x}from"../chunks-js/chunk.N6OKW4B2.js";import{d as f}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as r}from"../chunks-js/chunk.F6MIXR4E.js";import{h as L,m as h,p as S}from"../chunks-js/chunk.BF43NN75.js";h();S();var m=L(g(),1);var Z={title:"UI Components/Search Field",component:"omni-search-field"},_={render:e=>t`
        <omni-search-field
            data-testid="test-search-field"
            label="${i(e.label)}"
            value="${e.value}"
            hint="${i(e.hint)}"
            error="${i(e.error)}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}">${e.prefix?t`${`\r
`}${s(c("prefix",e.prefix))}`:r}${e.suffix?t`${`\r
`}${s(c("suffix",e.suffix))}`:r}${e.prefix||e.suffix?`\r
`:r}</omni-search-field>
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:""},play:async e=>{var p;let o=x(e.canvasElement).getByTestId("test-search-field"),d=m.fn(),I=m.fn();o.addEventListener("input",d),o.addEventListener("click",I);let a=(p=o.shadowRoot)==null?void 0:p.getElementById("inputField");u(a);let l="Batman";await F.type(a,l),await n(()=>f(a).toHaveValue(l),{timeout:3e3}),await n(()=>f(d).toBeCalledTimes(l.length),{timeout:3e3})}},ee=y("omni-search-field"),te=b("omni-search-field"),re=B("omni-search-field"),ie=$("omni-search-field"),oe=C("omni-search-field","Clear my name"),ae=v("omni-search-field"),le=A("omni-search-field"),ne=E("omni-search-field");export{oe as Clear,ne as Disabled,re as ErrorLabel,te as Hint,_ as Interactive,ee as Label,ae as Prefix,le as Suffix,ie as Value,Z as default};
//# sourceMappingURL=SearchField.stories.js.map
