$('#boton').click(function() {
    $('img').hide();
    $('#lista').empty();
    $.get( "http://localhost:5000/amigos", function( data ) {
        for(let i = 0; i < data.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = data[i].name;
            $('#lista').append(li);
        }      
    });
});

$('#search').click(function() {
    $('#input').empty();
    $('#amigo').empty();
    var id = $('#input').val();
    $.get("http://localhost:5000/amigos/" + id, function( data ) {
        $('#amigo').html(data.name);
    });
});

$('#delete').click(function() {
    var id = $('#inputDelete').val();
    $.ajax({
        url: "http://localhost:5000/amigos/" + id,
        type: 'DELETE',
        
    });
    $('#sucess').html('Amigo borrado exitosamente');
});