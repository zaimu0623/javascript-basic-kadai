const btn = document.getElementById('btn');
const text = document.getElementById('text');

setTimeout(()=> {

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});

},2000);