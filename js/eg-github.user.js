// ==UserScript==
// @name         eg-github
// @version      0.1
// @description  検索をしやすくする
// @author       no.eggchicken@gmail.com
// @include      https://github.com/*/projects/*
// @grant        none
// ==/UserScript==

class EgGithub {
  static setup() {
    const egGithub = new EgGithub()
    window.setTimeout(() => {
      egGithub.initContainer()
      egGithub.initAvatars()
      egGithub.renderAvatars()
    }, 3000)
  }

  constructor () {
    this.container = null
    this.avatars = new Map()
  }

  initAvatars() {
    document.querySelectorAll("button.avatar").forEach((avatarButton) => {
      const key = avatarButton.dataset.cardFilter
      avatarButton.setAttribute('style', 'margin-left: 5px')
      this.avatars.set(key, avatarButton)
    })
  }

  initContainer() {
    this.container = document.createElement("div")
    this.container.classList.add("eg-github-avatars")
    this.container.setAttribute('style', 'position: absolute; right: 0; bottom: 0;')
    document.querySelector('.pagehead').appendChild(this.container)
  }

  renderAvatars() {
    this.avatars.forEach((value, key) => {
      this.container.prepend(value)
    })
    this.container.querySelectorAll('img').forEach((img) => {
      img.setAttribute('width', 40)
      img.setAttribute('height', 40)
    })
  }
  }
}

(function() {
  EgGithub.setup()
})();
