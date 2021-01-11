//variabelen

var audiImg, velgImg, raamImg;

audiImg = document.querySelector('#blauweAudi');
velgImg = document.querySelector('#grijsVelg');
raamImg = document.querySelector('#zwartRaam');

var audiBlauwOptie, audiGroenOptie, audiRoodOptie;

audiBlauwOptie = document.querySelector('#audiBlauwOptie');
audiGroenOptie = document.querySelector('#audiGroenOptie');
audiRoodOptie = document.querySelector('#audiRoodOptie');

var zwartWielOptie, grijsWielOptie, bronsWielOptie;

zwartWielOptie = document.querySelector('#zwarteVelgen');
grijsWielOptie = document.querySelector('#grijzeVelgen');
bronsWielOptie = document.querySelector('#bronzeVelgen');

var zwartRaamOptie, blauwRaamOptie, rozeRaamOptie;

zwartRaamOptie = document.querySelector('#zwarteRamen');
blauwRaamOptie = document.querySelector('#blauweRamen');
rozeRaamOptie = document.querySelector('#rozeRamen');

var motorStarten;

motorStarten = document.querySelector('#audiPreview', '#starten');

//functions

function maakAudiBlauw() {
  audiImg.src = 'images/blauw.svg';
  audiImg.hidden = false;
}

function maakAudiGroen() {
  audiImg.src = 'images/groen.svg';
  audiImg.hidden = false;
}

function maakAudiRood() {
  audiImg.src = 'images/rood.svg';
  audiImg.hidden = false;
}

function velgGrijs() {
  velgImg.src = 'images/grijzevelgen.svg';
  velgImg.hidden = false;
}

function velgZwart() {
  velgImg.src = 'images/zwartevelgen.svg';
  velgImg.hidden = false;
}

function velgBrons() {
  velgImg.src = 'images/bronzevelgen.svg';
  velgImg.hidden = false;
}

function raamZwart() {
  raamImg.src = 'images/zwarteramen.svg';
  raamImg.hidden = false;
}

function raamBlauw() {
  raamImg.src = 'images/blauweramen.svg';
  raamImg.hidden = false;
}

function raamRoze() {
  raamImg.src = 'images/rozeramen.svg';
  raamImg.hidden = false;
}

function startMotor() {
  console.log('test');
  motorStarten.src = 'images/startmotor.mp3';
  motorStarten.play();
}


//addEventListeners

audiBlauwOptie.addEventListener('click', maakAudiBlauw);
audiGroenOptie.addEventListener('click', maakAudiGroen);
audiRoodOptie.addEventListener('click', maakAudiRood);


grijsWielOptie.addEventListener('click', velgGrijs);
zwartWielOptie.addEventListener('click', velgZwart);
bronsWielOptie.addEventListener('click', velgBrons);

zwartRaamOptie.addEventListener('click', raamZwart);
blauwRaamOptie.addEventListener('click', raamBlauw);
rozeRaamOptie.addEventListener('click', raamRoze);

motorStarten.addEventListener('mouseover', startMotor);


//function randomSpec() {
//  var speclijst = new Array('')
//}
