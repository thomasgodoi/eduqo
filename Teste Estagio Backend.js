
<script> 

// o user insere total de linhas a serem impressas
var totalL = prompt("Insira a quantidade de linhas");



for(var linha = 0; linha < (totalL); linha++) {
	for(var caracteres = linha; caracteres < totalL -1; caracteres++) {
		document.write("_");
	}
	
	for(var asterisco = 0; asterisco <= (2 * linha); asterisco++) {
		document.write("*");
	}

	for(var underlineFinal = linha; underlineFinal < (totalL -1); underlineFinal++) {
		document.write("_");
	}

	document.write("<br>");
} 


</script>