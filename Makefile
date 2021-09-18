.PHONY: build
build:
	rm -f blox.cue
	cp blox-full.cue blox.cue
	node scripts/ogimage.js
	blox build -i
	cld sync --push -w 10 public/static/images static/images
	rm -rf blox.cue
	cp blox-simple.cue blox.cue

clean:
	rm -rf .build && mkdir .build

simple:
	rm -f blox.cue
	cp blox-simple.cue blox.cue
	blox build -i

setup:
	npm ci

serve:
	cd build && python3 -m http.server
