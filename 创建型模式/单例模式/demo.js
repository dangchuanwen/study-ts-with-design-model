// 看电影，打游戏，都使用一个手机，手机作为单例
var Phone = /** @class */ (function () {
    function Phone(brand, model) {
        this.brand = brand;
        this.model = model;
        this.fullName = "" + brand + model;
    }
    Phone.getInstance = function () {
        if (Phone.phone == null) {
            Phone.phone = new Phone('小米', '8');
        }
        return Phone.phone;
    };
    Phone.prototype.watchMovie = function () {
        console.log("\u4F7F\u7528" + this.fullName + "\u770B\u7535\u5F71.");
    };
    Phone.prototype.playGame = function () {
        console.log("\u4F7F\u7528" + this.fullName + "\u6253\u6E38\u620F.");
    };
    Phone.phone = null;
    return Phone;
}());
var phone = Phone.getInstance();
phone.playGame();
