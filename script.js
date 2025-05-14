// Navegação suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Alerta simples ao clicar no WhatsApp (exemplo de funcionalidade)
const contatoLink = document.querySelector('a[href^="https://wa.me"]');
if (contatoLink) {
  contatoLink.addEventListener('click', () => {
    alert("Você será redirecionado para o WhatsApp do projeto AWIRE DIGIT@L.");
  });
}
