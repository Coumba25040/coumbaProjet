const chats = [
    
      {
        name: "Lala",
        age: 2,
        color: "noir",
        img: "https://img.freepik.com/photos-gratuite/chat-noir-aux-yeux-verts-reposant-herbe_181624-30967.jpg?semt=ais_hybrid&amp;w=740"
      },
      {
        name: "Mimi",
        age: 2,
        color: "orange",
        img: "https://media.istockphoto.com/id/465257035/fr/photo/petit-orange-chaton-allongez-vous-sur-le-lit.jpg?s=612x612&w=0&k=20&c=HvrHPxmbghSxKu1iDTO3YN6NVC6rlMIJ8Z3JAaX3z-4="
      },
      {
        name: "Lili",
        age: 3,
        color: "gris",
        img: "https://lemagduchat.ouest-france.fr/images/dossiers/2020-01/bleu-russe-073214.jpg" 
      },
   
]

chats.forEach(chat =>{
    document.write(`<img src="${chat.img}" style="width:150px"><br>`)
    document.write(`<p>Nom : ${chat.name}`)
    document.write(`<p>Age : ${chat.age} ans`)
    document.write(`<p>Couleur : ${chat.color}`)
    document.write(`<hr>`)
    
})


 