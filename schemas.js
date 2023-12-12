import Joi from 'joi'
import JoiCurrencyCode from 'joi-currency-code'; // Importa la extensión

const JoiExtended = Joi.extend(JoiCurrencyCode);

const setRateSchema = Joi.object({
  from_currency: JoiExtended.string().currency(),
  to_currency: Joi.string().required(),
  rate: Joi.number().required(),
});

const newEmployeeSchema = Joi.object({
  name: Joi.string().required(),
  country: Joi.string().required(),
  base_salary: Joi.number().required(),
  currency: JoiExtended.string().currency(),
});

export {
  setRateSchema,
  newEmployeeSchema,
};
