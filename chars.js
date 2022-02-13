const CHARS = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
    12: 'O',
    13: 'M',
    14: 'N',
    15: 'P',
    16: 'Q',
    17: 'R',
    18: 'S',
    19: 'T',
    20: 'U',
    21: 'V',
    22: 'W',
    23: 'X',
    24: 'Y',
    25: 'Z',

}

const LOWER_CHARS = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
    10: 'k',
    11: 'l',
    12: 'o',
    13: 'm',
    14: 'n',
    15: 'p',
    16: 'q',
    17: 'r',
    18: 's',
    19: 't',
    20: 'u',
    21: 'v',
    22: 'w',
    23: 'x',
    24: 'y',
    25: 'z',
}

const random = (max, min) => Math.floor(Math.random() * (max - min) + min);

function short_id() {
    const iterate = random(8, 5);

    let chars = '';

    for (let i = 0; i < iterate; i++) {

        const d = Math.floor(Math.random() * 3)

        console.log(d);

        switch (d) {
            case 0: {
                const num = random(0, 26);

                chars += CHARS[num];
            }
            break;

        case 1: {
            const num = Math.floor(Math.random() * 11)

            chars += num;
        }
        break;

        case 2: {
            const num = random(0, 26);

            chars += LOWER_CHARS[num];
        }
        break;

        }


    }

    return chars;

}

module.exports = short_id;