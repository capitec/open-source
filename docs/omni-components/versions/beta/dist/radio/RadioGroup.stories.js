import"../chunks-js/chunk.OQVC4CQU.js";import"../chunks-js/chunk.AFFACXUD.js";import"../chunks-js/chunk.BRGMWPWN.js";import"../chunks-js/chunk.RTZAZGF5.js";import"../chunks-js/chunk.VAH5TOPR.js";import{E as r,x as d}from"../chunks-js/chunk.OQGANNKN.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.D4QWJ7ZS.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as t}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.LB764BBD.js";import{a as n}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as e}from"../chunks-js/chunk.L3RZWW2F.js";import{m as i,p as l}from"../chunks-js/chunk.BF43NN75.js";i();l();var m={render:o=>e`
    <omni-radio-group data-testid="test-radio-group" label="${n(o.label)}" ?allow-deselect="${o["allow-deselect"]}" ?horizontal="${o.horizontal}">
      ${t(o["[Default Slot]"])}
    </omni-radio-group>
  `,frameworkSources:[{framework:"Vue",load:o=>r(m.render(o),void 0,a=>a.replace(" horizontal",' :horizontal="true"').replace(" allow-deselect",' :allow-deselect="true"'))}],name:"Interactive",args:{label:"Radio Group","allow-deselect":!1,horizontal:!1,"[Default Slot]":d`<omni-radio label="One" data-testid="test-radio"></omni-radio> 
<omni-radio label="Two" disabled></omni-radio> 
<omni-radio label="Three"></omni-radio>`}},v={render:o=>e`
    <omni-radio-group data-testid="test-radio-group" label="${o.label}" >
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" ></omni-radio> 
        <omni-radio label="Three"></omni-radio> 
    </omni-radio-group>`,frameworkSources:[{framework:"React",load:o=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadioGroup label="${o.label}">
                    <OmniRadio label="One" /> 
                    <OmniRadio label="Two" /> 
                    <OmniRadio label="Three"/> 
                  </OmniRadioGroup>;`}],description:"Set a text value to display for the component.",args:{label:"Label"}},p={render:o=>e`
    <omni-radio-group data-testid="test-radio-group" label="${o.label}" ?horizontal="${o.horizontal}">
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" ></omni-radio> 
        <omni-radio label="Three"></omni-radio> 
    </omni-radio-group>`,frameworkSources:[{framework:"React",load:o=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadioGroup label="${o.label}" horizontal>
                    <OmniRadio label="One" /> 
                    <OmniRadio label="Two" /> 
                    <OmniRadio label="Three"/> 
                  </OmniRadioGroup>;`},{framework:"Vue",load:o=>r(p.render(o),void 0,a=>a.replace(" horizontal",' :horizontal="true"').replace(" allow-deselect",' :allow-deselect="true"'))}],description:"Arrange radio elements horizontally.",args:{label:"Horizontal",horizontal:!0}},c={render:o=>e`
    <omni-radio-group data-testid="test-radio-group" label="${o.label}" ?allow-deselect="${o["allow-deselect"]}">
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" checked  data-testid="test-radio"></omni-radio>  
        <input type="radio" id="native_radio_2" />
        <label for="native_radio_2">Three</label><br>
    </omni-radio-group>`,frameworkSources:[{framework:"React",load:o=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadioGroup label="${o.label}" allow-deselect>
                    <OmniRadio label="One" /> 
                    <OmniRadio label="Two" checked/> 
                    <input type="radio" id="native_radio_2" />
                    <label for="native_radio_2">Three</label><br/>
                  </OmniRadioGroup>;`},{framework:"Vue",load:o=>r(c.render(o),void 0,a=>a.replace(" horizontal",' :horizontal="true"').replace(" allow-deselect",' :allow-deselect="true"'))}],description:"Allow radios in the group to be deselected.",args:{label:"Allow Deselect","allow-deselect":!0}},$={render:o=>e` 
            <omni-radio-group label="${o.label}">
                <omni-radio label="One"></omni-radio> 
                <input type="radio" id="native_radio" />
                <label for="native_radio">Two</label><br>
                <omni-switch label="Three"></omni-switch> 
                <omni-radio label="Four"></omni-radio> 
            </omni-radio-group>
        `,frameworkSources:[{framework:"React",load:o=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";
import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniRadioGroup label="${o.label}">
                    <OmniRadio label="One" /> 
                    <input type="radio" id="native_radio" />
                    <label for="native_radio">Two</label><br/>
                    <OmniSwitch label="Three"/> 
                    <OmniRadio label="Four"/> 
                  </OmniRadioGroup>;`}],description:'Grouping supports native input with type="radio" as well as omni-radio (and any other element that is driven by a checked attribute).',args:{label:"Group with alternate elements"}};export{c as Allow_Deselect,p as Horizontal,m as Interactive,v as Label,$ as Native_Radio_Input};
//# sourceMappingURL=RadioGroup.stories.js.map
