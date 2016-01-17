
function calculate(){

	var sticker = parseFloat(document.getElementById("sticker").value, 10);
	var invoice = parseFloat(document.getElementById("invoice").value, 10);
	var residual = parseFloat(document.getElementById("residual").value, 10);
	var residualValue = sticker * residual;
	var dprAmount = invoice - residualValue;
	var term = parseFloat(document.getElementById("term").value, 10);
	var dprPayment = dprAmount / term;
	var interest = parseFloat(document.getElementById("interest").value, 10);
	var intPayment = (invoice - residualValue) * interest;
	var paymentBeforeTax = dprPayment + intPayment;
	var tax = parseFloat(document.getElementById("tax").value, 10);
	var lpdoAmount = (paymentBeforeTax * tax) + paymentBeforeTax;		

	console.log(residualValue);
	document.getElementById("residualvalue").textContent = 
	"$" + parseFloat(Math.round(residualValue * 100) / 100).toFixed(2);

	console.log(dprAmount);
	document.getElementById("dpramount").textContent = 
	"$" + parseFloat(Math.round(dprAmount * 100) / 100).toFixed(2);

	console.log(dprPayment);
	document.getElementById("dprpayment").textContent = 
	"$" + parseFloat(Math.round(dprPayment * 100) / 100).toFixed(2);

	console.log(intPayment);
	document.getElementById("intpayment").textContent = 
	"$" + parseFloat(Math.round(intPayment * 100) / 100).toFixed(2);

	console.log(paymentBeforeTax);
	document.getElementById("paymentbeforetax").textContent = 
	"$" + parseFloat(Math.round(paymentBeforeTax * 100) / 100).toFixed(2);

	console.log(lpdoAmount);
	document.getElementById("lowestdriveoffamount").textContent = 
	"$" + parseFloat(Math.round(lpdoAmount * 100) / 100).toFixed(2);

};

function validate(){

	//variables for input validation
	var sticker = parseFloat(document.getElementById("sticker").value, 10);
	var invoice = parseFloat(document.getElementById("invoice").value, 10);
	var residual = parseFloat(document.getElementById("residual").value, 10);
	var term = parseFloat(document.getElementById("term").value, 10);		
	var interest = parseFloat(document.getElementById("interest").value, 10);
	var tax = parseFloat(document.getElementById("tax").value, 10);
	var validation = [];

	//variables for error dev
	var body = document.querySelector("body");
	var errorDiv = document.getElementsByClassName("error")[0];
			

	if (!sticker){
		validation.push(document.getElementById('sticker'));
	} else{
		document.getElementById("sticker").className = "alert alert-success pull-right";
	}

	if(!invoice){
		validation.push(document.getElementById('invoice'));
	} else {
		document.getElementById("invoice").className = "alert alert-success pull-right";
	}

	if(!residual){
		validation.push(document.getElementById('residual'));
	} else {
		document.getElementById("residual").className = "alert alert-success pull-right";
	}

	if(!term){
		validation.push(document.getElementById('term'));
	} else {
		document.getElementById("term").className = "alert alert-success pull-right";
	}

	if(!interest){
		validation.push(document.getElementById('interest'));
	} else {
		document.getElementById("interest").className = "alert alert-success pull-right";
	}

	if(!tax){
		validation.push(document.getElementById('tax'));	
	} else {
		document.getElementById("tax").className = "alert alert-success pull-right";
	}

	if (validation.length == 0){
		if(document.getElementsByClassName("error").length == 1){
			body.removeChild(errorDiv);
		}
		calculate();
	} else {
		for(i = 0; i < validation.length; i++){
			validation[i].className = "alert alert-danger pull-right";
		}
		if(document.getElementsByClassName("error").length == 0){
			errorElement();	
		}
	}

	function errorElement(){

		var section = document.querySelector("section");
		var errorElement = document.createElement("div")
		var errorText = document.createTextNode("all fields must be filled out and be numbers (no commas)");

		errorElement.appendChild(errorText);
		errorElement.className = "container error";
		body.insertBefore(errorElement, section);

	}
	
};
	