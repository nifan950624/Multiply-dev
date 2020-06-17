const controller = {
  _init() {
    this.createLoader()
  },
  createLoader() {
    $('body').append(`
      <div class="spinner" id="spinner">
        <div class="spinner-border" role="status">
        </div>
      </div>`
    )
  },
  handleLoadingHide() {
    $('#spinner').hide()
  },
  handleLoadingShow(time) {
    $('#spinner').show()
    if (typeof time === 'number') {
      setTimeout(() => {
        $('#spinner').hide()
      }, time)
    }
  }
}

controller._init()

export const showLoading = controller.handleLoadingShow.bind(this)
export const hideLoading = controller.handleLoadingHide.bind(this)
