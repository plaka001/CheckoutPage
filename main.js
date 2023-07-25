var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var total = document.getElementById("total");

document.addEventListener("DOMContentLoaded", function () {
  item1.textContent = 0;
  item2.textContent = 0;
  total.textContent = 0;
});

function ValidarFormulario() {
  const alert = true;

  // campos
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  const postalCode = document.getElementById("postalCode").value;

  // validaciones
  if (email == "") {
    showAler("email");
    return;
  }
  if (phone == "") {
    showAler("phone");
    return;
  }
  if (name == "") {
    showAler("name");
    return;
  }
  if (address == "") {
    showAler("address");
    return;
  }
  if (city == "") {
    showAler("city");
    return;
  }
  if (country == "") {
    showAler("country");
    return;
  }
  if (postalCode == "") {
    showAler("postalCode");
    return;
  }
  resetForm();
}

function itemPlus(item) {
  if (item == 1) {
    ++item1.textContent;
    total.textContent = parseFloat(total.textContent) + 54;
  } else {
    ++item2.textContent;
    total.textContent = parseFloat(total.textContent) + 74;
  }
}
function itemLess(item) {
  if (item == 1) {
    if (item1.textContent != 0) {
      total.textContent = parseFloat(total.textContent) - 54;
    }
    item1.textContent == 0 ? (item1.textContent = 0) : --item1.textContent;
  } else {
    if (item2.textContent != 0) {
      total.textContent = parseFloat(total.textContent) - 74;
    }
    item2.textContent == 0 ? (item2.textContent = 0) : --item2.textContent;
  }
}

function showAler(value) {
  Swal.fire({
    icon: "error",
    title: "lack of information",
    text: value,
  });
}

function resetForm() {
  item1.textContent = 0;
  item2.textContent = 0;
  const form = document.getElementById("form");
  form.reset();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}
