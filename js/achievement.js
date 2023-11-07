const achievements = ["First Time!", "Solid Gold", "Perfect Score"];

let activeAchievement = [false,false,false];

function createAchievements(){
  let achieveTab = document.getElementById("achievements");
  for(let i = 0; i < achievements.length; i++){
    let achievement = document.createElement("div");
    achievement.setAttribute("id","achievement" + i);
    achievement.textContent = achievements[i];
    achieveTab.append(achievement);
  }
}
function checkForAchievements(){
    //First Time Achievement 
    console.log(checkWin());
    if(checkWin() && activeAchievement[0] != true){
        activeAchievement[0] = true;
    }
    console.log("Check_Achievement_1");
    //Solid Gold Achievement
    if(score == 2 && activeAchievement[1] != true){
        if(document.getElementById(checkOne).getAttribute("src") == "img/Gold_Item_Card.png"){
           activeAchievement[1] = true;
        }
    }
    console.log("Check_Achievement_2");
    //Perfect Score Achievement
    if(activeAchievement[2] != true) {
        if(checkWin() && score == 16){
            activeAchievement[2] = true;
        }
    }
    console.log("Check_Achievement_3");
    displayAchievements()
}
function displayAchievements(){
    if(activeAchievement[0]){
        document.getElementById("achievement0").style.display = "block"; 
    }
    if(activeAchievement[1]){
        document.getElementById("achievement1").style.display = "block";
    }
    if(activeAchievement[2]){
        document.getElementById("achievement2").style.display = "block";
    }
}


