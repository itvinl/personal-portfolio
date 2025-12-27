// Text typing automatically
const first_txt = document.querySelector(".First-Txt");
const second_txt = document.querySelector(".Second-Txt");
const text_hello = "<Hello World/>";
const text_im = "<I'm Vinícius Santos/>";
const set_interval_first = 120;
const set_interval_second = 100;

function showText(first_txt, second_txt, text_hello, text_im, set_interval_first, set_interval_second) {
    const show_hello = text_hello.split("").reverse();

    const setHello = setInterval(() => {
        if(!show_hello.length) {
            return clearInterval(setHello);
        }

        const write_hello = show_hello.pop();
       
        first_txt.innerHTML += write_hello;

    }, set_interval_first);

    const show_im = text_im.split("").reverse();

    const setIm = setInterval(() => {
        if(!show_im.length) {
            return clearInterval(setIm);
        }

        const write_im = show_im.pop();
       
        second_txt.innerHTML += write_im;

    }, set_interval_second);
}

showText(first_txt, second_txt, text_hello, text_im, set_interval_first, set_interval_second);


// Remove text from border on scroll
/*window.addEventListener('scroll', function() {
    removeBorder();
});

function removeBorder() {
    const positionscroll = window.scrollY;

    if (positionscroll != 0) {
        const border = document.querySelector(".Second-Txt");
        border.classList.add("remove");
    }
};*/


// Profession typing automatically
const role_txt = document.querySelector(".Role-Txt");
const roles_list = ["PLC Programmer </>", "Full-Stack Developer </>", "UX/UI Designer </>"];

const time_write = 100;
const time_delete = 50;
const time_wait = 2000;

cycleRoles(role_txt, roles_list, time_write, time_delete, time_wait);

function cycleRoles(element, text_list, interval_write, interval_delete, wait_time) {
    let current_index = 0;

    function startWriting() {
        const current_text = text_list[current_index];
        const chars_to_write = current_text.split("").reverse();

        const writing = setInterval(() => {
            if (!chars_to_write.length) {
                clearInterval(writing);
                setTimeout(startDeleting, wait_time);
                return;
            }

            const letter = chars_to_write.pop();
            
            element.textContent += letter; 

        }, interval_write);
    }

    function startDeleting() {
        const chars_on_screen = element.textContent.split("");

        const deleting = setInterval(() => {
            if (!chars_on_screen.length) {
                clearInterval(deleting);
                
                current_index++;

                if (current_index >= text_list.length) {
                    current_index = 0;
                }

                startWriting();
                return;
            }

            chars_on_screen.pop();
            element.textContent = chars_on_screen.join("");

        }, interval_delete);
    }

    if (element) {
        startWriting();
    }
}


// Debounce of Lodash
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};


// Animate On Scroll
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.scrollY + (window.innerHeight * 1);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 50));
}


// Modal Informations
const ValButtons = document.querySelectorAll(".Info-Modal");
const Modal_Array = [".html_modal", ".css_modal", ".js_modal", ".ts_modal", ".py_modal", ".nodejs_modal", ".bs_modal", ".jq_modal", ".react_modal", ".vite_modal", ".tw_modal",".dj_modal",".php_modal",".mysql_modal"];

ValButtons.forEach(function(AllClicks) {
    AllClicks.onclick = function () {
        const SkillsName = AllClicks.firstChild.classList[2];

        switch (SkillsName) {
            case "html": const modal_html = document.querySelector(Modal_Array[0]); modal_html.showModal(); break;
            case "css": const modal_css = document.querySelector(Modal_Array[1]); modal_css.showModal(); break;
            case "js": const modal_js = document.querySelector(Modal_Array[2]); modal_js.showModal(); break;
            case "ts": const modal_ts = document.querySelector(Modal_Array[3]); modal_ts.showModal(); break;
            case "py": const modal_py = document.querySelector(Modal_Array[4]); modal_py.showModal(); break;
            case "nodejs": const modal_nodejs = document.querySelector(Modal_Array[5]); modal_nodejs.showModal(); break;
            case "bs": const modal_bs = document.querySelector(Modal_Array[6]); modal_bs.showModal(); break;
            case "jq": const modal_jq = document.querySelector(Modal_Array[7]); modal_jq.showModal(); break;
            case "react": const modal_react = document.querySelector(Modal_Array[8]); modal_react.showModal(); break;
            case "vite": const modal_vite = document.querySelector(Modal_Array[9]);modal_vite.showModal(); break;
            case "tw": const modal_tw = document.querySelector(Modal_Array[10]);modal_tw.showModal(); break;
            case "dj": const modal_dj = document.querySelector(Modal_Array[11]); modal_dj.showModal(); break;
            case "php": const modal_php = document.querySelector(Modal_Array[12]); modal_php.showModal(); break;
            case "sql": const modal_mysql = document.querySelector(Modal_Array[13]); modal_mysql.showModal(); break;
            default: console.log("Error!! Please reload the page.");
        }

        document.body.style.overflow = "hidden";
    }
});

function CloseBtn() {
    for(let i = 0; i < 14; i++){
        const CloseButtons = document.querySelector(Modal_Array[i]);
        
        CloseButtons.close();
    }

    document.body.style.overflow = null;
}


// Show an alert when submitting a form
function Snd_Msg() {
    alert("Message sent successfully!");
}


// Visible scroll top button
window.addEventListener("scroll", function() {
    const scrolltop = document.querySelector(".ScrollTop");
    scrolltop.classList.toggle("active", window.scrollY > 600);
})


// Slider navigation auto
let count = 1;

const radioSlides = document.querySelectorAll(".radio-slides");

radioSlides.forEach(function(radioClicks) {
    radioClicks.onclick = function () {
        const radioIdInfo = radioClicks.id;

        switch (radioIdInfo) {
            case "Experience_1": count = 1; break;
            case "Experience_2": count = 2; break;
            case "Experience_3": count = 3; break;
            case "Experience_4": count = 4; break;
            case "Experience_5": count = 5; break;
        }
    }
})

setInterval( function(){
    nextExperience();
}, 8000);

function nextExperience() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById("Experience_"+count).checked = true;
}