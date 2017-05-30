#############################
run cmd in the project folder:
#############################
npm install
bower install

#############################
then :
#############################
cordova plugin add cordova-plugin-x-socialsharing
cordova plugin add cordova-plugin-whitelist
cordova prepare

##############################################
to generate signed apk to transport to mobile:
##############################################
cordova platform add android
cordova plugin rm cordova-plugin-console
ionic build --release android
keytool -genkey -v -keystore ?my-release-key.keystore? -alias ?alias_name? -keyalg RSA -keysize 2048 -validity 10000
(the "?my-release-key.keystore?" is the name o the key, in the "?alias_name?" we will put our alias name.... we will need that for later)
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ?my-release-key.keystore? ?projectName-release-unsigned.apk? ?alias_name?
(the "?my-release-key.keystore?" is the name of the key, the "?projectName-release-unsigned.apk?" is the apk should be in ../ProjectDir/platforms/android/build/outputs/apk
and the "?alias_name?" is from before, then you will generate a password )
zipalign -v 4 projectName-release-unsigned.apk projectName.apk
#############################
to run on emulator:
#############################
cordova platform add android
ionic build android
ionic emulate android

#############################
to run on web:
#############################
ionic serve --lab  (the "--lab" flag will generate both android and iphone screens)