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
                    <div class="likes_bt">
                        <a class ="like_button fw-bold " data-postid="${posts[i].id}">
                            <i class="fas fa-thumbs-up" aria-hidden="true"></i>
                            <span>Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes_counter">
                        Piace a <b id ="${posts[i].id}" class="js_likes">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div> `    
    
})

const carouselWrapper = document.getElementById('container');
carouselWrapper.innerHTML = carouselContent;


//seleziono lo span per  il numero
let likes = document.querySelectorAll(".js_likes");

//seleziono i bottoni per l'evento
const likesBtns = document.querySelectorAll(".likes_bt");

//seleziono le  icone per cambiare il colore
const iconBtns = document.querySelectorAll(".like_button");

//creo un array per vedere a quale id post ho messo il like
const arrayId = [];

let count = false;



likesBtns.forEach(( element, i, array) =>{
    likesBtns[i].addEventListener("click", function () {
        
        if (!iconBtns[i].classList.contains("like_cliked")) {
            //aggiungo  1 ad ogni click
            posts[i]["likes"] += 1;
            
            likes[i].innerHTML = posts[i]["likes"];
            console.log(posts[i]["likes"]);
            //inserisco l' id che ho cliccato
            arrayId.push(posts[i]["id"]);
            console.log(arrayId);
            //aggiungo la classe per cambiare il colore
            iconBtns[i].classList.add("like_cliked");
        } else {
            //elimino 1 like ad ogni click
            posts[i]["likes"] += -1;
            //lo inserisco nell'html
            likes[i].innerHTML = posts[i]["likes"];
            console.log(posts[i]["likes"]);
            //elimino quale id ho cliccato
            console.warn(posts[i]["id"]);
            console.log(arrayId.indexOf(posts[i]["id"]));
            let indexArray = arrayId.indexOf(posts[i]["id"]);
            arrayId.splice(indexArray, 1);
            console.log(arrayId);
            //elimino la classe per cambiare il colore
            iconBtns[i].classList.remove("like_cliked");
        }
    })
});

