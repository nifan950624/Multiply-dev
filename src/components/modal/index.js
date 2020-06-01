import eventBus from "../../assets/js/event_bus";

const controller = {
  _init() {
    this.createModal()
  },
  createModal() {
    const _this = this,
        modal = `
      <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            msg
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`
    $('body').append(modal)
  },

  handleModalHide() {
    $('#modal').modal('hide')
  },
  handleModalShow(title = 'Title', msg = 'Msg', isHaveCancel = false, fn) {

    $('#modal').find('.modal-title').text(title)
    $('#modal').find('.modal-body').text(msg)

    if (!isHaveCancel) {
      $('#modal').find('.modal-footer').find('.btn-secondary').hide()
    }

    $('#modal').modal('show')
    $('#modal').find('.btn-primary').one('click', () => {
      fn && fn
    })
  }
}

controller._init()

export const showModal = controller.handleModalShow.bind(controller)
export const hideModal = controller.handleModalHide.bind(controller)