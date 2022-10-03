import styled from "styled-components"

export const Container = styled.header `
    padding: 0 36px;
    width: calc(100% - 72px);
    height: 50px;

    display: flex;
    align-items: center;

    background: black;

    /* styles active */
    .selected-btn {
        margin-right: 39px;
        font-family: "Inter";
        font-size: 16px;
        font-weight: 500;
        color: white;

        text-decoration: none;

        border-bottom: 2px solid #D34B58;
    }
    

    .btn__style {
        margin-right: 39px;
        font-family: "Inter";
        font-size: 16px;
        font-weight: 500;
        color: white;

        text-decoration: none;
    }
`;