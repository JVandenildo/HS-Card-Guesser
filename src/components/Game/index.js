import Guess from "./components/Guess";
import styled from "styled-components";
import config from "../../../config.json";
var lastGuessesList = [];
var card = {
    title: "none",
    artist: undefined,
    id: undefined,
    cardClass: undefined,
    rarity: undefined,
    spellSchool: undefined,
    type: undefined,
    cost: undefined,
    set: undefined,
    mechanics: undefined,
    text: undefined,
    flavor: undefined,
    race: undefined,
    attack: undefined,
    durability: undefined,
    armor: undefined,
    health: undefined,

    Tries: 0
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

export default function Game(){
    return(
        <StyledGame>{/* section for game itself */}
            <h1>Feeling lucky today?</h1>
            <img src={config.cardBack}></img>
            {/* card generator */}<div className="spitCard"><button id="cardSpitter">CARD SPITTER</button></div>
            <Guess/>
            {/* clues */}<div className="clues"></div>
            {/* win/lose statement */}<div className="finalStatement"></div>
            <div className="lastGuesses">
                <h3>Last Guesses</h3>
            </div>
        </StyledGame>
    );
}