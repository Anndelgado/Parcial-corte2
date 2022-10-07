
var operacion = '';
var resultado = '';
$(".punto").click(function() {
	$(this).attr('disabled', true);
	insrt('.');
})
$(".operacion").click(function() {
	var valor = $(this).val();
	valor = (valor == 'x') ? '*' : valor;
	$(this).attr('disabled', true);
	insrt(valor);
})
$(".borrar").click(function() {
	$(".historial").html('');
})

function insrt(num) {
	operacion = $('.calc-display').val() + num;
	$('.calc-display').val(operacion);
	$(".igual").attr('disabled', false);
	if (isNumeric(num)) {
		$(".punto").attr('disabled', false);
		$(".operacion").attr('disabled', false);
	}
}

function eql() {
	resultado = eval($('.calc-display').val());
	$(".igual").attr('disabled', true);
	$('.calc-display').val(resultado);
	historial(operacion, resultado);
}

function isNumeric(val) {
	return /^-?\d+$/.test(val);
}

function c() {
	$('.calc-display').val('');
}

function del() {
	value = $('.calc-display').val();
	$('.calc-display').val(value.substring(0, value.length - 1));
}

function historial(numeros, resultado) {
	$(".historial").append('<tr><td>' + operacion + '</td><td>' + resultado + '</td></tr>');
}