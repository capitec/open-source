import"../chunks-js/chunk.PR7OGHXM.js";import"../chunks-js/chunk.KGP2Q2XO.js";import{a as s,b as u,c as f,e as k,f as b,g as $,h as D}from"../chunks-js/chunk.L542EVWB.js";import"../chunks-js/chunk.5DQX5M47.js";import"../chunks-js/chunk.INUETMMB.js";import"../chunks-js/chunk.Y2FNDKPS.js";import{a as d}from"../chunks-js/chunk.TTEOHFPJ.js";import"../chunks-js/chunk.HUIMG7FG.js";import"../chunks-js/chunk.P7DBQE4Q.js";import{E as n,m as i}from"../chunks-js/chunk.TJTW5ASN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as o}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import{a as t}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as a,e as r}from"../chunks-js/chunk.L3RZWW2F.js";import{m,p}from"../chunks-js/chunk.BF43NN75.js";m();p();var z={title:"UI Components/DatePicker",component:"omni-date-picker"},x=d.local(),c=x.toISODate(),v=x.locale,S={render:e=>a`
        <omni-date-picker
            data-testid="test-date-picker"
            label="${t(e.label)}"
            value="${t(e.value)}"
            hint="${t(e.hint)}"
            error="${t(e.error)}"
            locale="${e.locale}"
            ?disabled="${e.disabled}"
            ?clearable="${e.clearable}"
            min-date="${t(e.minDate)}"
            max-date="${t(e.maxDate)}"
            >${e.prefix?a`${`\r
`}${o(i("prefix",e.prefix))}`:r}
            ${e.clear?a`${`\r
`}${o(i("clear",e.clear))}`:r}${e.suffix?a`${`\r
`}${o(i("suffix",e.suffix))}`:r}${e.prefix||e.suffix||e.clear?`\r
`:r}</omni-date-picker
        >
    `,frameworkSources:[{framework:"Vue",load:e=>n(S.render(e),void 0,l=>l.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Interactive",args:{label:"Select a Date",value:"",hint:"",error:"",disabled:!1,prefix:"",suffix:"",clear:"",locale:"en-us",maxDate:"",minDate:"",clearable:!1}},G={render:e=>a`
    <omni-date-picker
        data-testid="test-date-picker"
        label="${t(e.label)}"
        value="${e.value}"
    >

    </omni-date-picker>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniDatePicker } from "@capitec/omni-components-react/date-picker";

const App = () => <OmniDatePicker${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""}/>;`}],name:"Value",description:"Set the current value of the Date Picker component.",args:{label:"Value",value:c}},J={render:e=>a`
    <omni-date-picker
        data-testid="test-date-picker"
        label="${t(e.label)}"
        .value="${e.value}"
        locale="${e.locale}"
    >
    </omni-date-picker>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniDatePicker } from "@capitec/omni-components-react/date-picker";

const App = () => <OmniDatePicker${e.label?` label='${e.label}'`:""}${e.locale?` locale='${e.locale}'`:""}/>;`}],name:"Locale",description:"Set the current locale of the Date Picker component.",args:{label:"Locale",locale:v}},K={render:e=>a`
    <omni-date-picker
        data-testid="test-date-picker"
        label="${t(e.label)}"
        min-date="${t(e.minDate)}"
        value="${t(e.value)}"
    >
    </omni-date-picker>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniDatePicker } from "@capitec/omni-components-react/date-picker";

const App = () => <OmniDatePicker${e.label?` label='${e.label}'`:""}${e.minDate?` min-date='${e.minDate}'`:""}${e.value?` value='${e.value}'`:""}/>;`}],name:"Min Date",description:"Limit the Date Picker to only have selectable dates after and including the specified min-date.",args:{minDate:"2023-04-14",value:"2023-04-15"}},Q={render:e=>a`
    <omni-date-picker
        data-testid="test-date-picker"
        label="${t(e.label)}"
        max-date="${t(e.maxDate)}"
        value="${t(e.value)}"
    >
    </omni-date-picker>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniDatePicker } from "@capitec/omni-components-react/date-picker";

const App = () => <OmniDatePicker${e.label?` label='${e.label}'`:""}${e.maxDate?` max-date='${e.maxDate}'`:""}${e.value?` value='${e.value}'`:""}/>;`}],name:"Max Date",description:"Limit the Date Picker to only have selectable dates before and including the specified max-date.",args:{maxDate:"2023-04-14",value:"2023-04-13"}},W=s("omni-date-picker"),X=u("omni-date-picker"),Y=f("omni-date-picker"),Z=$("omni-date-picker",c),g=D("omni-date-picker",c),ee=k("omni-date-picker"),te=b("omni-date-picker"),A={render:e=>a`<omni-date-picker data-testid="test-date-picker" label="${t(e.label)}" value="${e.value}" disabled></omni-date-picker>`,frameworkSources:[{framework:"React",load:e=>`import { OmniDatePicker } from "@capitec/omni-components-react/date-picker";

const App = () => <OmniDatePicker${e.label?` label='${e.label}'`:""}${e.value?` value='${e.value}'`:""} disabled/>;`},{framework:"Vue",load:e=>n(A.render(e),void 0,l=>l.replace(" disabled",' :disabled="true"').replace(" clearable",' :clearable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer/input events).",args:{label:"Disabled",disabled:!0,value:"2022-03-01"}};export{Z as Clearable,g as Custom_Clear_Slot,A as Disabled,Y as Error_Label,X as Hint,S as Interactive,W as Label,J as Locale,Q as Max_Date,K as Min_Date,ee as Prefix,te as Suffix,G as Value,z as default};
//# sourceMappingURL=DatePicker.stories.js.map
