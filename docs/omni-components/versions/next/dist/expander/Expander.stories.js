import"../chunks-js/chunk.MXVEV5WE.js";import"../chunks-js/chunk.7FZFKBOQ.js";import"../chunks-js/chunk.S5KFVCQH.js";import"../chunks-js/chunk.DSDJNIEX.js";import{E as d,m as i,x as r}from"../chunks-js/chunk.5CHB66EF.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZVGMNGQN.js";import"../chunks-js/chunk.AWN7JMZV.js";import"../chunks-js/chunk.SG4R3JV5.js";import"../chunks-js/chunk.ZAPR5LYJ.js";import"../chunks-js/chunk.FW3DTE4B.js";import{a as t}from"../chunks-js/chunk.BRAXTSQY.js";import"../chunks-js/chunk.JIWX2J4S.js";import"../chunks-js/chunk.77M5452K.js";import{a}from"../chunks-js/chunk.A5JWGKKF.js";import"../chunks-js/chunk.SFBF6ZN2.js";import"../chunks-js/chunk.PQH6VL5Y.js";import"../chunks-js/chunk.FMKVMQ43.js";import"../chunks-js/chunk.2KHELDCI.js";import{b as n,e as l}from"../chunks-js/chunk.6H2RNHNO.js";import{m,p}from"../chunks-js/chunk.BF43NN75.js";m();p();var c={render:e=>n`
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
