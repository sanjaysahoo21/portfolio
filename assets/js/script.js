// navbar
// const navItems =  document.querySelectorAll(".js-nav-items");
// navItems.forEach(navItem => {
//     navItem.addEventListener("click", () => {
//         navItems.forEach(link => link.classList.remove("active"));
//         navItem.classList.add("active");
//     });
// });
/* skill cards */
const cardsInformationLeft = [
    {
        image: "./assets/images/java.png",
        title: "JAVA",
        classList: "java-img",
    },
    {
        image: "./assets/images/html.png",
        title: "HTML",
        classList: "html-img",
    },
    {
        image: "./assets/images/css.png",
        title: "CSS",
        classList: "css-img",
    },
    {
        image: "./assets/images/javascript.png",
        title: "JavaScript",
        classList: "js-img",
    },
];
const cardsInformationRight = [
    {
        image: "./assets/images/sql.png",
        title: "SQL",
        classList: "sql-img",
    },
    {
        image: "./assets/images/mongodb.png",
        title: "MongoDB",
        classList: "mongodb-img",
    },
    {
        image: "./assets/images/reactjs.png",
        title: "React JS",
        classList: "reactjs-img",
    },
    {
        image: "./assets/images/nodejs.png",
        title: "Node JS",
        classList: "nodejs-img",
    }
];
const cardsLeft = cardsInformationLeft.map((ele) => {
    return `
        <div class="skill skill-left">
            <div class="skill-img">
                <img src="${ele.image}" alt="" class="${ele.classList}"/>
            </div>
            <div class="skill-caption">
                <p>${ele.title}</p>
            </div>
        </div>
    `;
});
const cardsRight = cardsInformationRight.map((ele) => {
    return `
        <div class="skill skill-right">
            <div class="skill-img">
                <img src="${ele.image}" alt="" class="${ele.classList}"/>
            </div>
            <div class="skill-caption">
                <p>${ele.title}</p>
            </div>
        </div>
    `;
});
const cardsLeftContainer = document.querySelector(".js-cards-left");
const cardsRightContainer = document.querySelector(".js-cards-right");
cardsLeftContainer.innerHTML = cardsLeft.join("");
cardsRightContainer.innerHTML = cardsRight.join("");
// project section toogle buttons and containers
const frontendContainer = document.getElementById("frontend-container");
const javaContainer = document.getElementById("java-container");
const toogleButtons = document.querySelectorAll(".js-t-button");
toogleButtons.forEach(button => {
    button.addEventListener("click", () => {
        toogleButtons.forEach(btn => btn.classList.remove("js-projects-active"));
        button.classList.add("js-projects-active");

        if(button.classList.contains("frontend-button")) {
            frontendContainer.classList.add("active");
            javaContainer.classList.remove("active");
        } else {
            frontendContainer.classList.remove("active");
            javaContainer.classList.add("active");
        }
    });
});
// carousel
const carousel = document.querySelectorAll(".carousel");
carousel.forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsArray = Array.from(items,() => {
        return `<div class="carousel-button"></div>`;
    })
    carousel.insertAdjacentHTML("beforeend",
        `<div class="carousel-nav">${buttonsArray.join("")}</div>`
    );
    const buttons = carousel.querySelectorAll(".carousel-button");
    let currentIndex = 0;
    const slideIndex = (index) => {
        items.forEach(item => item.classList.remove("carousel-item-active"));
        buttons.forEach(btn => btn.classList.remove("carousel-button-active"));
        items[index].classList.add("carousel-item-active");
        buttons[index].classList.add("carousel-button-active");
    }
    buttons.forEach((button,i) => {
        button.addEventListener("click",() => {
            currentIndex = i;
            slideIndex(currentIndex);
        })
        }
    )
    const prevButton = carousel.querySelector(".carousel-prevbutton");
    const nextButton = carousel.querySelector(".carousel-nextbutton");
    prevButton.addEventListener("click",() => {
        currentIndex--;
        if(currentIndex < 0) {
            currentIndex = items.length - 1;
        }
        slideIndex(currentIndex);
        }
    )
    nextButton.addEventListener("click",() => {
        currentIndex++;
        if(currentIndex > items.length - 1) {
            currentIndex = 0;
        }
        slideIndex(currentIndex);
        }
    )
    slideIndex(currentIndex);
})
