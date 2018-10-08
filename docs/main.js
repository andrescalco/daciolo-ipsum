const generateQuote = (e) => {
	
	e.preventDefault();
	const number_of_paragraphs = e.target[0].value;

	const quote = DACIOLO.generate_quote({
		wrap_with_paragraph_tags: true,
		paragrahps: number_of_paragraphs ? number_of_paragraphs : 2
	})

	console.log(quote)
	
	document.querySelector('.quote').innerHTML = quote;

	e.target[0].value = ""
}