let movies = [
  {
    name: "Loki",
    des:
      "Loki revolves around the mischievous villain escaping the clutches of The Avengers and getting caught by the Time Variance Authority. This sends him on a mission to catch the different antagonist who has been troubling the timelines",
    image: "images/slider 1.png"
  },
  {
    name:"The Falcon ",
    des:
      "Six months after being restored to life in the Blip and being handed Captain America's shield by Steve Rogers, Sam Wilson is working with the U.S. Air Force overseas to rescue a hostage from LAF, a terrorist group led by Georges Batroc.",
    image: "images/slider 2.png"
  },
  {
    name: "Wanda Vision",
    des:
      "It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes. Schaeffer served as head writer for the series, which was directed by Matt Shakman.",
    image: "images/slider 3.png"
  },
  {
    name: "Raya And The Last Dragon",
    des:
      "With warring factions, distrust, and the unstoppable menace of the Druun wreaking havoc on Kumandra, Raya, the sword-wielding Princess of Heart and fearless Guardian of the Dragon Gem, embarks on a peril-laden quest to track down a benevolent mythical being that can heal the land.",
    image: "images/slider 4.png"
  }, 
  {
    name: "Luca",
    des:
      "A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface.",
    image: "images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register(){
  x.style.left='-400px';
  y.style.left='50px';
  z.style.left='110px';
}
function login(){
  x.style.left='50px';
  y.style.left='450px';
  z.style.left='0px';
}
function change(){
  var usr;
  usr=document.getElementById("username").value;
  document.getElementById("demo_login").innerHTML = usr;
}
function disappear(){
  alert("The form was submitted");
  document.getElementById("form_login" ).style.visibility = "hidden";
}