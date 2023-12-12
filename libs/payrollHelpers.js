import { ExchangeRate } from "../models/ExchangeRate.js";
import { Op } from "@sequelize/core";

export const calculatePayroll = async (employee = [], currency) => {
	const currencies = {};

	for (let person of employee) {
		if (!currencies[person.currency]) {
			currencies[person.currency] = person.base_salary;
		} else {
			currencies[person.currency] += person.base_salary;
		}
	}

	let totalConverted = 0;

	const rates = await getRatesOrThrow(Object.keys(currencies), currency);

	for (const [employeeCurrency, value] of Object.entries(currencies)) {
		if (currency === employeeCurrency) {
			totalConverted += value;
		} else {
			// find the rate in rates
			const rateKey = `${employeeCurrency}->${currency}`;
			const rateCurrency = rates[rateKey];
			console.log(`Converting ${employeeCurrency}->${currency}`);
			const valueConverted = convertFromTo(value, rateCurrency);
			totalConverted += valueConverted;
		}
	}

	return totalConverted;
};


const convertFromTo = (rate, value) => {
	return Number(Math.round(value * rate+'e2')+'e-2');
};

const getRatesOrThrow = async (currencies = [], currencyToConvert) => {
	// remove currencyToConvert from currencies
	const currencyToConvertInCurrenciesIndex =
		currencies.indexOf(currencyToConvert);
	if (currencyToConvertInCurrenciesIndex != -1) {
		currencies.splice(currencyToConvertInCurrenciesIndex, 1);
	}

	const exchangeRates = await ExchangeRate.findAll({
		where: {
			from_currency: { [Op.in]: currencies },
			to_currency: currencyToConvert,
		},
		raw: true,
	});

	if (exchangeRates.length != currencies.length) {
		throw new Error("There are missing exchange rates");
	}

	const exchangeRatesObject = {};

	// i will return an object with this type of keys
	// "currency->currencyToConvert"
	// example = "MXN->USD": "rate"
	for (let exchangeRate of exchangeRates) {
		const rateKey = `${exchangeRate.from_currency}->${currencyToConvert}`;
		exchangeRatesObject[rateKey] = exchangeRate.rate;
	}
	return exchangeRatesObject;
};
