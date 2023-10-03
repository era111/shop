// checkbox logic
const payCheck = document.getElementById("check_pay")
const mainButton = document.getElementById("button_main")
const find_checkbox_field = document.getElementById("card_field")

payCheck.addEventListener("click", () => {
  if (mainButton.textContent == "Заказать") {
    const sum = document.querySelector(".total_price_title_text").textContent
    mainButton.textContent = `Оплатить ${sum} сом`
  } else {
    mainButton.textContent = "Заказать"
  }
})

const selectAll = document.getElementById("select_all")

function toggleCheckbox(e) {
  e.classList.toggle("checkbox_active")
  selectAll.classList.remove("checkbox_active")
  const checkboxList = Array.from(
    find_checkbox_field.querySelectorAll(".checkbox")
  )
  const all_checked = checkboxList.reduce((sum, cur) => {
    return cur.classList.contains("checkbox_active") && sum
  }, true)
  if (all_checked) {
    selectAll.classList.add("checkbox_active")
  }

  const cart_count = document.getElementById("cart_count")
  const active_checkboxList = Array.from(
    find_checkbox_field.querySelectorAll(".checkbox_active")
  )
  cart_count.innerText = active_checkboxList.length
  refreshTotalCount(active_checkboxList)
}

selectAll.addEventListener("click", ({ target }) => {
  const checkboxList =
    selectAll.parentElement.parentElement.querySelectorAll(".checkbox")

  if (selectAll.classList.contains("checkbox_active")) {
    checkboxList.forEach((checkbox) => {
      checkbox.classList.remove("checkbox_active")
    })
    refreshTotalCount([])
  } else {
    checkboxList.forEach((checkbox) => {
      checkbox.classList.add("checkbox_active")
    })
    refreshTotalCount(
      Array.from(checkboxList).slice(1, Array.from(checkboxList).length)
    )
  }
})

//tooltip

const cardField = document.getElementById("card_field")

function toggleTooltipPrice(e) {
  const tooltip = e.target.parentElement.querySelector(".tooltip_price")
  tooltip.style.display = "none"
  e.target.removeEventListener("mouseleave", toggleTooltipPrice)
}

function toggleTooltipInfo(e) {
  const tooltip = e.target.parentElement.querySelector(".tooltip_info")
  tooltip.style.display = "none"
  e.target.removeEventListener("mouseleave", toggleTooltipInfo)
}

cardField.addEventListener("mouseover", ({ target }) => {
  if (target.classList.contains("last_price")) {
    const tooltip = target.parentElement.querySelector(".tooltip_price")
    tooltip.style.display = "inline-flex"
    target.addEventListener("mouseleave", toggleTooltipPrice)
  }
  if (target.classList.contains("info_icon")) {
    const tooltip = target.parentElement.querySelector(".tooltip_info")
    tooltip.style.display = "inline-flex"
    target.addEventListener("mouseleave", toggleTooltipInfo)
  }
})

//arrows logic
const instock = document.querySelector(".instock")

instock.addEventListener("click", ({ target }) => {
  if (target.classList.contains("arrow")) {
    target.classList.toggle("arrow_down")
    const element = instock.querySelector(".card_field")
    instock.querySelector(".text").classList.toggle("invisible")
    const title = instock.querySelector(".not_available_text")
    const checkbox = instock.querySelector(".checkbox")
    if (element.style.display == "block") {
      title.style.display = "block"
      element.style.display = "none"
      checkbox.style.display = "none"
      instock.style.marginBottom = "16px"
    } else {
      title.style.display = "none"
      element.style.display = "block"
      checkbox.style.display = "block"
      instock.style.marginBottom = "40px"
    }
  }
})

const not_available = document.querySelector(".not_available")

not_available.addEventListener("click", ({ target }) => {
  if (target.classList.contains("arrow")) {
    target.classList.toggle("arrow_down")
    const element = not_available.querySelector(".not_available_field")
    if (element.style.display == "flex") {
      element.style.display = "none"
    } else {
      element.style.display = "flex"
    }
  }
})

///////////////main

