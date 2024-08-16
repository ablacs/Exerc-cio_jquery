$(document).ready(function(){
    $('#cadastrar').click(function(e){
        e.preventDefault();
        const tarefa = $('#nome').val();
        if (tarefa) {
            $('.tarefas ul').append('<li>' + tarefa + '<input class="checkbox" type="checkbox"></li>');
            $('#nome').val(''); 
        }
    });


    $('.tarefas').on('click', 'li', function(e) {
        if (!$(e.target).is('.checkbox')) {
            $(this).toggleClass('completed'); 
            $(this).find('.checkbox').prop('checked', $(this).hasClass('completed')); 
        }
    });


    $('.tarefas').on('change', '.checkbox', function() {
        $(this).closest('li').toggleClass('completed');
    });
});
