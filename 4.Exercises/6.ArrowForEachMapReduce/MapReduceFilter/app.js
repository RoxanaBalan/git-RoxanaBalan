// 1. Eliminați duplicatele dintr-o serie de numere / șiruri

const values = [3, 1, 3, 5, 2, 4, 4, 4];
const uniqueValues = [...new Set(values)];

// uniqueValues is [3, 1, 5, 2, 4]


// 2. O căutare simplă(sensibilă la majuscule / minuscule)
// filtru() metoda creează o nouă matrice cu toate elementele care trec testul implementat de funcția furnizată.
const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let res1 = users.filter(it => it.name.includes('Oliver'));
console.log(res1) // res1 is { id: 97, name: "Oliver", age: 28, group: "admin" }

let res2 = users.filter(it => it.name.includes('oli'));
console.log(res2) // res2 is []


// 3. O căutare simplă(fără majuscule)
let res3 = users.filter(it => new RegExp('oli', "i").test(it.name));

/*
  res3 is
[
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
]
*/


// 4. Verificați dacă vreunul dintre utilizatori are drepturi de administrator
// some() metoda testează dacă cel puțin un element din matrice trece testul implementat de funcția furnizată.
const hasAdmin = users.some(user => user.group === 'admin');

// hasAdmin is true


// 5. Aplatizarea unei matrice de tablouri
// Rezultatul primei iterații este egal cu: […[], …[1, 2, 3]]înseamnă că se transformă în [1, 2, 3] – această valoare pe care o oferim ca ‘acc’ la a doua iterație și așa mai departe.
const nested = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);

// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 5.1 Putem îmbunătăți ușor acest cod omițând o matrice goală[]ca al doilea argument pentru reduce().
let flat = nested.reduce((acc, it) => [...acc, ...it]);

// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]

//5.2 o cale mai scurtă fără Array.reduce:
let flat = [].concat.apply([], nested);

// 7. Indexarea unei matrice de obiecte (tabel de căutare)
// În loc să procesăm întreaga matrice pentru găsirea unui utilizator după ID, putem construi un obiect în care ID-ul utilizatorului reprezintă o cheie (cu timp de căutare constant).
//Este util atunci când trebuie să vă accesați datele prin id uTable[85].name. 
const uTable = users.reduce((acc, it) => (acc[it.id] = it, acc), {})

/*
// uTable equals:
{
    11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
    47: { id: 47, name: 'John', age: 28, group: 'admin' },
    85: { id: 85, name: 'William', age: 34, group: 'editor' },
    97: { id: 97, name: 'Oliver', age: 28, group: 'admin' }
}
*/

// 8. Extrageți valorile unice pentru cheia dată a fiecărui element din matrice
// Să creăm o listă a grupurilor de utilizatori existenți. Hartă() metoda creează o nouă matrice cu rezultatele apelării unei funcții furnizate pe fiecare element din matricea apelantă.
const listOfUserGroups = [...new Set(users.map(it => it.group))];

// listOfUserGroups is ['editor', 'admin'];

// 9. Inversarea hărții cheie-valoare a obiectului
const cities = {
    Lyon: 'France',
    Berlin: 'Germany',
    Paris: 'France'
};

let countries = Object.keys(cities).reduce(
    (acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc), {});

/*
// countries is
{
    France: ["Lyon", "Paris"],
    Germany: ["Berlin"]
}
*/

// Acest one-liner pare destul de complicat. Noi folosim operator virgulă aici și înseamnă că returnăm ultima valoare dintre paranteze – acc. Să rescriem acest exemplu într-un mod mai pregătit pentru producție și mai performant:
// Aici nu folosim operator de răspândire – creează o nouă matrice pe fiecare reduce() apel, ceea ce duce la o penalizare de performanță mare: O (n²).
let countries = Object.keys(cities).reduce((acc, k) => {
    let country = cities[k];
    acc[country] = acc[country] || [];
    acc[country].push(k);
    return acc;
}, {});

// 12. Imprimați un tabel de utilizatori ca un șir lizibil numai cu cheile specificate
// Uneori doriți să imprimați matricea de obiecte cu tastele selectate ca șir, dar vă dați seama de asta JSON.stringify nu-i așa grozav?
const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

users.map(({ id, age, group }) => `n${id} ${age} ${group}`).join('')

/*
// it returns:
"
11 23 editor
47 28 admin
85 34 editor
97 28 admin "
*/

// JSON.stringify poate face ieșirea șirului mai lizibilă, dar nu ca tabel:
/*
JSON.stringify(users, ['id', 'name', 'group'], 2);

// it returns:
"[
  {
    "id": 11,
    "name": "Adam",
    "group": "editor"
  },
  {
    "id": 47,
    "name": "John",
    "group": "admin"
  },
  {
    "id": 85,
    "name": "William",
    "group": "editor"
  },
  {
    "id": 97,
    "name": "Oliver",
    "group": "admin"
  }
]"
*/

// 13. Găsiți și înlocuiți o pereche cheie-valoare într-o serie de obiecte
// Să presupunem că vrem să schimbăm vârsta lui John. Dacă cunoașteți indexul, puteți scrie acest rând: users[1].age = 29. Cu toate acestea, să aruncăm o privire la un alt mod de a face acest lucru:
const updatedUsers = users.map(
    p => p.id !== 47 ? p : {...p, age: p.age + 1 }
);

// John is turning 29 now
// Aici, în loc să schimbăm un singur element din matricea noastră, creăm unul nou, cu un singur element diferit. Acum putem compara matricele noastre doar prin referință ca updatedUsers == users care este super rapid! React.js folosește această abordare pentru a accelera procesul de reconciliere.

// 14. Unirea (A ∪ B) de matrice
const arrA = [1, 4, 3, 2];
const arrB = [5, 2, 6, 7, 1];

[...new Set([...arrA, ...arrB])]; // returns [1, 4, 3, 2, 5, 6, 7]

// 15. Intersecția (A ∩ B) a matricilor
const arrA = [1, 4, 3, 2];
const arrB = [5, 2, 6, 7, 1];

arrA.filter(it => arrB.includes(it)); // returns [1, 2]