import styled from "styled-components";
import config from "../../config.json";
import {BsTelegram, BsFillEnvelopeFill, BsGithub} from 'react-icons/bs';

const StyledFooter = styled.div`
    img{
        width: 13pt;
        height: 13pt;
        border-radius: 50%;
        margin: 0 5px;
    }
    background-color: #1e1e1e;
    padding: 10px;
    text-align: center;
`;
export default function Footer(){
    return (
        <StyledFooter>
            <b>Author:</b> <img src={`${config.GithubURL}.png`}></img> {config.name}<br></br>
            <b>Contact:</b> <BsFillEnvelopeFill /> <a href={`mailto:${config.email}`}>{config.email}</a> 
                | <BsGithub /> <a href={config.GithubURL}>{config.github}</a>
                | <BsTelegram /> <a href={config.telegram}>JVandenildo</a>
        </StyledFooter>
    )
}
