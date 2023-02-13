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
        margin: 0 5rem;
    }
    .specialThanks{
        margin: 0 5rem;
    }
`;

export default function Footer(){
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
                Taverna HS, a brazilian Discord Community dedicated to Hearthstone
            </div>
        </StyledFooter>
    );
}