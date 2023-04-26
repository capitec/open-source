import"../chunks-js/chunk.XGMN45FM.js";import"../chunks-js/chunk.3F3UUWFE.js";import"../chunks-js/chunk.BRGMWPWN.js";import"../chunks-js/chunk.TBKWSV63.js";import"../chunks-js/chunk.5TKLJSC4.js";import{a as E}from"../chunks-js/chunk.IRJIQSYL.js";import{a as g}from"../chunks-js/chunk.G3QHRCKP.js";import{b as l}from"../chunks-js/chunk.MHLMY33S.js";import{w as R}from"../chunks-js/chunk.R2G2NSIY.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as f}from"../chunks-js/chunk.PJH7M65U.js";import{c as n}from"../chunks-js/chunk.N6OKW4B2.js";import{d as r}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as m}from"../chunks-js/chunk.F6MIXR4E.js";import{h as v,m as h,p as w}from"../chunks-js/chunk.BF43NN75.js";h();w();var b=v(E(),1);var U={title:"UI Components/Radio Group",component:"omni-radio-group"},J={render:e=>m`
    <omni-radio-group data-testid="test-radio-group" label="${f(e.label)}" ?allow-deselect="${e["allow-deselect"]}" ?horizontal="${e.horizontal}">
      ${g(e["[Default Slot]"])}
    </omni-radio-group>
  `,name:"Interactive",args:{label:"Radio Group","allow-deselect":!1,horizontal:!1,"[Default Slot]":R`<omni-radio label="One" data-testid="test-radio"></omni-radio> 
<omni-radio label="Two" disabled></omni-radio> 
<omni-radio label="Three"></omni-radio>`},play:async e=>{var p;let t=n(e.canvasElement).getByTestId("test-radio-group"),a=n(e.canvasElement).getByTestId("test-radio");t.focus();let o=(p=a.shadowRoot)==null?void 0:p.getElementById("content");a.checked&&await l.click(o,{pointerEventsCheck:0});let i=b.fn(),s,c=d=>{s=d.detail.current,i()};t.addEventListener("radio-change",d=>c(d)),await l.click(o,{pointerEventsCheck:0}),await r(i).toBeCalledTimes(1),await r(s).toBe(a),t.allowDeselect=!0,await l.click(o,{pointerEventsCheck:0}),t.allowDeselect=!1}},K={render:e=>m`
    <omni-radio-group data-testid="test-radio-group" label="${e.label}" >
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" ></omni-radio> 
        <omni-radio label="Three"></omni-radio> 
    </omni-radio-group>`,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadioGroup label="${e.label}">
                    <OmniRadio label="One" /> 
                    <OmniRadio label="Two" /> 
                    <OmniRadio label="Three"/> 
                  </OmniRadioGroup>;`}],description:"Set a text value to display for the component.",args:{label:"Label"},play:async e=>{var o,i;let a=(o=n(e.canvasElement).getByTestId("test-radio-group").shadowRoot)==null?void 0:o.querySelector(".label");await r(a.label).toBe((i=e.args)==null?void 0:i.label)}},P={render:e=>m`
    <omni-radio-group data-testid="test-radio-group" label="${e.label}" ?horizontal="${e.horizontal}">
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" ></omni-radio> 
        <omni-radio label="Three"></omni-radio> 
    </omni-radio-group>`,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadioGroup label="${e.label}" horizontal>
                    <OmniRadio label="One" /> 
                    <OmniRadio label="Two" /> 
                    <OmniRadio label="Three"/> 
                  </OmniRadioGroup>;`}],description:"Arrange radio elements horizontally.",args:{label:"Horizontal",horizontal:!0},play:async e=>{var o;let a=(o=n(e.canvasElement).getByTestId("test-radio-group").shadowRoot)==null?void 0:o.querySelector(".radios");await r(a).toHaveAttribute("data-horizontal")}},Q={render:e=>m`
    <omni-radio-group data-testid="test-radio-group" label="${e.label}" ?allow-deselect="${e["allow-deselect"]}">
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" checked  data-testid="test-radio"></omni-radio>  
        <input type="radio" id="native_radio_2" />
        <label for="native_radio_2">Three</label><br>
    </omni-radio-group>`,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadioGroup label="${e.label}" allow-deselect>
                    <OmniRadio label="One" /> 
                    <OmniRadio label="Two" checked/> 
                    <input type="radio" id="native_radio_2" />
                    <label for="native_radio_2">Three</label><br/>
                  </OmniRadioGroup>;`}],description:"Allow radios in the group to be deselected.",args:{label:"Allow Deselect","allow-deselect":!0},play:async e=>{var d;let t=n(e.canvasElement).getByTestId("test-radio-group"),a=n(e.canvasElement).getByTestId("test-radio");t.focus();let o=(d=a.shadowRoot)==null?void 0:d.getElementById("content");a.checked||await l.click(o,{pointerEventsCheck:0});let i=b.fn(),s,c,p=u=>{s=u.detail.current,c=u.detail.previous,i()};t.addEventListener("radio-change",u=>p(u)),await l.click(o,{pointerEventsCheck:0}),await r(i).toBeCalledTimes(1),await r(s).toBeFalsy(),await r(c).toBe(a),await l.click(o,{pointerEventsCheck:0})}},V={render:e=>m` 
            <omni-radio-group label="${e.label}">
                <omni-radio label="One"></omni-radio> 
                <input type="radio" id="native_radio" />
                <label for="native_radio">Two</label><br>
                <omni-switch label="Three"></omni-switch> 
                <omni-radio label="Four"></omni-radio> 
            </omni-radio-group>
        `,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";
import { OmniSwitch } from "@capitec/omni-components-react/switch";

const App = () => <OmniRadioGroup label="${e.label}">
                    <OmniRadio label="One" /> 
                    <input type="radio" id="native_radio" />
                    <label for="native_radio">Two</label><br/>
                    <OmniSwitch label="Three"/> 
                    <OmniRadio label="Four"/> 
                  </OmniRadioGroup>;`}],description:'Grouping supports native input with type="radio" as well as omni-radio (and any other element that is driven by a checked attribute).',args:{label:"Group with alternate elements"},play:async e=>{}};export{Q as Allow_Deselect,P as Horizontal,J as Interactive,K as Label,V as Native_Radio_Input,U as default};
//# sourceMappingURL=RadioGroup.stories.js.map
