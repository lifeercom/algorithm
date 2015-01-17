



var arr = [0,2,5,7,11,25,33,54,66,125,127,129];


function binary_search(augments,n,x){

var lower = 0 ;
upper = n ;

while ( lower <= upper){
	var mid = Math.floor((lower + upper) /2 );
	if(x > augments[mid]){
		lower = mid + 1;
		console.log("lower change" + lower);
	}
	else if(x < augments[mid]){
		upper = mid - 1 ;
		console.log("upper change" + upper);
	}
	else{
		console.log("找到" + augments[mid] + "在第" + mid + "位置" );
		return;
	}
}


}

binary_search(arr,arr.length,7);