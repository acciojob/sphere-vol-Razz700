function volume_sphere() {
    //Write your code here
  let r=document.getElementById("radius");
  let r1=parseInt(r.value);
	let volume=document.getElementById("volume");
		let v1=0;
		const pi=3.14159265359;
		if (r1>0) {
			v1=(4*pi*r1**3)/3;
			v1=v1.toFixed(4);
		 volume.value=v1;
		}
		else{
			volume.value="NaN";
		}
} 

window.onload =document.getElementById('MyForm').onsubmit = volume_sphere;
