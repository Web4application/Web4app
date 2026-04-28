(function(){
  const data = window.__SITE_DATA__ || {};
  const ORG = window.__ORG__ || 'Web4application';
  const container = document.getElementById('sections');
  const searchEl = document.getElementById('search');

  function isDomain(s){
    return /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s) || s.includes('.github.io');
  }

  function repoLink(name){
    const slug = name.replace(/\s+/g, '-');
    return `https://github.com/${ORG}/${encodeURIComponent(slug)}`;
  }

  function render(filter=''){
    container.innerHTML = '';
    const q = (filter||'').trim().toLowerCase();
    for(const section of data.sections || []){
      const items = section.items.map(text => {
        const visible = !q || text.toLowerCase().includes(q);
        return { text, visible };
      }).filter(x=>x.visible);
      if(!items.length) continue;

      const card = document.createElement('section');
      card.className = 'card';
      card.id = section.id;
      card.innerHTML = `
        <header>
          <h3>${section.label}</h3>
          <span class="pill">${items.length}</span>
        </header>
        <ul class="list"></ul>
      `;
      const ul = card.querySelector('.list');
      for(const it of items){
        const li = document.createElement('li');
        li.className = 'item';
        let content = '';
        const text = it.text;
        if(section.type === 'domain' || isDomain(text)){
          const href = text.startsWith('http') ? text : 'https://' + text;
          content = `<span class="icon">🌐</span><a href="${href}" target="_blank" rel="noopener">${text}</a>`;
        } else if(section.type === 'repo' || /^[A-Za-z0-9_\- ]+$/.test(text)){
          const href = repoLink(text);
          content = `<span class="icon">📦</span><a href="${href}" target="_blank" rel="noopener">${text}</a>`;
        } else {
          const href = repoLink(text);
          content = `<span class="icon">🚀</span><a href="${href}" target="_blank" rel="noopener">${text}</a>`;
        }
        li.innerHTML = content;
        ul.appendChild(li);
      }
      container.appendChild(card);
    }
  }

  searchEl.addEventListener('input', e => render(e.target.value));
  render();
})();
