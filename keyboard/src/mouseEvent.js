export const mouseEvent = () => {
  let capsLock = false;
  window.addEventListener('mousedown', function (e) {
    let keys = document.querySelectorAll('[data-key]');
    let textArea = document.querySelector('.monitor');
    let str = '';
    keys.forEach((key) => {
      if (e.target.getAttribute('data-key') === key.getAttribute('data-key')) {
        key.classList.add('key-active');
        if (e.target.getAttribute('data-isFunc') === 'false') {
          str += key.firstChild.textContent;
          textArea.value += str;
        } else if (e.target.getAttribute('data-isFunc') === 'true') {
          if (e.target.getAttribute('data-key') === '13') {
            str += '\n';
            textArea.value += str;
          }
          if (e.target.getAttribute('data-key') === '9') {
            str += '\t';
            textArea.value += str;
          }
          if (e.target.getAttribute('data-key') === '32') {
            str += '';
            textArea.value += str;
          }
          if (e.target.getAttribute('data-key') === '37') {
            textArea.setSelectionRange(
              textArea.selectionStart - 1,
              textArea.selectionStart - 1
            );
          }
          if (e.target.getAttribute('data-key') === '39') {
            textArea.setSelectionRange(
              textArea.selectionStart + 1,
              textArea.selectionStart + 1
            );
          }
          if (e.target.getAttribute('data-key') === '38') {
            textArea.setSelectionRange(
              textArea.selectionStart - textArea.cols,
              textArea.selectionStart - textArea.cols
            );
          }
          if (e.target.getAttribute('data-key') === '40') {
            textArea.setSelectionRange(
              textArea.selectionStart + textArea.cols,
              textArea.selectionStart + textArea.cols
            );
          }
          if (e.target.getAttribute('data-key') === '46') {
			  let pos=textArea.selectionStart
			textArea.setRangeText('', pos,pos+1,'select');
			// // textArea.selectionStart=textArea.selectionStart-2
            // textArea.value =
            //   textArea.value.slice(0, textArea.selectionStart) +
            //   textArea.value.slice(textArea.selectionStart + 1);
			}
        }
	}
	});
	console.log(textArea.selectionStart);
	console.log(textArea.selectionEnd);
  });
  window.addEventListener('mouseup', function (e) {
    let textArea = document.querySelector(".monitor");
    textArea.focus();

    let keys = document.querySelectorAll(`[data-key]`);
    keys.forEach((key) => {
      if (key.getAttribute('data-key') === e.target.getAttribute('data-key')) {
        key.classList.remove('key-active');
      }
    });
  });
  window.addEventListener('click', function (e) {
    let keys = document.querySelectorAll(`[data-key]`);
    keys.forEach((key) => {
      if (
        e.target.getAttribute('data-key') === key.getAttribute('data-key') &&
        e.target.getAttribute('data-key') === '20'
      ) {
        capsLock = !capsLock;
        if (capsLock) {
          key.lastChild.classList.add('tc');
          key.lastChild.classList.remove('tr');
        } else {
          key.lastChild.classList.remove('tc');
          key.lastChild.classList.add('tr');;
        }
      }
    });
    if (capsLock) {
      document.querySelectorAll('[data-isFunc=false]').forEach((key) => {
        key.firstChild.textContent = key.firstChild.textContent.toUpperCase();
      });
    } else {
      document.querySelectorAll('[data-isFunc=false]').forEach((key) => {
        key.firstChild.textContent = key.firstChild.textContent.toLowerCase();
      });
    }
  });
};
