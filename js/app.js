/* app.js - Contenido de la demo (el tejón melero) */

// Acordeón 1: ficha del animal (una abierta a la vez)
Mosaico.accordion('#ficha', [
  {
    title: '¿Qué es?',
    content: 'Un mamífero carnívoro de la familia de las comadrejas (Mellivora capensis). Mide entre 60 y 77 cm y pesa de 5 a 14 kg. Tiene el lomo gris claro y el vientre negro.',
    open: true
  },
  {
    title: '¿Dónde vive?',
    content: 'En África, en el suroeste de Asia y en el subcontinente indio. Habita en sabanas, bosques y desiertos.'
  },
  {
    title: '¿Qué come?',
    content: 'Casi de todo: <b>miel y larvas de abejas</b> (de ahí su nombre), insectos, roedores, huevos y hasta serpientes venenosas.'
  },
  {
    title: '¿Por qué es tan valiente?',
    content: 'Tiene la piel gruesa y suelta, garras muy fuertes y no se rinde. Se enfrenta a animales mucho más grandes, como leones o hienas.'
  }
], {
  onToggle: function (info) { console.log('Ficha:', info); }
});

// Acordeón 2: mismo componente, otro contenido, varias abiertas
Mosaico.accordion('#mitos', [
  { title: '¿Es inmune al veneno de serpiente?', content: 'Casi. Resiste muchos venenos, pero no es totalmente inmune. A veces una mordida lo deja dormido y se recupera después.' },
  { title: '¿Es el animal más valiente?', content: 'Verdad. Los récords mundiales lo han nombrado "el animal más intrépido".' },
  { title: '¿Está en peligro de extinción?', content: 'No en general: la UICN lo considera de "preocupación menor", pero algunas poblaciones locales sufren por la caza y el uso de veneno.' }
], {
  multiple: true,
  onToggle: function (info) { console.log('Mitos:', info); }
});