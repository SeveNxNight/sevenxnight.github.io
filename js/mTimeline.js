function mTimeline(side){

    var timeline = document.getElementsByClassName('wrapperSpot')[0];

    obj = Object.values(timeline.attributes);
    n = ((obj[1].value).replace('right: ', '')).replace('px;', '');

    n = Number.parseInt(n);
    
    if(side == 'left' && n !== 1200){

     timeline.setAttribute('style', 'right: ' + (n + 400) + 'px;');
     
    }else if(side == 'right' && n !== -1200){

     timeline.setAttribute('style', 'right: ' + (n - 400) + 'px;');
    }

}
