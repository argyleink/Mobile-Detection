This plugin comes with the most common devices and os systems for modern mobile web developers. You can detect several devices. **All detections returns a boolean.**

`bower i device-detect.js --save`

### Detect retina displays

+ Device.retina; (devicePixelRation == 2)
+ Device.halfretina; (devicePixelRation > 1 && < 2)

### Detect standalone web applications

+ Device.standalone; 

### Detect orientation

+ Device.portrait();
+ Device.landscape();

### Detect the device

+ iPhone 			: Device.iphone;
+ iPad  			: Device.ipad;
+ iPod 				: Device.ipod;
+ Nokia				: Device.nokia;
+ HTC 				: Device.htc;
+ Samsung			: Device.samsung;
+ Blackberry		: Device.blackberry;
+ HTC				: Device.htc;
+ Acer				: Device.acer;
+ SonyEricsson		: Device.sonyericsson;
+ Motorola			: Device.motorola;
+ LG				: Device.LG;

### Detect the OS

+ iOs (all)			: Device.ios;
+ iOs 5				: Device.ios5;
+ iOs 6				: Device.ios6;
+ iOs 7				: Device.ios7;
+ iOs 8				: Device.ios8;
+ Android (all)		: Device.android;
+ Android 2         : Device.android2;
+ Android 3			: Device.android3;
+ Android 4			: Device.android4;
+ Android 5         : Device.android5;
+ Windows Phone 7	: Device.windowsphone7;
+ Windows Phone 8	: Device.windowsphone8;

### Detect the mobile browser

+ Opera Mini		: Device.operamini;
+ Webkit			: Device.webkit;
+ Firefox			: Device.firefox;
+ IE                : Device.trident;
+ IE 7              : Device.ie7;
+ IE 8              : Device.ie8;
+ IE 9              : Device.ie9;
+ IE 10             : Device.ie10;
+ IE 11             : Device.ie11;
+ IE Mobile 9       : Device.iemobile9;
+ IE Mobile 10      : Device.iemobile10;

### Detect basics

+ Touch				: Device.touch;
+ Mobile            : Device.mobile;
+ Tablet            : Device.tablet;
+ Desktop           : Device.desktop
