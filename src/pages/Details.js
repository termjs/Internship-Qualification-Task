import React from "react";
import image from "../images/profile-picture.png";
import { Twitter, Instagram, Github } from "../functions/onClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import fetchAPIData from "../functions/fetchAPIData";

class Details extends React.Component {
    render() {
        const Selection = () => {
            return (
                <section class="glass">
                <div className="dashboard">
                    <div className="user">
                        <img src={image} alt="" />
                        <h3>Term / Casparas</h3>
                        <p>Moksleivis</p>
                    </div>
                    <div className="links">
                        <div onClick={Instagram} className="link">
                            <FontAwesomeIcon icon={faInstagram} />
                            <h2>Instagram</h2>
                        </div>
                        <div onClick={Twitter} className="link">
                            <FontAwesomeIcon icon={faTwitter} />
                            <h2>Twitter</h2>
                        </div>
                        <div style={{ cursor: 'auto' }} className="link">
                            <FontAwesomeIcon icon={faDiscord} />
                            <h2>Term#0545</h2>
                        </div>
                        <div onClick={Github} className="link">
                            <FontAwesomeIcon icon={faGithub} />
                            <h2>Github</h2>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div class="topic">
                        <h1>Details Page</h1>
                        <p></p>
                    </div>
                    <div>
                        <div class="container">
                            <selection>
                                <div class="status">
                                    <div class="status-info" id="specificBody">
                                        <h2>Something went wrong with our API</h2>
                                        <h2 class="percentage">Error</h2>
                                    </div>
                                </div>
                            </selection>
                        </div>
                    </div>
                </div>
            </section>
            );
        };
        document.addEventListener('readystatechange', event => { // Listen for ready State Change
            if (event.target.readyState === "complete") { // Check if event is complete
                fetchAPIData(); // Load the function
            }
        });
        return (
            <>
                <main>
                    <Selection />
                </main>
                <div className="circle1"></div>
                <div className="circle2"></div>
            </>
        );
    }
}

export default Details;