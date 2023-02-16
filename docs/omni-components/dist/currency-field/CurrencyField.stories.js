import"../chunks-js/chunk.EUWVBDIV.js";import"../chunks-js/chunk.NMWKNT2T.js";import"../chunks-js/chunk.TWX6WA6U.js";import{a as C,b,c as F,d as $,e as v,f as A,g}from"../chunks-js/chunk.ZNL3YBLQ.js";import{k as f}from"../chunks-js/chunk.EZFZPYM4.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.FJG2EZL6.js";import{a as c,b as n,c as T}from"../chunks-js/chunk.SNS3RAAO.js";import{a as u}from"../chunks-js/chunk.7QF4VYJR.js";import{a as t}from"../chunks-js/chunk.CFP25WDL.js";import{b as o,c as x}from"../chunks-js/chunk.555UF2OF.js";import{d as i}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as a,d as l}from"../chunks-js/chunk.CIM3NS6G.js";import{h,l as y,o as S}from"../chunks-js/chunk.2ZZQBHAA.js";y();S();var B=h(T(),1);var Y={title:"UI Components/Currency Field",component:"omni-currency-field"},Z={render:e=>a`
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
    `,name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,prefix:"",suffix:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async e=>{var d;let s=x(e.canvasElement).getByTestId("test-currency-field"),r=(d=s.shadowRoot)==null?void 0:d.getElementById("inputField");c(r),r.value="";let m=B.fn();s.addEventListener("input",m);let p="1200000.15";await n.type(r,p),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await o(()=>i(r).toHaveValue("1,200,000.15"),{timeout:3e3}),await o(()=>i(m).toBeCalledTimes(p.length),{timeout:3e3}));let w="{Backspace}";c(r),await n.type(r,w,{initialSelectionStart:10,initialSelectionEnd:10}),await s.updateComplete,navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await o(()=>i(r).toHaveValue("1,200,000"),{timeout:3e3});let I="{ArrowLeft>3/}{Backspace}";await n.type(r,I),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await o(()=>i(r).toHaveValue("120,000"),{timeout:3e3})}},ee=C("omni-currency-field"),re=b("omni-currency-field"),te=F("omni-currency-field"),oe=$("omni-currency-field","100.15"),ie=v("omni-currency-field"),ne=A("omni-currency-field"),ae=g("omni-currency-field","100.15");export{ae as Disabled,te as Error_Label,re as Hint,Z as Interactive,ee as Label,ie as Prefix,ne as Suffix,oe as Value,Y as default};
//# sourceMappingURL=CurrencyField.stories.js.map
