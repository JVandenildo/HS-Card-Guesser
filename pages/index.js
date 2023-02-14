import styled from "styled-components";
import config from "../config.json";
import Footer from "../src/components/Footer";
import Rules from "../src/components/Rules";
import Game from "../src/components/Game";

const StyledHomePage = styled.div`
    display: flex;
`;

export default function HomePage(){
    return (
        <>
            <head>
                <meta charSet="utf-8"></meta>
                <title>HS Card Guesser</title>
                <link rel="icon" href={config.iconHS}></link>
            </head>
            <div>
                <StyledHomePage>
                    <Rules/>
                    <Game/>
                </StyledHomePage>
                <Footer />
            </div>
        </>
    );
}