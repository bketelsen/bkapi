# Brian's Life in a Repo

Data managed by [cueblox](https://www.cueblox.com)

## Directory Structure

```bash
├── api
│   └── index.js  # Serverless API
├── data
│   ├── articles
│   ├── blox.cue  # cueblox config
│   ├── categories
│   ├── feeditems
│   ├── feeds
│   ├── images
│   ├── pages
│   ├── profiles
│   ├── schemata
│   ├── sections
│   ├── tpl        # cueblox templates for special processing
│   └── websites
├── dist            # image processing build output
│   ├── build
│   ├── index.js
│   └── licenses.txt
├── images.js       # image processing with 11ty/images
├── index.js        # ""
├── package.json    # ""
├── pnpm-lock.yaml
├── public          # static files & images
│   ├── favicon.ico
│   ├── FiraSans-Light.ttf      # og-image font
│   ├── g           # OUTPUT directory of image processing
│   ├── images      # Original images
│   ├── og-standard.png     # og-image template
│   ├── robots.txt
├── README.md
└── vercel.json
```

## Build Process

The build uses GitHub Actions. The file is `.github/workflows/deploy.yml`.

### Build Steps

These steps run sequentially in the action.

* Build and validate blox
* Render articles -- builds og images script
* Render pages -- builds og images script
* Run articles script
* Run pages script
* Change permissions on output data from blox build
* process images
* create GH Release called "Data" with blox data
* deploy to vercel
