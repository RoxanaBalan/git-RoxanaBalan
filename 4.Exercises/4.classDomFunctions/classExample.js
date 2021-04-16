class User {
    constructor(id, name) {
        this.id = id; // setez proprietati (variabile) pe clasa
        this.name = name;
    }

    saveUser() { // definesc o metoda (functie) a clasei 
        console.log(this.id);
        console.log(this.name);
    }
}

const user1 = new User(1, "Alex"); // se creaza o instanta a clasei folosind operatorul "new" (instantiez clasa)
const user2 = new User(2, "Tom");