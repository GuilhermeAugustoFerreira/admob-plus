export const enum NativeActions {
  Service = 'AdMob',
  ready = 'ready',
  banner_show = 'banner_show',
  interstitial_prepare = 'interstitial_prepare',
  interstitial_show = 'interstitial_show'
}

export const enum Events {
  ready = 'admob.ready',
  interstitial_load = 'admob.interstitial.load',
  interstitial_load_fail = 'admob.interstitial.load_fail',
  interstitial_open = 'admob.interstitial.open',
  interstitial_close = 'admob.interstitial.close',
  interstitial_exit_app = 'admob.interstitial.exit_app'
}
