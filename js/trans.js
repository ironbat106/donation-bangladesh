//Get Current balance
const currBalEle = document.getElementById("cur-bal");
let currBal = parseInt (currBalEle.textContent);

// Modal elements
const modal = document.getElementById('donation-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const donationAmountMessage = document.getElementById('donation-amount-message');

// Function to show modal with donation details
function showModal(amount, place) {
    donationAmountMessage.innerHTML = `
        <p>You have donated successfully!</p>
    `;
    modal.classList.remove('hidden');
}

// Close modal on button click
closeModalBtn.onclick = function() {
    modal.classList.add('hidden');
}

//update donation
function upDon(inputId, balId, source, place)
{
    const inputField =document.getElementById(inputId);
    const amount = parseInt (inputField.value) || 0;

    if(amount>0 && amount <= currBal)
    {
        currBal -= amount;
        currBalEle.textContent = currBal.toFixed(0);

        const balELe = document.getElementById(balId);
        const currBalVal = parseInt(balELe.textContent);
        balELe.textContent = (currBalVal + amount).toFixed(0);

        logDonation(amount, source, place);

        inputField.value ='';

        showModal(amount,place);
    }
    else
    {
        alert("Please enter a valid donation amount!");
    }
}

//Log donation
function logDonation(amount, source, place)
{
    const transCon = document.getElementById("trans-con");
    const date = new Date().toLocaleString("en-BD", { timezone: "Asia/Dhaka"});

    const donMess = document.createElement("div");
    donMess.classList.add('bg-base-100','shadow-lg', 'p-4', 'rounded', 'mb-4', 'font-bold');
    // donMess.textContent = `${amount} Taka is donated for famine-2024 at ${source} on ${date}`;
    donMess.innerHTML = `
        <h2>${amount} Taka is donated for ${place} at ${source}</h2>
        <p class="text-gray-400">Date: ${date}</p>`;

    transCon.appendChild(donMess);
}

//Button event listeners
document.getElementById("noa-don-btn").onclick = function(){
    upDon("noa-input-don", "noa-bal", "Noakhali", "famine-2024");
};
document.getElementById("feni-don-btn").onclick = function(){
    upDon("feni-input-don", "feni-bal", "Feni", "Flood Relief");
};
document.getElementById("quota-don-btn").onclick = function(){
    upDon("quota-input-don", "quota-bal", "Quota", "Aid for injured in Quota Movement");
};