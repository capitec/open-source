import"../chunks-js/chunk.AQFJVA42.js";import"../chunks-js/chunk.CLV5KZPK.js";import"../chunks-js/chunk.GCYWZJAD.js";import"../chunks-js/chunk.REGOF75Z.js";import"../chunks-js/chunk.P3W5FYX6.js";import"../chunks-js/chunk.ETAWSV56.js";import"../chunks-js/chunk.KUQKUKJU.js";import"../chunks-js/chunk.BWVUO6QN.js";import"../chunks-js/chunk.IZHBUMNS.js";import"../chunks-js/chunk.BRGMWPWN.js";import"../chunks-js/chunk.NTMIC6LB.js";import"../chunks-js/chunk.TUSCPOW2.js";import"../chunks-js/chunk.6CRFFYGD.js";import"../chunks-js/chunk.GUEBHYHC.js";import"../chunks-js/chunk.V3QRUW2P.js";import{a as k}from"../chunks-js/chunk.2GH2OLFB.js";import"../chunks-js/chunk.ZXJ44HCA.js";import"../chunks-js/chunk.LKB7GPCD.js";import"../chunks-js/chunk.FYB3SILJ.js";import"../chunks-js/chunk.EKDUR4GG.js";import"../chunks-js/chunk.34ECILTR.js";import"../chunks-js/chunk.RRMVFD73.js";import"../chunks-js/chunk.X3PIXP25.js";import"../chunks-js/chunk.IGQNFXPZ.js";import"../chunks-js/chunk.FHOQW3Y5.js";import"../chunks-js/chunk.VZU32DDG.js";import"../chunks-js/chunk.QUMZK63Q.js";import"../chunks-js/chunk.QHKJCTSX.js";import"../chunks-js/chunk.32VA26CG.js";import"../chunks-js/chunk.4YDXAN6Y.js";import"../chunks-js/chunk.XKSDJNEX.js";import"../chunks-js/chunk.I6KSHNKF.js";import"../chunks-js/chunk.CUAVHP62.js";import"../chunks-js/chunk.FOPCJEY3.js";import"../chunks-js/chunk.BMTJOHJJ.js";import"../chunks-js/chunk.A6RJOB4D.js";import"../chunks-js/chunk.34WDYOTS.js";import"../chunks-js/chunk.5Y67EXLM.js";import{E as r,m as o,x as i}from"../chunks-js/chunk.VE7MW5EU.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.YISFJ54N.js";import"../chunks-js/chunk.GHJKW37V.js";import"../chunks-js/chunk.NVVKKFIX.js";import"../chunks-js/chunk.MRDDZJ5F.js";import"../chunks-js/chunk.SWEPLAKL.js";import{a as n}from"../chunks-js/chunk.J37ISGRJ.js";import"../chunks-js/chunk.CDUHNCVH.js";import"../chunks-js/chunk.DUTPH62F.js";import"../chunks-js/chunk.N5FYN2MY.js";import"../chunks-js/chunk.R7EUQMUJ.js";import"../chunks-js/chunk.E2CUUU4Y.js";import"../chunks-js/chunk.Y6UVSDXK.js";import{d as t,g as a}from"../chunks-js/chunk.UDCULUBW.js";import{a as d,b as c,l as u,m as h,p as y}from"../chunks-js/chunk.BF43NN75.js";h();y();var l={render:e=>t`

        <!-- Add the Keyboard once to the DOM -->    
        <omni-keyboard 
            id="keyboard-interactive" 
            attach-mode="${e.attachMode}" 
            clear-label="${e.clearLabel}" 
            space-label="${e.spaceLabel}" 
            action-label="${e.actionLabel}" 
            close-label="${e.closeLabel}" >${e["caps-off"]?t`${`\r
`}${n(o("caps-off",e["caps-off"]))}`:a}${e["caps-on"]?t`${`\r
`}${n(o("caps-on",e["caps-on"]))}`:a}${e["caps-lock"]?t`${`\r
`}${n(o("caps-lock",e["caps-lock"]))}`:a}${e.close?t`${`\r
`}${n(o("close",e.close))}`:a}${e.clear?t`${`\r
`}${n(o("clear",e.clear))}`:a}${e.backspace?t`${`\r
`}${n(o("backspace",e.backspace))}`:a}${e["action-done"]?t`${`\r
`}${n(o("action-done",e["action-done"]))}`:a}${e["action-go"]?t`${`\r
`}${n(o("action-go",e["action-go"]))}`:a}${e["action-next"]?t`${`\r
`}${n(o("action-next",e["action-next"]))}`:a}${e["action-previous"]?t`${`\r
`}${n(o("action-previous",e["action-previous"]))}`:a}${e["action-search"]?t`${`\r
`}${n(o("action-search",e["action-search"]))}`:a}${e["action-send"]?t`${`\r
`}${n(o("action-send",e["action-send"]))}`:a}${e["action-enter"]?t`${`\r
`}${n(o("action-enter",e["action-enter"]))}`:a}
        </omni-keyboard>
        
        <!-- Examples -->
        ${e.attachMode==="all"?t`
            <div class="keyboard-showcase">
                <omni-text-field label="Text Field" tabindex="1"></omni-text-field>  
                <omni-currency-field thousands-separator="," label="Currency Field"  tabindex="2"></omni-currency-field>
                <omni-number-field label="Number Field"  tabindex="3"></omni-number-field>
                <omni-password-field label="Password Field" tabindex="4"></omni-password-field>
                <omni-pin-field label="Pin Field" tabindex="5"></omni-pin-field>
                <omni-search-field label="Search Field" tabindex="6"></omni-search-field>
                <omni-email-field label="Email Field"  tabindex="7"></omni-email-field>
            </div>
            `:t`<span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have the <code>attach-mode</code> attribute set to <code class="language-js">'all'</code>.</span>`}
    `,name:"Interactive",description:()=>t`
        <style>
            .keyboard-showcase {            
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: stretch;
            }

            .keyboard-showcase > * {
                margin: 10px;
            }

            .center-inline {
                height: 100%;
                display: inline-flex;
                align-items: center;
            }

            .example-icon-preview {
                flex-direction: row !important;
                width: 20px;
                height: 20px;
                display: inline-flex !important;
                color: var(--omni-theme-primary-color);
                fill: currentColor;
            }
        </style>
        <p>
            <span>
                The Keyboard supports <code class="language-html">&lt;input&gt;</code> and <code class="language-html">&lt;textarea&gt;</code> 
                elements as well as custom web components that internally utilise <code class="language-html">&lt;input&gt;</code> or 
                <code class="language-html">&lt;textarea&gt;</code> elements.
            </span>
        </p>
        <p>
            <span>All Omni Components input fields are fully supported.</span>
        </p>
    `,args:{clearLabel:"Clear",actionLabel:"Enter",closeLabel:"Close",spaceLabel:"Space",attachMode:"all","caps-off":i`<omni-caps-off-icon style="display: inherit;"></omni-caps-off-icon>`,"caps-on":i`<omni-caps-on-icon style="display: inherit;"></omni-caps-on-icon>`,"caps-lock":i`<omni-caps-lock-icon style="display: inherit;"></omni-caps-lock-icon>`,"action-done":i`<omni-check-icon style="display: inherit;"></omni-check-icon>`,"action-enter":"","action-go":i`<omni-arrow-right-icon style="display: inherit;"></omni-arrow-right-icon>`,"action-next":i`<omni-next-icon style="display: inherit;"></omni-next-icon>`,"action-previous":i`<omni-previous-icon style="display: inherit;"></omni-previous-icon>`,"action-search":i`<omni-search-icon style="display: inherit;"></omni-search-icon>`,"action-send":i`<omni-send-icon style="display: inherit;"></omni-send-icon>`,backspace:i`<omni-backspace-icon style="display: inherit;"></omni-backspace-icon>`,clear:"",close:i`<omni-chevron-down-icon style="display: inherit;"></omni-chevron-down-icon>`}},p=t`
<div class="keyboard-showcase">
    <omni-label type="subtitle">
        <span>Opt In Attach (With <code class="language-js">attach-mode='attribute'</code> on the Keyboard)</span>
    </omni-label>
    <!-- Opt In Attach -->
    <span>No <code>data-omni-keyboard-attach</code> attribute means the input field is not opted in for the Keyboard.</span>
    <omni-text-field label="Not Opted In" tabindex="7"></omni-text-field> 
    <span>Adding the <code>data-omni-keyboard-attach</code> attribute means the input field is opted in for the Keyboard.</span>
    <omni-text-field data-omni-keyboard-attach label="Opted In" tabindex="8"></omni-text-field> 
</div>
`,G=c(d({},l),{description:()=>t`
    <span>When the <code>attach-mode</code> attribute is set to <code class="language-js">'attribute'</code> on the Keyboard, then the Keyboard will only react to supported inputs with the <code>data-omni-keyboard-attach</code> attribute without a value.</span>
    `,frameworkSources:[{framework:"HTML",load:()=>r(p),disableCodePen:!0}],render:()=>l.args.attachMode==="attribute"?p:t`
        <div class="keyboard-showcase">
            <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have the <code>attach-mode</code> attribute set to <code class="language-js">'attribute'</code>.</span>
            <omni-button @click="${()=>{l.args.attachMode="attribute",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code>attach-mode</code> to <code class="language-js">'attribute'</code></span></omni-button>
        </div>
        `,name:"Attach By Attribute"}),g=t`
<div class="keyboard-showcase">

    <omni-label type="subtitle">
        <span>Opt In Attach for specific Keyboard (With <code class="language-js">attach-mode='id'</code> on the Keyboard)</span>
    </omni-label>
    <!-- Opt In Attach -->
    <span>No <code>data-omni-keyboard-attach</code> attribute means the input field is not opted in for the Keyboard.</span>
    <omni-text-field label="Not Opted In" tabindex="9"></omni-text-field> 
    <span>Adding the <code>data-omni-keyboard-attach</code> attribute but no specified id means the input field is not opted in for that specific Keyboard.</span>
    <omni-text-field data-omni-keyboard-attach label="Not Opted In" tabindex="10"></omni-text-field> 
    <span>Adding the <code>data-omni-keyboard-attach</code> for the interactive keyboard id means the input field is opted in for that specific Keyboard.</span>
    <omni-text-field data-omni-keyboard-attach="keyboard-interactive" label="Text Field" tabindex="11"></omni-text-field> 

</div>
`,q=c(d({},l),{description:()=>t`
    <span>When the <code>attach-mode</code> attribute is set to <code class="language-js">'id'</code> on the Keyboard, then it will only react to supported inputs with the <code>data-omni-keyboard-attach</code> attribute set equal to the Keyboard's id.</span>
    `,render:()=>l.args.attachMode==="id"?g:t`
    <div class="keyboard-showcase">
    <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code>attach-mode</code> attribute set to <code class="language-js">'id'</code>.</span>
        <omni-button @click="${()=>{l.args.attachMode="id",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code>attach-mode</code> to <code class="language-js">'id'</code></span></omni-button>
    </div>
    `,frameworkSources:[{framework:"HTML",load:()=>r(p),disableCodePen:!0}],name:"Attach By Id"}),R=c(d({},l),{description:()=>t`
    <span>When the <code>enterkeyhint</code> attribute is set on a supported input, the Keyboard's call to action button will react to it accordingly. It is supported as follows:
        <ul>
            <li><code class="language-js">'enter'</code> (Default) - The <code>action-enter</code> slot will apply to the call to action button. If not provided, the value defined with the <code>action-label</code> attribute on the keyboard will be displayed on the call to action button.</li>
            <li><code class="language-js">'go'</code> - The <code>action-go</code> slot will apply to the call to action button. If not provided, a right arrow icon <omni-arrow-right-icon class="example-icon-preview"></omni-arrow-right-icon> will be displayed by default.</li>
            <li><code class="language-js">'done'</code> - The <code>action-done</code> slot will apply to the call to action button. If not provided, a checkmark icon <omni-check-icon class="example-icon-preview"></omni-check-icon> will be displayed by default.</li>
            <li><code class="language-js">'next'</code> - The <code>action-next</code> slot will apply to the call to action button. If not provided, an icon of a right arrow within a circle <omni-next-icon class="example-icon-preview"></omni-next-icon> will be displayed by default.</li>
            <li><code class="language-js">'previous'</code> - The <code>action-previous</code> slot will apply to the call to action button. If not provided, an icon of a left arrow within a circle <omni-previous-icon class="example-icon-preview"></omni-previous-icon> will be displayed by default. The Keyboard's default behaviour of focusing the next <code>tabIndex</code> will also reverse to focus the previous instead.</li>
            <li><code class="language-js">'search'</code> - The <code>action-search</code> slot will apply to the call to action button. If not provided, a magnifying glass icon <omni-search-icon class="example-icon-preview"></omni-search-icon> will be displayed by default.</li>
            <li><code class="language-js">'send'</code> - The <code>action-send</code> slot will apply to the call to action button. If not provided, a paper plane icon <omni-send-icon class="example-icon-preview"></omni-send-icon> will be displayed by default.</li>
        </ul>
    </span>
    `,frameworkSources:[{framework:"HTML",load:()=>r(p),disableCodePen:!0}],render:()=>l.args.attachMode==="all"?t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Enter Key Variations"></omni-label>
            <!-- Enter Key Variations -->
            <span>Text input with <code class="language-js">enterkeyhint="enter"</code></span>
            <omni-text-field enterkeyhint="enter" label="Enter" tabindex="12"></omni-text-field> 
            <span>Number input with <code class="language-js">enterkeyhint="enter"</code></span>
            <omni-number-field enterkeyhint="enter" label="Enter" tabindex="13"></omni-number-field> 
            <span>Text input with <code class="language-js">enterkeyhint="go"</code></span>
            <omni-text-field enterkeyhint="go" label="Go" tabindex="14"></omni-text-field> 
            <span>Number input with <code class="language-js">enterkeyhint="go"</code></span>
            <omni-number-field enterkeyhint="go" label="Go" tabindex="15"></omni-number-field> 
            <span>Text input with <code class="language-js">enterkeyhint="done"</code></span>
            <omni-text-field enterkeyhint="done" label="Done" tabindex="16"></omni-text-field> 
            <span>Number input with <code class="language-js">enterkeyhint="done"</code></span>
            <omni-number-field enterkeyhint="done" label="Done" tabindex="17"></omni-number-field> 
            <span>Text input with <code class="language-js">enterkeyhint="next"</code></span>
            <omni-text-field enterkeyhint="next" label="Next" tabindex="18"></omni-text-field> 
            <span>Number input with <code class="language-js">enterkeyhint="next"</code></span>
            <omni-number-field enterkeyhint="next" label="Next" tabindex="19"></omni-number-field>
            <span>Text input with <code class="language-js">enterkeyhint="previous"</code></span>
            <omni-text-field enterkeyhint="previous" label="Previous" tabindex="20"></omni-text-field> 
            <span>Number input with <code class="language-js">enterkeyhint="previous"</code></span>
            <omni-number-field enterkeyhint="previous" label="Previous" tabindex="21"></omni-number-field>
            <span>Text input with <code class="language-js">enterkeyhint="search"</code></span>
            <omni-text-field enterkeyhint="search" label="Search" tabindex="22"></omni-text-field> 
            <span>Number input with <code class="language-js">enterkeyhint="search"</code></span>
            <omni-number-field enterkeyhint="search" label="Search" tabindex="23"></omni-number-field> 
            <span>Text input with <code class="language-js">enterkeyhint="send"</code></span>
            <omni-text-field enterkeyhint="send" label="Send" tabindex="24"></omni-text-field> 
            <span>Number input with <code class="language-js">enterkeyhint="send"</code></span>
            <omni-number-field enterkeyhint="send" label="Send" tabindex="25"></omni-number-field> 
        </div>
  `:t`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code>attach-mode</code> attribute set to <code class="language-js">'attach-mode'</code>.</span>
                <omni-button @click="${()=>{l.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code>attach-mode</code> to <code class="language-js">'all'</code></span></omni-button>
            </div>`,name:"Enter Key Hint Variations"}),X=c(d({},l),{description:()=>t`
    <span>The Keyboard supports masking of the input value on the display preview.</span>
    <span>Masking will apply to the following:
        <ul>
            <li>Any elements with the <code>data-omni-keyboard-mask</code> attribute .</li>
            <li>Any supported web component with the <code>type</code> attribute set to <code class="language-js">'password'</code> on their internal <code class="language-html">&lt;input&gt;</code> elements.</li>
            <li>Any supported web component utilising <code>data-omni-keyboard-mask</code> on their internal <code class="language-html">&lt;input&gt;</code> elements.</li>
        </ul>
    </span>
    `,frameworkSources:[{framework:"HTML",load:()=>r(p),disableCodePen:!0}],render:()=>l.args.attachMode==="all"?t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Masked Values"></omni-label>
            <!-- Masked Values -->
            <span>Text input with <code>data-omni-keyboard-mask</code> attribute</span>
            <omni-text-field data-omni-keyboard-mask label="Masked on Keyboard" value="Only visible in field" tabindex="26"></omni-text-field> 
            <span>Password input (Utilises <code class="language-js">type="password"</code> internally)</span>
            <omni-password-field tabindex="27" value="Mask This"></omni-password-field>
            <span>Pin input (Utilises <code>data-omni-keyboard-mask</code> internally)</span>
            <omni-pin-field tabindex="28" value="1234"></omni-pin-field>
        </div>
  `:t`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code>attach-mode</code> attribute set to <code class="language-js">'all'</code>.</span>
                <omni-button @click="${()=>{l.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code>attach-mode</code> to <code class="language-js">'all'</code></span></omni-button>
            </div>`,name:"Masked Values"}),z=c(d({},l),{description:()=>t`
    <span>When the <code>data-omni-keyboard-no-display</code> attribute is set on a supported input, the display preview on the Keyboard header will not be visible.</span>
    `,frameworkSources:[{framework:"HTML",load:()=>r(p),disableCodePen:!0}],render:()=>l.args.attachMode==="all"?t`
    <div class="keyboard-showcase">
        <omni-label type="subtitle" label="Hide Display Value"></omni-label>
        <!-- Hide Display Value -->
        <span>Input field with a value and no <code>data-omni-keyboard-no-display</code> attribute</span>
        <omni-text-field label="Display not hidden" value="Visible on Keyboard" tabindex="29"></omni-text-field> 
        <span>Input field with a value and <code>data-omni-keyboard-no-display</code> attribute</span>
        <omni-text-field data-omni-keyboard-no-display value="Not visible on Keyboard" label="Display hidden" tabindex="30"></omni-text-field> 
    </div>  
  `:t`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code class="language-js">'attach-mode</code> attribute set to <code class="language-js">'all'</code>.</span>
                <omni-button @click="${()=>{l.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code class="language-js">'attach-mode'</code> to <code class="language-js">'all'</code></span></omni-button>
            </div>`,name:"Hide Display Value"}),J=c(d({},l),{description:()=>t`
    <span>When the <code>data-omni-keyboard-hidden</code> attribute is set on a supported input, the Keyboard will not apply to that input.</span>
    
    `,frameworkSources:[{framework:"HTML",load:()=>r(p),disableCodePen:!0}],render:()=>t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Hide Keyboard"></omni-label>
            <!-- Hide Keyboard -->
            <span>Input field without <code>data-omni-keyboard-hidden</code></span>
            <omni-text-field label="With Keyboard" tabindex="31"></omni-text-field>
            <span>Input field with <code>data-omni-keyboard-hidden</code></span>
            <omni-text-field data-omni-keyboard-hidden label="No Keyboard" tabindex="32"></omni-text-field>
        </div>  
  `,name:"Hide Keyboard"}),Q=c(d({},l),{description:()=>t`
    <span>The Keyboard will react accordingly to the <code>data-omni-keyboard-mode</code> attribute on supported target elements.</span>
        
    `,frameworkSources:[{framework:"HTML",load:()=>r(p),disableCodePen:!0}],render:()=>l.args.attachMode==="all"?t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Alternate Keyboard Modes"></omni-label>
            <!-- Alternate Keyboard Modes on Omni Components input fields -->
            <span>Search field with <code class="language-js">data-omni-keyboard-mode="numeric"</code></span>
            <omni-search-field label="Search Field" data-omni-keyboard-mode="numeric" no-native-keyboard tabindex="33"></omni-search-field>
            <span>Text field with <code class="language-js">data-omni-keyboard-mode="tel"</code></span>
            <omni-text-field label="Text Field" data-omni-keyboard-mode="tel" no-native-keyboard tabindex="34"></omni-text-field>
        </div>
  `:t`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code>attach-mode</code> attribute set to <code class="language-js">'all'</code>.</span>
                <omni-button @click="${()=>{l.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code>attach-mode</code> to <code class="language-js">'all'</code></span></omni-button>
            </div>`,name:"Alternate Modes"}),Y={render:e=>t`

    <!-- Add the Keyboard with slots to the DOM -->    
    <omni-keyboard id="keyboard-slots" 
        attach-mode="${e.attachMode}" 
        clear-label="${e.clearLabel}" 
        space-label="${e.spaceLabel}" 
        action-label="${e.actionLabel}" 
        close-label="${e.closeLabel}" >${e["caps-off"]?t`${`\r
`}${n(o("caps-off",e["caps-off"]))}`:a}${e["caps-on"]?t`${`\r
`}${n(o("caps-on",e["caps-on"]))}`:a}${e["caps-lock"]?t`${`\r
`}${n(o("caps-lock",e["caps-lock"]))}`:a}${e.close?t`${`\r
`}${n(o("close",e.close))}`:a}${e.clear?t`${`\r
`}${n(o("clear",e.clear))}`:a}${e.backspace?t`${`\r
`}${n(o("backspace",e.backspace))}`:a}${e["action-done"]?t`${`\r
`}${n(o("action-done",e["action-done"]))}`:a}${e["action-go"]?t`${`\r
`}${n(o("action-go",e["action-go"]))}`:a}${e["action-next"]?t`${`\r
`}${n(o("action-next",e["action-next"]))}`:a}${e["action-previous"]?t`${`\r
`}${n(o("action-previous",e["action-previous"]))}`:a}${e["action-search"]?t`${`\r
`}${n(o("action-search",e["action-search"]))}`:a}${e["action-send"]?t`${`\r
`}${n(o("action-send",e["action-send"]))}`:a}${e["action-enter"]?t`${`\r
`}${n(o("action-enter",e["action-enter"]))}`:a}
    </omni-keyboard>


    <div class="keyboard-showcase">

        <omni-label type="subtitle" label="Slotted Enter Key Variations"></omni-label>
        <!-- Enter Key Variations -->
        <span>Text input with <code class="language-js">enterkeyhint="enter"</code></span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="enter" label="Enter" tabindex="35"></omni-text-field> 
        <span>Number input with <code class="language-js">enterkeyhint="enter"</code></span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="enter" label="Enter" tabindex="36"></omni-number-field> 
        <span>Text input with <code class="language-js">enterkeyhint="go"</code></span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="go" label="Go" tabindex="37"></omni-text-field> 
        <span>Number input with <code class="language-js">enterkeyhint="go"</code></span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="go" label="Go" tabindex="38"></omni-number-field> 
        <span>Text input with <code class="language-js">enterkeyhint="done"</code></span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="done" label="Done" tabindex="39"></omni-text-field> 
        <span>Number input with <code class="language-js">enterkeyhint="done"</code></span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="done" label="Done" tabindex="40"></omni-number-field> 
        <span>Text input with <code class="language-js">enterkeyhint="next"</code></span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="next" label="Next" tabindex="41"></omni-text-field> 
        <span>Number input with <code class="language-js">enterkeyhint="next"</code></span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="next" label="Next" tabindex="42"></omni-number-field>
        <span>Text input with <code class="language-js">enterkeyhint="previous"</code></span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="previous" label="Previous" tabindex="43"></omni-text-field> 
        <span>Number input with <code class="language-js">enterkeyhint="previous"</code></span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="previous" label="Previous" tabindex="44"></omni-number-field>
        <span>Text input with <code class="language-js">enterkeyhint="search"</code></span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="search" label="Search" tabindex="45"></omni-text-field> 
        <span>Number input with <code class="language-js">enterkeyhint="search"</code></span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="search" label="Search" tabindex="46"></omni-number-field> 
        <span>Text input with <code class="language-js">enterkeyhint="send"</code></span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="send" label="Send" tabindex="47"></omni-text-field> 
        <span>Number input with <code class="language-js">enterkeyhint="send"</code></span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="send" label="Send" tabindex="48"></omni-number-field> 

    </div>

  `,name:"Slotted Content",args:{clearLabel:"Clear",actionLabel:"Enter",closeLabel:"Close",spaceLabel:"Space",attachMode:"id","caps-off":i`<span class="center-inline">lower</span>`,"caps-on":i`<span class="center-inline">upper</span>`,"caps-lock":i`<span class="center-inline">UPPER</span>`,"action-done":i`<span class="center-inline">Done</span>`,"action-enter":i`<span class="center-inline">↵</span>`,"action-go":i`<span class="center-inline">Go</span>`,"action-next":i`<span class="center-inline">→</span>`,"action-previous":i`<span class="center-inline">←</span>`,"action-search":i`<span class="center-inline">Search</span>`,"action-send":i`<span class="center-inline">Send</span>`,backspace:i`<span class="center-inline">⌫</span>`,clear:i`<span class="center-inline">(X)</span>`,close:i`<span class="center-inline">^</span>`}},f,Z={render:e=>{let m="keyboard-script-generated";return document.getElementById(m)||k.create({id:m,attachMode:e.attachMode,clearLabel:e.clearLabel,actionLabel:e.actionLabel,closeLabel:e.closeLabel,spaceLabel:e.spaceLabel,backspace:()=>{let s=document.createElement("span");s.textContent="\u232B",s.style.height="100%",s.style.display="inline-flex",s.style.alignItems="center";let b=s.style.color;return s.addEventListener("mouseenter",()=>{b=s.style.color,s.style.color="lightgreen"}),s.addEventListener("mouseleave",()=>{s.style.color=b}),s}}),t`
            <div class="keyboard-showcase">
                <span>Input field utilising Keyboard generated from a script.</span>
                <omni-text-field data-omni-keyboard-attach="keyboard-script-generated" label="Keyboard from script" tabindex="49"></omni-text-field> 
            </div> 
        `},name:"Via Script",args:{attachMode:"id",clearLabel:"Clear",actionLabel:"\u21B5",closeLabel:"Close",spaceLabel:"Space"},frameworkSources:[{framework:"Vue",sourceParts:{htmlFragment:`<!-- Add an input that targets the keyboard id created from script -->
<omni-text-field data-omni-keyboard-attach="keyboard-script-generated" label="Keyboard from script" tabindex="49"></omni-text-field> `,jsFragment:`import { Keyboard } from '@capitec/omni-components/keyboard';

Keyboard.create({
    id: 'keyboard-script-generated',
    attachMode: 'id',
    clearLabel: 'Clear',
    actionLabel: '\u21B5',
    closeLabel: 'Close',
    spaceLabel: 'Space',
    backspace: () => {
        const elm = document.createElement('span');
        elm.textContent = '\u232B';
        elm.style.height = '100%';
        elm.style.display = 'inline-flex';
        elm.style.alignItems = 'center';
        let color = elm.style.color;
        elm.addEventListener('mouseenter', () => {
            color = elm.style.color;
            elm.style.color = 'lightgreen';
        })
        elm.addEventListener('mouseleave', () => {
            elm.style.color = color;
        })

        return elm;
    }
});`}},{framework:"Lit",sourceParts:{htmlFragment:`<!-- Add an input that targets the keyboard id created from script -->
<omni-text-field data-omni-keyboard-attach="keyboard-script-generated" label="Keyboard from script" tabindex="49"></omni-text-field> `,jsFragment:`import { Keyboard } from '@capitec/omni-components/keyboard';

Keyboard.create({
    id: 'keyboard-script-generated',
    attachMode: 'id',
    clearLabel: 'Clear',
    actionLabel: '\u21B5',
    closeLabel: 'Close',
    spaceLabel: 'Space',
    backspace: () => {
        const elm = document.createElement('span');
        elm.textContent = '\u232B';
        elm.style.height = '100%';
        elm.style.display = 'inline-flex';
        elm.style.alignItems = 'center';
        let color = elm.style.color;
        elm.addEventListener('mouseenter', () => {
            color = elm.style.color;
            elm.style.color = 'lightgreen';
        })
        elm.addEventListener('mouseleave', () => {
            elm.style.color = color;
        })

        return elm;
    }
});`}},{framework:"HTML",disableCodePen:!1,load:()=>i(f||(f=u([`
<!-- Add an input that targets the keyboard id created from script -->
<omni-text-field data-omni-keyboard-attach="keyboard-script-generated" label="Keyboard from script" tabindex="49"></omni-text-field> 

<!-- A script that creates a keyboard to its default parent container (document.body) with some custom button labels including a custom backspace via render function -->
<script type="module">
    import { Keyboard } from '@capitec/omni-components/keyboard';
    Keyboard.create({
        id: 'keyboard-script-generated',
        attachMode: 'id',
        clearLabel: 'Clear',
        actionLabel: '\u21B5',
        closeLabel: 'Close',
        spaceLabel: 'Space',
        backspace: () => {
            const elm = document.createElement('span');
            elm.textContent = '\u232B';
            elm.style.height = '100%';
            elm.style.display = 'inline-flex';
            elm.style.alignItems = 'center';
            let color = elm.style.color;
            elm.addEventListener('mouseenter', () => {
                color = elm.style.color;
                elm.style.color = 'lightgreen';
            })
            elm.addEventListener('mouseleave', () => {
                elm.style.color = color;
            })

            return elm;
        }
    });
<\/script>
    `])))}]},ee=c(d({},l),{description:()=>t`
    <span>The Keyboard supports vanilla native HTML <code class="language-html">&lt;input&gt;</code> and <code class="language-html">&lt;textarea&gt;</code> elements.</span>
    `,frameworkSources:[{framework:"HTML",load:()=>r(p),disableCodePen:!0}],render:()=>l.args.attachMode==="all"?t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Vanilla Element Types"></omni-label>
            <!-- Vanilla Element Types -->
            <span>text</span>
            <input type="text" tabindex="50" />
            <span>tel</span>
            <input type="tel" tabindex="51" />
            <span>number</span>
            <input type="number" tabindex="52" />
            <span>email</span>
            <input type="email" tabindex="53" />
            <span>password</span>
            <input type="password" tabindex="54" />
            <span>search</span>
            <input type="search" tabindex="55" />
            <span>url</span>
            <input type="url" tabindex="56" />
            <span>textarea</span>
            <textarea tabindex="57"></textarea>
        </div>
  `:t`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code>attach-mode</code> attribute set to <code class="language-js">'all'</code>.</span>
                <omni-button @click="${()=>{l.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code class="language-js">attach-mode</code> to <code class="language-js">'all'</code></span></omni-button>
            </div>`,name:"Vanilla Inputs"});export{Q as Alternate_Modes,G as Attach_By_Attribute,q as Attach_By_Id,R as Enter_Key_Hint_Variations,z as Hide_Display_Value,J as Hide_Keyboard,l as Interactive,X as Masked_Values,Y as Slotted_Content,ee as Vanilla_Inputs,Z as Via_Script};
//# sourceMappingURL=Keyboard.stories.js.map
