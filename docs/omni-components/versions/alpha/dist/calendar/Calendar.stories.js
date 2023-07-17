import{a}from"../chunks-js/chunk.XCXCHO25.js";import{a as r}from"../chunks-js/chunk.ERPIRXOO.js";import"../chunks-js/chunk.HUIMG7FG.js";import"../chunks-js/chunk.P7DBQE4Q.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t}from"../chunks-js/chunk.L3RZWW2F.js";import{m as n,p as o}from"../chunks-js/chunk.BF43NN75.js";n();o();var S={title:"UI Components/Calendar",component:"omni-calendar"},m=r.local().plus({days:1}),l=m.toISODate(),g={render:e=>t`
    <omni-calendar
        data-testid="test-calendar"
        locale="${a(e.locale)}"
        value="${a(e.value)}"
        min-date="${a(e.minDate)}"
        max-date="${a(e.maxDate)}"
    >       
    </omni-calendar>
    `,name:"Interactive",args:{locale:"",value:"",maxDate:"",minDate:""}},h={render:e=>t`
    <omni-calendar
        data-testid="test-calendar"
        value="${e.value}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${e.value?` value='${e.value}'`:""}/>;`}],name:"Value",description:"Set the value of the Calendar component, this has to be a valid date in ISO format",args:{value:l}},y={render:e=>t`
    <omni-calendar
        data-testid="test-calendar"
        locale="${e.locale}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${e.locale?` locale='${e.locale}'`:""}/>;`}],name:"Locale",description:"Set the locale of the Calendar.",args:{locale:"ja-JP"}},O={render:e=>t`
    <omni-calendar
        data-testid="test-calendar"
        min-date="${a(e.minDate)}"
        value="${a(e.value)}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${e.minDate?` min-date='${e.minDate}'`:""}${e.value?` value='${e.value}'`:""}/>;`}],name:"Min Date",description:"Limit the Calendar to only have selectable dates after and including the specified min-date.",args:{minDate:"2023-04-14",value:"2023-04-15"}},w={render:e=>t`
    <omni-calendar
        data-testid="test-calendar"
        max-date="${a(e.maxDate)}"
        value="${a(e.value)}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${e.maxDate?` max-date='${e.maxDate}'`:""}${e.value?` value='${e.value}'`:""}/>;`}],name:"Max Date",description:"Limit the Calendar to only have selectable dates before and including the specified max-date.",args:{maxDate:"2023-04-14",value:"2023-04-13"}};export{g as Interactive,y as Locale,w as Max_Date,O as Min_Date,h as Value,S as default};
//# sourceMappingURL=Calendar.stories.js.map
