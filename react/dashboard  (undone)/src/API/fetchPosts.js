import axios from "axios"

export async function fetchAllPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}