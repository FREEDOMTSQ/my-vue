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


