document.querySelector('.cta button').addEventListener('click', () => {
  alert('수강 신청 페이지로 이동합니다.');
});

document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
