//Fibonacci


function Fabonacci(arguments){

var p1,p2,item,i;

if(arguments == 0)
 return 0;
else if(arguments == 1)
 return 1;
else{
	p1 = 0;
	p2 = 1;
	for(i=2 ; i<=arguments ; i++){
		item = p1 + p2 ;
		p2 = p1 ;
		p1 = item ;
	}
	return item;
}


}


Fabonacci(100);