import{a as m}from"../chunks-js/chunk.5AMKH662.js";import"../chunks-js/chunk.R2NZYSAM.js";import"../chunks-js/chunk.KBFAAENS.js";import{b as o}from"../chunks-js/chunk.MHLMY33S.js";import{y as n}from"../chunks-js/chunk.BM33DA64.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as i}from"../chunks-js/chunk.PJH7M65U.js";import{c as l}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as c}from"../chunks-js/chunk.F6MIXR4E.js";import{m as f,p as v}from"../chunks-js/chunk.BF43NN75.js";f();v();var U={title:"UI Components/Calendar",component:"omni-calendar"},B=m.local().plus({days:1}),S=B.toISODate(),z={render:t=>c`
    <omni-calendar
        data-testid="test-calendar"
        locale="${i(t.locale)}"
        value="${i(t.value)}"
    >       
    </omni-calendar>
    `,name:"Interactive",args:{locale:"",value:""},play:async t=>{var w;let e=l(t.canvasElement).getByTestId("test-calendar"),r=await n(e.shadowRoot,".control-label");await a(r).toBeTruthy(),await o.click(r),await o.click(r);let d=await n(e.shadowRoot,".year-grid");await a(d).toBeTruthy();let y=[...d.querySelectorAll(".year")].filter(s=>s.textContent==="2020");await a(y[0]).toBeTruthy(),await o.click(y[0]);let u=await n(e.shadowRoot,".month-grid");await a(u).toBeTruthy();let p=[...u.querySelectorAll(".month")].filter(s=>s.textContent==="Dec");await a(p[0]).toBeTruthy(),await o.click(p[0]);let A=await n(e.shadowRoot,".day-grid");await a(A).toBeTruthy();let h=(w=e.shadowRoot)==null?void 0:w.querySelectorAll("div.day > div.day-label")[15];await a(h).toBeTruthy(),await o.click(h)}},K={render:t=>c`
    <omni-calendar
        data-testid="test-calendar"
        value="${t.value}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:t=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${t.value?` value='${t.value}'`:""}/>;`}],name:"Value",description:"Set the value of the Calendar component, this has to be a valid date in ISO format",args:{value:S},play:async t=>{let e=l(t.canvasElement).getByTestId("test-calendar"),r=m.fromISO(S);await a(e).toHaveValue(r.toISODate())}},Q={render:t=>c`
    <omni-calendar
        data-testid="test-calendar"
        locale="${t.locale}"
        >
    </omni-calendar>
    `,frameworkSources:[{framework:"React",load:t=>`import { OmniCalendar } from "@capitec/omni-components-react/calendar";

const App = () => <OmniCalendar${t.locale?` locale='${t.locale}'`:""}/>;`}],name:"Locale",description:"Set the locale of the Calendar.",args:{locale:"ja-JP"},play:async t=>{let e=l(t.canvasElement).getByTestId("test-calendar");await a(e).toHaveAttribute("locale","ja-JP")}};export{z as Interactive,Q as Locale,K as Value,U as default};
//# sourceMappingURL=Calendar.stories.js.map
