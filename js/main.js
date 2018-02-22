$(document).ready(function () {

	if ($(window).width() >= 940) {

		$('#fullpage').fullpage(
			{
				anchors: ["About", "L'oreal", "Uneo", "Atol", "Cross", "Vivarte", "Blog"],
				navigation: true,
				navigationPosition: 'right',
				controlArrows: true,
				verticalCentered: true,
				showActiveTooltip: true,
				fixedElements: '#header',
			}
		);
		window.sr = ScrollReveal();
		sr.reveal('.case-study__header');
		sr.reveal('.case-study__overview');
		sr.reveal('.case-study__problem');
		sr.reveal('.case-study__color-insertion');
		sr.reveal('.case-study__personae');
		sr.reveal('.case-study__retro');
		sr.reveal('.case-study__team');

	}


	$("#organiser-sa-montee-en-competence").click(function () {
		window.open('https://www.linkedin.com/pulse/organiser-sa-mont%C3%A9e-en-comp%C3%A9tence-est-n%C3%A9cessaire-et-tr%C3%A8s-obertysheva/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_post_details%3BaW0FsexQRI%2BYfkKGvTnkjA%3D%3D', '_blank');
	});
	$("#plan-de-vainquer").click(function () {
		window.open('https://www.linkedin.com/pulse/plan-de-vainqueur-polina-obertysheva/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B85X0rc7wRKeBHvyWItMlAA%3D%3D', '_blank');
	});
	$("#consulting-learnd-me").click(function () {
		window.open('	https://medium.com/@po_link_a/%D0%BF%D1%8F%D1%82%D1%8C-%D0%B2%D0%B0%D0%B6%D0%BD%D1%8B%D1%85-%D0%B2%D0%B5%D1%89%D0%B5%D0%B9-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%BC-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%B0-%D1%83%D1%87%D0%B8%D1%82-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D0%B2-%D0%BA%D0%BE%D0%BD%D1%81%D0%B0%D0%BB%D1%82%D0%B8%D0%BD%D0%B3%D0%B5-6f5b05e9cde5', '_blank');
	});


});

