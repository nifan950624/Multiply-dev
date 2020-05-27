import './index.scss'
import '../header/index'
import $ from 'jquery'
import eventBus from "../../assets/js/event_bus";


$('.btn').on('click', () => {
  eventBus.emit('first', 'ashgosahd')


})



