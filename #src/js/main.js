var mySwiper = new Swiper('.bakery-main-slider .swiper-container', {
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 10,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }

});


function Burger(burger, menu) {
    this.burger = burger
    this.menu = menu
    let self = this
    this.burger.setAttribute('data-burger', 'data-burger')
    this.menu.setAttribute('data-burger', 'data-burger')
    Array.from(this.burger.querySelectorAll('*')).forEach(el => {
        el.setAttribute('data-burger', 'data-burger')
    })
    Array.from(this.menu.querySelectorAll('*')).forEach(el => {
        el.setAttribute('data-burger', 'data-burger')
    })

    this.burger.onclick = function (e) {
        document.body.classList.toggle('overflow-js')
        self.menu.classList.toggle('active')
        this.classList.toggle('open')
        window.addEventListener('scroll', noScroll)
    }
    document.onclick = function (e) {
        if (e.target.hasAttribute('data-burger')) {

        } else {
            self.burger.classList.remove('open')
            self.menu.classList.remove('active')
            document.body.classList.remove('overflow-js')
        }
    }

    function noScroll(e) {
        // console.log(e)
    }
}

let headerBurger = new Burger(
    document.querySelector('.burger-wrapper'),
    document.querySelector('.header-navigation')
)


let _isComplete;
$(function () {
    $('input[type="tel"]').inputmask({
        mask: "+7(999) 999-99-99",
        regex: "^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$",
        clearIncomplete: !0,
        isComplete: function (e, a) {
            _isComplete = new RegExp(a.regex).test(e.join(""))
        }
    }).bind("input", function (e) {
        if ($(this).val().indexOf('+7(7') == 0 || $(this).val().indexOf('+7(8') == 0) {
            $(this).val("");
        }
    }).bind("focusout", function () {
        _isComplete || $(this).val("")
    });
    $('input[type="tel"]').each(function () {
        $(this).keypress(function (e, a) {
            if ((e.which == 13) || (e.keyCode == 13)) {
                $(this).blur();
            }
            return true;
        });
    });
});
$('.header form').validate({
    invalidHandler: function() {
        console.log(this.classList.add('has-error'))
    },
    submitHandler: function(form, event) {

        event.preventDefault();

        console.log(form)

        let formData = new FormData(form);

        axios
            .post('./js/mail.php', formData)
            .then(response => {
                console.log(response);
                if(response.data == true){
                    $.fancybox.open({
                        src  : '#thank-modal',
                        type : 'inline',
                    });
                } else {
                    $.fancybox.open({
                        src  : '#failed-submit',
                        type : 'inline',
                    });
                }
            })
            .catch(err => {
                $.fancybox.open({
                    src  : '#failed-submit',
                    type : 'inline',
                });
            })
    },
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true,
        }
    },
    messages: {
        email: {
            required: 'Поле обязательно для заполнения',
            email: 'Введите корректный email'
        },
        name: {
            required: 'Поле обязательно для заполнения'
        },
        tel: {
            required: 'Поле обязательно для заполнения'
        }
    }
})

$('.contacts form').validate({
    invalidHandler: function() {
        console.log(this.classList.add('has-error'))
    },
    submitHandler: function(form, event) {

        event.preventDefault();

        console.log(form)

        let formData = new FormData(form);

        axios
            .post('./js/mail.php', formData)
            .then(response => {
                console.log(response);
                if(response.data == true){
                    $.fancybox.open({
                        src  : '#thank-modal',
                        type : 'inline',
                    });
                } else {
                    $.fancybox.open({
                        src  : '#failed-submit',
                        type : 'inline',
                    });
                }
            })
            .catch(err => {
                $.fancybox.open({
                    src  : '#failed-submit',
                    type : 'inline',
                });
            })
    },
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true,
        }
    },
    messages: {
        email: {
            required: 'Поле обязательно для заполнения',
            email: 'Введите корректный email'
        },
        name: {
            required: 'Поле обязательно для заполнения'
        },
        tel: {
            required: 'Поле обязательно для заполнения'
        }
    }
})
