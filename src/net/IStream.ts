import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IStreamMessage } from "./IStreamMessage";
import { ConnectionStatus } from './ConnectionStatus';

export interface IStream {
    connectionStatus$: BehaviorSubject<ConnectionStatus>;

    subscribe(name: string, message: (value: IStreamMessage) => void, error?: (error: any) => void, complete?: () => void): Subscription;
    removeChannel(channel: string): void;
    removeAll(): void;
}