$(document).ready(function() {
	$('#fullpage').fullpage(
		{
			anchors:["About", "L'oreal", "Uneo", "Atol", "Cross","Vivarte","Blog"],
			navigation: true,
			navigationPosition: 'right',
			controlArrows: true,
			verticalCentered: true,
			showActiveTooltip: true,
			fixedElements: '#header',
			//paddingTop: '3em',
		}
	);

	$( "#project__imagebank" ).click(function() {
		window.open('./loreal.html','_blank')
	});
	$( "#project__uneomutualize" ).click(function() {
		window.open('./uneo.html','_blank');
	});
	$( "#project__atol" ).click(function() {
		window.open('./atol.html','_blank');
	});
	$( "#project__cross" ).click(function() {
		window.open('./cross.html','_blank');
	});
	$( "#project__vivarte" ).click(function() {
		window.open('./vivarte.html','_blank');
	});
	$( "#organiser-sa-montee-en-competence" ).click(function() {
		window.open('https://www.linkedin.com/pulse/organiser-sa-mont%C3%A9e-en-comp%C3%A9tence-est-n%C3%A9cessaire-et-tr%C3%A8s-obertysheva/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BaW0FsexQRI%2BYfkKGvTnkjA%3D%3D','_blank');
	});
	$( "#plan-de-vainquer" ).click(function() {
		window.open('https://www.linkedin.com/pulse/plan-de-vainqueur-polina-obertysheva/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B85X0rc7wRKeBHvyWItMlAA%3D%3D','_blank');
	});
	
});
