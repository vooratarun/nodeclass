// Simulating asynchronous operations with fetch API
const fetch = require('node-fetch'); // This line is for Node.js environment

function fetchData1() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response) {
            return response.json();
        });
}

function fetchData2() {
    return fetch('https://jsonplaceholder.typicode.com/posts/2')
        .then(function(response) {
            return response.json();
        });
}

async function fetchAllData() {
    try {
        const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
        console.log('Data 1:', data1);
        console.log('Data 2:', data2);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAllData();
