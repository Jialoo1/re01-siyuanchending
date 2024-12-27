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

// 获取北京时间并实时更新
function updateBeijingTime() {
  const timeElement = document.getElementById('beijingTime');
  const now = new Date();
  const offset = now.getTimezoneOffset() + 480; // 北京时间偏移（UTC+8）
  const beijingTime = new Date(now.getTime() + offset * 60 * 1000);
  const hours = String(beijingTime.getHours()).padStart(2, '0');
  const minutes = String(beijingTime.getMinutes()).padStart(2, '0');
  const seconds = String(beijingTime.getSeconds()).padStart(2, '0');
  timeElement.textContent = `北京时间：${hours}:${minutes}:${seconds}`;
}

// 每秒更新一次时间
setInterval(updateBeijingTime, 1000);
updateBeijingTime(); // 页面加载时立即执行一次