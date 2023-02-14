import styled from "styled-components";
import React from "react";

const StyledGuess = styled.div`
    border-radius: 85px;
    border: 1vh solid #1e1e1e;
    background: #faebd7;
    margin: 0.6vh;
    padding: 0.6vh;
    input{
        border: 5px solid #faebd7;
        background: #faebd7;
        min-width: 14rem;
    }
    button{
        background: #f1f012;
        border-right: 4px solid #737308;
        border-bottom: 4px solid #737308;
        border-left: 0px solid #f1f012;
        border-top: 0px solid #f1f012;
        box-shadow: 0px 0px 1.6vh #595c55;
        margin: none;
    }button:active{
        border: 2px solid #f1f012;
        border-right: 2px solid #f1f012;
        border-bottom: 2px solid #f1f012;
        border-left: 2px solid #f1f012;
        border-top: 2px solid #f1f012;
        box-shadow: 0px 0px 0vh #595c55;
        margin: none;
    }
`;

export default function Guess(){
    var Tries = 0;
    function shoot(){
        Tries++;
        console.log(Tries);
    }

    return(
        <StyledGuess>
            <input type="text" placeholder="Guess" onChange={console.log(Tries)}></input>
            <button onClick={shoot}>JACKPOT!</button>
        </StyledGuess>
    )
}