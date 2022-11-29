import"../chunks-js/chunk.FS7XSG7Y.js";import"../chunks-js/chunk.EYBS6IYR.js";import"../chunks-js/chunk.QZMZ3CLH.js";import"../chunks-js/chunk.EMNPHWST.js";import{a as C,b as F,c as S,d as B,e as $,f as A,g as b,h as v}from"../chunks-js/chunk.VTR4MEPP.js";import{a as s,b as a,c as h}from"../chunks-js/chunk.LME64W74.js";import{k as f}from"../chunks-js/chunk.KC5WESZP.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as u}from"../chunks-js/chunk.BDUZEV7N.js";import{a as t}from"../chunks-js/chunk.O6CDAD4G.js";import{b as i,c as x}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as n}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.FS4G6H4L.js";import"../chunks-js/chunk.63F4QTY7.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{c,e as l}from"../chunks-js/chunk.CDDA2I3H.js";import{h as g,l as p,o as y}from"../chunks-js/chunk.2ZZQBHAA.js";p();y();var w=g(h(),1);var Z={title:"UI Components/Currency Field",component:"omni-currency-field",argTypes:C},_={render:e=>c`
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
    `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:"",currency:"",locale:""},play:async e=>{let o=x(e.canvasElement).getByTestId("test-currency-field"),r=o.shadowRoot.getElementById("inputField");s(r),r.value="";let d=w.fn();o.addEventListener("input",d);let m="1200000.15";await a.type(r,m),await i(()=>n(r).toHaveValue("1,200,000.15"),{timeout:3e3}),await i(()=>n(d).toBeCalledTimes(m.length),{timeout:3e3});let I="{Backspace}";s(r),await a.type(r,I,{initialSelectionStart:10,initialSelectionEnd:10}),await o.updateComplete,await i(()=>n(r).toHaveValue("1,200,000"),{timeout:3e3});let E="{ArrowLeft>3/}{Backspace}";await a.type(r,E),await i(()=>n(r).toHaveValue("120,000"),{timeout:3e3}),o.currency="cents"}},ee=F("omni-currency-field"),re=S("omni-currency-field"),te=B("omni-currency-field"),ie=$("omni-currency-field","100.15"),ne=A("omni-currency-field"),oe=b("omni-currency-field"),ae=v("omni-currency-field");export{ae as Disabled,te as ErrorLabel,re as Hint,_ as Interactive,ee as Label,ne as Prefix,oe as Suffix,ie as Value,Z as default};
//# sourceMappingURL=CurrencyField.stories.js.map
