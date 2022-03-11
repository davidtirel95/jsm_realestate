import axios from 'axios'; 

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'c3f57667b6msh2b195c6e8f18658p1f9fadjsnc78521dd1cef'
          }
    });

    return data;
}