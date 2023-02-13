import config from "../config.json";
import styled from "styled-components";

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

const StyledRules = styled.div`
    max-width: 22rem;
    height: fit-content;
    padding: 5px 10px 75px;
    background-color: #1e1e1e;
    top: 0%;
    right: 0%;
    border: 0%;
`;

function Rules(){
    return(
        <StyledRules>
            <p style={{fontSize: 'medium'}}>The game Hearthstone is a property of Blizzard Entertainment, all rights are reserved to them. The work done here is fan made.<br/>Please visit <a href="https://hearthstone.blizzard.com/">playhearthstone.com</a> to learn about the original game.</p>
            <h2>Rules</h2>
            The game rules must be clear and simple to all players.
            <ol>
                <li>Win the game who gather most of the points;</li>
                <li>The amount of points on each card depends on how many clues the player received for a correct guess;</li>
                <li>A correct guess must have all characters of the card's name correct (may have lower case);</li>
                <li>After a game over, it's game over.</li>
            </ol>
            <p style={{fontSize: 'small'}}><strong>Note:</strong> I don't know how to set a multiplayer match, yet. So take your own point notes and compare to your adversaries.</p>
            <h2>Clues</h2>
            The game begins with a "free clue" (it's free because the player doesn't lose points if guesses the card wrongly), this clue gives out which type of card the player is dealing with, followed by the artist(s) who drew the art.<br/>
            Card types and its clues are:
            <ul>
                <li>Minions.</li>
                <ol>
                    <li>Type (murloc, dragon, etc.);</li>
                    <li>Rarity;</li>
                    <li>Mana cost;</li>
                    <li>Attack and health;</li>
                    <li>Class;</li>
                    <li>Card's text;</li>
                    <li>Flavor text.</li>
                </ol>
                <li>Spells.</li>
                <ol>
                    <li>School of magic (fire, arcane, etc.);</li>
                    <li>Rarity;</li>
                    <li>Mana cost;</li>
                    <li>Class;</li>
                    <li>Card's text;</li>
                    <li>Flavor text.</li>
                </ol>
                <li>Weapons.</li>
                <ol>
                    <li>Attack and durability;</li>
                    <li>Rarity;</li>
                    <li>Mana cost;</li>
                    <li>Class;</li>
                    <li>Flavor text.</li>
                </ol>
                <li>Heroes.</li>
                <ol>
                    <li>Armor and health (if has health);</li>
                    <li>Rarity;</li>
                    <li>Mana cost;</li>
                    <li>Card's text;</li>
                    <li>Flavor text;</li>
                    <li>Class.</li>
                </ol>
            </ul>
        </StyledRules>
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

const StyledFooter = styled.div`
    background-color: #1e1e1e;
    padding: 0.5rem;
    height: fit-content;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: smaller;
    img{
        max-height: 12pt;
        max-width: 12pt;
        margin: auto 5px;
        border-radius: 49%;
    }

    .author{
        margin: 0 5rem;
    }
    .specialThanks{
        margin: 0 5rem;
    }
`;

function Footer(){
    return(
        <StyledFooter>
            <div className="author">
                <h5>About the author</h5>
                <img src={`${config.githubProfile}.png`}></img>{config.author}<br /> {/* name */}
                <a href={`mailto:${config.email}`}><img src={config.iconEmail}></img>{config.email}</a><br /> {/* email */}
                <a href={config.githubProfile}><img src={config.iconGithub}></img>{config.socialHandle}</a><br /> {/* GitHub */}
            </div>
            <div className="specialThanks">
                <h5>Special thanks to</h5>
                HS Replay<br />
                Astr00nauta<br />
                Taverna HS
            </div>
        </StyledFooter>
    );
}