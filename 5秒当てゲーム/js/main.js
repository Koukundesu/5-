(function(){
  'use strict';

  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;
  var isStarted = false;

  start.addEventListener('click',function(){
    if (isStarted === true){
      retuen;
    }
    isStarted = true;
    startTime = Date.now();
    start.addEventListener('mousedown',function(){
      this.className = 'pushed';
    });
    start.addEventListener('mouseup',function(){
      this.className = '';
    });
    stop.addEventListener('mousedown',function(){
      this.className = 'pushed';
      result.textContent = '0.000';
      result.className = 'standby';
    });
    stop.addEventListener('mouseup',function(){
      this.className = '';
    });


  });

  stop.addEventListener('click',function(){
    var elapsedTime;
    var diff;
    if (isStarted === false){
      retuen;
    }
    isStarted = false;
    elapsedTime = (Date.now() - startTime) / 1000;
    // elapsedTime = 4;
    // result.textContent = elapsedTime;
    result.textContent = elapsedTime.toFixed(3);
    this.className = 'pushed';
    start.className = '';
    result.className = '';
    diff = elapsedTime - 5.0;
    // if (diff > -1.0 && diff < 1.0){
    if (Math.abs(diff) < 1.0){
      result.className = 'perfect';
    }
  });

})();
