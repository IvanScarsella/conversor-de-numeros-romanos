function convertToRoman(numero: number): string {
    const valoresRomanos = [
        { valor: 1000000, romano: 'M\u0305' }, // Representa 1,000,000 con una línea sobre el símbolo M
        { valor: 900000, romano: 'C\u0305M\u0305' }, // Representa 900,000 con una línea sobre CM
        { valor: 500000, romano: 'D\u0305' }, // Representa 500,000 con una línea sobre D
        { valor: 400000, romano: 'C\u0305D\u0305' }, // Representa 400,000 con una línea sobre CD
        { valor: 100000, romano: 'C\u0305' }, // Representa 100,000 con una línea sobre C
        { valor: 90000, romano: 'X\u0305C\u0305' }, // Representa 90,000 con una línea sobre XC
        { valor: 50000, romano: 'L\u0305' }, // Representa 50,000 con una línea sobre L
        { valor: 40000, romano: 'X\u0305L\u0305' }, // Representa 40,000 con una línea sobre XL
        { valor: 10000, romano: 'X\u0305' }, // Representa 10,000 con una línea sobre X
        { valor: 9000, romano: 'M\u0305X\u0305' }, // Representa 9,000 con una línea sobre MX
        { valor: 5000, romano: 'V\u0305' }, // Representa 5,000 con una línea sobre V
        { valor: 4000, romano: 'M\u0305V\u0305' }, // Representa 4,000 con una línea sobre MV
        { valor: 1000, romano: 'M' },
        { valor: 900, romano: 'CM' },
        { valor: 500, romano: 'D' },
        { valor: 400, romano: 'CD' },
        { valor: 100, romano: 'C' },
        { valor: 90, romano: 'XC' },
        { valor: 50, romano: 'L' },
        { valor: 40, romano: 'XL' },
        { valor: 10, romano: 'X' },
        { valor: 9, romano: 'IX' },
        { valor: 5, romano: 'V' },
        { valor: 4, romano: 'IV' },
        { valor: 1, romano: 'I' },
    ];
    let resultado = '';

    if (numero > 1000000) {
        return valoresRomanos[0].romano
    } else {
        for (let i = 0; i < valoresRomanos.length; i++) {
            while (numero >= valoresRomanos[i].valor) {
                resultado += valoresRomanos[i].romano;
                numero -= valoresRomanos[i].valor;
            }
        }

        return resultado;
    }
}

function convertToNumber(roman: string): number {
    const romanNumerals: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    let previousValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentRomanChar = roman[i];
        const currentValue = romanNumerals[currentRomanChar];

        if (currentValue === undefined) {
            throw new Error(`Número romano inválido: ${roman}`);
        }

        if (currentValue < previousValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        previousValue = currentValue;
    }

    return result;
}

function inputValidation(input: string) {

    function romanValidation(str: string) {
        let upperCase = str.toLocaleUpperCase();
        if (
            upperCase === "I" ||
            upperCase === "V" ||
            upperCase === "X" ||
            upperCase === "L" ||
            upperCase === "C" ||
            upperCase === "D" ||
            upperCase === "M" ||
            upperCase === 'M\u0305V\u0305' ||
            upperCase === 'V\u0305' ||
            upperCase === 'M\u0305X\u0305' ||
            upperCase === 'X\u0305' ||
            upperCase === 'X\u0305L\u0305' ||
            upperCase === 'L\u0305' ||
            upperCase === 'X\u0305C\u0305' ||
            upperCase === 'C\u0305' ||
            upperCase === 'C\u0305D\u0305' ||
            upperCase === 'D\u0305' ||
            upperCase === 'C\u0305M\u0305' ||
            upperCase === 'M\u0305') {
            return true
        } else {
            return false
        }
    }
    let numberI = 0; // 1
    let numberV = 0; // 5
    let numberX = 0; // 10
    let numberL = 0; // 50
    let numberC = 0; // 100
    let numberD = 0; // 500
    let numberM = 0; // 1000
    let numberMV = 0; // 4000
    let numberVV = 0; // 5000
    let numberMX = 0; // 9000
    let numberXX = 0; // 10000
    let numberXL = 0; // 40000
    let numberLL = 0; // 50000
    let numberXC = 0; // 90000
    let numberCC = 0; // 100000
    let numberCD = 0; // 400000
    let numberDD = 0; // 500000
    let numberCM = 0; // 900000
    let numberMM = 0; // 1000000

    console.log(input)
    for (let i = 0; i < input.length; i++) {
        if (!romanValidation(input[i])) {
            return false
        }
        if (input[i].toUpperCase() === 'I') {
            numberI++
        }
        if (input[i].toUpperCase() === 'V') {
            numberV++
        }
        if (input[i].toUpperCase() === 'X') {
            numberX++
        }
        if (input[i].toUpperCase() === 'L') {
            numberL++
        }
        if (input[i].toUpperCase() === 'C') {
            numberC++
        }
        if (input[i].toUpperCase() === 'D') {
            numberD++
        }
        if (input[i].toUpperCase() === 'M') {
            numberM++
        }
        if (input[i].toUpperCase() === 'M\u0305V\u0305') {
            numberMV++
        }
        if (input[i].toUpperCase() === 'V\u0305') {
            numberVV++
        }
        if (input[i].toUpperCase() === 'M\u0305X\u0305') {
            numberMX++
        }
        if (input[i].toUpperCase() === 'X\u0305') {
            numberXX++
        }
        if (input[i].toUpperCase() === 'X\u0305L\u0305') {
            numberXL++
        }
        if (input[i].toUpperCase() === 'L\u0305') {
            numberLL++
        }
        if (input[i].toUpperCase() === 'X\u0305C\u0305') {
            numberXC++
        }
        if (input[i].toUpperCase() === 'C\u0305') {
            numberCC++
        }
        if (input[i].toUpperCase() === 'C\u0305D\u0305') {
            numberCD++
        }
        if (input[i].toUpperCase() === 'D\u0305') {
            numberDD++
        }
        if (input[i].toUpperCase() === 'C\u0305M\u0305') {
            numberCM++
        }
        if (input[i].toUpperCase() === 'M\u0305') {
            numberMM++
        }
    }

    if (
        numberI > 3 ||
        numberV > 1 ||
        numberX > 3 ||
        numberL > 1 ||
        numberC > 3 ||
        numberD > 1 ||
        numberM > 3 ||
        numberMV > 1 ||
        numberVV > 3 ||
        numberMX > 1 ||
        numberXX > 3 ||
        numberXL > 1 ||
        numberLL > 3 ||
        numberXC > 1 ||
        numberCC > 3 ||
        numberCD > 1 ||
        numberDD > 3 ||
        numberCM > 1 ||
        numberMM > 3
    ) {
        return false
    }

    return true
}

function getRandomAndSetInput(input: number | string, setInput: Function) {
    if (typeof input === "number") {
        const random = Math.floor(Math.random() * (1000000 - 1) + 1);
        // Lógica si input es un número
        setInput(random);
    } else if (typeof input === "string") {
        const random = Math.floor(Math.random() * (4000 - 1) + 1);
        // Lógica si input es una cadena
        // Aquí puedes realizar la acción necesaria
        setInput(convertToRoman(random));
    }
}


export { convertToRoman, convertToNumber, inputValidation, getRandomAndSetInput };
