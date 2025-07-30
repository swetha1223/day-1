let employees=[];

function addEmp(id,name,salary = true){
    employees.push({id,name,salary});
    console.log("employee added",employees);
}
addEmp(1, "swetha",20000)
addEmp(2,"steffy",20000)
addEmp(3,"hashifa",20000)
//update
function updateEmp(id,newDetail){
    const emp=employees.find(e => e.id === id)
    if(emp){
        Object.assign(emp,newDetail);
        console.log("updated",employees)
    }else{
        console.log("employee not found")
    }
}
    updateEmp(3, {name:"joe"});
//delete
function removeEmp(id){
    const index = employees.findIndex((e) => e.id === id);
    if(index !== -1){
        employees.splice(index , id)
        console.log("employees removed",employees);
    }else{
        console.log("employees not found");
    }
}
removeEmp(3)
//salary calculate
function totalSalary(){
    const total=employees.reduce((sum,emp) =>sum+emp.salary , 0);
    console.log("total salary is",total);
}
totalSalary()
