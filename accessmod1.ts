class Products{

constructor(
   public proname:string,
   public  proddetails:string,
   private  proamount:number
){}

format(){
    console.log(`${this.proname} and ${this.proddetails} and ${this.proamount}`);
}
}

const p1 =new Products("SAM","Mobile",5000);
p1.format();
p1.proddetails='adad';
p1.format();