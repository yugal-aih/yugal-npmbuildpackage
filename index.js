import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_ZArZSxlBKGwkWfphtHLtQ9mG1BC8Pw5aAHTvIcLD');

export async function convertCurrency(fromCurrency, toCurrency, units) {
    try {
        const res = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        })
        const multiplier = res.data[toCurrency]
        return multiplier * units

    } catch (error) {
        console.log(error )
    }

}