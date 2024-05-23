
const modal = document.querySelector('.mainSubscribeModalBack');
const emailModal = document.querySelector('.mainSubscribeInput');
const line = document.querySelector('.mainImgLine2');
const btnArea = document.querySelector('.mainPContinue');
const btnClose = document.querySelector('.closeButton');
const sub = document.querySelector('.mainSubscribeArea');
const p4 = document.querySelector('.mainP4');
const p5 = document.querySelector('.mainP5');
const maps = document.querySelector('.mainMaps');
const back = document.querySelector('.mainBackgroundCatImg');
const foot = document.querySelector('footer');
const mainline = document.querySelector('.mainLine');
const continued = document.querySelector('.mainPContinue');

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
    sub.style.top = '3638px';
    p4.style.top = '2905px';
    p5.style.top = '2970px';
    maps.style.top = '3038px';
    back.style.top = '3739px';
    foot.style.top = '4079px';
    continued.style.top = '2648px';
    mainline.style.top = '2836px';
    line.style.display = 'grid';
    btnArea.style.display = 'none';
    btnClose.style.display = 'block';
}
function showOff() {
    sub.style.top = '2738px';
    p4.style.top = '2005px';
    p5.style.top = '2070px';
    maps.style.top = '2138px';
    back.style.top = '2839px';
    foot.style.top = '3179px';
    continued.style.top = '1748px';
    mainline.style.top = '1936px';
    line.style.display = 'none';
    btnArea.style.display = 'block';
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