const fetch = require('node-fetch'); // This line is for Node.js environment

const fetchFromSource1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from source 1');
        }, 1000);
    });
};

const fetchFromSource2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from source 2');
        }, 500);
    });
};

async function fetchFirstData() {
    try {
        const result = await Promise.race([fetchFromSource1(), fetchFromSource2()]);
        console.log('First data received:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchFirstData();
