/**
 * cookie操作相关方法
 * {@link https://github.com/js-cookie/js-cookie/blob/master/src/js.cookie.js}
 * @module cookie
 */
const defaults = {}
/**
 * 写入cookie
 * @param key
 * @param value
 * @param attributes
 * @returns {string}
 */
function set (key, value, attrs) {
  let result
  const attributes = Object.assign({}, defaults, attrs)
  if (typeof attributes.expires === 'number') {
    const expires = new Date()
    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5)
    attributes.expires = expires
  }

  attributes.expires = attributes.expires ? attributes.expires.toUTCString() : ''

  try {
    result = JSON.stringify(value)
    if (/^[{[]/.test(result)) {
      value = result
    }
    value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
  } catch (e) {
  }

  key = encodeURIComponent(String(key))
  key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
  key = key.replace(/[()]/g, escape)

  let stringifiedAttributes = ''

  for (const attributeName in attributes) {
    if (!attributes[attributeName]) {
      continue
    }
    stringifiedAttributes += '; ' + attributeName
    if (attributes[attributeName] === true) {
      continue
    }
    stringifiedAttributes += '=' + attributes[attributeName]
  }
  return (document.cookie = key + '=' + value + stringifiedAttributes)
}

/**
 * 获取cookie
 * @param key
 * @param jsJson
 * @returns {*}
 */
function get (key, jsJson) {
  let result
  if (!key) {
    result = {}
  }

  // To prevent the for loop in the first place assign an empty array
  // in case there are no cookies at all. Also prevents odd result when
  // calling "get()"
  const cookies = document.cookie ? document.cookie.split('; ') : []
  const rdecode = /(%[0-9A-Z]{2})+/g
  let i = 0

  for (; i < cookies.length; i++) {
    const parts = cookies[i].split('=')
    let cookie = parts.slice(1).join('=')

    if (cookie.charAt(0) === '"') {
      cookie = cookie.slice(1, -1)
    }

    try {
      const name = parts[0].replace(rdecode, decodeURIComponent)
      cookie = cookie.replace(rdecode, decodeURIComponent)

      if (jsJson) {
        try {
          cookie = JSON.parse(cookie)
        } catch (e) {
        }
      }

      if (key === name) {
        result = cookie
        break
      }

      if (!key) {
        result[name] = cookie
      }
    } catch (e) {
    }
  }

  return result
}

/**
 * 移除cookie
 * @param key
 * @param attributes
 */
function remove (key, attributes = {}) {
  set(key, '', Object.assign(attributes, {
    expires: -1
  }))
}

export default {
  get,
  set,
  remove
}
