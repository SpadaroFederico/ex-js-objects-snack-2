// 🏆 Code Question 4

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// RISPOSTA: il miglior metodo è lo spred operator perchè è presente una funzione, ciò comporta che sarà necessario utilizzare o il metodo reference o il metedo appunto spread, tuttavia è presente un valore che potrebbe in futuro cambaire, e se volessimo creare un secondo oggetto con le medesime propprietà tranne che per il contatore utilizzando reference varierebbe per entrambi


// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// RISPOSTA: è meglio ulizzare structuredclone poichè gestisce oggetti complessi, e in restaurant è presente una proprietà date



const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
​
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};
