$(document).on('click', 'a[href^="#"]', function(event) {
    let $page = $('html, body');
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 3000);
    return false;

    window.setTimeout(function() {
        offsetAnchor();
    }, 0);

});

    const header = document.querySelector('#opensea')
    let height = $('#opensea').height();
    let heightto = $('.header_second_row ').height();
$(document).scroll(function(){
        if(window.scrollY > height){
            $('.new_header').css('display', 'flex')
            $('.new_header').css('position', 'fixed')
            $('.new_header').css('top', '0')
            $('.new_header').css('left', '0')
            $('.new_header').css('right', '0')
            $('.new_header').css('background-color', '#752629')
            $('.new_header').css('max-width', '100%')
            $('.new_header').css('height', heightto * 3)
            $('.new_header').css('justify-content', 'space-between')
            $('.new_header').css('align-items', 'center')
            $('.new_header').css('font-size', '1.3vw')
            $('.new_header').css('font-weight', '300')
            $('.new_header').css('z-index', '999999999')
        }
        else{
            $('.new_header').css('display', 'none')
        }
})





let header_button = document.querySelector(".header_button")
let cnt = 0
$(header_button).click(function(){
    cnt++
    let ham = $('.hamburger')
    let item = $('.item')
    if(cnt % 2 != 0){
        ham.css('display', 'flex')
        ham.css('flex-direction', 'column')
        ham.css('left', '0px')
        ham.css('background-color', '#752629')
        ham.css('height', '10vh')
        ham.css('padding', '5vh 10vw')
        item.css('font-size', '2.5vw')
    }
    else{
        ham.css('display', 'none')
        ham.css('left', '-999px')
    }
})


function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let photo_mas = [], phone_photo_mas = []
for(let i = 0; i < 45; i++){
    photo_mas[i] = i;
    phone_photo_mas[i] = photo_mas[i]
}



function removeItem(arr, value) {
    arr.splice(value, 1);
    return arr;
}

function EditAll(){
    for(let i = 0; i < 15; i++){
        const gallery_phone_list = document.querySelector('.gallery_phone_list')
        let random = generateRandomInteger(1, phone_photo_mas.length)
        gallery_phone_list.insertAdjacentHTML('beforeend',

        `

            <div class="phone_gallery_list_img${i} phone_gallery_list_img"></div>

        `

        )

        let phone_gallery_list_img = document.querySelector(`.phone_gallery_list_img${i}`)
        $(phone_gallery_list_img).css('background-image', `url(img/insta_img${phone_photo_mas[random]}.jpg)`)
        $(phone_gallery_list_img).css('background-size', 'cover')
        phone_photo_mas = removeItem(phone_photo_mas, random)
    }


    for(let i = 0; i < 15; i++){
        const gallery_phone_list_reversed = document.querySelector('.gallery_phone_list_reversed')
        let random = generateRandomInteger(1, phone_photo_mas.length)
        gallery_phone_list_reversed.insertAdjacentHTML('beforeend',

        `

            <div class="phone_gallery_list_img2${i} phone_gallery_list_img"></div>

        `

        )

        let phone_gallery_list_img1 = document.querySelector(`.phone_gallery_list_img2${i}`)
        $(phone_gallery_list_img1).css('background-image', `url(img/insta_img${phone_photo_mas[random]}.jpg)`)
        $(phone_gallery_list_img1).css('background-size', 'cover')
        phone_photo_mas = removeItem(phone_photo_mas, random)
    }


    for(let i = 0; i < 15; i++){
        const gallery_phone_list_third = document.querySelector('.gallery_phone_list_third')
        let random = generateRandomInteger(1, phone_photo_mas.length - 1)
        gallery_phone_list_third.insertAdjacentHTML('beforeend',

        `

            <div class="phone_gallery_list_img3${i} phone_gallery_list_img"></div>

        `

        )

        let phone_gallery_list_img1 = document.querySelector(`.phone_gallery_list_img3${i}`)
        $(phone_gallery_list_img1).css('background-image', `url(img/insta_img${phone_photo_mas[random]}.jpg)`)
        $(phone_gallery_list_img1).css('background-size', 'cover')
        phone_photo_mas = removeItem(phone_photo_mas, random)
    }






    for(let i = 0; i < 15; i++){
        const gallery_rect = document.querySelector('.gallery_rect')
        let random = generateRandomInteger(1, photo_mas.length)
        gallery_rect.insertAdjacentHTML('beforeend',

        `

            <div class="gallery_list_img3${i} gallery_list_img"></div>

        `

        )

        let gallery_list_img = document.querySelector(`.gallery_list_img3${i}`)
        $(gallery_list_img).css('background-image', `url(img/insta_img${photo_mas[random]}.jpg)`)
        $(gallery_list_img).css('background-size', 'cover')
        photo_mas = removeItem(photo_mas, random)
    }

    for(let i = 0; i < 15; i++){
        const gallery_rect2 = document.querySelector('.gallery_rect2')
        let random = generateRandomInteger(1, photo_mas.length)
        gallery_rect2.insertAdjacentHTML('beforeend',

        `

            <div class="gallery_list_img5${i} gallery_list_img"></div>

        `

        )

        let gallery_list_img = document.querySelector(`.gallery_list_img5${i}`)
        $(gallery_list_img).css('background-image', `url(img/insta_img${photo_mas[random]}.jpg)`)
        $(gallery_list_img).css('background-size', 'cover')
        photo_mas = removeItem(photo_mas, random)
    }

    for(let i = 0; i < 14; i++){
        const gallery_rect2 = document.querySelector('.gallery_rect3')
        let random = generateRandomInteger(1, photo_mas.length)
        gallery_rect2.insertAdjacentHTML('beforeend',

        `

            <div class="gallery_list_img7${i} gallery_list_img"></div>

        `

        )

        let gallery_list_img = document.querySelector(`.gallery_list_img7${i}`)
        $(gallery_list_img).css('background-image', `url(img/insta_img${photo_mas[random]}.jpg)`)
        $(gallery_list_img).css('background-size', 'cover')
        photo_mas = removeItem(photo_mas, random)
    }
}

