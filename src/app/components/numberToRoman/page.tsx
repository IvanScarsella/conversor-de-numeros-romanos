"use client"

import React, { useEffect, useState, ChangeEvent } from "react";
import { convertToRoman, getRandomAndSetInput, generateRomanNumerals, containsSameDigitFourOrMoreTimes } from "../../functions/functions";

export default function NumberToRoman() {
    const [input, setInput] = useState<number>(1);
    const [roman, setRoman] = useState<string>("");
    const [array, setArray] = useState<string[]>([]);


    useEffect(() => {
        if (input > 1000000) {
            setInput(1000000)
        }
        if (input < 1) {
            setInput(1)
        }
        setRoman(convertToRoman(input));
    }, [input]);

    useEffect(() => {
        if(containsSameDigitFourOrMoreTimes(roman)){
            array.push(roman)
        }
    }, [input])

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.target.value, 10);
        setInput(isNaN(value) ? 0 : value);
    }

    return (
        <>
            <div>Conversor de Números decimales a Números Romanos</div>
            <input
                onChange={changeHandler}
                placeholder={input.toString()}
                value={input}
                min="1"
                max="1000000"
                type="number"
                id="input"
            // onWheel={handleWheel}
            />
            <button
                onClick={() => getRandomAndSetInput(input, setInput)}>
                Aleatorio
            </button>
            <h1>{roman}</h1>
        </>
    );
}
