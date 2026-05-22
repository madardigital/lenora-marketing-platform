document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll("[data-cart]");

  cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const item = button.getAttribute("data-cart");
      const encodedItem = encodeURIComponent(item);

      window.location.href = "contact.html?item=" + encodedItem;
    });
  });

  const params = new URLSearchParams(window.location.search);
  const selectedItem = params.get("item");

  if (selectedItem) {
    const typeField = document.getElementById("type");
    const messageField = document.getElementById("message");

    if (typeField) {
      if (selectedItem.includes("باقة")) {
        typeField.value = "باقة هدية";
      } else {
        typeField.value = "طلب عطر";
      }
    }

    if (messageField) {
      messageField.value = "أرغب بطلب: " + selectedItem;
    }
  }

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
});
