const form = document.querySelector("#fair-share-form");
const totalLapsInput = document.querySelector("#total-laps");
const driversInput = document.querySelector("#drivers");
const avgLapMinutesInput = document.querySelector("#avg-lap-minutes");
const avgLapSecondsInput = document.querySelector("#avg-lap-seconds");
const equalShareOutput = document.querySelector("#equal-share");
const fairShareOutput = document.querySelector("#fair-share");
const raceTimeOutput = document.querySelector("#race-time");
const equalShareTimeOutput = document.querySelector("#equal-share-time");
const fairShareTimeOutput = document.querySelector("#fair-share-time");
const messageOutput = document.querySelector("#form-message");
const resultCards = document.querySelectorAll(".result-card");

const resetResults = () => {
  equalShareOutput.textContent = "—";
  fairShareOutput.textContent = "—";
  raceTimeOutput.textContent = "—";
  equalShareTimeOutput.textContent = "—";
  fairShareTimeOutput.textContent = "—";
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

const toTotalSeconds = (minutes, seconds) => minutes * 60 + seconds;

const formatDuration = (totalSeconds) => {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) {
    return "—";
  }

  const totalMinutes = Math.round(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const parts = [];

  if (hours > 0) {
    parts.push(`${hours}h`);
  }

  parts.push(`${minutes}m`);

  return parts.join(" ");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const totalLaps = Number(totalLapsInput.value);
  const drivers = Number(driversInput.value);
  const avgLapMinutes = Number(avgLapMinutesInput.value || 0);
  const avgLapSeconds = Number(avgLapSecondsInput.value || 0);
  const avgLapSecondsTotal = toTotalSeconds(avgLapMinutes, avgLapSeconds);

  if (!Number.isFinite(totalLaps) || !Number.isFinite(drivers) || totalLaps <= 0 || drivers <= 0) {
    resetResults();
    showMessage("Informe valores positivos para o total de voltas e pilotos.");
    return;
  }

  if (avgLapMinutes < 0 || avgLapSeconds < 0 || avgLapSeconds >= 60) {
    resetResults();
    showMessage("O tempo médio deve ter segundos entre 0 e 59.");
    return;
  }

  const { equalShare, fairShare } = calculateFairShare(totalLaps, drivers);
  const totalRaceSeconds = avgLapSecondsTotal > 0 ? totalLaps * avgLapSecondsTotal : 0;
  const equalShareSeconds = avgLapSecondsTotal > 0 ? equalShare * avgLapSecondsTotal : 0;
  const fairShareSeconds = avgLapSecondsTotal > 0 ? fairShare * avgLapSecondsTotal : 0;

  equalShareOutput.textContent = `${equalShare} voltas`;
  fairShareOutput.textContent = `${fairShare} voltas`;
  raceTimeOutput.textContent = avgLapSecondsTotal ? formatDuration(totalRaceSeconds) : "Informe o tempo médio";
  equalShareTimeOutput.textContent = avgLapSecondsTotal ? formatDuration(equalShareSeconds) : "Informe o tempo médio";
  fairShareTimeOutput.textContent = avgLapSecondsTotal ? formatDuration(fairShareSeconds) : "Informe o tempo médio";
  showMessage(
    avgLapSecondsTotal
      ? "Cálculo concluído com estimativas de tempo."
      : "Fair share calculado. Informe o tempo médio para estimativas de duração."
  );
  resultCards.forEach((card) => card.classList.add("active"));
});

[totalLapsInput, driversInput, avgLapMinutesInput, avgLapSecondsInput].forEach((input) => {
  input.addEventListener("input", () => {
    showMessage("");
    resetResults();
  });
});
