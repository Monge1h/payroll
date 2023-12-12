import { ExchangeRate } from '../../models/ExchangeRate.js'

export const getRate = async (req, res) => {
	const exchange_rates = await ExchangeRate.findAll()
	return res.status(200).json({message: "Exchange rates", data: exchange_rates})
}

