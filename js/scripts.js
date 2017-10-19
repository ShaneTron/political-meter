$(document).ready(function() {
  $("#personalInfo").submit(function(event) {
      event.preventDefault();
      var age = parseInt($("#age").val());
      var gender = $("#gender").val();
      var area = $("#area").val();
      $(".everything .resultClass").hide();

    if (!age) {
      alert("please enter your age")
    } else {
      if (age > 60 && area === "rural" && gender === "male"){
        // $("#moderate").hide();
        // $("#liberal").hide();
        // $(".everything").show();
        $(".everything #conservative").show();
      } else {
        // $("#conservative").hide();
        // $("#liberal").hide();
        // $(".everything").show();
        $("#moderate").show();
      }
    }

  })
})
