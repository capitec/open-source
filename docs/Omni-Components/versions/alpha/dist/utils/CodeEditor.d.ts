import { Extension } from '@codemirror/state';
import { ViewUpdate } from '@codemirror/view';
import { EditorView } from 'codemirror';
import { LitElement, PropertyValueMap } from 'lit';
export declare class CodeEditor extends LitElement {
    extensions: () => Extension | Promise<Extension>;
    transformSource: (source: string) => string | Promise<string>;
    code: string | Promise<string>;
    readOnly: boolean;
    disabled: boolean;
    noTab: boolean;
    codeParent: HTMLDivElement;
    slotElement: HTMLSlotElement;
    private editor;
    private readonlyOrDisabled;
    static get styles(): import("lit").CSSResult[];
    refresh(getCode?: () => string | Promise<string>): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void>;
    private _copyCode;
    private _fallbackCopyTextToClipboard;
    private _copyTextToClipboard;
    private _slotChanged;
    private _readCode;
    private _clearElements;
}
export declare type CodeMirrorEditorEvent = {
    editor: EditorView;
    source: string;
};
export declare type CodeMirrorUpdateEvent = CodeMirrorEditorEvent & {
    update: ViewUpdate;
};
export declare type CodeMirrorSourceUpdateEvent = CodeMirrorUpdateEvent & {
    oldSource: string;
};
//# sourceMappingURL=CodeEditor.d.ts.map