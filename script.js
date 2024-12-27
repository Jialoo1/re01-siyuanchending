// 表单提交
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('感谢您的反馈！');
});

// 星级评分功能
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  star.addEventListener('click', function() {
    const ratingValue = this.getAttribute('data-value');
    stars.forEach(s => {
      if (s.getAttribute('data-value') <= ratingValue) {
        s.classList.add('selected');
      } else {
        s.classList.remove('selected');
      }
    });
    alert('您给出了' + ratingValue + '星评分');
  });
});

// 留言板功能
document.getElementById('commentSubmit').addEventListener('click', function() {
  const username = document.getElementById('commentUsername').value;
  const text = document.getElementById('commentText').value;

  if (username && text) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<strong>${username}</strong>: <p>${text}</p>`;
    document.getElementById('commentsSection').appendChild(commentDiv);
    document.getElementById('commentUsername').value = '';
    document.getElementById('commentText').value = '';
  } else {
    alert('请填写完整留言内容');
  }
});
