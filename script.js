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
const languageButtons = document.querySelectorAll(".language-button");

const translations = {
  "pt-BR": {
    pageTitle: "Calculadora Drive Fair Share",
    eyebrow: "iRacing Team Events • Drive Fair Share",
    title: "Calculadora de Fair Share",
    lede:
      "Descubra a quantidade mínima de voltas e o tempo aproximado que cada piloto precisa cumprir para atender à regra de Drive Fair Share em eventos de equipe do iRacing.",
    totalLapsLabel: "Total de voltas da equipe",
    totalLapsPlaceholder: "ex: 827",
    driversLabel: "Número de pilotos declarados",
    driversPlaceholder: "ex: 6",
    avgLapLegend: "Tempo médio por volta (opcional)",
    avgLapMinutesLabel: "Minutos",
    avgLapMinutesPlaceholder: "ex: 2",
    avgLapSecondsLabel: "Segundos",
    avgLapSecondsPlaceholder: "ex: 15",
    avgLapHelper: "Use este campo para estimar horas/minutos de pista por piloto.",
    submitButton: "Calcular fair share",
    equalShareTitle: "Divisão igual",
    equalShareCaption: "Total de voltas ÷ pilotos (arredondado para cima).",
    fairShareTitle: "Mínimo de fair share",
    fairShareCaption: "25% da divisão igual (arredondado para cima).",
    raceTimeTitle: "Tempo total estimado",
    raceTimeCaption: "Baseado em voltas totais × tempo médio de volta.",
    equalShareTimeTitle: "Tempo por piloto (divisão igual)",
    equalShareTimeCaption: "Tempo aproximado por piloto na divisão igual.",
    fairShareTimeTitle: "Tempo por piloto (fair share)",
    fairShareTimeCaption: "Tempo mínimo por piloto para estar em conformidade.",
    rulesTitle: "Regra de Drive Fair Share",
    rulesBody:
      "Todos os pilotos declarados devem completar um “fair share” das voltas da equipe. O fair share equivale a pelo menos 25% da divisão igual de voltas. A divisão igual é o total de voltas dividido pelo número de pilotos declarados, arredondado para a próxima volta inteira.",
    exampleATitle: "Exemplo A",
    exampleABody: "Total de voltas: 827 • Pilotos: 6 • Divisão igual: 138 voltas • Fair share: 35 voltas.",
    exampleBTitle: "Exemplo B",
    exampleBBody: "Total de voltas: 500 • Pilotos: 18 • Divisão igual: 28 voltas • Fair share: 7 voltas.",
    footerText: "Use esta ferramenta para planejar stints e garantir que todos os pilotos cumpram o fair share.",
    lapsUnit: "voltas",
    avgTimePrompt: "Informe o tempo médio",
    messageInvalidValues: "Informe valores positivos para o total de voltas e pilotos.",
    messageInvalidAvgTime: "O tempo médio deve ter segundos entre 0 e 59.",
    messageWithTime: "Cálculo concluído com estimativas de tempo.",
    messageWithoutTime: "Fair share calculado. Informe o tempo médio para estimativas de duração."
  },
  en: {
    pageTitle: "Drive Fair Share Calculator",
    eyebrow: "iRacing Team Events • Drive Fair Share",
    title: "Fair Share Calculator",
    lede:
      "Find the minimum laps and approximate time each driver must complete to comply with the iRacing team event fair share rule.",
    totalLapsLabel: "Team total laps",
    totalLapsPlaceholder: "e.g. 827",
    driversLabel: "Declared drivers",
    driversPlaceholder: "e.g. 6",
    avgLapLegend: "Average lap time (optional)",
    avgLapMinutesLabel: "Minutes",
    avgLapMinutesPlaceholder: "e.g. 2",
    avgLapSecondsLabel: "Seconds",
    avgLapSecondsPlaceholder: "e.g. 15",
    avgLapHelper: "Use this field to estimate on-track hours/minutes per driver.",
    submitButton: "Calculate fair share",
    equalShareTitle: "Equal share",
    equalShareCaption: "Total laps ÷ drivers (rounded up).",
    fairShareTitle: "Minimum fair share",
    fairShareCaption: "25% of the equal share (rounded up).",
    raceTimeTitle: "Estimated total time",
    raceTimeCaption: "Based on total laps × average lap time.",
    equalShareTimeTitle: "Time per driver (equal share)",
    equalShareTimeCaption: "Approximate time per driver at equal share.",
    fairShareTimeTitle: "Time per driver (fair share)",
    fairShareTimeCaption: "Minimum time per driver to stay compliant.",
    rulesTitle: "Drive Fair Share Rule",
    rulesBody:
      "All declared drivers must complete a fair share of the team’s laps. Fair share equals at least 25% of the equal share. Equal share is total laps divided by the number of declared drivers, rounded up to the next whole lap.",
    exampleATitle: "Example A",
    exampleABody: "Total laps: 827 • Drivers: 6 • Equal share: 138 laps • Fair share: 35 laps.",
    exampleBTitle: "Example B",
    exampleBBody: "Total laps: 500 • Drivers: 18 • Equal share: 28 laps • Fair share: 7 laps.",
    footerText: "Use this tool to plan stints and ensure every driver meets the fair share.",
    lapsUnit: "laps",
    avgTimePrompt: "Enter the average lap time",
    messageInvalidValues: "Enter positive values for total laps and drivers.",
    messageInvalidAvgTime: "Average lap time seconds must be between 0 and 59.",
    messageWithTime: "Calculation complete with time estimates.",
    messageWithoutTime: "Fair share calculated. Add average lap time for duration estimates."
  },
  de: {
    pageTitle: "Drive-Fair-Share-Rechner",
    eyebrow: "iRacing Team Events • Drive Fair Share",
    title: "Fair-Share-Rechner",
    lede:
      "Ermitteln Sie die Mindestanzahl an Runden und die ungefähre Zeit pro Fahrer gemäß der iRacing-Team-Event-Fair-Share-Regel.",
    totalLapsLabel: "Gesamtrunden des Teams",
    totalLapsPlaceholder: "z. B. 827",
    driversLabel: "Gemeldete Fahrer",
    driversPlaceholder: "z. B. 6",
    avgLapLegend: "Durchschnittliche Rundenzeit (optional)",
    avgLapMinutesLabel: "Minuten",
    avgLapMinutesPlaceholder: "z. B. 2",
    avgLapSecondsLabel: "Sekunden",
    avgLapSecondsPlaceholder: "z. B. 15",
    avgLapHelper: "Nutzen Sie dieses Feld, um Fahrzeit pro Fahrer zu schätzen.",
    submitButton: "Fair Share berechnen",
    equalShareTitle: "Gleicher Anteil",
    equalShareCaption: "Gesamtrunden ÷ Fahrer (aufgerundet).",
    fairShareTitle: "Mindest-Fair-Share",
    fairShareCaption: "25 % des gleichen Anteils (aufgerundet).",
    raceTimeTitle: "Geschätzte Gesamtzeit",
    raceTimeCaption: "Basierend auf Gesamtrunden × Durchschnittszeit pro Runde.",
    equalShareTimeTitle: "Zeit pro Fahrer (gleicher Anteil)",
    equalShareTimeCaption: "Ungefähre Zeit pro Fahrer beim gleichen Anteil.",
    fairShareTimeTitle: "Zeit pro Fahrer (Fair Share)",
    fairShareTimeCaption: "Mindestzeit pro Fahrer für die Einhaltung.",
    rulesTitle: "Drive-Fair-Share-Regel",
    rulesBody:
      "Alle gemeldeten Fahrer müssen einen fairen Anteil der Teamrunden absolvieren. Der Fair Share beträgt mindestens 25 % des gleichen Anteils. Der gleiche Anteil ist die Gesamtrundenanzahl geteilt durch die Anzahl der gemeldeten Fahrer, aufgerundet auf die nächste ganze Runde.",
    exampleATitle: "Beispiel A",
    exampleABody: "Gesamtrunden: 827 • Fahrer: 6 • Gleicher Anteil: 138 Runden • Fair Share: 35 Runden.",
    exampleBTitle: "Beispiel B",
    exampleBBody: "Gesamtrunden: 500 • Fahrer: 18 • Gleicher Anteil: 28 Runden • Fair Share: 7 Runden.",
    footerText: "Nutzen Sie dieses Tool zur Stint-Planung, damit alle Fahrer den Fair Share erfüllen.",
    lapsUnit: "Runden",
    avgTimePrompt: "Durchschnittszeit eingeben",
    messageInvalidValues: "Bitte positive Werte für Gesamtrunden und Fahrer eingeben.",
    messageInvalidAvgTime: "Sekunden müssen zwischen 0 und 59 liegen.",
    messageWithTime: "Berechnung abgeschlossen mit Zeitabschätzung.",
    messageWithoutTime: "Fair Share berechnet. Durchschnittszeit für Dauer schätzen hinzufügen."
  },
  fr: {
    pageTitle: "Calculateur de fair share",
    eyebrow: "iRacing Team Events • Drive Fair Share",
    title: "Calculateur de fair share",
    lede:
      "Déterminez le minimum de tours et le temps approximatif par pilote pour respecter la règle de fair share des événements d'équipe iRacing.",
    totalLapsLabel: "Total de tours de l'équipe",
    totalLapsPlaceholder: "ex. 827",
    driversLabel: "Pilotes déclarés",
    driversPlaceholder: "ex. 6",
    avgLapLegend: "Temps moyen au tour (optionnel)",
    avgLapMinutesLabel: "Minutes",
    avgLapMinutesPlaceholder: "ex. 2",
    avgLapSecondsLabel: "Secondes",
    avgLapSecondsPlaceholder: "ex. 15",
    avgLapHelper: "Utilisez ce champ pour estimer le temps de piste par pilote.",
    submitButton: "Calculer le fair share",
    equalShareTitle: "Part égale",
    equalShareCaption: "Total des tours ÷ pilotes (arrondi au supérieur).",
    fairShareTitle: "Fair share minimum",
    fairShareCaption: "25 % de la part égale (arrondi au supérieur).",
    raceTimeTitle: "Temps total estimé",
    raceTimeCaption: "Basé sur total des tours × temps moyen au tour.",
    equalShareTimeTitle: "Temps par pilote (part égale)",
    equalShareTimeCaption: "Temps approximatif par pilote à part égale.",
    fairShareTimeTitle: "Temps par pilote (fair share)",
    fairShareTimeCaption: "Temps minimum par pilote pour rester conforme.",
    rulesTitle: "Règle Drive Fair Share",
    rulesBody:
      "Tous les pilotes déclarés doivent réaliser une part équitable des tours de l'équipe. Le fair share correspond à au moins 25 % de la part égale. La part égale est le total des tours divisé par le nombre de pilotes déclarés, arrondi au tour entier supérieur.",
    exampleATitle: "Exemple A",
    exampleABody: "Total des tours : 827 • Pilotes : 6 • Part égale : 138 tours • Fair share : 35 tours.",
    exampleBTitle: "Exemple B",
    exampleBBody: "Total des tours : 500 • Pilotes : 18 • Part égale : 28 tours • Fair share : 7 tours.",
    footerText: "Utilisez cet outil pour planifier les relais et garantir que chaque pilote respecte le fair share.",
    lapsUnit: "tours",
    avgTimePrompt: "Saisissez le temps moyen",
    messageInvalidValues: "Saisissez des valeurs positives pour le total des tours et les pilotes.",
    messageInvalidAvgTime: "Les secondes doivent être entre 0 et 59.",
    messageWithTime: "Calcul terminé avec estimation du temps.",
    messageWithoutTime: "Fair share calculé. Ajoutez un temps moyen pour estimer la durée."
  },
  es: {
    pageTitle: "Calculadora de fair share",
    eyebrow: "iRacing Team Events • Drive Fair Share",
    title: "Calculadora de fair share",
    lede:
      "Descubre el mínimo de vueltas y el tiempo aproximado por piloto para cumplir la regla de fair share en eventos de equipo de iRacing.",
    totalLapsLabel: "Vueltas totales del equipo",
    totalLapsPlaceholder: "ej. 827",
    driversLabel: "Pilotos declarados",
    driversPlaceholder: "ej. 6",
    avgLapLegend: "Tiempo medio por vuelta (opcional)",
    avgLapMinutesLabel: "Minutos",
    avgLapMinutesPlaceholder: "ej. 2",
    avgLapSecondsLabel: "Segundos",
    avgLapSecondsPlaceholder: "ej. 15",
    avgLapHelper: "Usa este campo para estimar tiempo de pista por piloto.",
    submitButton: "Calcular fair share",
    equalShareTitle: "División igual",
    equalShareCaption: "Vueltas totales ÷ pilotos (redondeado hacia arriba).",
    fairShareTitle: "Fair share mínimo",
    fairShareCaption: "25 % de la división igual (redondeado hacia arriba).",
    raceTimeTitle: "Tiempo total estimado",
    raceTimeCaption: "Basado en vueltas totales × tiempo medio por vuelta.",
    equalShareTimeTitle: "Tiempo por piloto (división igual)",
    equalShareTimeCaption: "Tiempo aproximado por piloto en la división igual.",
    fairShareTimeTitle: "Tiempo por piloto (fair share)",
    fairShareTimeCaption: "Tiempo mínimo por piloto para cumplir.",
    rulesTitle: "Regla de Drive Fair Share",
    rulesBody:
      "Todos los pilotos declarados deben completar una parte justa de las vueltas del equipo. El fair share equivale a al menos el 25 % de la división igual. La división igual es el total de vueltas dividido entre el número de pilotos declarados, redondeado a la siguiente vuelta entera.",
    exampleATitle: "Ejemplo A",
    exampleABody: "Vueltas totales: 827 • Pilotos: 6 • División igual: 138 vueltas • Fair share: 35 vueltas.",
    exampleBTitle: "Ejemplo B",
    exampleBBody: "Vueltas totales: 500 • Pilotos: 18 • División igual: 28 vueltas • Fair share: 7 vueltas.",
    footerText: "Usa esta herramienta para planificar stints y asegurar que todos cumplan el fair share.",
    lapsUnit: "vueltas",
    avgTimePrompt: "Ingresa el tiempo medio",
    messageInvalidValues: "Ingresa valores positivos para vueltas y pilotos.",
    messageInvalidAvgTime: "Los segundos deben estar entre 0 y 59.",
    messageWithTime: "Cálculo completado con estimaciones de tiempo.",
    messageWithoutTime: "Fair share calculado. Agrega el tiempo medio para estimar la duración."
  }
};

