import axios from 'axios';
const config  = {
    apiKey : "925eba28",
    url:"http://www.omdbapi.com/"
}

export const getFilmesByName = async value =>{

    return await axios.get(config.url,{ params: { apiKey: config.apiKey,s:value } })

}