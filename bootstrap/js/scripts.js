$(document).ready(function() {
  $("form#party").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var quest1 = $("select#quest1").val();

    if(age) {
      var count = 0;

      if(age >70 ) {
        count += 1;
      } else {
        count -= 1;
      }

      if(gender === "male" ) {
        count += 1;
      } else {
        count -= 1;
      }

      if(quest1 === "yes" ) {
        count += 1;
      } else {
        count -= 1;
      }
      console.log(count);
      //Determine if Republican or Democrat
      if(count > 0) {
        var answer = "Republican";
      } else {
        var answer = "Democrat";
      }

      $("#answer").empty().append(answer);
      $("#result").show();
    } else {  //if invalid input for age
      alert("Invalid input for your age.");
    }

    event.preventDefault();
  });

});
