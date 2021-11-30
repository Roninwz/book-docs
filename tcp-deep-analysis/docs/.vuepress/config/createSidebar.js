const path = require('path')
const fs = require('fs')

const sidebar = []
const docs_path = path.resolve(__dirname, '../../../docs')

function gen_sidebar_config(dir_path, ref, parent_ref, parent_router_path) {
  try {
    let file_or_dir_list = fs.readdirSync(dir_path).sort()
    file_or_dir_list = file_or_dir_list.sort((a, b) => {
      if (a.length >= 3 && b.length >= 3) {
        return a.substring(0, 3).replace(/[^0-9]/ig, '') - b.substring(0, 3).replace(/[^0-9]/ig, '')
      } else {
        return a.substring(0, 1).replace(/[^0-9]/ig, '') - b.substring(0, 1).replace(/[^0-9]/ig, '')
      }
    })
    console.log('my console file_or_dir_list : ', file_or_dir_list);
    if (file_or_dir_list) {
      for (let index = 0; index < file_or_dir_list.length; index++) {
        const file_or_dir_name = file_or_dir_list[index];
        const current_path = path.join(dir_path, file_or_dir_name)
        const current_stat = fs.statSync(current_path)
        if (!/.md/g.test(file_or_dir_name)) {
          continue
        }
        // 顶层 README
        if (!parent_router_path && /^\README/.test(file_or_dir_name)) {
          continue
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
      }
    }
  } catch (error) {
    console.error('💣 ERROR:: gen_sidebar_config error', error)
  }
}

gen_sidebar_config(docs_path, sidebar)

module.exports = sidebar;