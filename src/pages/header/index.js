import './index.scss'
import $ from 'jquery'
import eventBus from "../../assets/js/event_bus";


const view = {
  el: '.header',

  render(data) {
  }
}

const model = {
  el: null
}

const controller = {
  view: null,
  model: null,
  el: null,
  _init(view, model) {
    this.view = view
    this.model = model
    this.el = this.view.el
    this.createHeader()
    this.getHeaderTags()
    eventBus.on('first', (data) => {
      window.location.href = '/other.html'
    })
  },
  createHeader() {
    $(this.el).append(`
    <div class="header-inner">
      <div class="header-inner-left">Hello World</div> 
      <ul class="header-inner-right tags-list"></ul>
    </div>
    `)
  },
  getHeaderTags() {
    const tagsArr = [
      {
        text: '首页',
        href: '/index.html'
      },
      {
        text: '其他',
        href: '/other.html'
      },
      {
        text: '首页',
        href: '/index.html'
      },
      {
        text: '首页',
        href: '/index.html'
      },
      {
        text: '首页',
        href: '/index.html'
      },
      {
        text: '首页',
        href: '/index.html'
      }
    ]

    tagsArr.map((item) => {
      $(this.el).find('.tags-list').append(`<li class="tag"><a href="${item.href}">${item.text}</a></li>`)
    })
  }
}

controller._init(view, model)
