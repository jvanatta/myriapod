  function keyboardClose(e) {
    switch (e.keyCode) {
        case 27:
          removeLightbox();
        default:
            break;
    }
  }

  function showLightbox(element) {
    var cloned = element.cloneNode(false);

    var modal = document.createElement('div');
    modal.id = 'lightbox';
    modal.classList.add('lightbox_modal');
    var close = document.createElement('div');
    close.classList.add('lightbox__close');

    modal.appendChild(close);
    modal.appendChild(cloned);
    document.body.appendChild(modal);

    modal.addEventListener('click', removeLightbox);
    document.addEventListener('keydown', keyboardClose);
  }

  function removeLightbox() {
    var element = document.getElementById('lightbox');
    element.parentNode.removeChild(element);
    document.removeEventListener('keydown', keyboardClose)
  }

  function addLightboxTriggers() {
    document.querySelectorAll('.lightbox').forEach(function(currentImage) {
      currentImage.addEventListener('click', function() {showLightbox(currentImage)});
    });
  }
