export const keyEvent = () => {
  let textArea = document.querySelector('.monitor');
  let caps = true;
  window.addEventListener('keydown', function (e) {
    let keys = document.querySelectorAll(`[data-key]`);
    let str = '';
    textArea.focus();

    // console.log(position);
    keys.forEach((key) => {
      if (key.getAttribute('data-key') === e.keyCode.toString()) {
        key.classList.add('key-active');

        if (key.getAttribute('data-isFunc') === 'false') {
        } else {
          if (e.keyCode === 13) {
            str += '\n';
            textArea.value += str;
          }
          if (e.keyCode === 9) {
            str += '\t';
            textArea.value += str;
          }
          if (e.keyCode === 32) {
            str += ' ';
            textArea.value += str;
          }
          if (e.keyCode === 37) {
            textArea.setSelectionRange(
              textArea.selectionStart - 1,
              textArea.selectionStart - 1
            );
          }
          if (e.keyCode === 39) {
            textArea.setSelectionRange(
              textArea.selectionStart + 1,
              textArea.selectionStart + 1
            );
          }
          if (e.keyCode === 38) {
            textArea.setSelectionRange(
              textArea.selectionStart - textArea.cols,
              textArea.selectionStart - textArea.cols
            );
          }
          if (e.keyCode === 40) {
            textArea.setSelectionRange(
              textArea.selectionStart + textArea.cols,
              textArea.selectionStart + textArea.cols
            );
          }
          if (e.keyCode === 8) {
            textArea.setSelectionRange(
              textArea.selectionStart - 1,
              textArea.selectionStart - 1
            );
            textArea.value =
              textArea.value.slice(0, textArea.selectionStart) +
              textArea.value.slice(textArea.selectionStart + 1);
          }
          if (e.keyCode === 16) {
            let items = document.querySelectorAll(".key");
            items.forEach((item) => {
              if (item.getAttribute('data-isFunc') === 'false') {
                let r = item.firstChild.textContent;
                r = item.firstChild.textContent.toUpperCase();
                item.firstChild.textContent = r;
              }
            });
          }
          // if (e.keyCode === 20 && caps === false) {
          //   caps = !caps;
          //   let items = document.querySelectorAll('.key');
          //   items.forEach((item) => {
          //     if (item.getAttribute('data-isFunc') === 'false') {
          //       let r = item.firstChild.textContent;
          //       r = item.firstChild.textContent.toLowerCase();
          //       item.firstChild.textContent = r;
          //     }
          //     })
          //     console.log(111);
          //   }
          // if (e.keyCode === 20 && caps === true) {
          //   caps = !caps;
          //   let items = document.querySelectorAll('.key');
          //   items.forEach((item) => {
          //     if (item.getAttribute('data-isFunc') === 'false') {
          //       let r = item.firstChild.textContent;
          //       r = item.firstChild.textContent.toUpperCase();
          //       item.firstChild.textContent = r;
          //     }
          //   });
          //   console.log(222);
          // }
        }
      }
    });
  });
  window.addEventListener('keyup', function (e) {
    let keys = document.querySelectorAll(`[data-key]`);
    keys.forEach((key) => {
      if (key.getAttribute('data-key') === e.keyCode.toString()) {
        key.classList.remove('key-active');
      }
      if (e.keyCode === 16) {
        let items = document.querySelectorAll(".key");
        items.forEach((item) => {
          if (item.getAttribute('data-isFunc') === 'false') {
            let r = item.firstChild.textContent;
            r = item.firstChild.textContent.toLowerCase();
            item.firstChild.textContent = r;
          }
        });
      }
    });
  });
  window.addEventListener('keydown', function (e) {
    let keys = document.querySelectorAll('.key');
    if (e.key=== 'CapsLock' && caps === false) {
      console.log(55);
      keys.forEach((key) => {
        if (key.getAttribute('data-isFunc') === 'false') {
          let r = key.firstChild.textContent;
          r = key.firstChild.textContent.toLowerCase();
          key.firstChild.textContent = r;
        }
      }
      );
      document.querySelector('.key[data-key="20"]').lastChild.classList.remove('tc');
      document.querySelector('.key[data-key="20"]').lastChild.classList.add('tr');
      caps = !caps;
    }
    else if(e.key === 'CapsLock' && caps === true) {
      keys.forEach((key) => {
        if (key.getAttribute('data-isFunc') === 'false') {
          let r = key.firstChild.textContent;
          r = key.firstChild.textContent.toUpperCase();
          key.firstChild.textContent = r;
        }
      }
      );
      document.querySelector('.key[data-key="20"]').lastChild.classList.remove('tr');
      document.querySelector('.key[data-key="20"]').lastChild.classList.add('tc');
      caps = !caps;
      console.log(66);
    }
  })
};
