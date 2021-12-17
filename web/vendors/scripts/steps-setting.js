$(".tab-wizard").steps({
	headerTag: "h5",
	bodyTag: "section",
	transitionEffect: "fade",
	titleTemplate: '<span class="step">#index#</span> #title#',
	labels: {
		finish: "Cadastrar"
	},
	onStepChanged: function (event, currentIndex, priorIndex) {
		$('.steps .current').prevAll().addClass('disabled');
	},
	onFinished: function (event, currentIndex) {
		$('#cadastro_de_usuario').submit();
		$('#success-modal').modal('show');
	}
});

$(".tab-wizard2").steps({
	headerTag: "h5",
	bodyTag: "section",
	transitionEffect: "fade",
	titleTemplate: '<span class="step">#index#</span> <span class="info">#title#</span>',
	labels: {
		finish: "Cadastrar",
		next: "Próximo",
		previous: "Anterior",
	},
	onStepChanged: function(event, currentIndex, priorIndex) {
		$('.steps .current').prevAll().addClass('disabled');
	},
	onFinished: function(event, currentIndex) {
		$('#cadastro_de_usuario').submit();
		$('#success-modal-btn').trigger('click');
	}
});


/* Get params
$('#cadastro_de_usuario').click(function () {
	swal.setDefaults({
		input: 'text',
		confirmButtonText: 'Next &rarr;',
		showCancelButton: true,
		animation: false,
		progressSteps: ['1', '2', '3']
	})

	var steps = [
		{
			title: 'Question 1',
			text: 'Chaining swal2 modals is easy'
		},
		'Question 2',
		'Question 3'
	]

	swal.queue(steps).then(function (result) {
		swal.resetDefaults()
		swal({
			title: 'All done!',
			html: 'Your answers: <pre>' +
			JSON.stringify(result) +
			'</pre>',
			confirmButtonText: 'Lovely!',
			showCancelButton: false
		})
	}, function () {
		swal.resetDefaults()
	})
});*/