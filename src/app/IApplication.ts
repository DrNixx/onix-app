import { IStream } from '../net/IStream';

export interface IApplication {
    stream: IStream,
}

export let appInstance: IApplication = null;