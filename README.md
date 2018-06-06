#用webpack导出一个包含多个全局方法的类库文件

本例示范了如何配置 `wepack` 导出一个类库文件：
- 只生成一个文件 `lib.js`
- 文件能通过 `<script>` 标签直接引用
- 所有的方法都直接挂在 `window` 对象下，能直接使用
- 本例的 `lib.js` 包含 `a` 和 `b` 两个全局属性
