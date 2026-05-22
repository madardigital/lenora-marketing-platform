document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const type = document.getElementById("type").value;
      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !type || !message) {
        alert("نرجو تعبئة جميع الحقول قبل إرسال الطلب.");
        return;
      }

      alert("تم استلام طلبك بنجاح. سيتواصل فريق لينورا معك قريبًا.");
      form.reset();
    });
  }

  const cartButtons = document.querySelectorAll("[data-cart]");

  cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const item = button.getAttribute("data-cart");
      alert("تمت إضافة " + item + " إلى السلة التجريبية.");
    });
  });
});
