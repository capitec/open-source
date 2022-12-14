import { LitElement, nothing, TemplateResult } from 'lit';
import { CodeEditor } from './CodeEditor.js';
import { LivePropertyEditor } from './LivePropertyEditor.js';
import '../label/Label.js';
import '../button/Button';
import '../icon/Icon.js';
import '../icons/Loading.icon.js';
import './CodeEditor.js';
import '../text-field/TextField.js';
import '../color-field/ColorField.js';
import './LivePropertyEditor.js';
/**
 * @ignore
 */
export declare class StoryRenderer extends LitElement {
    path: string;
    tag: string;
    key: string;
    interactive: boolean;
    _interactiveSrc: string;
    _isBusyPlaying: boolean;
    _playError: string;
    _showStylesDialog: boolean;
    codeEditor: CodeEditor;
    propertyEditor: LivePropertyEditor;
    private originalInteractiveSrc;
    private overrideInteractive;
    private controller;
    private customCss;
    private story;
    private customElements;
    private cssVariables;
    private modal;
    private theme;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    protected render(): TemplateResult<1>;
    handleCustomThemeCSSVariableSearch(e: Event): void;
    renderCssVariable(variable: CSSVariable): TemplateResult<1> | typeof nothing;
    protected createRenderRoot(): Element | ShadowRoot;
    private _sortCssVariables;
    private _cssChanged;
    private _showComponentStyles;
    private _checkCloseModal;
    private _resetLivePropertyEditor;
    private _getSourceFromLit;
    private _play;
    private _createStoryContext;
    private _transformSource;
    private _currentCodeTheme;
}
declare type CSSVariable = {
    control: 'text' | 'color';
    description: string;
    category: string;
    subcategory: string;
    value: string;
    name: string;
};
export {};
//# sourceMappingURL=StoryRenderer.d.ts.map