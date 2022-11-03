export class Factorial{
    
    static findfactofnum( num:number){
        let fact=1;
        if(num<0){
            console.log("Factorial for negative number does not exists");

        }
        else if(num == 1){
        console.log(`the factorial of ${num} is 1`);
        }
        else{
            
            for(let i=1;i<=num;i++){
                fact =fact*i;
            }
            console.log(`the factorial of ${num} is ${fact}`);
        }
        return fact;
    }
}