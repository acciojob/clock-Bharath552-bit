//your JS code here. If required.
const para=document.getElementById("timer")
setInterval(()=>{
	const date=new Date()
	para.textContent=date
},1000)
