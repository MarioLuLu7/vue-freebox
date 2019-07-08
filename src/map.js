/* eslint-disable no-undef */
import store from './store/index'

var url = 'http://api.map.baidu.com/api?v=2.0&ak=TlGbjGEExS0j2npzVFIx65Z5NwUTevI5&callback=initialize'
var jsapi = document.createElement('script')
jsapi.charset = 'utf-8'
jsapi.src = url
document.head.appendChild(jsapi)

window.onload = function () {
  store.dispatch('setMyMap', {
    map: BMap,
    type: 'BD'
  })
}

// 地图配置
window.mapConfigs = function (Map, mymap) {
  mymap.centerAndZoom('宁波', 13)
  mymap.enableScrollWheelZoom(true)
  mymap.addControl(new Map.MapTypeControl({
    mapTypes: [
      BMAP_NORMAL_MAP,
      BMAP_HYBRID_MAP
    ]
  }))
}