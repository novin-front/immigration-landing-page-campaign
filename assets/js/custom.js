let startTime = 120;
let minutes = (startTime >= 60) && ((startTime % 60) === 0) ? Math.floor(startTime / 60) - 1 : Math.floor(startTime / 60);
let seconds = ((startTime % 60) === 0) ? (startTime % 60) + 60 : startTime % 60;
let secondString = (seconds <= 10) ? `0${seconds}` : seconds;
let minutString = (minutes <= 10) ? `0${minutes}` : minutes;
let timeinterval;
let otpCode = "";
$(document).ready(function () {
  let countfalse = true;
  $("#navbar-toggler-btn").click(function () {
    $("body").addClass("body-overflow");
    $(".mobile-nav-wrapper").toggleClass("show")
  })
  $("#mobile-menu-close").click(function () {
    $(".mobile-nav-wrapper").removeClass("show")
    $("body").removeClass("body-overflow");
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 250) {
      $(".mobile-call-to-action-box").removeClass("scroll");
    } else if ($(window).scrollTop() <= 250) {
      $(".mobile-call-to-action-box").addClass("scroll");
    }
  })

  $(".register-or-login-btn").on("click", function () {
    // $('#register-or-login-modal').modal('show')
  })

  function toggleMenuMobile(event) {
    $(event).children("ul").slideToggle();
    $(event).children("a").toggleClass("up-li-mobile-menu", "down-li-mobile-menu")
  }
  $(".link-mobile-main-menu").click(function () {
    toggleMenuMobile($(this).parent());
  })
  $(".link-sub-main-menu-mobile").click(function () {
    toggleMenuMobile($(this).parent());
  });

  if ($(window).scrollTop() >= 80) {
    $("#main-nav-bar-id").addClass("scroll");
    $(".navbar-brand").css({
      width: "75px"
    })
  }
  var top = 0;
  let socialBtnOffsetTop = $("#social-sidebar").offset();
  $(window).on('scroll', function () {

    if ($(window).scrollTop() >= 80) {
      $("#main-nav-bar-id").addClass("scroll");
      $(".navbar-brand").css({
        width: "75px"
      })
    } else if ($("#main-nav-bar-id").hasClass("scroll") && $(window).scrollTop() <= 80) {
      $("#main-nav-bar-id").removeClass("scroll");
      $(".navbar-brand").css({
        width: "100px"
      })
    }
    $("#main-nav-bar-id").toggleClass("hide", $(window).scrollTop() > top);
    top = $(window).scrollTop();



  });
  // $(".btn-menu").click(function(){
  //     $(".main-menu-header").slideToggle();
  // })



  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    rtl: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 40000,
    nextArrow: '<button class="screen-shot-btn btn-right-aw"><i class="fa fa-arrow-right"></i></button>',
    prevArrow: '<button class="screen-shot-btn btn-left-aw"><i class="fa fa-arrow-left"></i></button>',
  });

  $('.carousel-inner-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    cssEase: 'linear',
    rtl: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 40000,
    nextArrow: '<button class="screen-shot-btn btn-right-aw"><i class="fa fa-arrow-right"></i></button>',
    prevArrow: '<button class="screen-shot-btn btn-left-aw"><i class="fa fa-arrow-left"></i></button>',
  });

  // $(window).on("scroll", function () {
  //     let windowScroll = $(window).scrollTop()
  //     let counterUp = $(".app-counter-up-section").offset().top
  //     if (windowScroll >= counterUp && windowScroll < 1350) {
  //        if (countfalse){
  //             cuonUpFunction();
  //        }
  //         countfalse = false;
  //     }

  // })

  // social media right sidebar 
  if ($("#social-sidebar").length) {
    $(window).scroll(function () {
      if (window.innerWidth > 800) {
        stick_social('#social-sidebar', 'stick-social-fixed', 'stick-social-absolute', ".single-post-content-section");
      } else {
        checkWidthSidebar('#social-sidebar', ['stick-social-fixed', 'stick-social-absolute'])
      }
    });
    $(window).resize(function () {
      console.log(window.innerWidth)
      checkWidthSidebar('#social-sidebar', ['stick-social-fixed', 'stick-social-absolute'])
    });
  }

  // single post left sidebar
  if ($(".single-post-sidebar").length) {
    $(window).scroll(function () {
      if (window.innerWidth > 800) {
        stick_social('.single-post-sidebar', 'stick-social-fixed', 'stick-social-absolute', ".single-post-content-section");
      } else {
        checkWidthSidebar(".single-post-sidebar", ['stick-social-fixed', 'stick-social-absolute']);

      }
    });

    $(window).resize(function () {
      checkWidthSidebar(".single-post-sidebar", ['stick-social-fixed', 'stick-social-absolute']);
    });


  }

  if ($('#countdown-suggestion-course').length) {
    $(function () {
      $('#countdown-suggestion-course').syotimer({
        year: $('#countdown-suggestion-course').data("year"), // YYYY Format
        month: $('#countdown-suggestion-course').data("month"), // 1-12
        day: $('#countdown-suggestion-course').data("day"), // 1-31
        hour: $('#countdown-suggestion-course').data("hour"), // 24 hour format 0-23
        minute: $('#countdown-suggestion-course').data("minute"), // 0-59
        second: $('#countdown-suggestion-course').data("second"), // 0-59
        labels: true
      });
    });
  }
  if ($('#course-countdown-timer').length) {
    $(function () {
      $('#course-countdown-timer').syotimer({
        year: $('#course-countdown-timer').data("year"), // YYYY Format
        month: $('#course-countdown-timer').data("month"), // 1-12
        day: $('#course-countdown-timer').data("day"), // 1-31
        hour: $('#course-countdown-timer').data("hour"), // 24 hour format 0-23
        minute: $('#course-countdown-timer').data("minute"), // 0-59
        labels: true
      });
    });
  }

  if ($(".product-landing-sidebar-info").length) {
    $(window).scroll(function () {
      if (window.innerWidth > 770) {
        stick_social(".product-landing-sidebar-info", 'stick-social-fixed', 'stick-social-absolute', ".all-product-landing");
      } else {
        checkWidthSidebar(".product-landing-sidebar-info", ['stick-social-fixed', 'stick-social-absolute']);
      }
    });
    $(window).resize(function () {
      checkWidthSidebar(".product-landing-sidebar-info", ['stick-social-fixed', 'stick-social-absolute']);
    });
  }

  if ($(".payment-tab-btn").length) {
    $(".payment-tab-btn").on("click", function () {
      $('.payment-tab-btn').each(function () {
        $(this).removeClass("active");
      })
      $('.payment-tab-content').each(function () {
        $(this).removeClass("show");
      })
      let contentId = $(this).data("contentid");
      $(this).addClass("active");
      $(contentId).addClass("show");
    })
  }
  if ($("#course-countdown-payment").length) {
    $(function () {
      $("#course-countdown-payment").syotimer({
        year: $("#course-countdown-payment").data("year"), // YYYY Format
        month: $("#course-countdown-payment").data("month"), // 1-12
        day: $("#course-countdown-payment").data("day"), // 1-31
        hour: $("#course-countdown-payment").data("hour"), // 24 hour format 0-23
        minute: $("#course-countdown-payment").data("minute"), // 0-59
        showSecond: false,
        labels: true
      });
    });
  }

  $(".btn-link-course-topics").on("click", function () {
    console.log("")
  });
  $(".btn-link-course-topics").on("click", function () {
    setTimeout(() => {
      if ($(this).hasClass("collapsed")) {
        $(this).children(".course-topics-icon").children().addClass("icon-circle-down");
        $(this).children(".course-topics-icon").children().removeClass("icon-circle-up");
      } else {
        $(this).children(".course-topics-icon").children().removeClass("icon-circle-down");
        $(this).children(".course-topics-icon").children().addClass("icon-circle-up");

      }
    }, 500);

  });


  if ($(".reply-comment-btn").length) {
    $(".reply-comment-btn").on("click", function () {
      if($(this).parents(".comment-wrapper-box").find(".comment-form-replay").length === 0){
        $(this).parents(".comment-wrapper-box").append(createCommandBox());
        setTimeout(() => {
          $(this).parents(".comment-wrapper-box").find(".comment-form-replay").slideDown( "slow");
        }, 300);
      }
    });
    $("body").delegate(".coment-btn-close", "click", function(){
      console.log('this parent =>',$(".coment-btn-close"))
      let parentId = $(this).data("parentid");
      $(parentId).slideUp( "slow");
      setTimeout(() => {
        $(parentId).remove();
      }, 2000);
      
    })
  }
  if ($(window).scrollTop() >= 40) {
    $("#p-l-main-nav-bar-id").addClass("scroll");
    //$(".navbar-brand").css({
    //    width: "75px"
    //})
  }
  var top = 0;
  $(window).on('scroll', function () {

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

  if ($('.last-student-comments-slider-wapper').length) {
    $('.last-student-comments-slider-wapper').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      rtl: true,
      arrows: true,
      nextArrow: '<button class="screen-shot-btn btn-right-aw"><span class="icon-arrow-right"></span></button>',
      prevArrow: '<button class="screen-shot-btn btn-left-aw"><span class="icon-arrow-left"></span></button>',
      responsive: [
        {
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
  }

  if ($('.last-student-comments-slider-wapper-h-p').length) {
    $('.last-student-comments-slider-wapper-h-p').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      rtl: true,
      arrows: true,
      nextArrow: '<button class="screen-shot-btn btn-right-aw"><span class="icon-arrow-right"></span></button>',
      prevArrow: '<button class="screen-shot-btn btn-left-aw"><span class="icon-arrow-left"></span></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
  }


  if ($('.our-customers-slider-wrapper').length) {
    $('.our-customers-slider-wrapper').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      rtl: true,
      arrows: true,
      nextArrow: '<button class="screen-shot-btn btn-right-aw"><span class="icon-arrow-right"></span></button>',
      prevArrow: '<button class="screen-shot-btn btn-left-aw"><span class="icon-arrow-left"></span></button>',
      responsive: [
        {
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
  }

  if ($('.course-student-comment-slider').length) {
    $('.course-student-comment-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      rtl: true,
      arrows: true,
      nextArrow: '<button class="screen-shot-btn btn-right-aw"><span class="icon-arrow-right"></span></button>',
      prevArrow: '<button class="screen-shot-btn btn-left-aw"><span class="icon-arrow-left"></span></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
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
  }


  // blog-post-list-slider-wrapper

  if ($('.blog-post-list-slider-wrapper').length) {
    $('.blog-post-list-slider-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      rtl: true,
      arrows: true,
      nextArrow: '<button class="screen-shot-btn btn-right-aw"><span class="icon-arrow-right"></span></button>',
      prevArrow: '<button class="screen-shot-btn btn-left-aw"><span class="icon-arrow-left"></span></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
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
  }

  $("button").on("click", function () {
    setTimeout(() => {
      let hasCollapsed = $(this).hasClass("collapsed");
      let iconTag = $(this).children(".icon-drop-down-or-up")
      if (hasCollapsed) {
        $(iconTag).children("i").removeClass("up")
        $(iconTag).children("i").addClass("down")
      } else {
        $(iconTag).children("i").removeClass("down")
        $(iconTag).children("i").addClass("up")

      }
    }, 600);
  })
  if ($('.product-star-rating').length) {
    $('.product-star-rating').starrr({
      rating: 4,
      change: function (e, value) {
        alert('new rating is ' + value)
      }
    })
  }
  $(".course-payment-lable").on("click", function () {
    let inputId = "#" + $(this).attr("for");
    let contentId = $(inputId).data("content");
    $(".payment-content-wrapper").each(function () {
      $(this).removeClass("show");
    })
    $(contentId).addClass("show");
  });

  $(".payment-select").on("change", function () {
    let contentId = "";
    $(".payment-select option:selected").each(function () {
      contentId = $(this).data("content");
    });
    $(".payment-content-wrapper").each(function () {
      $(this).removeClass("show");
    })
    $(contentId).addClass("show");
  });

  $(".discount-code-btn").on("click", function () {
    let contentBoxID = $(this).data("content");
    $(contentBoxID).slideToggle()
  })

  $(".btn-faq-link").on("click", function () {
    let className = "." + $(this).attr("class").replace(/ /g, ".");
    if ($(this).hasClass("collapsed")) {
      $(this).children().removeClass("icon-an-plus");
      $(this).children().addClass("icon-an-minus");
    } else {
      $(this).children().removeClass("icon-an-minus");
      $(this).children().addClass("icon-an-plus");

    }

  })
  $(".btn-faq-package-link").on("click", function () {
    let className = "." + $(this).attr("class").replace(/ /g, ".");
    if ($(this).hasClass("collapsed")) {
      $(this).children().removeClass("icon-an-plus");
      $(this).children().addClass("icon-an-minus");
    } else {
      $(this).children().removeClass("icon-an-minus");
      $(this).children().addClass("icon-an-plus");

    }

  });
  $(".faq-btn-span").on("click", function () {
    var siblingsBtn = $(this).siblings();
    if ($(siblingsBtn).hasClass("collapsed")) {
      $(siblingsBtn).children().removeClass("icon-an-plus");
      $(siblingsBtn).children().addClass("icon-an-minus");
    } else {
      $(siblingsBtn).children().removeClass("icon-an-minus");
      $(siblingsBtn).children().addClass("icon-an-plus");

    }
  })

  $(".blog-masonery-tab-btn").on("click", function () {
    let tabContent = $(this).data("tabcontent");
    $(".blog-masonery-content-tab").each(function () {
      $(this).removeClass("show");
      $(this).hide();
    });
    $(".blog-masonery-tab-btn").each(function () {
      $(this).removeClass("active");
    })
    $(this).addClass("active")
    $(tabContent).fadeIn(1000);
    setTimeout(() => {
      $(tabContent).addClass("show");
    }, 1200);
  })

  $(".password-input-icon").on("click", function () {
    $(this).toggleClass("show");
    let $inputs = $(this).siblings().children();
    if ($inputs.attr("type") === "password") {
      $inputs.attr("type", "text")
    } else {
      $inputs.attr("type", "password")

    }
  });

  $("#register-btn").on("click", function () {
    if (checkIsValidInputValue("#register-form") && checkPasswordEquality("#password", "#repeatPassword")) {
      let data = {};
      $("#register-form input").each(function () {
        let inputName = $(this).attr("name");
        let inputValue = $(this).val();
        data[`${inputName}`] = inputValue;
      });
      if (startTime >= 119 || startTime === 0) {
        timeinterval = setInterval(updateTimer, 1000);
      }
      $("#mobileOtp").val($("#mobile").val())
      $('#otp-validation-modal').modal('show');
      $.ajax({
        async: false,
        type: "POST",
        url: "",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          $("#register-form .show-error-row").append(createAlertMsg("موفقیت", "success"))
        },
        error: function (error) {
          $("#register-form .show-error-row").append(createAlertMsg("خطا", "error"))
        }
      });
    }
  });

  $("#login-btn").on("click", function () {
    if (checkIsValidInputValue("#login-form")) {
      let data = {};
      $("#login-form input").each(function () {
        let inputName = $(this).attr("name");
        let inputValue = $(this).val();
        data[`${inputName}`] = inputValue;
      });
      if ($("#remember-me").is(':checked') && $("#mobileOrMail").val() !== "") {
        localStorage.username = $("#mobileOrMail").val();
        localStorage.checkbox = $("#remember-me").attr("checked");
      }
      $.ajax({
        async: false,
        type: "POST",
        url: "",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          $("#login-form .show-error-row").append(createAlertMsg("موفقیت", "success"))
          window.location.replace("http://www\.example\.com");
        },
        error: function (error) {
          $("#login-form .show-error-row").append(createAlertMsg("خطا", "error"))
        }
      });

    }
  });
  $("#otp-forget-password-btn").on("click", function () {
    if (checkIsValidInputValue("#forget-password-form")) {
      let inputValue = $("#mobileOrMail").val();
      let emailValid = IsValidEmail(inputValue);
      let mobileValid = IsValidPhoneNumber(inputValue);
      if (emailValid) {
        $('#email-forget-password-modal').modal('show');
        $("#forget-input-email").val(inputValue);
        $("#forget-input-email").attr("disabled", true)
      } else if (mobileValid) {
        $('#otp-forget-password-modal').modal('show');
        if (startTime >= 119 || startTime === 0) {
          timeinterval = setInterval(updateTimer, 1000);
        }
        $("#mobileOtp").val(inputValue)
        $.ajax({
          async: false,
          type: "POST",
          url: "",
          data: JSON.stringify(data),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function (response) {
            $("#register-form .show-error-row").append(createAlertMsg("موفقیت", "success"))
            $("#change-password-card").hide();
            $("#change-password-card").show();
          },
          error: function (error) {

          }
        });
      }
    }
  })
  $("#otp-email-forget-pass-btn").on("click", function () {
    let inputValue = $("#forget-input-email").val();
    $.ajax({
      async: false,
      type: "POST",
      url: "",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
        $("#register-form .show-error-row").append(createAlertMsg("موفقیت", "success"))
        window.location.replace("http://www\.example\.com");
      },
      error: function (error) {

      }
    });
  });
  $("#edit-email-forget-pass-btn").on("click", function () {
    $("#forget-input-email").attr("disabled", false)
    $("#forget-input-email").focus();
  })
  if ($("#login-card").length) {
    if (localStorage.checkbox && localStorage.checkbox !== "") {
      $("#remember-me").attr("checked", "checked");
      $("#mobileOrMail").val(localStorage.username);
    } else {
      localStorage.username = "";
      localStorage.checkbox = "";
    }

  }
  $("#change-password-btn").on("click", function () {
    if (checkEmptyFild("#change-password-form")) {
      if (checkIsValidInputValue("#change-password-form")) {
        if (checkPasswordEquality("#password", "#repeatPassword")) {
          let data = {};
          $("#change-password-form input").each(function () {
            let inputName = $(this).attr("name");
            let inputValue = $(this).val();
            data[`${inputName}`] = inputValue;
          });
          if (startTime >= 119 || startTime === 0) {
            timeinterval = setInterval(updateTimer, 1000);
          }
          $("#mobileOtp").val($("#mobile").val())
          $('#otp-validation-modal').modal('show');
          $.ajax({
            async: false,
            type: "POST",
            url: "",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
              $("#register-form .show-error-row").append(createAlertMsg("موفقیت", "success"))
            },
            error: function (error) {

            }
          });

        }

      }
    }
  })

  $(".money-btn").on("click", function () {
    $(".money-btn").each(function () {
      $(this).removeClass("active");
    })
    $(this).addClass("active")
  })

  $(".otp-input-code").keyup(function () {
    let tabIndex = $(this).data("tabindex");
    otpCode += $(this).val()
    $(tabIndex).focus();
    if (otpCode.length >= 4) {
      $("#otp-validation-btn").attr("disabled", false)
    }
  });
  $("#otp-validation-btn").on("click", function () {
    if (otpCode.length === 4) {
      $.ajax({
        async: false,
        type: "POST",
        url: "",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          $("#otp-validation-modal .modal-payment-container .show-error-row").append(createAlertMsg("موفقیت", "success"))
        },
        error: function (error) {
          $("#otp-validation-modal .modal-payment-container .show-error-row").append(createAlertMsg("خطا", "error"))

        }
      });
    }
  });
  $("#get-new-otp-btn").on("click", function () {
    resetTimer();
    $.ajax({
      async: false,
      type: "POST",
      url: "",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
        $("#otp-validation-modal .modal-payment-footer .show-error-row").append(createAlertMsg("موفقیت", "success"))
        resetTimer();
      },
      error: function (error) {
        $("#otp-validation-modal .modal-payment-footer .show-error-row").append(createAlertMsg("خطا", "error"))
      }
    });
  });

  $("#edit-otp-mobile-number").on("click", function () {
    $("#mobileOtp").attr("disabled", false);
    $("#resend-otp").show();
    $(this).hide();
  });

  $("#resend-otp").on("click", function () {
    $("#mobileOtp").attr("disabled", true);
    $("#resend-otp").hide();
    $("#edit-otp-mobile-number").show();
    let data = {};
    data.mobile = $("#mobileOtp").val()
    resetTimer();
    $.ajax({
      async: false,
      type: "POST",
      url: "",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (response) {
        $("#otp-validation-modal .modal-header-pay .show-error-row").append(createAlertMsg("موفقیت", "success"))
        resetTimer();
      },
      error: function (error) {
        $("#otp-validation-modal .modal-header-pay .show-error-row").append(createAlertMsg("خطا", "error"))
      }
    });
  });

  $("#login-btn-head").on("click", function () {
    showTabActiveAuth("login")
  })
  $("#register-btn-head").on("click", function () {
    showTabActiveAuth("register")
  })

  if ($("#register-card").length) {
    let tablActive = getParamtrsInUrl(["auth"]);
    if (tablActive !== null) {
      showTabActiveAuth(tablActive)
    }
  }

  function showTabActiveAuth(activeTab) {
    if (activeTab === "register") {
      $("#login-card").fadeOut();
      $("#register-card").fadeIn("slow")
      $("#register-btn-head").hide()
      $("#login-btn-head").show()
    } else if (activeTab === "login") {
      $("#register-card").fadeOut();
      $("#login-card").fadeIn("slow")
      $("#login-btn-head").hide()
      $("#register-btn-head").show()
    }
  }



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
      $(repeatPassword).parents(".row").children(".input-msg-row").empty();
      return true;
    } else {
      $(repeatPassword).addClass("input-error-auth");
      $(repeatPassword).parent().addClass("group-error-auth");
      $(repeatPassword).parents(".row").children(".input-msg-row").append(createErrorBox("کلمه عبور با تکرار آن برابر نیست"))
      return false;
    }
  }

  function checkIsValidInputValue(formSelector) {
    let emptyInput = 0;
    let inputSelector = [];
    $(formSelector + " input").each(function () {
      $(this).val(faNumberConvertToEn($(this).val()))
      let inputName = $(this).attr("name");
      let inputValue = $(this).val();
      $(this).removeClass("input-error-auth");
      $(this).parent().removeClass("group-error-auth");
      $(this).siblings(".input-error-wrapper").remove()
      $(this).siblings(".input-info-wrapper").remove()
      $(this).parents(".row").children(".input-msg-row").empty();
      switch (true) {
        case inputValue === "":
          if (IsValidFullName(inputValue)) {
            $(this).removeClass("input-error-auth");
            $(this).parent().removeClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").empty();
          } else {
            emptyInput++;
            $(this).addClass("input-error-auth");
            $(this).parent().addClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").append(createErrorBox("مقدار این فیلد اجباری است"));
            inputSelector.push("#" + $(this).attr("id"))
          }
          break;
        case inputName === "fullName":
          if (IsValidFullName(inputValue)) {
            $(this).removeClass("input-error-auth");
            $(this).parent().removeClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").empty();
          } else {
            emptyInput++;
            $(this).addClass("input-error-auth");
            $(this).parent().addClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").append(createErrorBox("نام و نام خانوادگی وارد شده اشتباه است "))
            inputSelector.push("#" + $(this).attr("id"))
          }
          break;
        case inputName === "mobile":
          $(this).parent().siblings(".input-icons-group").empty()
          if (IsValidPhoneNumber(inputValue)) {
            $(this).removeClass("input-error-auth");
            $(this).parent().removeClass("group-error-auth");
            $(this).parent().siblings(".input-icons-group").append(`<span class="icon-an-tick"><span class="path1"></span><span class="path2"></span></span>`)
            $(this).parents(".row").children(".input-msg-row").empty();
          } else {
            emptyInput++;
            $(this).addClass("input-error-auth");
            $(this).parent().addClass("group-error-auth");
            $(this).parent().siblings(".input-icons-group").empty()
            $(this).parents(".row").children(".input-msg-row").append(createErrorBox("شماره موبایل وارد شده اشتباه است"))
            inputSelector.push("#" + $(this).attr("id"))
          }
          break;
        case inputName === "password":
          if (IsValidPassword(inputValue)) {
            $(this).removeClass("input-error-auth");
            $(this).parent().removeClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").empty();
            $(this).siblings(".input-info-wrapper").remove()
          } else {
            emptyInput++;
            $(this).addClass("input-error-auth");
            $(this).parent().append(createInfoBox("کلمه عبور باید ترکیبی از حروف بزرگ و کوچک انگلیسی و عدد باشد"))
            $(this).parent().addClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").append(createErrorBox("کلمه عبور وارد شده صحیح نیست "))
            inputSelector.push("#" + $(this).attr("id"))
          }
          break;
        case inputName === "email":
          if (IsValidEmail(inputValue)) {
            $(this).removeClass("input-error-auth");
            $(this).parent().removeClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").empty();
            $(this).siblings(".input-error-wrapper").remove()
            inputSelector.push("#" + $(this).attr("id"))
          } else {
            emptyInput++;
            $(this).addClass("input-error-auth");
            $(this).parent().addClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").append(createErrorBox("ایمیل وارد شده صحیح نیست"))
            inputSelector.push("#" + $(this).attr("id"))
          }
        case inputName === "mobileOrMail":
          let emailValid = IsValidEmail(inputValue);
          let mobileValid = IsValidPhoneNumber(inputValue);
          if (emailValid) {
            $(this).removeClass("input-error-auth");
            $(this).parent().removeClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").empty();
            $(this).siblings(".input-error-wrapper").remove()
          } else if (mobileValid) {
            $(this).removeClass("input-error-auth");
            $(this).parent().removeClass("group-error-auth");
            $(this).parents(".row").children(".input-msg-row").empty();
            $(this).siblings(".input-error-wrapper").remove()
          }
          else {
            emptyInput++;
            $(this).addClass("input-error-auth");
            $(this).parent().addClass("group-error-auth");
            $(this).parent().siblings(".input-icons-group").empty()
            $(this).parents(".row").children(".input-msg-row").append(createErrorBox("شماره موبایل یا ایمیل وارد شده اشتباه است"))
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
    return /(0|\+98)?([ ]|,|-|[()]){0,2}9[0-9]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/g.test(
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

  function cuonUpFunction() {
    $('.counter').each(function () {
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
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum + " + ");
            //alert('finished');
          }

        });
    });
  }





});
function generateRandomNumber (){
  return Math.floor(Math.random() * 100000);
}
function createCommandBox() {
  let commentWapperId = "comment-form-" + generateRandomNumber() ;
  
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