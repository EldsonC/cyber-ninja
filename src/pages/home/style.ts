import styled from "styled-components"

export const Container = styled.div `
    padding: 0 36px;
    width: calc(100% - 72px);
    height: calc(100vh - 50px);

    .cyber-ninja {
        position: absolute;
        bottom: 0px;
        right: 300px;

        z-index: 1;
    }

    .cyber-boll {
        position: absolute;
        bottom: 0px;
        right: 300px;
    }

    .container {
        padding-top: 164px;
        font-family: "Inter";
        color: white;

        .title {
            font-size: 100px;
            font-weight: bold;
            letter-spacing: 5px;
        }

        .content-text {
            margin-top: 106px;
            width: 40%;
            display: flex;
            flex-direction: column;

            .cont {
                display: flex;
                .border-left {
                    margin-right: 40px;
                    width: 10px;
                    height: 70px;
    
                    background: #D34B58;
                    box-shadow: 0px -12px 189px 58px hsla(354, 61%, 56%, 0.5);

                }
    
                p {
                    font-size: 16px;
                    font-weight: 400;
                }
            }

            .button {
                margin-top: 106px;
                display: flex;
                cursor: pointer;
                .icon-btn {
                    width: 117px;
                    height: 73px;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    background: #D34B58;
                    box-shadow: -11px 18px 65px 0px hsla(354, 61%, 56%, 0.5);
                }

                .body-btn {
                    width: 217px;
                    height: 73px;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    font-weight: 700;

                    color: #3B3B3B;

                    background: white;
                }
            }
        }
    }
`;