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
        name: "Grogu mando",
        image: "https://unsplash.it/300/300?image=15"
    },
    created: "01-19-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=120",
    likes: 8000,
},
{
    id: 2,
    author: {
        name: "Mando The Mandalorian",
        image: "https://unsplash.it/300/300?image=12"
    },
    created: "02-20-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=170",
    likes: 800,
},

{
    id: 3,
    author: {
        name: "Boba Fett",
        image: "https://unsplash.it/300/300?image=13"
    },
    created: "03-10-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=173",
    likes: 8,
},

{
    id: 4,
    author: {
        name: "Old Yoda",
        image: "https://unsplash.it/300/300?image=18"
    },
    created: "04-02-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: null,
    likes: 80000,
},

{
    id: 5,
    author: {
        name: "Darth Maul",
        image: "https://unsplash.it/300/300?image=19"
    },
    created: "04-05-2022",
    content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: null,
    likes: 0,
},
];

/* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. */
let carouselContent = "";



posts.forEach((post, i,) =>{

    carouselContent += `
    <div class="post mb-5 p-3 bg-white">
            <div class="mb-2">
                <div class="d-flex">                    
                    <div class="me-3">
                        <img class = "profile_pic" src="${posts[i].author.image}"
                        alt = "${posts[i].author.name}">
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                        <div class = "fw-bold">${posts[i].author.name}</div>
                        <div class="fs_7">${posts[i].created}</div>
                    </div>                    
                </div>
            </div>
            <div class = "mb-3">${posts[i].content}</div>
            <div class="mb-3">
                <img src="${posts[i].media}" alt= "" class="w-100">
            </div>
            <div class="footer">
                <div class="d-flex justify-content-around align-items-center ">
                    <div >
                        <a class ="like_button fw-bold " data-postid="${posts[i].id}">
                            <i class="fas fa-thumbs-up" aria-hidden="true"></i>
                            <span>Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes_counter">
                        Piace a <b id ="${posts[i].id}">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div> `    
    
})

const carouselWrapper = document.getElementById('container');
carouselWrapper.innerHTML = carouselContent;




