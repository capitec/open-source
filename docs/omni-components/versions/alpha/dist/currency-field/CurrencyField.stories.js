import"../chunks-js/chunk.V52TVLFR.js";import"../chunks-js/chunk.57MN2DDF.js";import{a as s,b as m,c as u,d,e as p,f as y,g as b,h as S,i as x}from"../chunks-js/chunk.AFWAFKII.js";import"../chunks-js/chunk.B6J23Y56.js";import"../chunks-js/chunk.PBJBFOZO.js";import{E as l,m as n}from"../chunks-js/chunk.NXMGYN5J.js";import"../chunks-js/chunk.HWW7Q3DW.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.FPKTYYRH.js";import"../chunks-js/chunk.ROSXE42L.js";import"../chunks-js/chunk.WLLX574P.js";import"../chunks-js/chunk.B24VSKLO.js";import{a}from"../chunks-js/chunk.DJIVMBLF.js";import"../chunks-js/chunk.JOXUPYMK.js";import"../chunks-js/chunk.3F3IIFA7.js";import{a as e}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.263MQTZQ.js";import"../chunks-js/chunk.O3UNTVN7.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as o,g as t}from"../chunks-js/chunk.63YMDT6M.js";import{m as c,p as f}from"../chunks-js/chunk.BF43NN75.js";c();f();var $={render:r=>o`
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
