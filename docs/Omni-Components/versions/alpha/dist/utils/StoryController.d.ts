import { ReactiveController, ReactiveControllerHost } from 'lit';
export declare class StoryController implements ReactiveController {
    host: ReactiveControllerHost;
    storyPath: string;
    story: any;
    constructor(host: ReactiveControllerHost, storyPath: string);
    hostConnected(): Promise<void>;
}
//# sourceMappingURL=StoryController.d.ts.map