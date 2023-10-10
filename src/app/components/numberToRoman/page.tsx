"use client"

import React, { useEffect, useState, ChangeEvent } from "react";
import { convertToRoman, getRandomAndSetInput, generateRomanNumerals, containsSameDigitFourOrMoreTimes } from "../../functions/functions";
import  Card  from "../card/page";

export default function NumberToRoman() {
    const [input, setInput] = useState<number>(1);
    const [roman, setRoman] = useState<string>("");
    const [array, setArray] = useState<string[]>([]);


    useEffect(() => {
        if (input > 1000000) {
            setInput(1000000)
        }
        if (input < 1) {
            setInput(0)
        }
        setRoman(convertToRoman(input));
    }, [input]);

    useEffect(() => {
        if (containsSameDigitFourOrMoreTimes(roman)) {
            array.push(roman)
        }
    }, [input])

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.target.value, 10);
        setInput(isNaN(value) ? 0 : value);
    }

    return (
        <>
            <Card
                changeHandler={changeHandler}
                input={input}
                setInput={setInput}
                getRandomAndSetInput={getRandomAndSetInput}
                roman={roman}
                type="number"
                title="Conversor de Números Decimales a Números Romanos"
                input1="Decimal"
                input2="Romano"
            />
        </>
    );
}