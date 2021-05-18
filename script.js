$(function()
{
    load();
    $("#update").click(addRecipe);
});

function load()
{
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        method:"GET",

        success: function (r)
        {
                console.log(r);
                var rec= $("#recepie");
                rec.empty();

                for(var i=0;i<r.length;i++){

                var p= r[i];
                rec.append(`<div class="m" data-id="${p.id}" ><p>${p.username}</p> <p>${p.email}</p> <p> <button id="d" > Update </button> </p> </div>`)
                
                }}
            });

        }
        var id = $("#updateemail").val();
        function handleUpdate() {
            var btn = $(this);
            var parentDiv = btn.closest("#update");
            let id = parentDiv.attr("data-id");
            $.get(
              "https://usman-recipes.herokuapp.com/api/recipes/" + id,
              function (response) {
                $("#updateemail").val(response.email);
               
              }
            );
          }




function load()
{
              $.ajax({
                  url: "https://jsonplaceholder.typicode.com/albums",
                  method:"GET",
          
                  success: function (r)
                  {
                          console.log(r);
                          var rec= $("#r");
                          rec.empty();
          
                          for(var i=0;i<r.length;i++){
          
                          var p= r[i];
             rec.append(`<div class="m" data-id="${p.id}" ><p>${p.id}</p> <p>${p.title}</p> <p> <button id="d" > Update </button> </p> </div>`)
                          
                          }}
                      });
          
}