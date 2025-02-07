function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

//zoom
let img = document.getElementById("zoom-img");
  let scale = 1;
  let startX = 0, startY = 0;
  let translateX = 0, translateY = 0;
  let isDragging = false;
  let lastX = 0, lastY = 0;

  // Zoom pakai mouse wheel
  img.addEventListener("wheel", function (e) {
      e.preventDefault();
      let zoomFactor = e.deltaY * -0.001;
      scale += zoomFactor;
      scale = Math.min(Math.max(1, scale), 3); // Zoom max 3x
      img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  // Zoom pakai pinch (HP & Tablet)
  img.addEventListener("touchstart", function (e) {
      if (e.touches.length === 2) {
          startX = Math.abs(e.touches[0].clientX - e.touches[1].clientX);
          startY = Math.abs(e.touches[0].clientY - e.touches[1].clientY);
      }
  });

  img.addEventListener("touchmove", function (e) {
      if (e.touches.length === 2) {
          e.preventDefault();
          let newX = Math.abs(e.touches[0].clientX - e.touches[1].clientX);
          let newY = Math.abs(e.touches[0].clientY - e.touches[1].clientY);
          let newScale = (newX + newY) / (startX + startY);
          scale = Math.min(Math.max(1, newScale * scale), 3);
          img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
      }
  });

  // Geser gambar (Drag)
  img.addEventListener("mousedown", function (e) {
      if (scale > 1) {
          isDragging = true;
          lastX = e.clientX;
          lastY = e.clientY;
          img.style.cursor = "grabbing";
      }
  });

  img.addEventListener("mousemove", function (e) {
    if (isDragging) {
        let deltaX = (e.clientX - lastX) * 0.5; // Kurangi kecepatan geser
        let deltaY = (e.clientY - lastY) * 0.5;
        
        translateX += deltaX;
        translateY += deltaY;

        lastX = e.clientX;
        lastY = e.clientY;

        img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
});

  img.addEventListener("mouseup", function () {
      isDragging = false;
      img.style.cursor = "grab";
  });

  img.addEventListener("mouseleave", function () {
      isDragging = false;
      img.style.cursor = "grab";
  });

  // Tutup popup dan reset zoom
  function openPopup() {
      document.getElementById("popup").style.display = "flex";
  }

  function closePopup() {
      document.getElementById("popup").style.display = "none";
      scale = 1;
      translateX = 0;
      translateY = 0;
      img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  }