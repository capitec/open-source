import"../chunks-js/chunk.LRQMMSZH.js";import"../chunks-js/chunk.6LN2OCOU.js";import"../chunks-js/chunk.OLTCQXBT.js";import{a as C,b,c as F,d as $,e as v,f as A,g}from"../chunks-js/chunk.KAP7PH4J.js";import{k as f}from"../chunks-js/chunk.QDDPH2I4.js";import"../chunks-js/chunk.UV5ZCCWM.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as u}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{a as c,b as n,c as T}from"../chunks-js/chunk.LME64W74.js";import{a as t}from"../chunks-js/chunk.R4IMIBZU.js";import{b as o,c as x}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as i}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as a,d as l}from"../chunks-js/chunk.3GEUDTAZ.js";import{h,l as y,o as S}from"../chunks-js/chunk.2ZZQBHAA.js";y();S();var B=h(T(),1);var Y={title:"UI Components/Currency Field",component:"omni-currency-field"},Z={render:e=>a`
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
    `,name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,prefix:"",suffix:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async e=>{var d;let s=x(e.canvasElement).getByTestId("test-currency-field"),r=(d=s.shadowRoot)==null?void 0:d.getElementById("inputField");c(r),r.value="";let m=B.fn();s.addEventListener("input",m);let p="1200000.15";await n.type(r,p),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await o(()=>i(r).toHaveValue("1,200,000.15"),{timeout:3e3}),await o(()=>i(m).toBeCalledTimes(p.length),{timeout:3e3}));let w="{Backspace}";c(r),await n.type(r,w,{initialSelectionStart:10,initialSelectionEnd:10}),await s.updateComplete,navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await o(()=>i(r).toHaveValue("1,200,000"),{timeout:3e3});let I="{ArrowLeft>3/}{Backspace}";await n.type(r,I),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await o(()=>i(r).toHaveValue("120,000"),{timeout:3e3})}},ee=C("omni-currency-field"),re=b("omni-currency-field"),te=F("omni-currency-field"),oe=$("omni-currency-field","100.15"),ie=v("omni-currency-field"),ne=A("omni-currency-field"),ae=g("omni-currency-field");export{ae as Disabled,te as Error_Label,re as Hint,Z as Interactive,ee as Label,ie as Prefix,ne as Suffix,oe as Value,Y as default};
//# sourceMappingURL=CurrencyField.stories.js.map
