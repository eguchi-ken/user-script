// ==UserScript==
// @name         eg-org-link
// @version      0.2
// @description  `Alt + L` で emacs org mode のためのリンクを作成する
// @author       no.eggchicken@gmail.com
// @include      http://*
// @include      https://*
// @grant        none
// ==/UserScript==

class EgOrgLink {
  log(...messages) {
    // console.log(...messages)
  }

  getOrgLink() {
    const title = document.querySelector("title").innerText.replace(/\[(.*)\]/g, '【$1】')
    const url = location.href
    return `[[${url}][${title}]]`
  }

  getDiv() {
    this.log("get text area")
    let div = document.querySelector(".js-eggc-orglink")
    if(!div) {
      div = document.createElement("div")
      div.classList.add('js-eggc-orglink')
      document.querySelector("body").appendChild(div)
    }
    return div;
  }

  copyToClipboard(text) {
    this.log("copy to clipboard", text)
    const div = this.getDiv()
    div.innerText = text
    document.getSelection().selectAllChildren(div)
    document.execCommand("copy")
    div.hidden = true
  }

  setup() {
    document.onkeypress = (e) => {
      this.log("on key press")
      if(e.altKey && e.code == "KeyL") {
        const title = this.getOrgLink()
        this.copyToClipboard(title)
      }
    }
  }
}

(function() {
  'use strict';

  const orglink = new EgOrgLink()
  window.addEventListener('load', () => orglink.setup(), false)
})();
