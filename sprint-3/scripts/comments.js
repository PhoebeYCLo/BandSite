// API
const apiURL = 'https://project-1-api.herokuapp.com';
const apiKEY = '585cf9ca-a905-4809-99e7-3f9706a5dd2e';

const getComments = () => {
    axios.get(`${apiURL}/comments?api_key=${apiKEY}`)
    .then((response) => {
        const sorted = dateSortArray(response.data);
        sorted.forEach((item) => {
            createComment(item);
        })
    })
    .catch((err) => console.error(err));
};

getComments();

const createComment = (arr) => {
    const commentList = document.querySelector('#commentList');
    const commentDivider = document.createElement('div');
    const commentContainer = document.createElement('div');
    const commentAvatar = document.createElement('div');
    const commentImg = document.createElement('img');
    const commentBody = document.createElement('div');
    const commentAuthorContainer = document.createElement('div');
    const commentAuthor = document.createElement('div');
    const commentDate = document.createElement('div');
    const commentContent = document.createElement('div');

    commentList.appendChild(commentDivider).classList.add('comment__usermessage-container--divider');

    commentDivider.appendChild(commentContainer).classList.add('comment__usermessage-container');

    commentContainer.appendChild(commentAvatar).classList.add('comment__user-avatar');
    commentAvatar.appendChild(commentImg).setAttribute('src', 'https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg');

    commentContainer.appendChild(commentBody).classList.add('comment__input-container');

    commentBody.appendChild(commentAuthorContainer).classList.add('comment__author-container');
    commentAuthorContainer.appendChild(commentAuthor).classList.add('comment__author');
    commentAuthor.innerText = arr.name;
    
    commentAuthorContainer.appendChild(commentDate).classList.add('comment__date');
    commentDate.innerText = postTime(arr.timestamp);

    commentBody.appendChild(commentContent).classList.add('comment__message-content');
    commentContent.innerText = arr.comment;
};

let postTime = (time) => {
    const date = new Date(time);

    return date.getUTCMonth() + 1 +'/' +
        date.getUTCDate() + '/' + 
        date.getUTCFullYear();
};

const newCommentForm =  document.querySelector('#newCommentForm');

newCommentForm.onsubmit = (e) => {

    e.preventDefault();
    const author = document.querySelector('#commentAuthor').value;
    const message = document.querySelector('#commentContent').value;

    if(!author || !message){
        alert('Please fill your name and comment');
    } else{
        return axios.post(`${apiURL}/comments?api_key=${apiKEY}`, {
            name: author,
            comment: message
        })
        .then(() => {
            clearComments();
            getComments();
            
        });
    }
    newCommentForm.reset();
};

// Sort array by date
function dateSortArray(arr) {
    const sortedArray = arr.sort((a, b) => b.timestamp - a.timestamp);
    return sortedArray;
};

// Clear existing comment in order to add new comment to the beginning of comment list
function clearComments(){
    const removeCommentList = document.querySelector('.comment-list');
    removeCommentList.innerHTML = '';
}