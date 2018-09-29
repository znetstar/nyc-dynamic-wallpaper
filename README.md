# nyc-dynamic-wallpaper

This project creates MacOS [dynaimc wallpaper](https://itnext.io/macos-mojave-dynamic-wallpaper-fd26b0698223) from [this beautiful 8K time-lapse of Lower Manhattan](https://www.youtube.com/watch?v=CSfri4U9w28) using [mczachurski/wallpapper](https://github.com/mczachurski/wallpapper). The script will download the time-lapse video from YouTube at the highest quality, then it will extract 24 photos, one photo for every 2.79 seconds out of the 67 seconds in the video. Photos will range from morning to night. The photos are extracted from an 8K video so it will display beautifully on a 4K or 5K display.

Credit wholly goes to EarthCam on YouTube for the timelapse video and mczachurski on GitHub for the wallpaper tool.

# Prerequisites

The script requires:
* [mczachurski/wallpapper](https://github.com/mczachurski/wallpapper) to compile the wallpaper. Run `brew tap mczachurski/wallpapper && brew install wallpapper` to install via homebrew.
* [youtube-dl](http://rg3.github.io/youtube-dl/) to download the video (run `brew install youtube-dl` to install via homebrew).
* [FFMpeg](https://ffmpeg.org/) to extract photos from the video (run `brew install ffmpeg` to install via homebrew). 
* Xcode developer tools to compile the wallpaper compiler (run `xcode-select --install` to install).
* Make, which should be installed with the previous command, if it isn't run `brew install make` to install via homebrew.

I've included the wallpaper.json file which will be used by `wallpapper` to compile the images. The file is generated via a node.js script `wallpaper_json_generate.js`.

# Compiling 

To compile run `make`.

The wallpaper will be generated at `build/nyc-dynamic-wallpaper.heic`.
