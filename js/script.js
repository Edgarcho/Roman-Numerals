
function convertRoman(number){
   var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
   var result = '';
    if(number < 4000){  // run the if statement if number is less than 4000
      for (var i = 0; i < numbers.length; i++){ // run the for loop till i is less than number length. (13 in length)
        while (number >= numbers[i]){ // also in the for loop it must meet the while loop condition. Ex(number = 8 and i = 10 aka V (8 >=   numbers[10]))
          result += letters[i] // letter is V in index 10 is added into result (Result:V)
          number -= numbers[i]; //the remaining number is insert in the function again and repeat the process till the condition is not meet.
        }
      }
      return result; //return result back to user inferface.
    }else{
      result = "We cannot count to 4000 in Roman numeral";
      return result;
    }
}
//User interface
$(document).ready(function() {
  $("form#convert").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#decimal").val()); //convert the string into a number
    var result = convertRoman(number); //runs the number thru the function convertRoman
    $("#result").text(result);  //return the result in text form
    });
});
