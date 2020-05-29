import eventBus from "../../assets/js/event_bus";

const controller = {
  _init() {
    this.createLoader()
    this.handleLoadingHide()
    this.handleLoadingShow()
  },
  createLoader() {
    $('body').append(`
      <div class="spinner">
        <div class="spinner-border" role="status">
        </div>
      </div>`
    )
  },
  handleLoadingHide() {
    eventBus.on('hideLoading', () => {
      $('.spinner').hide()
    })
  },
  handleLoadingShow() {
    eventBus.on('showLoading', () => {
      $('.spinner').show()
    })
  }
}

controller._init()
