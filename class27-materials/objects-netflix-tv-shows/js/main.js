//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NewNetflixShows{
    constructor(thumb, caption, file, star){
        this.thumbnail = thumb
        this.caption = caption
        this.video = file
        this.star = star
    }
    play(){
        console.log('Now playing...')
    }
    stop(){
        console.log('Enough')
    }
    preview(){
        console.log('Play preview')
    }
}
