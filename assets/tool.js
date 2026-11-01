/* ============================================================
   Utils Antarquía — helpers compartidos
   ============================================================ */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

let toastTimer;
function toast(msg) {
  let el = $('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('on'), 1600);
}

async function copyText(text) {
  if (!text) { toast('nada que copiar'); return; }
  try {
    await navigator.clipboard.writeText(text);
    toast('copiado');
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); toast('copiado'); }
    catch (_) { toast('no se pudo copiar'); }
    ta.remove();
  }
}

/* Botones con data-copy="<selector>" copian el texto del elemento */
document.addEventListener('click', (ev) => {
  const btn = ev.target.closest('[data-copy]');
  if (!btn) return;
  const target = $(btn.dataset.copy);
  if (!target) return;
  const value = 'value' in target && target.tagName !== 'DIV' ? target.value : target.innerText;
  copyText(value.trim());
});

/* Ctrl/Cmd + Enter ejecuta el botón con data-run */
document.addEventListener('keydown', (ev) => {
  if ((ev.metaKey || ev.ctrlKey) && ev.key === 'Enter') {
    const btn = $('[data-run]');
    if (btn) { ev.preventDefault(); btn.click(); }
  }
});

/* Descarga un texto como archivo */
function download(filename, text, type = 'text/plain') {
  const blob = new Blob([text], { type: type + ';charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
