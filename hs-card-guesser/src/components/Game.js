import styled from "styled-components";
import api from '../../services/api';
import React, { useEffect, useState } from "react";

const StyledGame = styled.div`
    img{
        max-width: 15.5vw;
        max-height: 47vh;
        cursor: pointer;
    }
    .jiggle button{
        background-color: #918C74;
        border: 2px solid #918C74;
        border-radius: 40%;
        margin: 2rem;
        box-shadow: 0rem 0rem 1rem #68EAE7;
        text-shadow: 0rem 0rem 0.1rem #68EAE7;
        color: #68eae7;
    }.jiggle button:active {
        background-color: #787360;
        border: 2px solid #787360;
        border-radius: 40%;
        box-shadow: 0rem 0rem 0rem #5CD1CF;
        text-shadow: 0rem 0rem 0rem #5CD1CF;
        color: #5CD1CF;
    }

    .guess{
        border-radius: 85px;
        border: 0.5vh solid #484846;
        background-color: #d5be94;
        margin: 0.6vh;
        padding: 0.6vh;
        input{
            border: 0.6vh solid #d5be94;
            background-color: #d5be94;
            border-radius: 85px 0px 0px 85px;
        }
        button{
            background-color: #f1f012;
            border: 0.6vh solid #737308;
            border-left: 0vh solid #f1f012;
            border-top: 0vh solid #f1f012;
            box-shadow: 0px 0px 1vh #595c55;
        }button:active{
            border: 0.3vh solid #f1f012;
            border-left: 0.3vh solid #f1f012;
            border-top: 0.3vh solid #f1f012;
            border-radius: 85px;
            box-shadow: 0px 0px 1px #595c55;
        }
    }
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 24vw);
`;

export default function Game(){
    const [card, setCard] = useState();

    useEffect(() => {
        api
          .get("./enUS/cards.collectible.json")
          .then((response) => setCard(response.data))
          .catch((err) => {
            console.error("Not quite right " + err);
          });
      }, []);

    return (
        <StyledGame>
            <h2>Card to guess</h2>
            <picture>
                <img src="https://d15f34w2p8l1cc.cloudfront.net/hearthstone/49715e42324ffb11328cf4aa8ec3e7ad0b48bb6c45dba17eb42f53a8f162b554.png" type="image/png"></img>
            </picture>
            <div className="jiggle">
                <button>JIGGLE IT!!</button>
            </div>
            <div className="guess">
                <input type="search" placeholder="Guess" onChange={() =>{
                    console.log("Type on search!")
                }}/><button>JACKPOT!</button>
            </div>
            <div>
                <h2>Clues</h2>
                <p />Card ID: {id.artist}<br />
                Card name:
            </div>
        </StyledGame>
    )
}
