/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME                = 'button'
const VERSION             = '4.3.1'
const DATA_KEY            = 'bs.button'
const EVENT_KEY           = `.${DATA_KEY}`
const DATA_API_KEY        = '.data-api'
const JQUERY_NO_CONFLICT  = $.fn[NAME]

const ClassName = {
  ACTIVE : 'active',
  BUTTON : 'btn',
  FOCUS  : 'focus'
}

const Selector = {
  DATA_TOGGLE_CARROT : '[data-toggle^="button"]',
  DATA_TOGGLE        : '[data-toggle="buttons"]',
  INPUT              : 'input:not([type="hidden"])',
  ACTIVE             : '.active',
  BUTTON             : '.btn'
}

const Event = {
  CLICK_DATA_API      : `click${EVENT_KEY}${DATA_API_KEY}`,
  FOCUS_BLUR_DATA_API : `focus${EVENT_KEY}${DATA_API_KEY} ` +
                          `blur${EVENT_KEY}${DATA_API_KEY}`
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Button {
  constructor(element) {
    this._element = element
  }

  // Getters

  static get VERSION() {
    return VERSION
  }

  // Public

  toggle() {
    const rootElement = $(this._element).closest(
      Selector.DATA_TOGGLE
    )[0]

    const input = this._element.querySelector(Selector.INPUT)

    if (rootElement) {
      const activeElement = rootElement.querySelector(Selector.ACTIVE)

      if (activeElement) {
        activeElement.classList.remove(ClassName.ACTIVE)
      }
    }

    if (input) {
      if (input.checked) {
        this._element.classList.add(ClassName.ACTIVE)
      } else {
        this._element.classList.remove(ClassName.ACTIVE)
      }
    } else {
      this._element.classList.toggle(ClassName.ACTIVE)
      this._element.setAttribute('aria-pressed',
        this._element.classList.contains(ClassName.ACTIVE))
    }
  }

  dispose() {
    $.removeData(this._element, DATA_KEY)
    this._element = null
  }

  // Static

  static _jQueryInterface(config) {
    return this.each(function () {
      let data = $(this).data(DATA_KEY)

      if (!data) {
        data = new Button(this)
        $(this).data(DATA_KEY, data)
      }

      if (config === 'toggle') {
        data[config]()
      }
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

$(document)
  .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
    let button = event.target

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON)
    }

    Button._jQueryInterface.call($(button), 'toggle')
  })
  .on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
    const button = $(event.target).closest(Selector.BUTTON)[0]
    if (button) {
      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))
    }
  })
  .on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT > Selector.INPUT, (event) => {
    const button = $(event.target).closest(Selector.BUTTON)[0]
    if (button) {
      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))
    }
  })

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Button._jQueryInterface
$.fn[NAME].Constructor = Button
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return Button._jQueryInterface
}

export default Button
