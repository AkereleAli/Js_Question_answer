const sayHelloAsync = (fullname) => {
    
    return new Promise((resolve, reject) => {
        if(fullname.includes("@")){
            reject("fullname not name")
        }
        resolve(`hello ${fullname} welcome`)
        
    })
    
}
sayHelloAsync("coker femi@")
.then((result) => console.log(result))
.catch(error => {
 console.log("Hey!",error)   
})


const sumAll = (...nums) => nums.reduce((acc,cv)=>acc+cv,0);
setTimeout(()=>{
console.log(sumAll(1,2,3,4,5,6,7));
    },5000);


    function greeting(name, role){
        console.log(`Hello, my name is ${name}`);
        console.log(`I'm a ${role}`);
      }
      setTimeout(greeting, 3000, "Nathan", "Software developer");
      
      fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(result=>{
    let res = result.map(item=>`${item.name} - ${item.email}`)
    console.log(res);
    })
    .catch(error=>console.log(error));


    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
.then(response=>response.json())
.then(result=>console.log(result.map(item=>`${item.id} : ${item.isCompleted}`)))
.catch(error=>console.log(error));