$(function () {
  // SIDEBAR MENU NAV
  $(".sidebar-menu").click(function () {
    $(".sidebar-menu-content").toggleClass("open");
  });

  //HOME FEATURES
  $("li.img-two").click(() => {
    $(".img-two").addClass("active")
    $(".img-one").removeClass("active")
    $(".img-three").removeClass("active")
    $(".img-four").removeClass("active")
    $(".img-five").removeClass("active")
    $(".img-six").removeClass("active")
  })

  $("li.img-one").click(() => {
    $(".img-one").addClass("active")
    $(".img-two").removeClass("active")
    $(".img-three").removeClass("active")
    $(".img-four").removeClass("active")
    $(".img-five").removeClass("active")
    $(".img-six").removeClass("active")
  })

  $("li.img-three").click(() => {
    $(".img-three").addClass("active")
    $(".img-one").removeClass("active")
    $(".img-two").removeClass("active")
    $(".img-four").removeClass("active")
    $(".img-five").removeClass("active")
    $(".img-six").removeClass("active")
  })

  $("li.img-four").click(() => {
    $(".img-four").addClass("active")
    $(".img-one").removeClass("active")
    $(".img-three").removeClass("active")
    $(".img-two").removeClass("active")
    $(".img-five").removeClass("active")
    $(".img-six").removeClass("active")
  })

  $("li.img-five").click(() => {
    $(".img-five").addClass("active")
    $(".img-one").removeClass("active")
    $(".img-three").removeClass("active")
    $(".img-four").removeClass("active")
    $(".img-two").removeClass("active")
    $(".img-six").removeClass("active")
  })

  $("li.img-six").click(() => {
    $(".img-six").addClass("active")
    $(".img-one").removeClass("active")
    $(".img-three").removeClass("active")
    $(".img-four").removeClass("active")
    $(".img-five").removeClass("active")
    $(".img-two").removeClass("active")
  })

  // HOME PRODUCTS FOOTER
  $(".product-nav-item.one").click(() => {
    $(".product-nav-item.one").addClass("active")
    $(".product-nav-item.two").removeClass("active")
    $(".product-nav-item.three").removeClass("active")

    $(".products-footer-icon.one").css("display", "block")
    $(".products-footer-icon.two").css("display", "none")
    $(".products-footer-icon.three").css("display", "none")
  })

  $(".product-nav-item.two").click(() => {
    $(".product-nav-item.two").addClass("active")
    $(".product-nav-item.one").removeClass("active")
    $(".product-nav-item.three").removeClass("active")

    $(".products-footer-icon.two").css("display", "block")
    $(".products-footer-icon.one").css("display", "none")
    $(".products-footer-icon.three").css("display", "none")
  })

  $(".product-nav-item.three").click(() => {
    $(".product-nav-item.three").addClass("active")
    $(".product-nav-item.two").removeClass("active")
    $(".product-nav-item.one").removeClass("active")

    $(".products-footer-icon.three").css("display", "block")
    $(".products-footer-icon.two").css("display", "none")
    $(".products-footer-icon.one").css("display", "none")
  })

  //LIVECHAT TOGGLE
  $(".activities-aside").click(function () {
    $(".admin").addClass("addlive");
  });
  $("#close-outline").click(function () {
    $(".livechat").addClass("slideOutRight")
    setTimeout(() => {
      $(".admin").removeClass("addlive");
      $(".livechat").removeClass("slideOutRight")
    }, 300);
  });

  // FILTER TOGGLE
  $(".tickets-head-filter").click(function () {
    $(".modals").toggleClass("show");
  });

  // DROPDOWN TOGGLE
  $(".dropbutton").click(function () {
    $(".dropdown").toggleClass("show")
  })

  // QUOTE DISPLAY
  $(".toggle-quote").click(() => {
    $(".page").addClass("add-quote")
    $(".auth").addClass("add-quote")
  })
  $("#close-quote").click(() => {
    $(".quote").addClass("slideOutRight")
    setTimeout(() => {
      $(".page").removeClass("add-quote");
      $(".auth").removeClass("add-quote")
      $(".quote").removeClass("slideOutRight")
    }, 300);
  })

  // TICKET DISPLAY
  $(".tickets-head-right").click(() => {
    $(".admin").addClass("toggle-ticket")
    $("#invoice-add").css('display', "none")
  })
  $("#close-ticket").click(() => {
    $(".tickets-add").addClass("slideOutRight")
    setTimeout(() => {
      $(".admin").removeClass("toggle-ticket")
      $(".tickets-add").removeClass("slideOutRight")
    }, 300);
  })

  // DISPLAY ANSWER
  $("#add-answer").click(() => {
    $(".answer-add").css('display', "block")
  })
  $("#close-answer").click(() => {
    $(".answer-add").addClass("slideOutRight")
    setTimeout(() => {
      $(".answer-add").css('display', "none")
      $(".answer-add").removeClass("slideOutRight")
    }, 300);
  })

  // INVOICE EDIT TOGGLE
  $(".invoice-more").click(() => {
    $(".invoice-label-right").toggleClass("invoice-edit-tags")
    $(document).on("click", function (e) {
      if ($(e.target).is(".invoice-more") === false) {
        $(".invoice-label-right").removeClass("invoice-edit-tags")
      }
    });
  })

  $(".invoice-more1").click(() => {
    $(".ticket-stat1").toggleClass("invoice-edit-tags")
    $(document).on("click", function (e) {
      if ($(e.target).is(".invoice-more1") === false) {
        $(".ticket-stat1").removeClass("invoice-edit-tags")
      }
    });
  })
  $(".invoice-more2").click(() => {
    $(".ticket-stat2").toggleClass("invoice-edit-tags")
    $(document).on("click", function (e) {
      if ($(e.target).is(".invoice-more2") === false) {
        $(".ticket-stat2").removeClass("invoice-edit-tags")
      }
    });
  })
  $(".invoice-more3").click(() => {
    $(".ticket-stat3").toggleClass("invoice-edit-tags")
    $(document).on("click", function (e) {
      if ($(e.target).is(".invoice-more3") === false) {
        $(".ticket-stat3").removeClass("invoice-edit-tags")
      }
    });
  })
  $(".invoice-more4").click(() => {
    $(".ticket-stat4").toggleClass("invoice-edit-tags")
    $(document).on("click", function (e) {
      if ($(e.target).is(".invoice-more4") === false) {
        $(".ticket-stat4").removeClass("invoice-edit-tags")
      }
    });
  })
  $(".invoice-more5").click(() => {
    $(".ticket-stat5").toggleClass("invoice-edit-tags")
    $(document).on("click", function (e) {
      if ($(e.target).is(".invoice-more5") === false) {
        $(".ticket-stat5").removeClass("invoice-edit-tags")
      }
    });
  })

  //INVOICE DISPLAY
  $(".invoice-link").click(() => {
    $(".admin").addClass("toggle-invoice")
  })
  $("#close-invoice").click(() => {
    $(".invoice-add").addClass("slideOutRight")
    setTimeout(() => {
      $(".admin").removeClass("toggle-invoice")
      $(".invoice-add").removeClass("slideOutRight")
    }, 300);
  })

  //RESET PASSWORD DISPLAY
  $(".toggle-password").click(() => {
    $(".auth").addClass("show-password")
  })
  $("#close-password-form").click(() => {
    $(".auth").removeClass("show-password")
  })
  $("#reset-password").click(() => {
    $(".auth").addClass("show-reset")
  })
  $("#close-reset-form").click(() => {
    $(".auth").removeClass("show-reset")
  })

  //INVOICE MESSAGE DISPLAY
  $(".label-second").click(() => {
    $(".invoice-add").addClass("add-message")
    $(".invoice-content-message").css('display', "block")
  })
  $(".label-first").click(() => {
    $(".invoice-add").removeClass("add-message")
    $(".invoice-content-message").css('display', "none")
  })

  //DELETE MESSAGE
  $(".delete-invoice").click(() => {
    $(".invoice-add").addClass("delete")
  })
  $("#delete-invoice").click(() => {
    $(".invoice-add").addClass("delete")
  })
  $(".close-delete").click(() => {
    $(".invoice-delete").addClass("slideOutRight")
    setTimeout(() => {
      $(".invoice-add").removeClass("delete")
      $(".invoice-delete").removeClass("slideOutRight")
    }, 300);
  })

  //  DISCUSSION TOPICS TOGGLE
  $(".open-topics").click(() => {
    $(".discussions-explore").css("display", "none")
    $(".discussions-answer").css("display", "none")
    $(".discussions-top-users").css("display", "none")
    $(".discussions-topics").css("display", "block")
  })

  $(".open-explore").click(() => {
    $(".discussions-topics").css("display", "none")
    $(".discussions-answer").css("display", "none")
    $(".discussions-explore").css("display", "block")
    $(".discussions-top-users").css("display", "none")
  })

  $(".open-answer").click(() => {
    $(".discussions-explore").css("display", "none")
    $(".discussions-topics").css("display", "none")
    $(".discussions-answer").css("display", "block")
    $(".discussions-top-users").css("display", "none")
  })

  $(".open-users").click(() => {
    $(".discussions-explore").css("display", "none")
    $(".discussions-topics").css("display", "none")
    $(".discussions-answer").css("display", "none")
    $(".discussions-top-users").css("display", "block")
  })


  $("#resources-articles").click(() => {
    $("#resources-articles").addClass("active")
    $("#resources-featured").removeClass("active")
    $("#resources-case-studies").removeClass("active")
    $("#resources-downloads").removeClass("active")
    $("#resources-videos").removeClass("active")
    $(".articles-row").css("display", "flex")
    $(".featured-row").css("display", "none")
    $(".videos-row").css("display", "none")
    $(".downloads-row").css("display", "none")
    $(".case-studies-row").css("display", "none")
  })

  $("#resources-featured").click(() => {
    $("#resources-featured").addClass("active")
    $("#resources-articles").removeClass("active")
    $("#resources-case-studies").removeClass("active")
    $("#resources-downloads").removeClass("active")
    $("#resources-videos").removeClass("active")
    $(".featured-row").css("display", "flex")
    $(".articles-row").css("display", "none")
    $(".videos-row").css("display", "none")
    $(".downloads-row").css("display", "none")
    $(".case-studies-row").css("display", "none")
  })

  $("#resources-videos").click(() => {
    $("#resources-videos").addClass("active")
    $("#resources-articles").removeClass("active")
    $("#resources-case-studies").removeClass("active")
    $("#resources-downloads").removeClass("active")
    $("#resources-featured").removeClass("active")
    $(".featured-row").css("display", "none")
    $(".articles-row").css("display", "none")
    $(".videos-row").css("display", "block")
    $(".downloads-row").css("display", "none")
    $(".case-studies-row").css("display", "none")
  })

  $("#resources-downloads").click(() => {
    $("#resources-downloads").addClass("active")
    $("#resources-articles").removeClass("active")
    $("#resources-case-studies").removeClass("active")
    $("#resources-videos").removeClass("active")
    $("#resources-featured").removeClass("active")
    $(".featured-row").css("display", "none")
    $(".articles-row").css("display", "none")
    $(".downloads-row").css("display", "block")
    $(".videos-row").css("display", "none")
    $(".case-studies-row").css("display", "none")
  })

  $("#resources-case-studies").click(() => {
    $("#resources-case-studies").addClass("active")
    $("#resources-articles").removeClass("active")
    $("#resources-videos").removeClass("active")
    $("#resources-downloads").removeClass("active")
    $("#resources-featured").removeClass("active")
    $(".featured-row").css("display", "none")
    $(".articles-row").css("display", "none")
    $(".case-studies-row").css("display", "flex")
    $(".downloads-row").css("display", "none")
    $(".videos-row").css("display", "none")
  })


  $(".toggle-featured").click(() => {
    $(".resources-content").css('display', "block")
  })
  $(".resources-close").click(() => {
    $(".resources-content").css('display', "none")
  })

  $(".toggle-video").click(() => {
    $(".resources-video-content").css('display', "block")
  })
  $(".resources-close").click(() => {
    $(".resources-video-content").css('display', "none")
  })

  $("#card-nav2").click(() => {
    $("#card-nav2").addClass("active")
    $("#card-nav1").removeClass("active")
    $("#card-nav3").removeClass("active")
    $("#card2").addClass("active")
    $("#card1").removeClass("active")
    $("#card3").removeClass("active")
  })

  $("#card-nav3").click(() => {
    $("#card-nav3").addClass("active")
    $("#card-nav1").removeClass("active")
    $("#card-nav2").removeClass("active")
    $("#card3").addClass("active")
    $("#card1").removeClass("active")
    $("#card2").removeClass("active")
  })

  $("#card-nav1").click(() => {
    $("#card-nav1").addClass("active")
    $("#card-nav2").removeClass("active")
    $("#card-nav3").removeClass("active")
    $("#card1").addClass("active")
    $("#card2").removeClass("active")
    $("#card3").removeClass("active")
  })

  $(function () {
    $("#toggle-mobile-nav").click((e) => {
      $(".nav-main").addClass('mobile')
      $("#close-mobile-nav").css('display', "block")
      $('.admin').addClass("before")
      e.stopPropagation()
    });
    $("#close-mobile-nav").click(() => {
      $(".nav-main").removeClass('mobile')
      $("#close-mobile-nav").css('display', "none")
      $('.admin').removeClass("before")
    });
  })
})
// HOME PAGE SCROLL
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 10) {
      $(".page").addClass("scroll");
    } else {
      $(".page").removeClass("scroll");
    }
  });
});

