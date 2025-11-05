// Duplicare l'array
export function cloneArray(array) {
    return array.map(value => {
        return value;
    })

    // return [...array];

    // return JSON.parse(JSON.stringify(array));
}

// Inserire l'elemento alla fine
export function addToArrayEnd(array, newElement) {
    array.push(newElement);
    return array;

    // return [...array, newElement];
}

// Inserire l'elemento all'inizio
export function addToArrayBeginning(array, newElement) {
    array.unshift(newElement);
    return array;

    // return [newElement, ...array];
}

// Inserire l'elemento all'indice specificato
// Se l'indice è negativo, inserirlo all'inizio dell'array
// Se l'indice è superiore alla lunghezza dell'array, inserirlo alla fine
export function insertIntoArray(array, newElement, index) {
    if(index < 0){
        array.unshift(newElement)
    }else if(index > array.length){
        array.push(newElement)
    }else{
        array.splice(index, 0, newElement);
    }
    return array;
}

// Dato un array di oggetti, trovare l'elemento in base a `condition`
// `condition` è un oggetto tipo { id: 46 } o { name: 'Anna' }
// Nel primo caso `findBy` deve restituire il primo elemento che ha un id uguale a 46;
// nel secondo caso il primo elemento che ha name uguale ad Anna
// Restituire null se non viene trovato nulla
export function findBy(array, condition) {
    const key = Object.keys(condition)[0];
    return array.find(element => {
        return element[key] === condition[key]
    }) || null;
}

// Come `findBy`, ma restituisce tutti gli elementi per i quali `condition` risulta vera
// Se per nessun elemento risulta vera, restituire un array vuoto
export function filterBy(array, condition) {
     const key = Object.keys(condition)[0];
    return array.filter(element => {
        return element[key] === condition[key]
    }) || [];
}

// Dato un array e un elemento, se l'elemento non è presente nell'array va inserito alla fine
// Se l'elemento è già presente, va rimosso
export function toggleArrayItem(array, element) {
    const index = array.findIndex(elemento => element === elemento);
    index != -1 ? array.splice(index, 1) : array.push(element);
    return array;
}

// Rimuove dall'array l'elemento all'indice specificato
// Se l'indice è superiore o inferiore alla lunghezza dell'array, restituire l'array originale
export function removeFromArray(array, index) {
    index >= 0 && index <= array.length ? array.splice(index, 1) : array;
    return array;
}

// Dati 2 o più array, unirli in un unico array
export function mergeArrays(...arrays) {
    return [].concat(...arrays);
}

// Dati 2 o più array, unirli in un unico array, ma rimuovere eventuali duplicati
export function mergeArraysUnique(...arrays) {  //prova usando set
  const merged = [].concat(...arrays);
  return Array.from(new Set(merged));
}

// Dato un array di oggetti, una chiave e una direzione (ASC | DESC), ordinare l'array in base ai valori della chiave specificata
// Se `direction` è ASC l'ordine deve essere ascendente, se è DESC discendente
// Es.: [{ age: 44, name: 'Mary' }, { age: 22, name: 'John' }, { age: 31, name: 'Mark' }] con chiave age e direction DESC
// restituisce [{ age: 44, name: 'Mary' }, { age: 31, name: 'Mark' }, { age: 22, name: 'John' }]
// Nota: `key` farà sempre riferimento a valori numerici
export function sortBy(array, key, direction) {
    const sortingLogic = (a, b) => {
        return direction === 'DESC' ? b[key] - a[key] : a[key] - b[key];
    }
    return array.sort(sortingLogic);
}

// Dato un array di oggetti, convertirlo in oggetto e usare come chiave il valore di `key`
// Es.: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] con key = 'name' deve restituire
// { A: { id: 1, name: 'A' }, B: { id: 2, name: 'B' } }
export function keyBy(array, key) {
    return array.reduce((acc, obj) => {
    const newKey = obj[key];
    acc[newKey] = obj;
    return acc;
  }, {});
}

// Dato un array, inserire il nuovo elemento all'indice specificato, sostituendo quello che c'è già
export function replaceItemAtIndex(array, newItem, index) {
    array.splice(index, 1, newItem);
    return array;
}

// Dato un array di oggetti, aggiungere a ogni oggetto le proprietà specificate
// Es.: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }] con properties { city: 'X', number: 99 }
// deve restituire [{ id: 1, name: 'A', city: 'X', number: 99  }, { id: 2, name: 'B', city: 'X', number: 99 }]
// L'array originale e i suoi elementi non devono essere modificati
export function addExtraProperties(array, properties) {
  return array.map(element => {
    return { ...element, ...properties };
  });
}


// Dato un array di oggetti rimuovere da ciascuno di essi le proprietà specificate
// Es.: [{ id: 1, name: 'A', city: 'X', state: 'Y' }] con properties ['city', 'state']
// deve restituire [{ id: 1, name: 'A' }]
// L'array originale e i suoi elementi non devono essere modificati
export function removeProperties(array, properties) {
    return array.map(element => {
        const newElement = { ...element };
        properties.forEach(prop => {
            delete newElement[prop];
        });
        return newElement;
    });
}

// Dato un array di oggetti con una chiave id e un array di id selezionati,
// restituire un nuovo array in cui gli elementi selezionati hanno la proprietà `selected`= true
// Es.: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }] e selectedIds = [2, 3]
// deve restituire [{ id: 1, name: 'A' }, { id: 2, name: 'B', selected: true }, { id: 3, name: 'C', selected: true }]
// L'array originale e i suoi elementi non devono essere modificati
export function setSelected(array, selectedIds) {
    return array.map(element => {
        return selectedIds.includes(element.id) ?  {...element, selected : true} : element;
    })
}

