// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto :faccia_leggermente_sorridente:
// BONUS 3:
// Aggiungere attraverso un form un membro al team

const row = document.getElementById('row');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const titolo = document.getElementById('titolo')

// creo l array di ogetti con le informazioni in possesso

 let  datiTeam = [
   { nome : 'Wayne Barnett',
    role :  'Fouder & CEO',
    img  : 'img1'
 }
 ,{ nome : 'Angela Caroll',
    role :  'Chief Editor',
    img  : 'img2'
 }
 ,{ nome : 'Walter Gordon',
    role :  'Office Maneger',
    img  : 'img3'
 }
 ,{ nome : 'Angela Lopez',
    role :  'Social Media Manager',
    img  : 'img4'
 }
 ,{ nome : 'Sott Estrada',
    role :  'Developer',
    img  : 'img5'
 }
 ,{ nome : 'Barbara Ramos',
    role :  'Graphic Designer',
    img  : 'img6'
 }

 ]
// Faccio un ciclo che vede coso ho dentro l'array 

for(let key of datiTeam ){
    console.log(key);
    datiTeam.nome
}
// const div = document.createElement('div');
// div.innerText = datiTeam[0].nome;
// card.appendChild(div);

const h1 = document.createElement('h1')
h1.innerHTML = ' la mia squadra : ';
titolo.appendChild(h1);


for(let i = 0; i< datiTeam.length; i++){
   const div = document.createElement('div');
   div.classList.add("nomi");
   div.innerText = datiTeam[i].nome;
   card1.appendChild(div);
}
for(let i = 0; i< datiTeam.length; i++){
   const div = document.createElement('div');
   div.classList.add("role");
   div.innerText = datiTeam[i].role;
   card2.appendChild(div);
}

const img = document.createElement('img');
img.src="./img/wayne-barnett-founder-ceo.jpg"
card3.appendChild(img)