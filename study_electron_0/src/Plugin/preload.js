// 所有的Node.js api都可以在预加载过程中使用.
// It has the same sandbox as a Chrome extension.
// 在页面运行其他脚本之前预先加载指定的脚本，无论页面是否集成 Node， 此脚本都可以访问所有 Node API 脚本路径为文件的绝对路径。Demo 中的逻辑很简单，就是读取 process.versions 对象中的 node、chrome、electron 的版本信息并展示出来。
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  console.table(process)
  console.info(process.versions)
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
