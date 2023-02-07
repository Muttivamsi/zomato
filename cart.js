var count=0;
function add(ele){
	var amount=ele.value;
    var total=document.getElementById('total-amount').value;
	total=parseInt(total)+parseInt(amount);
    document.getElementById("total-amount").value = total;
    count=count+1;
    document.getElementById("items").innerHTML="The total items in cart is:"+count;
}

function sum(a){
	var price=a.value;
	var total=document.getElementById('total-amount').value;
	total=parseInt(total)+parseInt(price);
    document.getElementById("total-amount").value = total;

}


function   increment(){
count=count+1;
document.getElementById("items").innerHTML="The total items in cart is:"+count;
}

function minus(b){
	var min=b.value;
	var total=document.getElementById('total-amount').value;
	total=parseInt(total)-parseInt(min);
	if(total<0){
		total=0;
		
	}
	document.getElementById("total-amount").value = total;
}
function   decrement(){
count=count-1;
if(count<0){
	count=0;
}
document.getElementById("items").innerHTML="The total items in cart is:"+count;
}

function order(){
	document.getElementById('display').innerHTML="Your Order is successfully Placed."
}
