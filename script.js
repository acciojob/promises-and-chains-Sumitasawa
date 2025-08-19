//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit",function (event) {
	event.preventDefault();

	const age=document.getElementById("age").value.trim();
	const name=document.getElementById("name").value.trim();


	if(age===""||name===""){
		alert("Please enter valid details");
		return;
	}

	const ageCheck=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve(`Welcome, ${name}. You can vote.`)
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		},4000)
	})

	ageCheck.then((msg)=>{
		alert(msg);
	}).catch((err)=>{
		alert(err);
	})
})