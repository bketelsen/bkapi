.PHONY: build
build:
	rm -f blox.cue
	ln -s blox-full.cue blox.cue
	node scripts/ogimage.js
	blox build -i
	cld sync --push -w 10 public/static/images static/images

clean:
	rm -rf .build && mkdir .build

simple:
	rm -f blox.cue
	ln -s blox-simple.cue blox.cue
	blox build -i

serve:
	cd .build && python3 -m http.server
