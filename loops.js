// cycles

const orderNumberOfCars = (numberOfCars) => {
    for (let i = 1; i <= numberOfCars; i++) {
        console.log(`car ${i} has been ordered`);
        break;
    }

    console.log('finished');
}

orderNumberOfCars(5);


// types of cycles: for, while, do...while

const manufactureCars = (availableParts) => {
    let i = 1;
    while (i <= availableParts) {
        console.log(`manufactured a car with number: ${i}`);
        i++;
    }

    console.log('finished');
}

// manufactureCars(10);

const writeATicket = (isSpeeding) => {
    const maxTicketsCount = 10;
    let i = 1;
    do {
        if (i === maxTicketsCount) {
            console.log('Your drivers licence has been revoked.');
            break;
        }

        console.log('Driver has received a ticket for speeding.');
        i++
    } while (isSpeeding && maxTicketsCount >= i);
}

// writeATicket(true);