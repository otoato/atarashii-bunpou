const soundData = [
  { name: "朝のリビング", file: "sounds/relational/living_morning.mp3", category: "relational" },
  { name: "夜の洗面台", file: "sounds/relational/bath_evening.mp3", category: "relational" },
  { name: "足音", file: "sounds/human/footsteps.mp3", category: "human" },
  { name: "食器を洗う", file: "sounds/human/dish_wash.mp3", category: "human" },
  { name: "エアコンの音", file: "sounds/object/aircon_noise.mp3", category: "object" },
  { name: "冷蔵庫の音", file: "sounds/object/fridge_hum.mp3", category: "object" }
];

function renderList(filter = "all") {
  const list = document.getElementById("soundList");
  list.innerHTML = "";

  const filtered = filter === "all" ? soundData : soundData.filter(s => s.category === filter);

  filtered.forEach(sound => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${sound.name}</strong><br />
      <audio controls src="${sound.file}"></audio>
    `;
    list.appendChild(li);
  });
}

document.getElementById("categoryFilter").addEventListener("change", (e) => {
  renderList(e.target.value);
});

renderList();
