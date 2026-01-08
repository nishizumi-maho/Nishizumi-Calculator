const form = document.querySelector("#fair-share-form");
const totalLapsInput = document.querySelector("#total-laps");
const driversInput = document.querySelector("#drivers");
const equalShareOutput = document.querySelector("#equal-share");
const fairShareOutput = document.querySelector("#fair-share");
const messageOutput = document.querySelector("#form-message");
const resultCards = document.querySelectorAll(".result-card");

const resetResults = () => {
  equalShareOutput.textContent = "—";
  fairShareOutput.textContent = "—";
  resultCards.forEach((card) => card.classList.remove("active"));
};

const showMessage = (message) => {
  messageOutput.textContent = message;
};

const calculateFairShare = (totalLaps, drivers) => {
  const equalShare = Math.ceil(totalLaps / drivers);
  const fairShare = Math.ceil(equalShare * 0.25);
  return { equalShare, fairShare };
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const totalLaps = Number(totalLapsInput.value);
  const drivers = Number(driversInput.value);

  if (!Number.isFinite(totalLaps) || !Number.isFinite(drivers) || totalLaps <= 0 || drivers <= 0) {
    resetResults();
    showMessage("Enter positive numbers for total laps and drivers.");
    return;
  }

  const { equalShare, fairShare } = calculateFairShare(totalLaps, drivers);

  equalShareOutput.textContent = `${equalShare} laps`;
  fairShareOutput.textContent = `${fairShare} laps`;
  showMessage("Calculated fair share requirement.");
  resultCards.forEach((card) => card.classList.add("active"));
});

[totalLapsInput, driversInput].forEach((input) => {
  input.addEventListener("input", () => {
    showMessage("");
    resetResults();
  });
});
