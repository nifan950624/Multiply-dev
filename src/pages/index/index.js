import './index.scss'
import '../../components/header/index'
import 'popper.js'
import 'bootstrap'
import eventBus from "../../assets/js/event_bus";

const view = {
  $el: $('body'),
  render(data) {
  }
}

const model = {
  _get() {
    $.ajax('api/a.json', {
      method: 'get',
      headers: {
        'Content-Type': 'json',
      }
    }).then((res) => {
      console.log(res)
    })
  }
}

const controller = {
  view: null,
  model: null,
  el: null,
  _init(view, model) {
    this.view = view
    this.model = model
    this.$el = this.view.$el
    this.handleClick()
    this.model._get()
    window.onload = this.onload
  },
  handleClick() {
    this.$el.find('.btn').on('click', (e) => {
      console.log('点我了')
    })
  },
  onload() {
    $('.page').removeClass('invisible').addClass('visible')
    $('.spinner').hide()
  }
}

controller._init(view, model)

