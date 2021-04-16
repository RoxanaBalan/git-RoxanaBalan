const URL = 'https://dog.ceo/api/breeds/image/random';


function getADogPicture() {
    const promise = fetch(URL);

    promise
        .then(function(response) {
            return response.json();
        }) 
        .then(function(processedResponse) {
            console.log(processedResponse) 
            if (processedResponse.status === "error") {
                const errorContainer = document.getElementById("error")
                errorContainer.innerText = processedResponse.message;
                throw new Error("Error")
            } else {
                const img = document.createElement('img');
                img.src = processedResponse.message;
                document.body.appendChild(img);
            }


        });
}

//////
// my function with then
//////

const URL = 'https://dog.ceo/api/breeds/image/random';


function getADogPicture() {
    const promise = fetch(URL);

    promise

        .then(function(response) {
        console.log(response);
        return response.json();
    })

    .then(function(processedResponse) {
        console.log(processedResponse)

        if (processedResponse.status === "error") {
            const errorContainer = document.getElementById("error")
            errorContainer.innerText = processedResponse.message;
            throw new Error("Error")

        } else {
            const img = document.createElement('img');
            img.src = processedResponse.message;
            document.body.appendChild(img);
        }
    });
}


//////
// my function with async si await
//////

// const URL = 'https://dog.ceo/api/breeds/image/random';


async function fetchDog() {
    const response = await fetch(URL);
    return response.json();

    fetchDog().then(processedResponse => {
        console.log(processedResponse);


        if (processedResponse.status === "error") {
            const errorContainer = document.getElementById("error")
            errorContainer.innerText = processedResponse.message;
            throw new Error("Error")

        } else {
            const img = document.createElement('img');
            img.src = processedResponse.message;
            document.body.appendChild(img);
        }
    });
}