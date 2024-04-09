let animalsArr = ["חתול", "כלב", "היפופוטם", "פינגווין", "עכבר", "ינשוף", "פרה", "נמלה", "טיגריס", "ברדלס", "זברה", "חולדה", "קנגרו", "תמנון", "קרנף", "גורילה","פיל","אריה","קוף","דולפין","נחש","גמל","זאב","כבשה","ארנבת","שועל","תוכי","צב","קואלה","תנין","כריש","טווס","דוב","לווייתן"];
let organsArr = ["לב", "יד", "רגל", "עין", "אוזן", "כבד", "לבלב", "אצבע", "אף", "פה", "שפתיים", "שן", "לשון", "ריסים", "עפעפיים", "מוח", "כליות", "עצמות", "ריאות"];
let fruitsArr = ["תפוח", "תפוז", "מנגו", "אבטיח", "אגס", "שזיף", "נקטרינה", "אשכולית", "גויאבה", "אפרסמון", "אפרסק", "פטל", "קלמנטינה", "פפאיה", "ענבים", "לימון","בננה", "אננס", "תות", "קיווי", "אוכמניות", "דובדבן", "קוקוס", "אבוקדו", "תאנה", "פסיפלורה", "רימון","מנגו","דובדבן"];
let countriesArr = ["קנדה", "מקסיקו", "ברזיל", "ארגנטינה", "בריטניה", "צרפת", "גרמניה", "איטליה", "ספרד", "רוסיה", "סין", "יפן", "הודו", "אוסטרליה", "אנגליה", "ישראל","הולנד","שוודיה","שוויץ","נורווגיה","מצרים","סוריה","לבנון","ירדן","תימן","אוסטריה","יוון","פורטוגל","פולין", "בלגיה","מרוקו", "תוניסיה","הונגריה","רומניה","בולגריה","אוקראינה","קרואטיה","פינלנד"];
let currentArr = eval(localStorage.getItem("category") + "Arr");//מערך הקטגוריה שנבחרה
console.log(currentArr)
let level = localStorage.getItem("level");//שליפת הרמה שנבחרה
console.log(currentArr.length)
let rand = Math.floor(Math.random() * (currentArr.length));
console.log(rand);
let wordRand = currentArr[rand];//המילה המוגרלת לניחוש
console.log(currentArr[rand])
let wordArea = document.querySelector("#word");
document.querySelector("#letter").focus();//פוקוס על תיבת הטקסט

let i,flag = false,imgExper,letter,countexper;

for (i = 0; i < wordRand.length; i++) {//הוספת אותיות המילה כפי האורך שלה
    let inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("id", "let" + i);
    inp.setAttribute("class", "wLetter")
    wordArea.appendChild(inp);
};
document.querySelector("#checkimg").addEventListener("click", checklet);//ארוע בדיקת האות בלחיצה על הבדוק
if (localStorage.getItem("category") == "animals") {//שמירת שם התמונה המתאימה לניסיונות
    imgExper = "owl"
}
else {
    if (localStorage.getItem("category") == "organs")
        imgExper = "heart"
    else {
        if (localStorage.getItem("category") == "fruits")
            imgExper = "apple"
        else
            imgExper = "planet-earth"
    }
}
let createimg = document.createElement("img");//יצירת התמונה המתאימה בהתאם לקטגוריה
createimg.src = "../../images/" + imgExper + "/" + imgExper + "15.png"
createimg.setAttribute("id", "imgExperience");
document.querySelector("#leftbar").appendChild(createimg);

let txtexper = document.querySelector("#txtexper");
if (level == 1) {//כתיבת כמות הניסיונות שנותרו בהתאם לרמה שנבחרה
    countexper = 15;
}
else
    countexper = 8
txtexper.textContent = " נותרו" + " " + countexper + " " + "ניסיונות ";

let imgfinish = document.querySelector("#imgfinish");
let cntcorrect = 0, arrletguess = [],imgl2count = 14;

document.body.addEventListener("keydown", function(event) {//בלחיצה על אנטר תופעל הפונקציה של בדיקת האות
  if (event.keyCode === 13) {
    checklet()
  }
});


