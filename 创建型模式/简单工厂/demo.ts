
interface AnimalConstructor {
    new (className: string, skinColor: string): Animal;
}

interface Animal{
    say(): void;
}

class Dog implements Animal {
    private className: string;
    private skinColor: string;
    constructor(className: string, skinColor: string) {
        this.className = className;
        this.skinColor = skinColor;
    }
    say(): void {
        console.log("汪汪～");
    }
}

class Cat implements Animal {
    private className: string;
    private skinColor: string;
    constructor(className: string, skinColor: string) {
        this.className = className;
        this.skinColor = skinColor;
    }
    say(): void {
        console.log("喵喵～");
    }
}

class AnimalSimpleFactory {
    public static createAnimal(
        animalConstructor: AnimalConstructor,
        className: string,
        skinColor: string
    ): Animal {
        return new animalConstructor(className, skinColor);
    }
}

let dog:Animal = AnimalSimpleFactory.createAnimal(Dog, '汪星人', '黄色的');
let cat:Animal = AnimalSimpleFactory.createAnimal(Cat, '喵星人', '橘色的');

dog.say();
cat.say();
