instock.addEventListener("click", ({ target }) => {
  if (target.classList.contains("minus")) {
    const id = parseInt(target.parentElement.id)
    const count = target.parentElement.querySelector(".good_count")
    const plus = target.parentElement.querySelector(".plus")

    if (+count.textContent >= 2) {
      if (+count.textContent == 2) {
        target.classList.add("disabled_counter")
      }
      count.innerHTML--
      plus.classList.remove("disabled_counter")
      resultSum(id)
    }
  }

  if (target.classList.contains("plus")) {
    const id = target.parentElement.parentElement.parentElement.id
    const mobile_elems = document.querySelectorAll(".card_mob")
    const count = target.parentElement.querySelector(".good_count")

    const minus = target.parentElement.querySelector(".minus")
    const balance =
      target.parentElement.parentElement.querySelector(
        ".balance_count"
      ).textContent
    if (+count.textContent < balance || !+balance) {
      if (+count.textContent == balance - 1) {
        target.classList.add("disabled_counter")
      }
      count.innerHTML++

      minus.classList.remove("disabled_counter")
      resultSum(id)
    }
  }
})

function resultSum(id) {
  let card = document.getElementById(id)
  let price = card.querySelector(".price")
  let last_price = card.querySelector(".last_price")
  let count = card.querySelector(".good_count")

  let price_count = card.getAttribute("data-price")
  let last_price_count = card.getAttribute("data-last-price")

  price.textContent = Math.floor(count.innerHTML * price_count)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  last_price.textContent =
    Math.floor(count.innerHTML * last_price_count)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " сом"

  const active_checkboxList = Array.from(
    find_checkbox_field.querySelectorAll(".checkbox_active")
  )
  refreshTotalCount(active_checkboxList)
}

function refreshTotalCount(active_checkboxList) {
  const result = document.querySelector(".total_price_title_text")
  const price_list = []
  const last_price_list = []
  const count_list = []

  active_checkboxList.forEach(({ id }) => {
    const sum = document.getElementById(parseInt(id))
    price_list.push(sum.querySelector(".price"))
    last_price_list.push(sum.querySelector(".last_price"))
    count_list.push(sum.querySelector(".good_count"))
  })

  const price_list_sum = price_list.reduce((sum, cur) => {
    return +cur.textContent.replaceAll(" ", "") + sum
  }, 0)

  const last_price_list_sum = last_price_list.reduce((sum, cur) => {
    return parseInt(cur.textContent.replaceAll(" ", "")) + sum
  }, 0)

  const count_list_sum = count_list.reduce((sum, cur) => {
    return +cur.textContent.replaceAll(" ", "") + sum
  }, 0)

  const count_result = document.querySelector(".total_price_count_text")
  const last_price_result = document.querySelector(".total_last_price_result")
  const sale_result = document.querySelector(".total_sale")

  result.textContent = Math.floor(price_list_sum)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  count_result.textContent =
    Math.floor(count_list_sum)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " товара"

  last_price_result.textContent =
    Math.floor(last_price_list_sum)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " сом"

  sale_result.textContent =
    "−" +
    Math.floor(last_price_list_sum - price_list_sum)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
    " сом"
}
