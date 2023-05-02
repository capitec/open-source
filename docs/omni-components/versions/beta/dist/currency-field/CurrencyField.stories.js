import"../chunks-js/chunk.M53XPUTZ.js";import"../chunks-js/chunk.5TKLJSC4.js";import{a as x,b as w,c as C,d as F,e as $,f as v,g as B,h as A}from"../chunks-js/chunk.YD3W5R6Q.js";import"../chunks-js/chunk.P5BVWJU5.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as L}from"../chunks-js/chunk.IRJIQSYL.js";import{a as f}from"../chunks-js/chunk.G3QHRCKP.js";import{a as n,b as i}from"../chunks-js/chunk.MHLMY33S.js";import{l as m}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as r}from"../chunks-js/chunk.PJH7M65U.js";import{b as a,c as b}from"../chunks-js/chunk.N6OKW4B2.js";import{d as o}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as l,d as c}from"../chunks-js/chunk.F6MIXR4E.js";import{h as g,m as y,p as S}from"../chunks-js/chunk.BF43NN75.js";y();S();var h=g(L(),1);var te={title:"UI Components/Currency Field",component:"omni-currency-field"},re={render:t=>l`
        <omni-currency-field
            data-testId="test-currency-field"
            label="${r(t.label)}"
            value="${r(t.value)}"
            hint="${r(t.hint)}"
            error="${r(t.error)}"
            ?disabled="${t.disabled}"
            ?clearable="${t.clearable}"
            fractional-precision="${t.fractionalPrecision}"
            fractional-separator="${r(t.fractionalSeparator)}"
            thousands-separator="${r(t.thousandsSeparator)}"
            currency-symbol="${r(t.currencySymbol)}"
            formatter="${r(t.formatter)}"           
            >${t.prefix?l`${`\r
`}${f(m("prefix",t.prefix))}`:c}${t.suffix?l`${`\r
`}${f(m("suffix",t.suffix))}`:c}${t.prefix||t.suffix?`\r
`:c}</omni-currency-field>
    `,name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async t=>{var d;let s=b(t.canvasElement).getByTestId("test-currency-field"),e=(d=s.shadowRoot)==null?void 0:d.getElementById("inputField");n(e),e.value="",await i.click(e),await e.focus(),await e.blur();let p=h.fn();s.addEventListener("beforeinput",p);let u="120000015";await i.type(e,u),await a(()=>o(e).toHaveValue("1,200,000.15"),{timeout:3e3}),await a(()=>o(p).toBeCalledTimes(u.length),{timeout:3e3});let H="{Backspace>2/}";n(e),await i.type(e,H,{initialSelectionStart:12,initialSelectionEnd:12}),await s.updateComplete,await a(()=>o(e).toHaveValue("12,000.00"),{timeout:3e3});let I="{ArrowLeft>3/}{Backspace}";await i.type(e,I),await a(()=>o(e).toHaveValue("1,200.00"),{timeout:3e3}),e.setSelectionRange(0,10);let E="88.88";await i.paste(E),await a(()=>o(e).toHaveValue("88.88"),{timeout:3e3}),n(e),e.value="",await i.type(e,u),await a(()=>o(e).toHaveValue("1,200,000.15"),{timeout:3e3}),e.setSelectionRange(3,10);let V="4abc";await i.paste(V),await a(()=>o(e).toHaveValue("124.15"),{timeout:3e3})}},ae=x("omni-currency-field"),ie=w("omni-currency-field"),oe=C("omni-currency-field"),ne=F("omni-currency-field","1200.50"),le=B("omni-currency-field","1200.50"),ce=$("omni-currency-field"),se=v("omni-currency-field"),ue=A("omni-currency-field","1200");export{le as Clear,ue as Disabled,oe as Error_Label,ie as Hint,re as Interactive,ae as Label,ce as Prefix,se as Suffix,ne as Value,te as default};
//# sourceMappingURL=CurrencyField.stories.js.map
