import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { CurrencyState, CurrencyType } from '../../redux/currencyReducer';
import {
    ChangeActionAC,
    ChangeCurrencyFieldAC,
    –°hangeCurrentCurrencyAC,
} from '../../redux/actions';
import { useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "../../redux/state";

const CurrencyEContainer = () => {

    const currencies = useSelector<IGlobalState, Array<CurrencyType>>(state => state.currency.currencies)
    const currentCurrency = useSelector<IGlobalState, string>(state => state.currency.currentCurrency)
    const isBuying = useSelector<IGlobalState, boolean>(state => state.currency.isBuying)
    const amountOfBYN = useSelector<IGlobalState, string>(state => state.currency.amountOfBYN)
    const amountOfCurrency = useSelector<IGlobalState, string>(state => state.currency.amountOfCurrency)


    const dispatch = useDispatch()

    const setCurrencyAmount = (amountOfBYN: string, amountOfCurrency: string) => {
        dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency))
    }
    const setAction = (isBuying: boolean) => {
        dispatch(ChangeActionAC(isBuying))
    }
    const changeCurrency = (currency: string) => {
        dispatch(–°hangeCurrentCurrencyAC(currency));
    }

    let currencyRate: number = 0
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    })

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    setCurrencyAmount(value, value);
                } else {
                    setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                }
            } else {
                if (value === '') {
                    setCurrencyAmount(value, value);
                } else {
                    setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

export default CurrencyEContainer;

