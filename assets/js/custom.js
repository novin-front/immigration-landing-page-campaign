let startTime = 120;
let minutes = (startTime >= 60) && ((startTime % 60) === 0) ? Math.floor(startTime / 60) - 1 : Math.floor(startTime / 60);
let seconds = ((startTime % 60) === 0) ? (startTime % 60) + 60 : startTime % 60;
let secondString = (seconds <= 10) ? `0${seconds}` : seconds;
let minutString = (minutes <= 10) ? `0${minutes}` : minutes;
let timeinterval;
let otpCode = "";
let baseUrl = "http://localhost/"

$(document).ready(function() {
    let countfalse = true;
    if (window.innerWidth < 768) {
        $("#navbar-brand-id").attr("src", "assets/image/logo-mobile.png")
    }
    if (window.innerWidth > 920) {
        $(".btn-whatsapp").attr("href", "https://web.whatsapp.com/send?phone=989199196011")
    } else {
        $(".btn-whatsapp").attr("href", "https://wa.me/+989199196011")
    }

    if (window.innerWidth > 920) {
        $(".btn-whatsapp").attr("href", "https://web.whatsapp.com/send?phone=989199196011")
    } else {
        $(".btn-whatsapp").attr("href", "https://wa.me/+989199196011")
    }
    $(window).on("resize", function() {
        if (window.innerWidth < 768) {
            $("#navbar-brand-id").attr("src", "assets/image/logo-mobile.png")
        }
        if (window.innerWidth > 920) {
            $(".btn-whatsapp").attr("href", "https://web.whatsapp.com/send?phone=989199196011")
        } else {
            $(".btn-whatsapp").attr("href", "https://wa.me/+989199196011")
        }
    });
    $("#navbar-toggler-btn").click(function() {
        $("body").addClass("body-overflow");
        $(".mobile-nav-wrapper").toggleClass("show")
    })
    $("#mobile-menu-close").click(function() {
        $(".mobile-nav-wrapper").removeClass("show")
        $("body").removeClass("body-overflow");
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 250) {
            $(".mobile-call-to-action-box").removeClass("scroll");
        } else if ($(window).scrollTop() <= 250) {
            $(".mobile-call-to-action-box").addClass("scroll");
        }
    })

    if ($(window).scrollTop() >= 80) {
        $("#main-nav-bar-id").addClass("scroll");
        $(".navbar-brand").css({
            width: "75px"
        })

    }
    var top = 0;
    let socialBtnOffsetTop = $("#social-sidebar").offset();
    $(window).on('scroll', function() {

        if ($(window).scrollTop() >= 80) {
            $("#main-menu").addClass("scroll");
            $(".navbar-brand").css({
                width: "120px"
            })
            $("#navbar-brand-id").attr("src", "assets/image/logo-em.png");
            $("#call-btn-main-menu").addClass("btn-border-brown");
            $("#call-btn-main-menu").removeClass("btn-border");

            $("#navbar-toggler").addClass("btn-border-brown");
            $("#navbar-toggler").removeClass("btn-border");
        } else if ($("#main-menu").hasClass("scroll") && $(window).scrollTop() <= 80) {
            $("#main-menu").removeClass("scroll");
            if (window.innerWidth > 768) {
                $(".navbar-brand").css({
                    width: "140px"
                })
            } else {
                $(".navbar-brand").css({
                    width: "100px"
                })
                $("#navbar-brand-id").attr("src", "assets/image/logo-mobile.png");
            }
            $("#call-btn-main-menu").removeClass("btn-border-brown");
            $("#call-btn-main-menu").addClass("btn-border");

            $("#navbar-toggler").removeClass("btn-border-brown");
            $("#navbar-toggler").addClass("btn-border");
        }
        $("#main-menu").toggleClass("hide", $(window).scrollTop() > top);
        top = $(window).scrollTop();


        if (window.innerWidth < 769) {
            if ($(window).scrollTop() >= 250) {
                $(".call-to-action-row-mobile").addClass("scroll");
            } else if ($(window).scrollTop() <= 250) {
                $(".call-to-action-row-mobile").removeClass("scroll");

            }
        }

    });




    $('.list-comments-slider-wapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: true,
        arrows: false,
        // nextArrow: '<button class="screen-shot-btn btn-right-aw"><span class="icon-arrow-right"></span></button>',
        // prevArrow: '<button class="screen-shot-btn btn-left-aw"><span class="icon-arrow-left"></span></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $(".nav-link").on('click', function(event) {
        var parent = $(this).parent();
        $("#list-content-main li").each(function() {
            $(this).removeClass("active");
        });
        $(parent).addClass("active");
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });






    var top = 0;
    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 50) {
            $("#p-l-main-nav-bar-id").addClass("scroll");
            if (window.innerWidth < 768) {
                $(".menu-top-icons-t").hide();
            }
        } else if ($(window).scrollTop() <= 50) {
            if (window.innerWidth < 768) {
                $(".menu-top-icons-t").show();
            }
            $("#p-l-main-nav-bar-id").removeClass("scroll");
            /* $(".navbar-brand").css({
                width:"100px"
            }) */
        }
        // $("#main-nav-bar-id").toggleClass("hide", $(window).scrollTop() > top);
        top = $(window).scrollTop();



    });




    $("#emigration-campaign-send").on("click", function(event) {
        event.preventDefault();
        $("#form-emigration-campaign .show-error-row").empty();
        if ($("#description").val().length > 0) {
            if ($("#description").val().length > 2 && $("#description").val().length < 2000) {
                $(".des-input-msg-row").empty()
            } else {
                $(".des-input-msg-row").append(createErrorBox("مقدار وارد شده برای فیلد توضیحات درست نیست"));
            }
        }
        if (checkIsValidInputValue("#form-emigration-campaign")) {
            let data = {};
            data.mobile = faNumberConvertToEn($("#mobile").val());
            data.fullName = $("#fullName").val();
            data.description = $("#description").val();
            $(`[name='emigrationType']`).each(function() {
                if ($(this).is(":checked")) {
                    data.emigrationType = $(this).val();
                }
            });
            $.ajax({
                async: false,
                type: "POST",
                url: baseUrl + "wp-json/emigration-campaign/v1/save-data",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(response) {
                    if (response.success) {
                        $("#form-emigration-campaign .show-error-row").append(createAlertMsg(response.message, "success"))
                        setTimeout(() => {
                            $('#content-forms-modal').modal('toggle');
                            setTimeout(() => {
                                $('#success-forms-modal').modal('toggle');
                            }, 500);
                        }, 2000);
                    } else {
                        $("#form-emigration-campaign .show-error-row").append(createAlertMsg(response.message, "error"))
                        if (response.validate_error.length) {
                            response.validate_error.map((error) => {
                                $("#form-emigration-campaign .show-error-row").append(createAlertMsg(error.message, "error"))
                            })
                        }
                    }
                },
                error: function(error) {
                    $("#form-emigration-campaign .show-error-row").append(createAlertMsg("در ثبت اطلاعات خطایی رخ داده است لطفا بعدا تلاش نمایید", "error"))
                }
            });

        }
    });





    function getParamtrsInUrl(arrayParams) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let paramsObj = {};

        arrayParams.forEach(params => {
            paramsObj[`${params}`] = urlParams.get(`${params}`);
        });
        if (arrayParams.length < 2) {
            return urlParams.get(`${arrayParams[0]}`);
        }
        return paramsObj;
    }

    function resetTimer() {
        startTime = 119;
        clearInterval(timeinterval);
        minutes = (startTime >= 60) && ((startTime % 60) === 0) ? Math.floor(startTime / 60) - 1 : Math.floor(startTime / 60);
        seconds = ((startTime % 60) === 0) ? (startTime % 60) + 60 : startTime % 60;
        secondString = (seconds <= 10) ? `0${seconds}` : seconds;
        minutString = (minutes <= 10) ? `0${minutes}` : minutes;
        document.getElementById("seconds").innerHTML = `${secondString}`;
        document.getElementById("minutes").innerHTML = `${minutString}`;
        $("#otp-validation-btn").show()
        $("#get-new-otp-btn").hide();
        timeinterval = setInterval(updateTimer, 1000)
    }

    function updateTimer() {
        seconds--;
        secondString = (seconds < 10) ? `0${seconds}` : seconds;
        minutString = (minutes < 10) ? `0${minutes}` : minutes;
        document.getElementById("seconds").innerHTML = `${secondString}`;
        document.getElementById("minutes").innerHTML = `${minutString}`;
        startTime--;
        if (startTime <= 0) {
            startTimeChecker();
            $("#otp-validation-btn").hide()
            $("#get-new-otp-btn").show()
            clearInterval(timeinterval);
        } else {
            if (minutes > 0 && seconds === 0) {
                seconds = 60;
                minutes--;
            }
        }
    }

    function startTimeChecker() {
        if (startTime > 0) {
            return true;
        }

    }

    function checkPasswordEquality(password, repeatPassword) {
        if ($(password).val() === $(repeatPassword).val()) {
            $(repeatPassword).removeClass("input-error-auth");
            $(repeatPassword).parent().removeClass("group-error-auth");
            $(repeatPassword).parents(".form-group").children(".input-msg-row").empty();
            return true;
        } else {
            $(repeatPassword).addClass("input-error-auth");
            $(repeatPassword).parent().addClass("group-error-auth");
            $(repeatPassword).parents(".form-group").children(".input-msg-row").append(createErrorBox("کلمه عبور با تکرار آن برابر نیست"))
            return false;
        }
    }

    function checkIsValidInputValue(formSelector) {
        let emptyInput = 0;
        let inputSelector = [];
        $(formSelector + " input").each(function() {
            $(this).val(faNumberConvertToEn($(this).val()))
            let inputName = $(this).attr("name");
            let inputValue = $(this).val();
            $(this).parents(".form-group").children(".input-msg-row").empty();
            switch (true) {
                case inputValue === "":
                    if (IsValidFullName(inputValue)) {
                        $(this).removeClass("input-error-auth");
                        $(this).parent().removeClass("group-error-auth");
                        $(this).parents(".form-group").children(".input-msg-row").empty();
                    } else {
                        emptyInput++;
                        $(this).addClass("input-error-auth");
                        $(this).parent().addClass("group-error-auth");
                        $(this).parents(".form-group").children(".input-msg-row").append(createErrorBox("مقدار این فیلد اجباری است"));
                        inputSelector.push("#" + $(this).attr("id"))
                    }
                    break;
                case inputName === "fullName":
                    if (IsValidFullName(inputValue)) {
                        $(this).removeClass("input-error-auth");
                        $(this).parent().removeClass("group-error-auth");
                        $(this).parents(".form-group").children(".input-msg-row").empty();
                    } else {
                        emptyInput++;
                        $(this).addClass("input-error-auth");
                        $(this).parent().addClass("group-error-auth");
                        $(this).parents(".form-group").children(".input-msg-row").append(createErrorBox("نام و نام خانوادگی وارد شده اشتباه است "))
                        inputSelector.push("#" + $(this).attr("id"))
                    }
                    break;
                case inputName === "mobile":
                    $(this).parent().siblings(".input-icons-group").empty()
                    if (IsValidPhoneNumber(inputValue)) {
                        $(this).removeClass("input-error-auth");
                        $(this).parent().removeClass("group-error-auth");
                        $(this).parents(".form-group").children(".input-msg-row").empty();
                    } else {
                        emptyInput++;
                        $(this).addClass("input-error-auth");
                        $(this).parent().addClass("group-error-auth");
                        $(this).parent().siblings(".input-icons-group").empty()
                        $(this).parents(".form-group").children(".input-msg-row").append(createErrorBox("شماره موبایل وارد شده اشتباه است"))
                        inputSelector.push("#" + $(this).attr("id"))
                    }
                    break;
                case inputName === "emigrationType":
                    if (isValedRadio(inputName)) {
                        $(this).removeClass("input-error-auth");
                        $(this).parent().removeClass("group-error-auth");
                        $(this).parents(".form-group").children(".input-msg-row").empty();
                        $(this).siblings(".input-info-wrapper").remove()
                    } else {
                        emptyInput++;
                        $(this).addClass("input-error-auth");
                        $(this).parent().addClass("group-error-auth");
                        $(this).parents(".form-group").children(".input-msg-row").append(createErrorBox("لطفا نوع مهاجرت را انتخاب نمایید"))
                        inputSelector.push("#" + $(this).attr("id"))
                    }
                    break;

                default:
                    break;
            }

        })

        if (emptyInput) {
            $(inputSelector[0]).focus();
            return false;
        } else {
            return true;
        }

    }

    function convertArrayToString(array) {
        return array.join(",").replace(/,/g, "");
    }

    function faNumberConvertToEn(phonnumber) {
        let mobilearray = phonnumber.split(''); // empty string separator
        let number_P_E = {
            '۰': 0,
            '۱': 1,
            '۲': 2,
            '۳': 3,
            '۴': 4,
            '۵': 5,
            '۶': 6,
            '۷': 7,
            '۸': 8,
            '۹': 9
        };
        let EnArrayNumber = []
        mobilearray.map((number) => {
            if (number_P_E[number] !== undefined) {
                EnArrayNumber.push(number_P_E[number])
            } else {
                EnArrayNumber.push(number)
            }
        });
        return convertArrayToString(EnArrayNumber)
    }

    function createErrorBox(textErorr) {
        let row = ` <div class="input-error-wrapper">
                          <small class="error-msg">${textErorr}</small>
                        </div>`;
        return row;
    }

    function createInfoBox(textErorr) {
        let row = ` <div class="input-info-wrapper">
                          <small class="info-msg">${textErorr}</small>
                        </div>`;
        return row;
    }

    function createSuccessBox(textErorr) {
        let row = ` <div class="input-info-wrapper">
                          <small class="success-msg">${textErorr}</small>
                        </div>`;
        return row;
    }

    function createAlertMsg(msgText, msgType) {
        let alertClass = "";
        let row = ``;
        switch (true) {
            case msgType === "success":
                alertClass = "alert-success"
                break;
            case msgType === "error":
                alertClass = "alert-danger"
                break;
            case msgType === "warning":
                alertClass = "alert-warning"
                break;
            default:
                alertClass = "alert-info"
                break;
        }
        return row = `<div class="alert ${alertClass}">${msgText}</div>`
    }

    function stick_social(sidebarSelector, fixedClass, absoluteClass, postContainer) {
        let window_top = $(window).scrollTop();
        let singlePostContent = $(postContainer).innerHeight()
        if (window_top > 670) {
            $(sidebarSelector).addClass(fixedClass);
        } else {
            $(sidebarSelector).removeClass(fixedClass);
        }
        if (window_top >= singlePostContent) {
            $(sidebarSelector).addClass(absoluteClass);
            $(sidebarSelector).removeClass(fixedClass);
        } else {
            $(sidebarSelector).removeClass(absoluteClass);
            if (window_top > 670) {
                $(sidebarSelector).addClass(fixedClass);
            }
        }
    }

    function checkWidthSidebar(sidebarSelector, classList) {
        if (window.innerWidth < 770) {

            classList.map((item) => {
                $(sidebarSelector).removeClass(item)
            })
        }
    }

    function IsValidPhoneNumber(value) {
        return /^(\+98|0)?9\d{9}$/g.test(
            value,
        );
    };

    function IsValidPassword(value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value);
    }

    function IsValidEmail(value) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm.test(value);
    }

    function IsValidFullName(value) {
        return /^[a-zA-Z پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/g.test(value);
    }

    function isValedRadio(selector) {
        let isValid = false;
        $(`[name='${selector}']`).each(function() {
            if ($(this).is(":checked")) {
                isValid = true;
            }
        });
        return isValid;
    }

    function cuonUpFunction() {
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum + " + ");
                        //alert('finished');
                    }

                });
        });
    }





});

