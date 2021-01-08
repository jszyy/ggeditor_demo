# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## gg-editor

### Item 属性说明

#### type

node 就是节点，edge 是连接节点的连线

#### shape

圆形 'flow-circle'
圆角矩形 'flow-rect'
菱形 'flow-rhombus'
椭圆矩形 'flow-capsule'

#### src

src 可以引入一张图片作为当前节点的预览样式;
也可以自定义子节点，`<Item />` 会接收 props.children 作为预览样式;
需要注意的是，不管是 src 还是子节点，都只是一个预览样式，并不等于编辑器画板中的样式

而画板中的样式，由 model 决定，其配置项如下：

```javascript
model: {
    color: '#333', // 节点主题色（选中颜色、激活颜色基于该值）
    size: [10, 10], // [x, y] 节点尺寸
    shape: 'cirle', // 图形：圆形 circle | 圆角矩形 rect | 菱形 rhombus | 椭圆矩形 capsule
    style: { // 关键形样式(可覆盖color的普通样式，但激活、选中依然无效，坑！)
        fill: 'red', // 填充背景
        stroke: 'blue' // 形状描边
    },
    label: { // 节点标签
        text: '开始节点', // 文本内容
        fill: 'green' // 文本颜色
    },
    index: 1 // 渲染层级
}
```

不过 model 默认会继承 `<Item>` 组件的 props.shape 和 props.size，所以通常 model 只需配置 color、label
