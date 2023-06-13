const fetch = require('isomorphic-fetch');
const FormData = require('form-data');

async function getSentimentAnalysis(text, language = "en") {
    const formData = new FormData();
    formData.append("key", process.env.API_KEY);
    formData.append("txt", text);
    formData.append("lang", language);  
    console.log(formData)

    const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
        const responseBody = await response.json();
        return {
            status: response.status,
            body: responseBody
        };
    } catch (error) {
        console.error('error', error);
    }
}

module.exports = { getSentimentAnalysis }

