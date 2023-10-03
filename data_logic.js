const card_field = document.getElementById("card_field")
const card_element_mob = document.getElementById("card_element_mob")

const not_available_field = document.getElementById("not_available_field")
const not_available_card_element = document.getElementById("not_available_card")

const goodsList = [
  {
    id: "0",
    img_url: "./assets/image.png",
    name: "Футболка UZcotton мужская",
    color: "Цвет: белый",
    size: "Размер: 56",
    size_num: 56,
    store: "Коледино WB",
    company: "OOO Вайлдберриз",
    tooltip: {
      title: "OOO Вайлдберриз",
      ogrn: "ОГРН: 5167746237148",
      address:
        "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    },
    tooltip_sale: [
      {
        name: "Скидка 55%",
        scale: "300 сом",
      },
      {
        name: "Скидка покупателя 10%",
        scale: "30 сом",
      },
    ],
    price: 522,
    last_price: 1051,
    count: 1,
    rest: "2",
    liked: false,
  },

  {
    id: "1",
    img_url: "./assets/image2.png",
    name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    color: "Цвет: прозрачный",
    size: "",
    store: "Коледино WB",
    company: "OOO Мегапрофстиль",
    tooltip: {
      title: "OOO Мегапрофстиль",
      ogrn: "ОГРН: 5167746237148",
      address:
        "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    },
    tooltip_sale: [
      {
        name: "Скидка 55%",
        scale: "300 сом",
      },
      {
        name: "Скидка покупателя 10%",
        scale: "30 сом",
      },
    ],
    price: 10500.235,
    last_price: 11500.235,
    count: 200,
    rest: "",
    liked: false,
  },
  {
    id: "2",
    img_url: "./assets/image3.png",
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    color: "",
    size: "",
    store: "Коледино WB",
    company: "OOO Вайлдберриз",
    tooltip_info: {
      title: "OOO Вайлдберриз",
      ogrn: "ОГРН: 5167746237148",
      address:
        "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    },
    tooltip_sale: [
      {
        name: "Скидка 55%",
        scale: "300 сом",
      },
      {
        name: "Скидка покупателя 10%",
        scale: "30 сом",
      },
    ],
    price: 247,
    last_price: 475,
    count: 2,
    rest: 2,
    liked: false,
  },
]

const little_text_settings = {
  size: "16px",
  lineHeight: "24px",
}

let cart_list = []

goodsList.forEach((good) => {
  const card = card_element.content.cloneNode(true)
  const sum = card.querySelector(".sum")
  sum.id = good.id
  sum.setAttribute("data-price", good.price)
  sum.setAttribute("data-last-price", good.last_price)

  const checkbox = card.querySelector(".checkbox")
  checkbox.id = good.id + "checkbox"

  const image = card.querySelector(".card_image")

  image.style.background = `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.05) 100%
    ),url(\"${good.img_url}\"), lightgray 50% / cover no-repeat`
  image.style.backgroundSize = "cover"
  image.style.backgroundRepeat = "no-repeat"

  const name = card.querySelector(".card_name")
  name.textContent = good.name

  const info = card.querySelector(".info")
  if (good.color || good.size) {
    const color = card.querySelector(".color")
    color.textContent = good.color

    const size = card.querySelector(".size")
    size.textContent = good.size_num ? "Размер: " + good.size_num : ""
  } else {
    info.style.display = "none"
  }

  const company_store = card.querySelector(".company_store")
  company_store.textContent = good.store

  const company_text = card.querySelector(".company_text_name")
  company_text.textContent = good.company

  const good_counter = card.querySelector(".good_counter")
  good_counter.id = good.id + "counter"

  const minus_btn = card.querySelector(".minus")
  if (+good.count <= 1) {
    minus_btn.classList.add("disabled_counter")
  }
  const plus_btn = card.querySelector(".plus")

  if (+good.count == good.rest) {
    plus_btn.classList.add("disabled_counter")
  }

  const good_count = card.querySelector(".good_count")
  good_count.textContent = good.count

  const balance = card.querySelector(".balance_count")
  if (good.rest) {
    balance.textContent = ` ${good.rest}`
  } else {
    balance.parentElement.style.display = "none"
  }

  const price = card.querySelector(".price")
  price.textContent = Math.floor(good.price * good.count)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  if (good.price > 999) {
    price.style.fontSize = little_text_settings.size
    price.style.lineHeight = little_text_settings.lineHeight
  }

  const last_price = card.querySelector(".last_price")
  last_price.textContent = `${Math.floor(good.last_price * good.count)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} сом`
  if (good.last_price > 999) {
    const tooltip_price = card.querySelector(".tooltip_price")
    tooltip_price.style.transform = "translateX(-83%)"
  }

  card_field.appendChild(card)
})

goodsList.forEach((good) => {
  const card = not_available_card_element.content.cloneNode(true)

  const image = card.querySelector(".not_available_image")

  image.style.background = `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.05) 100%
    ),url(\"${good.img_url}\"), lightgray 50% / cover no-repeat`
  image.style.backgroundSize = "cover"
  image.style.backgroundRepeat = "no-repeat"

  const name = card.querySelector(".not_available_product_name")
  name.textContent = good.name

  const color = card.querySelector(".not_available_color")
  color.textContent = good.color

  const size = card.querySelector(".not_available_size")
  size.textContent = good.size

  const size_mob = card.querySelector(".not_available_size_mob")
  // size.textContent = good.size_num ? good.size_num
  if (!good.size_num) {
    size_mob.classList.add("invisible")
  }
  size_mob.textContent = good.size_num
  // }

  not_available_field.appendChild(card)
})

goodsList.forEach((good) => {
  const card = card_element_mob.content.cloneNode(true)

  const sum = card.querySelector(".sum")
  sum.id = good.id
  sum.setAttribute("data-price", good.price)
  sum.setAttribute("data-last-price", good.last_price)

  const checkbox = card.querySelector(".checkbox")
  checkbox.id = good.id + "checkbox"

  const image = card.querySelector(".card_image")

  image.style.background = `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.05) 100%
    ),url(\"${good.img_url}\"), lightgray 50% / cover no-repeat`
  image.style.backgroundSize = "cover"
  image.style.backgroundRepeat = "no-repeat"

  const name = card.querySelector(".card_name")
  name.textContent = good.name

  // const info = card.querySelector(".info")
  const color = card.querySelector(".color")
  if (good.color) {
    color.textContent = good.color
  } else {
    color.style.display = "none"
  }

  const size = card.querySelector(".size_mob")
  if (good.size_num) {
    size.textContent = good.size_num
  } else {
    size.style.display = "none"
  }

  const company_store = card.querySelector(".company_store")
  company_store.textContent = good.store

  const good_counter = card.querySelector(".good_counter")
  good_counter.id = good.id + "counter"

  const minus_btn = card.querySelector(".minus")
  if (+good.count <= 1) {
    minus_btn.classList.add("disabled_counter")
  }
  const plus_btn = card.querySelector(".plus")

  if (+good.count == good.rest) {
    plus_btn.classList.add("disabled_counter")
  }

  const good_count = card.querySelector(".good_count")
  good_count.textContent = good.count

  const balance = card.querySelector(".balance_count")
  if (good.rest) {
    balance.textContent = ` ${good.rest}`
  } else {
    balance.parentElement.style.display = "none"
  }

  const price = card.querySelector(".price")
  price.textContent = Math.floor(good.price * good.count)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  if (good.price > 999) {
    price.style.fontSize = little_text_settings.size
    price.style.lineHeight = little_text_settings.lineHeight
  }

  const last_price = card.querySelector(".last_price")
  last_price.textContent = `${Math.floor(good.last_price * good.count)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} сом`
  // if (good.last_price > 999) {
  //   const tooltip_price = card.querySelector(".tooltip_price")
  //   tooltip_price.style.transform = "translateX(-83%)"
  // }

  card_field.appendChild(card)
})
