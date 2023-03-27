
    const adduid = <T>(obj:T)=>{
         let uid= Math.floor(Math.random()*100);
         return {...obj,uid};
    }

 let docone= adduid({name1:"ddada",age:121});

 console.log(docone.name1);
 

 interface Resource<T>{

    nam221:string;
    desig:string;
    data:T;
 }

 const docThreee:Resource<object> = {
    nam221: "ddada",
    desig:"QA",
    data:{name:'Shaun'}
 }

 const docFour:Resource<string[]> = {
    nam221: "ddada",
    desig:"QA",
    data:['Milk','Bread']
 }

 console.log(docFour,docThreee);
 
