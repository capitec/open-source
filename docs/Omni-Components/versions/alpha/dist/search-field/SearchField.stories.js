import"../chunks-js/chunk.L6M26X2H.js";import"../chunks-js/chunk.IS7EBBCF.js";import"../chunks-js/chunk.6OGE6LTO.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.RV4U3FFU.js";import{a as F,b as y,c as B,d as v,e as g,f as b,g as A}from"../chunks-js/chunk.YRCIB657.js";import{k as m}from"../chunks-js/chunk.ZOV7Q3GR.js";import"../chunks-js/chunk.AWLGTUIY.js";import"../chunks-js/chunk.US2AYN3N.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as f}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{a as S,b as c,c as E}from"../chunks-js/chunk.LME64W74.js";import{a as n}from"../chunks-js/chunk.R4IMIBZU.js";import{b as r,c as x}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as s}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.X74GW3ZD.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as i,d as a}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as C,l as u,o as h}from"../chunks-js/chunk.2ZZQBHAA.js";u();h();var d=C(E(),1);var Y={title:"UI Components/Search Field",component:"omni-search-field"},Z={render:e=>i`
        <omni-search-field
            data-testid="test-search-field"
            label="${n(e.label)}"
            value="${e.value}"
            hint="${n(e.hint)}"
            error="${n(e.error)}"
            ?disabled="${e.disabled}">
            ${e.prefix?i`${`\r
`}${f(m("prefix",e.prefix))}`:a}${e.suffix?i`${`\r
`}${f(m("suffix",e.suffix))}`:a}${e.prefix||e.suffix?`\r
`:a}</omni-search-field>
    `,name:"Interactive",args:{label:"Label",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let t=x(e.canvasElement).getByTestId("test-search-field"),p=d.fn(),I=d.fn();t.addEventListener("input",p),t.addEventListener("click",I);let o=t.shadowRoot.getElementById("inputField");S(o);let l="Batman";await c.type(o,l),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await r(()=>s(o).toHaveValue(l),{timeout:3e3}),await r(()=>s(p).toBeCalledTimes(l.length),{timeout:3e3}));let $=t.shadowRoot.getElementById("control");await c.click($),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await r(()=>s(o).toHaveValue(""),{timeout:3e3})}},_=F("omni-search-field"),ee=y("omni-search-field"),te=B("omni-search-field"),oe=v("omni-search-field"),re=g("omni-search-field"),ie=b("omni-search-field"),ae=A("omni-search-field");export{ae as Disabled,te as ErrorLabel,ee as Hint,Z as Interactive,_ as Label,re as Prefix,ie as Suffix,oe as Value,Y as default};
//# sourceMappingURL=SearchField.stories.js.map
