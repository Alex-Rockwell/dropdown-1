
class Dropdown {
  constructor(id, list) {
    this.id = id
    this.list = list
  }

  create() {
    const container = document.querySelector(`#${this.id}`)
    container.style.width = '200px'

    ///////////////////
    //Create ul
    const ul = document.createElement('ul')
    container.insertAdjacentElement('beforeend', ul)
    ul.style.padding = '0 10px'
    ul.style.boxShadow = '0 8px 16px 0 #ddd'
    ul.style.listStyle = 'none'
    ul.style.display = 'none'

    ///////////////////
    //Create li
    this.list.items.forEach(element => {
      const item = document.createElement('li')
      item.insertAdjacentText('beforeend', element.label)
      item.setAttribute('id', element.id)
      item.setAttribute('class', '')
      ul.insertAdjacentElement('beforeend', item)
    })

    ////////////////////
    //Hover effect on li
    const els = document.querySelectorAll('li')
    els.forEach(el => {
      el.addEventListener('mouseover', () => {
        el.classList.add('hover')
      })
    })
    els.forEach(el => {
      el.addEventListener('mouseout', () => {
        el.classList.remove('hover')
      })
    })

    ///////////////////
    //Header create
    const header = document.createElement('p')
    header.insertAdjacentText('afterbegin', this.list.items[0].label)
    header.style.border = 'solid 1px'
    header.style.padding = '0 10px'
    header.classList.add('header')
    container.insertAdjacentElement('afterbegin', header)

    //////////////////
    //Click on element
    els.forEach(el => {
      if (el.innerText === header.innerText) {
        el.classList.add('active')
        header.setAttribute('id', el.getAttribute('id'))
      }

      el.addEventListener('click', (event) => {
        els.forEach(element => {
          if (element.classList.contains('active')) {
            element.classList.remove('active')
          }
        })
        event.target.classList.add('active')
        header.innerHTML = event.target.innerHTML
        const currentId = event.target.getAttribute('id')  
        header.setAttribute('id', currentId)              
        ul.style.display = 'none'
      })
    })

    /////////////////
    //Click on header
    header.addEventListener('click', () => {
      ul.style.display = 'block'
    })

  }
}


const dropdown = new Dropdown('dropdown', {
  items: [
    {label: 'Москва', id: 'msk'},
    {label: 'Санкт-Петербург', id: 'spb'},
    {label: 'Новосибирск', id: 'nsk'},
    {label: 'Краснодар', id: 'krdr'}
  ]
})

dropdown.create()
