import { IStream } from '../net/IStream';

export interface IApplication {
    stream: IStream,
}

export var appInstance: IApplication = null;