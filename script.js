// Массив с фактами
const facts = [
    "За 100 лет Земля нагрелась почти на 1°C.",
    "CO₂ в атмосфере — максимум за 800 000 лет.",
    "Океан поглощает 90% лишнего тепла.",
    "Ледники тают быстрее, чем когда-либо.",
    "2023 год стал самым жарким за всю историю наблюдений."
];

// Функция показа случайного факта
function showFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[randomIndex];
}