import"../chunks-js/chunk.AQFJVA42.js";import"../chunks-js/chunk.WUGGBYKL.js";import"../chunks-js/chunk.GCYWZJAD.js";import"../chunks-js/chunk.BRGMWPWN.js";import"../chunks-js/chunk.7GTL3UTF.js";import"../chunks-js/chunk.7TN6OKXQ.js";import"../chunks-js/chunk.KUQKUKJU.js";import"../chunks-js/chunk.BWVUO6QN.js";import"../chunks-js/chunk.AO7MOS6V.js";import"../chunks-js/chunk.REGOF75Z.js";import"../chunks-js/chunk.BYBHUMNH.js";import"../chunks-js/chunk.TUSCPOW2.js";import"../chunks-js/chunk.OBYEJZVH.js";import{a as g}from"../chunks-js/chunk.Q2BPVRSR.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.F7QUJQT5.js";import"../chunks-js/chunk.DQOCMMM3.js";import"../chunks-js/chunk.SP23GGNY.js";import"../chunks-js/chunk.KDHQ5YGM.js";import"../chunks-js/chunk.EN6UE33R.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.MK3VJKMI.js";import"../chunks-js/chunk.32LOAOEJ.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import"../chunks-js/chunk.YJTMLTQQ.js";import"../chunks-js/chunk.O52MSNMN.js";import"../chunks-js/chunk.2LYGVPQV.js";import"../chunks-js/chunk.FRXPEK37.js";import"../chunks-js/chunk.Q7YEMCNP.js";import"../chunks-js/chunk.32VA26CG.js";import"../chunks-js/chunk.COMH455E.js";import"../chunks-js/chunk.QHKJCTSX.js";import"../chunks-js/chunk.LB3SEVFG.js";import"../chunks-js/chunk.5TKLJSC4.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.I3LVDBCB.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.XGCBNSF2.js";import"../chunks-js/chunk.5Y67EXLM.js";import"../chunks-js/chunk.V3AH72NQ.js";import"../chunks-js/chunk.LCIHREUY.js";import{E as c,m as o,x as i}from"../chunks-js/chunk.WI5F3R4J.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.H2SV3XAM.js";import"../chunks-js/chunk.ZPV4YWBP.js";import{a as n}from"../chunks-js/chunk.32OT4JFD.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as a}from"../chunks-js/chunk.F6MIXR4E.js";import{a as r,b as d,l as u,m as h,p as y}from"../chunks-js/chunk.BF43NN75.js";h();y();var q={title:"UI Components/Keyboard",component:"omni-keyboard"},s={render:e=>t`

    <!-- Add the Keyboard once to the DOM -->    
    <omni-keyboard id="keyboard-interactive" 
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
        `:t`<span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have the <code class="language-javascript">'attach-mode'</code> attribute set to <code class="language-javascript">'all'</code>.</span>`}
     
  `,name:"Interactive",description:()=>t`
            <style>
                .desc-line-item {                    
                    display: inline-flex;
                    flex-direction: row;
                    align-items: center;
                }

                .desc-line-item > strong {
                    white-space: nowrap;
                }
                
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

                .experimental-warning {
                    font-size: 1.4em;
                    font-weight: 600;
                    color: white;
                    background: orangered;
                    border: 2px solid orangered;
                    border-radius: 14px;
                    padding: 6px;
                }
            </style>
            <h1 class="experimental-warning">The Keyboard is an experimental component and subject to breaking changes!</h1>
            <br/>
            <br/>
            <span>The Keyboard supports <code class="language-html">&lt;input&gt;</code> and <code class="language-html">&lt;textarea&gt;</code> elements as well as custom web components that internally utilise <code class="language-html">&lt;input&gt;</code> or <code class="language-html">&lt;textarea&gt;</code> elements.</span>
            <br/>
            <span>All Omni Components input fields are fully supported.</span>
        `,args:{clearLabel:"Clear",actionLabel:"Enter",closeLabel:"Close",spaceLabel:"Space",attachMode:"all","caps-off":i`<omni-caps-off-icon style="display: inherit;"></omni-caps-off-icon>`,"caps-on":i`<omni-caps-on-icon style="display: inherit;"></omni-caps-on-icon>`,"caps-lock":i`<omni-caps-lock-icon style="display: inherit;"></omni-caps-lock-icon>`,"action-done":i`<omni-check-icon style="display: inherit;"></omni-check-icon>`,"action-enter":"","action-go":i`<omni-arrow-right-icon style="display: inherit;"></omni-arrow-right-icon>`,"action-next":i`<omni-next-icon style="display: inherit;"></omni-next-icon>`,"action-previous":i`<omni-previous-icon style="display: inherit;"></omni-previous-icon>`,"action-search":i`<omni-search-icon style="display: inherit;"></omni-search-icon>`,"action-send":i`<omni-send-icon style="display: inherit;"></omni-send-icon>`,backspace:i`<omni-backspace-icon style="display: inherit;"></omni-backspace-icon>`,clear:"",close:i`<omni-chevron-down-icon style="display: inherit;"></omni-chevron-down-icon>`}},p=t`
