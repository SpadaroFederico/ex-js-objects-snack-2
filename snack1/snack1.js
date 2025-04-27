// 🏆 Code Question 1

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// RISPOSTA: in console vengono stampati 2 oggetti, con le medesime proprietà poichè hamburger è un object e viene con seconBurger copiato solo il riferimento, perciò ci saranno 2 secondBurger con le propietà definite nel secondo object

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// RISPOSTA: viene creato un solo oggetto, oichè si tratta solo di un reference object


const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;
​
console.log(hamburger.name); // { name: "Double Cheese Burger", weight: 500 };
console.log(secondBurger.name ); // { name: "Double Cheese Burger", weight: 500 };