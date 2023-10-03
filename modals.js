const modalField = document.getElementById("modal")

const modalDelivery = document.getElementById("delivery_modal")
const address = document.querySelector(".delivery_address")
const total_address = document.querySelector(".total_delivery_address_text")

function openDeliveryModal() {
  modalField.classList.add("modal_open")
  modalDelivery.style.display = "flex"

  const footer = document.querySelector(".footer_normal")
  const footer_mob = document.querySelector(".footer_mobile")
  footer.style.zIndex = "-1"
  footer_mob.style.zIndex = "-1"
}

function closeDeliveryModal() {
  modalDelivery.style.display = "none"
  modalField.classList.remove("modal_open")

  const footer = document.querySelector(".footer_normal")
  const footer_mob = document.querySelector(".footer_mobile")
  footer.style.zIndex = "1"
  footer_mob.style.zIndex = "1"
}

modalDelivery.addEventListener("click", ({ target }) => {
  if (target.classList.contains("radio")) {
    const radio_list = Array.from(modalDelivery.querySelectorAll(".radio"))
    radio_list.forEach((radio) => {
      radio.classList.remove("radio_checked")
    })
    target.classList.add("radio_checked")
  }
  if (target.classList.contains("button_main_modal")) {
    const address_text = modalDelivery
      .querySelector(".radio_checked")
      .parentElement.parentElement.querySelector(
        ".delivery_modal_address_to"
      ).textContent
    address.textContent = address_text
    total_address.textContent = address_text
    closeDeliveryModal()
  }
})

const modalPayment = document.getElementById("payment_modal")
const paymentLogo = document.getElementById("payment_system_icon")
const paymentCard = document.getElementById("payment_card_number")

const paymentTotalLogo = document.getElementById("total_system_icon")
const paymentTotalCard = document.getElementById("total_card_number")

function openPaymentModal() {
  modalField.classList.add("modal_open")
  modalPayment.style.display = "flex"

  const footer = document.querySelector(".footer_normal")
  const footer_mob = document.querySelector(".footer_mobile")
  footer.style.zIndex = "-1"
  footer_mob.style.zIndex = "-1"
}

function closePaymentModal() {
  modalField.classList.remove("modal_open")
  modalPayment.style.display = "none"
  const footer = document.querySelector(".footer_normal")
  const footer_mob = document.querySelector(".footer_mobile")
  footer.style.zIndex = "1"
  footer_mob.style.zIndex = "1"
}

modalPayment.addEventListener("click", ({ target }) => {
  if (target.classList.contains("radio")) {
    const radio_list = Array.from(modalPayment.querySelectorAll(".radio"))
    radio_list.forEach((radio) => {
      radio.classList.remove("radio_checked")
    })
    target.classList.add("radio_checked")
  }
  if (target.classList.contains("button_main_modal")) {
    const card_number = modalPayment
      .querySelector(".radio_checked")
      .parentElement.querySelector(".payment_card_number")
      .querySelector("div").textContent

    const card_ico = modalPayment
      .querySelector(".radio_checked")
      .parentElement.querySelector("img")
      .getAttribute("src")

    paymentLogo.setAttribute("src", card_ico)
    paymentTotalLogo.setAttribute("src", card_ico)
    paymentCard.textContent = card_number
    paymentTotalCard.textContent = card_number

    closePaymentModal()
  }
})
