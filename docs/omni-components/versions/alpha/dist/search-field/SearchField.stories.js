import"../chunks-js/chunk.7TN6OKXQ.js";import"../chunks-js/chunk.SP23GGNY.js";import{a as b,b as y,c as B,d as $,e as C,f as A,g as v,h as E,i as I}from"../chunks-js/chunk.6KQOIOYE.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.I3LVDBCB.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as H}from"../chunks-js/chunk.IRJIQSYL.js";import{a as i}from"../chunks-js/chunk.G3QHRCKP.js";import{a as x,b as F}from"../chunks-js/chunk.MHLMY33S.js";import{l as o}from"../chunks-js/chunk.G6V5HYSG.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a}from"../chunks-js/chunk.6QCQBNRL.js";import{b as c,c as u}from"../chunks-js/chunk.N6OKW4B2.js";import{d as m}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,d as t}from"../chunks-js/chunk.F6MIXR4E.js";import{h as w,m as h,p as S}from"../chunks-js/chunk.BF43NN75.js";h();S();var f=w(H(),1);var Z={title:"UI Components/Search Field",component:"omni-search-field"},ee={render:e=>r`
        <omni-search-field
            data-testid="test-search-field"
            label="${a(e.label)}"
            value="${e.value}"
            hint="${a(e.hint)}"
            error="${a(e.error)}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}">${e.prefix?r`${`\r
`}${i(o("prefix",e.prefix))}`:t}
            ${e.clear?r`${`\r
`}${i(o("clear",e.clear))}`:t}${e.suffix?r`${`\r
`}${i(o("suffix",e.suffix))}`:t}${e.prefix||e.suffix||e.clear?`\r
`:t}</omni-search-field>
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:""},play:async e=>{var p;let l=u(e.canvasElement).getByTestId("test-search-field"),d=f.fn(),L=f.fn();l.addEventListener("input",d),l.addEventListener("click",L);let n=(p=l.shadowRoot)==null?void 0:p.getElementById("inputField");x(n);let s="Batman";await F.type(n,s),await c(()=>m(n).toHaveValue(s),{timeout:3e3}),await c(()=>m(d).toBeCalledTimes(s.length),{timeout:3e3})}},re=b("omni-search-field"),te=y("omni-search-field"),ie=B("omni-search-field"),ae=$("omni-search-field"),oe=v("omni-search-field","Clear my name"),le=E("omni-search-field","Clear my name"),ne=C("omni-search-field"),se=A("omni-search-field"),ce=I("omni-search-field");export{oe as Clearable,le as Custom_Clear_Slot,ce as Disabled,ie as ErrorLabel,te as Hint,ee as Interactive,re as Label,ne as Prefix,se as Suffix,ae as Value,Z as default};
//# sourceMappingURL=SearchField.stories.js.map
