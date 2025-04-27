// 🏆 Code Question 2

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// RISPOSTA: in console, verrà stamapto 2 volte la stringa "salad", poichè nonostante sia stata eseguita una shallow copy del primo oggetto, creando conseguentemente un secondo con le medesime proprità, l'array degli ingredienti rimane una reference, quindi variando l'indice 0 del secondo array verrà automaticamente cambiato anche il primo array, poichè entrambi puntano alla stessa posizione in memoria.

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// RISPOSTA: sono stati creati 3 oggetti, il rimo hamburger, il secondo e l'array stesso contenuto nel primo oggetto


const hamburger = { 
        name: "Cheese Burger", 
        weight: 250,
        ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
    };
    ​
    const secondBurger = {...hamburger};
    secondBurger.ingredients[0] = "Salad";
    ​
    console.log(hamburger.ingredients[0]); // salad
    console.log(secondBurger.ingredients[0]); // salad