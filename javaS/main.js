let count = 0; // Переменная для хранения числа

function addOne() {
    count +=2;// Увеличиваем на 1// Выводим
    updateCounter()
}
function remoove(){
    if (count ===0){
        alert("Счётчик уже нулевой!");
    }
    else{
        count = 0;
    }
    updateCounter()
}
function mooveOne(){
    if (count > 0){
        count -=2;
    } else {
    }
    updateCounter()
}
function updateCounter(){
    document.getElementById("counter").textContent = count;
}
var currentNum="?"
function random(){
    currentNum = Math.floor(Math.random()*100)
    document.getElementById("number").textContent = currentNum;
}
function reset(){
    if (currentNum === "?" ){
        alert("allready empty")
    }else {
        currentNum ="?"
    }
    document.getElementById("number").textContent = currentNum;
}

