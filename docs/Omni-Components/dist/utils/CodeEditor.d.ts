import { Extension } from '@codemirror/state';
import { ViewUpdate } from '@codemirror/view';
import { EditorView } from 'codemirror';
import { LitElement } from 'lit';
import '../icon/Icon.js';
/**
 * @ignore
 */
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
    private userExtensions;
    static get styles(): import("lit").CSSResult[];
    refresh(getCode?: () => string | Promise<string>): Promise<void>;
    updateExtensions(): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(): Promise<void>;
    private _copyCode;
    private _fallbackCopyTextToClipboard;
    private _copyTextToClipboard;
    private _slotChanged;
    private _readCode;
    private _clearElements;
    private _clearOtherElements;
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