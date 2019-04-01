# pass arguments

## command

```shell
npm run dev --report
npm run build --args='env=development&type=dll'
```

## get args

```js
const qs = require('querystring');
const report = process.env.npm_config_report;
const args = qs(process.env.npm_config_args);

// output:
console.log(report, args);

// true
// { env:'development', type:'dll' }
```
