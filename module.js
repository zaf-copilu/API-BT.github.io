curr_page = "main"
$('.selection').click(function() {
    $("."+curr_page).css("display","none")
    curr_page = $(this).attr('v-butt')
    $("." + $(this).attr('v-butt')).css("display","block")
});

$('.logo').click(function() {
    $("."+curr_page).css("display","none")
    curr_page = "main"
    $(".main").css("display","block")
});

$('.logo').click(function() {
    $("."+curr_page).css("display","none")
    curr_page = "main"
    $(".main").css("display","block")
});

$('.bn54').click(function() {
    if ($(this).attr('v-type') == "submit") { return;}
    $("."+curr_page).css("display","none")
    curr_page = "products"
    $(".products").css("display","block")
});


function contact_us () {
    $("."+curr_page).css("display","none")
    curr_page = "contact_us"
    $(".contact_us").css("display","block")
}

function submit() {
    for(i= 1;i <= 3;i++) {
        document.getElementById('input'+i).value = ''
    }
}
