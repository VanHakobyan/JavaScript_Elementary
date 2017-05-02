var instance =
    {
        Type: "People",
        Sex: "Male",
        Name: "Alex",
        Age: 18,
        go: function GO() { return Age / 10 },
        eat: function EAT() { document.write("Eating") }

    };
document.write(instance.Name + " " + instance.Type + " " + instance.go);
instance.eat();
document.write(instance.Age);
