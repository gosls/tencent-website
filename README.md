# gosls组件使用说明

Serverless Components有很多有趣的组件，在使用的时候也非常方便，但是有的时候我们yaml中有很多很多组件，我们只修改了一其中一个，执行的时候会全部都执行一次，这会浪费很多时间和经历，所以作为社区爱好者我推出了gosls系列。

这一套组件的使用方法很简单，用户只需要把Serverless原有的组件名修改就好，例如tencent-scf组件，原有的格式是：

```yml
# serverless.yml
helloWorld:
  component: "@serverless/tencent-scf"
  inputs:
    name: myFunction1
    codeUri: ./code       # 代码目录
    ... ...
```

此时只需要改成：

```yml
# serverless.yml
helloWorld:
  component: "@serverless/tencent-scf"
  inputs:
    name: myFunction1
    codeUri: ./code       # 代码目录
    ... ...
```

是的，只需要修改component中的@serverless，变成@gosls，在使用的时候，如果想单独操作某个部分，可以直接使用参数`-n`，例如我有多个组件：

```yaml
# serverless.yml
helloWorldTest1:
  component: "@serverless/tencent-scf"
  inputs:
    name: myFunction1
    codeUri: ./code       # 代码目录
    ... ...

helloWorldTest2:
  component: "@serverless/tencent-scf"
  inputs:
    name: myFunction1
    codeUri: ./code       # 代码目录
    ... ...
    
helloWorldTest3:
  component: "@serverless/tencent-scf"
  inputs:
    name: myFunction1
    codeUri: ./code       # 代码目录
    ... ...
```

我想对其中`helloWorldTest1`进行部署，只需要执行`sls --debug -n helloWorldTest1`，如果是remove，就是`sls remove --debug -n helloWorldTest1`

如果不指定`-n`参数，系统会默认全部部署/移除。

整个项目流程非常简单，只是在官方基础上增加一层判断，所有的yaml规范和组件更新，都是直接使用官方的，请放心使用。
