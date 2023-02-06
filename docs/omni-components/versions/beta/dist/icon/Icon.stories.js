import{u as m}from"../chunks-js/chunk.K3YYK5GB.js";import"../chunks-js/chunk.MPJVWYSG.js";import"../chunks-js/chunk.D6UL6COZ.js";import"../chunks-js/chunk.BMVIQMEU.js";import{a as c}from"../chunks-js/chunk.3FTDPY75.js";import{a as l}from"../chunks-js/chunk.R4IMIBZU.js";import{c as n}from"../chunks-js/chunk.QC5ZUB6O.js";import{d as o}from"../chunks-js/chunk.YQLTAQFI.js";import"../chunks-js/chunk.VOM777LA.js";import"../chunks-js/chunk.ZO5UBYOG.js";import"../chunks-js/chunk.CHYIO324.js";import{b as i}from"../chunks-js/chunk.3GEUDTAZ.js";import{l as d,o as g}from"../chunks-js/chunk.2ZZQBHAA.js";d();g();var F={title:"UI Components/Icon",component:"omni-icon"},q={render:t=>i`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${l(t.size)}" icon="${l(t.icon)}">
      ${c(t["[Default Slot]"])}
    </omni-icon>
  `,name:"Interactive",args:{size:"default","[Default Slot]":m`<svg
    version="1.1"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <g transform="translate(-2,-2)">
      <path d="m8.229 14.062-3.521-3.541L5.75 9.479l2.479 2.459 6.021-6L15.292 7Z" />
    </g>
  </svg>`,icon:void 0},play:async t=>{let a=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector("slot").assignedElements().find(r=>r.tagName.toLowerCase()==="svg");await o(a).toBeTruthy()}},R={render:t=>i` <omni-icon data-testid="test-icon" size="${t.size}"> ${c(t["[Default Slot]"])} </omni-icon> `,name:"SVG",description:"Set html/svg content to display as an icon.",args:{size:"large","[Default Slot]":m`
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
              `},play:async t=>{let a=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector("slot").assignedElements().find(r=>r.tagName.toLowerCase()==="svg");await o(a).toBeTruthy()}},M={render:t=>i`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${t.size}" icon="${t.icon}"></omni-icon>
  `,name:"Local Source",description:"Set the icon to display as a local source file.",args:{size:"default",icon:"./assets/images/colors.svg"},play:async t=>{let e=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector("img");await o(e).toBeTruthy(),await o(e.src.endsWith(t.args.icon.replace("./","/"))).toBeTruthy()}},D={render:t=>i`
    <!-- Icons loaded by content path instead of font-based or slotted content will not be able to be styled directly -->

    <omni-icon data-testid="test-icon" size="${t.size}" icon="${t.icon}"></omni-icon>
  `,name:"Remote Source",description:"Set the icon to display as a remote file.",args:{size:"default",icon:"https://img.shields.io/badge/Source-remote-lightgrey.svg"},play:async t=>{let e=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector("img");await o(e).toBeTruthy(),await o(e.src).toEqual(t.args.icon)}},p={render:t=>i`
    <!-- Add Material to your project, e.g. Adding below link in <head>-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <!-- ------------------------------------------------------------- -->

    <omni-icon data-testid="test-icon" size="${t.size}" icon="${t.icon}"> </omni-icon>
  `,description:"Set the icon to display as a font icon from the Material Icons library.",args:{size:"default",icon:"@material/receipt_long"},play:async t=>{let e=n(t.canvasElement).getByTestId("test-icon").shadowRoot.querySelector(".material-icon");await o(e).toBeTruthy(),await o(e.innerText).toEqual(p.args.icon.replace("@material/",""))}};export{q as Interactive,M as Local_Source,p as Material,D as Remote_Source,R as SVG,F as default};
//# sourceMappingURL=Icon.stories.js.map
