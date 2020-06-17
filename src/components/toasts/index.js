const controller = {
  _init() {
    this.createModal()
  },
  createModal() {
    const _this = this,
        toast = `
        <div class="toast" id="toast" style="position: absolute;" role="alert" aria-live="assertive" aria-atomic="true" data-delay=3000>
          <div class="toast-header">
            <small>11 mins ago</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">
          </div>
       </div>`
    $('body').prepend(toast)
  },

  handleToastHide() {
    $('#toast').modal('hide')
  },
  handleToastShow(msg = 'Msg', isHaveCancel = false, fn) {
    let scrollHeight = document.body.scrollTop == 0 ? document.documentElement.scrollTop
        : document.body.scrollTop;


    $('#toast').find('.toast-body').text(msg)
    $('#toast').css({top: scrollHeight + 30 + 'px', right: '30px'}).toast('show')
    $('#toast').on('hidden.bs.toast', function () {
      fn && fn
    })
  }
}

controller._init()

export const showToast = controller.handleToastShow.bind(controller)
export const hideToast = controller.handleToastHide.bind(controller)
