// U92725213

import { calculateInterest } from './interest.js';
import { calculateLoanPayment } from './loan.js';
import { calculateInvestment } from './investment.js';

// DOM elements
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const resultOutput = document.getElementById('result');

// Event listeners for calculate buttons
document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    
    const interest = calculateInterest(principal, rate, time);
    resultOutput.textContent = `Interest: ${interest.toFixed(2)}`;
});

document.getElementById('calculate-loan').addEventListener('click', () => {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    
    const payment = calculateLoanPayment(principal, rate, time);
    resultOutput.textContent = `Monthly Payment: ${payment.toFixed(2)}`;
});

document.getElementById('calculate-investment').addEventListener('click', () => {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    
    const investmentValue = calculateInvestment(principal, rate, time);
    resultOutput.textContent = `Future Value: ${investmentValue.toFixed(2)}`;
});
