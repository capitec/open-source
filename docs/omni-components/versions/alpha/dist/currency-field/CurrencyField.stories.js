import"../chunks-js/chunk.QSN4HHRH.js";import"../chunks-js/chunk.UG7N6GYS.js";import{a as C,b,c as F,d as $,e as g,f as v,g as A}from"../chunks-js/chunk.MICY5BMB.js";import"../chunks-js/chunk.SR577AVI.js";import"../chunks-js/chunk.E3RY574V.js";import{a as T}from"../chunks-js/chunk.IRJIQSYL.js";import{a as t}from"../chunks-js/chunk.PJH7M65U.js";import{a as u}from"../chunks-js/chunk.G3QHRCKP.js";import{a as c,b as n}from"../chunks-js/chunk.MHLMY33S.js";import{k as f}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import{b as o,c as x}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a,d as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h,m as y,p as S}from"../chunks-js/chunk.BF43NN75.js";y();S();var B=h(T(),1);var Y={title:"UI Components/Currency Field",component:"omni-currency-field"},Z={render:e=>a`
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
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async e=>{var d;let s=x(e.canvasElement).getByTestId("test-currency-field"),r=(d=s.shadowRoot)==null?void 0:d.getElementById("inputField");c(r),r.value="";let m=B.fn();s.addEventListener("input",m);let p="1200000.15";await n.type(r,p),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await o(()=>i(r).toHaveValue("1,200,000.15"),{timeout:3e3}),await o(()=>i(m).toBeCalledTimes(p.length),{timeout:3e3}));let w="{Backspace>2/}";c(r),await n.type(r,w,{initialSelectionStart:12,initialSelectionEnd:12}),await s.updateComplete,console.log("After backspacing",r.value),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await o(()=>i(r).toHaveValue("1,200,000"),{timeout:3e3});let I="{ArrowLeft>3/}{Backspace}";await n.type(r,I),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await o(()=>i(r).toHaveValue("120,000"),{timeout:3e3})}},ee=C("omni-currency-field"),re=b("omni-currency-field"),te=F("omni-currency-field"),oe=$("omni-currency-field","1200"),ie=g("omni-currency-field"),ne=v("omni-currency-field"),ae=A("omni-currency-field","1200");export{ae as Disabled,te as Error_Label,re as Hint,Z as Interactive,ee as Label,ie as Prefix,ne as Suffix,oe as Value,Y as default};
//# sourceMappingURL=CurrencyField.stories.js.map
