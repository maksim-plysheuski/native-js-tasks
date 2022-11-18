export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

const CHANGE_CURRENCY_FIELD = "CHANGE-CURRENCY-FIELD"
const CHANGE_ACTION = "CHANGE-ACTION"
const CHANGE_CURRENT_CURRENCY = "CHANGE-CURRENT-CURRENCY"
export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;

export type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyFieldAC>
export type ChangeAction = ReturnType<typeof ChangeActionAC>
export type ChangeCurrentCurrencyType = ReturnType<typeof СhangeCurrentCurrencyAC>


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => ({type: CHANGE_CURRENCY_FIELD, amountOfBYN, amountOfCurrency} as const)



export const ChangeActionAC = (isBuying: boolean) => ({type: CHANGE_ACTION, isBuying} as const)

export const СhangeCurrentCurrencyAC = (currentCurrency: string) => ({type: CHANGE_CURRENT_CURRENCY, currentCurrency} as const)




