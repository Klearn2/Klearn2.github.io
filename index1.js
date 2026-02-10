(() => {
  const PASSWORD = 'makoto';
  const redirectUrl =
    'file:///home/chronos/u-cd218c46a82fade00246e444403aa9e3b8309d20/MyFiles/Downloads/%E3%81%B7%E3%82%8D%E3%81%90%E3%82%89%E3%81%BF%E3%82%93%E3%81%90/%E3%81%8F%E3%82%8C%E3%81%82%E3%83%BC%E3%82%93%EF%BC%92.html';

  const input = document.getElementById('pw');
  const msg = document.getElementById('msg');
  const btn = document.getElementById('submitBtn');

  function showMessage(text, ok = false){
    msg.textContent = text;
    msg.classList.remove('success', 'error');
    msg.classList.add(ok ? 'success' : 'error');
  }

  function wrong(){
    showMessage('パスワードが違います');
    input.classList.remove('shake');
    void input.offsetWidth; // 再描画トリガー
    input.classList.add('shake');
    input.value = '';
    input.focus();
  }

  function correct(){
    showMessage('認証に成功しました。移動します…', true);
    setTimeout(() => {
      location.href = redirectUrl;
    }, 500);
  }

  function tryPassword(){
    const val = input.value.trim();
    if(!val){
      showMessage('パスワードを入力してください');
      return;
    }
    val === PASSWORD ? correct() : wrong();
  }

  btn.addEventListener('click', tryPassword);
  input.addEventListener('keydown', e => {
    if(e.key === 'Enter') tryPassword();
  });

  input.focus();
})();
