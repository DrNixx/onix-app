import { Reducer } from "redux";
import { Intl } from "onix-core";

export interface IntlState {
    locale: string
}

export type IntlAction = {
    type: 'SET_LOCALE',
    locale: string
}

export const intlReducer: Reducer<IntlState, IntlAction> = (
    state: IntlState = {
        locale: 'ru-ru'
    },
    action: IntlAction
) => {
    switch (action.type) {
        case 'SET_LOCALE':
            let loc = Intl.setLocale(action.locale);
            return { locale: loc };
        default:
            return state;
    }
}