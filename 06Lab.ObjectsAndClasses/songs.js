function songs(arrayOfSongs){

    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];
    let songsCount = arrayOfSongs.shift();
    let lastEl = arrayOfSongs.pop();
    //console.log(arrayOfSongs);

    for(let songArray of arrayOfSongs){
        let songInfo = songArray.split("_");
        //console.log(songInfo);
        let song = new Song(songInfo[0], songInfo[1], songInfo[2]);
        //console.log(song);
        songsArr.push(song);
        //console.log(songsArr);
        if(lastEl === "all"){
            console.log(songInfo[1]);
        }else if(lastEl === songInfo[0]){
            console.log(songInfo[1]);
        }
    }

   
    

   //console.log(arrayOfSongs);
  // console.log(songsArr);
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);