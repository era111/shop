const phoneInput = document.getElementById("phone")
const errorPhoneInput = document.getElementById("error_phone")

const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const emailInput = document.getElementById("email")
const errorEmaileInput = document.getElementById("error_email")

const sumbitButton = document.getElementById("button_main")
let footer = document.querySelector("html").getBoundingClientRect()
const inn = document.getElementById("inn")

const inputEmptyError = {
  input_name: "Укажите имя",
  input_second_name: "Введите фамилию",
  input_inn: "Укажите ИНН",
  input_phone: "Укажите номер телефона",
  input_mail: "Укажите электронную почту",
}

sumbitButton.addEventListener("click", () => {
  window.scrollTo({
    top: footer.height + 200,
    behavior: "smooth",
  })
  checkInputsOnSubmit()
})

function checkInputsOnSubmit(params) {
  const inputArray = Array.from(
    document.querySelector(".addresse_form").querySelectorAll("input")
  )
  valideINN()
  inputArray.forEach((input) => {
    if (!input.value) {
      const errorField = input.parentElement.querySelector(".error_lable")
      errorField.textContent = inputEmptyError[input.className]
      input.classList.add("input_error")
      errorField.classList.add("error_description")
      function valideEmptyInput() {
        if (input.value) {
          errorField.textContent = ""
          errorField.classList.remove("error_description")
          valideEmail()
          validePhone()
          valideINN()
          removeEventListener("blur", valideEmptyInput)
        }
      }
      input.addEventListener("blur", valideEmptyInput)
    }
  })
}

const regINN = /^\d{14}$/
function valideINN() {
  const error_field = document.querySelector(".inn_description")

  if (regINN.test(inn.value)) {
    error_field.classList.remove("error_description")
    error_field.textContent = "Для таможенного оформления"
    inn.classList.remove("input_error")
  } else {
    error_field.textContent = "Проверьте ИНН"
    error_field.classList.add("error_description")
    inn.classList.add("input_error")
  }
}

const phoneErrors = {
  format: "Формат: +9 999 999 99 99",
  empty: "Укажите номер телефона",
  normal: "",
}

function maskInputPhone(phoneValue) {
  let result = ""
  for (let i = 0; i < phoneValue.length; i++) {
    if (i == 0) {
      result = "+" + phoneValue[i]
      continue
    }
    if (i == 1) {
      result = result + " " + phoneValue[i]
      continue
    }
    if (i == 4) {
      result = result + " " + phoneValue[i]
      continue
    }
    if (i == 7) {
      result = result + "-" + phoneValue[i]
      continue
    }
    if (i == 9) {
      result = result + "-" + phoneValue[i]
      continue
    }
    result += phoneValue[i]
  }
  return result
}

phoneInput.addEventListener("input", () => {
  const phoneInput = document.getElementById("phone")
  let phoneValue = phoneInput.value.replace(/\D/g, "")
  phoneValue = phoneValue.match(/\d{0,11}/)[0]
  phoneInput.value = maskInputPhone(phoneValue)
})

function validePhone() {
  const phoneInput = document.getElementById("phone")
  let phoneValue = phoneInput.value.replace(/\D/g, "")
  phoneValue = phoneValue.match(/\d{0,11}/)[0]

  if (phoneValue.length < 11) {
    errorPhoneInput.textContent = phoneErrors.format
    errorPhoneInput.classList.add("error_description")
    phoneInput.classList.add("input_error")
  }
  if (phoneValue.length == 11) {
    errorPhoneInput.classList.remove("error_description")
    phoneInput.classList.remove("input_error")
    errorPhoneInput.textContent = phoneErrors.normal
  }
  if (phoneValue.length == 0) {
    errorPhoneInput.classList.add("error_description")
    phoneInput.classList.add("input_error")
    errorPhoneInput.textContent = phoneErrors.empty
  }
}

phoneInput.addEventListener("blur", () => {
  validePhone()
})

const emailErrors = {
  format: "Проверьте адрес электронной почты",
  empty: "Укажите электронную почту",
  normal: "",
}

function valideEmail() {
  if (emailReg.test(emailInput.value)) {
    errorEmaileInput.classList.remove("error_description")
    errorEmaileInput.textContent = emailErrors.normal
    emailInput.classList.remove("input_error")
    emailInput.removeEventListener("input", valideEmail)
  } else {
    errorEmaileInput.textContent = emailErrors.format
    errorEmaileInput.classList.add("error_description")
    emailInput.classList.add("input_error")
  }
}

emailInput.addEventListener("blur", () => {
  valideEmail()
  emailInput.addEventListener("input", valideEmail)
})

const inputArray = Array.from(
  document.querySelector(".addresse_form").querySelectorAll("input")
)

inputArray.forEach((elem) => {
  elem.addEventListener("focus", (e) => {
    const label = elem.parentElement.querySelector(".input_label")
    label.style.color = "#9797af"
  })

  elem.addEventListener("blur", (e) => {
    if (!elem.value) {
      const label = elem.parentElement.querySelector(".input_label")
      label.style.color = "white"
    }
  })
})
