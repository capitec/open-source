import"../chunks-js/chunk.XXR2ZL4M.js";import"../chunks-js/chunk.JI6JRLQR.js";import"../chunks-js/chunk.MW4VXBNP.js";import{E as r,m as d,x as c}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as l}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,e as o}from"../chunks-js/chunk.L3RZWW2F.js";import{m as p,p as m}from"../chunks-js/chunk.BF43NN75.js";p();m();var i={render:e=>n`
    <omni-expander
        data-testid="test-expander"
        label="${a(e.label)}"
        ?disabled="${e.disabled}"
        ?expanded="${e.expanded}"
        button-alignment="${e.buttonAlignment}"
    >
        ${e.expand_icon?n`${`\r
`}${l(d("expand-icon",e.expand_icon))}`:o}
        ${e.header_icon?n`${`\r
`}${l(d("header-icon",e.header_icon))}`:o}
        ${e["[Default Slot]"]?n`${`\r
`}${l(e["[Default Slot]"])}`:o}
    </omni-expander>
    `,name:"Interactive",frameworkSources:[{framework:"Vue",load:e=>r(i.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"').replace(" expanded",' :expanded="true"'))}],args:{label:"Interactive Expander","[Default Slot]":c`<omni-label label="The content of the expander"></omni-label>`,disabled:!1,expanded:!1,buttonAlignment:"right",expand_icon:"",header_icon:""}},Z={render:e=>n`
    <omni-expander
        data-testid="test-expander"
        label="${a(e.label)}"
        ?disabled="${e.disabled}"
    >
        <omni-label label="I shall not be seen"></omni-label>
    </omni-expander>
    `,name:"Disabled",frameworkSources:[{framework:"Vue",load:e=>r(i.render(e),void 0,t=>t.replace(" disabled",' :disabled="true"'))},{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
            import { OmniLabel } from "@capitec/omni-components-react/label";
        
            const App = () => <OmniExpander ${e.label?` label='${e.label}'`:""} ${e.disabled?` disabled='${e.disabled}'`:""}>
             <OmniLabel label="I shall not be seen"></OmniLabel>
            </OmniExpander>;`}],description:"Prevent interaction (expanding/collapsing).",args:{label:"Disabled expander",disabled:!0}},I={render:e=>n`
    <omni-expander 
        data-testid="test-expander"
        label="${a(e.label)}"
        button-alignment="${e.buttonAlignment}"
    >
        <omni-label label='The content of the expander'></omni-label>
    </omni-expander>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
        import { OmniLabel } from "@capitec/omni-components-react/label";
    
        const App = () => <OmniExpander ${e.label?` label='${e.label}'`:""} ${e.buttonAlignment?` button-alignment='${e.buttonAlignment}'`:""}>
         <OmniLabel label="The content of the expander"></OmniLabel>
        </OmniExpander>;`}],name:"Button Alignment",description:"Toggle where the expand button should be oriented.",args:{label:"Left aligned button",buttonAlignment:"left"}},_={render:e=>n`
    <omni-expander
        data-testid="test-expander"
        label="${a(e.label)}"
        expanded="${e.expanded}"   
    >
        <omni-label label="The content of the expander"></omni-label>
    </omni-expander>
    `,name:"Expanded",frameworkSources:[{framework:"Vue",load:e=>r(i.render(e),void 0,t=>t.replace(" expanded",' :expanded="true"'))},{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
            import { OmniLabel } from "@capitec/omni-components-react/label";
        
            const App = () => <OmniExpander ${e.label?` label='${e.label}'`:""} ${e.expanded?` expanded='${e.expanded}'`:""}>
             <OmniLabel label="The content of the expander"></OmniLabel>
            </OmniExpander>;`}],description:"Toggle expander expanded state",args:{label:"Expanded expander state",expanded:!0}},C={render:e=>n`
    <omni-expander data-testid="test-expander" label="${a(e.label)}">
    <svg slot="expand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
        <omni-label label="The content of the expander"></omni-label>
    </omni-expander>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
                import { OmniLabel } from "@capitec/omni-components-react/label";
            
                const App = () => <OmniExpander${e.label?` label='${e.label}'`:""}>
                 <svg slot="expand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
                 <OmniLabel label="The content of the expander"></OmniLabel>
                </OmniExpander>;`}],name:"Slotted Expand Icon",description:"Custom slotted expand icon",args:{label:"Slotted Expand Icon"}},M={render:e=>n`
    <omni-expander data-testid="test-expander" label="${a(e.label)}">
        <svg slot="header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
        <omni-label label="The content of the expander"></omni-label>
    </omni-expander>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
            import { OmniLabel } from "@capitec/omni-components-react/label";
        
            const App = () => <OmniExpander${e.label?` label='${e.label}'`:""}>
             <svg slot="header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24px" height="24px" style="fill: orange;"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 0 1.06L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-1.06 0L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1 0-1.06L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976Z" /></svg>
             <OmniLabel label="The content of the expander"></OmniLabel>
            </OmniExpander>;`}],name:"Slotted Header Icon",description:"Custom slotted header icon",args:{label:"Slotted Header Icon"}};export{I as Button_Alignment,Z as Disabled,C as Expand_Icon,_ as Expanded,M as Header_Icon,i as Interactive};
//# sourceMappingURL=Expander.stories.js.map
