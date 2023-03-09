import"../chunks-js/chunk.AQFJVA42.js";import"../chunks-js/chunk.6DOLPVVV.js";import"../chunks-js/chunk.GCYWZJAD.js";import"../chunks-js/chunk.FHBJRI7D.js";import"../chunks-js/chunk.BWVUO6QN.js";import"../chunks-js/chunk.REGOF75Z.js";import"../chunks-js/chunk.XOIQEGQV.js";import"../chunks-js/chunk.BRGMWPWN.js";import"../chunks-js/chunk.J7C27AGN.js";import"../chunks-js/chunk.TUSCPOW2.js";import"../chunks-js/chunk.KUQKUKJU.js";import"../chunks-js/chunk.F2W556Y5.js";import"../chunks-js/chunk.4OX6BYI3.js";import{a as h}from"../chunks-js/chunk.ZG7N5LQS.js";import"../chunks-js/chunk.Y2FJIW7X.js";import"../chunks-js/chunk.M6SSC5HK.js";import"../chunks-js/chunk.DQOCMMM3.js";import"../chunks-js/chunk.SP23GGNY.js";import"../chunks-js/chunk.KDHQ5YGM.js";import"../chunks-js/chunk.EN6UE33R.js";import"../chunks-js/chunk.STJOQLHS.js";import"../chunks-js/chunk.MK3VJKMI.js";import"../chunks-js/chunk.32LOAOEJ.js";import"../chunks-js/chunk.XGCBNSF2.js";import"../chunks-js/chunk.YGXFZZKN.js";import"../chunks-js/chunk.ZR4UECQ6.js";import"../chunks-js/chunk.YJTMLTQQ.js";import"../chunks-js/chunk.O52MSNMN.js";import"../chunks-js/chunk.FRXPEK37.js";import"../chunks-js/chunk.Q7YEMCNP.js";import"../chunks-js/chunk.K2USPZBJ.js";import"../chunks-js/chunk.32VA26CG.js";import"../chunks-js/chunk.A4OEE4SJ.js";import"../chunks-js/chunk.QHKJCTSX.js";import"../chunks-js/chunk.CCWQI24E.js";import"../chunks-js/chunk.UG7N6GYS.js";import"../chunks-js/chunk.K2UMXYHA.js";import"../chunks-js/chunk.SR577AVI.js";import"../chunks-js/chunk.E3RY574V.js";import"../chunks-js/chunk.5Y67EXLM.js";import"../chunks-js/chunk.WV2GEXQ2.js";import{C as d,k as o,v as i}from"../chunks-js/chunk.FB7ASSMP.js";import"../chunks-js/chunk.P3AVSJ2D.js";import"../chunks-js/chunk.5NFB2EUQ.js";import"../chunks-js/chunk.U46MGZPC.js";import"../chunks-js/chunk.CFGXHLKC.js";import{a}from"../chunks-js/chunk.G3QHRCKP.js";import"../chunks-js/chunk.VPQMTJSA.js";import"../chunks-js/chunk.B6SUKNHE.js";import"../chunks-js/chunk.2HYOR3YM.js";import"../chunks-js/chunk.CWNKFZ3E.js";import"../chunks-js/chunk.S2K25ADN.js";import{b as e,d as n}from"../chunks-js/chunk.F6MIXR4E.js";import{a as p,b as l,l as m,m as u,p as y}from"../chunks-js/chunk.BF43NN75.js";u();y();var G={title:"UI Components/Keyboard",component:"omni-keyboard"},s={render:t=>e`

    <!-- Add the Keyboard once to the DOM -->    
    <omni-keyboard id="keyboard-interactive" 
        attach-mode="${t.attachMode}" 
        clear-label="${t.clearLabel}" 
        space-label="${t.spaceLabel}" 
        action-label="${t.ctaLabel}" 
        close-label="${t.closeLabel}" >${t["caps-off"]?e`${`\r
`}${a(o("caps-off",t["caps-off"]))}`:n}${t["caps-on"]?e`${`\r
`}${a(o("caps-on",t["caps-on"]))}`:n}${t["caps-on-permanent"]?e`${`\r
`}${a(o("caps-on-permanent",t["caps-on-permanent"]))}`:n}${t.close?e`${`\r
`}${a(o("close",t.close))}`:n}${t.clear?e`${`\r
`}${a(o("clear",t.clear))}`:n}${t.backspace?e`${`\r
`}${a(o("backspace",t.backspace))}`:n}${t["action-done"]?e`${`\r
`}${a(o("action-done",t["action-done"]))}`:n}${t["action-go"]?e`${`\r
`}${a(o("action-go",t["action-go"]))}`:n}${t["action-next"]?e`${`\r
`}${a(o("action-next",t["action-next"]))}`:n}${t["action-previous"]?e`${`\r
`}${a(o("action-previous",t["action-previous"]))}`:n}${t["action-search"]?e`${`\r
`}${a(o("action-search",t["action-search"]))}`:n}${t["action-send"]?e`${`\r
`}${a(o("action-send",t["action-send"]))}`:n}${t["action-enter"]?e`${`\r
`}${a(o("action-enter",t["action-enter"]))}`:n}
    </omni-keyboard>
    
    <!-- Examples -->
    ${t.attachMode==="all"?e`
        <div class="keyboard-showcase">
    
            <omni-label type="subtitle" label="Vanilla Element Types"></omni-label>
            <!-- Vanilla Element Types -->
            <span>text</span>
            <input type="text" tabindex="1" />
            <span>tel</span>
            <input type="tel" tabindex="2" />
            <span>number</span>
            <input type="number" tabindex="3" />
            <span>email</span>
            <input type="email" tabindex="4" />
            <span>password</span>
            <input type="password" tabindex="5" />
            <span>search</span>
            <input type="search" tabindex="6" />
            <span>url</span>
            <input type="url" tabindex="7" />
            <span>textarea</span>
            <textarea tabindex="8"></textarea>
    
        </div>
        `:e`<span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>`}
     
  `,name:"Interactive",description:()=>e`
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
            </style>
            <span>The Keyboard supports <strong>input</strong> and <strong>textarea</strong> elements as well as custom web components that internally utilise those elements.</span>
        `,args:{clearLabel:"Clear",ctaLabel:"Enter",closeLabel:"Close",spaceLabel:"Space",attachMode:"all","caps-off":i`<omni-caps-off-icon style="display: inherit;"></omni-caps-off-icon>`,"caps-on":i`<omni-caps-on-icon style="display: inherit;"></omni-caps-on-icon>`,"caps-on-permanent":i`<omni-caps-on-permanent-icon style="display: inherit;"></omni-caps-on-permanent-icon>`,"action-done":i`<omni-check-icon style="display: inherit;"></omni-check-icon>`,"action-enter":"","action-go":i`<omni-arrow-right-icon style="display: inherit;"></omni-arrow-right-icon>`,"action-next":i`<omni-next-icon style="display: inherit;"></omni-next-icon>`,"action-previous":i`<omni-previous-icon style="display: inherit;"></omni-previous-icon>`,"action-search":i`<omni-search-icon style="display: inherit;"></omni-search-icon>`,"action-send":i`<omni-send-icon style="display: inherit;"></omni-send-icon>`,backspace:i`<omni-backspace-icon style="display: inherit;"></omni-backspace-icon>`,clear:"",close:i`<omni-chevron-down-icon style="display: inherit;"></omni-chevron-down-icon>`}},R=l(p({},s),{description:()=>e`
    <span>The Keyboard will react accordingly to the '<strong>inputmode</strong>' attribute on supported inputs.</span>
        
    `,render:t=>s.args.attachMode==="all"?e`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Input Modes"></omni-label>
            <!-- Vanilla Input Modes -->
            <span>input with type="text" and inputmode="numeric"</span>
            <input type="text" inputmode="numeric" tabindex="9" />
            <span>input with type="text" and inputmode="decimal"</span>
            <input type="text" inputmode="decimal" tabindex="10" />
            <span>input with type="text" and inputmode="tel"</span>
            <input type="text" inputmode="tel" tabindex="11" />
            <span>input with type="password" and inputmode="numeric" </span>
            <input type="password" inputmode="numeric" tabindex="12" />
            <span>input with type="search" and inputmode="numeric"</span>
            <input type="search" inputmode="numeric" tabindex="13" />
        </div>
  `:e`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Input Modes"}),X=l(p({},s),{description:()=>e`
    <span>The Keyboard supports masking of the input value on the display preview.</span>
    <span>Masking will apply to the following:
        <ul>
            <li><strong>input</strong> elements with the '<strong>type</strong>' attribute set to '<strong>password</strong>'.</li>
            <li>Any elements with the '<strong>data-omni-keyboard-mask</strong>' attribute .</li>
            <li>Any supported web component with the '<strong>type</strong>' attribute set to '<strong>password</strong>' on their internal <strong>input</strong> elements.</li>
            <li>Any supported web component utilising '<strong>data-omni-keyboard-mask</strong>' on their internal <strong>input</strong> elements.</li>
        </ul>
    </span>
    `,render:t=>s.args.attachMode==="all"?e`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Masked Values"></omni-label>
            <!-- Masked Values -->
            <span>input with type="password"</span>
            <input type="password" tabindex="14" value="Mask This" />
            <span>input with type="text" and data-omni-keyboard-mask attribute</span>
            <input type="text" data-omni-keyboard-mask tabindex="15" value="Mask This" />
            <span>omni-password-field (Utilises type="password" internally)</span>
            <omni-password-field tabindex="16" value="Mask This"></omni-password-field>
            <span>omni-pin-field (Utilises data-omni-keyboard-mask internally)</span>
            <omni-pin-field tabindex="17" value="1234"></omni-pin-field>
        </div>
  `:e`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Masked Values"}),z=l(p({},s),{description:()=>e`
    <span>The Keyboard supports custom web components that internally utilises <strong>input</strong> or <strong>textarea</strong> elements.</span>
    <br/>
    <span>All Omni Components input fields are fully supported.</span>
    `,render:t=>s.args.attachMode==="all"?e`
        <div class="keyboard-showcase">

            <omni-label type="subtitle" label="Omni Component Input Fields"></omni-label>
            <!-- Omni Component Input Fields -->
            <omni-currency-field thousands-separator="," label="Currency Field"  tabindex="18"></omni-currency-field>
            <omni-email-field label="Email Field"  tabindex="19"></omni-email-field>
            <omni-number-field label="Number Field"  tabindex="20"></omni-number-field>
            <omni-password-field label="Password Field" tabindex="21"></omni-password-field>
            <omni-pin-field label="Pin Field" tabindex="22"></omni-pin-field>
            <omni-search-field label="Search Field" tabindex="23"></omni-search-field>
            <omni-text-field label="Text Field" tabindex="24"></omni-text-field>

        </div>
  `:e`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Web Components"}),J=l(p({},s),{description:()=>e`
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
    `,render:t=>s.args.attachMode==="all"?e`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Enter Key Variations"></omni-label>
            <!-- Enter Key Variations -->
            <span>input with type="text" and enterkeyhint="enter"</span>
            <input type="text" enterkeyhint="enter" tabindex="25" />
            <span>input with type="text" and enterkeyhint="go"</span>
            <input type="text" enterkeyhint="go" tabindex="26" />
            <span>input with type="number" and enterkeyhint="go"</span>
            <input type="number" enterkeyhint="go" tabindex="27" />
            <span>input with type="text" and enterkeyhint="done"</span>
            <input type="text" enterkeyhint="done" tabindex="28" />
            <span>input with type="number" and enterkeyhint="done"</span>
            <input type="number" enterkeyhint="done" tabindex="29" />
            <span>input with type="text" and enterkeyhint="next"</span>
            <input type="text" enterkeyhint="next" tabindex="30" />
            <span>input with type="number" and enterkeyhint="next"</span>
            <input type="number" enterkeyhint="next" tabindex="31" />
            <span>input with type="text" and enterkeyhint="previous"</span>
            <input type="text" enterkeyhint="previous" tabindex="32" />
            <span>input with type="number" and enterkeyhint="previous"</span>
            <input type="number" enterkeyhint="previous" tabindex="33" />
            <span>input with type="text" and enterkeyhint="search"</span>
            <input type="text" enterkeyhint="search" tabindex="34" />
            <span>input with type="number" and enterkeyhint="search"</span>
            <input type="number" enterkeyhint="search" tabindex="35" />
            <span>input with type="text" and enterkeyhint="send"</span>
            <input type="text" enterkeyhint="send" tabindex="36" />
            <span>input with type="number" and enterkeyhint="send"</span>
            <input type="number" enterkeyhint="send" tabindex="37" />
        </div>
  `:e`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Enter Key Hint Variations"}),Q=l(p({},s),{description:()=>e`
    <span>When the '<strong>data-omni-keyboard-hidden</strong>' attribute is set on a supported input, the Keyboard will not apply to that input.</span>
    
    `,render:t=>e`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Hide Keyboard"></omni-label>
            <!-- Hide Keyboard -->
            <span>input with type="text" and data-omni-keyboard-hidden</span>
            <input data-omni-keyboard-hidden type="text" tabindex="38" />
            <span>input with type="text" and inputmode="none"</span>
            <input type="text" inputmode="none" tabindex="39" />
            <span>input with type="text", data-omni-keyboard-hidden and inputmode="none"</span>
            <input data-omni-keyboard-hidden type="text" inputmode="none" tabindex="40" />
        </div>  
  `,name:"Hide Keyboard"}),Y=l(p({},s),{description:()=>e`
    <span>When the '<strong>data-omni-keyboard-no-display</strong>' attribute is set on a supported input, the display preview on the Keyboard header will not be visible.</span>
    `,render:t=>s.args.attachMode==="all"?e`
    <div class="keyboard-showcase">
        <omni-label type="subtitle" label="Hide Display Value"></omni-label>
        <!-- Hide Display Value -->
        <span>input with type="text" with a value and no data-omni-keyboard-no-display attribute</span>
        <input  value="Some Value" type="text" tabindex="41" />
        <span>input with type="text" with a value and data-omni-keyboard-no-display attribute</span>
        <input data-omni-keyboard-no-display  value="Some Value" type="text" tabindex="42" />
    </div>  
  `:e`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Hide Display Value"}),g=e`
<div class="keyboard-showcase">
    <omni-label type="subtitle" label="Opt In Attach (Test with attach-mode='attribute' on Keyboard)"></omni-label>
    <!-- Opt In Attach -->
    <span>input with type="text" with no data-omni-keyboard-attach attribute</span>
    <input type="text" tabindex="43" />
    <span>input with type="text" with data-omni-keyboard-attach attribute</span>
    <input data-omni-keyboard-attach type="text" tabindex="44" />
</div>
`,Z=l(p({},s),{description:()=>e`
    <span>When the '<strong>attach-mode</strong>' attribute is set to '<strong>attribute</strong>' on the Keyboard, then the Keyboard will only react to supported inputs with the '<strong>data-omni-keyboard-attach</strong>' attribute without a value.</span>
    `,source:()=>d(g),render:t=>s.args.attachMode==="attribute"?g:e`
        <div class="keyboard-showcase">
            <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>attribute</strong>'.</span>
            <omni-button @click="${()=>{s.args.attachMode="attribute",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>attribute</strong></span></omni-button>
        </div>
        `,name:"Attach By Attribute"}),x=e`
<div class="keyboard-showcase">

    <omni-label type="subtitle" label="Opt In Attach for specific Keyboard (Test with attach-mode='id' on the Interactive Keyboard)"></omni-label>
    <!-- Opt In Attach -->
    <span>input with type="text" with no attach opt in attribute</span>
    <input type="text" tabindex="45" />
    <span>input with type="text" and data-omni-keyboard-attach but no specified id</span>
    <input data-omni-keyboard-attach type="text" tabindex="46" />
    <span>input with type="text" and data-omni-keyboard-attach for interactive keyboard id</span>
    <input data-omni-keyboard-attach="keyboard-interactive" type="text" tabindex="47" />

</div>
`,tt=l(p({},s),{description:()=>e`
    <span>When the '<strong>attach-mode</strong>' attribute is set to '<strong>id</strong>' on the Keyboard, then the Keyboard will only react to supported inputs with the '<strong>data-omni-keyboard-attach</strong>' attribute set equal to the Keyboard id.</span>
    `,render:t=>s.args.attachMode==="id"?x:e`
    <div class="keyboard-showcase">
    <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>id</strong>'.</span>
        <omni-button @click="${()=>{s.args.attachMode="id",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>id</strong></span></omni-button>
    </div>
    `,source:()=>d(x),name:"Attach By Id"}),et={render:t=>e`

    <!-- Add the Keyboard with slots to the DOM -->    
    <omni-keyboard id="keyboard-slots" 
        attach-mode="${t.attachMode}" 
        clear-label="${t.clearLabel}" 
        space-label="${t.spaceLabel}" 
        action-label="${t.ctaLabel}" 
        close-label="${t.closeLabel}" >${t["caps-off"]?e`${`\r
`}${a(o("caps-off",t["caps-off"]))}`:n}${t["caps-on"]?e`${`\r
`}${a(o("caps-on",t["caps-on"]))}`:n}${t["caps-on-permanent"]?e`${`\r
`}${a(o("caps-on-permanent",t["caps-on-permanent"]))}`:n}${t.close?e`${`\r
`}${a(o("close",t.close))}`:n}${t.clear?e`${`\r
`}${a(o("clear",t.clear))}`:n}${t.backspace?e`${`\r
`}${a(o("backspace",t.backspace))}`:n}${t["action-done"]?e`${`\r
`}${a(o("action-done",t["action-done"]))}`:n}${t["action-go"]?e`${`\r
`}${a(o("action-go",t["action-go"]))}`:n}${t["action-next"]?e`${`\r
`}${a(o("action-next",t["action-next"]))}`:n}${t["action-previous"]?e`${`\r
`}${a(o("action-previous",t["action-previous"]))}`:n}${t["action-search"]?e`${`\r
`}${a(o("action-search",t["action-search"]))}`:n}${t["action-send"]?e`${`\r
`}${a(o("action-send",t["action-send"]))}`:n}${t["action-enter"]?e`${`\r
`}${a(o("action-enter",t["action-enter"]))}`:n}
    </omni-keyboard>


    <div class="keyboard-showcase">

        <omni-label type="subtitle" label="Slotted Enter Key Variations"></omni-label>
        <!-- Enter Key Variations -->
        <span>input with type="text" and enterkeyhint="enter"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="text" enterkeyhint="enter" tabindex="48" />
        <span>input with type="text" and enterkeyhint="go"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="text" enterkeyhint="go" tabindex="49" />
        <span>input with type="number" and enterkeyhint="go"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="number" enterkeyhint="go" tabindex="50" />
        <span>input with type="text" and enterkeyhint="done"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="text" enterkeyhint="done" tabindex="51" />
        <span>input with type="number" and enterkeyhint="done"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="number" enterkeyhint="done" tabindex="52" />
        <span>input with type="text" and enterkeyhint="next"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="text" enterkeyhint="next" tabindex="53" />
        <span>input with type="number" and enterkeyhint="next"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="number" enterkeyhint="next" tabindex="54" />
        <span>input with type="text" and enterkeyhint="previous"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="text" enterkeyhint="previous" tabindex="55" />
        <span>input with type="number" and enterkeyhint="previous"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="number" enterkeyhint="previous" tabindex="56" />
        <span>input with type="text" and enterkeyhint="search"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="text" enterkeyhint="search" tabindex="57" />
        <span>input with type="number" and enterkeyhint="search"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="number" enterkeyhint="search" tabindex="58" />
        <span>input with type="text" and enterkeyhint="send"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="text" enterkeyhint="send" tabindex="59" />
        <span>input with type="number" and enterkeyhint="send"</span>
        <input data-omni-keyboard-attach="keyboard-slots" type="number" enterkeyhint="send" tabindex="60" />

    </div>

  `,name:"Slotted Content",args:{clearLabel:"Clear",ctaLabel:"Enter",closeLabel:"Close",spaceLabel:"Space",attachMode:"id","caps-off":i`<span class="center-inline">lower</span>`,"caps-on":i`<span class="center-inline">upper</span>`,"caps-on-permanent":i`<span class="center-inline">UPPER</span>`,"action-done":i`<span class="center-inline">Done</span>`,"action-enter":i`<span class="center-inline">↵</span>`,"action-go":i`<span class="center-inline">Go</span>`,"action-next":i`<span class="center-inline">→</span>`,"action-previous":i`<span class="center-inline">←</span>`,"action-search":i`<span class="center-inline">Search</span>`,"action-send":i`<span class="center-inline">Send</span>`,backspace:i`<span class="center-inline">⌫</span>`,clear:i`<span class="center-inline">(X)</span>`,close:i`<span class="center-inline">^</span>`}},nt=l(p({},s),{description:()=>e`
    <span>The Keyboard will react accordingly to the '<strong>data-omni-keyboard-mode</strong>' attribute on supported target elements.</span>
        
    `,render:t=>s.args.attachMode==="all"?e`
        <div class="keyboard-showcase">
            <omni-label type="subtitle" label="Alternate Keyboard Modes"></omni-label>
            <!-- Alternate Keyboard Modes on Omni Component -->
            <omni-search-field label="Search Field" data-omni-keyboard-mode="numeric" no-native-keyboard tabindex="61"></omni-search-field>
            <omni-text-field label="Text Field" data-omni-keyboard-mode="tel" no-native-keyboard tabindex="62"></omni-text-field>
        </div>
  `:e`
            <div class="keyboard-showcase">
                <span>To illustrate this, update the <strong>Interactive</strong> Keyboard properties to have '<strong>attach-mode</strong>' attribute set to '<strong>all</strong>'.</span>
                <omni-button @click="${()=>{s.args.attachMode="all",document.dispatchEvent(new CustomEvent("story-renderer-interactive-update",{bubbles:!0,composed:!0}))}}" class="docs-omni-component"><span>Update <strong>attach-mode</strong> to <strong>all</strong></span></omni-button>
            </div>`,name:"Alternate Modes"}),k,at={render:t=>{let c="keyboard-script-generated";return document.getElementById(c)||h.create({id:c,attachMode:t.attachMode,clearLabel:t.clearLabel,ctaLabel:t.ctaLabel,closeLabel:t.closeLabel,spaceLabel:t.spaceLabel,backspace:()=>{let r=document.createElement("span");r.textContent="\u232B",r.style.height="100%",r.style.display="inline-flex",r.style.alignItems="center";let b=r.style.color;return r.addEventListener("mouseenter",()=>{b=r.style.color,r.style.color="lightgreen"}),r.addEventListener("mouseleave",()=>{r.style.color=b}),r}}),e`
            <input data-omni-keyboard-attach="keyboard-script-generated"  type="text" tabindex="63" />
        `},name:"Via Script",args:{attachMode:"id",clearLabel:"Clear",ctaLabel:"\u21B5",closeLabel:"Close",spaceLabel:"Space"},source:()=>i(k||(k=m([`
<!-- Add an input that targets the keyboard id created from script -->
<input data-omni-keyboard-attach="keyboard-script-generated"  type="text" tabindex="63" />

<!-- A script that creates a keyboard to its default parent container (document.body) with some custom button labels including a custom backspace via render function -->
<script defer>
    Keyboard.create({
        id: 'keyboard-script-generated',
        attachMode: 'id',
        clearLabel: 'Clear',
        ctaLabel: '\u21B5',
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
    `])))};export{nt as Alternate_Modes,Z as Attach_By_Attribute,tt as Attach_By_Id,J as Enter_Key_Hint_Variations,Y as Hide_Display_Value,Q as Hide_Keyboard,R as Input_Modes,s as Interactive,X as Masked_Values,et as Slotted_Content,at as Via_Script,z as Web_Components,G as default};
//# sourceMappingURL=Keyboard.stories.js.map
