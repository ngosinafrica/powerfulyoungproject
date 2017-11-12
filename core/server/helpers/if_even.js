// # If Even Helper
// Usage: `{{#if_even int}}`
// Checks whether we're in a given context.
var _               = require('lodash'),
    errors          = require('../errors'),
    i18n            = require('../i18n'),
    if_even;

if_even = function (context, options) {
    options = options || {};

    if (!isInt(context)) {
        errors.logWarn(i18n.t('warnings.helpers.is.invalidAttribute'));
        return;
    }

    function evaluateContext(int) {
        return int%2==0;
    }

    if (evaluateContext(context)) {
        return options.fn(this);
    }
    return options.inverse(this);
};

function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}

module.exports = if_even;
