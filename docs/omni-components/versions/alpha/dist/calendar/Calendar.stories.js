import{a as i}from"../chunks-js/chunk.5AMKH662.js";import"../chunks-js/chunk.R2NZYSAM.js";import"../chunks-js/chunk.KBFAAENS.js";import{b as o}from"../chunks-js/chunk.MHLMY33S.js";import{x as r}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import{c as l}from"../chunks-js/chunk.N6OKW4B2.js";import{d as a}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as s}from"../chunks-js/chunk.F6MIXR4E.js";import{m as p,p as v}from"../chunks-js/chunk.BF43NN75.js";p();v();var P={title:"UI Components/Calendar",component:"omni-calendar"},S=i.local(),B=S.toISODate(),U={render:t=>s`
    <omni-calendar
        data-testid="test-calendar"
        locale="${t.locale}"
        .value="${t.value}"
    >       
    </omni-calendar>
    `,name:"Interactive",args:{locale:"",value:""},play:async t=>{var w;let e=l(t.canvasElement).getByTestId("test-calendar"),n=await r(e.shadowRoot,".control-label");await a(n).toBeTruthy(),await o.click(n),await o.click(n);let d=await r(e.shadowRoot,".year-grid");await a(d).toBeTruthy();let m=[...d.querySelectorAll(".year")].filter(c=>c.textContent==="2020");await a(m[0]).toBeTruthy(),await o.click(m[0]);let y=await r(e.shadowRoot,".month-grid");await a(y).toBeTruthy();let u=[...y.querySelectorAll(".month")].filter(c=>c.textContent==="Dec");await a(u[0]).toBeTruthy(),await o.click(u[0]);let g=await r(e.shadowRoot,".day-grid");await a(g).toBeTruthy();let h=(w=e.shadowRoot)==null?void 0:w.querySelectorAll("div.day > div.day-label")[15];await a(h).toBeTruthy(),await o.click(h)}},z={render:t=>s`
    <omni-calendar
        data-testid="test-calendar"
        .value="${t.value}"
        >
    </omni-calendar>
    `,name:"Value",description:"Set the value of the Calendar component, this has to be a valid date in ISO format",args:{value:B},play:async t=>{let e=l(t.canvasElement).getByTestId("test-calendar"),n=i.fromISO(B);await a(e).toHaveValue(n.toISODate())}},K={render:t=>s`
    <omni-calendar
        data-testid="test-calendar"
        locale="${t.locale}"
        >
    </omni-calendar>
    `,name:"Locale",description:"Set the locale of the Calendar.",args:{locale:"ja-JP"},play:async t=>{let e=l(t.canvasElement).getByTestId("test-calendar");await a(e).toHaveAttribute("locale","ja-JP")}};export{U as Interactive,K as Locale,z as Value,P as default};
//# sourceMappingURL=Calendar.stories.js.map
