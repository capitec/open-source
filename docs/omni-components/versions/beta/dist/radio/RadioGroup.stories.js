import"../chunks-js/chunk.OQVC4CQU.js";import"../chunks-js/chunk.AFFACXUD.js";import"../chunks-js/chunk.BRGMWPWN.js";import"../chunks-js/chunk.RTZAZGF5.js";import"../chunks-js/chunk.VAH5TOPR.js";import{a as O}from"../chunks-js/chunk.IRJIQSYL.js";import{b as l}from"../chunks-js/chunk.MHLMY33S.js";import{a as R}from"../chunks-js/chunk.XCXCHO25.js";import{c as n}from"../chunks-js/chunk.N6OKW4B2.js";import{d as r}from"../chunks-js/chunk.W54IKPJD.js";import{E as b,x as v}from"../chunks-js/chunk.LSBYP56E.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.VW2P7YAN.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as g}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.LB764BBD.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as m}from"../chunks-js/chunk.L3RZWW2F.js";import{h as E,m as w,p as f}from"../chunks-js/chunk.BF43NN75.js";w();f();var h=E(O(),1);var P={title:"UI Components/Radio Group",component:"omni-radio-group"},y={render:e=>m`
    <omni-radio-group data-testid="test-radio-group" label="${R(e.label)}" ?allow-deselect="${e["allow-deselect"]}" ?horizontal="${e.horizontal}">
      ${g(e["[Default Slot]"])}
    </omni-radio-group>
  `,frameworkSources:[{framework:"Vue",load:e=>b(y.render(e),void 0,o=>o.replace(" horizontal",' :horizontal="true"').replace(" allow-deselect",' :allow-deselect="true"'))}],name:"Interactive",args:{label:"Radio Group","allow-deselect":!1,horizontal:!1,"[Default Slot]":v`<omni-radio label="One" data-testid="test-radio"></omni-radio> 
<omni-radio label="Two" disabled></omni-radio> 
<omni-radio label="Three"></omni-radio>`},play:async e=>{var p;let o=n(e.canvasElement).getByTestId("test-radio-group"),t=n(e.canvasElement).getByTestId("test-radio");o.focus();let a=(p=t.shadowRoot)==null?void 0:p.getElementById("content");t.checked&&await l.click(a,{pointerEventsCheck:0});let i=h.fn(),s,c=d=>{s=d.detail.current,i()};o.addEventListener("radio-change",d=>c(d)),await l.click(a,{pointerEventsCheck:0}),await r(i).toBeCalledTimes(1),await r(s).toBe(t),o.allowDeselect=!0,await l.click(a,{pointerEventsCheck:0}),o.allowDeselect=!1}},Q={render:e=>m`
    <omni-radio-group data-testid="test-radio-group" label="${e.label}" >
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" ></omni-radio> 
        <omni-radio label="Three"></omni-radio> 
    </omni-radio-group>`,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadioGroup label="${e.label}">
                    <OmniRadio label="One" /> 
                    <OmniRadio label="Two" /> 
                    <OmniRadio label="Three"/> 
                  </OmniRadioGroup>;`}],description:"Set a text value to display for the component.",args:{label:"Label"},play:async e=>{var a,i;let t=(a=n(e.canvasElement).getByTestId("test-radio-group").shadowRoot)==null?void 0:a.querySelector(".label");await r(t.label).toBe((i=e.args)==null?void 0:i.label)}},C={render:e=>m`
    <omni-radio-group data-testid="test-radio-group" label="${e.label}" ?horizontal="${e.horizontal}">
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" ></omni-radio> 
        <omni-radio label="Three"></omni-radio> 
    </omni-radio-group>`,frameworkSources:[{framework:"React",load:e=>`import { OmniRadio, OmniRadioGroup } from "@capitec/omni-components-react/radio";

const App = () => <OmniRadioGroup label="${e.label}" horizontal>
                    <OmniRadio label="One" /> 
                    <OmniRadio label="Two" /> 
                    <OmniRadio label="Three"/> 
                  </OmniRadioGroup>;`},{framework:"Vue",load:e=>b(C.render(e),void 0,o=>o.replace(" horizontal",' :horizontal="true"').replace(" allow-deselect",' :allow-deselect="true"'))}],description:"Arrange radio elements horizontally.",args:{label:"Horizontal",horizontal:!0},play:async e=>{var a;let t=(a=n(e.canvasElement).getByTestId("test-radio-group").shadowRoot)==null?void 0:a.querySelector(".radios");await r(t).toHaveAttribute("data-horizontal")}},k={render:e=>m`
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
                  </OmniRadioGroup>;`},{framework:"Vue",load:e=>b(k.render(e),void 0,o=>o.replace(" horizontal",' :horizontal="true"').replace(" allow-deselect",' :allow-deselect="true"'))}],description:"Allow radios in the group to be deselected.",args:{label:"Allow Deselect","allow-deselect":!0},play:async e=>{var d;let o=n(e.canvasElement).getByTestId("test-radio-group"),t=n(e.canvasElement).getByTestId("test-radio");o.focus();let a=(d=t.shadowRoot)==null?void 0:d.getElementById("content");t.checked||await l.click(a,{pointerEventsCheck:0});let i=h.fn(),s,c,p=u=>{s=u.detail.current,c=u.detail.previous,i()};o.addEventListener("radio-change",u=>p(u)),await l.click(a,{pointerEventsCheck:0}),await r(i).toBeCalledTimes(1),await r(s).toBeFalsy(),await r(c).toBe(t),await l.click(a,{pointerEventsCheck:0})}},W={render:e=>m` 
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
                  </OmniRadioGroup>;`}],description:'Grouping supports native input with type="radio" as well as omni-radio (and any other element that is driven by a checked attribute).',args:{label:"Group with alternate elements"},play:async e=>{}};export{k as Allow_Deselect,C as Horizontal,y as Interactive,Q as Label,W as Native_Radio_Input,P as default};
//# sourceMappingURL=RadioGroup.stories.js.map
