import { url } from "./fetchAPIData";
import {useHistory} from 'react-router-dom'

export default function pushData() {
    const inputArr = [];
    for (let i = 1; i < 5; i++) {
        const inputValue = document.getElementById(`addInput${i}`).value;

        inputArr.push(inputValue); // Push input values to array
        localStorage.setItem("addPostID", inputArr);

        let history = useHistory()

        fetch(url, {
            method: 'POST', // Specify the method
            headers: {
                'Content-Type': 'application/json', // Specify file/content type
            },
            body: JSON.stringify(inputArr) // Specify body and turn it to JSON string
        })
            .then(response => {
                response.json(); // Convert to json
                
                history.push('Internship-Qualification-Task/newformpage'); // Navigate to another page
            })
            .catch((error) => {

                let getError = "";
                const errorArr = [];
                errorArr.push(error);
                errorArr.map(() => {

                    getError += `
                        <div class="status-info">
                           <h2>${error}</h2>
                            <h2 class="percentage">Error</h2>
                        </div>
                    `; // Change status to Error and return it 
                });

                document.getElementById("statusError").innerHTML = getError; // Change the content
            });
    }
}
