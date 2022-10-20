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

// Faccio un ciclo che vede coso ho dentro l'array e ne prende gli oggetti

for(let i = 0; i<datiTeam.length; i++){
    console.log(datiTeam)
}
