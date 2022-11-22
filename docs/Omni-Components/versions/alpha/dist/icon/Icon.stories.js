import"../chunks-js/chunk.UXQTSNY6.js";import{u as g}from"../chunks-js/chunk.YBZZGCQT.js";import"../chunks-js/chunk.63SH7AJG.js";import{a as c}from"../chunks-js/chunk.SNOJQC4W.js";import{a as l}from"../chunks-js/chunk.R4IMIBZU.js";import{c as n}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as e}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.WVW5AE5A.js";import"../chunks-js/chunk.CHYIO324.js";import"../chunks-js/chunk.2UFE7DL7.js";import{b as i}from"../chunks-js/chunk.3GEUDTAZ.js";import{l as m,o as d}from"../chunks-js/chunk.2ZZQBHAA.js";m();d();var p=["default","extra-small","small","medium","large"],D={title:"UI Components/Icon",component:"omni-icon",argTypes:{size:{control:"radio",options:p},slot:{control:"text"}},"[Default Slot]":{control:"text"}},M={render:t=>i`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${l(t.size)}" icon="${l(t.icon)}">
      ${c(t["[Default Slot]"])}
    </omni-icon>
  `,name:"Interactive",args:{size:"default","[Default Slot]":g`<svg
    version="1.1"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <g transform="translate(-2,-2)">
      <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
    </g>
  </svg>`,icon:void 0},play:async t=>{let a=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector("slot").assignedElements().find(r=>r.tagName.toLowerCase()==="svg");await e(a).toBeTruthy()}},N={render:t=>i` <omni-icon data-testid="test-icon" size="${t.size}"> ${c(t["[Default Slot]"])} </omni-icon> `,name:"SVG",args:{size:"large","[Default Slot]":`<svg
                version="1.1"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <g transform="translate(-2,-2)">
                  <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
                </g>
              </svg>`},play:async t=>{let a=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector("slot").assignedElements().find(r=>r.tagName.toLowerCase()==="svg");await e(a).toBeTruthy()}},y={render:t=>i`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${t.size}" icon="${t.icon}"></omni-icon>
  `,name:"Local Source",args:{size:"default",icon:"./assets/images/colors.svg"},play:async t=>{let o=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector("img");await e(o).toBeTruthy(),await e(o.src.endsWith(y.args.icon.replace("./","/"))).toBeTruthy()}},f={render:t=>i`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${t.size}" icon="${t.icon}"></omni-icon>
  `,name:"Remote Source",args:{size:"default",icon:"https://img.shields.io/badge/Source-remote-lightgrey.svg"},play:async t=>{let o=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector("img");await e(o).toBeTruthy(),await e(o.src).toEqual(f.args.icon)}},h={render:t=>i`
    <!-- Add Material to your project, e.g. Adding below link in <head>-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <!-- ------------------------------------------------------------- -->

    <omni-icon data-testid="test-icon" size="${t.size}" icon="${t.icon}"> </omni-icon>
  `,args:{size:"default",icon:"@material/receipt_long"},play:async t=>{let o=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector(".material-icon");await e(o).toBeTruthy(),await e(o.innerText).toEqual(h.args.icon.replace("@material/",""))}};export{y as Icon_Path,M as Interactive,h as Material,N as SVG,f as URL,D as default};
//# sourceMappingURL=Icon.stories.js.map
