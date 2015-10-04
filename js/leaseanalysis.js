
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
var validation = [sticker, invoice, residual, term, interest, tax];
		

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
var validation = [sticker, invoice, residual, term, interest, tax];
		
/*for(i = 0; i < validation.length; i ++){
	if(!validation[i].value){
		alert("all fields must be filled out");
		return false;
	}
	else{ calculate();
	}
}*/

if (!sticker){
	alert("all fields must be filled out");
	document.getElementById("sticker").style.borderColor = "red";
	return false;
}
document.getElementById("sticker").style.borderColor = "";
if(!invoice){
	alert("all fields must be filled out");
	document.getElementById("invoice").style.borderColor = "red";			
	return false;
}
document.getElementById("invoice").style.borderColor = "";
if(!residual){
	alert("all fields must be filled out");
	document.getElementById("residual").style.borderColor = "red";
	return false;
}
document.getElementById("residual").style.borderColor = "";
if(!term){
	alert("all fields must be filled out");
	document.getElementById("term").style.borderColor = "red";
	return false;
}
document.getElementById("term").style.borderColor = "";
if(!interest){
	alert("all fields must be filled out");
	document.getElementById("interest").style.borderColor = "red";
	return false;
}
document.getElementById("interest").style.borderColor = "";
if(!tax){
	alert("all fields must be filled out");
	document.getElementById("tax").style.borderColor = "red";
	return false;
}
else{
	document.getElementById("tax").style.borderColor = "";
	calculate();
}
};
	