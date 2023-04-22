import axios from 'axios'


const searchImages = async (term) => {
    const repsonse = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Your Access Key'
        },
        params: {
            query: term
        }
    })
    debugger;
    return repsonse.data.results;
};

export default searchImages;