// Code Question 6 (Bonus)

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// RISPOSTA: Vedendo le funzioni interne all'oggetto mi verrebbe da pensare che il miglior metodo sia spread, però ci sono altri 2 oggetti si con funzioni, però annidati, il che non permette in una sola volta di copiare tutte le proprietà e funzione dell'ogetto, si dovrebbe quindi procedere utilizzando lo spreadOperator su ogni oggetto volta per volta, come segue:


const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

const CloneDiChef = {
    ...chef,
    restaurant: {
        ...chef.restaurant},
        address: {
            ...chef.restaurant.address,
        }
    }

CloneDiChef();