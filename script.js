//function volume_sphere() {
    //Write your code here
  let r=document.getElementById("radius");
  
	let vol=document.getElementById("volume");
		
let sub=document.getElementById("submit");
sub.addEventListener("click",fnc);
function fnc() {
	let r1=parseInt(r.value);
	let v1=0;
	const pi=3.14159265359;
	if (r1>=0) {
			v1=(4*pi*r1**3)/3;
			v1=v1.toFixed(4);
		 vol.value=v1;
		}
		else{
			vol.value="NaN";
		}
}	

//} 

//window.onload =document.getElementById('MyForm').onsubmit = volume_sphere;
