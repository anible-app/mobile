#!/bin/sh
rm -f Anible_*.apk
rm -rf app/build/outputs/apk
./gradlew assembleRelease
cp app/build/outputs/apk/release/app-arm64-v8a-release.apk "Anible_$(date +"%d-%m_%H-%M")_arm64.apk"
