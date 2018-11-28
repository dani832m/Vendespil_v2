/*  Dette script anvendes ikke på nuværende tidspunkt.
    Det indeholder bl.a. forsøg på løsninger til v.1.0 af huskespillet.  */

/*
 function showCard(id, primary, secondary) {
  src = document.getElementById(id).src;
  if (src.match(primary)) {
    document.getElementById(id).src = secondary;
  } else {
    document.getElementById(id).src = primary;
  }
  */

function showCard(id, pairNo) {
  document.getElementById(id).src = pairNo;
}

function match() {
  item01 = document.getElementById("item01").src;
  item02 = document.getElementById("item02").src;
  item03 = document.getElementById("item03").src;
  item04 = document.getElementById("item04").src;
  item05 = document.getElementById("item05").src;
  item06 = document.getElementById("item06").src;
  item07 = document.getElementById("item07").src;
  item08 = document.getElementById("item08").src;
  item09 = document.getElementById("item09").src;
  item10 = document.getElementById("item10").src;
  item11 = document.getElementById("item11").src;
  item12 = document.getElementById("item12").src;
  item13 = document.getElementById("item13").src;
  item14 = document.getElementById("item14").src;
  item15 = document.getElementById("item15").src;
  item16 = document.getElementById("item16").src;

  if (item01.match(item15) && item01 !== "img/backside.png" && item15 !== "img/backside.png") {
    document.getElementById("item01").style.display = "none";
    document.getElementById("item15").style.display = "none";
  }
  if (item02.match(item07) && item02 !== "img/backside.png" && item07 !== "img/backside.png") {
    document.getElementById("item01").style.display = "none";
    document.getElementById("item15").style.display = "none";
  }
  if (item03.match(item12) && item03 !== "img/backside.png" && item12 !== "img/backside.png") {
    document.getElementById("item01").style.display = "none";
    document.getElementById("item15").style.display = "none";
  }
  if (item04.match(item11) && item04 !== "img/backside.png" && item11 !== "img/backside.png") {
    document.getElementById("item01").style.display = "none";
    document.getElementById("item15").style.display = "none";
  }
  if (item05.match(item08) && item05 !== "img/backside.png" && item08 !== "img/backside.png") {
    document.getElementById("item01").style.display = "none";
    document.getElementById("item15").style.display = "none";
  }
  if (item06.match(item16) && item06 !== "img/backside.png" && item16 !== "img/backside.png") {
    document.getElementById("item01").style.display = "none";
    document.getElementById("item15").style.display = "none";
  }
  if (item09.match(item14) && item09 !== "img/backside.png" && item14 !== "img/backside.png") {
    document.getElementById("item01").style.display = "none";
    document.getElementById("item15").style.display = "none";
  }
  if (item10.match(item13) && item10 !== "img/backside.png" && item13 !== "img/backside.png") {
    document.getElementById("item01").style.display = "none";
    document.getElementById("item15").style.display = "none";
  }
}

function test() {
  alert("Hello, this is a test!");
}