$(function(){

    //audio 태그는 반드시 전통적인 DOM 선택방식으로 처리
    const $myAudio = document.getElementById("myAudio");

    const $btnPlay = $(".play");
    const $btnPause = $(".pause");
    const $btnResume = $(".resume");

    let isPlay = false; //재생중이면 true


    //현재 재생중인 mp3 파일의 상태값을 출력
    const stateFn = function(){
        if(isPlay){

            //Math.round($myAudio.currentSrc) + "/" + Math.round($myAudio.duration)
            

            $(".timeline").text(Math.round($myAudio.currentTime) + "/" + Math.round($myAudio.duration));

            const stateVal = Math.round(($myAudio.currentTime/$myAudio.duration)*100);

            $(".state").attr({
                value : stateVal
            }).text(stateVal+"%");
        }
    };


    //처음부터 재생
    $btnPlay.on('click', function(){
        console.log("dds");
        $myAudio.load();
        $myAudio.play();

        isPlay = true;

        setInterval(stateFn,1000);
    });


    //일시정지
    $btnPause.on('click', function(){
        isPlay = false;
        $myAudio.pause();
    });


    //정지된 부분부터 재생
    $btnResume.on('click', function(){
        isPlay = true;
        $myAudio.play();
    });


    $(window).on("load", function(){

    });
});