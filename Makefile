VIDEO_NAME=video.webm
VIDEO_URL="https://www.youtube.com/watch?v=DEpHwcgnZU0"

all: build/nyc-dynamic-wallpaper.heic
	

build/$(VIDEO_NAME):
	mkdir -p build
	youtube-dl -f 272 --output build/$(VIDEO_NAME) $(VIDEO_URL) 

build/photos: build/$(VIDEO_NAME)
	mkdir -p build/photos
	ffmpeg -i build/$(VIDEO_NAME) -qscale 1 -vf fps=1/1.5625 build/photos/%d.jpg

wallpaper.json:
	node wallpaper_json_generator.js > wallpaper.json

build/nyc-dynamic-wallpaper.heic: build/photos wallpaper.json
	wallpapper -i wallpaper.json -o build/nyc-dynamic-wallpaper.heic

clean:
	rm -rf build wallpaper.json