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
const rowEl=document.querySelector("section.team .row")
const formEl=document.getElementById("add_member")
const nameEl=document.getElementById("name")
const roleEl=document.getElementById("role")
const emailEl=document.getElementById("email")
const imageEl=document.getElementById("image")
//questo rendera il team in pagina 
//creare la variabile d'appogio
let card=""
//ciclo for per far ciclare fino alla lunghezza dell'array per ogni elemento
//tutto questo ci fa generare le card per ogni singolo elemento senza usare html
for (let i = 0; i < teamMembers.length; i++) {
  const singleMember = teamMembers[i];
  /*
  const{name,role,email,img}=singleMember
  console.log(singleMember);
  const markup=`
  <div class="col-4 p-3">
    <div class="card overflow-hidden">
    <div class="card-body d-flex">
        <img class="p-2 card-img-top" src="./assets/${img}" alt="">
        <h2 class="p-2 card-title">${name}</h2>
        <div class="p-2 role fs-3">${role}</div>
        <div class="p-2 email fs-3 text-primary">${email}</div>
      </div>
    </div>
  </div>
  `
  console.log(markup);
  */

  const markup=rendeMemberCard(singleMember)

  
  card += markup

}

console.log(card);
rowEl.innerHTML = card


function rendeMemberCard(singleMember){
  const{name,role,email,img}=singleMember
  console.log(singleMember);
  const markup=`
  <div class="col-md-6 col-lg-4 p-3">
    <div class="card overflow-hidden">
    <div class="card-body ">
        <img class="p-2 card-img-top" src="./assets/${img}" alt="">
        <h2 class="p-2 card-title">${name}</h2>
        <div class="p-2 role fs-3">${role}</div>
        <div class="p-2 email fs-3 text-primary">${email}</div>
      </div>
    </div>
  </div>
  `
  return markup
}


formEl.addEventListener("submit",function (e) {
  //previene la ricarica della pagina 
  e.preventDefault
  //select the form node 
  console.log(nameEl,roleEl,imageEl,email.EL);
  //read the input value
  console.log(nameEl.value,roleEl.value,imageEl.value,emailEl.value);
  //store each input value in a variable
  const name=nameEl.value
  const role=roleEl.value
  const email=emailEl.value
  const image=imageEl.value
  //create a new team object using above variable
  const newTeamMember={
    name,role,email,image
  }
  console.log=(newTeamMember)
  //add the object to the arrey(push)
  teamMembers.push(newTeamMember)
  //update the dom and re-render the team member
  rendeMemberCard(teamMembers,rowEl)
})