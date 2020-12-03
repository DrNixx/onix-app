export interface IUserProfile {
    country?: string
}

export interface IChessTitle {
    id: string,
    name: string
}

export interface ISiteUser {
    id?: number,
    name: string,
    display?: string,
    aurl?: string,
    online?: string|boolean,
    language?: string,
    patron?: string,
    status?: string,
    icon?: string,
    profile?: IUserProfile,
    title?: string | IChessTitle,
}
