const eventBus = {
  bus: {},

  //订阅
  on(name, fn) {
    const {bus} = this

    if (!bus[name]) {
      bus[name] = []
    }

    bus[name].push(fn)
  },

  //发布
  emit(name, data) {
    const {bus} = this

    setTimeout(main, 20)

    function main() {
      if (bus[name]) {
        bus[name].forEach((fn, index) => {
          fn(data)
        })
      }
    }
  }
}

export default eventBus