<div class="keyboard-showcase">
    <omni-label type="subtitle" label="Opt In Attach (With attach-mode='attribute' on the Keyboard)"></omni-label>
    <!-- Opt In Attach -->
    <span>No data-omni-keyboard-attach attribute means the input field is not opted in for the Keyboard.</span>
    <omni-text-field label="Not Opted In" tabindex="7"></omni-text-field> 
    <span>Adding the data-omni-keyboard-attach attribute means the input field is opted in for the Keyboard.</span>
    <omni-text-field data-omni-keyboard-attach label="Opted In" tabindex="8"></omni-text-field> 
</div>
`,z=d(r({},s),{description:()=>t`
    <span>When the <code class="language-javascript">'attach-mode'</code> attribute is set to <code class="language-javascript">'attribute'</code> on the Keyboard, then the Keyboard will only react to supported inputs with the <code class="language-javascript">'data-omni-keyboard-attach'</code> attribute without a value.</span>
    `,frameworkSources:[{framework:"HTML",load:()=>c(p),disableCodePen:!0}],render:e=>s.args.attachMode==="attribute"?p:t`
        <div class="keyboard-showcase">
            <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have the <code class="language-javascript">'attach-mode'</code> attribute set to <code class="language-javascript">'attribute'</code>.</span>
            <omni-button @click="${()=>{s.args.attachMode="attribute",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code class="language-javascript">'attach-mode'</code> to <code class="language-javascript">'attribute'</code></span></omni-button>
        </div>
        `,name:"Attach By Attribute"}),k=t`
<div class="keyboard-showcase">

    <omni-label type="subtitle" label="Opt In Attach for specific Keyboard (With attach-mode='id' on the Keyboard)"></omni-label>
    <!-- Opt In Attach -->
    <span>No data-omni-keyboard-attach attribute means the input field is not opted in for the Keyboard.</span>
    <omni-text-field label="Not Opted In" tabindex="9"></omni-text-field> 
    <span>Adding the data-omni-keyboard-attach attribute but no specified id means the input field is not opted in for that specific Keyboard.</span>
    <omni-text-field data-omni-keyboard-attach label="Not Opted In" tabindex="10"></omni-text-field> 
    <span>Adding the data-omni-keyboard-attach for the interactive keyboard id means the input field is opted in for that specific Keyboard.</span>
    <omni-text-field data-omni-keyboard-attach="keyboard-interactive" label="Text Field" tabindex="11"></omni-text-field> 

