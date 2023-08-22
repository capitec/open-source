import"../chunks-js/chunk.RCOB6GLW.js";import"../chunks-js/chunk.YIANFESX.js";import"../chunks-js/chunk.5QA4HYF6.js";import"../chunks-js/chunk.MW4VXBNP.js";import{E as d,m as i,x as r}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as t}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as n,e as l}from"../chunks-js/chunk.L3RZWW2F.js";import{m,p}from"../chunks-js/chunk.BF43NN75.js";m();p();var c={render:e=>n`
    <omni-expander
        data-testid="test-expander"
        label="${a(e.label)}"
        ?disabled="${e.disabled}"
        ?expanded="${e.expanded}"
        button-alignment="${e.buttonAlignment}"
    >
        ${e.expand_icon?n`${`\r
`}${t(i("expand-icon",e.expand_icon))}`:l}
        ${e.header_icon?n`${`\r
`}${t(i("header-icon",e.header_icon))}`:l}
        ${e["[Default Slot]"]?n`${`\r
`}${t(e["[Default Slot]"])}`:l}
    </omni-expander>
    `,name:"Interactive",frameworkSources:[{framework:"Vue",load:e=>d(c.render(e),void 0,o=>o.replace(" disabled",' :disabled="true"').replace(" expanded",' :expanded="true"'))}],args:{label:"Interactive Expander","[Default Slot]":r`<omni-label label="The content of the expander"></omni-label>`,disabled:!1,expanded:!1,buttonAlignment:"right",expand_icon:"",header_icon:""}},b={render:e=>n`
    <omni-expander
        data-testid="test-expander"
        label="${a(e.label)}"
        ?disabled="${e.disabled}"
    >
        <omni-label label="I shall not be seen"></omni-label>
    </omni-expander>
    `,name:"Disabled",frameworkSources:[{framework:"Vue",load:e=>d(b.render(e),void 0,o=>o.replace(" disabled",' :disabled="true"'))},{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => 
<OmniExpander ${e.label?` label='${e.label}'`:""} ${e.disabled?` disabled='${e.disabled}'`:""}>
    <OmniLabel label="I shall not be seen"></OmniLabel>
</OmniExpander>;`}],description:"Prevent interaction (expanding/collapsing).",args:{label:"Disabled expander",disabled:!0}},C={render:e=>n`
    <omni-expander 
        data-testid="test-expander"
        label="${a(e.label)}"
        button-alignment="${e.buttonAlignment}"
    >
        <omni-label label='The content of the expander'></omni-label>
    </omni-expander>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => 
<OmniExpander ${e.label?` label='${e.label}'`:""} ${e.buttonAlignment?` button-alignment='${e.buttonAlignment}'`:""}>
    <OmniLabel label="The content of the expander"></OmniLabel>
</OmniExpander>;`}],name:"Button Alignment",description:"Toggle where the expand button should be oriented.",args:{label:"Left aligned button",buttonAlignment:"left"}},s={render:e=>n`
    <omni-expander
        data-testid="test-expander"
        label="${a(e.label)}"
        expanded="${e.expanded}"   
    >
        <omni-label label="The content of the expander"></omni-label>
    </omni-expander>
    `,name:"Expanded",frameworkSources:[{framework:"Vue",load:e=>d(s.render(e),void 0,o=>o.replace(" expanded",' :expanded="true"'))},{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => 
<OmniExpander ${e.label?` label='${e.label}'`:""} ${e.expanded?` expanded='${e.expanded}'`:""}>
    <OmniLabel label="The content of the expander"></OmniLabel>
</OmniExpander>;`}],description:"Toggle expander expanded state",args:{label:"Expanded expander state",expanded:!0}},F={render:e=>n`
    <omni-expander data-testid="test-expander" label="${a(e.label)}">
        ${t(e.expand_icon)}
        <omni-label label="The content of the expander"></omni-label>
    </omni-expander>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () =>
<OmniExpander${e.label?` label='${e.label}'`:""}>
    <svg slot="expand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>
    <OmniLabel label="The content of the expander"></OmniLabel>
</OmniExpander>;`}],name:"Slotted Expand Icon",description:"Custom slotted expand icon",args:{label:"Slotted Expand Icon",expand_icon:r`<svg slot="expand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>`}},D={render:e=>n`
    <omni-expander data-testid="test-expander" label="${a(e.label)}">
        ${t(e.header_icon)}       
        <omni-label label="The content of the expander"></omni-label>
    </omni-expander>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniExpander } from "@capitec/omni-components-react/expander";
import { OmniLabel } from "@capitec/omni-components-react/label";

const App = () => 
<OmniExpander${e.label?` label='${e.label}'`:""}>
    <svg slot="header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>
    <OmniLabel label="The content of the expander"></OmniLabel>
</OmniExpander>;`}],name:"Slotted Header Icon",description:"Custom slotted header icon",args:{label:"Slotted Header Icon",header_icon:r`<svg slot="header-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>`}};export{C as Button_Alignment,b as Disabled,F as Expand_Icon,s as Expanded,D as Header_Icon,c as Interactive};
//# sourceMappingURL=Expander.stories.js.map
