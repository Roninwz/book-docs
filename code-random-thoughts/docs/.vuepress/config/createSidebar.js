const path = require('path')
const fs = require('fs')

const sidebar = []
const docs_path = path.resolve(__dirname, '../../../docs')

// 删除指定数组的某个元素
function deleteArrItem(arr, i) {
  var index = arr.indexOf(i);
  arr.splice(index, 1)
}

// 忽略名单
let ignoreList = [
  '.vuepress',
  'README.md',
  'pics'
]

function gen_sidebar_config(dir_path, ref, parent_ref, parent_router_path) {
  try {
    let file_or_dir_list = fs.readdirSync(dir_path)
    ignoreList.forEach((item) => {
      deleteArrItem(file_or_dir_list, item) // 先去除白名单内的文件或目录
    })
    // 排序
    file_or_dir_list = file_or_dir_list.sort((a, b) => {
      if (a.length >= 3 && b.length >= 3) {
        return a.substring(0, 3).replace(/[^0-9]/ig, '') - b.substring(0, 3).replace(/[^0-9]/ig, '')
      } else {
        return a.substring(0, 1).replace(/[^0-9]/ig, '') - b.substring(0, 1).replace(/[^0-9]/ig, '')
      }
    })
    if (file_or_dir_list) {
      // 把文件夹排在头部
      for (let i = 0; i < file_or_dir_list.length; i++) {
        const fileName = file_or_dir_list[i];
        const curPath = path.join(dir_path, fileName)
        const curStat = fs.statSync(curPath)
        // 文件夹
        if (curStat.isDirectory()) {
          deleteArrItem(file_or_dir_list, fileName)
          file_or_dir_list.unshift(fileName)
        }
      }
      for (let index = 0; index < file_or_dir_list.length; index++) {
        const file_or_dir_name = file_or_dir_list[index];
        const current_path = path.join(dir_path, file_or_dir_name)
        const current_stat = fs.statSync(current_path)
        if (!/.md/g.test(file_or_dir_name) && !current_stat.isDirectory()) {
          continue
        }
        // 文件夹
        if (current_stat.isDirectory()) {
          const current_router_path = parent_router_path ? `${parent_router_path}${file_or_dir_name}/` : `/${file_or_dir_name}/`
          // 创建分组
          const group = {
            title: file_or_dir_name,
            children: []
          }
          ref.push(group)
          gen_sidebar_config(current_path, ref[ref.length - 1].children, ref[ref.length - 1], current_router_path)
        }
        // 文件
        if (current_stat.isFile()) {
          const current_router_path = parent_router_path ? `${parent_router_path}${file_or_dir_name}` : `/${file_or_dir_name}`
          if (/^\README/.test(file_or_dir_name)) {
            parent_ref.path = parent_router_path
            continue
          }
          const file = {
            title: file_or_dir_name,
            path: current_router_path
          }
          ref.push(file)
          continue
        }
      }
    }
  } catch (error) {
    console.error('💣 ERROR:: gen_sidebar_config error', error)
  }
}

gen_sidebar_config(docs_path, sidebar)

module.exports = sidebar;