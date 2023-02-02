import { ComponentStoryFormat } from './ComponentStoryFormat.js';
export declare type PlayFunction<T> = (context: PlayFunctionContext<T>) => Promise<void> | void;
export declare type PlayFunctionContext<T> = {
    args: T;
    story: ComponentStoryFormat<T>;
    canvasElement: HTMLElement;
};
//# sourceMappingURL=PlayFunction.d.ts.map