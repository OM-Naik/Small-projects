const reels = [
    {
        username: "Om Naik",
        profilePic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60",
        caption: "Enjoying nature vibes 🌿 #peace #travel",
        video: "./Assets/trial.mp4",
        likeCount: 10,
        isLiked: false,
        commentCount: 340,
        isFollowed: false
    },
    {
        username: "Just Girl",
        profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
        caption: "Beauty Hot air balloon festival 🎈 #adventure",
        video: "./Assets/trial.mp4",
        likeCount: 980,
        isLiked: true,
        commentCount: 290,
        isFollowed: false
    },
    {
        username: "foodielife",
        profilePic: "https://randomuser.me/api/portraits/women/32.jpg",
        caption: "Street food hits different 😋✨",
        video: "./Assets/trial.mp4",
        likeCount: 560,
        isLiked: false,
        commentCount: 120,
        isFollowed: true
    },
    {
        username: "gym_freak",
        profilePic: "https://randomuser.me/api/portraits/men/28.jpg",
        caption: "Push day ✔️ Stay strong 💪",
        video: "./Assets/trial.mp4",
        likeCount: 18,
        isLiked: true,
        commentCount: 430,
        isFollowed: true
    },
    {
        username: "travel_diaries",
        profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
        caption: "Sunset at the beach 🌅 #goals",
        video: "./Assets/trial.mp4",
        likeCount: 19,
        isLiked: false,
        commentCount: 890,
        isFollowed: false
    },
    {
        username: "coder_boy",
        profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
        caption: "100 days of JavaScript 🚀 #day45",
        video: "./Assets/trial.mp4",
        likeCount: 640,
        isLiked: false,
        commentCount: 56,
        isFollowed: true
    },
    {
        username: "dance_lover",
        profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
        caption: "Random choreo ✨🔥 #dance",
        video: "./Assets/trial.mp4",
        likeCount: 500,
        isLiked: true,
        commentCount: 1200,
        isFollowed: true
    },
    {
        username: "pet_world",
        profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
        caption: "My dog is a whole mood 🐶😂",
        video: "./Assets/trial.mp4",
        likeCount: 880,
        isLiked: false,
        commentCount: 150,
        isFollowed: false
    },
    {
        username: "fashion_icon",
        profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
        caption: "OOTD ✨ #fashionista",
        video: "./Assets/trial.mp4",
        likeCount: 19,
        isLiked: false,
        commentCount: 290,
        isFollowed: true
    },
    {
        username: "music_vibes",
        profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
        caption: "New beat dropping soon 🎧🔥",
        video: "./Assets/trial.mp4",
        likeCount: 156,
        isLiked: true,
        commentCount: 430,
        isFollowed: false
    }
];

var allreels = document.querySelector('.all-reels');


function loadReels() {
    var sum = '';
    reels.forEach(function (elem, idx) {
        sum = sum + `<div class="main-reel">
                    <video src="${elem.video}" muted loop autoplay></video>
                    <div class="bottom">
                        <div class="user-info">
                            <img src="${elem.profilePic}"
                                alt="" srcset="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed ? "Following" : "Follow"}</button>
                        </div>
                        <h2>${elem.caption}</h2>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like" >
                           <h4 class="like-icon">${elem.isLiked ? `<i class="ri-thumb-up-fill"></i>` : `<i class="ri-thumb-up-line"></i>`}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="dislike">
                            <h4 class="dislike-icon"><i class="ri-thumb-down-line"></i></h4>
                            <h6>Dislike</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-discuss-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>Share</h6>
                        </div>
                        <div class="remix">
                            <h4 class="remix-icon"><i class="ri-remix-line"></i></h4>
                            <h6>Remix</h6>
                            </div>
                            </div>
                            </div>`;
    });

    allreels.innerHTML = sum;
}

loadReels();
allreels.addEventListener('click', function (dets) {

    const likeBox = dets.target.closest(".like");
    if (!likeBox) return;

    const index = likeBox.id;
    const likeIcon = likeBox.querySelector(".like-icon");
    const likeNumber = likeBox.querySelector("h6");

    // toggle logic
    if (reels[index].isLiked) {
        reels[index].isLiked = false;
        reels[index].likeCount--;

        likeIcon.innerHTML = `<i class="ri-thumb-up-line"></i>`;
    } else {
        reels[index].isLiked = true;
        reels[index].likeCount++;

        likeIcon.innerHTML = `<i class="ri-thumb-up-fill"></i>`;
    }

    likeNumber.innerText = reels[index].likeCount;
});

