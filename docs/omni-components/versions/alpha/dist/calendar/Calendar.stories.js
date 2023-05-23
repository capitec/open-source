import{a as y}from"../chunks-js/chunk.5FNBLYOK.js";import"../chunks-js/chunk.R2NZYSAM.js";import"../chunks-js/chunk.KBFAAENS.js";import{b as n}from"../chunks-js/chunk.MHLMY33S.js";import{y as u}from"../chunks-js/chunk.G6V5HYSG.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as r}from"../chunks-js/chunk.6QCQBNRL.js";import{c as d}from"../chunks-js/chunk.N6OKW4B2.js";import{d as t}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as m}from"../chunks-js/chunk.F6MIXR4E.js";import{m as C,p as A}from"../chunks-js/chunk.BF43NN75.js";C();A();var _={title:"UI Components/Calendar",component:"omni-calendar"},g=y.local().plus({days:1}),D=g.toISODate(),U={render:a=>m`
    <omni-calendar
        data-testid="test-calendar"
        locale="${r(a.locale)}"
        value="${r(a.value)}"
        min-date="${r(a.minDate)}"
        max-date="${r(a.maxDate)}"
    >       
    </omni-calendar>
    `,name:"Interactive",args:{locale:"",value:"",maxDate:"",minDate:""},play:async a=>{var f;let e=d(a.canvasElement).getByTestId("test-calendar"),o=await u(e.shadowRoot,".control-label");await t(o).toBeTruthy(),await n.click(o),await n.click(o);let l=await u(e.shadowRoot,".year-grid");await t(l).toBeTruthy();let c=[...l.querySelectorAll(".year")].filter(p=>p.textContent==="2020");await t(c[0]).toBeTruthy(),await n.click(c[0]);let v=await u(e.shadowRoot,".month-grid");await t(v).toBeTruthy();let w=[...v.querySelectorAll(".month")].filter(p=>p.textContent==="Dec");await t(w[0]).toBeTruthy(),await n.click(w[0]);let S=await u(e.shadowRoot,".day-grid");await t(S).toBeTruthy();let h=(f=e.shadowRoot)==null?void 0:f.querySelectorAll("div.day > div.day-label")[15];await t(h).toBeTruthy(),await n.click(h)}},z={render:a=>m`
    <omni-calendar
        data-testid="test-calendar"
        value="${a.value}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:a=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${a.value?` value='${a.value}'`:""}/>;`}],name:"Value",description:"Set the value of the Calendar component, this has to be a valid date in ISO format",args:{value:D},play:async a=>{let e=d(a.canvasElement).getByTestId("test-calendar"),o=y.fromISO(D);await t(e).toHaveValue(o.toISODate())}},K={render:a=>m`
    <omni-calendar
        data-testid="test-calendar"
        locale="${a.locale}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:a=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${a.locale?` locale='${a.locale}'`:""}/>;`}],name:"Locale",description:"Set the locale of the Calendar.",args:{locale:"ja-JP"},play:async a=>{let e=d(a.canvasElement).getByTestId("test-calendar");await t(e).toHaveAttribute("locale","ja-JP")}},Q={render:a=>m`
    <omni-calendar
        data-testid="test-calendar"
        min-date="${r(a.minDate)}"
        value="${r(a.value)}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:a=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${a.minDate?` min-date='${a.minDate}'`:""}${a.value?` value='${a.value}'`:""}/>;`}],name:"Min Date",description:"Limit the Calendar to only have selectable dates after and including the specified min-date.",args:{minDate:"2023-04-14",value:"2023-04-15"},play:async a=>{var c;let e=d(a.canvasElement).getByTestId("test-calendar");e.value=a.args.value,await t(e).toHaveAttribute("min-date",a.args.minDate);let o=Array.from((c=e.shadowRoot)==null?void 0:c.querySelectorAll(".day")),l=o[17];await t(l).toHaveClass("excluded");let i=e.value;await n.click(l,{pointerEventsCheck:0}),await t(e).toHaveValue(i);let s=o[20];await t(s).not.toHaveClass("excluded"),await n.click(s,{pointerEventsCheck:0}),await t(e).not.toHaveValue(i)}},W={render:a=>m`
    <omni-calendar
        data-testid="test-calendar"
        max-date="${r(a.maxDate)}"
        value="${r(a.value)}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:a=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${a.maxDate?` max-date='${a.maxDate}'`:""}${a.value?` value='${a.value}'`:""}/>;`}],name:"Max Date",description:"Limit the Calendar to only have selectable dates before and including the specified max-date.",args:{maxDate:"2023-04-14",value:"2023-04-13"},play:async a=>{var c;let e=d(a.canvasElement).getByTestId("test-calendar");e.value=a.args.value,await t(e).toHaveAttribute("max-date",a.args.maxDate);let o=Array.from((c=e.shadowRoot)==null?void 0:c.querySelectorAll(".day")),l=o[20];await t(l).toHaveClass("excluded");let i=e.value;await n.click(l,{pointerEventsCheck:0}),await t(e).toHaveValue(i);let s=o[15];await t(s).not.toHaveClass("excluded"),await n.click(s,{pointerEventsCheck:0}),await t(e).not.toHaveValue(i)}};export{U as Interactive,K as Locale,W as Max_Date,Q as Min_Date,z as Value,_ as default};
//# sourceMappingURL=Calendar.stories.js.map