// TOGGLE MOBILE NAV
$(".navbar-toggler").click(() => {
  $(".navbar-bg").css("display", "block")
})
$("#close-navbar").click(() => {
  $(".navbar-bg").addClass("slideOutLeft")
  setTimeout(() => {
    $(".navbar-bg").css("display", "none")
    $(".navbar-bg").removeClass("slideOutLeft")
  }, 300);
})
$(".navbar-bg").click(() => {
  $(".navbar-bg").addClass("slideOutLeft")
  setTimeout(() => {
    $(".navbar-bg").css("display", "none")
    $(".navbar-bg").removeClass("slideOutLeft")
  }, 300);
})

// HOME PAGE SLICK 
$('.single-item').slick({
  slidesToShow: 1,
  infinite: true,
  dots: true,
  nextArrow: document.querySelector('.case-next'),
  prevArrow: document.querySelector('.case-prev'),
  customPaging: function (slider, i) {
    return '<img src="/assets/img/quote-nav-active.svg" /><img src="/assets/img/quote-nav.svg" />';
  }
});

// QUOTE SLICK 
$(document).ready(function () {
  $('.slick-quote').slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    centerMode: true,
    customPaging: function (slider, i) {
      return '<img src="/assets/img/quote-nav-active.svg" /><img src="/assets/img/quote-nav.svg" />';
    },
  });
});

// CAROUSEL 
$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 4,
    dots: false,
    centerMode: false,
    nextArrow: document.getElementById('nav-next'),
    prevArrow: document.getElementById('nav-prev'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// PROFILE IMAGE PREVIEW
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#profile-img')
        .attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}


// DRAG AND DROP
let dropArea = document.getElementById("drop-area")

  // Prevent default drag behaviors
  ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
    document.body.addEventListener(eventName, preventDefaults, false)
  })

  // Highlight drop area when item is dragged over it
  ;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  })

  ;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  })

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false)

function preventDefaults(e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  dropArea.classList.remove('active')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files

  handleFiles(files)
}
function handleFiles(files) {
  files = [...files]
  files.forEach(previewFile)
}

function previewFile(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function () {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery').appendChild(img)
  }
}
