# curate-chrome-ext

##  Ideas
- this is different than pinterest, becuase its more streamlined with a single purpose, and is not for long running curation just immeadiate.
- Version 1: will just export a folder with images.
- Version 1: Just one bucket to screen shot images
- screenshot will automagically send that screenshot to the storage device
- right click image and send so storage device

##  Technology 
- AWS buckets
- netlify functions
- chrome Extension apis
- eventually headless chrome


## TODO: MVP

- app/popup
  - display the storage
  -    export to collection
- Create a netlify env/ tooling with dev/prod vars
- Cloud Function
  - generate url string of images with the webpage url
  - headless chrome create pdf of webpage
  - Eventually Generate the webpage with puppeteer and remove the webpage.
- Webpage/PDF Template
  - Create webpage folder structure
  - display in grid


## Chrome Apis
- storage - store the image urls 
- runtime
  - .sendMessage()
  - .onMessage() ( eventListener )
- commands - keyboard shortcuts
- contextMenus - used for right click actions