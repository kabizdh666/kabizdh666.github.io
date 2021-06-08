var checkbox = document.querySelector('.theme-switch__checkbox');

checkbox.addEventListener('change', function () {
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function () {
    document.documentElement.classList.remove('transition');
  }, 250)
}

window.onload = function () {

  html2PDF(document.body, {
    html2canvas: {
      ignoreElements: (element) => element.classList.contains('pdf-ignore'),
      windowWidth: 1080,
      width: 1080,
      height: document.body.clientHeight
    }
  }).then(doc => {
    document.querySelector('.download__button').addEventListener('click', function () {
      doc.output('pdfobjectnewwindow', {filename: 'cv'})
    })
  });

}