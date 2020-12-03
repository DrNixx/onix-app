export interface IUserProfile {
    country?: string;
}

export interface IChessTitle {
    id: string;
    name: string;
}

export interface IChessUser {
    id?: number|string;
    name: string;
    display?: string;
    aurl?: string;
    profile?: IUserProfile;
    title?: string | IChessTitle;
}

export interface ISiteUser extends IChessUser {
    online?: string|boolean;
    language?: string;
    patron?: string;
    status?: string;
    icon?: string;
}
