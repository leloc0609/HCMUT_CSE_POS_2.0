(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    function wcqib_refresh_quantity_increments() {
        jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
            var c = jQuery(b);
            c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
        })
    }
    String.prototype.getDecimals || (String.prototype.getDecimals = function() {
        var a = this,
            b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
    }), jQuery(document).ready(function() {
        wcqib_refresh_quantity_increments()
    }), jQuery(document).on("updated_wc_div", function() {
        wcqib_refresh_quantity_increments()
    }), jQuery(document).on("click", ".plus, .minus", function() {
        var a = jQuery(this).closest(".quantity").find(".qty"),
            b = parseFloat(a.val()),
            c = parseFloat(a.attr("max")),
            d = parseFloat(a.attr("min")),
            e = a.attr("step");
        b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });



})(jQuery);


function deleteItem1(){
    let cart = document.getElementById("cart-item-1")
    cart.classList.add("cart-item-1-hidden")
    let mini_cart = document.getElementById("mini-cart-item-1")
    mini_cart.classList.add("cart-item-1-hidden")
}

function deleteItem2() {
    let cart = document.getElementById("cart-item-2")
    cart.classList.add("cart-item-2-hidden")
    let mini_cart = document.getElementById("mini-cart-item-2")
    mini_cart.classList.add("cart-item-2-hidden")
}

function deleteItem3(){
    let cart = document.getElementById("cart-item-3")
    cart.classList.add("cart-item-3-hidden")
    let mini_cart = document.getElementById("mini-cart-item-3")
    mini_cart.classList.add("cart-item-3-hidden")
}

function deleteItem4(){
    let cart = document.getElementById("cart-item-4")
    cart.classList.add("cart-item-4-hidden")
    let mini_cart = document.getElementById("mini-cart-item-4")
    mini_cart.classList.add("cart-item-4-hidden")
}

function deleteItem5(){
    let cart = document.getElementById("cart-item-5")
    cart.classList.add("cart-item-5-hidden")
    let mini_cart = document.getElementById("mini-cart-item-5")
    mini_cart.classList.add("cart-item-5-hidden")
}

function deleteItem6(){
    let cart = document.getElementById("cart-item-6")
    cart.classList.add("cart-item-6-hidden")
    let mini_cart = document.getElementById("mini-cart-item-6")
    mini_cart.classList.add("cart-item-6-hidden")
}

function deleteItem7(){
    let cart = document.getElementById("cart-item-7")
    cart.classList.add("cart-item-7-hidden")
    let mini_cart = document.getElementById("mini-cart-item-7")
    mini_cart.classList.add("cart-item-7-hidden")
}

function countTotal(index){
    var count1 = parseInt(document.getElementById("qty-item-1").value);
    var count2 = parseInt(document.getElementById("qty-item-2").value);
    var count3 = parseInt(document.getElementById("qty-item-3").value);

    switch (index){
        case 1:
            count1 = count1 + 1;
            break;
        case 2:
            count2 = count2 + 1;
            break;
        case 3:
            count3 = count3 + 1;
            break;
        case -1:
            count1 = count1 -1;
            break;
        case -2:
            count2 = count2 -1;
            break;
        case -3:
            count3 = count3 -1;
            break;
    }
    console.log(count1+" "+count2+" "+count3)
    var amount = (count3 + count2 + count1)*115;
    let text = "Subtotal <span> $"+ amount.toString() + ".00 </span>";
    let text2 = "Total <span> $"+ amount.toString() + ".00 </span>";
    document.getElementById("subtotal").innerHTML=text;
    document.getElementById("total").innerHTML=text2;
}

function countItem1(){
    var count = parseInt(document.getElementById("qty-item-1").value);
    console.log(count)
    var final;
    if(count < 10) {
        final = (count+1)*115;
        document.getElementById("total-item-1").innerHTML = final.toString();}
    else{
        final = count * 115;
        document.getElementById("total-item-1").innerHTML = final.toString();
    }
    console.log(final);
    countTotal(1);

}
function m_countItem1() {
    var count = parseInt(document.getElementById("qty-item-1").value);
    console.log(count)
    var final;
    if(count <= 1)  document.getElementById("total-item-1").innerHTML = "115";
    else {
        final = (count - 1) * 115;
        document.getElementById("total-item-1").innerHTML = final.toString();
    }
    final = -final;
    countTotal(-1);
}
function countItem2(){
    var count = parseInt(document.getElementById("qty-item-2").value);
    console.log(count)
    var final;
    if(count < 10) {
        final = (count+1)*115;
        document.getElementById("total-item-2").innerHTML = final.toString();}
    else{
        final = count * 115;
        document.getElementById("total-item-2").innerHTML = final.toString();
    }
    console.log(final);
    countTotal(2);

}
function m_countItem2() {
    var count = parseInt(document.getElementById("qty-item-2").value);
    console.log(count)
    var final;
    if(count <= 1)  document.getElementById("total-item-2").innerHTML = "115";
    else {
        final = (count - 1) * 115;
        document.getElementById("total-item-2").innerHTML = final.toString();
        console.log(final);
    }
    countTotal(-2);
}
function countItem3(){
    var count = parseInt(document.getElementById("qty-item-3").value);
    console.log(count)
    var final;
    if(count < 10) {
        final = (count+1)*115;
        document.getElementById("total-item-3").innerHTML = final.toString();}
    else{
        final = count * 115;
        document.getElementById("total-item-3").innerHTML = final.toString();
    }
    console.log(final);
    countTotal(3);

}
function m_countItem3() {
    var count = parseInt(document.getElementById("qty-item-3").value);
    console.log(count)
    var final;
    if(count <= 1)  document.getElementById("total-item-3").innerHTML = "115";
    else {
        final = (count - 1) * 115;
        document.getElementById("total-item-3").innerHTML = final.toString();
        console.log(final);
    }
    countTotal(-3);
}

