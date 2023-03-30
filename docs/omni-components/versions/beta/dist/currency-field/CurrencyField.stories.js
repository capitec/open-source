import"../chunks-js/chunk.CCWQI24E.js";import"../chunks-js/chunk.UG7N6GYS.js";import{a as b,b as C,c as F,d as $,e as B,f as v,g as A}from"../chunks-js/chunk.MICY5BMB.js";import"../chunks-js/chunk.SR577AVI.js";import"../chunks-js/chunk.E3RY574V.js";import{a as g}from"../chunks-js/chunk.IRJIQSYL.js";import{a as t}from"../chunks-js/chunk.PJH7M65U.js";import{a as f}from"../chunks-js/chunk.G3QHRCKP.js";import{a as s,b as n}from"../chunks-js/chunk.MHLMY33S.js";import{k as u}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import{b as o,c as x}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a,d as c}from"../chunks-js/chunk.F6MIXR4E.js";import{h as E,m as y,p as S}from"../chunks-js/chunk.BF43NN75.js";y();S();var w=E(g(),1);var Y={title:"UI Components/Currency Field",component:"omni-currency-field"},Z={render:e=>a`
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
`}${f(u("prefix",e.prefix))}`:c}${e.suffix?a`${`\r
`}${f(u("suffix",e.suffix))}`:c}${e.prefix||e.suffix?`\r
`:c}</omni-currency-field>
    `,name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,prefix:"",suffix:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async e=>{var d;let l=x(e.canvasElement).getByTestId("test-currency-field"),r=(d=l.shadowRoot)==null?void 0:d.getElementById("inputField");s(r),r.value="";let m=w.fn();l.addEventListener("input",m);let p="1200000.15";await n.type(r,p),await o(()=>i(r).toHaveValue("1,200,000.15"),{timeout:3e3}),await o(()=>i(m).toBeCalledTimes(p.length),{timeout:3e3});let h="{Backspace>2/}";s(r),await n.type(r,h,{initialSelectionStart:12,initialSelectionEnd:12}),await l.updateComplete,console.log("After backspacing",r.value),await o(()=>i(r).toHaveValue("1,200,000"),{timeout:3e3});let I="{ArrowLeft>3/}{Backspace}";await n.type(r,I),await o(()=>i(r).toHaveValue("120,000"),{timeout:3e3})}},ee=b("omni-currency-field"),re=C("omni-currency-field"),te=F("omni-currency-field"),oe=$("omni-currency-field","1200"),ie=B("omni-currency-field"),ne=v("omni-currency-field"),ae=A("omni-currency-field","1200");export{ae as Disabled,te as Error_Label,re as Hint,Z as Interactive,ee as Label,ie as Prefix,ne as Suffix,oe as Value,Y as default};
//# sourceMappingURL=CurrencyField.stories.js.map
