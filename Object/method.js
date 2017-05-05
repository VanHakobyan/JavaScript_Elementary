var human = {
    firstName: "Van",
    lastName: "Hakobyan",
    Age: 21,
    show: function () {
        document.write("<p> firstName: " + this.firstName);
        document.write("<p> lastName: " + this.lastName);
        document.write("<p> Age:" + this.Age);
    },
    changeAge: function (Age) {
        this.Age = Age;
    }

}
human.show();
human.changeAge(30);
human.show();