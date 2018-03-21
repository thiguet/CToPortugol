function convertToPortugol () {
	var CtextArea = $('#C');

	var text = convertToPortugolMain(CtextArea.val());

	var portugolTextArea = $('#Portugol');
	portugolTextArea.val(text);
} 


function convertToPortugolMain(cCode) {
	cCode = cCode.replace(/if /gm, 'SE ');
	cCode = cCode.replace(/else /gm, 'SENAO ');
	cCode = cCode.replace(/int /gm, 'INTEIRO ');
	cCode = cCode.replace(/float /gm, 'REAL ');
	cCode = cCode.replace(/double /gm, 'NUMERICO ');
	cCode = cCode.replace(/char /gm, 'CARACTER ');
	cCode = cCode.replace(/for/gm, 'PARA');
	cCode = cCode.replace(/while/gm, 'ENQUANTO');
	cCode = cCode.replace(/do/gm, 'FAÇA');
	cCode = cCode.replace(/scanf/gm, 'LEIA');
	cCode = cCode.replace(/printf/gm, 'ESCREVA ');

	return cCode;

	// Palavras-Chave:
		// if 		= SE
		// else		= SENAO

		// int 		= INTEIRO	
		// float	= REAL
		// double	= NUMERICO
		// char		= CARACTER

		//[]

		// for 	  = PARA ATÉ  

		// while  = ENQUANTO

		// do 	  = FAÇA

		// scanf  = LEIA

		// printf = ESCREVA


	// Exps are Exps for them both!

}