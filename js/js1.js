
const modal = document.querySelector('.mainSubscribeModalBack');
const emailModal = document.querySelector('.mainSubscribeInput');
const line = document.querySelector('.mainImgLine2');
const btnArea = document.querySelector('.mainPContinue');
const btnClose = document.querySelector('.closeButton');

function isModalOn() {
    return modal.style.display === 'flex';
}
function isShowOn() {
    return line.style.display === 'grid';
}
function modalOn() {
    modal.style.display = 'flex';
    emailModal.value = '';
}
function modalOff() {
    modal.style.display = 'none';
}
function showOn() {
    line.style.display = 'grid';
    btnArea.style.display = 'none';
    btnClose.style.display = 'block';

}
function showOff() {
    line.style.display = 'none';
    btnArea.style.display = 'flex';
    btnClose.style.display = 'none';
}

const btnOpenModal = document.querySelector(".mainSubscribeButton");
const btnOffModal = document.querySelector(".mainSubscribeModalButton");
const btnOnShow = document.querySelector('.continueButton');
const btnOffShow = document.querySelector('.closeButton');

btnOpenModal.addEventListener("click", () => modalOn());
btnOffModal.addEventListener("click", () => modalOff());
btnOnShow.addEventListener("click", ()=> showOn());
btnOffShow.addEventListener("click", ()=> showOff());


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

const page = Math.floor(Math.random()*101);
imageCreate(page);

async function imageCreate(page) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`);
        if(!response.ok){
            throw new Error('네트워크에 이상이 있습니다.');
        }

        const images = await response.json();
        makeListElement(images);
    } catch(error) {
        throw new Error(error);
    }
}

function makeListElement(images) {
    images.forEach((image) =>{
        console.log(image.download_url);
        line.insertAdjacentHTML('beforeend', `<img src="${image.download_url}" class="lineImg" alt="${image.index + 1}번째 랜덤 사진입니다"/>`);
    });
}