EditAll();

function CloneAll(){
    let gallery = document.querySelector('.gallery_all')
, glist = document.querySelector('.gallery_rect')
, gclone = glist.cloneNode(true)
gallery.append(gclone)


let gallery2 = document.querySelector('.gallery_all2')
, glist2 = document.querySelector('.gallery_rect2')
, gclone2 = glist2.cloneNode(true)
gallery2.append(gclone2)

let gallery3 = document.querySelector('.gallery_all3')
, glist3 = document.querySelector('.gallery_rect3')
, gclone3 = glist3.cloneNode(true)
gallery3.append(gclone3)

let ticker_wrapper_h = document.querySelector('.ticker-wrapper-h')
 , news_ticker_h_list = document.querySelector('.news-ticker-h')
 , news_ticker_h_clone = news_ticker_h_list.cloneNode(true)
 ticker_wrapper_h.append(news_ticker_h_clone)


let gallery_animation = document.querySelector('.gallery_animation'),
gallery_phone_list = document.querySelector('.gallery_phone_list'),
gallery_phone_list_clone = gallery_phone_list.cloneNode(true)
gallery_animation.append(gallery_phone_list_clone)

let gallery_animation_reversed = document.querySelector('.gallery_animation_reversed'),
gallery_phone_list_reversed = document.querySelector('.gallery_phone_list_reversed'),
gallery_phone_list_clone_reversed = gallery_phone_list_reversed.cloneNode(true)
gallery_animation_reversed.append(gallery_phone_list_clone_reversed)


let gallery_animation_third = document.querySelector('.gallery_animation_third'),
gallery_phone_list_third = document.querySelector('.gallery_phone_list_third'),
gallery_animation_clone_third = gallery_phone_list_third.cloneNode(true)
gallery_animation_third.append(gallery_animation_clone_third)


let ticker = document.querySelector('.ticker')
, list = document.querySelector('.ticker__list')
, clone = list.cloneNode(true)
ticker.append(clone)
}

CloneAll()















