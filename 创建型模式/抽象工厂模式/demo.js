// 抽象工厂模式
// 苹果公司生产苹果手机和苹果充电器，小米公司生产小米手机和小米充电器
// 所以，苹果公司有一个生产手机的工厂和一个生产充电器的工厂
// 所以，小米公司有一个生产手机的工厂和一个生产充电器的工厂
/* 手机类 */
var Phone = /** @class */ (function () {
    function Phone(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Phone.prototype.getFullName = function () {
        return this.brand + this.model;
    };
    return Phone;
}());
/* 充电器类 */
var Charger = /** @class */ (function () {
    function Charger(brand, power) {
        this.brand = brand;
        this.power = power;
    }
    Charger.prototype.getPower = function () {
        return this.power;
    };
    return Charger;
}());
/* 生产苹果手机的工厂 */
var AppleMobilePhoneCompany = /** @class */ (function () {
    function AppleMobilePhoneCompany() {
    }
    AppleMobilePhoneCompany.prototype.createMobilePhone = function (model) {
        return new Phone("apple", model);
    };
    return AppleMobilePhoneCompany;
}());
/* 生产苹果充电器的工厂 */
var AppleCharger = /** @class */ (function () {
    function AppleCharger() {
    }
    AppleCharger.prototype.createCharger = function (power) {
        return new Charger("apple", power);
    };
    return AppleCharger;
}());
/* 生产小米手机的工厂 */
var MiMobilePhoneCompany = /** @class */ (function () {
    function MiMobilePhoneCompany() {
    }
    MiMobilePhoneCompany.prototype.createMobilePhone = function (model) {
        return new Phone("mi", model);
    };
    return MiMobilePhoneCompany;
}());
/* 生产小米充电器的工厂 */
var MiCharger = /** @class */ (function () {
    function MiCharger() {
    }
    MiCharger.prototype.createCharger = function (power) {
        return new Charger("mi", power);
    };
    return MiCharger;
}());
/* 苹果公司，有生产手机的工厂和生产充电器的工厂（ has-a ） */
var Apple = /** @class */ (function () {
    function Apple() {
        this.mobilePhoneCompany = new AppleMobilePhoneCompany();
        this.chargerCompany = new AppleCharger();
    }
    Apple.prototype.createMobilePhone = function (model) {
        return this.mobilePhoneCompany.createMobilePhone(model);
    };
    Apple.prototype.createCharger = function (power) {
        return this.chargerCompany.createCharger(power);
    };
    return Apple;
}());
var Mi = /** @class */ (function () {
    function Mi() {
        this.mobilePhoneCompany = new MiMobilePhoneCompany;
        this.chargerCompany = new MiCharger();
    }
    Mi.prototype.createMobilePhone = function (model) {
        return this.mobilePhoneCompany.createMobilePhone(model);
    };
    Mi.prototype.createCharger = function (power) {
        return this.chargerCompany.createCharger(power);
    };
    return Mi;
}());
