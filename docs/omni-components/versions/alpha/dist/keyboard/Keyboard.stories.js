import"../chunks-js/chunk.AQFJVA42.js";import"../chunks-js/chunk.B2Y7HXQI.js";import"../chunks-js/chunk.GCYWZJAD.js";import"../chunks-js/chunk.KB2GK3YT.js";import"../chunks-js/chunk.BWVUO6QN.js";import"../chunks-js/chunk.REGOF75Z.js";import"../chunks-js/chunk.4ZLR7QVG.js";import"../chunks-js/chunk.BRGMWPWN.js";import"../chunks-js/chunk.FYHSNAQ7.js";import"../chunks-js/chunk.TUSCPOW2.js";import"../chunks-js/chunk.KUQKUKJU.js";import"../chunks-js/chunk.3X333K55.js";import"../chunks-js/chunk.3ZDZXPVI.js";import{a as y}from"../chunks-js/chunk.TDO4QCZ4.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.M6SSC5HK.js";import"../chunks-js/chunk.DQOCMMM3.js";import"../chunks-js/chunk.SP23GGNY.js";import"../chunks-js/chunk.KDHQ5YGM.js";import"../chunks-js/chunk.EN6UE33R.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.MK3VJKMI.js";import"../chunks-js/chunk.32LOAOEJ.js";import"../chunks-js/chunk.XGCBNSF2.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import"../chunks-js/chunk.YJTMLTQQ.js";import"../chunks-js/chunk.O52MSNMN.js";import"../chunks-js/chunk.2LYGVPQV.js";import"../chunks-js/chunk.FRXPEK37.js";import"../chunks-js/chunk.Q7YEMCNP.js";import"../chunks-js/chunk.32VA26CG.js";import"../chunks-js/chunk.ZCVSWAQ2.js";import"../chunks-js/chunk.QHKJCTSX.js";import"../chunks-js/chunk.AT4DXONZ.js";import"../chunks-js/chunk.UG7N6GYS.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.WASXY5YJ.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.5Y67EXLM.js";import"../chunks-js/chunk.WV2GEXQ2.js";import{a}from"../chunks-js/chunk.G3QHRCKP.js";import{C as c,k as o,v as i}from"../chunks-js/chunk.6VUVFGIV.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import"../chunks-js/chunk.2TH7MEM4.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as t,d as n}from"../chunks-js/chunk.F6MIXR4E.js";import{a as l,b as d,l as m,m as h,p as u}from"../chunks-js/chunk.BF43NN75.js";h();u();var q={title:"UI Components/Keyboard",component:"omni-keyboard"},r={render:e=>t`

    <!-- Add the Keyboard once to the DOM -->    
    <omni-keyboard id="keyboard-interactive" 
        attach-mode="${e.attachMode}" 
        clear-label="${e.clearLabel}" 
        space-label="${e.spaceLabel}" 
        action-label="${e.actionLabel}" 
        close-label="${e.closeLabel}" >${e["caps-off"]?t`${`\r
`}${a(o("caps-off",e["caps-off"]))}`:n}${e["caps-on"]?t`${`\r
`}${a(o("caps-on",e["caps-on"]))}`:n}${e["caps-lock"]?t`${`\r
`}${a(o("caps-lock",e["caps-lock"]))}`:n}${e.close?t`${`\r
`}${a(o("close",e.close))}`:n}${e.clear?t`${`\r
`}${a(o("clear",e.clear))}`:n}${e.backspace?t`${`\r
`}${a(o("backspace",e.backspace))}`:n}${e["action-done"]?t`${`\r
`}${a(o("action-done",e["action-done"]))}`:n}${e["action-go"]?t`${`\r
`}${a(o("action-go",e["action-go"]))}`:n}${e["action-next"]?t`${`\r
`}${a(o("action-next",e["action-next"]))}`:n}${e["action-previous"]?t`${`\r
`}${a(o("action-previous",e["action-previous"]))}`:n}${e["action-search"]?t`${`\r
`}${a(o("action-search",e["action-search"]))}`:n}${e["action-send"]?t`${`\r
`}${a(o("action-send",e["action-send"]))}`:n}${e["action-enter"]?t`${`\r
`}${a(o("action-enter",e["action-enter"]))}`:n}
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
        `:t`<span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>`}
     
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
            <span>The Keyboard supports <strong>input</strong> and <strong>textarea</strong> elements as well as custom web components that internally utilise <strong>input</strong> or <strong>textarea</strong> elements.</span>
            <br/>
            <span>All Omni Components input fields are fully supported.</span>
        `,args:{clearLabel:"Clear",actionLabel:"Enter",closeLabel:"Close",spaceLabel:"Space",attachMode:"all","caps-off":i`<omni-caps-off-icon style="display: inherit;"></omni-caps-off-icon>`,"caps-on":i`<omni-caps-on-icon style="display: inherit;"></omni-caps-on-icon>`,"caps-lock":i`<omni-caps-lock-icon style="display: inherit;"></omni-caps-lock-icon>`,"action-done":i`<omni-check-icon style="display: inherit;"></omni-check-icon>`,"action-enter":"","action-go":i`<omni-arrow-right-icon style="display: inherit;"></omni-arrow-right-icon>`,"action-next":i`<omni-next-icon style="display: inherit;"></omni-next-icon>`,"action-previous":i`<omni-previous-icon style="display: inherit;"></omni-previous-icon>`,"action-search":i`<omni-search-icon style="display: inherit;"></omni-search-icon>`,"action-send":i`<omni-send-icon style="display: inherit;"></omni-send-icon>`,backspace:i`<omni-backspace-icon style="display: inherit;"></omni-backspace-icon>`,clear:"",close:i`<omni-chevron-down-icon style="display: inherit;"></omni-chevron-down-icon>`}},g=t`
<div class="keyboard-showcase">
    <omni-label type="subtitle" label="Opt In Attach (With attach-mode='attribute' on the Keyboard)"></omni-label>
    <!-- Opt In Attach -->
    <span>No data-omni-keyboard-attach attribute means the input field is not opted in for the Keyboard.</span>
    <omni-text-field label="Not Opted In" tabindex="7"></omni-text-field> 
    <span>Adding the data-omni-keyboard-attach attribute means the input field is opted in for the Keyboard.</span>
    <omni-text-field data-omni-keyboard-attach label="Opted In" tabindex="8"></omni-text-field> 
</div>
`,z=d(l({},r),{description:()=>t`
    <span>When the '<strong>attach-mode</strong>' attribute is set to '<strong>attribute</strong>' on the Keyboard, then the Keyboard will only react to supported inputs with the '<strong>data-omni-keyboard-attach</strong>' attribute without a value.</span>
    `,source:()=>c(g),render:e=>r.args.attachMode==="attribute"?g:t`
        <div class="keyboard-showcase">
            <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>attribute</strong>'.</span>
            <omni-button @click="${()=>{r.args.attachMode="attribute",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>attribute</strong></span></omni-button>
        </div>
        `,name:"Attach By Attribute"}),f=t`
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
`,R=d(l({},r),{description:()=>t`
    <span>When the '<strong>attach-mode</strong>' attribute is set to '<strong>id</strong>' on the Keyboard, then the Keyboard will only react to supported inputs with the '<strong>data-omni-keyboard-attach</strong>' attribute set equal to the Keyboard id.</span>
    `,render:e=>r.args.attachMode==="id"?f:t`
    <div class="keyboard-showcase">
    <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>id</strong>'.</span>
        <omni-button @click="${()=>{r.args.attachMode="id",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>id</strong></span></omni-button>
    </div>
    `,source:()=>c(f),name:"Attach By Id"}),X=d(l({},r),{description:()=>t`
    <span>When the '<strong>enterkeyhint</strong>' attribute is set on a supported input, the Keyboard's call to action button will react to it accordingly.</span>
    <br/>
    <span>The '<strong>enterkeyhint</strong>' attribute is supported as follows:
        <ul>
            <li><strong>enter</strong> (Default) - The '<strong>action-enter</strong>' slot will apply to the call to action button. If not provided, the value defined with the '<strong>action-label</strong>' attribute on the keyboard will be displayed on the call to action button.</li>
            <li><strong>go</strong> - The '<strong>action-go</strong>' slot will apply to the call to action button. If not provided, a right arrow icon <omni-arrow-right-icon class="example-icon-preview"></omni-arrow-right-icon> will be displayed by default.</li>
            <li><strong>done</strong> - The '<strong>action-done</strong>' slot will apply to the call to action button. If not provided, a checkmark icon <omni-check-icon class="example-icon-preview"></omni-check-icon> will be displayed by default.</li>
            <li><strong>next</strong> - The '<strong>action-next</strong>' slot will apply to the call to action button. If not provided, an icon of a right arrow within a circle <omni-next-icon class="example-icon-preview"></omni-next-icon> will be displayed by default.</li>
            <li><strong>previous</strong> - The '<strong>action-previous</strong>' slot will apply to the call to action button. If not provided, an icon of a left arrow within a circle <omni-previous-icon class="example-icon-preview"></omni-previous-icon> will be displayed by default. The Keyboard's default behaviour of focusing the next '<strong>tabIndex</strong>' will also reverse to focus the previous instead.</li>
            <li><strong>search</strong> - The '<strong>action-search</strong>' slot will apply to the call to action button. If not provided, a magnifying glass icon <omni-search-icon class="example-icon-preview"></omni-search-icon> will be displayed by default.</li>
            <li><strong>send</strong> - The '<strong>action-send</strong>' slot will apply to the call to action button. If not provided, a paper plane icon <omni-send-icon class="example-icon-preview"></omni-send-icon> will be displayed by default.</li>
        </ul>
    </span>
    `,render:e=>r.args.attachMode==="all"?t`
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
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{r.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Enter Key Hint Variations"}),J=d(l({},r),{description:()=>t`
    <span>The Keyboard supports masking of the input value on the display preview.</span>
    <span>Masking will apply to the following:
        <ul>
            <li>Any elements with the '<strong>data-omni-keyboard-mask</strong>' attribute .</li>
            <li>Any supported web component with the '<strong>type</strong>' attribute set to '<strong>password</strong>' on their internal <strong>input</strong> elements.</li>
            <li>Any supported web component utilising '<strong>data-omni-keyboard-mask</strong>' on their internal <strong>input</strong> elements.</li>
        </ul>
    </span>
    `,render:e=>r.args.attachMode==="all"?t`
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
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{r.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Masked Values"}),Q=d(l({},r),{description:()=>t`
    <span>When the '<strong>data-omni-keyboard-no-display</strong>' attribute is set on a supported input, the display preview on the Keyboard header will not be visible.</span>
    `,render:e=>r.args.attachMode==="all"?t`
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
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{r.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Hide Display Value"}),Y=d(l({},r),{description:()=>t`
    <span>When the '<strong>data-omni-keyboard-hidden</strong>' attribute is set on a supported input, the Keyboard will not apply to that input.</span>
    
    `,render:e=>t`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Hide Keyboard"></omni-label>
            <!-- Hide Keyboard -->
            <span>Input field without data-omni-keyboard-hidden</span>
            <omni-text-field label="With Keyboard" tabindex="31"></omni-text-field>
            <span>Input field with data-omni-keyboard-hidden</span>
            <omni-text-field data-omni-keyboard-hidden label="No Keyboard" tabindex="32"></omni-text-field>
        </div>  
  `,name:"Hide Keyboard"}),Z=d(l({},r),{description:()=>t`
    <span>The Keyboard will react accordingly to the '<strong>data-omni-keyboard-mode</strong>' attribute on supported target elements.</span>
        
    `,render:e=>r.args.attachMode==="all"?t`
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
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{r.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Alternate Modes"}),ee={render:e=>t`

    <!-- Add the Keyboard with slots to the DOM -->    
    <omni-keyboard id="keyboard-slots" 
        attach-mode="${e.attachMode}" 
        clear-label="${e.clearLabel}" 
        space-label="${e.spaceLabel}" 
        action-label="${e.actionLabel}" 
        close-label="${e.closeLabel}" >${e["caps-off"]?t`${`\r
`}${a(o("caps-off",e["caps-off"]))}`:n}${e["caps-on"]?t`${`\r
`}${a(o("caps-on",e["caps-on"]))}`:n}${e["caps-lock"]?t`${`\r
`}${a(o("caps-lock",e["caps-lock"]))}`:n}${e.close?t`${`\r
`}${a(o("close",e.close))}`:n}${e.clear?t`${`\r
`}${a(o("clear",e.clear))}`:n}${e.backspace?t`${`\r
`}${a(o("backspace",e.backspace))}`:n}${e["action-done"]?t`${`\r
`}${a(o("action-done",e["action-done"]))}`:n}${e["action-go"]?t`${`\r
`}${a(o("action-go",e["action-go"]))}`:n}${e["action-next"]?t`${`\r
`}${a(o("action-next",e["action-next"]))}`:n}${e["action-previous"]?t`${`\r
`}${a(o("action-previous",e["action-previous"]))}`:n}${e["action-search"]?t`${`\r
`}${a(o("action-search",e["action-search"]))}`:n}${e["action-send"]?t`${`\r
`}${a(o("action-send",e["action-send"]))}`:n}${e["action-enter"]?t`${`\r
`}${a(o("action-enter",e["action-enter"]))}`:n}
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

  `,name:"Slotted Content",args:{clearLabel:"Clear",actionLabel:"Enter",closeLabel:"Close",spaceLabel:"Space",attachMode:"id","caps-off":i`<span class="center-inline">lower</span>`,"caps-on":i`<span class="center-inline">upper</span>`,"caps-lock":i`<span class="center-inline">UPPER</span>`,"action-done":i`<span class="center-inline">Done</span>`,"action-enter":i`<span class="center-inline">↵</span>`,"action-go":i`<span class="center-inline">Go</span>`,"action-next":i`<span class="center-inline">→</span>`,"action-previous":i`<span class="center-inline">←</span>`,"action-search":i`<span class="center-inline">Search</span>`,"action-send":i`<span class="center-inline">Send</span>`,backspace:i`<span class="center-inline">⌫</span>`,clear:i`<span class="center-inline">(X)</span>`,close:i`<span class="center-inline">^</span>`}},x,te={render:e=>{let p="keyboard-script-generated";return document.getElementById(p)||y.create({id:p,attachMode:e.attachMode,clearLabel:e.clearLabel,actionLabel:e.actionLabel,closeLabel:e.closeLabel,spaceLabel:e.spaceLabel,backspace:()=>{let s=document.createElement("span");s.textContent="\u232B",s.style.height="100%",s.style.display="inline-flex",s.style.alignItems="center";let b=s.style.color;return s.addEventListener("mouseenter",()=>{b=s.style.color,s.style.color="lightgreen"}),s.addEventListener("mouseleave",()=>{s.style.color=b}),s}}),t`
            <div class="keyboard-showcase">
                <span>Input field utilising Keyboard generated from script</span>
                <omni-text-field data-omni-keyboard-attach="keyboard-script-generated" label="Keyboard from script" tabindex="49"></omni-text-field> 
            </div> 
        `},name:"Via Script",args:{attachMode:"id",clearLabel:"Clear",actionLabel:"\u21B5",closeLabel:"Close",spaceLabel:"Space"},source:()=>i(x||(x=m([`
<!-- Add an input that targets the keyboard id created from script -->
<omni-text-field data-omni-keyboard-attach="keyboard-script-generated" label="Keyboard from script" tabindex="49"></omni-text-field> 

<!-- A script that creates a keyboard to its default parent container (document.body) with some custom button labels including a custom backspace via render function -->
<script defer>
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
    `])))},ne=d(l({},r),{description:()=>t`
    <span>The Keyboard supports vanilla native HTML <strong>input</strong> and <strong>textarea</strong> elements.</span>
    `,render:e=>r.args.attachMode==="all"?t`
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
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{r.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Vanilla Inputs"});export{Z as Alternate_Modes,z as Attach_By_Attribute,R as Attach_By_Id,X as Enter_Key_Hint_Variations,Q as Hide_Display_Value,Y as Hide_Keyboard,r as Interactive,J as Masked_Values,ee as Slotted_Content,ne as Vanilla_Inputs,te as Via_Script,q as default};
//# sourceMappingURL=Keyboard.stories.js.map