</div>
`,R=d(r({},s),{description:()=>t`
    <span>When the <code class="language-javascript">'attach-mode'</code> attribute is set to <code class="language-javascript">'id'</code> on the Keyboard, then the Keyboard will only react to supported inputs with the <code class="language-javascript">'data-omni-keyboard-attach'</code> attribute set equal to the Keyboard id.</span>
    `,render:e=>s.args.attachMode==="id"?k:t`
    <div class="keyboard-showcase">
    <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code class="language-javascript">'attach-mode'</code> attribute set to <code class="language-javascript">'id'</code>.</span>
        <omni-button @click="${()=>{s.args.attachMode="id",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code class="language-javascript">'attach-mode'</code> to <code class="language-javascript">'id'</code></span></omni-button>
    </div>
    `,frameworkSources:[{framework:"HTML",load:()=>c(p),disableCodePen:!0}],name:"Attach By Id"}),X=d(r({},s),{description:()=>t`
    <span>When the <code class="language-javascript">'enterkeyhint'</code> attribute is set on a supported input, the Keyboard's call to action button will react to it accordingly.</span>
    <br/>
    <span>The <code class="language-javascript">'enterkeyhint'</code> attribute is supported as follows:
        <ul>
            <li><code class="language-javascript">'enter'</code> (Default) - The <code class="language-javascript">'action-enter'</code> slot will apply to the call to action button. If not provided, the value defined with the <code class="language-javascript">'action-label'</code> attribute on the keyboard will be displayed on the call to action button.</li>
            <li><code class="language-javascript">'go'</code> - The <code class="language-javascript">'action-go'</code> slot will apply to the call to action button. If not provided, a right arrow icon <omni-arrow-right-icon class="example-icon-preview"></omni-arrow-right-icon> will be displayed by default.</li>
            <li><code class="language-javascript">'done'</code> - The <code class="language-javascript">'action-done'</code> slot will apply to the call to action button. If not provided, a checkmark icon <omni-check-icon class="example-icon-preview"></omni-check-icon> will be displayed by default.</li>
            <li><code class="language-javascript">'next'</code> - The <code class="language-javascript">'action-next'</code> slot will apply to the call to action button. If not provided, an icon of a right arrow within a circle <omni-next-icon class="example-icon-preview"></omni-next-icon> will be displayed by default.</li>
            <li><code class="language-javascript">'previous'</code> - The <code class="language-javascript">'action-previous'</code> slot will apply to the call to action button. If not provided, an icon of a left arrow within a circle <omni-previous-icon class="example-icon-preview"></omni-previous-icon> will be displayed by default. The Keyboard's default behaviour of focusing the next <code class="language-javascript">'tabIndex'</code> will also reverse to focus the previous instead.</li>
            <li><code class="language-javascript">'search'</code> - The <code class="language-javascript">'action-search'</code> slot will apply to the call to action button. If not provided, a magnifying glass icon <omni-search-icon class="example-icon-preview"></omni-search-icon> will be displayed by default.</li>
            <li><code class="language-javascript">'send'</code> - The <code class="language-javascript">'action-send'</code> slot will apply to the call to action button. If not provided, a paper plane icon <omni-send-icon class="example-icon-preview"></omni-send-icon> will be displayed by default.</li>
        </ul>
    </span>
    `,frameworkSources:[{framework:"HTML",load:()=>c(p),disableCodePen:!0}],render:e=>s.args.attachMode==="all"?t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Enter Key Variations"></omni-label>
            <!-- Enter Key Variations -->
            <span>Text input with enterkeyhint="enter"</span>
            <omni-text-field enterkeyhint="enter" label="Enter" tabindex="12"></omni-text-field> 
            <span>Number input with enterkeyhint="enter"</span>
            <omni-number-field enterkeyhint="enter" label="Enter" tabindex="13"></omni-number-field> 
            <span>Text input with enterkeyhint="go"</span>
            <omni-text-field enterkeyhint="go" label="Go" tabindex="14"></omni-text-field> 
            <span>Number input with enterkeyhint="go"</span>
            <omni-number-field enterkeyhint="go" label="Go" tabindex="15"></omni-number-field> 
            <span>Text input with enterkeyhint="done"</span>
            <omni-text-field enterkeyhint="done" label="Done" tabindex="16"></omni-text-field> 
            <span>Number input with enterkeyhint="done"</span>
            <omni-number-field enterkeyhint="done" label="Done" tabindex="17"></omni-number-field> 
            <span>Text input with enterkeyhint="next"</span>
            <omni-text-field enterkeyhint="next" label="Next" tabindex="18"></omni-text-field> 
            <span>Number input with enterkeyhint="next"</span>
            <omni-number-field enterkeyhint="next" label="Next" tabindex="19"></omni-number-field>
            <span>Text input with enterkeyhint="previous"</span>
            <omni-text-field enterkeyhint="previous" label="Previous" tabindex="20"></omni-text-field> 
            <span>Number input with enterkeyhint="previous"</span>
            <omni-number-field enterkeyhint="previous" label="Previous" tabindex="21"></omni-number-field>
            <span>Text input with enterkeyhint="search"</span>
            <omni-text-field enterkeyhint="search" label="Search" tabindex="22"></omni-text-field> 
            <span>Number input with enterkeyhint="search"</span>
            <omni-number-field enterkeyhint="search" label="Search" tabindex="23"></omni-number-field> 
            <span>Text input with enterkeyhint="send"</span>
            <omni-text-field enterkeyhint="send" label="Send" tabindex="24"></omni-text-field> 
            <span>Number input with enterkeyhint="send"</span>
            <omni-number-field enterkeyhint="send" label="Send" tabindex="25"></omni-number-field> 
        </div>
  `:t`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code class="language-javascript">'attach-mode'</code> attribute set to <code class="language-javascript">'attach-mode'</code>.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code class="language-javascript">'attach-mode'</code> to <code class="language-javascript">'all'</code></span></omni-button>
            </div>`,name:"Enter Key Hint Variations"}),J=d(r({},s),{description:()=>t`
    <span>The Keyboard supports masking of the input value on the display preview.</span>
    <span>Masking will apply to the following:
        <ul>
            <li>Any elements with the <code class="language-javascript">'data-omni-keyboard-mask'</code> attribute .</li>
            <li>Any supported web component with the <code class="language-javascript">'type'</code> attribute set to <code class="language-javascript">'password'</code> on their internal <code class="language-html">&lt;input&gt;</code> elements.</li>
            <li>Any supported web component utilising <code class="language-javascript">'data-omni-keyboard-mask'</code> on their internal <code class="language-html">&lt;input&gt;</code> elements.</li>
        </ul>
    </span>
    `,frameworkSources:[{framework:"HTML",load:()=>c(p),disableCodePen:!0}],render:e=>s.args.attachMode==="all"?t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Masked Values"></omni-label>
            <!-- Masked Values -->
            <span>Text input with data-omni-keyboard-mask attribute</span>
            <omni-text-field data-omni-keyboard-mask label="Masked on Keyboard" value="Only visible in field" tabindex="26"></omni-text-field> 
            <span>Password input (Utilises type="password" internally)</span>
            <omni-password-field tabindex="27" value="Mask This"></omni-password-field>
            <span>Pin input (Utilises data-omni-keyboard-mask internally)</span>
            <omni-pin-field tabindex="28" value="1234"></omni-pin-field>
        </div>
  `:t`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code class="language-javascript">'attach-mode'</code> attribute set to <code class="language-javascript">'all'</code>.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code class="language-javascript">'attach-mode'</code> to <code class="language-javascript">'all'</code></span></omni-button>
            </div>`,name:"Masked Values"}),Q=d(r({},s),{description:()=>t`
    <span>When the <code class="language-javascript">'data-omni-keyboard-no-display'</code> attribute is set on a supported input, the display preview on the Keyboard header will not be visible.</span>
    `,frameworkSources:[{framework:"HTML",load:()=>c(p),disableCodePen:!0}],render:e=>s.args.attachMode==="all"?t`
    <div class="keyboard-showcase">
        <omni-label type="subtitle" label="Hide Display Value"></omni-label>
        <!-- Hide Display Value -->
        <span>Input field with a value and no data-omni-keyboard-no-display attribute</span>
        <omni-text-field label="Display not hidden" value="Visible on Keyboard" tabindex="29"></omni-text-field> 
        <span>Input field with a value and data-omni-keyboard-no-display attribute</span>
        <omni-text-field data-omni-keyboard-no-display value="Not visible on Keyboard" label="Display hidden" tabindex="30"></omni-text-field> 
    </div>  
  `:t`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code class="language-javascript">'attach-mode'</code> attribute set to <code class="language-javascript">'all'</code>.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code class="language-javascript">'attach-mode'</code> to <code class="language-javascript">'all'</code></span></omni-button>
            </div>`,name:"Hide Display Value"}),Y=d(r({},s),{description:()=>t`
    <span>When the <code class="language-javascript">'data-omni-keyboard-hidden'</code> attribute is set on a supported input, the Keyboard will not apply to that input.</span>
    
    `,frameworkSources:[{framework:"HTML",load:()=>c(p),disableCodePen:!0}],render:e=>t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Hide Keyboard"></omni-label>
            <!-- Hide Keyboard -->
            <span>Input field without data-omni-keyboard-hidden</span>
            <omni-text-field label="With Keyboard" tabindex="31"></omni-text-field>
            <span>Input field with data-omni-keyboard-hidden</span>
            <omni-text-field data-omni-keyboard-hidden label="No Keyboard" tabindex="32"></omni-text-field>
        </div>  
  `,name:"Hide Keyboard"}),Z=d(r({},s),{description:()=>t`
    <span>The Keyboard will react accordingly to the <code class="language-javascript">'data-omni-keyboard-mode'</code> attribute on supported target elements.</span>
        
    `,frameworkSources:[{framework:"HTML",load:()=>c(p),disableCodePen:!0}],render:e=>s.args.attachMode==="all"?t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Alternate Keyboard Modes"></omni-label>
            <!-- Alternate Keyboard Modes on Omni Components input fields -->
            <span>Search field with data-omni-keyboard-mode="numeric"</span>
            <omni-search-field label="Search Field" data-omni-keyboard-mode="numeric" no-native-keyboard tabindex="33"></omni-search-field>
            <span>Text field with data-omni-keyboard-mode="tel"</span>
            <omni-text-field label="Text Field" data-omni-keyboard-mode="tel" no-native-keyboard tabindex="34"></omni-text-field>
        </div>
  `:t`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code class="language-javascript">'attach-mode'</code> attribute set to <code class="language-javascript">'all'</code>.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code class="language-javascript">'attach-mode'</code> to <code class="language-javascript">'all'</code></span></omni-button>
            </div>`,name:"Alternate Modes"}),ee={render:e=>t`

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
        <span>Text input with enterkeyhint="enter"</span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="enter" label="Enter" tabindex="35"></omni-text-field> 
        <span>Number input with enterkeyhint="enter"</span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="enter" label="Enter" tabindex="36"></omni-number-field> 
        <span>Text input with enterkeyhint="go"</span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="go" label="Go" tabindex="37"></omni-text-field> 
        <span>Number input with enterkeyhint="go"</span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="go" label="Go" tabindex="38"></omni-number-field> 
        <span>Text input with enterkeyhint="done"</span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="done" label="Done" tabindex="39"></omni-text-field> 
        <span>Number input with enterkeyhint="done"</span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="done" label="Done" tabindex="40"></omni-number-field> 
        <span>Text input with enterkeyhint="next"</span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="next" label="Next" tabindex="41"></omni-text-field> 
        <span>Number input with enterkeyhint="next"</span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="next" label="Next" tabindex="42"></omni-number-field>
        <span>Text input with enterkeyhint="previous"</span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="previous" label="Previous" tabindex="43"></omni-text-field> 
        <span>Number input with enterkeyhint="previous"</span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="previous" label="Previous" tabindex="44"></omni-number-field>
        <span>Text input with enterkeyhint="search"</span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="search" label="Search" tabindex="45"></omni-text-field> 
        <span>Number input with enterkeyhint="search"</span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="search" label="Search" tabindex="46"></omni-number-field> 
        <span>Text input with enterkeyhint="send"</span>
        <omni-text-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="send" label="Send" tabindex="47"></omni-text-field> 
        <span>Number input with enterkeyhint="send"</span>
        <omni-number-field data-omni-keyboard-attach="keyboard-slots" enterkeyhint="send" label="Send" tabindex="48"></omni-number-field> 

    </div>

  `,name:"Slotted Content",args:{clearLabel:"Clear",actionLabel:"Enter",closeLabel:"Close",spaceLabel:"Space",attachMode:"id","caps-off":i`<span class="center-inline">lower</span>`,"caps-on":i`<span class="center-inline">upper</span>`,"caps-lock":i`<span class="center-inline">UPPER</span>`,"action-done":i`<span class="center-inline">Done</span>`,"action-enter":i`<span class="center-inline">↵</span>`,"action-go":i`<span class="center-inline">Go</span>`,"action-next":i`<span class="center-inline">→</span>`,"action-previous":i`<span class="center-inline">←</span>`,"action-search":i`<span class="center-inline">Search</span>`,"action-send":i`<span class="center-inline">Send</span>`,backspace:i`<span class="center-inline">⌫</span>`,clear:i`<span class="center-inline">(X)</span>`,close:i`<span class="center-inline">^</span>`}},f,te={render:e=>{let b="keyboard-script-generated";return document.getElementById(b)||g.create({id:b,attachMode:e.attachMode,clearLabel:e.clearLabel,actionLabel:e.actionLabel,closeLabel:e.closeLabel,spaceLabel:e.spaceLabel,backspace:()=>{let l=document.createElement("span");l.textContent="\u232B",l.style.height="100%",l.style.display="inline-flex",l.style.alignItems="center";let m=l.style.color;return l.addEventListener("mouseenter",()=>{m=l.style.color,l.style.color="lightgreen"}),l.addEventListener("mouseleave",()=>{l.style.color=m}),l}}),t`
            <div class="keyboard-showcase">
                <span>Input field utilising Keyboard generated from script</span>
                <omni-text-field data-omni-keyboard-attach="keyboard-script-generated" label="Keyboard from script" tabindex="49"></omni-text-field> 
            </div> 
        `},name:"Via Script",args:{attachMode:"id",clearLabel:"Clear",actionLabel:"\u21B5",closeLabel:"Close",spaceLabel:"Space"},frameworkSources:[{framework:"HTML",disableCodePen:!1,load:()=>i(f||(f=u([`
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
    `])))}]},ae=d(r({},s),{description:()=>t`
    <span>The Keyboard supports vanilla native HTML <code class="language-html">&lt;input&gt;</code> and <code class="language-html">&lt;textarea&gt;</code> elements.</span>
    `,frameworkSources:[{framework:"HTML",load:()=>c(p),disableCodePen:!0}],render:e=>s.args.attachMode==="all"?t`
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
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have <code class="language-javascript">'attach-mode'</code> attribute set to <code class="language-javascript">'all'</code>.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <code class="language-javascript">'attach-mode'</code> to <code class="language-javascript">'all'</code></span></omni-button>
            </div>`,name:"Vanilla Inputs"});export{Z as Alternate_Modes,z as Attach_By_Attribute,R as Attach_By_Id,X as Enter_Key_Hint_Variations,Q as Hide_Display_Value,Y as Hide_Keyboard,s as Interactive,J as Masked_Values,ee as Slotted_Content,ae as Vanilla_Inputs,te as Via_Script,q as default};
//# sourceMappingURL=Keyboard.stories.js.map
