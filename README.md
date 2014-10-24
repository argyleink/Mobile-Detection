This plugin comes with the most common devices and os systems for modern mobile web developers. It's inspired by html5boilerplate (it's using ie classes for the html tag) and jquery's  $.browser extension.

### Detect retina displays
You can detect if your device has a display with a double pixel ratio (Like Apple's retina).

+ Detect.retina; // returns boolean (devicePixelRation == 2)
+ Detect.halfretina; // returns boolean (devicePixelRation > 1 && < 2)

### Detect standalone web applications
Detect if your web application is running in standalone mode or in safari

+ Detect.standalone();  // returns boolean

### Detect orientation
You can detect the orientation of your device.

+ Detect.portrait(); // returns boolean
+ Detect.landscape(); // returns boolean

### Detect your device
You can detect several devices. All detections returns a boolean. All functions are added to the 'mob' object.
You can detect the following devices:

+ iPhone 			: Detect.iphone;
+ iPad  			: Detect.ipad;
+ iPod 				: Detect.ipod;
+ Nokia				: Detect.nokia;
+ HTC 				: Detect.htc;
+ Samsung			: Detect.samsung;
+ Blackberry		: Detect.blackberry;
+ HTC				: Detect.htc;
+ Acer				: Detect.acer;
+ SonyEricsson		: Detect.sonyericsson;
+ Motorola			: Detect.motorola;
+ LG				: Detect.LG;

### Detect your OS
You can detect several Operating systems. All detections returns a boolean. Android and iOS subversions are no longer seperate functions.
You can detect the following Operating systems:

+ iOs (all)			: Detect.ios;
+ iOs 5				: Detect.ios5;
+ iOs 6				: Detect.ios6;
+ iOs 7				: Detect.ios7;
+ iOs 8				: Detect.ios8;
+ Android (all)		: Detect.android;
+ Android 2         : Detect.android2;
+ Android 3			: Detect.android3;
+ Android 4			: Detect.android4;
+ Windows Phone 7	: Detect.windowsphone7;
+ Windows Phone 8	: Detect.windowsphone8;

### Detect your mobile browser
You can detect several Mobile browsers. All detections returns a boolean. All functions are added to the 'mob' object.
You can detect the following Browsers:

+ Opera Mini		: Detect.operamini;
+ Webkit			: Detect.webkit;
+ Firefox			: Detect.firefox;
+ IE Mobile	9		: Detect.iemobile9;
+ IE Mobile	10		: Detect.iemobile10;

### Detect basics
You can detect almost everything but if you're only interested in the function to check if a user uses a touch device or a smartphone you can use this:

+ Touch				: Detect.touch;
