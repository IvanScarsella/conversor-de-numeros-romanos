"use client"

import React, { useEffect, useState, ChangeEvent } from "react";
import { convertToNumber, inputValidation, getRandomAndSetInput } from "../../functions/functions";
import  Card from "../card/page";

export default function RomanToNumber() {
    const [input, setInput] = useState<string>("I");
    const [number, setNumber] = useState<number>(1);

    useEffect(() => {
        try {
            if (inputValidation(input)) {
                const parsedNumber = convertToNumber(input.toUpperCase());
                setNumber(parsedNumber);
            } else {
                alert("Caracter no válido");
                setInput("")
            }
        } catch (error) {
            setNumber(1);
        }
    }, [input]);

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setInput(value.toUpperCase());
    }

    return (
        <>
            <Card
                changeHandler={changeHandler}
                input={input}
                setInput={setInput}
                getRandomAndSetInput={getRandomAndSetInput}
                roman={number}
                type="text"
                title="Conversor de Números Romanos a Números Decimales"
                input1="Romano"
                input2="Decimal"
            />
        </>
    );
}
