$(document).ready(function(){

step(50, 0, -2, 1);	
step(10, 0, 2, 2)
step(57, 1, -2, 3);
step(1, 1, 2, 4);
step(62, -1, -2, 5);
step(6, -1, 2, 6);
step(54, 0, -1, 7);
step(14, 0, 1, 8);
step(61, 1, -1, 9);
step(5, 1, 1, 10);
step(60, 2, 0, 11);
step(63,-2, 0, 11);
step(4, 2, 0, 12);
step(7, -2, 0, 12);
step(51, 0, -2, 13);
step(10, 1, 3, 14);
//capture 51
takePiece(51, 15);
step(62, -3, -3, 15);
//capture 10
takePiece(10, 16);
step(1, 2, 4, 16);
//capture 62
takePiece(62, 17);


step(59, 0, -3, 17);
//capture 1
takePiece(1, 18);
step(11, 0, 1, 18);
step(58, 4, -4, 19);
step(2, 2, 2, 20);
step(59, 2, -3, 21);
step(3, -3, 3, 22);
step(56, 2, 0, 23);
step(0, 1, 0, 24);
step(49, 0, -1, 25);
step(7, -5, 0, 26);
step(59, 0, -1, 27);
step(8, 0, 1, 28);
step(58, 2, -2, 29);
step(9, 0, 2, 30);
step(58, -2, -6, 31);
step(9, 1, 3, 32)
//captures 50
takePiece(50, 33);
step(58, -1, -7, 33);
//captures 0
takePiece(0, 34);
step(7, -6, 0, 34)	
//captures 58
takePiece(58, 35);
step(49, 1, -2, 35);
//captures 9
takePiece(9, 36);
step(2, 0, 4, 36);
//captures 49
takePiece(49, 37);
step(63, -4, 0, 37);
step(6, -3, 1, 38);
step(57, 2, -4, 39);
step(3, 0, 6, 40);
//captures 59
takePiece(59, 41);
step(57, 3, -6, 41);
takePiece(12, 42);
//Part 2

step(4, 1, 0, 42);
step(63, -4, -1, 43);
takePiece(3, 44);
step(4, 0, 1, 44);
takePiece(57, 45);
step(56, 2, -3, 45);
takePiece(2, 46);
step(7, -6, 7, 46);
step(61, 0, 0, 47);
step(6, -4, 3, 48);
step(60, 2, -1, 49);
step(8, 0, 2, 50);
step(52, 0, -2, 51);
step(5, -5, 7, 52);
step(53, 0, -2, 53);
step(13, 0, 1, 54);
step(63, -3, -1, 55);
step(4, 0, 2, 56);
step(63, -5, -1, 57);
step(5, -4, 6, 58);
step(61, -1, -1, 59);
step(15, 0, 2, 60);
step(63, -4, -1, 61);
step(5, -5, 5, 62);
step(53, 0, -3, 63);
step(14, -1, 2, 64);
takePiece(53, 65);
step(52, 1, -3, 65);
takePiece(14, 66);
step(4, 0, 3, 66);
step(56, 3, -3, 67);
step(4, 1, 3, 68);
takePiece(52, 69);
step(56, 3, -4, 69);
step(4, 0, 2, 70);
step(56, 3, -5, 71);
takePiece(11, 72);
step(4, 0, 1, 72);
step(56, 2, -5, 73);
	
	function step(piece, x, y, time){

	setTimeout(function(){move(piece, x, y)}, time*4000);	
	
	}
	
	function takePiece(piece, time){

	//$('#'+piece).children('.piece').children('img').css('z-index', '-1');
	setTimeout(function(){$('#'+piece).children('.piece').children('img').hide()}, time*4000-2000-500);	
	//$('#'+piece).children('.piece').children('img').css('z-index', '0');	
		
	}
	
	
	function move(id, x, y, callback){
	
	$('#'+id).children('.piece').children('img').css('transition-duration', '2s');
	
	$('#'+id).children('.piece').children('img').css('transform', 'translate3d('+x*28+'px,'+y*28+'px, 0px)');
		
	}
	
});