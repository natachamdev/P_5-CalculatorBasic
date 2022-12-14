function init (){
  
  	//variables

  	var operandoa;
  	var operandob; 
  	var operacion;


  	var resultado = document.getElementById('RESULTADO');
	var reset = document.getElementById('reset');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var division = document.getElementById('division');
	var multiplicacion = document.getElementById('multiplicacion');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');
	
	//eventos

	uno.onclick = function(event){
		resultado.textContent = resultado.textContent + "1";}
	dos.onclick = function(event){
		resultado.textContent = resultado.textContent + "2";}
	tres.onclick = function(event){
		resultado.textContent = resultado.textContent + "3";}
	cuatro.onclick = function(event){
		resultado.textContent = resultado.textContent + "4";}
	cinco.onclick = function(event){
		resultado.textContent = resultado.textContent + "5";}
	seis.onclick = function(event){
		resultado.textContent = resultado.textContent + "6";}
	siete.onclick = function(event){
		resultado.textContent = resultado.textContent + "7";}
	ocho.onclick = function(event){
		resultado.textContent = resultado.textContent + "8";}
	nueve.onclick = function(event){
		resultado.textContent = resultado.textContent + "9";}
	cero.onclick = function(event){
		resultado.textContent = resultado.textContent + "0";}
	reset.onclick = function(event){
		resetear();}
	suma.onclick = function(event){
		operandoa = resultado.textContent;
		operacion = "+";
		limpiar();}
	resta.onclick = function(event){
		operandoa = resultado.textContent;
		operacion = "-";
		limpiar();}
	division.onclick = function(event){
		operandoa = resultado.textContent;
		operacion = "/";
		limpiar();}
	multiplicacion.onclick = function(event){
		operandoa = resultado.textContent;
		operacion = "*";
		limpiar();}
	igual.onclick = function(event){
		operandob = resultado.textContent;
		resolver();}

		function limpiar(){
			resultado.textContent = "";
		}

		function resetear(){
			resultado.textContent = "";
			operandoa = 0;
			operandob = 0;
			operacion = "";
		}

		function resolver (){
			var res = 0;
			switch(operacion){
				case "+": 
					res = parseFloat(operandoa) + parseFloat(operandob); 
						break;

				case "-": 
					res = parseFloat(operandoa) - parseFloat(operandob); 
						break;

				case "*": 
					res = parseFloat(operandoa) * parseFloat(operandob); 
						break;

				case "/": 
					res = parseFloat(operandoa) / parseFloat(operandob); 
						break;	
			}
			resetear();
			resultado.textContent = res; 
		}	
	

}