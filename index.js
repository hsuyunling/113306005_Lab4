document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function () {
    let letter = this.textContent.trim(); // 取得按鈕中的字母
    playSound(letter);
    buttonAnimation(letter);
  });
});

document.addEventListener("keydown", function (event) {
  let letter = event.key; // 取得按下的鍵值
  playSound(letter);
  buttonAnimation(letter);
});

function playSound(letter) {
  switch (letter) {
    case 'w':
      new Audio('crash.mp3').play();
      break;
    case 'a':
      new Audio('kick-bass.mp3').play();
      break;
    case 's':
      new Audio('snare.mp3').play();
      break;
    case 'd':
      new Audio('tom-1.mp3').play();
      break;
    case 'j':
      new Audio('tom-2.mp3').play();
      break;
    case 'k':
      new Audio('tom-3.mp3').play();
      break;
    case 'l':
      new Audio('tom-4.mp3').play();
      break;
    default:
      console.log("未綁定的鍵：" + letter);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  }
}



