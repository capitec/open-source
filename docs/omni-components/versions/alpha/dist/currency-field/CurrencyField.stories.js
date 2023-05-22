import"../chunks-js/chunk.LB3SEVFG.js";import"../chunks-js/chunk.5TKLJSC4.js";import{a as x,b as C,c as w,d as $,e as F,f as v,g as B,h as A,i as h}from"../chunks-js/chunk.ZOMVZAXV.js";import"../chunks-js/chunk.I3LVDBCB.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import{a as P}from"../chunks-js/chunk.IRJIQSYL.js";import{a as s}from"../chunks-js/chunk.G3QHRCKP.js";import{a as c,b as o}from"../chunks-js/chunk.MHLMY33S.js";import{l as u}from"../chunks-js/chunk.6ISQ3AKL.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as t}from"../chunks-js/chunk.6QCQBNRL.js";import{b as a,c as b}from"../chunks-js/chunk.N6OKW4B2.js";import{d as i}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,d as l}from"../chunks-js/chunk.F6MIXR4E.js";import{h as g,m as y,p as S}from"../chunks-js/chunk.BF43NN75.js";y();S();var I=g(P(),1);var te={title:"UI Components/Currency Field",component:"omni-currency-field"},ae={render:e=>n`
        <omni-currency-field
            data-testId="test-currency-field"
            label="${t(e.label)}"
            value="${t(e.value)}"
            hint="${t(e.hint)}"
            error="${t(e.error)}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}"
            fractional-precision="${e.fractionalPrecision}"
            fractional-separator="${t(e.fractionalSeparator)}"
            thousands-separator="${t(e.thousandsSeparator)}"
            currency-symbol="${t(e.currencySymbol)}"
            formatter="${t(e.formatter)}"           
            >${e.prefix?n`${`\r
`}${s(u("prefix",e.prefix))}`:l}
            ${e.clear?n`${`\r
`}${s(u("clear",e.clear))}`:l}${e.suffix?n`${`\r
`}${s(u("suffix",e.suffix))}`:l}${e.prefix||e.suffix||e.clear?`\r
`:l}</omni-currency-field>
    `,name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async e=>{var d;let f=b(e.canvasElement).getByTestId("test-currency-field"),r=(d=f.shadowRoot)==null?void 0:d.getElementById("inputField");c(r),r.value="",await o.click(r),await r.focus(),await r.blur();let p=I.fn();f.addEventListener("beforeinput",p);let m="120000015";await o.type(r,m),await a(()=>i(r).toHaveValue("1,200,000.15"),{timeout:3e3}),await a(()=>i(p).toBeCalledTimes(m.length),{timeout:3e3});let H="{Backspace>2/}";c(r),await o.type(r,H,{initialSelectionStart:12,initialSelectionEnd:12}),await f.updateComplete,await a(()=>i(r).toHaveValue("12,000.00"),{timeout:3e3});let E="{ArrowLeft>3/}{Backspace}";await o.type(r,E),await a(()=>i(r).toHaveValue("1,200.00"),{timeout:3e3}),r.setSelectionRange(0,10);let V="88.88";await o.paste(V),await a(()=>i(r).toHaveValue("88.88"),{timeout:3e3}),c(r),r.value="",await o.type(r,m),await a(()=>i(r).toHaveValue("1,200,000.15"),{timeout:3e3}),r.setSelectionRange(3,10);let L="4abc";await o.paste(L),await a(()=>i(r).toHaveValue("124.15"),{timeout:3e3})}},oe=x("omni-currency-field"),ie=C("omni-currency-field"),ne=w("omni-currency-field"),le=$("omni-currency-field","1200.50"),ce=B("omni-currency-field","1200.50"),se=A("omni-currency-field","1200.50"),ue=F("omni-currency-field"),fe=v("omni-currency-field"),me=h("omni-currency-field","1200");export{ce as Clearable,se as Custom_Clear_Slot_Icon,me as Disabled,ne as Error_Label,ie as Hint,ae as Interactive,oe as Label,ue as Prefix,fe as Suffix,le as Value,te as default};
//# sourceMappingURL=CurrencyField.stories.js.map
