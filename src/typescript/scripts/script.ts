document.addEventListener("DOMContentLoaded", () => {
  // Quantity Buttons
  const quantityButtons = document.querySelectorAll(
    ".quantity-button"
  ) as NodeListOf<HTMLButtonElement>;

  quantityButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const action = this.dataset.action;
      const input = this.parentNode?.querySelector(
        ".quantity-input"
      ) as HTMLInputElement;
      if (!input) return;

      let value = parseInt(input.value);
      const min = parseInt(input.min);
      const max = parseInt(input.max);

      if (action === "increment") {
        value = Math.min(value + 1, max);
      } else if (action === "decrement") {
        value = Math.max(value - 1, min);
      }

      input.value = value.toString();
    });
  });

  // Form Validation
  const form = document.getElementById("myForm") as HTMLFormElement;
  form?.addEventListener("submit", function (event) {
    const firstNameInput = document.getElementById(
      "firstName"
    ) as HTMLInputElement;
    const lastNameInput = document.getElementById(
      "lastName"
    ) as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const messageInput = document.getElementById(
      "message"
    ) as HTMLTextAreaElement;
    const privacyPolicyInput = document.getElementById(
      "privacyPolicy"
    ) as HTMLInputElement;

    const firstName = firstNameInput?.value || "";
    const lastName = lastNameInput?.value || "";
    const email = emailInput?.value || "";
    const message = messageInput?.value || "";
    const privacyPolicy = privacyPolicyInput?.checked || false;

    if (firstName === "") {
      alert("First name must be filled out");
      event.preventDefault();
    }
    if (lastName === "") {
      alert("Last name must be filled out");
      event.preventDefault();
    }
    if (email === "") {
      alert("Email must be filled out");
      event.preventDefault();
    }
    if (message === "") {
      alert("Message must be filled out");
      event.preventDefault();
    }
    if (!privacyPolicy) {
      alert("You must agree to the privacy policy");
      event.preventDefault();
    }
  });

  // Mobile Menu
  const menuButton = document.getElementById(
    "menu-mobile-button"
  ) as HTMLAnchorElement;
  menuButton?.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".mobile-menu") as HTMLElement;
    if (mobileMenu) {
      mobileMenu.style.display =
        mobileMenu.style.display === "block" ? "none" : "block";
    }
  });

  // Scroll do menu
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e: MouseEvent) {
      e.preventDefault();

      const targetId = this.getAttribute("href") as string;
      const targetElement = document.querySelector<HTMLElement>(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
