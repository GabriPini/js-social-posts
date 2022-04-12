/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
-- id del post, numero progressivo da 1 a n
-- nome autore,
-- foto autore,
-- data in formato americano (mm-gg-yyyy),
-- testo del post,
-- immagine (non tutti i post devono avere una immagine),
-- numero di likes.
 */

const posts = [{
    id: 1,
    author: {
        "name": "Grogu mando",
        "image": "https://unsplash.it/300/300?image=15"
    },
    created: "01-19-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    likes: 8000,
},
{
    id: 2,
    author: {
        "name": "Mando The Mandalorian",
        "image": "https://unsplash.it/300/300?image=15"
    },
    created: "02-20-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    likes: 800,
},

{
    id: 3,
    author: {
        "name": "Boba Fett",
        "image": "https://unsplash.it/300/300?image=15"
    },
    created: "03-10-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    likes: 8,
},

{
    id: 4,
    author: {
        "name": "Old Yoda",
        "image": "https://unsplash.it/300/300?image=15"
    },
    created: "04-02-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: null,
    likes: 80000,
},

{
    id: 5,
    author: {
        "name": "Darth Maul",
        "image": "https://unsplash.it/300/300?image=15"
    },
    created: "04-05-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: null,
    likes: 0,
},

];
