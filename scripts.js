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
                $("img.loading-img").show();
            },
            // When AJAX Request is completed
            complete: function ( response ) {
                console.log("After Ajax action is completed");
                $("img.loading-img").hide();
            },
            // After AJAX request is completed and is successfull
            success: function ( response ) {
                console.log("After AJAX Success");
                // var data = JSON.parse(response);
                if (response.status == "202") {
                    $("table#data-table tbody").html(response.html);
                    $("table#data-table").show();
                }
            }
        });
    });
}(jQuery));