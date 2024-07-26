
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

async function promiseall() {
    try {
        const [data1, data2] = await Promise.all([fetchFromSource1(), fetchFromSource2()]);
        console.log('data1:',data1);
        console.log("data2", data2)

    } catch (error) {
        console.error('Error:', error);
    }
}

// promiseall();


async function fetchFirstData() {
    try {
        const result = await Promise.race([fetchFromSource1(), fetchFromSource2()]);
        console.log('First data received:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchFirstData();
