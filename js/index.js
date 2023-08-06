document.addEventListener('DOMContentLoaded', function() {
  const modalContainer = document.getElementById("modal");
  const modalTriggers = document.querySelectorAll(".modalTrigger");
  let isDragging = false;
  let posOffsetX, posOffsetY;

  function loadModal() {
    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", function () {
      modalContainer.style.display = "none";
    });

    const modalHeader = modalContainer.querySelector(".modal-header");
    modalHeader.addEventListener("mousedown", function (event) {
      isDragging = true;
      posOffsetX = event.clientX - modalContainer.offsetLeft;
      posOffsetY = event.clientY - modalContainer.offsetTop;
    });

    window.addEventListener("mouseup", function () {
      isDragging = false;
    });

    window.addEventListener("mousemove", function (event) {
      if (isDragging) {
        const x = event.clientX - posOffsetX;
        const y = event.clientY - posOffsetY;
        modalContainer.style.left = x + "px";
        modalContainer.style.top = y + "px";
      }
    });
  }

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("dblclick", function () {
      modalContainer.style.display = "block";
      loadModal();
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const elements = {};

  function handleMouseDown(event, id) {
    elements[id].isDragging = true;
    elements[id].posOffsetX = event.clientX - elements[id].element.offsetLeft;
    elements[id].posOffsetY = event.clientY - elements[id].element.offsetTop;
  }

  function handleMouseUp(id) {
    elements[id].isDragging = false;
  }

  function handleMouseMove(event, id) {
    if (elements[id].isDragging) {
      const x = event.clientX - elements[id].posOffsetX;
      const y = event.clientY - elements[id].posOffsetY;
      elements[id].element.style.left = x + "px";
      elements[id].element.style.top = y + "px";
    }
  }

  function handleElementClick(id) {
    if (!elements[id].isSelected) {
      elements[id].element.classList.add("selected");
      elements[id].isSelected = true;
    } else {
      elements[id].element.classList.remove("selected");
      elements[id].isSelected = false;
    }
  }

  const aplicaciones = document.querySelectorAll(".Apps");
  aplicaciones.forEach((aplicacion) => {
    const id = aplicacion.id;
    elements[id] = {
      element: aplicacion,
      isSelected: false,
      isDragging: false,
      posOffsetX: 0,
      posOffsetY: 0,
    };

    aplicacion.addEventListener("mousedown", (event) => handleMouseDown(event, id));
    window.addEventListener("mouseup", () => handleMouseUp(id));
    window.addEventListener("mousemove", (event) => handleMouseMove(event, id));
    aplicacion.addEventListener("click", () => handleElementClick(id));
  });
});