(function(){
  'use strict';

  chrome.omnibox.setDefaultSuggestion({
    description: '%s Search on Piratebay'
  });

  chrome.omnibox.onInputEntered.addListener(function(text) {
    var url = "https://thepiratebay.se/search/" + text;

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {url: url});
    });
  });

})();
