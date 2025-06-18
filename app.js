// Function for remove and add classList...
function removeAndAddClass(element, toggleVar) {
    if(toggleVar==1){
        element.classList.add("enableContainer");
        element.classList.remove("disableContainer");
    } else {
        element.classList.remove("enableContainer");
        element.classList.add("disableContainer");
    }
}

// Function to create new comment container...
function createCommentHTML(commentText) {
    return `
        <div class="container commentContainer">
            <!-- Comment Author Details -->
            <div class="header center">
                <div class="subContainer center commentAuthorContainer authorContainer">
                    <div class="imageSection center authorImageContainer commentAuthorImageContainer">
                        <img src="Images/1.png" alt="" class="commentAuthorImage">
                    </div>
                    <div class="authorDetailContainer commentAuthorDetailContainer">
                        <p class="authorName commentAuthorName commentTo">You</p>
                        <p class="subText">Just Now</p>
                    </div>
                </div>
                <div class="settingContainer center">
                    <div class="settingOption center" id="editBTN">
                        <div class="imageSection center settingIcon">
                            <img src="Images/icon-edit.svg" alt="Edit" id="editIcon">
                        </div>
                        <span class="iconName plainText" id="editText">Edit</span>
                    </div>
                    <div class="settingOption center deleteBTN" id="">
                        <div class="imageSection center settingIcon">
                            <img src="Images/icon-delete.svg" alt="Delete" id="deleteIcon">
                        </div>
                        <span class="iconName plainText" id="deleteText">Delete</span>
                    </div>
                </div>
            </div>

            <!-- Comment Content -->
            <div class="subContainer commentContent">
                <span class="highlight">Yugin Paudel</span> ${commentText}
            </div>
            <hr>

            <!-- Comment Engagement -->
            <div class="subContainer center engagementContainer commentEngagementContainer">
                <div class="interactContainer center commentReplyBtn">
                    <p class="subText replyBtn">Reply</p>
                </div>
                <div class="interactContainer center viewReplyBTN">
                    <p class="subText viewReplyTxt">View Reply (<span class="replyCounter">0</span>)</p>
                </div>
            </div>
        </div>
    `;
}

// Function for Reply Container Show and Hide... [ERROE HERE]
function replyContainerView() {
    const replyBtn = document.querySelectorAll(".viewReplyBTN");
    const viewReplyTxt = document.querySelectorAll(".viewReplyTxt");
    const replyContainer = document.querySelectorAll(".replyContainer");
    const replyCounters = document.getElementsByClassName("replyCounter");
    Array.from(replyCounters).forEach((replyCounter) => {
        let replyCount = parseInt(replyCounter.innerHTML);
        Array.from(replyBtn).forEach((btn) => {
            let isClicked = false;
            btn.addEventListener("click", () => {
                console.log(replyCount);
                if(replyCount==0){
                    alert("No Reply To Show!!");
                }
                else{
                    const replyIndex = Array.from(replyBtn).indexOf(btn);
                    isClicked = !isClicked;
                    if (isClicked) {
                        removeAndAddClass(replyContainer[replyIndex], 1);
                        viewReplyTxt[replyIndex].innerHTML = "Hide Reply";
                    }
                    else {
                        removeAndAddClass(replyContainer[replyIndex], 0);
                        viewReplyTxt[replyIndex].innerHTML = `View Reply (${replyCount})`;
                    }
                }
            });
        });
    });
}

//Like Increment................
const likeBtn = document.getElementById("likeBTN");
const unclickedLikeIcon = document.getElementById("unclickedLikeIcon");
const clickedLikeIcon = document.getElementById("clickedLikeIcon");
const likeCounter = document.getElementById("likeCounter");
let likeCount = parseInt(likeCounter.innerHTML);
let isliked = false;
likeBtn.addEventListener("click", () => {
    isliked = !isliked;
    if (isliked) {
        likeCount++;
        likeCounter.innerText = `${likeCount}`;
        removeAndAddClass(unclickedLikeIcon, 0);
        removeAndAddClass(clickedLikeIcon, 1);
    } else {
        likeCount--;
        likeCounter.innerText = `${likeCount}`;
        removeAndAddClass(unclickedLikeIcon, 1);
        removeAndAddClass(clickedLikeIcon, 0);
    }
});

const commentCounter = document.getElementById("commentCounter");
let commentCount = parseInt(commentCounter.innerHTML);

// Comment Section Show/Hide................
const showAllCommentBTN = document.getElementById("allCommentBtn");
let toogleCommentSection = false;

