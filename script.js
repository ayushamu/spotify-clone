console.log('Welcome to spotify')

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "song c Salam-e-ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "song d Salam-e-ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Salam-e-ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Salam-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Salam-e-ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Salam-e-ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Salam-e-ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


// audioElement.play();


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

//listn to events
audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays =()=>(
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-circle-play");
        

})
)
    

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays(); // Reset all icons to play
       

        // Update the clicked icon to pause
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-pause-circle");

        // Get song index and play it
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
         masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();

        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    });
});



document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9)
        songIndex += 0;
    else(songIndex) += 1;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
        songIndex = 0;
    else(songIndex) -= 1;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})