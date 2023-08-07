    import tokenService from "./tokenService"

    const BASE_URL = '/api/savedCities/';


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