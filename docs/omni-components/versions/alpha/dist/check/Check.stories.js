import{a as g}from"../chunks-js/chunk.AFJ2VLBG.js";import{b}from"../chunks-js/chunk.IEAYXHP4.js";import{c as i,d as f}from"../chunks-js/chunk.WXU7FCN5.js";import{e as a}from"../chunks-js/chunk.F2C2BPNZ.js";import"../chunks-js/chunk.CQQIBNC6.js";import"../chunks-js/chunk.O6U6KL6N.js";import"../chunks-js/chunk.DGWR2I27.js";import{E as l,m as k,x as p}from"../chunks-js/chunk.7KM4B723.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.UHIDETPL.js";import"../chunks-js/chunk.KPSG3GC4.js";import"../chunks-js/chunk.MDYAUJ3Z.js";import"../chunks-js/chunk.VTL5CONA.js";import{a as d}from"../chunks-js/chunk.5DDJQYYG.js";import"../chunks-js/chunk.3U7QFP2Q.js";import"../chunks-js/chunk.LB764BBD.js";import{a as h}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.FT5UPVZS.js";import"../chunks-js/chunk.6C4LMRM7.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,e as m}from"../chunks-js/chunk.L3RZWW2F.js";import{h as S,m as w,p as C}from"../chunks-js/chunk.BF43NN75.js";w();C();var u=S(g(),1);var X={title:"UI Components/Check",component:"omni-check",argTypes:{indeterminate_icon:{control:"text"},check_icon:{control:"text"}}},$={render:e=>r`
        <omni-check
            data-testid="test-check"
            label="${h(e.label)}"
            .data="${e.data}"
            hint="${h(e.hint)}"
            error="${h(e.error)}"
            ?checked="${e.checked}"
            ?disabled="${e.disabled}"
            ?indeterminate="${e.indeterminate}">${e.indeterminate_icon?r`${`\r
`}${d(k("indeterminate_icon",e.indeterminate_icon))}`:m}${e.check_icon?r`${`\r
`}${d(k("check_icon",e.check_icon))}`:m}${e.check_icon||e.indeterminate_icon?`\r
`:m}${d(e["[Default Slot]"])}</omni-check>
    `,frameworkSources:[{framework:"Vue",load:e=>l($.render(e),void 0,n=>n.replace(" disabled",' :disabled="true"').replace(" indeterminate",' :indeterminate="true"').replace(" checked",' :checked="true"'))}],name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,indeterminate:!1,check_icon:"",indeterminate_icon:"","[Default Slot]":void 0},play:async e=>{var o;let n=i(e.canvasElement).getByTestId("test-check"),t=u.fn();n.addEventListener("value-change",t),await b.click(n,{pointerEventsCheck:0});let c=(o=n.shadowRoot)==null?void 0:o.getElementById("content");await f.keyDown(c,{key:" ",code:"Space"}),await a(t).toBeCalledTimes(2)}},v={render:e=>r` <omni-check data-testid="test-check" label="${e.label}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}/>;`}],description:"Set text value to display next to the check box.",args:{label:"Label"},play:async e=>{var c,o;let t=(c=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:c.querySelector("label");await a(t).toBeTruthy(),await a(t).toHaveTextContent((o=v.args)==null?void 0:o.label)}},E={render:e=>r` <omni-check data-testid="test-check" label="${e.label}" hint="${e.hint}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.hint?` hint='${e.hint}'`:""}/>;`}],description:"Set text value to display as hint.",args:{label:"Hint",hint:"This is a hint"},play:async e=>{var c,o;let t=(c=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:c.querySelector(".hint");await a(t).toBeTruthy(),await a(t).toHaveTextContent((o=E.args)==null?void 0:o.hint)}},T={name:"Error",render:e=>r` <omni-check data-testid="test-check" label="${e.label}" error="${e.error}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.error?` error='${e.error}'`:""}/>;`}],description:"Set text value to display as error.",args:{label:"Error",error:"This is an error state"},play:async e=>{var c,o;let t=(c=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:c.querySelector(".error");await a(t).toBeTruthy(),await a(t).toHaveTextContent((o=T.args)==null?void 0:o.error)}},x={render:e=>r` <omni-check data-testid="test-check" label="${e.label}" ?checked="${e.checked}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}/>;`},{framework:"Vue",load:e=>l(x.render(e),void 0,n=>n.replace(" disabled",' :disabled="true"').replace(" indeterminate",' :indeterminate="true"').replace(" checked",' :checked="true"'))}],description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async e=>{var c;let t=(c=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:c.querySelector(".checked");await a(t).toBeTruthy()}},_={render:e=>r` <omni-check data-testid="test-check" label="${e.label}" ?indeterminate="${e.indeterminate}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.indeterminate?" indeterminate":""}/>;`},{framework:"Vue",load:e=>l(_.render(e),void 0,n=>n.replace(" disabled",' :disabled="true"').replace(" indeterminate",' :indeterminate="true"').replace(" checked",' :checked="true"'))}],description:"Set the component to an indeterminate/partial state.",args:{label:"Indeterminate",indeterminate:!0},play:async e=>{var c;let t=(c=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:c.querySelector(".indeterminate");await a(t).toBeTruthy()}},A={render:e=>r` <omni-check data-testid="test-check" label="${e.label}" ?disabled="${e.disabled}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>l(A.render(e),void 0,n=>n.replace(" disabled",' :disabled="true"').replace(" indeterminate",' :indeterminate="true"').replace(" checked",' :checked="true"'))}],description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var s,y;let n=i(e.canvasElement).getByTestId("test-check"),t=u.fn();n.addEventListener("value-change",t);let c=(s=n.shadowRoot)==null?void 0:s.querySelector(".disabled");await a(c).toBeTruthy();let o=(y=n.shadowRoot)==null?void 0:y.getElementById("content");await b.click(o,{pointerEventsCheck:0}),await f.keyDown(o,{key:" ",code:"Space"}),await a(t).toBeCalledTimes(0)}},Y={render:()=>r`
        <omni-check data-testid="test-check">Slotted</omni-check>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck>
                    Slotted
                  </OmniCheck>;`}],name:"Slot",description:"Set content to display within.",args:{},play:async e=>{let t=i(e.canvasElement).getByTestId("test-check").innerHTML;await a(t).toEqual("Slotted")}},B={render:e=>r`
    <omni-check data-testid="test-check" label="${e.label}" ?checked="${e.checked}"> ${d(e.check_icon)} </omni-check>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}>
                    <svg slot="check_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.79 410.38" version="1.0" width="100%" height="100%">
                        <path style={{stroke: '#000', strokeWidth: '19.892', fill: 'lightgreen'}}
                            d="m-1747.2-549.3 287.72 333.9c146.6-298.83 326.06-573.74 614.52-834.75-215.89 121.82-453.86 353.14-657.14 639.38l-245.1-138.53z"
                            transform="translate(843.77 509.04) scale(.48018)" />
                    </svg>
                </OmniCheck>;`},{framework:"Vue",load:e=>l(B.render(e),void 0,n=>n.replace(" disabled",' :disabled="true"').replace(" indeterminate",' :indeterminate="true"').replace(" checked",' :checked="true"'))}],description:"Set html content to render when the component is in a checked state.",args:{label:"Custom Check Icon",checked:!0,check_icon:p`
            <svg slot="check_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.79 410.38" version="1.0" width="100%"
                height="100%">
                <path style="stroke:#000;stroke-width:19.892;fill:lightgreen"
                d="m-1747.2-549.3 287.72 333.9c146.6-298.83 326.06-573.74 614.52-834.75-215.89 121.82-453.86 353.14-657.14 639.38l-245.1-138.53z"
                transform="translate(843.77 509.04) scale(.48018)" />
            </svg>
        `},play:async e=>{var o;let t=(o=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:o.querySelector("slot[name=check_icon]");await a(t).toBeTruthy();let c=t==null?void 0:t.assignedElements().find(s=>s.tagName.toLowerCase()==="svg");await a(c).toBeTruthy()}},I={render:e=>r`
    <omni-check data-testid="test-check" label="${e.label}" ?indeterminate="${e.indeterminate}">
      ${d(e.indeterminate_icon)}
    </omni-check>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.indeterminate?" indeterminate":""}>
                    <svg slot="indeterminate_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%">
                        <defs>
                        <linearGradient id="b" y2="28.275" gradientUnits="userSpaceOnUse" x2="20.07" y1="3.976" x1="12.113">
                            <stop style={{stopColor: '#ffffff'}} offset="0" />
                            <stop style={{stopColor: '#ffffff'}} offset="1" />
                        </linearGradient>
                        <linearGradient id="a" y2="30" gradientUnits="userSpaceOnUse" x2="20.214" y1="2" x1="12.031">
                            <stop style={{stopColor: '#ffffff'}} offset="0" />
                            <stop style={{stopColor: '#ffffff'}} offset="1" />
                        </linearGradient>
                        </defs>
                        <path d="M2.875 13C1.281 13 0 14.338 0 16s1.28 3 2.875 3h26.25C30.719 19 32 17.662 32 16s-1.281-3-2.875-3H2.875z" />
                        <path style={{fill:'url(#b)'}} transform="translate(-.063 .063)"
                        d="M2.875 13.938c-1.067 0-1.938.884-1.938 2.062s.87 2.062 1.938 2.062h26.25c1.067 0 1.937-.884 1.937-2.062s-.87-2.062-1.937-2.062H2.875z" />
                    </svg>
                </OmniCheck>;`},{framework:"Vue",load:e=>l(I.render(e),void 0,n=>n.replace(" disabled",' :disabled="true"').replace(" indeterminate",' :indeterminate="true"').replace(" checked",' :checked="true"'))}],description:"Set html content to render when the component is in an indeterminate state.",args:{label:"Custom Indeterminate Icon",indeterminate:!0,indeterminate_icon:p`
			<svg slot="indeterminate_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%">
				<defs>
				<linearGradient id="b" y2="28.275" gradientUnits="userSpaceOnUse" x2="20.07" y1="3.976" x1="12.113">
					<stop style="stop-color:#ffffff" offset="0" />
					<stop style="stop-color:#ffffff" offset="1" />
				</linearGradient>
				<linearGradient id="a" y2="30" gradientUnits="userSpaceOnUse" x2="20.214" y1="2" x1="12.031">
					<stop style="stop-color:#ffffff" offset="0" />
					<stop style="stop-color:#ffffff" offset="1" />
				</linearGradient>
				</defs>
				<path d="M2.875 13C1.281 13 0 14.338 0 16s1.28 3 2.875 3h26.25C30.719 19 32 17.662 32 16s-1.281-3-2.875-3H2.875z" />
				<path style="fill:url(#b)" transform="translate(-.063 .063)"
				d="M2.875 13.938c-1.067 0-1.938.884-1.938 2.062s.87 2.062 1.938 2.062h26.25c1.067 0 1.937-.884 1.937-2.062s-.87-2.062-1.937-2.062H2.875z" />
			</svg>
		`},play:async e=>{var o;let t=(o=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:o.querySelector("slot[name=indeterminate_icon]");await a(t).toBeTruthy();let c=t==null?void 0:t.assignedElements().find(s=>s.tagName.toLowerCase()==="svg");await a(c).toBeTruthy()}};export{x as Checked,B as Custom_Check_Icon,I as Custom_Indeterminate_Icon,A as Disabled,T as Error_Label,E as Hint,_ as Indeterminate,$ as Interactive,v as Label,Y as Slot,X as default};
//# sourceMappingURL=Check.stories.js.map
