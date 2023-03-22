import{a as i}from"../chunks-js/chunk.MAHZ5XVK.js";import"../chunks-js/chunk.R2NZYSAM.js";import"../chunks-js/chunk.KBFAAENS.js";import{b as o}from"../chunks-js/chunk.MHLMY33S.js";import{x as n}from"../chunks-js/chunk.FB7ASSMP.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import{c as l}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as s}from"../chunks-js/chunk.F6MIXR4E.js";import{m as w,p}from"../chunks-js/chunk.BF43NN75.js";w();p();var J={title:"UI Components/Calendar",component:"omni-calendar"},g=i.local(),v=g.toISODate(),P={render:t=>s`
    <omni-calendar
        data-testid="test-calendar"
        locale="${t.locale}"
        .value="${t.value}"
    >       
    </omni-calendar>
    `,name:"Interactive",args:{locale:"",value:""},play:async t=>{let e=l(t.canvasElement).getByTestId("test-calendar"),r=await n(e.shadowRoot,".control-label");await a(r).toBeTruthy(),await o.click(r),await o.click(r);let d=await n(e.shadowRoot,".year-grid");await a(d).toBeTruthy();let m=[...d.querySelectorAll(".year")].filter(c=>c.textContent==="2020");await a(m[0]).toBeTruthy(),await o.click(m[0]);let y=await n(e.shadowRoot,".month-grid");await a(y).toBeTruthy();let u=[...y.querySelectorAll(".month")].filter(c=>c.textContent==="Dec");await a(u[0]).toBeTruthy(),await o.click(u[0]);let B=await n(e.shadowRoot,".day-grid");await a(B).toBeTruthy();let h=e.shadowRoot.querySelectorAll("div.day > div.day-label")[15];await a(h).toBeTruthy(),await o.click(h)}},U={render:t=>s`
    <omni-calendar
        data-testid="test-calendar"
        .value="${t.value}"
        >
    </omni-calendar>
    `,name:"Value",description:"Set the value of the Calendar component, this has to be a valid date in ISOformat",args:{value:v},play:async t=>{let e=l(t.canvasElement).getByTestId("test-calendar"),r=i.fromISO(v);await a(e).toHaveValue(r.toISODate())}},z={render:t=>s`
    <omni-calendar
        data-testid="test-calendar"
        locale="${t.locale}"
        >
    </omni-calendar>
    `,name:"Locale",description:"Set the locale of the Calendar.",args:{locale:"ja-JP"},play:async t=>{let e=l(t.canvasElement).getByTestId("test-calendar");await a(e).toHaveAttribute("locale","ja-JP")}};export{P as Interactive,z as Locale,U as Value,J as default};
//# sourceMappingURL=Calendar.stories.js.map
