import"../chunks-js/chunk.GSCCPROM.js";import"../chunks-js/chunk.MW4VXBNP.js";import{a as s,b as m,c as u,d,e as p,f as y,g as S,h as b,i as x}from"../chunks-js/chunk.Y7PYKMUN.js";import"../chunks-js/chunk.ZGHDW2L3.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{E as l,m as n}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as i}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as e}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o,e as t}from"../chunks-js/chunk.L3RZWW2F.js";import{m as c,p as f}from"../chunks-js/chunk.BF43NN75.js";c();f();var U={title:"UI Components/Currency Field",component:"omni-currency-field"},C={render:r=>o`
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
`}${i(n("prefix",r.prefix))}`:t}
            ${r.clear?o`${`\r
`}${i(n("clear",r.clear))}`:t}${r.suffix?o`${`\r
`}${i(n("suffix",r.suffix))}`:t}${r.prefix||r.suffix||r.clear?`\r
`:t}</omni-currency-field>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:r=>l(C.render(r),void 0,a=>a.replace("formatter",".formatter"))}},{framework:"Vue",load:r=>l(C.render(r),void 0,a=>a.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"}},j=s("omni-currency-field"),M=m("omni-currency-field"),N=u("omni-currency-field"),q=d("omni-currency-field","1200.50"),z=S("omni-currency-field","1200.50"),G=b("omni-currency-field","1200.50"),J=p("omni-currency-field"),K=y("omni-currency-field"),O=x("omni-currency-field","1200");export{z as Clearable,G as Custom_Clear_Slot,O as Disabled,N as Error_Label,M as Hint,C as Interactive,j as Label,J as Prefix,K as Suffix,q as Value,U as default};
//# sourceMappingURL=CurrencyField.stories.js.map
