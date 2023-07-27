import"../chunks-js/chunk.MJMXFVNU.js";import"../chunks-js/chunk.VB3ZKFMN.js";import{E as t,m as r,x as c}from"../chunks-js/chunk.OQGANNKN.js";import"../chunks-js/chunk.Z5LIJAXH.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.XUUOUKOL.js";import"../chunks-js/chunk.D4QWJ7ZS.js";import"../chunks-js/chunk.MYG5FMLT.js";import"../chunks-js/chunk.2EDJFZZN.js";import{a as i}from"../chunks-js/chunk.N3FDHMD3.js";import"../chunks-js/chunk.YX3UUKJ3.js";import"../chunks-js/chunk.LB764BBD.js";import{a}from"../chunks-js/chunk.XCXCHO25.js";import"../chunks-js/chunk.KRAWXAJA.js";import"../chunks-js/chunk.LUCH4Y6K.js";import"../chunks-js/chunk.PNTHLTQK.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as o,e as n}from"../chunks-js/chunk.L3RZWW2F.js";import{m as s,p}from"../chunks-js/chunk.BF43NN75.js";s();p();var m={render:e=>o`
    <omni-chip data-testid="test-chip" label="${a(e.label)}" ?closable=${e.closable} ?disabled="${e.disabled}"
      >${e.chip_icon?o`${`\r
`}${i(r("chip_icon",e.chip_icon))}`:n}${e.close_icon?o`${`\r
`}${i(r("close_icon",e.close_icon))}`:n}
    </omni-chip>
  `,frameworkSources:[{framework:"Vue",load:e=>t(m.render(e),void 0,l=>l.replace(" disabled",' :disabled="true"').replace(" closable",' :closable="true"'))}],name:"Interactive",args:{label:"Chip",closable:!0,disabled:!1,chip_icon:c`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: orange" width="100%" height="100%"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`,close_icon:""}},F={render:e=>o` <omni-chip data-testid="test-chip" label="${a(e.label)}"> </omni-chip> `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}/>;`}],name:"Label",description:"Set a text value to display within.",args:{label:"Label"}},d={render:e=>o` <omni-chip data-testid="test-chip" label="${a(e.label)}" ?closable=${e.closable}> </omni-chip> `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}${e.closable?" closable":""}/>;`},{framework:"Vue",load:e=>t(d.render(e),void 0,l=>l.replace(" disabled",' :disabled="true"').replace(" closable",' :closable="true"'))}],name:"Closable",description:"Add a close icon to the component.",args:{label:"Closable",closable:!0}},h={render:e=>o` <omni-chip data-testid="test-chip" label="${a(e.label)}" ?disabled="${e.disabled}"> </omni-chip> `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}${e.disabled?" disabled":""}/>;`},{framework:"Vue",load:e=>t(h.render(e),void 0,l=>l.replace(" disabled",' :disabled="true"').replace(" closable",' :closable="true"'))}],name:"Disabled",description:"Prevent interaction (pointer events).",args:{label:"Disabled",disabled:!0}},M={render:e=>o`
    <omni-chip data-testid="test-chip" label="${a(e.label)}" ?closable=${e.closable}> ${i(e.chip_icon)} </omni-chip>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}>
                    <svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" style={{fill: 'orange'}}><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>
                  </OmniChip>;`}],name:"Chip Icon",description:"Set html content to display as an icon.",args:{label:"Chip",closable:!1,chip_icon:c`<svg slot="chip_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" style="fill: orange"><path d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25Zm0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 .743.648L17 12a.75.75 0 0 1-.75.75h-3.5v3.5a.75.75 0 0 1-.648.743L12 17a.75.75 0 0 1-.75-.75v-3.5h-3.5a.75.75 0 0 1-.743-.648L7 12a.75.75 0 0 1 .75-.75h3.5v-3.5a.75.75 0 0 1 .648-.743Z"/></svg>`}},b={render:e=>o`
    <omni-chip data-testid="test-chip" label="${a(e.label)}" ?closable=${e.closable}>
      ${i(e.chip_icon)} ${i(e.close_icon)}
    </omni-chip>
  `,frameworkSources:[{framework:"React",load:e=>`import { OmniChip } from "@capitec/omni-components-react/chip";

const App = () => <OmniChip${e.label?` label='${e.label}'`:""}${e.closable?" closable":""}>
                    <svg slot="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>
                  </OmniChip>;`},{framework:"Vue",load:e=>t(b.render(e),void 0,l=>l.replace(" disabled",' :disabled="true"').replace(" closable",' :closable="true"'))}],name:"Custom Close Icon",description:"Set html content to display as the close icon.",args:{label:"Close",closable:!0,close_icon:c`<svg slot="close_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="m7.446 6.397.084.073L13 11.939l5.47-5.47a.75.75 0 0 1 1.133.977l-.073.084L14.061 13l5.47 5.47a.75.75 0 0 1-.977 1.133l-.084-.073L13 14.061l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084L11.939 13l-5.47-5.47a.75.75 0 0 1 .977-1.133Z"/></svg>`}};export{M as Chip_Slot_Icon,d as Closable,b as Custom_Close_Icon,h as Disabled,m as Interactive,F as Label};
//# sourceMappingURL=Chip.stories.js.map
