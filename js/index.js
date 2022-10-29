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
            if (element.textContent === 'Сервера') {
                e.preventDefault();
                window.scroll({
                    top: 3493,
                    left: 0,
                    behavior: 'smooth'
                });
            }

            if (element.textContent === 'Скачать') {
                e.preventDefault();
                if (download[0].classList.value === 'download hidden' && document.documentElement.clientWidth > 1201) {
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

            if (element.textContent === 'Открыть в браузере') {
                e.preventDefault();
                window.scroll({
                    top: 2708,
                    left: 0,
                    behavior: 'smooth'
                });
            }

            if (element.textContent === 'Цены') {
                e.preventDefault();
                window.scroll({
                    top: 1800,
                    left: 0,
                    behavior: 'smooth'
                });
            }

            if (element.textContent === 'Тех поддержка' || element.textContent === 'Контакты') {
                e.preventDefault();
                if (contacts[0].classList.value === 'contacts hidden' && document.documentElement.clientWidth > 1201) {
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
}

showElements();

//Временно
/*window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
});*/