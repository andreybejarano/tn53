function getName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            return reject('El parametro name es requerido!');
        }
        return resolve({ message: `Hola ${name}!`, name });
    });
}

function getChildName(name, parentName) {
    return new Promise((resolve, reject) => {
        if (!name) {
            return reject('El parametro name es requerido!');
        }
        if (!parentName) {
            return reject('El parametro parentName es requerido!');
        }
        return resolve(`Hola ${name} sos pariente de ${parentName}!`);
    });
}

// getName('Andrey')
//     .then(({ message, name }) => {
//         console.log(message);
//         getChildName('Thomas', name)
//             .then((message) => {
//                 console.log(message);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function getMessages() {
    try {
        const { message, name } = await getName('Erik');
        console.log(message);
        const message2 = await getChildName('Thomas', name);
        console.log(message2);
    } catch (err) {
        console.log(err);
    }
}

getMessages();






//pending
//resolved
//rejected