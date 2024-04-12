# my-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 边栏菜单样式
边栏菜单分两种：一级菜单（无子菜单）和二级菜单（有一级子菜单）的。

1. 一级菜单直接使用`el-menu-item`

2. 二级菜单的使用`el-submenu`中再嵌套`el-menu-item`
   
   - 例如三级菜单，就是二级菜单中的子菜单又是个二级菜单，使用两个`el-submenu`嵌套，多级菜单以此类推

# 面包屑
当前项目面包屑功能比较简单，只需要展示所有点击过的菜单（不涉及多层菜单）,高亮显示最后一个菜单

面包屑使用`el-breadcrumb`完成，其中面包屑内容数据存储在vuex中，初始数据只有首页

点击面包屑跳转功能，可以使用对应element组件下的to属性，改element组件样式时有时需要使用样式穿透

实现原理：点击侧边栏菜单跳转时，需要判断是否为首页，以及以前是否点击过该菜单，如果都没有则push进入面包屑数组中，页面中直接遍历展示该数组内容


