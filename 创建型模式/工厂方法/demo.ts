
interface AnimalFactory {
    create(name: string, age: number): Animal;
}

interface Animal {
    say(): void;
}

class Dog implements Animal {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    say(): void {
        console.log("汪汪～");
    }
}

class Cat implements Animal {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    say(): void {
        console.log("喵喵～");
    }
}

class DogFactory implements AnimalFactory {
    public create(name: string, age: number) {
        return new Dog(name, age);
    }
}

class CatFactory implements AnimalFactory {
    public create(name: string, age: number) {
        return new Cat(name, age);
    }
}

let dogFactory:AnimalFactory = new DogFactory();
let catFactory:AnimalFactory = new CatFactory();

let dog:Animal = dogFactory.create('大黄', 2);
let cat:Animal = catFactory.create('胖橘', 3);

dog.say();
cat.say();