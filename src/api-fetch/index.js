const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export async function registerUser(username, password){
    try{
        let response = await fetch(`${BASE_URL}/users/register`,{
            method:"POST",
            headers:{
                'content-type': "application/json",},
                body: JSON.stringify({
                    user:{
                        username: username,
                        password: password,
                    },
                    }),
                })
            
        const translatedData = await response.json();
        console.log(translatedData)
        return translatedData
    }catch(error){
        console.error(error);
    }

};

export async function fetchProducts(){
    try{
        let response = await fetch(`${BASE_URL}/posts`)
        let translatedData = await response.json();
        console.log(translatedData)
        return translatedData.data
    }catch(error){
        console.error(error)
    }
     
}

export async function loginUser(username, password){
    try{
        let response = await fetch(`${BASE_URL}/users/login`,{
            method:"POST",
            headers:{
                'content-type': "application/json",
            },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password,
                    },
                    }),
                })
            const result = await response.json();
        console.log(result)
        return result
    }catch(error){
        console.error(error);
    }

};