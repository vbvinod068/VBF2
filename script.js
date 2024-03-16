function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((emp)=> {if(emp.profession==="developer") console.log(emp)});
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((emp)=>{if(emp.profession==="developer") console.log(emp);});
  }
  
  function addData() {
    //Write your code here, just console.log
    let emp={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(emp);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let newArr=arr.filter((emp)=>{return emp.profession!="admin"});
    console.log(newArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
      { id: 5, name: "johny", age: "19", profession: "Assistant developer" },
      { id: 6, name: "jacky", age: "21", profession: "Assistant developer" },
      { id: 7, name: "kareni", age: "20", profession: "HR admin" },
    ];
    let copy=arr.concat(newArr);
    console.log(copy);
  }
  