function checklet() {//פונקציית בדיקת האות
    flag = false;
    letter = document.querySelector("#letter").value;

    if (letter == "") {
        // let mess=document.createTextNode("נא הכנס אות");
        //document.querySelector("#message").appendChild(mess);
        // console.log(mess);
        document.querySelector("#message").innerHTML="נא הכנס אות";
    }
    else {
        if (letter < 'א' || letter > 'ת') {
            // let mess=document.createTextNode();
            //document.querySelector("#message").appendChild(mess);
            // console.log(mess);
            document.querySelector("#message").innerHTML="הקלד אות בעברית בלבד!";
        }
        else {
            if (!arrletguess.includes(letter, 0)) {//בדיקה האם כבר הוזנה האות הנוכחית
                arrletguess.push(letter);
                document.querySelector("#lettersused").textContent += letter + ", ";
                for (i = 0; i < wordRand.length; i++) {//השמת האות הנכונה במקומות
                    if (wordRand[i] == letter) {
                        document.querySelector("#let" + i).value = letter;
                        flag = true;
                        cntcorrect++;
                        console.log(cntcorrect);
                        if (cntcorrect != wordRand.length) {
                            var audio = new Audio("../../sound/hummer.wav");
                            audio.play();
                        }
                    }
                }
                if (!flag) {//כאשר האות לא במילה
                    if(countexper != 1){
                        var audio =new Audio("../../sound/wistlupdn.wav");
                        audio.play();
                    }
                    countexper--;
                    txtexper.textContent = "נותרו " + " " + countexper + " " + " ניסיונות ";
                    if (level == 1)
                        createimg.src = "../../images/" + imgExper + "/" + imgExper + countexper + ".png";
                    else {
                        createimg.src = "../../images/" + imgExper + "/" + imgExper + imgl2count + ".png";
                        imgl2count = imgl2count - 2;
                    }
                }
                if (countexper == 0) {//כאשר נגמרו הניסיונות-כישלון
                    var audio =new Audio("../../sound/loss.wav");
                    audio.play();
                    let blackscreen = document.querySelector("#bg").style.visibility = "visible";
                    let finish = document.querySelector("#finish").style.visibility = "visible";
                    imgfinish.src = "../../images/gameOver.gif";
                    let cword = document.createElement("div");
                    cword.setAttribute("class", "cword");
                    let txt = document.createTextNode("המילה היא: " + " " + wordRand);
                    cword.appendChild(txt);
                    document.querySelector("#fin").appendChild(cword);

                }
                if (cntcorrect == wordRand.length) {//כשהושלמה כל המילה-ניצחון
                    var audio =new Audio("../../sound/win.wav");
                    audio.play();
                    let blackscreen = document.querySelector("#bg").style.visibility = "visible";
                    let finish = document.querySelector("#finish").style.visibility = "visible";
                    imgfinish.src = "../../images/win.gif";
                    let cword = document.createElement("div");
                    cword.setAttribute("class", "cword");
                    let txt1 = document.createTextNode("המילה היא: " + " " + wordRand);
                    cword.appendChild(txt1);
                    document.querySelector("#fin").appendChild(cword);
                    let txt2 = document.createTextNode("מס' הניחושים: " + " " + arrletguess.length);
                    let c2word = document.createElement("div");
                    c2word.setAttribute("class", "cword");
                    c2word.appendChild(txt2);
                    document.querySelector("#fin").appendChild(c2word);
                }

            }
        }
    }
    document.querySelector("#letter").value = "";//ריקון תיבת הטקסט של האות
    message.textContent="";
    document.querySelector("#letter").focus();//התפקסות על התיבה של האות
}


document.querySelector("#btnnewgame").addEventListener("click",startNewGame);

function startNewGame(){//פתיחת משחק חדש
    // window.close();
    var audio =new Audio("../../sound/clear.wav");
    audio.play();
    setTimeout(function () {
        location.href ="../../homepage.html" ;
    }, 700)

}




