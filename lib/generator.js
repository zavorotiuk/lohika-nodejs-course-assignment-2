const { validateInput, getRandom, shuffleArray } = require("./utils");
const { CHARACTERS_TYPES } = require("./constants");

const generatePassword = options => {
    try {
        validateInput(options);

        const lowercase =
            options.length -
            (options.digits + options.special + options.uppercase);

        const result = shuffleArray([
            ...getRandom(CHARACTERS_TYPES.NUMBERS, options.digits),
            ...getRandom(CHARACTERS_TYPES.SPEACIAL, options.special),
            ...getRandom(CHARACTERS_TYPES.UPPER_CASE, options.uppercase),
            ...getRandom(CHARACTERS_TYPES.LOWER_CASE, lowercase)
        ]).join("");

        console.log(result);
    } catch (err) {
        console.error("ERROR:", err.message);
    }
};

module.exports = generatePassword;
