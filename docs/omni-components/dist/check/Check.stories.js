import"../chunks-js/chunk.GRCHOWQ2.js";import"../chunks-js/chunk.DSFP5BXI.js";import"../chunks-js/chunk.75BXIUBR.js";import{k,u as p}from"../chunks-js/chunk.EZFZPYM4.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.FJG2EZL6.js";import{b as m,c as w}from"../chunks-js/chunk.SNS3RAAO.js";import{a as s}from"../chunks-js/chunk.7QF4VYJR.js";import{a as d}from"../chunks-js/chunk.CFP25WDL.js";import{c as r,d as h}from"../chunks-js/chunk.555UF2OF.js";import{d as o}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.YPV66JA3.js";import"../chunks-js/chunk.F27L6OQP.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as a,d as l}from"../chunks-js/chunk.CIM3NS6G.js";import{h as b,l as f,o as g}from"../chunks-js/chunk.2ZZQBHAA.js";f();g();var y=b(w(),1);var z={title:"UI Components/Check",component:"omni-check",argTypes:{indeterminate_icon:{control:"text"},check_icon:{control:"text"}}},N={render:e=>a`
    <omni-check
      data-testid="test-check"
      label="${d(e.label)}"
      .data="${e.data}"
      hint="${d(e.hint)}"
      error="${d(e.error)}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      ?indeterminate="${e.indeterminate}"
      >${e.indeterminate_icon?a`${`\r
`}${s(k("indeterminate_icon",e.indeterminate_icon))}`:l}${e.check_icon?a`${`\r
`}${s(k("check_icon",e.check_icon))}`:l}${e.check_icon||e.indeterminate_icon?`\r
`:l}</omni-check
    >
  `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,indeterminate:!1,check_icon:"",indeterminate_icon:""},play:async e=>{let c=r(e.canvasElement).getByTestId("test-check"),t=y.fn();c.addEventListener("value-change",t),await m.click(c,{pointerEventsCheck:0});let n=c.shadowRoot.getElementById("content");await h.keyDown(n,{key:" ",code:"Space"}),await o(t).toBeCalledTimes(2)}},C={render:e=>a` <omni-check data-testid="test-check" label="${e.label}"></omni-check> `,description:"Set text value to display next to the check box.",args:{label:"Label"},play:async e=>{var n,i;let t=(n=r(e.canvasElement).getByTestId("test-check").shadowRoot)==null?void 0:n.querySelector("label");await o(t).toBeTruthy(),await o(t).toHaveTextContent((i=C.args)==null?void 0:i.label)}},u={render:e=>a` <omni-check data-testid="test-check" label="${e.label}" hint="${e.hint}"></omni-check> `,description:"Set text value to display as hint.",args:{label:"Hint",hint:"This is a hint"},play:async e=>{var n;let t=r(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector(".hint");await o(t).toBeTruthy(),await o(t).toHaveTextContent((n=u.args)==null?void 0:n.hint)}},v={name:"Error",render:e=>a` <omni-check data-testid="test-check" label="${e.label}" error="${e.error}"></omni-check> `,description:"Set text value to display as error.",args:{label:"Error",error:"This is an error state"},play:async e=>{var n;let t=r(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector(".error");await o(t).toBeTruthy(),await o(t).toHaveTextContent((n=v.args)==null?void 0:n.error)}},O={render:e=>a` <omni-check data-testid="test-check" label="${e.label}" ?checked="${e.checked}"></omni-check> `,description:"Set the component to a checked state.",args:{label:"Checked",checked:!0},play:async e=>{let t=r(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector(".checked");await o(t).toBeTruthy()}},P={render:e=>a` <omni-check data-testid="test-check" label="${e.label}" ?indeterminate="${e.indeterminate}"></omni-check> `,description:"Set the component to an indeterminate/partial state.",args:{label:"Indeterminate",indeterminate:!0},play:async e=>{let t=r(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector(".indeterminate");await o(t).toBeTruthy()}},J={render:e=>a` <omni-check data-testid="test-check" label="${e.label}" ?disabled="${e.disabled}"></omni-check> `,description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0},play:async e=>{let c=r(e.canvasElement).getByTestId("test-check"),t=y.fn();c.addEventListener("value-change",t);let n=c.shadowRoot.querySelector(".disabled");await o(n).toBeTruthy();let i=c.shadowRoot.getElementById("content");await m.click(i,{pointerEventsCheck:0}),await h.keyDown(i,{key:" ",code:"Space"}),await o(t).toBeCalledTimes(0)}},K={render:e=>a`
    <omni-check data-testid="test-check" label="${e.label}" ?checked="${e.checked}"> ${s(e.check_icon)} </omni-check>
  `,description:"Set html content to render when the component is in a checked state.",args:{label:"Custom Check Icon",checked:!0,check_icon:p`<svg slot="check_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.79 410.38" version="1.0" width="100%"
                      height="100%">
                      <path style="stroke:#000;stroke-width:19.892;fill:lightgreen"
                        d="m-1747.2-549.3 287.72 333.9c146.6-298.83 326.06-573.74 614.52-834.75-215.89 121.82-453.86 353.14-657.14 639.38l-245.1-138.53z"
                        transform="translate(843.77 509.04) scale(.48018)" />
                    </svg>`},play:async e=>{let t=r(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector("slot[name=check_icon]");await o(t).toBeTruthy();let n=t==null?void 0:t.assignedElements().find(i=>i.tagName.toLowerCase()==="svg");await o(n).toBeTruthy()}},Q={render:e=>a`
    <omni-check data-testid="test-check" label="${e.label}" ?indeterminate="${e.indeterminate}">
      ${s(e.indeterminate_icon)}
    </omni-check>
  `,description:"Set html content to render when the component is in an indeterminate state.",args:{label:"Custom Indeterminate Icon",indeterminate:!0,indeterminate_icon:p`
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
		`},play:async e=>{let t=r(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector("slot[name=indeterminate_icon]");await o(t).toBeTruthy();let n=t==null?void 0:t.assignedElements().find(i=>i.tagName.toLowerCase()==="svg");await o(n).toBeTruthy()}};export{O as Checked,K as Custom_Check_Icon,Q as Custom_Indeterminate_Icon,J as Disabled,v as Error_Label,u as Hint,P as Indeterminate,N as Interactive,C as Label,z as default};
//# sourceMappingURL=Check.stories.js.map
