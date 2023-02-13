import styled from "styled-components";
import Footer from "./Footer";
import Rules from "./Rules";
import config from "../config.json"

const StyledHomePage = styled.div`
    display: flex;
`;

export default function HomePage(){
    return (
        <div>
            <StyledHomePage>
                <Rules/>
                <Game/>
            </StyledHomePage>
            <Footer />
        </div>
    );
}



const StyledGame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 0;
    top: 0;
    width: calc(100% - 22rem);
    img{
        max-width: 17rem;
        /* max-height: 22rem; */
    }

    .clues{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
    }

    #cardSpitter{
    background-color: darkgray;
    border: 0.2rem solid darkgray;
    border-radius: 42%;
    font-size: 1.4rem;
    margin: 2rem;
    width: calc(17rem - 0.8rem);
    box-shadow: 0rem 0rem 1rem #68EAE7;
    text-shadow: 0rem 0rem 0.1rem #68EAE7;
    color: #68eae7;
    }
    #cardSpitter:active {
        background-color: #787360;
        border: 0.2rem solid #787360;
        border-radius: 42%;
        box-shadow: 0rem 0rem 0rem #5CD1CF;
        text-shadow: 0rem 0rem 0rem #5CD1CF;
        color: #5CD1CF;
    }

    .luckyGuess{
        border-radius: 85px;
        border: 1vh solid #1e1e1e;
        background: #faebd7;
        margin: 0.6vh;
        padding: 0.6vh;
    }
    #inputGuess{
        border: 5px solid #faebd7;
        background: #faebd7;
        min-width: 14rem;
    }
    #buttonGuess{
        background: #f1f012;
        border-right: 4px solid #737308;
        border-bottom: 4px solid #737308;
        border-left: 0px solid #f1f012;
        border-top: 0px solid #f1f012;
        box-shadow: 0px 0px 1.6vh #595c55;
        margin: none;
    }#buttonGuess:active{
        border: 2px solid #f1f012;
        border-right: 2px solid #f1f012;
        border-bottom: 2px solid #f1f012;
        border-left: 2px solid #f1f012;
        border-top: 2px solid #f1f012;
        box-shadow: 0px 0px 0vh #595c55;
        margin: none;
    }

    .finalStatement{
        display: block;
        margin: 3rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: lighter;
        font-style: oblique;
        font-size: larger;
        text-align: center;
    }

    .lastGuesses{
    background: #faebd7;
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 0.6vh 0.6vw;
    margin: 0.6vh;
    border: 0.3rem solid #1e1e1e;
    -webkit-text-fill-color: #1e1e1e;
    height: fit-content;
    }
`;

function Game(){
    return(
        <StyledGame>{/* section for game itself */}
            <h2>Feeling lucky today?</h2>
            <img src={config.cardBack}></img>
            <div className="spitCard"><button id="cardSpitter">CARD SPITTER</button></div>
            <div className="luckyGuess"> {/* guess input */}
                <input type="text" placeholder="Guess" id="inputGuess"></input><button id="buttonGuess">JACKPOT!</button>
            </div>
            <div className="clues">{/* clues */}</div>
            <div className="finalStatement">{/* final saying, weather win or lose */}</div>
            <div className="lastGuesses">
                <h3>Last Guesses</h3>
            </div>
        </StyledGame>
    );
}