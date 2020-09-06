/*<div class="comment__usermessage-container--divider">
    <div class="comment__usermessage-container">
        <div class="comment__user-avatar">
            <img src="https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg" alt="User avatar">
        </div>
        <div class="comment__input-container"> //commentBody in js
            <div class="comment__author-container">
                <div class="comment__author">Micheal Lyons</div>
                <div class="comment__date">12/18/2018</div>
            </div>
            <div class="comment__message-content"> //commentContent in js
                    They BLEW the ROOF off at their
                    last show, once everyone started
                    figuring out they were going. This is
                    still simply the greatest opening of a
                    concert I have EVER witnessed.
            </div>
        </div>
    </div>
</div>*/

// array contain comments that create by user
let commentArray =[
    {
        'author': 'Micheal Lyons',
        'date': '12/18/2018',
        'content': 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
        'author': 'Gary Wong',
        'date': '12/12/2018',
        'content': 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        'author': 'Theodore Duncan',
        'date': '11/15/2018',
        'content': 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    }
];

// create the structure container for comment - include avatar, user name, create date & comment content
let commentStructure = () => {
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
    commentAuthorContainer.appendChild(commentDate).classList.add('comment__date');

    commentBody.appendChild(commentContent).classList.add('comment__message-content');
};

// fetch comment info from commentArray
let fetchComment = () => {
    for(let i = 0; i < commentArray.length; i++){
        const commentAuthor = document.querySelectorAll('.comment__author');
        const commentDate = document.querySelectorAll('.comment__date');
        const commentContent = document.querySelectorAll('.comment__message-content');

        commentAuthor[i].innerText = commentArray[i].author;
        commentDate[i].innerText = commentArray[i].date;
        commentContent[i].innerText = commentArray[i].content;
    }
};

// load & display existing comments
let displayComments = () =>{
    commentArray.forEach(() => {
        commentStructure();
    });
    fetchComment();
};

displayComments();
