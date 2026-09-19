document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  var header = document.querySelector('.site-header');

  function closeMenu() {
    if (!mainNav || !menuToggle) return;
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
  }

  function toggleMenu() {
    if (!mainNav || !menuToggle) return;

    var isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  function updateHeaderShadow() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }

  updateHeaderShadow();
  window.addEventListener('scroll', updateHeaderShadow, { passive: true });

  if (mainNav) {
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    answer.style.maxHeight = '0px';

    question.addEventListener('click', function () {
      var isOpen = question.getAttribute('aria-expanded') === 'true';

      faqItems.forEach(function (otherItem) {
        var otherQuestion = otherItem.querySelector('.faq-question');
        var otherAnswer = otherItem.querySelector('.faq-answer');

        if (otherQuestion && otherAnswer && otherQuestion !== question) {
          otherQuestion.setAttribute('aria-expanded', 'false');
          otherAnswer.style.maxHeight = '0px';
        }
      });

      question.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = isOpen ? '0px' : answer.scrollHeight + 'px';
    });
  });

  document.querySelectorAll('.js-pending-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });

  /* Formulário -> WhatsApp */
  var contatoForm = document.getElementById('contatoForm');
  var formError = document.getElementById('formError');
  var whatsappNumero = '5511933221902';

  if (contatoForm) {
    contatoForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var nomeEl = document.getElementById('nome');
      var contatoEl = document.getElementById('contatoInput');
      var mensagemEl = document.getElementById('mensagem');

      var nome = nomeEl ? nomeEl.value.trim() : '';
      var contato = contatoEl ? contatoEl.value.trim() : '';
      var mensagem = mensagemEl ? mensagemEl.value.trim() : '';

      if (!nome || !contato || !mensagem) {
        if (formError) {
          formError.textContent = 'Preencha todos os campos antes de enviar.';
          formError.classList.add('has-error');
        }
        return;
      }

      if (formError) {
        formError.textContent = '';
        formError.classList.remove('has-error');
      }

      var textoFormatado =
        'Olá, Raquel! Meu nome é ' + nome + '.\n' +
        'Contato: ' + contato + '\n' +
        'Mensagem: ' + mensagem;

      var url =
        'https://wa.me/' +
        whatsappNumero +
        '?text=' +
        encodeURIComponent(textoFormatado);

      window.open(url, '_blank', 'noopener,noreferrer');
      contatoForm.reset();
    });
  }
});
