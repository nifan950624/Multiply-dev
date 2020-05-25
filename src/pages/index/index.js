import './index.scss'
import '../../assets/font/iconfont'
import $ from 'jquery'
import ImgSrc from '../../assets/images/Tntzo5JpRxk.jpg'

const img = new Image()

$(img).css({
  width: '200px',
  display: 'block'
})
img.src = ImgSrc

$('div').append(img)
