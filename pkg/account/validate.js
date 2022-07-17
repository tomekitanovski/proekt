const { Validator } = require('node-input-validator');

const Account = {
    first_name:'required|string',
    last_name:'required|string',
    email: 'required|string',
    birthday:'required|string',
    password: 'required|string',
    repeat_password: 'required|string',
};

const AccountLogin = {
    email: 'required|string',
    password: 'required|string'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema); // this is where the validation is set up
    let e = await v.check(); // this is where the validation hapens
    if (!e) {
        throw {
            code: 400,
            error: v.errors
        };
    }
};

module.exports = {
    Account,
    AccountLogin,
    validate
};