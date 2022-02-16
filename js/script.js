function speciality() {
	$('.admin-speciality').fadeIn(100);
	$('.admin-group').fadeOut(0);
	$('.admin-discipline').fadeOut(0);
	$('.admin-teacher').fadeOut(0);
}

function group() {
	$('.admin-group').fadeIn(100);
	$('.admin-speciality').fadeOut(0);
	$('.admin-discipline').fadeOut(0);
	$('.admin-teacher').fadeOut(0);
}

function discipline() {
	$('.admin-discipline').fadeIn(100);
	$('.admin-group').fadeOut(0);
	$('.admin-speciality').fadeOut(0);
	$('.admin-teacher').fadeOut(0);
}

function teachers() {
	$('.admin-teacher').fadeIn(100);
	$('.admin-group').fadeOut(0);
	$('.admin-discipline').fadeOut(0);
	$('.admin-speciality').fadeOut(0);
}

function table_speciality() {
	$('.okey').fadeIn(0);
	$('.edit').fadeOut(0);
}

function okey_speciality() {
	$('.edit').fadeIn(0);
	$('.okey').fadeOut(0);
}