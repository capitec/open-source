import"../chunks-js/chunk.O6GY2A66.js";import"../chunks-js/chunk.MW4VXBNP.js";import{a as s,b as u,c as d,d as m,e as y,f as p,g as b,h as S,i as x}from"../chunks-js/chunk.Y7PYKMUN.js";import"../chunks-js/chunk.H4M5P4MF.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as l,m as a}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as n}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as e}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o,e as t}from"../chunks-js/chunk.L3RZWW2F.js";import{m as c,p as f}from"../chunks-js/chunk.BF43NN75.js";c();f();var $={render:r=>o`
        <omni-currency-field
            data-testId="test-currency-field"
            label="${e(r.label)}"
            value="${e(r.value)}"
            hint="${e(r.hint)}"
            error="${e(r.error)}"
            ?disabled="${r.disabled}"
            ?clearable="${r.clearable}"
            fractional-precision="${r.fractionalPrecision}"
            fractional-separator="${e(r.fractionalSeparator)}"
            thousands-separator="${e(r.thousandsSeparator)}"
            currency-symbol="${e(r.currencySymbol)}"
            formatter="${e(r.formatter)}"           
            >${r.prefix?o`${`\r
`}${n(a("prefix",r.prefix))}`:t}
            ${r.clear?o`${`\r
`}${n(a("clear",r.clear))}`:t}${r.suffix?o`${`\r
`}${n(a("suffix",r.suffix))}`:t}${r.prefix||r.suffix||r.clear?`\r
`:t}</omni-currency-field>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:r=>l($.render(r),void 0,i=>i.replace("formatter",".formatter"))}},{framework:"Vue",load:r=>l($.render(r),void 0,i=>i.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"}},T=s("omni-currency-field"),M=u("omni-currency-field"),N=d("omni-currency-field"),j=m("omni-currency-field","1200.50"),q=b("omni-currency-field","1200.50"),z=S("omni-currency-field","1200.50"),G=y("omni-currency-field"),J=p("omni-currency-field"),K=x("omni-currency-field","1200");export{q as Clearable,z as Custom_Clear_Slot,K as Disabled,N as Error_Label,M as Hint,$ as Interactive,T as Label,G as Prefix,J as Suffix,j as Value};
//# sourceMappingURL=CurrencyField.stories.js.map
