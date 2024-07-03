// Function to calculate monthly loan payment (fixed-rate)
export function calculateLoanPayment(principal, rate, time) {
    const r = rate / 1200; // monthly interest rate
    const n = time * 12;   // number of months
    return principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
}
