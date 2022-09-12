import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function () {
	// console.log("Hello");

	const currentAmout = await dbank.checkBalance();
	this.document.getElementById("value").innerText = currentAmout.toFixed(2);
});

document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault;

    console.log("Submitted");
    
    const inputAmout = parseFloat(document.getElementById("input-amout").value);
    const withdrawAmout = parseFloat(document.getElementById("withdraw-amount").value); 

    await dbank.topUp(inputAmout);
	const currentAmout = await dbank.checkBalance();
	this.document.getElementById("value").innerText = currentAmout.toFixed(2);

    // await dbank.withdraw(withdrawAmout);

});


