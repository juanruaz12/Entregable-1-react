import React, { useState } from "react";
import quotes from "../quotes.json";
import Quotebutton from "./Quotebutton";

const colors = [ "red", "lightblue", "yellow", "lightgreen", "lightcoral"]

const QuotesBox = () => {

    const [ index, setIndex ] = useState(0)

    const changequotes = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setIndex(randomIndex)
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`

    return (
        <div className="card" style={{color:colors[randomColor]}}>
            <i className="quotes fa-solid fa-quote-left"></i>
            <h1>{quotes[index].quote}</h1>
                <div className="infoauthor">
                    {quotes[index].author}
                </div>
            <Quotebutton changequotes={changequotes} randomColor={randomColor} colors={colors} />
        </div>
        
    );
};

export default QuotesBox;