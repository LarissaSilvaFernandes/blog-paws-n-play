document.addEventListener("DOMContentLoaded", function () {
    // Quantity Buttons
    var quantityButtons = document.querySelectorAll(".quantity-button");
    quantityButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var _a;
            var action = this.dataset.action;
            var input = (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(".quantity-input");
            if (!input)
                return;
            var value = parseInt(input.value);
            var min = parseInt(input.min);
            var max = parseInt(input.max);
            if (action === "increment") {
                value = Math.min(value + 1, max);
            }
            else if (action === "decrement") {
                value = Math.max(value - 1, min);
            }
            input.value = value.toString();
        });
    });
    // Form Validation
    var form = document.getElementById("myForm");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
        var firstNameInput = document.getElementById("firstName");
        var lastNameInput = document.getElementById("lastName");
        var emailInput = document.getElementById("email");
        var messageInput = document.getElementById("message");
        var privacyPolicyInput = document.getElementById("privacyPolicy");
        var firstName = (firstNameInput === null || firstNameInput === void 0 ? void 0 : firstNameInput.value) || "";
        var lastName = (lastNameInput === null || lastNameInput === void 0 ? void 0 : lastNameInput.value) || "";
        var email = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || "";
        var message = (messageInput === null || messageInput === void 0 ? void 0 : messageInput.value) || "";
        var privacyPolicy = (privacyPolicyInput === null || privacyPolicyInput === void 0 ? void 0 : privacyPolicyInput.checked) || false;
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
    var menuButton = document.getElementById("menu-mobile-button");
    menuButton === null || menuButton === void 0 ? void 0 : menuButton.addEventListener("click", function () {
        var mobileMenu = document.querySelector(".mobile-menu");
        if (mobileMenu) {
            mobileMenu.style.display =
                mobileMenu.style.display === "block" ? "none" : "block";
        }
    });
    // Scroll do menu
    var anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            var targetId = this.getAttribute("href");
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});
