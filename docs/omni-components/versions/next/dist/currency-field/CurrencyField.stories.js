import"../chunks-js/chunk.MZKLG4UF.js";import"../chunks-js/chunk.GMWWZDSW.js";import{a as s,b as m,c as u,d,e as p,f as y,g as b,h as S,i as x}from"../chunks-js/chunk.3UYRIGUL.js";import"../chunks-js/chunk.5OQBY5R4.js";import"../chunks-js/chunk.A6RJOB4D.js";import{E as l,m as n}from"../chunks-js/chunk.LIHXMBR3.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.YISFJ54N.js";import"../chunks-js/chunk.TQF2Y64M.js";import"../chunks-js/chunk.FCGABMD4.js";import"../chunks-js/chunk.D5GPI5IO.js";import"../chunks-js/chunk.VXWK2PFN.js";import{a}from"../chunks-js/chunk.I4G3FJEU.js";import"../chunks-js/chunk.D57IHIAB.js";import"../chunks-js/chunk.DUTPH62F.js";import{a as e}from"../chunks-js/chunk.C3AR2WR4.js";import"../chunks-js/chunk.34WDYOTS.js";import"../chunks-js/chunk.ZJGON3BB.js";import"../chunks-js/chunk.P6J7VJ5B.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as o,g as t}from"../chunks-js/chunk.UDCULUBW.js";import{m as c,p as f}from"../chunks-js/chunk.BF43NN75.js";c();f();var $={render:r=>o`
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
`}${a(n("prefix",r.prefix))}`:t}
            ${r.clear?o`${`\r
`}${a(n("clear",r.clear))}`:t}${r.suffix?o`${`\r
`}${a(n("suffix",r.suffix))}`:t}${r.prefix||r.suffix||r.clear?`\r
`:t}</omni-currency-field>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:r=>l($.render(r),void 0,i=>i.replace("formatter",".formatter"))}},{framework:"Vue",load:r=>l($.render(r),void 0,i=>i.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"}},T=s("omni-currency-field"),M=m("omni-currency-field"),N=u("omni-currency-field"),j=d("omni-currency-field","1200.50"),q=b("omni-currency-field","1200.50"),z=S("omni-currency-field","1200.50"),G=p("omni-currency-field"),J=y("omni-currency-field"),K=x("omni-currency-field","1200");export{q as Clearable,z as Custom_Clear_Slot,K as Disabled,N as Error_Label,M as Hint,$ as Interactive,T as Label,G as Prefix,J as Suffix,j as Value};
//# sourceMappingURL=CurrencyField.stories.js.map
