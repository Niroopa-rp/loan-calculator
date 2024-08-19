document.getElementById('loan-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const amount = parseFloat(document.getElementById('amount').value);
    const annualInterestRate = parseFloat(document.getElementById('interest').value);
    const years = parseFloat(document.getElementById('years').value);
    if (isNaN(amount) || isNaN(annualInterestRate) || isNaN(years) || amount <= 0 || annualInterestRate <= 0 || years <= 0) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = years * 12;
    const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const monthlyPayment = (amount * x * monthlyInterestRate) / (x - 1);
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - amount;
    document.getElementById('monthly-payment').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    document.getElementById('total-payment').textContent = `Total Payment: $${totalPayment.toFixed(2)}`;
    document.getElementById('total-interest').textContent = `Total Interest: $${totalInterest.toFixed(2)}`;
});
