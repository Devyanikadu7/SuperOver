var team1={
    name:"CSK",
    score:0,
    runs:[]
};
var team2={
    name:"MI",
    score:0,
    runs:[]
};
var score=[0,1,2,3,4,5,6]
var toss

console.log(team1)
console.log(team2)

window.onload=()=>{
selectToss();
updateName();
updateButtonText();
updateScores();
}

function selectToss(){
    toss=Math.round(Math.random())+1
    console.log(toss)
}

function updateName(){
    console.log("Team1 Name: "+team1.name)
    console.log("Team2 Name: "+team2.name)
}

function updateButtonText(){
    if(team1.runs.length==6 && team2.runs.length==6){
        console.log("Both teams finished their chances")
        //console.log(team1.score===team2.score?"It is a draw":)
    }
    else{
        toss=team1.runs.length==6?2:team2.runs.length==6?1:toss;
    }

    console.log(`${toss===1?team1.name:team2.name} Batting`)
}

function handleStrike(){
     console.log("Onclick Works!")
     var runs=score[Math.floor(Math.random()*score.length)]
     console.log(runs)

     if(toss===1){
        team1.runs.push(runs)
        console.log(team1.runs)
        team1.score=calculateScore(team1.runs)
     }
     else{
        team2.runs.push(runs)
        console.log(team2.runs)
        team2.score=calculateScore(team2.runs)
     }
     updateButtonText();
     updateScores();
}

var calculateScore=(runs)=>{
    return runs.map(num=>{return num;}).reduce((total,num)=>total+num);
}

function updateScores(){
    console.log("Team1 Score: "+team1.score)
    console.log("Team2 Score: "+team2.score)
}