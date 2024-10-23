const jsonPracownicy = {
    "pracownicy": [
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach((pracownik, index) => {
    console.log("Index: " + index + ", Imię: " + pracownik.firstName + ", Nazwisko: " + pracownik.lastName);
});
