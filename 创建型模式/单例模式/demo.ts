
// 看电影，打游戏，都使用一个手机，手机作为单例

class Phone {
    private static phone: Phone = null;
    public static getInstance(): Phone {
        return Phone.phone;
    }
    private fullName: string;
    private brand: string;
    private model: string;
    constructor(brand: string, model: string) {
        if (Phone.phone !== null) {
            return Phone.phone;
        } 
        this.brand = brand;
        this.model = model;
        this.fullName = `${ brand }${ model }`;
        Phone.phone = this;
    }
    
    public watchMovie(): void{
        console.log(`使用${ this.fullName }看电影.`);
    }
    public playGame(): void {
        console.log(`使用${ this.fullName }打游戏.`);
    }
}

let phone = new Phone('小米', '8');
let phone_1 = Phone.getInstance();
phone.playGame();
phone_1.watchMovie();
console.log(`是否为同一部手机：${ phone === phone_1 }`);

