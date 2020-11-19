//add context menu item
chrome.contextMenus.create({
  id: "curate-this-item",
  title: "Add To Collection",
  onclick: handleContextMenuClick,
  contexts: ["image", "video"],
});
//context menu function
function handleContextMenuClick({ srcUrl, pageUrl, mediaType }) {
  //create entry
  const entry = {
    srcUrl,
    pageUrl,
    mediaType,
  };
  // send url to storage
  let collection = [];
  chrome.storage.sync.get(["collection"], function getPreviousCollection(
    result
  ) {
    if (Object.is(result, {})) {
      return;
    }
    collection = result.collection;
  });

  chrome.storage.sync.set({ collection: [...collection, entry] });
  chrome.storage.sync.get(["collection"], function getPreviousCollection(
    result
  ) {
    console.log(result);
  });
}
