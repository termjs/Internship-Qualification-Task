import React from "react";
import image from "../images/profile-picture.png";
import { Twitter, Instagram, Github } from "../functions/onClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

class NewForm extends React.Component {
    render() {
        const Selection = () => {
            return (
                <section className="glass">
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
                        <div className="topic">
                            <h1>New Record</h1>
                            <p></p>
                        </div>

                        <div className="container">
                            <div className="formAPI">
                                <div className="status">
                                    <h3>Received sent data from API</h3>
                                </div>
                                <div className="status">
                                    <div className="status-info" id="postBody">
                                        <h2 style={{fontWeight: 'lighter', textAlign: 'left'}}>
                                            &#123;
                                            <br />
                                            {/* Convert string to number to show "fake" api lenght */}
                                            "_id": {Number(newID) + 1}, <br />
                                            "name": {getPBArr[0]}, <br />
                                            "city": {getPBArr[1]}, <br />
                                            "age": {getPBArr[2]}, <br />
                                            "hobby": {getPBArr[3]}
                                            <br />&#125;
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )};

        // Get Data from local storage
        var getPostBody = localStorage.getItem("addPostID");
        var newID = localStorage.getItem("postLength");
        var getPBArr = getPostBody.split(",")
        document.getElementById("postBody");
        return (
            <>
                <main>
                    <Selection />
                </main>
                <div className="circle1"></div>
                <div className="circle2"></div>
            </>
        );
    };
};


export default NewForm;
