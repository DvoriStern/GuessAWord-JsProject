
let level;//שומר את הרמה שנבחרה
let categorya;//שומר את הקטגוריה שנבחרה
let level1 = document.querySelector("#btnl1").addEventListener("click", chooseLevel)
let level2 = document.querySelector("#btnl2").addEventListener("click", chooseLevel)
document.querySelector("#manual").addEventListener("click",openManual);
let arr = document.querySelectorAll(".cate");//הוספת ארוע לכל כפתורי הקטגוריות
arr.forEach(e => {
   e.addEventListener("click", chooseCate)

});




function chooseLevel() {//כאשר נבחרה רמה- שמירת הרמה והצגת כפתורי הקטגוריות
   console.log(event.target.value);
   level = event.target.value;
   document.querySelector("#start").style.display = "none";
   document.querySelector("#category").style.display = "flex";
   document.querySelector("#leftbar").style.display="none";
   var audio =new Audio("sound/clickerx.wav");
   audio.play();
   //  audio.volume = 1;
}

function chooseCate() {//כשנבחרה קטגוריה- שמירת הקטגוריה והצגת עמוד התחלת משחק
   categorya = event.currentTarget.value;
   console.log(event.currentTarget.value);
   localStorage.setItem("level", level);//שמירה בדפדפן את הרמה שנבחרה 
   localStorage.setItem("category", categorya);//שמירה בדפדפן את הקטגוריה שנבחרה
   document.querySelector("#main").style.display = "none";
   var audio =new Audio("sound/clickerx.wav");
   audio.play();
   // audio.volume = 1;
   setTimeout(function () {
      location.href ="pages/HTML/game.html" ;
  }, 100)
}

function openManual(){//פתיחת ההוראות
   let blackscreen = document.querySelector("#bg").style.visibility = "visible";
   let popmenual = document.querySelector("#popmenual").style.visibility = "visible";
   var audio =new Audio("sound/move.wav");
   audio.play();
}

document.querySelector("#imgpopmenual").addEventListener("click",function(){//סגירת ההוראות והתחלת משחק
   let blackscreen = document.querySelector("#bg").style.visibility = "hidden";
   let popmenual = document.querySelector("#popmenual").style.visibility = "hidden";
   var audio =new Audio("sound/wistldn.wav");
   audio.play();
});
