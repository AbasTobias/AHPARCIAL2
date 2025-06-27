import Joi from "joi";

export const cafeSchema = Joi.object({
    name: Joi.string().min(4).required(),
    origin: Joi.string().required(),
    price: Joi.number().min(3).positive().required(),
    roast: Joi.string().valid('Claro', 'Medio', 'Oscuro').required(),
    category: Joi.string().valid('Suave', 'Medio', 'Fuerte').required(),
    weight: Joi.string().required(),
    description: Joi.string().optional(),
    company: Joi.string().hex().length(24).required()
});