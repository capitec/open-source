import { Package } from 'custom-elements-manifest/schema';
import { nothing, PropertyValueMap, TemplateResult } from 'lit';
import OmniElement from '../core/OmniElement.js';
import { CodeEditor } from './CodeEditor.js';
import { ComponentStoryFormat } from './StoryUtils.js';
import '../label/Label.js';
import '../text-field/TextField.js';
import '../icons/Loading.icon.js';
import '../switch/Switch.js';
import './CodeEditor.js';
/**
 * @ignore
 */
export declare class LivePropertyEditor extends OmniElement {
    data: ComponentStoryFormat<any>;
    element: string;
    disabled: boolean;
    ignoreAttributes: string;
    customElementsPath: string;
    customElements: Package;
    slotCodeEditors: NodeListOf<CodeEditor>;
    private _firstRenderCompleted;
    private theme;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResultGroup[];
    resetSlots(): void;
    protected render(): TemplateResult<1> | typeof nothing;
    private _propertyChanged;
    private _currentCodeTheme;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void>;
}
export declare type PropertyChangeEvent = {
    property: string;
    newValue: string | number | boolean;
    oldValue: string | number | boolean;
};
//# sourceMappingURL=LivePropertyEditor.d.ts.map