# position-value
> Get position value by shorty..

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/position-value
```

## usage
```js
import positionValue from '@jswork/position-value';

positionValue({ rel: true })    // 'relative'
positionValue({ abs: true })    // 'absolute'
positionValue({ fixed: true })  // 'fixed'
positionValue({ xxx: true })    // null
```

## license
Code released under [the MIT license](https://github.com/afeiship/position-value/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/position-value
[version-url]: https://npmjs.org/package/@jswork/position-value

[license-image]: https://img.shields.io/npm/l/@jswork/position-value
[license-url]: https://github.com/afeiship/position-value/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/position-value
[size-url]: https://github.com/afeiship/position-value/blob/master/dist/position-value.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/position-value
[download-url]: https://www.npmjs.com/package/@jswork/position-value
