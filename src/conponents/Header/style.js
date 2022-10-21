import styled from "styled-components";

const AppHeader = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #ff0000;
    padding: 15px 0;
    box-shadow: rgba(600, 0, 0, 0.5) 0px 8px 24px;
`;

const AppInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AppTitle = styled.h1`
    color: #fff;
    text-align:center;
    font-weight: 700;
`;

const AppLogo = styled.img`
    width: 50px;
    height: 50px;
`;


export { AppHeader, AppInfo, AppTitle, AppLogo }