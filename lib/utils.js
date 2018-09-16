const { POSSIBLE_CHARACTERS, MINIMAL_PASSWORD_LENGTH } = require("./constants");

const getRandom = (typeOfCharacters, numberOfCharacters) => {
    let result = [];
    for (let i = 0; i < numberOfCharacters; i++) {
        result.push(
            POSSIBLE_CHARACTERS[typeOfCharacters][
                Math.floor(Math.random() * typeOfCharacters.length)
            ]
        );
    }
    return result;
};

const validateInput = ({ length, uppercase, digits, special }) => {
    if (length < MINIMAL_PASSWORD_LENGTH) {
        throw new Error(`minimal password length is ${MINIMAL_PASSWORD_LENGTH} characters`);
    } else if (length < uppercase + digits + special) {
        throw new Error(`password length cannot be less than  ${uppercase + digits + special}`);
    }
};

const shuffleArray = arr => {
    return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
};

module.exports = {
    validateInput,
    shuffleArray,
    getRandom
};
