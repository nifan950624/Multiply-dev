import './index.scss'
import 'popper.js'
import 'bootstrap'
import eventBus from "../../assets/js/event_bus";


const view = {
  $el: $('.header'),

  render(data) {
  }
}

const model = {}

const controller = {
  view: null,
  model: null,
  $el: null,
  _init(view, model) {
    this.view = view
    this.model = model
    this.$el = this.view.$el
    this.loadHeader()
  },
  loadHeader() {
    this.$el.load('header.html', () => {
      let pathname = window.location.pathname,
          navItems = this.$el.find('.nav-item')

      for (let i = 0; i < navItems.length; i++) {
        let item = navItems[i]
        let href = $(item).find('.nav-link').attr('href')

        if (href === pathname) {
          $(item).addClass('active').siblings().each((index, el) => {
            $(el).removeClass('active')
          })
        }
      }
    })
  }
}

controller._init(view, model)
