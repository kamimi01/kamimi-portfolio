$(function() {
  $(".copybtn").on("click", function() {
    let text = "xxxx@gmail.com";
    // テキストエリアの作成
    let $textarea = $("<textarea></textarea>");
    // テキストエリアに文章を挿入
    $textarea.text(text);
    $(this).append($textarea);
    $textarea.select();
    // コピー
    document.execCommand("copy");
    $textarea.remove();

    alert("Copy Mail Address to clipboard");
  });
});
