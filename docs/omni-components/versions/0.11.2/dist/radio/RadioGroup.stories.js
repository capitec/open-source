import"../chunks-js/chunk.ART4F7UD.js";import"../chunks-js/chunk.ZPXM6WH2.js";import"../chunks-js/chunk.BRGMWPWN.js";import"../chunks-js/chunk.B4ZU66OP.js";import"../chunks-js/chunk.BRR7CGL2.js";import{E as r,x as d}from"../chunks-js/chunk.TLDOTCP4.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.VRVI2LVR.js";import"../chunks-js/chunk.NLDNET67.js";import"../chunks-js/chunk.MQIQXPFF.js";import"../chunks-js/chunk.YRSGKD7J.js";import"../chunks-js/chunk.6DDAVEXD.js";import{a as t}from"../chunks-js/chunk.2T6FOQVU.js";import"../chunks-js/chunk.BNDN7Y77.js";import"../chunks-js/chunk.3F3IIFA7.js";import{a as n}from"../chunks-js/chunk.W7VHYLAH.js";import"../chunks-js/chunk.YTU7KEBB.js";import"../chunks-js/chunk.ZTHUBORR.js";import"../chunks-js/chunk.4PFNWG2J.js";import{d as e}from"../chunks-js/chunk.63YMDT6M.js";import{m as i,p as l}from"../chunks-js/chunk.BF43NN75.js";i();l();var m={render:o=>e`
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
