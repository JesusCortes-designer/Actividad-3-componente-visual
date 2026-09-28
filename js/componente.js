/* Mosaico (solo Acordeón) */

class Accordion {
  constructor(contenedor, items = [], opciones = {}) {
    // Acepta un selector ('#faq') o un elemento del DOM
    this.root = typeof contenedor === 'string'
      ? document.querySelector(contenedor)
      : contenedor;

    if (!this.root) {
      console.error('Mosaico: no se encontró el contenedor', contenedor);
      return;
    }

    this.items = items;
    this.multiple = opciones.multiple || false; // true = varias abiertas a la vez
    this.onToggle = opciones.onToggle;          // función que se ejecuta al abrir/cerrar
    this.build();
  }

  // Crea todo el HTML del acordeón a partir del arreglo de items
  build() {
    this.root.innerHTML = '';
    this.root.classList.add('mo-acc');

    this.items.forEach((it, i) => {
      const item = document.createElement('div');
      item.className = 'mo-acc-item';

      const btn = document.createElement('button');
      btn.className = 'mo-acc-btn';
      btn.textContent = it.title;
      btn.setAttribute('aria-expanded', 'false');

      const panel = document.createElement('div');
      panel.className = 'mo-acc-panel';
      panel.innerHTML = it.content;

      btn.addEventListener('click', () => this.toggle(item, i));

      item.appendChild(btn);
      item.appendChild(panel);
      this.root.appendChild(item);

      if (it.open) this.setOpen(item, true); // abierta desde el inicio
    });
  }

  // Abre o cierra un item visualmente
  setOpen(item, abierto) {
    item.classList.toggle('mo-open', abierto);
    item.querySelector('.mo-acc-btn').setAttribute('aria-expanded', abierto);
  }

  toggle(item, indice) {
    const abrir = !item.classList.contains('mo-open');

    // Si no es "multiple", primero se cierran las demás
    if (!this.multiple) {
      this.root.querySelectorAll('.mo-acc-item').forEach((i) => this.setOpen(i, false));
    }

    this.setOpen(item, abrir);

    if (this.onToggle) {
      this.onToggle({ index: indice, title: this.items[indice].title, open: abrir });
    }
  }
}

/* API */
window.Mosaico = {
  accordion: (contenedor, items, opciones) => new Accordion(contenedor, items, opciones),
  Accordion
};