showAllCommentBTN.addEventListener("click", () => {
    toogleCommentSection = !toogleCommentSection;
    const commentSection = document.getElementById("commentContainerWrapper");

    if (toogleCommentSection) {
        removeAndAddClass(commentSection, 1);
        showAllCommentBTN.innerHTML = "Hide Comments";
    } else {
        removeAndAddClass(commentSection, 0);
        showAllCommentBTN.innerHTML = "All Comments";
    }
});

//Reply container show/hide......[FUNCTION TESTING]
replyContainerView();

// Delete Reply confirmation container popup while clicking on delete btn.....
const alertContainerWrapper = document.querySelectorAll(".alertContainerWrapper");
const deleteBTNs = document.getElementsByClassName("deleteBTN");
const commentContainer = document.getElementById("comment2Container");
const deleteConfirmContainer = document.getElementById("deleteConfirmContainer");
Array.from(deleteBTNs).forEach((deleteBTN) => {
        deleteBTN.addEventListener("click", () => {
        Array.from(alertContainerWrapper).forEach((bg) => {
            removeAndAddClass(bg, 1);
        });
        removeAndAddClass(deleteConfirmContainer, 1);
        removeAndAddClass(commentTypingContainer, 0);
    }
)});

//Cancel Deletion of reply comment popup while clicking on cancel btn.....
const cancelDeleteBTN = document.getElementById("cancelDeleteBTN");
cancelDeleteBTN.addEventListener("click", () => {
    Array.from(alertContainerWrapper).forEach((bg) => {
        removeAndAddClass(bg, 0);
    });
    deleteConfirmContainer.classList.add("disableContainer");
});

//Delete Reply comment popup while clicking on confirm btn.....
const deleteComfirmBTN = document.getElementById("deleteComfirmBTN");
deleteComfirmBTN.addEventListener("click", () => {
    Array.from(alertContainerWrapper).forEach((bg) => {
        removeAndAddClass(bg, 0);
    });
    deleteConfirmContainer.classList.add("disableContainer");
    commentContainer.remove();
});

//Comment Typing Container hide and show...
const commentBTN = document.getElementById("commentBTN");
const commentRemark = document.getElementById("commentRemark");
commentBTN.addEventListener("click", () => {
    Array.from(alertContainerWrapper).forEach((bg) => {
        removeAndAddClass(bg, 1);
    });
    removeAndAddClass(deleteConfirmContainer, 0);
    commentTypingContainer.classList.add("enableContainer");
    commentRemark.innerText = "Commenting to Yugin Paudel";
});

//Comment cancel while clicking cancelPost button....
const cancelPostBTN = document.getElementById("cancelPostBTN");
const commentTypingContainer = document.getElementById("commentTypingContainer");
cancelPostBTN.addEventListener("click", () => {
    Array.from(alertContainerWrapper).forEach((bg) => {
        removeAndAddClass(bg, 0);
    });
    removeAndAddClass(commentTypingContainer, 0);
    (document.getElementById("errorContainer")).classList.add("visibilityHidden");
    (document.getElementById("errorContainer")).classList.remove("visibilityVisible");
});

//Comment Typing container hide and show....
const commentReplyBtn = document.querySelectorAll(".commentReplyBtn");
const commentTo = document.querySelectorAll(".commentTo");

Array.from(commentReplyBtn).forEach((replyBtn, index) => {
    replyBtn.addEventListener("click", () => {
        Array.from(alertContainerWrapper).forEach((bg) => {
            removeAndAddClass(bg, 1);
        });
        removeAndAddClass(deleteConfirmContainer, 0);
        commentTypingContainer.classList.add("enableContainer");
        commentRemark.innerText = `Replying to ${commentTo[index].innerText}`;
    });
});

//Comment content lai pakadna...
const postBTN = document.getElementById("postBTN");
const newCommentSection = document.getElementById("newCommentSection");
postBTN.addEventListener("click", () => {
    const commentTypingContent = (document.getElementById("commentTypingContent")).value;
    if(commentTypingContent==""){
        (document.getElementById("errorContainer")).classList.remove("visibilityHidden");
        (document.getElementById("errorContainer")).classList.add("visibilityVisible");
    }
    else {
        (document.getElementById("errorContainer")).classList.add("visibilityHidden");
        (document.getElementById("errorContainer")).classList.remove("visibilityVisible");
        newCommentSection.innerHTML += createCommentHTML(commentTypingContent);
        Array.from(alertContainerWrapper).forEach((bg) => {
            removeAndAddClass(bg, 0);
        });
        removeAndAddClass(commentTypingContainer, 0);
        commentCount++;
        commentCounter.innerText = `${commentCount}`;
        replyContainerView();
    }
});
