const POSSIBLE_CHARACTERS = {
    SPEACIAL: [
        ".",
        ",",
        "/",
        "-&",
        "?",
        "$",
        "#",
        "@",
        "!",
        "*",
        "<>"
    ],
    UPPER_CASE: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ],
    LOWER_CASE: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ],
    NUMBERS: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]
}

const MINIMAL_PASSWORD_LENGTH = 8;

const CHARACTERS_TYPES = {
    NUMBERS: 'NUMBERS',
    SPEACIAL: 'SPEACIAL',
    UPPER_CASE: 'UPPER_CASE',
    LOWER_CASE: 'LOWER_CASE'
}

module.exports = {
    POSSIBLE_CHARACTERS,
    CHARACTERS_TYPES,
    MINIMAL_PASSWORD_LENGTH
}
