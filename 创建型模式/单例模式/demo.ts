
// 看电影，打游戏，都使用一个手机，手机作为单例

class Phone {
    private static phone: Phone = null;
    public static getInstance(): Phone {
        if (Phone.phone == null) {
            Phone.phone = new Phone('小米', '8');
        }
        return Phone.phone;
    }
    private fullName: string;
    private brand: string;
    private model: string;
    private constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.fullName = `${ brand }${ model }`;
    }
    
    public watchMovie(): void{
        console.log(`使用${ this.fullName }看电影.`);
    }
    public playGame(): void {
        console.log(`使用${ this.fullName }打游戏.`);
    }
}

let phone:Phone = Phone.getInstance();
phone.playGame();



