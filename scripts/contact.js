function ShowAlertMessage() {
    $('#successalert').html('<div class="alert alert-success" role="alert"> Tu mensaje ha sido enviado correctamente </div>');
}

//document.getElementById("contactbutton").onclick = ShowAlertMessage;

$("#contactbutton").click(function () {
    $("#alertbutton").css("opacity" , "0");

    var txt = $(".email").val();
    var txt2 = $(".nombre").val();
    var txt3 = $(".pais").val();
    var txt4 = $(".tema").val();
    var txt5 = $(".mensaje").val();
			if ( txt == "" || txt2 || "" && txt3 || "" && txt4 || "" && txt5 || "") {
				// es distinto de vacio
				$("#alertbutton").css("opacity" , "1");
			}else{
                ShowAlertMessage();
            }

})