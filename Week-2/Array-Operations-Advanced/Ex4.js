const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
const sf = m.filter(x => x.genre === "Sci-Fi");
const list = m.map(x => `${x.title} (${x.rating})`);
const avg =m.reduce((s, x) => s + x.rating,) / m.length;
const f = m.find(x => x.title === "Joker");
const i = m.findIndex(x => x.title === "Avengers");
console.log(sf);
console.log(list);  
console.log(avg);
console.log(f);
console.log(i);