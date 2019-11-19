# publish

Scoped packages 会被自动发布为私有包，因为这样不但对我们这样的独立用户有用，而且它们也被公司用于在项目之间共享代码。如果我们就发布这样一个包的话，那我们的旅程可能就要在此结束了。
我们只需改变下指令来告诉 npm 我们想让每个人都可以使用这个模块 —— 不要把它锁进 npm 的保险库中。所以我们执行如下指令：

~~~
npm publish --access=public
~~~



## resources
- https://juejin.im/post/5c2dfd22e51d4570f1456b22
