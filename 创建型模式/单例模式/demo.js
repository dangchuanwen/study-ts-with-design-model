// 看电影，打游戏，都使用一个手机，手机作为单例
var Phone = /** @class */ (function () {
    function Phone(brand, model) {
        if (Phone.phone !== null) {
            return Phone.phone;
        }
        this.brand = brand;
        this.model = model;
        this.fullName = "" + brand + model;
        Phone.phone = this;
    }
    Phone.getInstance = function () {
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
var phone = new Phone('小米', '8');
var phone_1 = Phone.getInstance();
phone.playGame();
phone_1.watchMovie();
console.log("\u662F\u5426\u4E3A\u540C\u4E00\u90E8\u624B\u673A\uFF1A" + (phone === phone_1));
