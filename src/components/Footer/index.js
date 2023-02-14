import config from "../../../config.json";
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
        height: 12pt;
        width: 12pt;
        margin: auto 5px;
        border-radius: 49%;
        filter: grayscale(99%);
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0.5rem auto;
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
                <h4>About the author</h4>
                <img src={`${config.githubProfile}.png`} alt=""></img>{config.author}<br />
                <a href={`mailto:${config.email}`}><img src={config.iconEmail} alt="email"></img>{config.email}</a><br />
                <a href={config.githubProfile}><img src={config.iconGithub} alt="github"></img>{config.socialHandle}</a><br />
            </div>
            <div className="specialThanks">
                <h4>Special thanks to</h4>
                <a href="https://hsreplay.net/">HS Replay</a><br />
                <a href="https://github.com/AstrOOnauta">Astr00nauta</a><br />
                <a href="https://discord.gg/Rg7Sf6nG" title="A brazilian Discord Community dedicated to Hearthstone.">Taverna HS</a>
            </div>
        </StyledFooter>
    );
}