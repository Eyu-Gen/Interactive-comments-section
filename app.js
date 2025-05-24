//Like Increment................
const likeBtn = document.getElementById("likeBTN");
const likeCounter = document.getElementById("likeCounter");
const unclickedLikeIcon = document.getElementById("unclickedLikeIcon");
const clickedLikeIcon = document.getElementById("clickedLikeIcon");
let likeCount = parseInt(likeCounter.innerHTML);
let isliked = false;
likeBtn.addEventListener("click", () => {
    isliked = !isliked;
    if (isliked) {
        likeCount++;
        likeCounter.innerText = `${likeCount}`;
        unclickedLikeIcon.classList.add("disableContainer");
        unclickedLikeIcon.classList.remove("enableContainer");
        clickedLikeIcon.classList.add("enableContainer");  
        clickedLikeIcon.classList.remove("disableContainer");
    } else {
        likeCount--;
        likeCounter.innerText = `${likeCount}`;
        unclickedLikeIcon.classList.remove("disableContainer");
        unclickedLikeIcon.classList.add("enableContainer");
        clickedLikeIcon.classList.remove("enableContainer");  
        clickedLikeIcon.classList.add("disableContainer");
    }
});

// Comment Section Show/Hide................
const showAllCommentBTN = document.getElementById("allCommentBtn");
let toogleCommentSection = false;

showAllCommentBTN.addEventListener("click", () => {
    toogleCommentSection = !toogleCommentSection;
    const commentSection = document.getElementById("commentContainerWrapper");

    if (toogleCommentSection) {
        commentSection.classList.remove("disableContainer");
        commentSection.classList.add("enableContainer");
        showAllCommentBTN.innerHTML = "Hide Comments";
    } else {
        commentSection.classList.remove("enableContainer");
        commentSection.classList.add("disableContainer");
        showAllCommentBTN.innerHTML = "All Comments";
    }
});

//Reply container show/hide......
const replyBtn = document.querySelectorAll(".viewReplyBTN");
const viewReplyTxt = document.querySelectorAll(".viewReplyTxt");
const replyContainer = document.querySelectorAll(".replyContainer");
Array.from(replyBtn).forEach((btn) => {
    let isClicked = false;
    btn.addEventListener("click", () => {
        const replyIndex = Array.from(replyBtn).indexOf(btn);
        isClicked = !isClicked;
        if (isClicked) {
            replyContainer[replyIndex].classList.remove("disableContainer");
            replyContainer[replyIndex].classList.add("enableContainer");
            viewReplyTxt[replyIndex].innerHTML = "Hide Reply";
        }
        else{
            replyContainer[replyIndex].classList.remove("enableContainer");
            replyContainer[replyIndex].classList.add("disableContainer");
            viewReplyTxt[replyIndex].innerHTML = "View Reply (1)";
        }
    });
});

// Delete Reply confirmation container popup while clicking on delete btn.....
const alertContainerWrapper = document.querySelectorAll(".alertContainerWrapper");
const deleteBTN = document.getElementById("deleteBTN");
const commentContainer = document.getElementById("comment2Container");
const deleteConfirmContainer = document.getElementById("deleteConfirmContainer");
deleteBTN.addEventListener("click", () => {
    Array.from(alertContainerWrapper).forEach((bg) => {
        bg.classList.add("enableContainer");
        bg.classList.remove("disableContainer");
    });
    deleteConfirmContainer.classList.add("enableContainer");
    deleteConfirmContainer.classList.remove("disableContainer");
});

//Cancel Deletion of reply comment popup while clicking on cancel btn.....
const cancelDeleteBTN = document.getElementById("cancelDeleteBTN");
cancelDeleteBTN.addEventListener("click", () => {
    Array.from(alertContainerWrapper).forEach((bg) => {
        bg.classList.remove("enableContainer");
        bg.classList.add("disableContainer");
    });
    deleteConfirmContainer.classList.add("disableContainer");
});

//Delete Reply comment popup while clicking on confirm btn.....
const deleteComfirmBTN = document.getElementById("deleteComfirmBTN");
deleteComfirmBTN.addEventListener("click", () => {
    Array.from(alertContainerWrapper).forEach((bg) => {
        bg.classList.remove("enableContainer");
        bg.classList.add("disableContainer");
    });
    deleteConfirmContainer.classList.add("disableContainer");
    commentContainer.remove();
});