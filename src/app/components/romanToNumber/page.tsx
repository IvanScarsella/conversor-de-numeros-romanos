"use client"

import React, { useEffect, useState, ChangeEvent } from "react";
import { convertToNumber, inputValidation, getRandomAndSetInput } from "../../functions/functions";

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
            <div>Conversor de Números Romanos a Números Decimales</div>
            <input
                onChange={changeHandler}
                value={input}
                placeholder="Número romano"
                type="text"
                id="input"
            />
            <button
                onClick={() => getRandomAndSetInput(input, setInput)}>
                Aleatorio
            </button>
            <h1>{number}</h1>
        </>
    );
}
