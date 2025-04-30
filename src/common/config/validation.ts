import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().default(3000),

  DB_TYPE: Joi.string().valid('postgres').required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),

  ACCESS_TOKEN_SECRET_KEY: Joi.string().required(),
  ACCESS_TOKEN_EXPIRE_TIME: Joi.string().required(),
});
