import{a as e}from"../chunks-js/chunk.W7VHYLAH.js";import{a as r}from"../chunks-js/chunk.STNTOOHJ.js";import"../chunks-js/chunk.MAAP7R7W.js";import"../chunks-js/chunk.JUYQHF7U.js";import"../chunks-js/chunk.BN6ZLWW4.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as t}from"../chunks-js/chunk.63YMDT6M.js";import{m as n,p as o}from"../chunks-js/chunk.BF43NN75.js";n();o();var l=r.local().plus({days:1}),m=l.toISODate(),g={render:a=>t`
    <omni-calendar
        data-testid="test-calendar"
        locale="${e(a.locale)}"
        value="${e(a.value)}"
        min-date="${e(a.minDate)}"
        max-date="${e(a.maxDate)}"
    >       
    </omni-calendar>
    `,name:"Interactive",args:{locale:"",value:"",maxDate:"",minDate:""}},S={render:a=>t`
    <omni-calendar
        data-testid="test-calendar"
        value="${a.value}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:a=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${a.value?` value='${a.value}'`:""}/>;`}],name:"Value",description:"Set the value of the Calendar component, this has to be a valid date in ISO format",args:{value:m}},h={render:a=>t`
    <omni-calendar
        data-testid="test-calendar"
        locale="${a.locale}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:a=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${a.locale?` locale='${a.locale}'`:""}/>;`}],name:"Locale",description:"Set the locale of the Calendar.",args:{locale:"ja-JP"}},y={render:a=>t`
    <omni-calendar
        data-testid="test-calendar"
        min-date="${e(a.minDate)}"
        value="${e(a.value)}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:a=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${a.minDate?` min-date='${a.minDate}'`:""}${a.value?` value='${a.value}'`:""}/>;`}],name:"Min Date",description:"Limit the Calendar to only have selectable dates after and including the specified min-date.",args:{minDate:"2023-04-14",value:"2023-04-15"}},O={render:a=>t`
    <omni-calendar
        data-testid="test-calendar"
        max-date="${e(a.maxDate)}"
        value="${e(a.value)}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:a=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${a.maxDate?` max-date='${a.maxDate}'`:""}${a.value?` value='${a.value}'`:""}/>;`}],name:"Max Date",description:"Limit the Calendar to only have selectable dates before and including the specified max-date.",args:{maxDate:"2023-04-14",value:"2023-04-13"}};export{g as Interactive,h as Locale,O as Max_Date,y as Min_Date,S as Value};
//# sourceMappingURL=Calendar.stories.js.map
