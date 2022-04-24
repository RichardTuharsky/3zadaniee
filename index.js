function myfun(){
	const username=document.getElementById('username');
	const email=document.getElementById('email');
	const password1=document.getElementById('password1');
	const password2=document.getElementById('password2');
	const message=document.getElementsByClassName('message');
	const icon=document.querySelector('i');
	const sucess=document.getElementsByClassName('sucess');
	const error=document.getElementsByClassName('error');

	//potvrdenie//
	let u=0;
	let e=0;
	let p1=0;
	let p2=0;



	//validacia pre meno//
	if(username.value==""){
		username.style.borderColor = 'red';
		message[0].style.visibility = 'visible';
		message[0].style.color='red';
		message[0].innerText="Meno nesmie byt prázdne";
		error[0].style.visibility = 'visible';
		error[0].style.color='red';
		u=0;
	}
	else if(username.value.length<3&&username.value.length>0){
		username.style.borderColor = 'red';
		message[0].style.visibility = 'visible';
		message[0].style.color='red';
		message[0].innerText="Meno musí mať aspon 3 písmená";
		error[0].style.visibility = 'visible';
		error[0].style.color='red';
		u=0;
	}
	else if(username.value.length>3&&(isNaN(parseFloat(username.value)))){
		username.style.borderColor = 'green';
		error[0].style.visibility = 'hidden';
		message[0].style.visibility = 'hidden';
		sucess[0].style.visibility = 'visible';
		sucess[0].style.color='green';
		u=1;

		/*valiacia pre priezvisko*/
	}
	if(priezvisko.value==""){
		priezvisko.style.borderColor = 'red';
		message[1].style.visibility = 'visible';
		message[1].style.color='red';
		message[1].innerText="Priezvisko nesmie byt prázdne";
		error[1].style.visibility = 'visible';
		error[1].style.color='red';
		u=0;
	}
	else if(priezvisko.value.length<3&&username.value.length>0){
		priezvisko.style.borderColor = 'red';
		message[1].style.visibility = 'visible';
		message[1].style.color='red';
		message[1].innerText="Priezvisko musí mať aspon 3 písmená";
		error[1].style.visibility = 'visible';
		error[1].style.color='red';
		u=0;
	}
	else if(priezvisko.value.length>3&&(isNaN(parseFloat(username.value)))){
		priezvisko.style.borderColor = 'green';
		error[1].style.visibility = 'hidden';
		message[1].style.visibility = 'hidden';
		sucess[1].style.visibility = 'visible';
		sucess[1].style.color='green';
		u=1;


	}

	//validacia pre email//

	if(email.value==""){
		email.style.borderColor = 'red';
		message[2].style.visibility = 'visible';
		message[2].style.color='red';
		message[2].innerText="Email nesmie byt prázdny";
		error[2].style.visibility = 'visible';
		error[2].style.color='red';
		e=0;
	}
	else if(email.value.indexOf('@')<3||email.value.lastIndexOf('.')>=email.value.length-2){
		email.style.borderColor = 'red';
		message[2].style.visibility = 'visible';
		message[2].style.color='red';
		message[2].innerText="Nesprávny email";
		error[2].style.visibility = 'visible';
		error[2].style.color='red';
		e=0;
	}
	else{
		email.style.borderColor = 'green';
		error[2].style.visibility = 'hidden';
		message[2].style.visibility = 'hidden';
		sucess[2].style.visibility = 'visible';
		sucess[2].style.color='green';
		e=1;
	}
	//validacia pre heslo 1//

	var numbers=/[0-9]/g;
	if (password1.value==""){
		password1.style.borderColor = 'red';
		message[3].style.visibility = 'visible';
		message[3].style.color='red';
		message[3].innerText="Heslo nesmie byt prázdne";
		error[3].style.visibility = 'visible';
		error[3].style.color='red';
		p1=0;
	}
	else if(password1.value.length<9){
		password1.style.borderColor = 'red';
		message[3].style.visibility = 'visible';
		message[3].style.color='red';
		message[3].innerText="Heslo musí mať aspoň 8 znakov";
		error[3].style.visibility = 'visible';
		error[3].style.color='red';
		p1=0;
	}

	else{
		password1.style.borderColor = 'green';
		error[2].style.visibility = 'hidden';
		message[2].style.visibility = 'hidden';
		sucess[2].style.visibility = 'visible';
		sucess[2].style.color='green';
		p1=1;
	}

	//validacia pre heslo 2//
	if(password2.value==""){
		password2.style.borderColor = 'red';
		message[3].style.visibility = 'visible';
		message[3].style.color='red';
		message[3].innerText="Heslo nesmie byt prázdne";
		error[3].style.visibility = 'visible';
		error[3].style.color='red';
		p2=0;
	}
	else if(password1.value!=password2.value){
		password2.style.borderColor = 'red';
		message[3].style.visibility = 'visible';
		message[3].style.color='red';
		message[3].innerText="Heslá sa musia zhodovať";
		error[3].style.visibility = 'visible';
		error[3].style.color='red';
		p2=0;
	}
	else{
		password2.style.borderColor = 'green';
		error[3].style.visibility = 'hidden';
		message[3].style.visibility = 'hidden';
		sucess[3].style.visibility = 'visible';
		sucess[3].style.color='green';
		p2=1;
	}

	

	if(u==1&&e==1&&p1==1&&p2==1){
		return true;
	}
	else
		return false;

}
