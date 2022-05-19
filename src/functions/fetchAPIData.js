export const url = "https://jsonplaceholder.typicode.com/posts";
export default function fetchAPIData() {
    
    var getSpecificPost = localStorage.getItem("specificPost"); // Get item from local storage
    const lenghtPosts = [];
    fetch(url + `/${getSpecificPost}`)
        .then(response => response.json()).then((data) => { // Get response and turn it to JSON
            let specificPostData = "";
            const singleData = [];
            lenghtPosts.push(data); // Push values to array
            singleData.push(data);
            singleData.map((values) => {

                specificPostData += `
                <h2 style="font-weight: lighter; text-align: left">
                    {
                        <br>
                            "userId": ${values.userId}, <br>
                            "id": ${values.id}, <br>
                            "title": "${values.title}", <br>
                            "body": "${values.body}" 
                        <br>
                    }
                    </h2>
                `;
            });
        document.getElementById("specificBody").innerHTML = specificPostData; // Change the content
    });
};
