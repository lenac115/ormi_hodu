// 모달 전체영역, 이메일의 입력창, 이미지 추가 렌더링 영역, 이미지 추가 렌더링 버튼, 추가한 이미지 영역을 없애는 버튼, 스크롤을 맨 위로 올리는 버튼을 DOM으로 가져옴

const modal = document.querySelector('.modalSec');
const email = document.querySelector('.subsInput');
const imageLine = document.querySelector('.imgLine');
const btnScroll =  document.querySelector('.btnUp');

// modal 버튼 눌린 경우
function modalOn() {

    if(!email.checkValidity(email.value)){
        email.value = '';
        return alert("이메일 형식으로 작성되어야 합니다.");
    } else if(email.value === '') {
        return alert("이메일을 작성해주세요.");
    }

    modal.style.display = 'flex';
    email.value = '';
}

// modal을 닫은 경우
function modalOff() {
    modal.style.display = 'none';
}

// 이미지 추가 렌더링 버튼을 누른 경우
function showOn() {

    // 이미지 랜덤 생성 난수
    const page = Math.floor(Math.random()*101);

    // 이미지 리스트 생성
    imageCreate(page);
}

// scroll을 top까지 올리는 버튼을 누른 경우
function scrollUp() {
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
}

// scroll 도중에는 scroll 버튼을 비활성화함, 사유는 scroll이 끝나지 않았을때 해당 버튼을 누른다면 behavior 애니메이션이 smooth로 설정되있어,
// scroll이 올라가는 도중에 기존에 scroll 동작의 scrollend 이벤트가 발생해 scroll이 올라가다 멈추기 때문
function scrollOff() {
    btnScroll.style.display='none';
}

// scroll 버튼 활성화
function scrollOn() {
    btnScroll.style.display='block';
}

// 모달 온 오프 버튼, 이미지 더보기 버튼 이벤트
const btnOpenModal = document.querySelector(".btnSubs");
const btnOffModal = document.querySelector(".btnModal");
const btnOnShow = document.querySelector('.btnContinue');

// modal을 열고 닫는 이벤트
btnOpenModal.addEventListener("click", () => modalOn());
btnOffModal.addEventListener("click", () => modalOff());

// 이미지를 추가적으로 불러오는 버튼을 클릭했을 때 발생하는 이벤트
btnOnShow.addEventListener("click", ()=> showOn());

// 스크롤을 홈페이지의 시작으로 되돌리는 버튼을 눌렀을 때의 이벤트
btnScroll.addEventListener("click", () => scrollUp());
// 스크롤시 홈페이지의 맨위로 올라가게 하는 버튼을 사라지게 하는 이벤트
window.addEventListener('scroll', () => scrollOff());
// 스크롤이 끝나고 홈페이지의 맨위로 올라가게 하는 버튼을 나타나게 하는 이벤트
window.addEventListener('scrollend', () => scrollOn());


// 카카오 map 관련 코드

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(33.442305251086964 , 126.57150377498742 ),
    level: 2
};

var map = new kakao.maps.Map(container, options);

// 지도를 클릭한 위치에 표출할 마커입니다
var marker = new kakao.maps.Marker({
    // 지도 중심좌표에 마커를 생성합니다
    position: map.getCenter()
});

// 지도에 마커를 표시합니다
marker.setMap(map);

var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

async function imageCreate(page) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`);
        // http 메시지가 status를 ok로 보내지 않은 경우
        if(!response.ok){
            throw new Error('네트워크에 이상이 있습니다.');
        }

        // 받아온 json response를 파싱
        const images = await response.json();

        // 이미지 배열 생성 함수
        makeListElement(images);
    } catch(error) {
        throw new Error(error);
    }
}

function makeListElement(images) {
    images.forEach((image) =>{
        console.log(image.download_url);
        imageLine.insertAdjacentHTML('beforeend', `<img src="${image.download_url}" class="imgElement" alt="랜덤 사진입니다"/>`);
    });
}