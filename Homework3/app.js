function calculateInterest() {
  const principle = parseFloat(document.getElementById("principle").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

  const total = principle * (1 + rate * time);
  const interest = total - principle;

  document.getElementById(
    "result"
  ).textContent = `With a beginning principle of $${principle.toFixed(
    2
  )} and a growth rate of ${rate.toFixed(2)} for ${time.toFixed(
    2
  )} years, your total interest will be $${interest.toFixed(
    2
  )} with a grand total of $${total.toFixed(2)}.`;
}
