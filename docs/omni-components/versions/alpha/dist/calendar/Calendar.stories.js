import{a as s}from"../chunks-js/chunk.ZKFRSIFH.js";import"../chunks-js/chunk.T2RQBJXA.js";import"../chunks-js/chunk.K2KZ5S7S.js";import{a as d}from"../chunks-js/chunk.IPQWBGOC.js";import{c as n}from"../chunks-js/chunk.25QDP255.js";import"../chunks-js/chunk.B62LVUNQ.js";import"../chunks-js/chunk.YPV66JA3.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as o}from"../chunks-js/chunk.CIM3NS6G.js";import{h as m,l,o as c}from"../chunks-js/chunk.2ZZQBHAA.js";l();c();var r=m(d(),1);var T={title:"UI Components/Calendar",component:"omni-calendar"},i=s.local(),p=i.toISODate(),j=i.locale,x={render:e=>o`
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
