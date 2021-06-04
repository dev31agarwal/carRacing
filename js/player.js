class Player{
    constructor(){
        this.name=0;
        this.distance=0;
        this.index=0;
        this.rank=0;
    }
    getRank(){
        database.ref('rank').on("value",
           function(data){
           this.rank=data.val();
           })
    }
    getCount(){
        database.ref('playerCount').on("value", 
        function(data){
            playerCount= data.val();
        })
    }

    updateRank(x){
        database.ref('/').update({
            rank:x
        })

    }
    updateCount(x){
        database.ref('/').update({
            playerCount:x
        })
    }

    update(){

        var playerIndex="Players/player"+player.index;
        database.ref(playerIndex).update({
            distance: this.distance,
            name: this.name,
    })
}

getPlayerInfo(){
    database.ref('Players').on("value", (data)=>{
        allPlayers= data.val()
    })
}
}