const chats = [
    
      {
        name: "Lala",
        age: 2,
        color: "black",
        img: "https://img.freepik.com/photos-gratuite/chat-noir-aux-yeux-verts-reposant-herbe_181624-30967.jpg?semt=ais_hybrid&amp;w=740"
      },
      {
        name: "Mimi",
        age: 2,
        color: "black",
        img: https://media.istockphoto.com/id/465257035/fr/photo/petit-orange-chaton-allongez-vous-sur-le-lit.jpg?s=612x612&w=0&k=20&c=HvrHPxmbghSxKu1iDTO3YN6NVC6rlMIJ8Z3JAaX3z-4=
      },
      {
        name: "Lili",
        age: 3,
        color: "black",
        img: "https://cdn2.thecatapi.com/images/dj9.jpg"
      },
      {
        name: "Lala",
        age: 3,
        color: "black",
        img: "https://cdn2.thecatapi.com/images/MTUxMjcxNw.jpg"
      }
]

chats.forEach(chat =>{
    document.write(`<img src="${chat.img}" style="width:150px"><br>`)
    document.write(`<p>Nom : ${chat.name}`)
    document.write(`<p>Age : ${chat.age}`)
    document.write(`<p>Couleur : ${chat.color}`)
    document.write(`<hr>`)
    
})


 