// Dato un array di oggetti, rimapparlo estraendo la chiave specificata
// Es.: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }] con chiave 'name'
// deve restituire ['A', 'B', 'C']
// Se la chiave non esiste, restituire l'array originale
export function mapTo(array, key) {
   const mapped = array.map(element => element[key])
    return mapped[0] === undefined ? array : mapped;
}

// Dato un array di oggetti e una funzione `predicate`, eseguire la funzione per ogni elemento
// e restituire true se per TUTTI è valida, altrimenti restituire false
// Es.: [{ id: 1, age: 32 }, { id: 2, age: 29 }] con predicate = (item) => item.age > 30,
// `areItemsValid` restituisce false perché non tutti gli elementi hanno `age` maggiore di 30
export function areItemsValid(array, predicate) {
    return array.every(predicate);
}

// Dato un array di stringhe, un array di oggetti e una chiave, restituire un nuovo array
// dove ogni elemento del primo è sostuito col corrispondente elemento del secondo in base al valore di `key`
// Es. array = ['11', '22', '33'], dataArray = [{ id: '33', name: 'A' }, { id: '11', name: 'B' }, { id: '22', name: 'C' }], key = 'id'
// `populate` reve restituire [{ id: '11', name: 'B' }, { id: '22', name: 'C' }, { id: '33', name: 'A' }]
// perché '11' nel primo array corrisponde con l'oggetto che ha id = '11' nel secondo array e così via
export function populate(array, dataArray, key) {
    const mapped = array.map((id) => {
        return dataArray.find(element => element[key] === id);
    })
    return mapped.filter(element => element != undefined);
}

// Dato un array products del tipo { product: 'A', price: 100, quantity: 1, special: true }
// e un oggetto discounts del tipo { default: 10, special: 20 } (dove sia default sia special potrebbero non esserci),
// calcolare il prezzo finale dei prodotti con l'eventuale sconto applicato,
// considerando che ai prodotti con special = true si applica la percentuale specificata in discount.special,
// agli altri prodotti la percentuale specificata in discounts.default
export function getTotal(products, discounts) { 
    const sum = (a, b) => {
        if(b.special !== undefined && discounts.special !== undefined){
            return a + (b.price * (100 - discounts.special) / 100) * b.quantity;
        }else if(discounts.default !== undefined){
            return a + (b.price * (100 - discounts.default) / 100) * b.quantity;
        }else{
           return a + b.price * b.quantity;
        }
    }

    return products.reduce(sum, 0);
}

// Dati un array di post, di commenti e di utenti (vedere in mock.js), creare un nuovo array dove ogni post include:
// - un campo `user` con l'oggetto intero dell'utente che corrisponde a `userId` (che va poi rimosso)
// - un campo `comments` che è un array di tutti i commenti associati a quel post (in base a `postId`, che va poi rimosso)
// Dentro ogni commento deve esserci un campo `user` con l'oggetto intero dell'utente che ha scritto il commento (corrispondente a `userId`, che va poi rimosso)
// Se non ci sono commenti, comments deve essere un array vuoto
// Controllare il risultato del test per vedere come deve essere l'array finale
export function populatePosts(posts, comments, users) { //usa la spread
    let mapped = [];
    posts.forEach((post, index) => {
        mapped[index] = post;
        mapped[index].user = users.find(user => user.id === post.userId);
        delete mapped[index].userId;
        mapped[index].comments = comments.filter(comment => (comment.postId === mapped[index].id));
        mapped[index].comments.forEach(comment => {
            delete comment.postId;
            comment.user = users.find(user => user.id === comment.userId);
            delete comment.userId;
        })
    })
    return mapped;
}

// Implementare il metodo nativo Array.map()
export function map(array, mapper) {
    let mapped = [];
    array.forEach((element, index) => {
        mapped[index] = mapper(element, index)});
    return mapped; 
}

// Implementare il metodo nativo Array.filter()
export function filter(array, predicate) {
    let filtered = [];
    array.forEach((element, index) => {
        if(predicate(element, index) === true) filtered.push(element)});
    return filtered; 
}

// Implementare il metodo nativo Array.some()
export function some(array, predicate) {
    for(let i = 0; i < array.length; i++){
        if(predicate(array[i], i) === true) return true;
    }
    return false;    
}

// Implementare il metodo nativo Array.every()
export function every(array, predicate) { //utilizza il ciclo for
    for(let i = 0; i < array.length; i++){
        if(predicate(array[i], i) === false) return false;
    }
    return true;    
}

// Implementare il metodo nativo Array.reduce()
export function reduce(array, reducer, initialState) { //rivedere
    let accumulator = initialState;
    let startIndex = 0;

    if (accumulator === undefined) {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i], i);
    }

    return accumulator;     
    
}

// Dato un array e una funzione, spostare alla fine dell'array l'elemento per il quale la funzione restituisce true
// Nota: soltanto uno degli elementi soddisfa la funzione shouldMove
export function moveToEnd(array, shouldMove) {
    let indexMove;
    const mapped = array.map((element, index ) => {
        if(shouldMove(element)){
            indexMove = index
        }
        return element;
    })
    mapped.push(mapped[indexMove]);
    mapped.splice(indexMove, 1);

    return mapped;
}
