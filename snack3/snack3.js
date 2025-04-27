// 🏆 Code Question 3

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//  RISPOSTA: in memmoria, durante l'esecuzione del codice sono presenti: da riga 7 a riga 19 il primo object, da riga 10 a riga 18 è presente il secono dobject annidato, da riga 12 a riga 16 è presente il terzo object annidato, quindi sono presenti 3 oggetti in memoria. In seguito, avendo effettuato una structuredclone, cioè una deep copy, vengono cretati altri 2 oggetti con le medesime proprietà e oggetti annidati. Ne consegue che in memoria sono presenti alla fine della riga 22 un totale di 9 oggetti.


const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {                                  //3
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
