// @ts-check
/** @param {HTMLElement | null} navbar */
export function handleNavigation(navbar) {
  if (!navbar) {
    return;
  }
  const buttons = navbar.querySelectorAll("button");
  const ids = Array.from(buttons).map((button) =>
    button.getAttribute("data-target")
  );
  const elements = ids.map((id) => (id ? document.getElementById(id) : null));

  /** @param {number} idx */
  function toggleElement(idx) {
    for (let i = 0; i < buttons.length; ++i) {
      const button = buttons[i];
      const el = elements[i];
      if (i === idx) {
        button?.classList.add("active");
        el?.classList.remove("hidden");
      } else {
        button?.classList.remove("active");
        el?.classList.add("hidden");
      }
    }
  }

  buttons.forEach((button, idx) => {
    button?.addEventListener("click", () => {
      toggleElement(idx);
    });
  });
  toggleElement(0);
}
