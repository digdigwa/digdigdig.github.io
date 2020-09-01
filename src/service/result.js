import Vue from 'vue'

export const handleResult = ({ status, data, message, tip = true }) => {
  if (status !== 0 && message && tip) {
    Vue.prototype.$message({
      type: 'error',
      message: message,
      onClose: () => {
        if (status === 401) {
          window.location.href = location.origin + '#/login'
        }
      }
    })
  }
  return data
}
