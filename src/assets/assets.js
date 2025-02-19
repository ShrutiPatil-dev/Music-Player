import Cover1 from './Cover1.png'
import Cover2 from './Cover2.jpg'
import Cover3 from './Cover3.png'
import Cover4 from './Cover4.jpg'
import Cover5 from './Cover5.jpg'
import Cover6 from './Cover6.jpg'
import Cover7 from './Cover7.jpg'
import Cover8 from './Cover8.jpg'
import Cover9 from './Cover9.jpg'
import Cover10 from './Cover10.jpeg'
import song1 from './Song1.mp3'
import song2 from './Song2.mp3'
import song3 from './Song3.mp3'
import song4 from './Song4.mp3'
import song5 from './Song5.mp3'
import song6 from './Song6.mp3'
import song7 from './Song7.mp3'
import song8 from './Song8.mp3'
import song9 from './Song9.mp3'
import song10 from './Song10.mp3'
import Play_icon from './Play.png'
import Pause_icon from './Pause.png'
import Home_icon from './home.png'
import Stack from './stack.png'
import Plus from './plus.png'
import Album1 from './Album1.jpg'
import Album2 from './Album2.jpg'
import Album3 from './Album3.jpg'
import Album4 from './Album4.jpg'
import Album5 from './Album5.jpg'
import Album6 from './Album6.jpg'



export const assets = {
	Play_icon,
	Pause_icon,
	Home_icon,
	Stack,
	Plus
}



export const songsData = [
    {
        id:0,
        name: "Matilda",
        image: Cover1,
        file:song1,
		artist: "Harry Styles",
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        id:1,
        name: "Him & I",
        image: Cover2,
        file:song2,
		artist: "G-Eazy and Halsey" ,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "Eastside",
        image: Cover3,
        file:song3,
		artist: "Benny Blanco, Halsey, and Khalid" ,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "Baby",
        image: Cover4,
        file:song4,
		artist: "Justin Bieber" ,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    },
    {
        id:4,
        name: "Photograph",
        image: Cover5,
        file:song5,
        artist: "Ed Sheeran" ,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        id:5,
        name: "Perfect",
        image: Cover6    ,
        file:song6,
        artist: "Ed Sheeran" ,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:6,
        name: "Night Changes",
        image: Cover7,
        file:song7,
        artist: "One Direction" ,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        id:7,
        name: "In the stars",
        image: Cover8,
        file:song8,
        artist: " Benson Boone" ,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    },

    {
        id:8,
        name: "I wanna be slave",
        image: Cover9,
        file:song9,
        artist: "Måneskin" ,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    },
    {
        id:9,
        name:" Until I found you",
        image: Cover10,
        file:song10,
        artist: "Stephen Sanchez" ,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
]

export const albumsData = [
    {   
        id:0,
        name: "Mega Hits",
        image: Album1,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Trending India",
        image: Album2,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Top 50 India",
        image: Album3,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Happy Favorites ",
        image: Album4,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Top 50 Global",
        image: Album5,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Trending Global",
        image: Album6,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]
