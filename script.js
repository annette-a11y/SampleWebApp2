const facts = [
  "A day on Venus is longer than its year.",
  "Neutron stars can spin at up to 600 rotations per second.",
  "There are more stars in the universe than grains of sand on Earth.",
  "Jupiter has at least 95 known moons.",
  "The Sun accounts for 99.8% of the mass in the solar system.",
  "One million Earths could fit inside the Sun.",
  "Space is completely silent — there's no medium for sound to travel through.",
  "The footprints on the Moon will likely last millions of years.",
  "Saturn could float in water because it's mostly gas.",
  "A year on Mercury is just 88 Earth days."
];

const planets = [
  { name: "Mercury", emoji: "☿️", info: "Closest to the Sun" },
  { name: "Venus", emoji: "♀️", info: "Hottest planet" },
  { name: "Earth", emoji: "🌍", info: "Our home" },
  { name: "Mars", emoji: "♂️", info: "The Red Planet" },
  { name: "Jupiter", emoji: "🪐", info: "Largest planet" },
  { name: "Saturn", emoji: "💫", info: "Famous rings" },
  { name: "Uranus", emoji: "🌀", info: "Tilted on its side" },
  { name: "Neptune", emoji: "🔵", info: "Windiest planet" }
];

const factText = document.getElementById("fact-text");
const factBtn = document.getElementById("fact-btn");
const planetGrid = document.getElementById("planet-grid");

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
}

function renderPlanets() {
  planets.forEach(planet => {
    const card = document.createElement("div");
    card.className = "planet";
    card.innerHTML = `
      <span class="emoji">${planet.emoji}</span>
      <h3>${planet.name}</h3>
      <p>${planet.info}</p>
    `;
    planetGrid.appendChild(card);
  });
}

factBtn.addEventListener("click", showRandomFact);
renderPlanets();
