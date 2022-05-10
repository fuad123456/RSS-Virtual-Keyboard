import { createKey } from "./src/createKey.js"; // \n

import { dataEn, dataRu } from "./src/data.js";

import { keyEvent } from "./src/keyEvent.js";
import { createMonitor } from "./src/createMonitor.js"; // Создание монитора
import { mouseEvent } from "./src/mouseEvent.js";
// import { mouseEvent } from './src/mouseEvent';

let tab = false;

class KeyBoard {
  constructor(classes) {
    this.KeyBoard = document.createElement("div");
    this.classes = classes;
    this.tab = tab;
	this.message=document.createElement("div");
  }
  createMessage(){
	  this.message.innerHTML="Для выбора языка нажмите клавишу 'Lang' или используйте сочетание клавиш 'Shift+Alt'";
	  this.message.classList.add("message");
	  document.body.appendChild(this.message);
  }
  addClasses() {
    this.KeyBoard.classList.add(...this.classes);
  }
  append(key) {
    this.KeyBoard.appendChild(key);
  }
  // создание клавиатуры
  appendKeys(keys) {
    keys.forEach((key) => {
      this.append(key);
    });
  }
  createKeys(data) {
    let keys = data.map(function (key) {
      if (key.sec.inner !== undefined) {
        return createKey(
          "button",
          ["key"],
          key.lit,
          "button",
          "span",
          key.sec.inner,
          key.sec.class,
          key.code,
          key.isFunc
        );
      } else {
        return createKey(
          "button",
          ["key"],
          key.lit,
          key.type,
          "span",
          "",
          "",
          key.code,
          key.isFunc
        );
      }
    });
    return keys;
  }
  //подсветка клавиши при нажатии
  keyIlluminator(keys) {
    keys.forEach((key) => {
      key.addEventListener("mousedown", function (e) {
        key.classList.add("key-active");
        // console.log(e);
      });
      key.addEventListener("mouseup", function (e) {
        e.target.classList.remove("key-active");
      });
    });
  }

  render() {
    document.body.appendChild(this.KeyBoard);
  }
}
document.body.appendChild(createMonitor());
let keyBoard = new KeyBoard(["key-board"]);
keyBoard.addClasses();
keyBoard.appendKeys(keyBoard.createKeys(dataEn));

keyBoard.render();
keyBoard.keyIlluminator(document.querySelectorAll(".key"));
keyEvent();
mouseEvent();
keyBoard.createMessage();
// document.onkeydown = function (e) {
//   return false;
// };

window.addEventListener("keydown", function (e) {
  if (e.altKey && e.shiftKey) {
    if (localStorage.getItem("lang") === null) {
      console.log(444);
      localStorage.setItem("lang", "en");
    }
    if (localStorage.getItem("lang") == "en") {
      document.querySelectorAll(".key").forEach((key) => {
        if (key.getAttribute("data-isFunc") === "false") {
          dataRu.forEach((el) => {
            if (el.code === key.getAttribute("data-key")) {
              return (key.firstChild.textContent = el.lit);
            }
          });
        }
      });
    }
    if (localStorage.getItem("lang") === "ru") {
      document.querySelectorAll(".key").forEach((key) => {
        if (key.getAttribute("data-isFunc") === "false") {
          if (key.getAttribute("data-isFunc") === "false") {
            dataEn.forEach((el) => {
              if (el.code === key.getAttribute("data-key")) {
                // console.log(el.lit);
                return (key.firstChild.textContent = el.lit);
              }
            });
          }
        }
      });
    }
    if (localStorage.getItem("lang") === "en") {
      localStorage.setItem("lang", "ru");
      console.log(localStorage.getItem("lang"));
    } else {
      localStorage.setItem("lang", "en");
      console.log(localStorage.getItem("lang"));
    }
  }
});

window.addEventListener("load", function (e) {
  if (localStorage.getItem("lang") === "en") {
    console.log("This is en");
    document.querySelectorAll(".key").forEach((key) => {
      if (key.getAttribute("data-isFunc") === "false") {
        dataEn.map((el) => {
          if (el.code === key.getAttribute("data-key")) {
            return (key.firstChild.textContent = el.lit);
          }
        });
      }
    });
  }
  if (localStorage.getItem("lang") === "ru") {
    document.querySelectorAll(".key").forEach((key) => {
      if (key.getAttribute("data-isFunc") === "false") {
        dataRu.map((el) => {
          if (el.code === key.getAttribute("data-key")) {
            return (key.firstChild.textContent = el.lit);
          }
        });
      }
    });
  }
  // }
});
// localStorage.clear();
console.log(localStorage.getItem("lang"));
