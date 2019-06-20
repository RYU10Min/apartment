var r;
function rock(){
    r =  3*Math.random();
    document.getElementById("myChoice").innerHTML = "<img src=\'images/石头.png\'/>";
    var computerResult = computerChoice();
    judge("rock",computerResult);
}
function scissors(){
    r =  3*Math.random();
    document.getElementById("myChoice").innerHTML = "<img src=\'images/剪刀.png\'/>";
    var computerResult = computerChoice();
    judge("scissors",computerResult);
}
function paper(){
    r =  3*Math.random();
    document.getElementById("myChoice").innerHTML = "<img src=\"images/布.png\"/>";
    var computerResult = computerChoice();
    judge("paper",computerResult);
}
function judge(myChoice ,computerResult){
    if(myChoice=="rock"){
        if (computerResult=="rock") {
            document.getElementById("result").innerHTML = "平局";
        }
        else if (computerResult=="scissors") {
            document.getElementById("result").innerHTML = "赢了";
        }
        else{
            document.getElementById("result").innerHTML = "输啦";
        }
    }
    else if(myChoice=="scissors"){
        if (computerResult=="rock") {
            document.getElementById("result").innerHTML = "输啦";
        }
        else if (computerResult=="scissors") {
            document.getElementById("result").innerHTML = "平局";
        }
        else{
            document.getElementById("result").innerHTML = "赢了";
        }
    }
    else{
        if (computerResult=="rock") {
            document.getElementById("result").innerHTML = "赢了";
        }
        else if (computerResult=="scissors") {
            document.getElementById("result").innerHTML = "输啦";
        }
        else{
            document.getElementById("result").innerHTML = "平局";
        }
    }
}
function go(){
}
function computerChoice(){
    if (r < 1){
        document.getElementById("computerChoice").innerHTML = "<img src='images/石头.png'>";
        return "rock";
    }
    else if (r <2){
        document.getElementById("computerChoice").innerHTML = "<img src='images/剪刀.png'>";
        return "scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML = "<img src='images/布.png'>";
        return "paper";
    }
}