const faqItems = document.querySelectorAll('.accordion__item');

const swapExpandedAttribute = (parent, control, content) => {

};

faqItems.forEach((item) => {
  item.addEventListener('click', ({ currentTarget }) => {
    const button = currentTarget.querySelector('.accordion__header');
    const content = currentTarget.querySelector('.accordion__content');

    currentTarget.classList.toggle('accordion__item--opened');

    if (item.classList.contains('accordion__item--opened')) {
      button.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');

      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      button.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');

      content.style.maxHeight = null;
    }
  });
});
