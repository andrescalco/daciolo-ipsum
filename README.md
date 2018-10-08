# daciolo-ipsum
O melhor Ipsum para a Glória do Senhor Jesus

### Usage
``` html
<script src="path/to/daciolo.min.js"></script>
```

``` javascript
const quote = DACIOLO.generate_quote()

console.log(quote)

// Some ramdom quote here
```

### Options

Key | Type | Default | Description
--- | --- | --- | ---
paragrahps | Number | 1 | Number of paragraphs requested
quotes_per_paragraph | Number | 1 | Number of quotes per paragraph
wrap_with_paragraph_tags | Boolean | false | Wrap your ipsum with `<p>` tags

The options can be set on an object passed as a parameter, like the example above:

``` javascript
const quote = DACIOLO.generate_quote({
	paragrahps: 20,
	quotes_per_paragraph: 4,
	wrap_with_paragraph_tags: true,
})

console.log(quote)
```