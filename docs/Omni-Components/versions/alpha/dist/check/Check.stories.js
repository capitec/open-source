import"../chunks-js/chunk.CY4Y3IGB.js";import"../chunks-js/chunk.VL7BI4YK.js";import"../chunks-js/chunk.BP2KI4CQ.js";import{k,u as y}from"../chunks-js/chunk.ZOV7Q3GR.js";import"../chunks-js/chunk.AWLGTUIY.js";import"../chunks-js/chunk.US2AYN3N.js";import"../chunks-js/chunk.MPJVWYSG.js";import{a as s}from"../chunks-js/chunk.3FTDPY75.js";import"../chunks-js/chunk.VOM777LA.js";import{b as m,c as w}from"../chunks-js/chunk.LME64W74.js";import{a as d}from"../chunks-js/chunk.R4IMIBZU.js";import{c as a,d as h}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as n}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.X74GW3ZD.js";import"../chunks-js/chunk.XMM72FEY.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as c,d as l}from"../chunks-js/chunk.3GEUDTAZ.js";import{h as b,l as p,o as g}from"../chunks-js/chunk.2ZZQBHAA.js";p();g();var f=b(w(),1);var z={title:"UI Components/Check",component:"omni-check",argTypes:{indeterminate_icon:{control:"text"},check_icon:{control:"text"}}},N={render:e=>c`
    <omni-check
      data-testid="test-check"
      label="${d(e.label)}"
      .data="${e.data}"
      hint="${d(e.hint)}"
      error="${d(e.error)}"
      ?checked="${e.checked}"
      ?disabled="${e.disabled}"
      ?indeterminate="${e.indeterminate}"
      >${e.indeterminate_icon?c`${`\r
`}${s(k("indeterminate_icon",e.indeterminate_icon))}`:l}${e.check_icon?c`${`\r
`}${s(k("check_icon",e.check_icon))}`:l}${e.check_icon||e.indeterminate_icon?`\r
`:l}</omni-check
    >
  `,name:"Interactive",args:{label:"",data:{},hint:"",error:"",checked:!1,disabled:!1,indeterminate:!1,check_icon:"",indeterminate_icon:""},play:async e=>{let o=a(e.canvasElement).getByTestId("test-check"),t=f.fn();o.addEventListener("value-change",t),await m.click(o,{pointerEventsCheck:0});let r=o.shadowRoot.getElementById("content");await h.keyDown(r,{key:" ",code:"Space"}),await n(t).toBeCalledTimes(2)}},C={render:e=>c` <omni-check data-testid="test-check" label="${e.label}"></omni-check> `,args:{label:"Label"},play:async e=>{let t=a(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector("label");await n(t).toBeTruthy(),await n(t).toHaveTextContent(C.args.label)}},E={render:e=>c` <omni-check data-testid="test-check" label="${e.label}" hint="${e.hint}"></omni-check> `,args:{label:"Hint",hint:"This is a hint"},play:async e=>{let t=a(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector(".hint");await n(t).toBeTruthy(),await n(t).toHaveTextContent(E.args.hint)}},u={name:"Error",render:e=>c` <omni-check data-testid="test-check" label="${e.label}" error="${e.error}"></omni-check> `,args:{label:"Error",error:"This is an error state"},play:async e=>{let t=a(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector(".error");await n(t).toBeTruthy(),await n(t).toHaveTextContent(u.args.error)}},O={render:e=>c` <omni-check data-testid="test-check" label="${e.label}" ?checked="${e.checked}"></omni-check> `,args:{label:"Checked",checked:!0},play:async e=>{let t=a(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector(".checked");await n(t).toBeTruthy()}},J={render:e=>c` <omni-check data-testid="test-check" label="${e.label}" ?indeterminate="${e.indeterminate}"></omni-check> `,args:{label:"Indeterminate",indeterminate:!0},play:async e=>{let t=a(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector(".indeterminate");await n(t).toBeTruthy()}},K={render:e=>c` <omni-check data-testid="test-check" label="${e.label}" ?disabled="${e.disabled}"></omni-check> `,args:{label:"Disabled",disabled:!0},play:async e=>{let o=a(e.canvasElement).getByTestId("test-check"),t=f.fn();o.addEventListener("value-change",t);let r=o.shadowRoot.querySelector(".disabled");await n(r).toBeTruthy();let i=o.shadowRoot.getElementById("content");await m.click(i,{pointerEventsCheck:0}),await h.keyDown(i,{key:" ",code:"Space"}),await n(t).toBeCalledTimes(0)}},P={render:e=>c`
    <omni-check data-testid="test-check" label="${e.label}" ?checked="${e.checked}"> ${s(e.check_icon)} </omni-check>
  `,args:{label:"Custom Check Icon",checked:!0,check_icon:y`<svg slot="check_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.79 410.38" version="1.0" width="100%"
                      height="100%">
                      <path style="stroke:#000;stroke-width:19.892;fill:#ffffff"
                        d="m-1747.2-549.3 287.72 333.9c146.6-298.83 326.06-573.74 614.52-834.75-215.89 121.82-453.86 353.14-657.14 639.38l-245.1-138.53z"
                        transform="translate(843.77 509.04) scale(.48018)" />
                    </svg>`},play:async e=>{let t=a(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector("slot[name=check_icon]");await n(t).toBeTruthy();let r=t.assignedElements().find(i=>i.tagName.toLowerCase()==="svg");await n(r).toBeTruthy()}},Q={render:e=>c`
    <omni-check data-testid="test-check" label="${e.label}" ?indeterminate="${e.indeterminate}">
      ${s(e.indeterminate_icon)}
    </omni-check>
  `,args:{label:"Custom Indeterminate Icon",indeterminate:!0,indeterminate_icon:y`
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
		`},play:async e=>{let t=a(e.canvasElement).getByTestId("test-check").shadowRoot.querySelector("slot[name=indeterminate_icon]");await n(t).toBeTruthy();let r=t.assignedElements().find(i=>i.tagName.toLowerCase()==="svg");await n(r).toBeTruthy()}};export{O as Checked,P as Custom_Check_Icon,Q as Custom_Indeterminate_Icon,K as Disabled,u as Error_Label,E as Hint,J as Indeterminate,N as Interactive,C as Label,z as default};
//# sourceMappingURL=Check.stories.js.map
