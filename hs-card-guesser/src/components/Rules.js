import styled from "styled-components";

const StyledRules = styled.div`
    img{
        width: 13pt;
        height: 13pt;
        border-radius: 50%;
    }
    background-color: #1e1e1e;
    padding: 0.3rem 0.6rem;
    max-width: 24vw;
`;
export default function Rules(){
    return (
        <StyledRules>
            <p>The game Hearthstone is a property of Blizzard Entertainment, all rights are reserved to them. The work done here is fan made.<br></br>
            Please visit <a href="https://hearthstone.blizzard.com/">playhearthstone.com</a> to learn about the original game.</p>
            <h2>Rules</h2>
            The game rules must be clear and simple to all players. If something ain't quite right, contact the author.
            <ol>
                <li>Minimum of 2 players;</li>
                <li>Players must agree on number of card to guess, but the default is 5;</li>
                <li>Win the game who gather most of the points;</li>
                <li>The amount of points on each card depends on how many clues the player got.</li>
            </ol>
            <h3>Clues</h3>
            The game begins with a "free clue" (which means the player doesn't lose points if gets the guess wrong), this clue gives out which type of card the player is dealing with.The following points are given depending on it.<br></br>
            Card types and quantity of clues are:
            <ul>
                <li>Minions.</li>
                <ol>
                    <li>Types (undead, naga, murloc, etc.);</li>
                    <li>Expansion;</li>
                    <li>Rarity;</li>
                    <li>Mana cost;</li>
                    <li>Class;</li>
                    <li>Special mechanics (reborn, charge, etc.);</li>
                    <li>Attack & Life;</li>
                    <li>Flavor (funny text that goes with the card).</li>
                </ol>
                <li>Spells.</li>
                <ol>
                    <li>Types (fire, arcane, etc.);</li>
                    <li>Expansion;</li>
                    <li>Rarity;</li>
                    <li>Mana cost;</li>
                    <li>Class;</li>
                    <li>Special mechanics (twinspell, freeze, etc.);</li>
                    <li>Flavor (funny text that goes with the card).</li>
                </ol>
                <li>Others (Quests, heroes, places, etc).</li>
                <ol>
                    <li>Expansion;</li>
                    <li>Rarity;</li>
                    <li>Mana cost;</li>
                    <li>Flavor;</li>
                    <li>Class.</li>
                </ol>
            </ul>
            <p style={{fontSize: '10pt'}}><strong>Note:</strong> I don't know how to set a multiplayer match, yet. So take your own point notes and compare with your adversaries.</p>
        </StyledRules>
    )
}