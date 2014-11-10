/*
 * Detect mobile browsers and devices
 *
 * Version 0.0.3
 *
 * Author: Adam Argyle, Forked from Jos Koomen
 * Twitter : @argyleink
 * Further changes, questions, comments: @argyleink
 */

/*
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 2 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program; if not, write to the
 *   Free Software Foundation, Inc.,
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */

var Device = (function() {

  var ua = navigator.userAgent.toLowerCase();

  return detect = {
    iphone:             ua.indexOf('iphone') !== -1,
    ipod:               ua.indexOf('ipod') !== -1,
    ipad:               ua.indexOf('ipad') !== -1,

    htc:                ua.indexOf('htc') !== -1,
    sonyericsson:       ua.indexOf('sonyericsson') !== -1,
    acer:               ua.indexOf('acer') !== -1,
    LG:                 ua.indexOf('lg-') !== -1,
    motorola:           ua.indexOf('motorola') !== -1,
    nokia:              ua.indexOf('nokia') !== -1,
    samsung:            ua.indexOf('gt-') !== -1 || ua.indexOf('galaxy') !== -1,
    iemobile9:          ua.indexOf('iemobile/9') !== -1,
    iemobile10:         ua.indexOf('iemobile/10') !== -1,
    operamini:          ua.indexOf('opera mini') !== -1,
    blackberry:         ua.indexOf('blackberry') !== -1,

    firefox:            ua.indexOf('firefox') !== -1,
    webkit:             ua.indexOf('webkit') !== -1,
    trident:            ua.indexOf('trident') !== -1,

    ie7:                ua.indexOf('msie 7') !== -1,
    ie8:                ua.indexOf('msie 8') !== -1,
    ie9:                ua.indexOf('msie 9') !== -1,
    ie10:               ua.indexOf('msie 10') !== -1,
    ie11:               ua.indexOf('rv:11') !== -1,
    windowsphone7:      ua.indexOf('windows phone os 7') !== -1,
    windowsphone8:      ua.indexOf('windows phone 8') !== -1,

    ios:                this.iphone || this.ipad || this.ipod,
    ios5:               ua.indexOf('os 5') !== -1,
    ios6:               ua.indexOf('os 6') !== -1,
    ios7:               ua.indexOf('os 7') !== -1,
    ios8:               ua.indexOf('os 8') !== -1,

    android:            ua.indexOf('android') !== -1,
    android2:           ua.indexOf('android 2') !== -1,
    android3:           ua.indexOf('android 3') !== -1,
    android4:           ua.indexOf('android 4') !== -1,
    android5:           ua.indexOf('android 5') !== -1,

    halfretina:         window.devicePixelRatio > 1 && window.devicePixelRatio < 2,
    retina:             window.devicePixelRatio === 2,

    // is the app "added to homescreen" on iOS
    standalone:         ("standalone" in window.navigator) && (window.navigator.standalone === true),
    touch:              !!('ontouchstart' in window),

    landscape:          function() {
      return window.orientation === -90 ||window.orientation === 90;
    },
    portrait:           function() {
      return window.orientation === 0 || window.orientation === 180;
    },

    mobile:             typeof window.orientation !== 'undefined',
    desktop:            typeof window.orientation === 'undefined'
  }

})();