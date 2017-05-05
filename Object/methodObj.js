var person = new Object();
person.Name = "Van";
person.SayName = function () {
    document.write("<p>My neme is " + this.Name);
}
person.Say = function () {
    document.write("<p><b>Hello Worlds</b>");
};
person.Eating = function () {
    document.write("<p>I am eating apple");
};
person.SayName();
person.Say();
person.Eating();

