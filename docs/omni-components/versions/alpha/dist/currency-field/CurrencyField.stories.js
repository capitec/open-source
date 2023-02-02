import"../chunks-js/chunk.ZWW2EAWK.js";import"../chunks-js/chunk.6LN2OCOU.js";import"../chunks-js/chunk.EQAFL2KM.js";import{a as x,b as C,c as b,d as F,e as $,f as v,g as A}from"../chunks-js/chunk.YOIKDZ7P.js";import{k as f}from"../chunks-js/chunk.L4KSVVY6.js";import"../chunks-js/chunk.D6UL6COZ.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as u}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{a as c,b as n,c as h}from"../chunks-js/chunk.LME64W74.js";import{a as t}from"../chunks-js/chunk.R4IMIBZU.js";import{b as o,c as S}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as i}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as a,d as l}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as I,l as d,o as y}from"../chunks-js/chunk.2ZZQBHAA.js";d();y();var g=I(h(),1);var X={title:"UI Components/Currency Field",component:"omni-currency-field"},Y={render:e=>a`
        <omni-currency-field
            data-testId="test-currency-field"
            label="${t(e.label)}"
            value="${t(e.value)}"
            hint="${t(e.hint)}"
            error="${t(e.error)}"
            ?disabled="${e.disabled}"
            fractional-precision="${e.fractionalPrecision}"
            fractional-separator="${t(e.fractionalSeparator)}"
            thousands-separator="${t(e.thousandsSeparator)}"
            currency-symbol="${t(e.currencySymbol)}"
            formatter="${t(e.formatter)}"           
            >${e.prefix?a`${`\r
`}${u(f("prefix",e.prefix))}`:l}${e.suffix?a`${`\r
`}${u(f("suffix",e.suffix))}`:l}${e.prefix||e.suffix?`\r
`:l}</omni-currency-field>
    `,name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,prefix:"",suffix:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async e=>{let s=S(e.canvasElement).getByTestId("test-currency-field"),r=s.shadowRoot.getElementById("inputField");c(r),r.value="";let m=g.fn();s.addEventListener("input",m);let p="1200000.15";await n.type(r,p),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await o(()=>i(r).toHaveValue("1,200,000.15"),{timeout:3e3}),await o(()=>i(m).toBeCalledTimes(p.length),{timeout:3e3}));let B="{Backspace}";c(r),await n.type(r,B,{initialSelectionStart:10,initialSelectionEnd:10}),await s.updateComplete,navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await o(()=>i(r).toHaveValue("1,200,000"),{timeout:3e3});let w="{ArrowLeft>3/}{Backspace}";await n.type(r,w),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await o(()=>i(r).toHaveValue("120,000"),{timeout:3e3})}},Z=x("omni-currency-field"),ee=C("omni-currency-field"),re=b("omni-currency-field"),te=F("omni-currency-field","100.15"),oe=$("omni-currency-field"),ie=v("omni-currency-field"),ne=A("omni-currency-field");export{ne as Disabled,re as Error_Label,ee as Hint,Y as Interactive,Z as Label,oe as Prefix,ie as Suffix,te as Value,X as default};
//# sourceMappingURL=CurrencyField.stories.js.map
