const chats = [
    {
        name: "Lilou",
        age: 3,
        color: "black",
        img: "https://cdn2.thecatapi.com/images/1f1.jpg"
      },
      {
        name: "Lala",
        age: 2,
        color: "black",
        img: "https://cdn2.thecatapi.com/images/1tj.jpg"
      },
      {
        name: "Mimi",
        age: 2,
        color: "black",
        img: "https://cdn2.thecatapi.com/images/cvr.jpg"
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
    document.write(`<img src="${chat.img}" style="width:100px"><br>`)
    document.write(`<p>Nom : ${chat.name}`)
    document.write(`<p>Age : ${chat.age}`)
    document.write(`<p>Couleur : ${chat.color}`)
    
})


 