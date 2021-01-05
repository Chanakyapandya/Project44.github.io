class Drop {

constructor(x,y){


    var options = {
        timeScale : 0.5
    }

this.body = Bodies.rectangle(x,y,10,100,options);

World.add(myWorld,this.body);



}

display(selectedText){
fill(170,250,170);
for(var i =0; i < selectedText.length; i++){
textSize(25);
text(selectedText.charAt(i),this.body.position.x,this.body.position.y+i*30);


}


}



}