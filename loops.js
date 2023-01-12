// cycles

const orderNumberOfCars = (numberOfCars) => {
    for (let i = 1; i < numberOfCars; i++) {
        console.log(`car ${i} has been ordered`);
    }

    console.log('finished');
}

orderNumberOfCars(10);


// types of cycles: for, while, do...while