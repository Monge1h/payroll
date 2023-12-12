import { ExchangeRate } from "../../models/ExchangeRate.js";

export const setRate = async (req, res) => {
	const { from_currency, to_currency, rate } = req.body;
	const [exchange_rate, created] = await ExchangeRate.upsert(
		{
			from_currency,
			to_currency,
			rate,
		},
		{
			where: {
				from_currency,
				to_currency,
			},
		}
	);
	return res.status(201).json({
		message: created ? "Exchange rate created" : "Exchange rate updated",
		data: { idExchangeRate: exchange_rate.id },
	});
};
