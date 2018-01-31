// JavaScript Document

$(document).ready(function() {
    //This next section will select the c box and add
	//a play function to the box
	var c_note = document.getElementById('cNote');
	$('#c').mouseenter(function(){
			c_note.currentTime = 0;
			c_note.play();
		});
		//Set Function of D Note
		var d_note = document.getElementById('dNote');
	$('#d').mouseenter(function(){
			d_note.currentTime = 0;
			d_note.play();
		});
		//Set Function of E Note
		var e_note = document.getElementById('eNote');
	$('#e').mouseenter(function(){
			e_note.currentTime = 0;
			e_note.play();
		});
		//Set Function of F Note
		var f_note = document.getElementById('fNote');
	$('#f').mouseenter(function(){
			f_note.currentTime = 0;
			f_note.play();
		});
		//Set Function of G Note
		var g_note = document.getElementById('gNote');
	$('#g').mouseenter(function(){
			g_note.currentTime = 0;
			g_note.play();
		});
		//Set Function of A Note
		var a_note = document.getElementById('aNote');
	$('#a').mouseenter(function(){
			a_note.currentTime = 0;
			a_note.play();
		});
		//Set Function of B Note
		var b_note = document.getElementById('bNote');
	$('#b').mouseenter(function(){
			b_note.currentTime = 0;
			b_note.play();
		});
});