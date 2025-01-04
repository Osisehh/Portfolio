AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Supervised Machine Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/0d1556520c6e458a2cc4ea5b757afb38",
  },
  {
    title: "Advanced Learning Algorithms",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/8426ac94f2804b0275fae84b76227182",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/83093fd37becb237c36c4b971db520a5",
  },
  {
    title: "Machine Learning Specialization",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/share/b8c7e04b852a9d298508737150620c1e",
  },
  {
    title: "Python for Data Science & Machine Learning:",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/certificate/UC-879ec90b-4ad5-4087-9d05-f154bcaeae71/",
  },
  {
    title: "The Complete Python Pro Bootcamp",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/share/103IHM3@rY2RtLMDuEznl3UufbO4g5nsVqxhDhLfCJIvW1AmaAq-V-Kj4HCZrgcOKaUAsJNpwA==/",
  },

];

const experience = [
  {
    img: "assets/images/pc1.jpg",
  },
  {
    img: "assets/images/pc2.jpg",
  },
  {
    img: "assets/images/pc3.jpg",
  },
  {
    img: "assets/images/pc4.jpg",
  },
  {
    img: "assets/images/pc5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/
/*
const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1); */

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
