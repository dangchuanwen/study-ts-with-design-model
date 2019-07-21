// 抽象工厂模式
// 苹果公司生产苹果手机和苹果充电器，小米公司生产小米手机和小米充电器
// 所以，苹果公司有一个生产手机的工厂和一个生产充电器的工厂
// 所以，小米公司有一个生产手机的工厂和一个生产充电器的工厂

/* 手机类 */
class Phone {
    private brand: string;
    private model: string;
    constructor( brand: string, model: string ) {
        this.brand = brand;
        this.model = model;
    }
    public getFullName(): string {
        return this.brand + this.model;
    }
}
/* 充电器类 */
class Charger {
    private brand: string;
    private power: number;
    constructor( brand: string, power: number ) {
        this.brand = brand;
        this.power = power;
    }
    public getPower(): number {
        return this.power;
    }
    
}

/* 生产手机的方法接口 */
interface createMobilePhone {
    (model: string): Phone;
}
/* 生产充电器的方法接口 */
interface createCharger {
    (power: number): Charger;
}

/* 生产手机的工厂，有生产手机的方法 */
interface mobilePhoneCompany {
    createMobilePhone: createMobilePhone;
}
/* 生产充电器的工厂，有生产充电器的方法 */
interface chargerCompany {
    createCharger: createCharger;
}

/* 科技公司，生产手机和充电器 */
interface technologyCompany {
    createMobilePhone: createMobilePhone;
    createCharger: createCharger;
}

/* 生产苹果手机的工厂 */
class AppleMobilePhoneCompany implements mobilePhoneCompany {
    createMobilePhone(model: string): Phone {
        return new Phone("apple", model);
    }
}
/* 生产苹果充电器的工厂 */
class AppleCharger implements chargerCompany {
    createCharger(power: number): Charger {
        return new Charger("apple", power);
    }
}

/* 生产小米手机的工厂 */
class MiMobilePhoneCompany implements mobilePhoneCompany {
    createMobilePhone(model: string): Phone {
        return new Phone("mi", model);
    }
}
/* 生产小米充电器的工厂 */
class MiCharger implements chargerCompany {
    createCharger(power: number): Charger {
        return new Charger("mi", power);
    }
}

/* 苹果公司，有生产手机的工厂和生产充电器的工厂（ has-a ） */
class Apple implements technologyCompany {
    private mobilePhoneCompany: mobilePhoneCompany = new AppleMobilePhoneCompany();
    private chargerCompany: chargerCompany = new AppleCharger();
    public createMobilePhone(model: string): Phone {
        return this.mobilePhoneCompany.createMobilePhone(model);
    }
    public createCharger(power: number): Charger {
        return this.chargerCompany.createCharger(power);
    }
}
/* 小米公司，有生产手机的工厂和生产从电器的工厂（ has-a )*/
class Mi implements technologyCompany {
    private mobilePhoneCompany: mobilePhoneCompany = new MiMobilePhoneCompany;
    private chargerCompany: chargerCompany = new MiCharger();
    public createMobilePhone(model: string): Phone {
        return this.mobilePhoneCompany.createMobilePhone(model);
    }
    public createCharger(power: number): Charger {
        return this.chargerCompany.createCharger(power);
    }
}
