import { PlayFunction } from './PlayFunction.js';
export declare type ComponentStoryFormat<T> = {
    render?: (args: T) => any;
    name?: string;
    args?: Partial<T>;
    play?: PlayFunction<T>;
    source?: () => string;
};
export declare type CSFIdentifier = {
    title: string;
    component: string;
};
//# sourceMappingURL=ComponentStoryFormat.d.ts.map