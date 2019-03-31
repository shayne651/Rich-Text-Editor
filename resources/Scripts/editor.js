var bold=0;
var italic=0;
var fontsize=12;

function makeBold(){
	if(bold==0){
		$("#content").css("font-weight","Bold");
		bold=1;
	}else{
		$("#content").css("font-weight","normal");
		bold=0;
	}
	$("#bold").val(bold);
}
function makeItalic(){
	if(italic==0){
		$("#content").css("font-style","italic");
		italic=1;
	}else{
		$("#content").css("font-style","normal");
		italic=0;
	}
	$("#italic").val(italic);
}
function makeFont(){
	fontsize = parseInt($("#fontSize").val());
	$("#content").css("font-size",fontsize);
	$("#font_size").val(fontsize);
}
function makeFonts(size){
	$("#content").css("font-size",size);
}
function checkVals(){
	if ($("#bold").val() != "0") {
		makeBold();
	}
	if ($("#font_size").val() != "12") {
		makeFonts($("#font_size").val());
	}
	if ($("#italic").val() != "0") {
		makeItalic();
	}
}
