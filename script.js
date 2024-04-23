function volume_sphere() {
    //Write your code here
  let r1=parseInt(document.getElementById("radius").value);
	let vol=document.getElementById("volume");
		let v1=0;
		const pi=3.14159265359;
		if (r1>0) {
			v1=(4*pi*r**3)/3;
			v1=v1.toFixed(4);
		 vol.value=v1;
		}
		else{
			vol.value="NaN";
		}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
