var firstnumber;
var secondnumber;
var result;
var operations;
function clearscreen()
        {
            document.getElementById("res").value="";

        }
        function display(value)
        {
            document.getElementById("res").value += value;
        }
        function calculate()
        {
            var x = document.getElementById("res").value;
            var y = eval(x)
            document.getElementById("res").value = y;  
        }
        function sqrots() {  
            firstnumber = document.lcdform.lcds.value;  
            result = Math.sqrt(parseInt(document.lcdform.lcds.value));  
            document.lcdform.lcds.value = result;  
            document.lcdform.lcdsu.value = "sqrt(" + firstnumber + ") = " + result;  

        }
		
        function backspace()  
        {  
            var exp = document.form1.textview.value;  
            document.form1.textview.value = exp.substring(0, exp.length - 1);
        }  
		