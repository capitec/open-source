import{a as s}from"../chunks-js/chunk.E72VBRBM.js";import"../chunks-js/chunk.R2NZYSAM.js";import"../chunks-js/chunk.KBFAAENS.js";import{a as d}from"../chunks-js/chunk.RSXCIR4B.js";import{c as n}from"../chunks-js/chunk.VKUMRECO.js";import"../chunks-js/chunk.UN7JNIRZ.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o}from"../chunks-js/chunk.F6MIXR4E.js";import{h as m,m as l,p as c}from"../chunks-js/chunk.BF43NN75.js";l();c();var r=m(d(),1);var T={title:"UI Components/Calendar",component:"omni-calendar"},i=s.local(),p=i.toISODate(),j=i.locale,x={render:e=>o`
    <omni-calendar
        data-testid="test-calendar"
        locale="${e.locale}"
        .value="${e.value}"
    >       
    </omni-calendar>
    `,name:"Interactive",args:{locale:"",value:""},play:async e=>{let a=n(e.canvasElement).getByTestId("test-calendar"),t=r.fn();a.addEventListener("click",t)}},D={render:e=>o`
    <omni-calendar
        data-testid="test-calendar"
        .value="${e.value}"
        >
    </omni-calendar>
    `,name:"Value",description:"Set the value of the Calendar component, this has to be a valid date in ISOformat",args:{value:p},play:async e=>{let a=n(e.canvasElement).getByTestId("test-calendar"),t=r.fn();a.addEventListener("click",t)}},$={render:e=>o`
    <omni-calendar
        data-testid="test-calendar"
        locale="${e.locale}"
        >
    </omni-calendar>
    `,name:"Locale",description:"Set the locale of the Calendar.",args:{locale:"ja-JP"},play:async e=>{let a=n(e.canvasElement).getByTestId("test-calendar"),t=r.fn();a.addEventListener("click",t)}};export{x as Interactive,$ as Locale,D as Value,T as default};
//# sourceMappingURL=Calendar.stories.js.map
