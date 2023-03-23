import{u as d}from"../chunks-js/chunk.WA6C3RAL.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.HEGWAMTE.js";import"../chunks-js/chunk.BMVIQMEU.js";import"../chunks-js/chunk.FJG2EZL6.js";import{a as l}from"../chunks-js/chunk.7QF4VYJR.js";import{a as m}from"../chunks-js/chunk.CFP25WDL.js";import{c as a}from"../chunks-js/chunk.555UF2OF.js";import{d as n}from"../chunks-js/chunk.ZDXRLLLZ.js";import"../chunks-js/chunk.7YN44Q4N.js";import"../chunks-js/chunk.CHYIO324.js";import{b as r}from"../chunks-js/chunk.CIM3NS6G.js";import{l as g,o as p}from"../chunks-js/chunk.2ZZQBHAA.js";g();p();var F={title:"UI Components/Icon",component:"omni-icon"},q={render:t=>r`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${m(t.size)}" icon="${m(t.icon)}">
      ${l(t["[Default Slot]"])}
    </omni-icon>
  `,name:"Interactive",args:{size:"default","[Default Slot]":d`<svg
    version="1.1"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <g transform="translate(-2,-2)">
      <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
    </g>
  </svg>`,icon:void 0},play:async t=>{var s;let o=((s=a(t.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:s.querySelector("slot")).assignedElements().find(i=>i.tagName.toLowerCase()==="svg");await n(o).toBeTruthy()}},R={render:t=>r` <omni-icon data-testid="test-icon" size="${t.size}"> ${l(t["[Default Slot]"])} </omni-icon> `,name:"SVG",description:"Set html/svg content to display as an icon.",args:{size:"large","[Default Slot]":d`
            <svg
                version="1.1"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <g transform="translate(-2,-2)">
                  <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
                </g>
              </svg>
              `},play:async t=>{var s;let o=((s=a(t.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:s.querySelector("slot")).assignedElements().find(i=>i.tagName.toLowerCase()==="svg");await n(o).toBeTruthy()}},H={render:t=>r`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${t.size}" icon="${t.icon}"></omni-icon>
  `,name:"Local Source",description:"Set the icon to display as a local source file.",args:{size:"default",icon:"./assets/images/colors.svg"},play:async t=>{var o;let e=(o=a(t.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:o.querySelector("img");await n(e).toBeTruthy(),await n(e.src.endsWith(t.args.icon.replace("./","/"))).toBeTruthy()}},D={render:t=>r`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${t.size}" icon="${t.icon}"></omni-icon>
  `,name:"Remote Source",description:"Set the icon to display as a remote file.",args:{size:"default",icon:"https://img.shields.io/badge/Source-remote-lightgrey.svg"},play:async t=>{var o;let e=(o=a(t.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:o.querySelector("img");await n(e).toBeTruthy(),await n(e==null?void 0:e.src).toEqual(t.args.icon)}},y={render:t=>r`
    <!-- Add Material to your project, e.g. Adding below link in <head>-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <!-- ------------------------------------------------------------- -->

    <omni-icon data-testid="test-icon" size="${t.size}" icon="${t.icon}"> </omni-icon>
  `,description:"Set the icon to display as a font icon from the Material Icons library.",args:{size:"default",icon:"@material/receipt_long"},play:async t=>{var o,s,i;let e=(o=a(t.canvasElement).getByTestId("test-icon").shadowRoot)==null?void 0:o.querySelector(".material-icon");await n(e).toBeTruthy(),await n(e==null?void 0:e.innerText).toEqual((i=(s=y.args)==null?void 0:s.icon)==null?void 0:i.replace("@material/",""))}};export{q as Interactive,H as Local_Source,y as Material,D as Remote_Source,R as SVG,F as default};
//# sourceMappingURL=Icon.stories.js.map
