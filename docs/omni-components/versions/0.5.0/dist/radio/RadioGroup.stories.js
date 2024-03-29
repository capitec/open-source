import"../chunks-js/chunk.IG6XNI34.js";import"../chunks-js/chunk.NZVBOIB7.js";import"../chunks-js/chunk.XE22AHMD.js";import"../chunks-js/chunk.HYDXVPNJ.js";import"../chunks-js/chunk.NMWKNT2T.js";import{u as E}from"../chunks-js/chunk.WA6C3RAL.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.FJG2EZL6.js";import{b as l,c as C}from"../chunks-js/chunk.SNS3RAAO.js";import{a as v}from"../chunks-js/chunk.7QF4VYJR.js";import{a as w}from"../chunks-js/chunk.CFP25WDL.js";import{c as n}from"../chunks-js/chunk.555UF2OF.js";import{d as r}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as s}from"../chunks-js/chunk.CIM3NS6G.js";import{h as f,l as g,o as h}from"../chunks-js/chunk.2ZZQBHAA.js";g();h();var b=f(C(),1);var U={title:"UI Components/Radio Group",component:"omni-radio-group"},J={render:e=>s`
    <omni-radio-group data-testid="test-radio-group" label="${w(e.label)}" ?allow-deselect="${e["allow-deselect"]}" ?horizontal="${e.horizontal}">
      ${v(e["[Default Slot]"])}
    </omni-radio-group>
  `,name:"Interactive",args:{label:"Radio Group","allow-deselect":!1,horizontal:!1,"[Default Slot]":E`<omni-radio label="One" data-testid="test-radio"></omni-radio> 
<omni-radio label="Two" disabled></omni-radio> 
<omni-radio label="Three"></omni-radio>`},play:async e=>{var p;let a=n(e.canvasElement).getByTestId("test-radio-group"),t=n(e.canvasElement).getByTestId("test-radio");a.focus();let o=(p=t.shadowRoot)==null?void 0:p.getElementById("content");t.checked&&await l.click(o,{pointerEventsCheck:0});let i=b.fn(),m,c=d=>{m=d.detail.current,i()};a.addEventListener("radio-change",d=>c(d)),await l.click(o,{pointerEventsCheck:0}),await r(i).toBeCalledTimes(1),await r(m).toBe(t),a.allowDeselect=!0,await l.click(o,{pointerEventsCheck:0}),a.allowDeselect=!1}},K={render:e=>s`
    <omni-radio-group data-testid="test-radio-group" label="${e.label}" >
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" ></omni-radio> 
        <omni-radio label="Three"></omni-radio> 
    </omni-radio-group>`,description:"Set a text value to display for the component.",args:{label:"Label"},play:async e=>{var o,i;let t=(o=n(e.canvasElement).getByTestId("test-radio-group").shadowRoot)==null?void 0:o.querySelector(".label");await r(t.label).toBe((i=e.args)==null?void 0:i.label)}},P={render:e=>s`
    <omni-radio-group data-testid="test-radio-group" label="${e.label}" ?horizontal="${e.horizontal}">
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" ></omni-radio> 
        <omni-radio label="Three"></omni-radio> 
    </omni-radio-group>`,description:"Arrange radio elements horizontally.",args:{label:"Horizontal",horizontal:!0},play:async e=>{var o;let t=(o=n(e.canvasElement).getByTestId("test-radio-group").shadowRoot)==null?void 0:o.querySelector(".radios");await r(t).toHaveAttribute("data-horizontal")}},Q={render:e=>s`
    <omni-radio-group data-testid="test-radio-group" label="${e.label}" ?allow-deselect="${e["allow-deselect"]}">
        <omni-radio label="One" ></omni-radio> 
        <omni-radio label="Two" checked  data-testid="test-radio"></omni-radio>  
        <input type="radio" id="native_radio_2" />
        <label for="native_radio_2">Three</label><br>
    </omni-radio-group>`,description:"Allow radios in the group to be deselected.",args:{label:"Allow Deselect","allow-deselect":!0},play:async e=>{var d;let a=n(e.canvasElement).getByTestId("test-radio-group"),t=n(e.canvasElement).getByTestId("test-radio");a.focus();let o=(d=t.shadowRoot)==null?void 0:d.getElementById("content");t.checked||await l.click(o,{pointerEventsCheck:0});let i=b.fn(),m,c,p=u=>{m=u.detail.current,c=u.detail.previous,i()};a.addEventListener("radio-change",u=>p(u)),await l.click(o,{pointerEventsCheck:0}),await r(i).toBeCalledTimes(1),await r(m).toBeFalsy(),await r(c).toBe(t),await l.click(o,{pointerEventsCheck:0})}},V={render:e=>s` 
            <omni-radio-group label="${e.label}">
                <omni-radio label="One"></omni-radio> 
                <input type="radio" id="native_radio" />
                <label for="native_radio">Two</label><br>
                <omni-switch label="Three"></omni-switch> 
                <omni-radio label="Four"></omni-radio> 
            </omni-radio-group>
        `,description:'Grouping supports native input with type="radio" as well as omni-radio (and any other element that is driven by a checked attribute).',args:{label:"Group with alternate elements"},play:async e=>{}};export{Q as Allow_Deselect,P as Horizontal,J as Interactive,K as Label,V as Native_Radio_Input,U as default};
//# sourceMappingURL=RadioGroup.stories.js.map
