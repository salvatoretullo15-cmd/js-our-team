console.log("it work");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//questo sara il nostro markup per le card 
/*
<div class="row">
  <div class="col-4 card border-0 rounded-0">
    <img src="./assets/img/male1.png" alt="">
    <div class="card-body text-center">
      <h2 class="card-title">MARCO BIANCHI</h2>
      <div class="role fs-3">Designer</div>
      <div class="email fs-3 text-primary">marcobianchi@team.com</div>
    </div>
  </div>
</div>
*/
const rowEl=document.querySelector("section.team .col")
//questo rendera il team in pagina 
//creare la variabile d'appogio
let card=""
//ciclo for per far ciclare fino alla lunghezza dell'array per ogni elemento
//tutto questo ci fa generare le card per ogni singolo elemento senza usare html
for (let i = 0; i < teamMembers.length; i++) {
  const singleMember = teamMembers[i];
  const{name,role,email,img}=singleMember
  console.log(singleMember);
  const markup=`
  <div class="row">
  <div class="col-3 p-3">
    <div class="card p-3">
    <div class="card-body text-center">
        <img class="card-img-top" src="./assets/${img}" alt="">
        <h2 class="card-title">${name}</h2>
        <div class="role fs-3">${role}</div>
        <div class="email fs-3 text-primary">${email}</div>
      </div>
    </div>
  </div>
  </div>
  `

  console.log(markup);
  
  card += markup

}

console.log(card);
rowEl.innerHTML = card
