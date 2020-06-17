import './index.scss'

const view = {
  $el: $('#header'),

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
      this.changActive()
    })
  },
  changActive() {
    let pathname = window.location.pathname,
        navItems = this.$el.find('.nav-item')

    for (let i = 0; i < navItems.length; i++) {
      let item = navItems[i]
      let href = $(item).find('.nav-link').attr('href')
      href = href.indexOf('.') > -1 ? href.substring(1) : href

      if (href === pathname) {
        $(item).addClass('active').siblings().each((index, ele) => {
          $(ele).removeClass('active')
        })
      }
    }

  }
}

controller._init(view, model)
