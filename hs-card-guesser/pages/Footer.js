import styled from "styled-components";
import config from "../config.json";

const StyledFooter = styled.div`
    img{
        width: 13pt;
        height: 13pt;
        border-radius: 50%;
    }
`;
function Footer(){
    return (
        <StyledFooter>
            <b>Author:</b> <img src={`${config.GithubURL}.png`}></img>{config.name}<br></br>
            <b>Contact:</b> <a href={config.GithubURL}>{config.github}</a> | {config.BattleNet}
        </StyledFooter>
    )
}

export default Footer