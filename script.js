function volume_sphere() {
    //Write your code here
  let r1=parseInt(getElementById("raius").value);
	let vol=getElementById("volume");
	let sub=getElementById("submit");
	sub.addEventListener("click",myf);
	function myf(r1) {
		let v1=0;
		const pi=3.14;
		if (r1>0) {
			v1=(4*pi*r**3)/3;
			v1=v1.toFixed(4);
			vol.textContent=v1;
		}
		else{
			vol.textContent="NaN";
		}
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
