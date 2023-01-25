import"../chunks-js/chunk.JZCNGWKP.js";import"../chunks-js/chunk.YY43U62S.js";import"../chunks-js/chunk.DB4X3ATZ.js";import"../chunks-js/chunk.MCIDFWAY.js";import"../chunks-js/chunk.TDEC2NDF.js";import{a as F,b as y,c as B,d as v,e as $,f as b,g}from"../chunks-js/chunk.ZXYJTH2N.js";import{a as S,b as c,c as E}from"../chunks-js/chunk.LME64W74.js";import{k as d}from"../chunks-js/chunk.TDB7NULF.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.D6UL6COZ.js";import"../chunks-js/chunk.BMVIQMEU.js";import{a as f}from"../chunks-js/chunk.3FTDPY75.js";import{a as n}from"../chunks-js/chunk.R4IMIBZU.js";import{b as i,c as x}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as s}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.VOM777LA.js";import"../chunks-js/chunk.X74GW3ZD.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as r,d as a}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as C,l as u,o as h}from"../chunks-js/chunk.2ZZQBHAA.js";u();h();var m=C(E(),1);var Y={title:"UI Components/Search Field",component:"omni-search-field"},Z={render:e=>r`
        <omni-search-field
            data-testid="test-search-field"
            label="${n(e.label)}"
            .value="${e.value}"
            .data="${e.data}"
            hint="${n(e.hint)}"
            error="${n(e.error)}"
            ?disabled="${e.disabled}">${e.prefix?r`${`\r
`}${f(d("prefix",e.prefix))}`:a}${e.suffix?r`${`\r
`}${f(d("suffix",e.suffix))}`:a}${e.prefix||e.suffix?`\r
`:a}</omni-search-field>
    `,name:"Interactive",args:{label:"Label",value:"",data:{},hint:"",error:"",disabled:!1,prefix:"",suffix:""},play:async e=>{let t=x(e.canvasElement).getByTestId("test-search-field"),p=m.fn(),A=m.fn();t.addEventListener("input",p),t.addEventListener("click",A);let o=t.shadowRoot.getElementById("inputField");S(o);let l="Batman";await c.type(o,l),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):(await i(()=>s(o).toHaveValue(l),{timeout:3e3}),await i(()=>s(p).toBeCalledTimes(l.length),{timeout:3e3}));let I=t.shadowRoot.getElementById("control");await c.click(I),navigator.userAgent==="Test Runner"?console.log("CICD Test - Not Visual"):await i(()=>s(o).toHaveValue(""),{timeout:3e3})}},_=F("omni-search-field"),ee=y("omni-search-field"),te=B("omni-search-field"),oe=v("omni-search-field"),ie=$("omni-search-field"),re=b("omni-search-field"),ae=g("omni-search-field");export{ae as Disabled,te as ErrorLabel,ee as Hint,Z as Interactive,_ as Label,ie as Prefix,re as Suffix,oe as Value,Y as default};
//# sourceMappingURL=SearchField.stories.js.map
