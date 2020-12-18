var song;
var songs = ['8 Parche.mp3','Apna Time Aayega.mp3','Baby Marvake Manegi.mp3','Bam Bhole.mp3','Bhurj Khalifa.mp3','Daimond.mp3','Firse Machanyenge.mp3','Illegal Weapon.mp3','Lagdi Lahore Di.mp3','Nach Meri Rani.mp3'];
var play,pause,next,previous;

var currentSong = 0;         

function preload(){           
    song = loadSound('Songs/'+songs[currentSong])
}

function setup() {
  createCanvas(500,500);
//Play Button
play = createButton('Play');
play.position(displayWidth/2-150,displayHeight/2+100);
play.size(50,25);

//Pause button
pause = createButton('Pause');
pause.position(displayWidth/2-50,displayHeight/2+100)
pause.size(50,25);

//Next Button
next = createButton('Next');
next.position(displayWidth/2+60,displayHeight/2+100); 
next.size(50,25);

//Previous Button
previous = createButton('Previous');
previous.position(displayWidth/2+150,displayHeight/2+100)
previous.size(70,25);

}

function draw() {
  background(rgb(162, 255, 255));
  drawSprites();
  
  textFont('The Roman Times');
  textSize(40);
  fill(0);
  text(songs[currentSong], 150, 300);

play.mousePressed(playSound);
pause.mousePressed(stopSound);

next.mousePressed(() =>{
  currentSong = currentSong+1;
  nextSong(currentSong);
});

}

function nextSong(songNumber){
  
  if(song.isPlaying()){
    song.stop();
  }
  song = loadSound('Songs/'+songs[songNumber],resumePlay);
}

function resumePlay(){
  if(song.isPlaying()){
    song.stop();
  }
  else{
    song.play();
  }
}

function playSound(){
  if (song.isPlaying() == false) {
    song.play();
  }
}

function stopSound(){
  if (song.isPlaying() == true) {
    song.stop();
  }
}

