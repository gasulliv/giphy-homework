     // Initial array of games
      var games = ["bioshock", "fallout", "skyrim", "bloodborne"];

        //displayGif function re-renders the HTML to display the gifs

        function displayGif(){

            $(".newButton").on("click", function(){
            //creating the game variable
            // In this case, the "this" keyword refers to the button that was clicked
            var game = $(this).attr("game-name");

             // creating url to search Giphy for video games

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=dc6zaTOxFJmzC&limit=10";
            console.log(queryURL);

          // e.preventDefault(e);
          // console.log("hello");

            // Performing our AJAX GET request
            $.ajax({
            url: queryURL,
            method: "GET"
            }) .done(function(response) {

                //creating a variable for the repsonse data

                var results = response.data;


                //looping through reponse data

                for ( var i = 0 ; i < results.length; i++ ){

                   //retrieving the urls for the gifs

                    var gifURL = results[i].bitly_gif_url;
                    console.log(gifURL);

                    //creating a div to hold the gifs

                    var gameDiv = $("<div class = 'gameglitch'>");

                    //creating an element to hold the gifs

                    var image = $("<img>").attr("src", gifURL);

                    //appending the image to the game div

                    gameDiv.append(image);

                    //prepend that gif the above the other gifs

                    $("#game").prepend(gameDiv);

                }

              });
            });
          }

      //create a function with a for loop that creates buttons based on input when the game button is clicked

        function createButton(){

            //deletes the other games prior to adding new ones

            $("#glitchbutton").empty();

           //necessary or we will need to repeat buttons

            //looping through

            for (var i = 0; i < games.length; i++){

            //creating the button html

            var g = $("<button>");

          //add a class of newButton to the button

            g.addClass("newButton");

            //add a game-attribute

            g.attr("game-name", games[i]);

            //Providing the initial button text

            g.text(games[i]);

            //Adding the button to the buttons div

            $("#glitchbutton").append(g);
        }
      }

      //the on click function that handles events where a game button is clicked

       $("#addGame").on("click", function(event) {

          event.preventDefault();

          //grabbing input from textbox

          var game = $("#game-input").val().trim();

         //adding the game from the textbox to our array

          games.push(game);

        //Calling the createButton function

          createButton();

        //calling the displayGif function

          displayGif();

      });

      //add a click event listner to all elements with the class of newButton

      $(document).on("click", ".newButton", displayGif);{

        console.log('test');
      }
