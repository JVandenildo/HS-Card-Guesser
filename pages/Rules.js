import styled from "styled-components";

const StyledRules = styled.div`
    max-width: 22rem;
    height: fit-content;
    padding: 5px 10px 75px;
    background-color: #1e1e1e;
    top: 0%;
    right: 0%;
    border: 0%;
`;

export default function Rules(){
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