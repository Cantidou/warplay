function showElements() {
    const burger = document.getElementsByClassName('burger');
    const arrow = document.getElementById('arrowNav');
    const navigation = document.getElementsByClassName('nav_block');
    const navListItem = Array.from(document.getElementsByClassName('nav_list_item'));
    const aside = document.getElementsByTagName('aside');
    const download = document.getElementsByClassName('download');
    const arrowDownload = document.getElementById('arrowDownload');
    const contacts = document.getElementsByClassName('contacts');
    const arrowContacts = document.getElementById('arrowContacts');

//Управление навигацией
    navListItem.forEach(element => {
        element.addEventListener('click', e => {
            if (element.textContent === 'Сервера' && document.documentElement.clientWidth > 1201) {
                e.preventDefault();
                window.scroll({
                    top: 3493,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (element.textContent === 'Сервера' && document.documentElement.clientWidth < 1201) {
                e.preventDefault();
                navigation[0].classList.add('hidden');
                navigation[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
                window.scroll({
                    top: 5660,
                    left: 0,
                    behavior: 'smooth'
                });
            }

            if (element.textContent === 'Скачать') {
                e.preventDefault();
                if (download[0].classList.value === 'download hidden') {
                    if (document.documentElement.clientWidth < 1201) {
                        navigation[0].classList.add('hidden');
                        navigation[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
                    }
                    download[0].classList.remove('hidden');
                    download[0].style = 'display: block;';
                    aside[0].style = 'transform: translateX(100%); transition: transform 0.2s ease-in-out;';
                    arrowDownload.addEventListener('click', e => {
                        download[0].classList.add('hidden');
                        download[0].style = 'display: none;';
                        aside[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
                    })
                }
            }

            if (element.textContent === 'Открыть в браузере' && document.documentElement.clientWidth > 1201) {
                e.preventDefault();
                window.scroll({
                    top: 2708,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (element.textContent === 'Открыть в браузере' && document.documentElement.clientWidth < 1201) {
                e.preventDefault();
                navigation[0].classList.add('hidden');
                navigation[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
                window.scroll({
                    top: 4308,
                    left: 0,
                    behavior: 'smooth'
                });
            }

            if (element.textContent === 'Цены' && document.documentElement.clientWidth > 1201) {
                e.preventDefault();
                window.scroll({
                    top: 1800,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (element.textContent === 'Цены' && document.documentElement.clientWidth < 1201) {
                e.preventDefault();
                navigation[0].classList.add('hidden');
                navigation[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
                window.scroll({
                    top: 2400,
                    left: 0,
                    behavior: 'smooth'
                });
            }

            if (element.textContent === 'Тех поддержка' || element.textContent === 'Контакты') {
                e.preventDefault();
                if (contacts[0].classList.value === 'contacts hidden') {
                    if (document.documentElement.clientWidth < 1201) {
                        navigation[0].classList.add('hidden');
                        navigation[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
                    }
                    contacts[0].classList.remove('hidden');
                    contacts[0].style = 'display: block;';
                    aside[0].style = 'transform: translateX(100%); transition: transform 0.2s ease-in-out;';
                    arrowContacts.addEventListener('click', e => {
                        contacts[0].classList.add('hidden');
                        contacts[0].style = 'display: none;';
                        aside[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
                    })
                }
            }
        })
    });
//Кнопочки, стрелочки
    burger[0].addEventListener('click', e => {
        if (navigation[0].classList.value === "nav_block hidden" && document.documentElement.clientWidth > 1201) {
            navigation[0].classList.remove('hidden');
            navigation[0].style = 'transform: translateY(124px); transition: transform 0.2s ease-in-out;';
        }
        if (navigation[0].classList.value === "nav_block hidden" && document.documentElement.clientWidth < 1201) {
            navigation[0].classList.remove('hidden');
            navigation[0].style = 'transform: translateX(100%); transition: transform 0.2s ease-in-out;';
        }
    })

    arrow.addEventListener('click', e => {
        if (navigation[0].classList.value === "nav_block" && document.documentElement.clientWidth > 1201) {
            navigation[0].classList.add('hidden');
            navigation[0].style = 'transform: translateY(-124px); transition: transform 0.2s ease-in-out;';
        }
        if (navigation[0].classList.value === "nav_block" && document.documentElement.clientWidth < 1200) {
            navigation[0].classList.add('hidden');
            navigation[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
        }
    })
//Кнопки на странице
    document.getElementById('download').onclick = (e) => {
        e.preventDefault();
        if (download[0].classList.value === 'download hidden') {
            if (document.documentElement.clientWidth < 1201) {
                navigation[0].classList.add('hidden');
                navigation[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
            }
            download[0].classList.remove('hidden');
            download[0].style = 'display: block;';
            aside[0].style = 'transform: translateX(100%); transition: transform 0.2s ease-in-out;';
            arrowDownload.addEventListener('click', e => {
                download[0].classList.add('hidden');
                download[0].style = 'display: none;';
                aside[0].style = 'transform: translateX(-100%); transition: transform 0.2s ease-in-out;';
            })
        }
    }
}

showElements();

//Переключение бэкграунда
let currentBackgroundImage = 0;

function newBackgroundImages () {
    if (document.documentElement.clientWidth > 1201) {
        const headerContainer = document.getElementsByClassName('header_container')[0];
        const backgroundImages = {
            images: ["../../images/header-background-desktop.png",
                    "../../images/header-background-desktop-2.png",
                    "../../images/header-background-desktop-3.png",
                    "../../images/header-background-desktop-4.png"]
        }

        if (currentBackgroundImage < 3) {
            currentBackgroundImage++;
        } else {
            currentBackgroundImage = 0;
        }

        headerContainer.style = `transition: background-image 5s; background-image: url("${backgroundImages.images[currentBackgroundImage]}");`;
    }
}

setInterval(newBackgroundImages, 5000);


//Временно
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
});