// var observer = new IntersectionObserver(
//     function (entries) {
//         // no intersection with screen
//         if (entries[0].intersectionRatio === 0)
//             document
//                 .querySelector(".navbar-sticky")
//                 .classList.add("is-sticky");
//         // fully intersects with screen
//         else if (entries[0].intersectionRatio === 1)
//             document
//                 .querySelector(".navbar-sticky")
//                 .classList.remove("is-sticky");
//     },
//     { threshold: [0, 1]
//     }
// );
// observer.observe(document.querySelector(".navbar-sticky-top"));

const el = document.querySelector(".navbar-sticky-top");
const observer = new IntersectionObserver(
    ([e]) => e.target.nextElementSibling.classList.toggle("is-sticky", e.intersectionRatio < 1), {
        threshold: [1]
    });
observer.observe(el);
