const Joi = require("joi");
const Account = require("models/account");
const { generateToken } = require("lib/token");

exports.login = async ctx => {
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
  });

  const result = Joi.validate(ctx.request.body, schema);

  if (result.error) {
    ctx.status = 400;
    return;
  }

  const { username, password } = ctx.request.body;

  try {
    let account = await Account.findOne({ username }).exec();
    if (!account) {
      ctx.status = 404;
      return;
    }

    if (account.password !== password) {
      ctx.status = 403;
      return;
    }

    let token = await generateToken(
      {
        _id: account._id,
        username: account.username
      },
      "account"
    );

    ctx.cookies.set("access_token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    });
    ctx.body = account.username;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.register = async ctx => {
  const schema = Joi.object().keys({
    username: Joi.string()
      .alphanum()
      .min(4)
      .max(15)
      .required(),
    password: Joi.string().required(),
    passwordConfirm: Joi.string().required()
  });

  const result = Joi.validate(ctx.request.body, schema);

  if (result.error) {
    ctx.status = 400;
    return;
  }

  const { username, password, passwordConfirm } = ctx.request.body;

  if (password !== passwordConfirm) {
    ctx.status = 401;
    return;
  }

  try {
    let existing = await Account.findOne({ username }).exec();
    if (existing) {
      ctx.status = 409;
      return;
    }
    let account = new Account({
      username,
      password
    });

    await account.save();

    account.password = null;

    ctx.body = account;
    ctx.status = 201;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.check = async ctx => {
  const { user } = ctx.request;

  if (!user) {
    ctx.status = 403; // Forbidden
    return;
  }

  ctx.body = user.username;
};

exports.logout = async ctx => {
  ctx.cookies.set("access_token", null, {
    maxAge: 0,
    httpOnly: true
  });
  ctx.status = 204;
};
