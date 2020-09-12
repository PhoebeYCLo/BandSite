// array contain comments that create by user
// let commentArray =[
//     {
//         'author': 'Micheal Lyons',
//         'date': '12/18/2018',
//         'content': 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
//     },
//     {
//         'author': 'Gary Wong',
//         'date': '12/12/2018',
//         'content': 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
//     },
//     {
//         'author': 'Theodore Duncan',
//         'date': '11/15/2018',
//         'content': 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
//     }
// ];

// // create the structure container for comment - include avatar, user name, create date & comment content
// let commentStructure = () => {
//     const commentList = document.querySelector('#commentList');
//     const commentDivider = document.createElement('div');
//     const commentContainer = document.createElement('div');
//     const commentAvatar = document.createElement('div');
//     const commentImg = document.createElement('img');
//     const commentBody = document.createElement('div');
//     const commentAuthorContainer = document.createElement('div');
//     const commentAuthor = document.createElement('div');
//     const commentDate = document.createElement('div');
//     const commentContent = document.createElement('div');

//     commentList.appendChild(commentDivider).classList.add('comment__usermessage-container--divider');

//     commentDivider.appendChild(commentContainer).classList.add('comment__usermessage-container');

//     commentContainer.appendChild(commentAvatar).classList.add('comment__user-avatar');
//     commentAvatar.appendChild(commentImg).setAttribute('src', 'https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg');

//     commentContainer.appendChild(commentBody).classList.add('comment__input-container');

//     commentBody.appendChild(commentAuthorContainer).classList.add('comment__author-container');
//     commentAuthorContainer.appendChild(commentAuthor).classList.add('comment__author');
//     commentAuthorContainer.appendChild(commentDate).classList.add('comment__date');

//     commentBody.appendChild(commentContent).classList.add('comment__message-content');
// };

// // fetch comment info from commentArray
// let fetchComment = () => {
//     for(let i = 0; i < commentArray.length; i++){
//         const commentAuthor = document.querySelectorAll('.comment__author');
//         const commentDate = document.querySelectorAll('.comment__date');
//         const commentContent = document.querySelectorAll('.comment__message-content');

//         commentAuthor[i].innerText = commentArray[i].author;
//         commentDate[i].innerText = commentArray[i].date;
//         commentContent[i].innerText = commentArray[i].content;
//     }
// };

// // load(fetch) & display existing comments
// let displayComments = () =>{
//     commentArray.forEach(() => {
//         commentStructure();
//     });
//     fetchComment();
// };

// displayComments();

// // submit, add new comment to commentArrat & display comment 
// const newCommentForm =  document.querySelector('#newCommentForm');

// newCommentForm.onsubmit = (e) => {

//     e.preventDefault();

//     const author = document.querySelector('#commentAuthor').value;
//     const message = document.querySelector('#commentContent').value;

//     // add new comment to the beginning of commentArray
//     commentArray.unshift({
//         'author': author,
//         'date': getDate(),
//         'content': message
//     });
    
//     commentStructure();
//     fetchComment();

//     // reset the values of all elements in the comment form
//     newCommentForm.reset();
// };

// // get current date
// let getDate = () => {
//     let today = new Date();
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0');
//     let yyyy = today.getFullYear();

//     return today = mm + '/' + dd + '/' + yyyy;
// };


// API
const apiURL = 'https://project-1-api.herokuapp.com';
const apiKEY = '585cf9ca-a905-4809-99e7-3f9706a5dd2e';

// get comments from api
const getComments = () => {
    axios.get(`${apiURL}/comments?api_key=${apiKEY}`)
    .then((response) => {
        // console.log(response);
        response.data.forEach((item) => {
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
    commentDate.innerText = arr.timestamp;

    commentBody.appendChild(commentContent).classList.add('comment__message-content');
    commentContent.innerText = arr.comment;
};