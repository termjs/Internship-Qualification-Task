import React, { useEffect, useState } from "react";
import image from "../images/profile-picture.png";
import pushData from "../functions/pushData";
import { Twitter, Instagram, Github } from "../functions/onClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { url } from "../functions/fetchAPIData";

function FetchAPI() {
    const posts = document.querySelectorAll('.postItem');
    const [data, setData] = useState([]);
    const apiGet = () => {
        fetch(url) // Default method = GET
            .then((res) =>
                res.json()
            )
            .then((json) => {
                setData(json);
            }).catch((error) => {
                let getError = "";
                const errorArr = [];
                errorArr.push(error)
                errorArr.map(() => {
                    getError += `
                    <div class="status-info">
                       <h2>${error}</h2>
                    <h2 class="percentage">Error</h2>
                     </div>
                        `; // Change status on error to Error and return it 
                });
                document.getElementById("statusError").innerHTML = getError;
            });
    };
    localStorage.setItem("postLength", posts.length); // Add posts.length to local storage for New Form page

    if (posts.length > 0) { // Check if there is any posts
        posts.forEach((post) => {
            post.children[0].addEventListener('click', (e) => { // For each child of posts - addEventListener
                const postId = e.target.dataset.fetched; // Get target ID
                localStorage.setItem("specificPost", postId);
                window.location.assign("pages/detailspage"); // Open Details page
            });
        });
    };

    useEffect(() => { // useEffect on Load
        apiGet();
    }, [])

    return (
        <>
            <main>
                <section className="glass">
                    <div className="dashboard">
                        <div className="user">
                            <img src={image} alt="" />
                            <h3>Term / Casparas</h3>
                            <p>Moksleivis</p>
                        </div>
                        <div className="links">
                            <div className="link">
                                <FontAwesomeIcon icon={faInstagram} />
                                <h2 onClick={Instagram}>Instagram</h2>
                            </div>
                            <div className="link">
                                <FontAwesomeIcon icon={faTwitter} />
                                <h2 onClick={Twitter}>Twitter</h2>
                            </div>
                            <div className="link">
                                <FontAwesomeIcon icon={faDiscord} />
                                <h2 style={{ cursor: 'auto' }}>Term#0545</h2>
                            </div>
                            <div className="link">
                                <FontAwesomeIcon icon={faGithub} />
                                <h2 onClick={Github}>Github</h2>
                            </div>
                        </div>
                    </div>
                    <div className="table">
                        <div className="topic">
                            <h1>Fetch API Data</h1>
                            <p></p>
                        </div>
                        <div>
                            <div className="container">
                                <selection>
                                    <div className="status" id="statusError">
                                        <h3>Ready to send new data to API</h3>
                                    </div>
                                    <div className="status">
                                        <div className="status-info">
                                            <div children>
                                                <label htmlFor="id">_id: </label>
                                                <input type="text" name="id" id="addInput0" placeholder="api.lenght + 1" disabled /><br />
                                                <label htmlFor="name">name: </label>
                                                <input type="text" name="name" id="addInput1" maxLength="15" autoComplete="off"/><br />
                                                <label htmlFor="city">city: </label>
                                                <input type="text" name="city" id="addInput2" maxLength="15" autoComplete="off"/><br />
                                                <label htmlFor="age">age: </label>
                                                <input type="text" name="age" id="addInput3" maxLength="3" autoComplete="off"/><br />
                                                <label htmlFor="hobby">hobby: </label>
                                                <input type="text" name="hobby" id="addInput4" maxLength="15" autoComplete="off"/><br />
                                            </div>
                                        </div>
                                        <button className="postButton" onClick={pushData}><FontAwesomeIcon icon={faPaperPlane} /></button>
                                    </div>
                                </selection>
                                <div id="postBodys">
                                    {data.map((item) => (
                                        <selection className="postItem">
                                            <div style={{ cursor: 'pointer' }} className="status" data-fetched={item.id}>
                                                <h3 data-fetched={item.id}>
                                                    {'Nr. ' + item.id + ") "}{item.title}
                                                    <br /><br />
                                                    {'About: ' + item.body}
                                                </h3>
                                            </div>
                                        </selection>
                                    ))};
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </>
    );
};

export default FetchAPI;

