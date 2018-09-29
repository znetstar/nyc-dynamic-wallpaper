VIDEO_NAME=video.webm
VIDEO_URL="https://www.youtube.com/watch?v=CSfri4U9w28"
FREQ="3.941176470588235"

all: build/nyc-dynamic-wallpaper.heic
	

build/$(VIDEO_NAME):
	mkdir -p build
	youtube-dl -f 272 --output build/$(VIDEO_NAME) $(VIDEO_URL) 

build/photos: build/$(VIDEO_NAME)
	mkdir -p build/photos
	ffmpeg -i build/$(VIDEO_NAME) -ss 00:00:03 -t 00:01:07 -qscale 1 -vf fps=1/$(FREQ) build/photos/%d.jpg

wallpaper.json:
	node wallpaper_json_generator.js > wallpaper.json

build/nyc-dynamic-wallpaper.heic: build/photos wallpaper.json
	wallpapper -i wallpaper.json -o build/nyc-dynamic-wallpaper-$(shell date "+%s").heic

clean:
	rm -rf build wallpaper.json