# daciolo-ipsum
O melhor Ipsum para a Glória do Senhor Jesus
> [https://andrescalco.github.io/daciolo-ipsum/](https://andrescalco.github.io/daciolo-ipsum/)

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/andrescalco)

[![Build Status](https://img.shields.io/travis/andrescalco/daciolo-ipsum.svg?style=flat-square)](https://travis-ci.org/andrescalco/daciolo-ipsum)
[![codecov](https://img.shields.io/codecov/c/github/andrescalco/daciolo-ipsum.svg?style=flat-square)](https://codecov.io/gh/andrescalco/daciolo-ipsum)
[![Codacy Badge](https://img.shields.io/codacy/grade/39abaa6b730941728b1e553e73e10b1e.svg?style=flat-square)](https://www.codacy.com/project/andrescalco/daciolo-ipsum/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=andrescalco/daciolo-ipsum&amp;utm_campaign=Badge_Grade_Dashboard)
[![Dependencies](https://david-dm.org/andrescalco/daciolo-ipsum.svg?style=flat-square)](https://codeclimate.com/github/andrescalco/daciolo-ipsum/master/package.json)
[![Known Vulnerabilities](https://snyk.io/test/github/andrescalco/daciolo-ipsum/badge.svg?style=flat-square&targetFile=package.json)](https://snyk.io/test/github/andrescalco/daciolo-ipsum?targetFile=package.json)

### Usage
``` html
<script src="path/to/daciolo.min.js"></script>
```

``` javascript
const quote = DACIOLO.generate_quote()

console.log(quote)

// Some random quote here
```

### Options

Key | Type | Default | Description
--- | --- | --- | ---
paragraphs | Number | 1 | Number of paragraphs requested
quotes_per_paragraph | Number | 1 | Number of quotes per paragraph
wrap_with_paragraph_tags | Boolean | false | Wrap your ipsum with `<p>` tags

The options can be set on an object passed as a parameter, like the example above:

``` javascript
const quote = DACIOLO.generate_quote({
  paragraphs: 20,
  quotes_per_paragraph: 4,
  wrap_with_paragraph_tags: true,
})

console.log(quote)
```

### Development

* Install dependencies

```bash
npm install
```

* Working on site

```bash
npm run dev
```

* Build

```bash
npm run build
```
