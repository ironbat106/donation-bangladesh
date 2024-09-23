//Get Current balance
const currBalEle = document.getElementById("cur-bal");
let currBal = parseInt (currBalEle.textContent);

//Update Donation
function upDon(inputId, balId)
{
    const inputField = document.getElementById(inputId);
    const amount = parseInt (inputField.value) || 0;

    if (amount>0 && amount<= currBal)
    {
        currBal -= amount;
        currBalEle.textContent =currBal.toFixed(0);

        const balELe = document.getElementById(balId);
        const currBalVal = parseInt(balELe.textContent);
        balELe.textContent = (currBalEle + amount).toFixed(0);

        inputField.value ='';
    }
    else
    {
        alert("Please enter a valid donation amount!");
    }
}

//Button Event Listeners
document.addEventListener("DOMContentLoaded", function()
{
document.getElementById("noa-don-btn").onclick = function(){
    upDon("noa-input-don", "noa-bal");
};
document.getElementById("feni-don-btn").onclick = function(){
    upDon("feni-input-don", "feni-bal");
};
document.getElementById("quota-don-btn").onclick = function(){
    upDon("quota-input-don", "quota-bal");
};
});
