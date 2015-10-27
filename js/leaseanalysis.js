
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
//var validation = [sticker, invoice, residual, term, interest, tax];
		

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
var sticker = parseFloat(document.getElementById("sticker").value, 10);
var invoice = parseFloat(document.getElementById("invoice").value, 10);
var residual = parseFloat(document.getElementById("residual").value, 10);
var term = parseFloat(document.getElementById("term").value, 10);		
var interest = parseFloat(document.getElementById("interest").value, 10);
var tax = parseFloat(document.getElementById("tax").value, 10);
var validation = [];
		

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

		calculate();
	} else {
		for(i = 0; i < validation.length; i++){
			validation[i].className = "alert alert-danger pull-right";
		}
		alert("all fields must be filled out and be numbers (no commas)");
	}
};
	