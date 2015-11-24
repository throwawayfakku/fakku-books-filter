function getParentNodes(array){
	var result = [];
	for(var i = 0; i< array.length; i++){
		result.push(array[i].parentNode);
	}
	return result;
}
function hideRows(array){
	var hiddenCount = 0
	for(var i = 0; i< array.length; i++){
		if (array[i].classList.contains("content-row")
			&& array[i].classList.contains("row")
			&& (array[i].classList.contains("manga")
				|| array[i].classList.contains("doujinshi"))){
			array[i].style.display = "none";
			hiddenCount++;
		}
	}
	return hiddenCount
}
function main(){
	var w = document.getElementsByClassName("fakku-books");
	var x = getParentNodes(w);
	var y = getParentNodes(x);
	var z = getParentNodes(y);
	var hiddenCount = hideRows(y) + hideRows(z);
	if(hiddenCount){
		console.log("Hid " + hiddenCount + " fakku-books!");
	}
}
main();
