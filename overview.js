//NOTE: All functions are activated per onclick button

function calculate()
{
	
	//Getting the input values
	//NOTE: The "+" converts a string value to int
	var integer = +document.getElementById("bit").value;
	var bit		= document.getElementById("integer").value;
	
	
	//Calculating the results
	var calc_bit 		= (integer).toString(2);
	var calc_integer 	= parseInt(bit, 2);
	
	
	//Getting the correct positions for the results
	var result_bit 		= document.getElementById("RESbit");
	var result_integer 	= document.getElementById("RESint");
	

	//Showing the results in the browser
	result_bit.innerHTML 		= calc_bit;
	result_integer.innerHTML 	= calc_integer;
	
}


//NOTE: There are different ways to realize and optimize the following examples in js.
//		To split it in three seperate functions should simplify code readability. 

function example1()
{
	var tag = document.getElementById("ex_one");
	
	//result should be 0.30000000000000004
	tag.innerHTML = 0.1 + 0.2;
}


function example2()
{
	var tag = document.getElementById("ex_two");
	
	//result should be 0.6000000000000001
	tag.innerHTML = (0.1 + 0.2) + 0.3;
}


function example3()
{
	var tag = document.getElementById("ex_three");
	
	//result should be 0.6
	tag.innerHTML = 0.1 + (0.2 + 0.3);
}