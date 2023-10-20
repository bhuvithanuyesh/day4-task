//  for  in loop
 let student ={
    name: "Yeshwanth",
    age:7,
    std: "first std",
    school:"sbk hr sec school",

 };
 for (let x in student) {
    console.log(x + ": "+ student[x])
 } 

 // for loop
 let student= [{name: "Yeshwanth",
 age:7,
 std: "first std",
 school:"sbk hr sec school",
},{name:"Thanushya",
age:12,
std:"sixth std",
school:"sbk hr sec school"}];
for(let i =0;i<student.length;i++)
{
   
   let obj = student[i];
    console.log(obj.std);
    console.log(obj.name);
}

//for of loop
	let obj = {name:"Thanushya",
	Tamil:90,
	English:92,
	MAths:99,
	Science:98,
	Social:96,
	Total:475
	};
	
	for(let key of Object.keys(obj))
	{
    console.log(key,obj[key]);
}
//for each