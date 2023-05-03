import"../chunks-js/chunk.M53XPUTZ.js";import"../chunks-js/chunk.5TKLJSC4.js";import{a as x,b as w,c as $,d as C,e as F,f as v,g as B,h as A}from"../chunks-js/chunk.M3SJH7XF.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as g}from"../chunks-js/chunk.IRJIQSYL.js";import{a as s}from"../chunks-js/chunk.G3QHRCKP.js";import{a as c,b as i}from"../chunks-js/chunk.MHLMY33S.js";import{l as u}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as r}from"../chunks-js/chunk.PJH7M65U.js";import{b as a,c as b}from"../chunks-js/chunk.N6OKW4B2.js";import{d as o}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,d as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as L,m as y,p as S}from"../chunks-js/chunk.BF43NN75.js";y();S();var h=L(g(),1);var te={title:"UI Components/Currency Field",component:"omni-currency-field"},re={render:e=>n`
        <omni-currency-field
            data-testId="test-currency-field"
            label="${r(e.label)}"
            value="${r(e.value)}"
            hint="${r(e.hint)}"
            error="${r(e.error)}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}"
            fractional-precision="${e.fractionalPrecision}"
            fractional-separator="${r(e.fractionalSeparator)}"
            thousands-separator="${r(e.thousandsSeparator)}"
            currency-symbol="${r(e.currencySymbol)}"
            formatter="${r(e.formatter)}"           
            >${e.prefix?n`${`\r
`}${s(u("prefix",e.prefix))}`:l}
            ${e.clear?n`${`\r
`}${s(u("clear",e.clear))}`:l}${e.suffix?n`${`\r
`}${s(u("suffix",e.suffix))}`:l}${e.prefix||e.suffix||e.clear?`\r
`:l}</omni-currency-field>
    `,name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async e=>{var d;let f=b(e.canvasElement).getByTestId("test-currency-field"),t=(d=f.shadowRoot)==null?void 0:d.getElementById("inputField");c(t),t.value="",await i.click(t),await t.focus(),await t.blur();let p=h.fn();f.addEventListener("beforeinput",p);let m="120000015";await i.type(t,m),await a(()=>o(t).toHaveValue("1,200,000.15"),{timeout:3e3}),await a(()=>o(p).toBeCalledTimes(m.length),{timeout:3e3});let H="{Backspace>2/}";c(t),await i.type(t,H,{initialSelectionStart:12,initialSelectionEnd:12}),await f.updateComplete,await a(()=>o(t).toHaveValue("12,000.00"),{timeout:3e3});let I="{ArrowLeft>3/}{Backspace}";await i.type(t,I),await a(()=>o(t).toHaveValue("1,200.00"),{timeout:3e3}),t.setSelectionRange(0,10);let E="88.88";await i.paste(E),await a(()=>o(t).toHaveValue("88.88"),{timeout:3e3}),c(t),t.value="",await i.type(t,m),await a(()=>o(t).toHaveValue("1,200,000.15"),{timeout:3e3}),t.setSelectionRange(3,10);let V="4abc";await i.paste(V),await a(()=>o(t).toHaveValue("124.15"),{timeout:3e3})}},ae=x("omni-currency-field"),ie=w("omni-currency-field"),oe=$("omni-currency-field"),ne=C("omni-currency-field","1200.50"),le=B("omni-currency-field","1200.50"),ce=F("omni-currency-field"),se=v("omni-currency-field"),ue=A("omni-currency-field","1200");export{le as Clear,ue as Disabled,oe as Error_Label,ie as Hint,re as Interactive,ae as Label,ce as Prefix,se as Suffix,ne as Value,te as default};
//# sourceMappingURL=CurrencyField.stories.js.map
