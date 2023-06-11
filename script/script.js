$(document).ready(function() {
    $(".rate-btn").click(function() {
        $("#rate").html(this.value);
    });
    $("#submit").click(function() {
        $(".rating").hide("");
        $(".submit-section").show("");
    });
});