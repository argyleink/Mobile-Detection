/*
 * Detect mobile browsers and devices
 *
 * Version 2.3
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

  var userAgent = navigator.userAgent.toLowerCase();

  return detect = {
    iphone:             userAgent.indexOf('iphone') !== -1,
    ipod:               userAgent.indexOf('ipod') !== -1,
    ipad:               userAgent.indexOf('ipad') !== -1,

    htc:                userAgent.indexOf('htc') !== -1,
    sonyericsson:       userAgent.indexOf('sonyericsson') !== -1,
    acer:               userAgent.indexOf('acer') !== -1,
    LG:                 userAgent.indexOf('lg-') !== -1,
    motorola:           userAgent.indexOf('motorola') !== -1,
    nokia:              userAgent.indexOf('nokia') !== -1,
    samsung:            userAgent.indexOf('gt-') !== -1 || userAgent.indexOf('galaxy') !== -1,
    iemobile9:          userAgent.indexOf('iemobile/9') !== -1,
    iemobile10:         userAgent.indexOf('iemobile/10') !== -1,
    operamini:          userAgent.indexOf('opera mini') !== -1,
    blackberry:         userAgent.indexOf('blackberry') !== -1,

    firefox:            userAgent.indexOf('firefox') !== -1,
    webkit:             userAgent.indexOf('webkit') !== -1,

    windowsphone7:      userAgent.indexOf('windows phone os 7') !== -1,
    windowsphone8:      userAgent.indexOf('windows phone 8') !== -1,

    ios:                this.iphone || this.ipad || this.ipod,
    ios5:               userAgent.indexOf('os 5') !== -1,
    ios6:               userAgent.indexOf('os 6') !== -1,
    ios7:               userAgent.indexOf('os 7') !== -1,
    ios8:               userAgent.indexOf('os 8') !== -1,

    android:            userAgent.indexOf('android') !== -1,
    android2:           userAgent.indexOf('android 2') !== -1,
    android3:           userAgent.indexOf('android 3') !== -1,
    android4:           userAgent.indexOf('android 4') !== -1,
    android5:           userAgent.indexOf('android 5') !== -1,

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
    }
  }

})();