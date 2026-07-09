let texts =[
  "The best developers don't know everything they know how to learn anything.",
  "Debugging is proof that you're learning, not failing.",
  "Small commits today build great developers tomorrow.",
  "One line of code every day is better than a thousand lines never written",
  "Consistency beats talent when talent doesn't practice.",
  "Your next project is your next level.",
  "Every master was once a beginner.",
  "Dream big. Start small. Act today.",
  "Progress, not perfection.",
  "The future belongs to those who keep showing up.",
  "Success doesn't happen overnight; it happens every day.",
  "Be patient. The results will speak louder than the excuses.",
  "Every challenge is preparing you for something greater.",
  "Discipline is much better than motivation.",
  "Discipline is choosing what you want most over what you want now.",
  "First, solve the problem. Then, write the code.",
  "Growth starts outside your comfort zone.",
  "Comfort is the enemy of progress",
];
document.addEventListener("copy", (a) => {
 a.preventDefault();
alert("⚠️ Copying text is not allowed!");
});

let start, txt = texts[Math.floor(Math.random()*texts.length)];
document.getElementById("text").innerText = txt;

function textSpeed(){
  if (!start) start = Date.now();
}

function checkSpeed(){
  let type = document.getElementById("input").value.trim();
  if (type !== txt) return alert("Text does not match!");
  let sec = (Date.now () - start) / 1000; 
  let wpm = Math.round((type.split(" ").length / sec ) * 60);
  document.getElementById("result").innerText =`⏱ ${sec.toFixed(1)}s | ⚡ ${wpm}WPM`;
 }
