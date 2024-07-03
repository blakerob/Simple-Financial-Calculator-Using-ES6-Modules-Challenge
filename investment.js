// Function to calculate future value of an investment (compound interest)
export function calculateInvestment(principal, rate, time) {
    const n = 12; // number of compounding periods per year (monthly)
    return principal * Math.pow(1 + rate / n, n * time);
}
