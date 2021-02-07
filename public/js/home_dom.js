$(function() {
  $(".copybtn").on("click", function() {
    let text = "xxxx@gmail.com";
    let $textarea = $("<textarea></textarea>");

    $textarea.text(text);
    $(this).append($textarea);
    $textarea.select();

    document.execCommand("copy");
    $textarea.remove();

    $('.tool-tip').fadeIn();
    $(".tool-tip").fadeOut(2000);
  });
});
