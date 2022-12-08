import"../chunks-js/chunk.CUT6JCMK.js";import"../chunks-js/chunk.T6B7BPEP.js";import"../chunks-js/chunk.WRJTD4VD.js";import"../chunks-js/chunk.WDG3O524.js";import{a as C,b as F,c as S,d as $,e as B,f as b,g as v}from"../chunks-js/chunk.ZXQG2H7K.js";import{a as s,b as a,c as h}from"../chunks-js/chunk.LME64W74.js";import{k as f}from"../chunks-js/chunk.O2CMG4E7.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as u}from"../chunks-js/chunk.BDUZEV7N.js";import{a as t}from"../chunks-js/chunk.O6CDAD4G.js";import{b as i,c as x}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as n}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.FS4G6H4L.js";import"../chunks-js/chunk.DYIGYEUP.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{c,e as l}from"../chunks-js/chunk.CDDA2I3H.js";import{h as E,l as p,o as y}from"../chunks-js/chunk.2ZZQBHAA.js";p();y();var w=E(h(),1);var Y={title:"UI Components/Currency Field",component:"omni-currency-field"},Z={render:e=>c`
        <omni-currency-field
            data-testId="test-currency-field"
            label="${t(e.label)}"
            value="${t(e.value)}"
            .data="${e.data}"
            hint="${t(e.hint)}"
            error="${t(e.error)}"
            ?disabled="${e.disabled}"
            currency="${t(e.currency)}"
            locale="${t(e.locale)}"
            >${e.prefix?c`${`\r
`}${u(f("prefix",e.prefix))}`:l}${e.suffix?c`${`\r
`}${u(f("suffix",e.suffix))}`:l}${e.prefix||e.suffix?`\r
`:l}
        </omni-currency-field>
    `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:"",currency:"",locale:""},play:async e=>{let o=x(e.canvasElement).getByTestId("test-currency-field"),r=o.shadowRoot.getElementById("inputField");s(r),r.value="";let d=w.fn();o.addEventListener("input",d);let m="1200000.15";await a.type(r,m),await i(()=>n(r).toHaveValue("1,200,000.15"),{timeout:3e3}),await i(()=>n(d).toBeCalledTimes(m.length),{timeout:3e3});let A="{Backspace}";s(r),await a.type(r,A,{initialSelectionStart:10,initialSelectionEnd:10}),await o.updateComplete,await i(()=>n(r).toHaveValue("1,200,000"),{timeout:3e3});let I="{ArrowLeft>3/}{Backspace}";await a.type(r,I),await i(()=>n(r).toHaveValue("120,000"),{timeout:3e3}),o.currency="cents"}},_=C("omni-currency-field"),ee=F("omni-currency-field"),re=S("omni-currency-field"),te=$("omni-currency-field","100.15"),ie=B("omni-currency-field"),ne=b("omni-currency-field"),oe=v("omni-currency-field");export{oe as Disabled,re as ErrorLabel,ee as Hint,Z as Interactive,_ as Label,ie as Prefix,ne as Suffix,te as Value,Y as default};
//# sourceMappingURL=CurrencyField.stories.js.map
