var WHATSAPP_NUMBER = '919876543210';

function toggleMenu(open) {
  var nav = document.getElementById('navLinks');
  var btn = document.getElementById('hamburgerBtn');
  if (!nav || !btn) return;
  var isOpen = typeof open === 'boolean' ? open : !nav.classList.contains('open');
  if (isOpen) {
    nav.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
}

function toggleFaq(btn) {
  var item = btn.parentElement;
  var answer = item.querySelector('.faq-a');
  var isActive = item.classList.contains('active');

  var allItems = document.querySelectorAll('.faq-item');
  for (var i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove('active');
    var q = allItems[i].querySelector('.faq-q');
    var ans = allItems[i].querySelector('.faq-a');
    if (q) q.setAttribute('aria-expanded', 'false');
    if (ans) ans.style.maxHeight = null;
  }

  if (!isActive) {
    item.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

function handleSubmit(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var mtype = document.getElementById('mtype').value;
  var issue = document.getElementById('issue').value;
  var area = document.getElementById('area').value;

  var msg =
    'Hi! I want to book a washing machine repair.%0A%0A' +
    '*Name:* ' + encodeURIComponent(name) + '%0A' +
    '*Phone:* ' + encodeURIComponent(phone) + '%0A' +
    '*Machine Type:* ' + encodeURIComponent(mtype) + '%0A' +
    '*Problem:* ' + encodeURIComponent(issue) + '%0A' +
    '*Area:* ' + encodeURIComponent(area);

  window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + msg, '_blank');
  alert('Thank you! Your request has been sent. We will call you back shortly.');
}

document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburgerBtn');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      toggleMenu();
    });
  }

  var faqButtons = document.querySelectorAll('.faq-q');
  for (var i = 0; i < faqButtons.length; i++) {
    faqButtons[i].setAttribute('aria-expanded', 'false');
    faqButtons[i].addEventListener('click', function () {
      toggleFaq(this);
    });
  }

  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }

  var links = document.querySelectorAll('.nav-links a');
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener('click', function () {
      toggleMenu(false);
    });
  }
});