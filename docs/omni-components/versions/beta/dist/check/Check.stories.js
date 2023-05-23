import{a as S}from"../chunks-js/chunk.IRJIQSYL.js";import{a as l}from"../chunks-js/chunk.G3QHRCKP.js";import{b as k}from"../chunks-js/chunk.MHLMY33S.js";import{l as p,w as f}from"../chunks-js/chunk.IFPMJPKV.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as h}from"../chunks-js/chunk.6QCQBNRL.js";import{c as i,d}from"../chunks-js/chunk.N6OKW4B2.js";import{d as c}from"../chunks-js/chunk.W54IKPJD.js";import"../chunks-js/chunk.MEQQ2DGY.js";import"../chunks-js/chunk.MZ2O7RKR.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as r,d as m}from"../chunks-js/chunk.F6MIXR4E.js";import{h as u,m as b,p as C}from"../chunks-js/chunk.BF43NN75.js";b();C();var y=u(S(),1);var N={title:"UI Components/Check",component:"omni-check",argTypes:{indeterminate_icon:{control:"text"},check_icon:{control:"text"}}},P={render:e=>r`
        <omni-check
            data-testid="test-check"
            label="${h(e.label)}"
            .data="${e.data}"
            hint="${h(e.hint)}"
            error="${h(e.error)}"
            ?checked="${e.checked}"
            ?disabled="${e.disabled}"
            ?indeterminate="${e.indeterminate}">${e.indeterminate_icon?r`${`\r
`}${l(p("indeterminate_icon",e.indeterminate_icon))}`:m}${e.check_icon?r`${`\r
`}${l(p("check_icon",e.check_icon))}`:m}${e.check_icon||e.indeterminate_icon?`\r
`:m}${l(e["[Default Slot]"])}</omni-check>
    `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,indeterminate:!1,check_icon:"",indeterminate_icon:"","[Default Slot]":void 0},play:async e=>{var o;let a=i(e.canvasElement).getByTestId("test-check"),t=y.fn();a.addEventListener("value-change",t),await k.click(a,{pointerEventsCheck:0});let n=(o=a.shadowRoot)==null?void 0:o.getElementById("content");await d.keyDown(n,{key:" ",code:"Space"}),await c(t).toBeCalledTimes(2)}},g={render:e=>r` <omni-check data-testid="test-check" label="${e.label}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}/>;`}],description:"Set text value to display next to the check box.",args:{label:"Label"},play:async e=>{var n,o;let t=(n=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:n.querySelector("label");await c(t).toBeTruthy(),await c(t).toHaveTextContent((o=g.args)==null?void 0:o.label)}},$={render:e=>r` <omni-check data-testid="test-check" label="${e.label}" hint="${e.hint}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.hint?` hint='${e.hint}'`:""}/>;`}],description:"Set text value to display as hint.",args:{label:"Hint",hint:"This is a hint"},play:async e=>{var n,o;let t=(n=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:n.querySelector(".hint");await c(t).toBeTruthy(),await c(t).toHaveTextContent((o=$.args)==null?void 0:o.hint)}},v={name:"Error",render:e=>r` <omni-check data-testid="test-check" label="${e.label}" error="${e.error}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.error?` error='${e.error}'`:""}/>;`}],description:"Set text value to display as error.",args:{label:"Error",error:"This is an error state"},play:async e=>{var n,o;let t=(n=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:n.querySelector(".error");await c(t).toBeTruthy(),await c(t).toHaveTextContent((o=v.args)==null?void 0:o.error)}},W={render:e=>r` <omni-check data-testid="test-check" label="${e.label}" ?checked="${e.checked}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}/>;`}],description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async e=>{var n;let t=(n=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:n.querySelector(".checked");await c(t).toBeTruthy()}},J={render:e=>r` <omni-check data-testid="test-check" label="${e.label}" ?indeterminate="${e.indeterminate}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.indeterminate?" indeterminate":""}/>;`}],description:"Set the component to an indeterminate/partial state.",args:{label:"Indeterminate",indeterminate:!0},play:async e=>{var n;let t=(n=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:n.querySelector(".indeterminate");await c(t).toBeTruthy()}},K={render:e=>r` <omni-check data-testid="test-check" label="${e.label}" ?disabled="${e.disabled}"></omni-check> `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`}],description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{var s,w;let a=i(e.canvasElement).getByTestId("test-check"),t=y.fn();a.addEventListener("value-change",t);let n=(s=a.shadowRoot)==null?void 0:s.querySelector(".disabled");await c(n).toBeTruthy();let o=(w=a.shadowRoot)==null?void 0:w.getElementById("content");await k.click(o,{pointerEventsCheck:0}),await d.keyDown(o,{key:" ",code:"Space"}),await c(t).toBeCalledTimes(0)}},Q={render:()=>r`
        <omni-check data-testid="test-check">Slotted</omni-check>
    `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck>
                    Slotted
                  </OmniCheck>;`}],name:"Slot",description:"Set content to display within.",args:{},play:async e=>{let t=i(e.canvasElement).getByTestId("test-check").innerHTML;await c(t).toEqual("Slotted")}},V={render:e=>r`
    <omni-check data-testid="test-check" label="${e.label}" ?checked="${e.checked}"> ${l(e.check_icon)} </omni-check>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniCheck } from "@capitec/omni-components-react/check";

const App = () => <OmniCheck${e.label?` label='${e.label}'`:""}${e.checked?" checked":""}>
                    <svg slot="check_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.79 410.38" version="1.0" width="100%" height="100%">
                        <path style={{stroke: '#000', strokeWidth: '19.892', fill: 'lightgreen'}}
                            d="m-1747.2-549.3 287.72 333.9c146.6-298.83 326.06-573.74 614.52-834.75-215.89 121.82-453.86 353.14-657.14 639.38l-245.1-138.53z"
                            transform="translate(843.77 509.04) scale(.48018)" />
                    </svg>
                </OmniCheck>;`}],description:"Set html content to render when the component is in a checked state.",args:{label:"Custom Check Icon",checked:!0,check_icon:f`
            <svg slot="check_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.79 410.38" version="1.0" width="100%"
                height="100%">
                <path style="stroke:#000;stroke-width:19.892;fill:lightgreen"
                d="m-1747.2-549.3 287.72 333.9c146.6-298.83 326.06-573.74 614.52-834.75-215.89 121.82-453.86 353.14-657.14 639.38l-245.1-138.53z"
                transform="translate(843.77 509.04) scale(.48018)" />
            </svg>
        `},play:async e=>{var o;let t=(o=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:o.querySelector("slot[name=check_icon]");await c(t).toBeTruthy();let n=t==null?void 0:t.assignedElements().find(s=>s.tagName.toLowerCase()==="svg");await c(n).toBeTruthy()}},X={render:e=>r`
    <omni-check data-testid="test-check" label="${e.label}" ?indeterminate="${e.indeterminate}">
      ${l(e.indeterminate_icon)}
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
                </OmniCheck>;`}],description:"Set html content to render when the component is in an indeterminate state.",args:{label:"Custom Indeterminate Icon",indeterminate:!0,indeterminate_icon:f`
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
		`},play:async e=>{var o;let t=(o=i(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:o.querySelector("slot[name=indeterminate_icon]");await c(t).toBeTruthy();let n=t==null?void 0:t.assignedElements().find(s=>s.tagName.toLowerCase()==="svg");await c(n).toBeTruthy()}};export{W as Checked,V as Custom_Check_Icon,X as Custom_Indeterminate_Icon,K as Disabled,v as Error_Label,$ as Hint,J as Indeterminate,P as Interactive,g as Label,Q as Slot,N as default};
//# sourceMappingURL=Check.stories.js.map
