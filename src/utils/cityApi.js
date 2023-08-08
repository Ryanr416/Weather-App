    import tokenService from "./tokenService"

    const BASE_URL = '/api/savedCities/';

    // the create function for adding a city to the database.

    export function create(data){
        return fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Authorization: "Bearer " + tokenService.getToken(),
                'Content-Type': 'application/json'
            }
        }).then(responseFromTheServer => {
            if(responseFromTheServer.ok) return responseFromTheServer.json()
            throw new Error('Something went wrong in the create added city')
        })
    }


    // this function gathers the list of cities on the database
    export function getAll(){
        return fetch(BASE_URL, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + tokenService.getToken()
                
            }
        }).then(responseFromTheServer => {
            if(responseFromTheServer.ok) return responseFromTheServer.json()

            throw new Error('Something went wrong in the getAll cities, check the console')
        })
    }




// this function deletes the city that was clicked on 
    export function deleteCity(cityName){
        console.log(cityName, ' <- cityName console')
        return fetch(`${BASE_URL}${cityName}`, {
            method:'DELETE',
            headers: {
                // convention for sending jwts
                
                Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage and and it to our api request
                // so the server knows who the request is coming from when the client is trying to make a City
        }
    }).then(responseFromTheServer => {
        if(responseFromTheServer.ok) return responseFromTheServer.json() // 
        throw new Error('Something went wrong in delete City'); 
    })
    }
