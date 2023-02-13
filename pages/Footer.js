import config from "../config.json";
import styled from "styled-components";

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
        margin: auto 5rem;
    }
    .specialThanks{
        margin: auto 5rem;
    }
`;

export default function Footer(){
    return(
        <StyledFooter>
            <div className="author">
                <h5>About the author</h5>
                <img src={`${config.githubProfile}.png`} alt="author img"></img>{config.author}<br /> {/* name */}
                <a href={`mailto:${config.email}`}><img src={config.iconEmail} alt="email"></img>{config.email}</a><br /> {/* email */}
                <a href={config.githubProfile}><img src={config.iconGithub} alt="github"></img>{config.socialHandle}</a><br /> {/* GitHub */}
            </div>
            <div className="specialThanks">
                <h5>Special thanks to</h5>
                <a href="https://hsreplay.net/">HS Replay</a><br />
                <a href="https://github.com/AstrOOnauta">Astr00nauta</a><br />
                <a href="https://discord.gg/Rg7Sf6nG" title="A brazilian Discord Community dedicated to Hearthstone">Taverna HS</a>
            </div>
        </StyledFooter>
    );
}