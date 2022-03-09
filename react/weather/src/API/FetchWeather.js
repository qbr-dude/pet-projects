import axios from 'axios';

export default class PostService {

    static async getData({ city }) {
        const apiKey = '500234efe4c3bb2da37f15a6c2467041';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
