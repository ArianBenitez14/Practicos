const slugify = require('slugify');

const texto = '¡Quiero viajar a Bélgica & España!';
const slug = slugify(texto, {
  strict: true,
  lower: true,
  locale: 'es',
});

console.log(slug);
