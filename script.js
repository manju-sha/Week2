document.getElementById('submit-comment').addEventListener('click', function() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const commentSection = document.getElementById('comment-section');
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentSection.appendChild(newComment);
        commentInput.value = ''; // Clear the input
    } else {
        alert('Please enter a comment!');
    }
});
