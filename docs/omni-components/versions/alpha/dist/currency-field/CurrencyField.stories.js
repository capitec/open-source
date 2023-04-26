import"../chunks-js/chunk.AT4DXONZ.js";import"../chunks-js/chunk.5TKLJSC4.js";import{a as x,b as w,c as v,d as C,e as F,f as $,g as B}from"../chunks-js/chunk.V7MTHKNM.js";import"../chunks-js/chunk.WASXY5YJ.js";import"../chunks-js/chunk.E3RY574V.js";import{a as V}from"../chunks-js/chunk.IRJIQSYL.js";import{a as f}from"../chunks-js/chunk.G3QHRCKP.js";import{a as n,b as o}from"../chunks-js/chunk.MHLMY33S.js";import{l as m}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as r}from"../chunks-js/chunk.PJH7M65U.js";import{b as i,c as b}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as c,d as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as E,m as y,p as S}from"../chunks-js/chunk.BF43NN75.js";y();S();var A=E(V(),1);var ee={title:"UI Components/Currency Field",component:"omni-currency-field"},te={render:t=>c`
        <omni-currency-field
            data-testId="test-currency-field"
            label="${r(t.label)}"
            value="${r(t.value)}"
            hint="${r(t.hint)}"
            error="${r(t.error)}"
            ?disabled="${t.disabled}"
            fractional-precision="${t.fractionalPrecision}"
            fractional-separator="${r(t.fractionalSeparator)}"
            thousands-separator="${r(t.thousandsSeparator)}"
            currency-symbol="${r(t.currencySymbol)}"
            formatter="${r(t.formatter)}"           
            >${t.prefix?c`${`\r
`}${f(m("prefix",t.prefix))}`:l}${t.suffix?c`${`\r
`}${f(m("suffix",t.suffix))}`:l}${t.prefix||t.suffix?`\r
`:l}</omni-currency-field>
    `,name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,prefix:"",suffix:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async t=>{var d;let s=b(t.canvasElement).getByTestId("test-currency-field"),e=(d=s.shadowRoot)==null?void 0:d.getElementById("inputField");n(e),e.value="",await o.click(e),await e.focus(),await e.blur();let p=A.fn();s.addEventListener("beforeinput",p);let u="120000015";await o.type(e,u),await i(()=>a(e).toHaveValue("1,200,000.15"),{timeout:3e3}),await i(()=>a(p).toBeCalledTimes(u.length),{timeout:3e3});let h="{Backspace>2/}";n(e),await o.type(e,h,{initialSelectionStart:12,initialSelectionEnd:12}),await s.updateComplete,console.log("After backspacing",e.value),await i(()=>a(e).toHaveValue("12,000.00"),{timeout:3e3});let g="{ArrowLeft>3/}{Backspace}";await o.type(e,g),await i(()=>a(e).toHaveValue("1,200.00"),{timeout:3e3}),e.setSelectionRange(0,10);let H="88.88";await o.paste(H),await i(()=>a(e).toHaveValue("88.88"),{timeout:3e3}),n(e),e.value="",await o.type(e,u),await i(()=>a(e).toHaveValue("1,200,000.15"),{timeout:3e3}),e.setSelectionRange(3,10);let I="4abc";await o.paste(I),await i(()=>a(e).toHaveValue("124.15"),{timeout:3e3})}},re=x("omni-currency-field"),ie=w("omni-currency-field"),oe=v("omni-currency-field"),ae=C("omni-currency-field","1200.50"),ne=F("omni-currency-field"),ce=$("omni-currency-field"),le=B("omni-currency-field","1200");export{le as Disabled,oe as Error_Label,ie as Hint,te as Interactive,re as Label,ne as Prefix,ce as Suffix,ae as Value,ee as default};
//# sourceMappingURL=CurrencyField.stories.js.map
