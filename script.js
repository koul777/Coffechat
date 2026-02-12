document.addEventListener('DOMContentLoaded', function () {
  // 스크롤 애니메이션 (Intersection Observer)
  const animatedCards = document.querySelectorAll('[data-animate]');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  animatedCards.forEach(function (card) {
    observer.observe(card);
  });

  // 커피챗 버튼 - 추후 구글 폼 URL로 href 교체
  const coffeeChatBtn = document.getElementById('coffee-chat-btn');
  if (coffeeChatBtn) {
    coffeeChatBtn.addEventListener('click', function (e) {
      // href="#" 이면 기본 동작만 (페이지 이동 없음)
      // 실제 구글 폼 연결 시: href="https://forms.google.com/..." 로 변경
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
      }
    });
  }
});
