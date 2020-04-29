$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-input").val().trim(),
            devoured: "0"
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger added.");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-devour").on("click", function (event) {

        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        var devourState = {
            devoured: "1"
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function () {
                console.log("changed to", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});