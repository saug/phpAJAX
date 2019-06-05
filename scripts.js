(function ($) {
    $("#get_info").on("click", function ( e ) {
        e.preventDefault();
        console.log("HERE");
        $.ajax({
            type: "POST",
            url: "ajax_handler.php",
            data: {
                action: "fetch_data",
                dataToSend: "Test Data"
            },
            dataType: 'json',
            // Before AJAX Begins
            beforeSend: function ( response ) {
                console.log("Before ajax event.");
                $("img.loading-img").show(); // show loader image on button click while AJAX is loading
            },
            // When AJAX Request is completed
            complete: function ( response ) {
                console.log("After Ajax action is completed");
                $("img.loading-img").hide();// hide loader image after AJAX is completed
            },
            // After AJAX request is completed and is successfull
            success: function ( response ) {
                console.log("After AJAX Success");
                // var data = JSON.parse(response);
                if (response.status == "202") {
                    $("table#data-table tbody").html(response.html); // add user details to table
                    $("table#data-table").show(); // displays table
                }
            }
        });
    });
}(jQuery));