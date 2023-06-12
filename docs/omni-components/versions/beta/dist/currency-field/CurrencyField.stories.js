import"../chunks-js/chunk.GID6PZA2.js";import"../chunks-js/chunk.VAH5TOPR.js";import{a as C,b as w,c as F,d as $,e as v,f as B,g as A,h,i as H}from"../chunks-js/chunk.I75HJ7OM.js";import"../chunks-js/chunk.DZCGDWRW.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{a as T}from"../chunks-js/chunk.JSH3M4FH.js";import{a as s,b as o}from"../chunks-js/chunk.XOIHXH3W.js";import{a as t}from"../chunks-js/chunk.XCXCHO25.js";import{b as i}from"../chunks-js/chunk.FVJIJQ42.js";import{b as a,c as x}from"../chunks-js/chunk.WPESAYH2.js";import"../chunks-js/chunk.TTUIP4EN.js";import{E as d,m as f}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as u}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as l,e as c}from"../chunks-js/chunk.L3RZWW2F.js";import{h as P,m as b,p as S}from"../chunks-js/chunk.BF43NN75.js";b();S();var L=P(T(),1);var oe={title:"UI Components/Currency Field",component:"omni-currency-field"},I={render:e=>l`
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
            >${e.prefix?l`${`\r
`}${u(f("prefix",e.prefix))}`:c}
            ${e.clear?l`${`\r
`}${u(f("clear",e.clear))}`:c}${e.suffix?l`${`\r
`}${u(f("suffix",e.suffix))}`:c}${e.prefix||e.suffix||e.clear?`\r
`:c}</omni-currency-field>
    `,frameworkSources:[{framework:"Lit",sourceParts:{htmlFragment:e=>d(I.render(e),void 0,n=>n.replace("formatter",".formatter"))}},{framework:"Vue",load:e=>d(I.render(e),void 0,n=>n.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Label",value:"123456789",hint:"",error:"",disabled:!1,clearable:!1,prefix:"",suffix:"",clear:"",fractionalPrecision:2,fractionalSeparator:".",thousandsSeparator:",",currencySymbol:"$",formatter:"\\B(?=(\\d{3})+(?!\\d))"},play:async e=>{var y;let n=x(e.canvasElement).getByTestId("test-currency-field"),r=(y=n.shadowRoot)==null?void 0:y.getElementById("inputField");s(r),r.value="",await o.click(r),await r.focus(),await r.blur();let p=L.fn();n.addEventListener("beforeinput",p);let m="120000015";await o.type(r,m),await a(()=>i(r).toHaveValue("1,200,000.15"),{timeout:3e3}),await a(()=>i(p).toBeCalledTimes(m.length),{timeout:3e3});let V="{Backspace>2/}";s(r),await o.type(r,V,{initialSelectionStart:12,initialSelectionEnd:12}),await n.updateComplete,await a(()=>i(r).toHaveValue("12,000.00"),{timeout:3e3});let E="{ArrowLeft>3/}{Backspace}";await o.type(r,E),await a(()=>i(r).toHaveValue("1,200.00"),{timeout:3e3}),r.setSelectionRange(0,10);let g="88.88";await o.paste(g),await a(()=>i(r).toHaveValue("88.88"),{timeout:3e3}),s(r),r.value="",await o.type(r,m),await a(()=>i(r).toHaveValue("1,200,000.15"),{timeout:3e3}),r.setSelectionRange(3,10);let k="4abc";await o.paste(k),await a(()=>i(r).toHaveValue("124.15"),{timeout:3e3})}},ie=C("omni-currency-field"),ne=w("omni-currency-field"),le=F("omni-currency-field"),ce=$("omni-currency-field","1200.50"),se=A("omni-currency-field","1200.50"),ue=h("omni-currency-field","1200.50"),fe=v("omni-currency-field"),me=B("omni-currency-field"),de=H("omni-currency-field","1200");export{se as Clearable,ue as Custom_Clear_Slot,de as Disabled,le as Error_Label,ne as Hint,I as Interactive,ie as Label,fe as Prefix,me as Suffix,ce as Value,oe as default};
//# sourceMappingURL=CurrencyField.stories.js.map
