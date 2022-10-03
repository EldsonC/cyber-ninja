import React from "react";
import Header from "../../components/topbar";
import BollOne from "../../svgs/bollOne";
import CardIco from "../../svgs/card";
import CyberNinja from "../../svgs/cyberNinja";
import { Container } from "./style";

export default function Home() {
    return (
        <Container>
            <div className="container">
                <span className="title">Cyber Ninja</span>

                <div className="content-text">
                    <div className="cont">
                        <div className="border-left">

                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo a aliquam massa porttitor. Non, enim ac dui nulla mauris lectus phasellus est massa. Sit in felis, interdum pellentesque aliquet risus dolor a diam. Ultricies at aliquam nibh ullamcorper consectetur sollicitudin ut.</p>

                    </div>
                    
                    <div className="button">
                        <div className="icon-btn">
                            <CardIco/>
                        </div>
                        <div className="body-btn">
                            <span>Get it now</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cyber-ninja">
                <CyberNinja/>
            </div>

            <div className="cyber-boll">
                <BollOne/>
            </div>
        </Container>
    )
}