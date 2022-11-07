let i = 0
let c = 0

//To Post a Comment
$('.postButton').on('click', function() {
    //console.log('Post Button Click');

    $('#commentContainer').prepend('<div class="comment" id="uniqueComment_'+i+'"><img class= "blankProfile" src="images/blankProfile.jpg" alt="Blank"><input id='+i+' class="deleteButton commentButtons"  type="button" value="Delete"><input id='+i+' class="editButton commentButtons" type="button" value="Edit"><p>'+$(".displayName").val()+'</p><h2 id="commentText_'+i+'">'+$(".commentField").val()+'</h2></div>');
    $('.displayName').val('');
    $('.commentField').val('');
    console.log($('#commentText_' + i).text())
    console.log(i)
    console.log(i)



})

//To Edit a Comment Pt:1 /Adding the Input Fields
$('#commentContainer').on('click', '.editButton', function() {
    //console.log('Edit Button Click');
    let num = $(this).attr('id');
    $('#uniqueComment_' + num).append('<div id="editor_'+c+'"><div id="editStyling"><input class="editCommentField" type="text" placeholder="Edit Comment"><input type="submit"class="editCommentButton" value="Submit"></div></div>')
    //console.log(c);
    
})

//To Edit a Comment Pt:2 /Passing Values & Deleting Fields
$('#commentContainer').on('click', '.editCommentButton', function() {
    console.log('Edit Submit Button Clicked');
    console.log(i)
    let num = $(this).attr('id');
    $('#commentText_'+i).remove()
    $('#commentContainer:eq('+num+')').append('<h2 id="commentText_'+num+'">'+$('.editCommentField').val()+'</h2>')
    $('#editor_'+ c).remove()
})


//To Delete a Comment
$('#commentContainer').on('click', '.deleteButton', function() {
    let num = $(this).attr('id');
    console.log('Delete Button Click');
    $('#uniqueComment_' + num).remove();
})
