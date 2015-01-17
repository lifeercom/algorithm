//matrix


function made_matrix (m_matrix,n_matrix , is_zero_matrix){


var arr = new Array(m_matrix);
var zero_matrix = is_zero_matrix || 0 ;

for (var i = 0 ; i < m_matrix; i++) {
	arr[i] = new Array();
};

if (zero_matrix) {
	for (var i = 0 ; i < m_matrix ; i++) {
		for (var j = 0; j < n_matrix; j++) {
			arr[i][j] = 0 ;
			//console.log("arr[" + i + "][" + j + "] = " + arr[i][j]) ;
		}
	}
}else{
	for (var i = 0 ; i < m_matrix ; i++) {
		for (var j = 0; j < n_matrix; j++) {
			arr[i][j] = i+j ;
			//console.log("arr[" + i + "][" + j + "] = " + arr[i][j]) ;
		}
	}
}



return arr ;
}






function Mutiply_matrix (first_matrix , second_matrix){
	var row1 = first_matrix.length ;  //檢查傳入的陣列大小
	var column1 = first_matrix[0].length ;
	var row2 = second_matrix.length ;
	var column2 = second_matrix[0].length ;
	//console.log("row1=" + row1 + "column1=" + column1 + "row2=" + row2 + "column2=" + column2);
	var arr = made_matrix(row1 , column2 ,1);
	if (column1 == row2 ) {
	for (var i = 0; i < row1 ; i++) {
		for (var j = 0; j < column2 ; j++) {
			var sum = 0;
			for (var k = 0; k < column1 ; k++) {
			sum += first_matrix[i][k] * second_matrix[k][j] ;
			console.log(sum);
			}
			arr[i][j] = sum ;
			//console.log("arr[" + i + "][" + j + "] =" + arr[i][j] );
		}
	}
	return arr ;
	} else console.log("矩陣無法相乘");

}


var mutiply_arr = Mutiply_matrix( made_matrix(3,3) , made_matrix(3,4) );