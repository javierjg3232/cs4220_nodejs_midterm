import axios from 'axios';

export const searchByKeyword = async (keyword) => {
    try {
        console.log(`Fetching data for: ${keyword}`); 
        const response = await axios.get(`https://openlibrary.org/search.json?q=${keyword}`);
        return response.data.docs; 

    } catch (error) {
        console.error(`Error fetching data:`, error.message);
        return []; 
    }
};

export const getDetailedData = async (isbn) => {
    try {
        console.log(`Fetching detailed data for ISBN: ${isbn}...`);
        const response = await axios.get(`https://openlibrary.org/search.json?isbn=${isbn}.json`);

        if (!response.data["docs"][0]) {
            console.log("No details found for the selected item.");
            return null;
        }

        return response.data["docs"][0];

    } catch (error) {
        console.error("Error fetching detailed data.", error.message);
        return null;
    }
};
