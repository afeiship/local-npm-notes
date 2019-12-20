# npm-run-all
- https://github.com/mysticatea/npm-run-all
- https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html


## serial
```shell
npx npm-run-all --serial build:*
npx run-s build:* 
```

## parallel
```shell
npx npm-run-all --parallel build:*
npx run-p build:*
```
