import"../chunks-js/chunk.J3C6LRMJ.js";import"../chunks-js/chunk.KEZPJAMB.js";import"../chunks-js/chunk.MW4VXBNP.js";import{E as l,m as r,x as m}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as d}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as t}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,e as o}from"../chunks-js/chunk.L3RZWW2F.js";import{m as p,p as s}from"../chunks-js/chunk.BF43NN75.js";p();s();var i={render:e=>n`
    <omni-expander
        data-testid="test-expander"
        label="${t(e.label)}"
        ?disabled="${e.disabled}"
        ?expanded="${e.expanded}"
        button-alignment="${e.buttonAlignment}"
    >
        ${e.expand_icon?n`${`\r
`}${d(r("expand-icon",e.expand_icon))}`:o}
        ${e.header_icon?n`${`\r
`}${d(r("header-icon",e.header_icon))}`:o}
        ${e["[Default Slot]"]?n`${`\r
`}${d(e["[Default Slot]"])}`:o}
    </omni-expander>
    `,name:"Interactive",frameworkSources:[{framework:"Vue",load:e=>l(i.render(e),void 0,a=>a.replace(" disabled",' :disabled="true"').replace(" expanded",' :expanded="true"'))}],description:"This is the Expander group component with a nest Expander component",args:{label:"Interactive Expander","[Default Slot]":m`<omni-label label="The content of the expander"></omni-label>`,disabled:!1,expanded:!1,buttonAlignment:"right",expand_icon:"",header_icon:""}},F={render:e=>n`
    <omni-expander
        data-testid="test-expander"
        label="${t(e.label)}"
        ?disabled="${e.disabled}"
    >
        <omni-label label="I shall not be seen"></omni-label>
    </omni-expander>
    `,name:"Disabled",frameworkSources:[{framework:"Vue",load:e=>l(i.render(e),void 0,a=>a.replace(" disabled",' :disabled="true"'))}],description:"This is the Expander component when disabled",args:{label:"Disabled expander",disabled:!0}},C={render:e=>n`
    <omni-expander 
        data-testid="test-expander"
        label="${t(e.label)}"
        button-alignment="${e.buttonAlignment}"
    >
        <omni-label label='The content of the expander'></omni-label>
    </omni-expander>
    `,name:"Button Alignment",description:"This is the Expander component with button alignment set to opposite of the default.",args:{label:"Left aligned button",buttonAlignment:"left"}},D={render:e=>n`
    <omni-expander
        data-testid="test-expander"
        label="${t(e.label)}"
        expanded="${e.expanded}"   
    >
        <omni-label label="The content of the expander"></omni-label>
    </omni-expander>
    `,name:"Expanded",frameworkSources:[{framework:"Vue",load:e=>l(i.render(e),void 0,a=>a.replace(" expanded",' :expanded="true"'))}],description:"Expander component can be expanded by default via setting the expanded attribute",args:{label:"Expanded expander state",expanded:!0}},k={render:e=>n`
    <omni-expander data-testid="test-expander" label="${t(e.label)}">
    <svg slot="expand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
        <omni-label label="The content of the expander"></omni-label>
    </omni-expander>
    `,name:"Slotted Expand Icon",description:"Expander with custom slotted icon in the expand icon slot",args:{label:"Slotted Expand Icon"}},Z={render:e=>n`
    <omni-expander data-testid="test-expander" label="${t(e.label)}">
        <svg slot="header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
        <omni-label label="The content of the expander"></omni-label>
    </omni-expander>
    `,name:"Slotted Header Icon",description:"The content of the expander",args:{label:"Slotted Header Icon"}};export{C as Button_Alignment,F as Disabled,k as Expand_Icon,D as Expanded,Z as Header_Icon,i as Interactive};
//# sourceMappingURL=Expander.stories.js.map