function generateRandomNumber() {
    return Math.floor(Math.random() * 100000);
}

function createCommandBox() {
    let commentWapperId = "comment-form-" + generateRandomNumber();

    let row = `<div class="comment-form-replay contact-form" id="${commentWapperId}">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <label class="write-comment-lable" for="fname">نام و نام خانوادگی</label>
                        <input type="text" class="form-control-custom" id="fname" placeholder="مثال : افشین زندی" name="fname">
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="write-comment-lable " for="email">ایمیل</label>
                        <input type="email" class="form-control-custom" id="email" placeholder="name@domain.com" name="email">
                        <small class="input-info-text"> پاسخ نظر شما از طریق ایمیل برای شما ارسال میگردد</small>
                    </div>
                </div>
                <div class="col-12 p-0">
                    <label class="write-comment-lable" for="comment">متن پيغام شما</label>
                    <textarea class="form-control-custom" placeholder="در اينجا متن پيغام خود را وارد نماييد." rows="5" id="comment"></textarea>
                </div>
                <div class="form-group pt-4">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn-custom analytips-orange py-2">ارسال دیدگاه</button>
                        <button class="btn-custom analytips-border mx-2 coment-btn-close" data-parentid="#${commentWapperId}"><span>بستن</span></button>
                    </div>
                </div>
              </div>`;
    return row;
}