let currentLanguage = "pt-BR";
let lastResult = null;

const t = (key) => translations[currentLanguage]?.[key] ?? translations["pt-BR"][key] ?? "";

const setLanguage = (language) => {
  if (!translations[language]) {
    return;
  }
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key) {
      element.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key) {
      element.setAttribute("placeholder", t(key));
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  if (lastResult) {
    renderResults(lastResult);
  }
};

const resetResults = () => {
  equalShareOutput.textContent = "—";
  fairShareOutput.textContent = "—";
  raceTimeOutput.textContent = "—";
  equalShareTimeOutput.textContent = "—";
  fairShareTimeOutput.textContent = "—";
  resultCards.forEach((card) => card.classList.remove("active"));
  lastResult = null;
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

const renderResults = ({ equalShare, fairShare, avgLapSecondsTotal, totalLaps }) => {
  equalShareOutput.textContent = `${equalShare} ${t("lapsUnit")}`;
  fairShareOutput.textContent = `${fairShare} ${t("lapsUnit")}`;
  raceTimeOutput.textContent = avgLapSecondsTotal
    ? formatDuration(totalLaps * avgLapSecondsTotal)
    : t("avgTimePrompt");
  equalShareTimeOutput.textContent = avgLapSecondsTotal
    ? formatDuration(equalShare * avgLapSecondsTotal)
    : t("avgTimePrompt");
  fairShareTimeOutput.textContent = avgLapSecondsTotal
    ? formatDuration(fairShare * avgLapSecondsTotal)
    : t("avgTimePrompt");

  resultCards.forEach((card) => card.classList.add("active"));
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
    showMessage(t("messageInvalidValues"));
    return;
  }

  if (avgLapMinutes < 0 || avgLapSeconds < 0 || avgLapSeconds >= 60) {
    resetResults();
    showMessage(t("messageInvalidAvgTime"));
    return;
  }

  const { equalShare, fairShare } = calculateFairShare(totalLaps, drivers);
  lastResult = { equalShare, fairShare, avgLapSecondsTotal, totalLaps };
  renderResults(lastResult);
  showMessage(avgLapSecondsTotal ? t("messageWithTime") : t("messageWithoutTime"));
});

[totalLapsInput, driversInput, avgLapMinutesInput, avgLapSecondsInput].forEach((input) => {
  input.addEventListener("input", () => {
    showMessage("");
    resetResults();
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.lang;
    if (!selectedLanguage) {
      return;
    }
    localStorage.setItem("preferredLanguage", selectedLanguage);
    setLanguage(selectedLanguage);
  });
});

const storedLanguage = localStorage.getItem("preferredLanguage");
setLanguage(storedLanguage || "pt-BR");
