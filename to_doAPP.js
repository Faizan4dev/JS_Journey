let toDO=[];

let input=prompt("Enter your request:");

while(true){
    input=prompt("Enter your request:");
    if(input=="exit"){
        console.log("Exiting...");
        break;
    }
    else if(input=="list"){
        console.log("-----------------");
        for(let i=0;i<toDO.length;i++){
            console.log(i+":"+toDO[i]);
        }
        console.log("-----------------");
    }
    else if(input=="add"){
        let task = prompt("Enter task:");
        toDO.push(task);
        console.log("Task added..");
    }
    else if(input=="del"){
        let idx=prompt("Enter index to delete task :");
        toDO.splice(idx,1);
        console.log("Task Deleted...");
    }
    else{
        console.log("Wrong input..!");
    }
}