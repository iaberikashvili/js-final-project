const initAccordion = () => {
  //Accordion functionality
  const items = document.querySelectorAll(".accordion .accordion-item");

  items.forEach((item) => {
    const trigger = item.querySelector(".accordion-header");
    const accordionArrow = trigger.querySelector(".arrow");

    trigger.addEventListener("click", () => {
      // Remove "active-b" class and border from all items
      items.forEach((otherItem) => {
        const otherTrigger = otherItem.querySelector(".accordion-header");
        const otherBody = otherItem.querySelector(".accordion-body");
        const otherArrow = otherTrigger.querySelector(".arrow");

        if (otherItem !== item) {
          otherTrigger.classList.remove("border-none"); // Resets border
          otherBody.classList.remove("active-b"); // Adds border
          otherArrow.classList.remove("rotate-180"); // Reset rotation for other accordions
        }
      });

      // Toggle "active-b" class for the clicked item
      trigger.classList.toggle("border-none");
      item.querySelector(".accordion-body").classList.toggle("active-b");

      // Rotate arrow
      accordionArrow.classList.toggle("rotate-180");
    });
  });
};

export default initAccordion;
