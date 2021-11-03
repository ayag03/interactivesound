
var carol = document.getElementById("carol");
var interactive = document.getElementById("interactive");
var intro = document.getElementById("intro");


intro.addEventListener('click', function() {
 intro.style.display = "none";
});

interactive.addEventListener('mouseenter', () => {

 carol.play();
 document.body.style.backgroundColor = "lavender";

});

interactive.addEventListener('mouseleave', () => {

 carol.pause();
 document.body.style.backgroundColor = "lightblue";

});

const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
autoWah.Q.value = 6;
const synth = new Tone.Synth().connect(autoWah);

document.body.addEventListener('keydown', function(event){
 if(event.key == 'f')
 {
     synth.triggerAttackRelease("C4", "4n");
     document.body.style.backgroundColor = "lightpink";
 }
 else if(event.key == 'g')
 {
   synth.triggerAttackRelease("E4", "4n");
   document.body.style.backgroundColor = "lightgreen";
 }
 else if(event.key == 'h')
 {
   synth.triggerAttackRelease("G4", "4n");
   document.body.style.backgroundColor = "lightyellow";
 }
});

Tone.setContext(new Tone.Context({ latencyHint : "playback" }))
element.addEventListener('mousedown', function(){
	//instead of scheduling the synth immediately,
	//try scheduling 50ms in the future to avoid performance-related pops
	synth.triggerAttack('C4', '+0.05')
})
var loop = new Tone.Loop(function(time){
	//instead of scheduling visuals inside of here
	//schedule a deferred callback with Tone.Draw

	Tone.Draw.schedule(function(){
		//this callback is invoked from a requestAnimationFrame
		//and will be invoked close to AudioContext time

	}, time) //use AudioContext time of the event

}, "8n")
