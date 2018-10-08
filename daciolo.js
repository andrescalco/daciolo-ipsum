

const DACIOLO = (function(){

	const defaults = {
		paragrahps: 2,
		quotes_per_paragraph: 3,
		wrap_with_paragraph_tags: false,
	}

	const random = number => Math.floor(Math.random() * number) + 1;

	const quotes = [
		'Glória a Deus, Glória!',
		'Glória a Deus! Feliz a nação cujo Deus é o Senhor.',
		'Essa crise é uma crise mentirosa.',
		'Deus está no controle',
		'Temos 400 bilhões de sonegadores, incluindo emissoras, banqueiros. Dinheiro é o que mais tem.',
		'Vou fazer auditoria da dívida',
		'Tá chegando o momento de clamarmos a Deus.',
		'Com fé, esperança e amor.',
		'Em nome do Senhor Jesus, tá chegando a transformação.',
		'Em nome do Senhor Jesus.',
		'Deus está no controle! Glória a Deus.',
		'Glória a Deus! Glória a Deus!',
		'O que eu vou falar aqui vai parecer loucura para muitos, mas eu prefiro a loucura de Deus a sabedoria dos homens',
		'Digo a todos que juntos somos fortes, que nenhum passo demos para trás e que Deus está no controle.',
		'O que o senhor pode falar aqui para a nação Brasileira sobre o plano Ursal?',
		'Ursal, União da Republica Socialista Latino Americana.',
		'Nova ordem mundial.',
		'No nosso governo, o comunismo não vai ter vez!',
		'Para honra e glória do Senhor Jesus Cristo.',
		'A bandeira nascional coloca ordem e progresso, nunca tivemos ordem nem progresso no país.',
		'A democracia é uma delícia!',
		'Infelizmente, infelizmente o mar de lama e corrupção está no meio dos engravatados que não estão do lado do povo.'

	];

	const generate_quote = (options) => {

		const args = { ...defaults, ...options }
		const { paragrahps, quotes_per_paragraph, wrap_with_paragraph_tags } = args;

		let text = "";

		for (let i = 1; i <= paragrahps; i++) {
			
			if ( wrap_with_paragraph_tags ) {
				text += '<p>'
			}

			for (let i = 1; i <= quotes_per_paragraph; i++) {
				text += quotes[random(quotes.length -1)];
				text += " ";
			}

			if ( wrap_with_paragraph_tags ) {
				text += '</p>'
			} else {
				text += ` \n`;
				text += ` \n`;
			}
		}

		return text;

	}

	return {
		generate_quote
	}

})()
