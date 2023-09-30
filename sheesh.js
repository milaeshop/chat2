let totalMessages = 0, nickColor = "user", removeSelector, nameColor, channelName;
let hideCommands = "no";
let ignoredUsers = [];
let msgAlign, currency, msgGlow,  nameGlow, outline;
let fieldData, largeEmotes, badgesCustom, badgesDisplay, userType, pronounsOn;
let pronounsCache = {};
let pronounsbadge, pronounsObj = {
pronouns: {}};

  const PRONOUNS_API_BASE = 'https://pronouns.alejo.io/api'
  const PRONOUNS_API = {
  user: username => `${PRONOUNS_API_BASE}/users/${username}`,
  pronouns: `${PRONOUNS_API_BASE}/pronouns`,
}

  async function getPronouns() {
  const res = await get(PRONOUNS_API.pronouns)
  if (res) {
    res.forEach(pronoun => {
      pronounsObj.pronouns[pronoun.name] = pronoun.display
    })
  }
}

  function addMessage(username, badges, message, isAction, uid, msgId, userType) {
    totalMessages += 1;
    let actionClass = "";
    if (isAction) {
        actionClass = "action";
    }

    let element;
      switch (userType) {
    case "mod": 
  element = $.parseHTML(`<div data-sender="${uid}" data-msgid="${msgId}" style="--accentcolor: #b9e5fe;" class="message-row animation1 ${msgId}" id="msg-${totalMessages}"> 
<div class="namebox"> 
<span class="name">
${username}
</span>
<span class="pronouns"></span>

<div class="badgescont">
<div class="badgesbox">${badges}</div></div>
</div>
<div class="msgcont">    
<div class="messagebox">  
<img class="collar" src={img1}>
<div class="lefticoncont">
<svg class="modtop" width="55.775311mm" height="106.05341mm" viewBox="0 0 55.775311 106.05341" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-19.094575,-116.00903)">
  <circle class="modtop1" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-1" cx="70.944481" cy="119.93443" r="3.9254031"/>
  <circle class="modtop2" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-2" cx="54.698132" cy="131.72716" r="3.9254031"/>
  <path class="modtop3" id="rect3517-0" style="fill:#67b9e4;fill-opacity:1;stroke-width:0.574836;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 40.141219,141.78031 c -1.130337,0 -2.040185,0.94711 -2.040185,2.12338 v 3.75378 h -3.887102 c -1.176277,0 -2.123384,0.90985 -2.123384,2.04019 0,1.13033 0.947107,2.04018 2.123384,2.04018 h 3.887102 v 4.19716 c 0,1.17628 0.909848,2.12339 2.040185,2.12339 1.130338,0 2.040186,-0.94711 2.040186,-2.12339 v -4.19716 h 4.064351 c 1.176278,0 2.123385,-0.90985 2.123385,-2.04018 0,-1.13034 -0.947107,-2.04019 -2.123385,-2.04019 h -4.064351 v -3.75378 c 0,-1.17627 -0.909848,-2.12338 -2.040186,-2.12338 z"/>
  <circle class="modtop4" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0" cx="30.058573" cy="171.14383" r="3.9254031"/>
  <circle class="modtop5" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916" cx="27.788307" cy="191.50201" r="3.9254031"/>
  <path class="modtop6" id="rect3517-0-1" style="fill:#67b9e4;fill-opacity:1;stroke-width:0.574836;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 27.145246,205.78435 c -1.130337,0 -2.040185,0.94711 -2.040185,2.12338 v 3.75378 h -3.887102 c -1.176277,0 -2.123384,0.90985 -2.123384,2.04019 0,1.13033 0.947107,2.04018 2.123384,2.04018 h 3.887102 v 4.19716 c 0,1.17628 0.909848,2.12339 2.040185,2.12339 1.130338,0 2.040186,-0.94711 2.040186,-2.12339 v -4.19716 h 4.064351 c 1.176278,0 2.123385,-0.90985 2.123385,-2.04018 0,-1.13034 -0.947107,-2.04019 -2.123385,-2.04019 h -4.064351 v -3.75378 c 0,-1.17627 -0.909848,-2.12338 -2.040186,-2.12338 z"/>
</g>
</svg>

<svg class="CherryBlossom" width="195.401" height="166.216" viewBox="0 0 51.7 43.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path style="fill:var(--accentcolor);fill-opacity:1;stroke-width:.230754;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="M46.073 127.32a6.65 9.034 0 0 0-6.65 9.035 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.65-9.034 6.65 9.034 0 0 0-6.65-9.034zm16.406.073a6.65 9.034 0 0 0-6.65 9.034 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.649-9.034 6.65 9.034 0 0 0-6.65-9.034zM33.375 141.07a7.463 5.818 72.968 0 0-1.232.2 7.463 5.818 72.968 0 0-3.377 8.84 7.463 5.818 72.968 0 0 7.749 5.43 7.463 5.818 72.968 0 0 3.377-8.839 7.463 5.818 72.968 0 0-6.517-5.63zm41.419.12a5.818 7.463 18.76 0 0-6.26 5.435 5.818 7.463 18.76 0 0 3.108 8.938 5.818 7.463 18.76 0 0 7.91-5.195 5.818 7.463 18.76 0 0-3.11-8.938 5.818 7.463 18.76 0 0-1.648-.24zm-20.627 5.644a15.394 18.646 0 0 0-15.023 14.614c-.23 1.806-.077 2.339-.036 2.44a6.74 7.155 0 0 0-.01.255 6.74 7.155 0 0 0 6.74 7.156 6.74 7.155 0 0 0 2.33-.446l.017.014a16.388 13.913 0 0 1 6.109-1.014 16.388 13.913 0 0 1 5.765.904 6.74 7.155 0 0 0 2.564.542 6.74 7.155 0 0 0 6.735-7.015c.045-.173.114-.634.015-1.713a15.394 18.646 0 0 0-15.206-15.737Z" transform="translate(-28.352 -127.32)"/>
</svg>

</div> 
<svg class="rightside" width="52.965431mm" height="180.79034mm" viewBox="0 0 52.965431 180.79034" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-82.214262,-52.249996)">
  <circle class="modtop1" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305" cx="108.31451" cy="59.6129" r="7.3629036"/>
  <path class="modtop2" id="path3045" style="fill:var(--accentcolor);fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 116.53008,95.459997 a 8.1197407,6.2796448 89.424514 0 0 -6.19548,8.185033 8.1197407,6.2796448 89.424514 0 0 6.3624,8.05326 8.1197407,6.2796448 89.424514 0 0 6.196,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.053263 z m -15.65744,0.75396 a 8.1197407,6.2796448 89.424514 0 0 -6.19549,8.185033 8.1197407,6.2796448 89.424514 0 0 6.36292,8.05325 8.1197407,6.2796448 89.424514 0 0 6.19549,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.053253 z m 28.99255,10.269663 a 5.8804598,7.5431223 18.760677 0 0 -6.32727,5.49475 5.8804598,7.5431223 18.760677 0 0 3.14193,9.03356 5.8804598,7.5431223 18.760677 0 0 7.99435,-5.25136 5.8804598,7.5431223 18.760677 0 0 -3.14245,-9.03356 5.8804598,7.5431223 18.760677 0 0 -1.66656,-0.24339 z m -42.48682,0.19792 a 7.5431223,5.8804598 69.857913 0 0 -1.66036,0.2837 7.5431223,5.8804598 69.857913 0 0 -2.92333,9.10642 7.5431223,5.8804598 69.857913 0 0 8.11785,5.05706 7.5431223,5.8804598 69.857913 0 0 2.92333,-9.10694 7.5431223,5.8804598 69.857913 0 0 -6.45749,-5.34024 z m 21.60695,8.45891 c -4.70965,-0.0745 -8.0734,3.82974 -8.0734,3.82974 0,0 -3.68132,3.81474 -7.05229,7.23005 -3.37096,3.41532 -3.14936,8.33849 -0.35501,12.01994 2.79435,3.68145 7.80656,3.72575 11.66543,1.55236 3.85886,-2.17339 7.09665,0.17752 7.31842,0.31058 0.22178,0.13307 6.29841,3.72596 11.08873,-0.70952 4.79031,-4.43548 1.86293,-10.64535 1.86293,-10.64535 0,0 -0.57634,-1.02007 -8.82633,-9.71362 -2.70703,-2.85258 -5.32841,-3.83781 -7.62848,-3.87418 z"/>
  <path class="modtop3" id="path3045-2" style="fill:var(--accentcolor);fill-opacity:1;stroke-width:0.338066;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 112.65014,165.44681 a 4.6683864,3.6104365 89.424514 0 0 -3.56204,4.70593 4.6683864,3.6104365 89.424514 0 0 3.65801,4.63016 4.6683864,3.6104365 89.424514 0 0 3.56235,-4.70592 4.6683864,3.6104365 89.424514 0 0 -3.65832,-4.63017 z m -9.00213,0.43348 a 4.6683864,3.6104365 89.424514 0 0 -3.56205,4.70593 4.6683864,3.6104365 89.424514 0 0 3.65831,4.63016 4.6683864,3.6104365 89.424514 0 0 3.56206,-4.70593 4.6683864,3.6104365 89.424514 0 0 -3.65832,-4.63016 z m 16.66906,5.90447 a 3.380928,4.3368638 18.760677 0 0 -3.63782,3.15917 3.380928,4.3368638 18.760677 0 0 1.80643,5.19378 3.380928,4.3368638 18.760677 0 0 4.59629,-3.01923 3.380928,4.3368638 18.760677 0 0 -1.80673,-5.19378 3.380928,4.3368638 18.760677 0 0 -0.95817,-0.13994 z m -24.427494,0.11379 a 4.3368638,3.380928 69.857913 0 0 -0.954612,0.16312 4.3368638,3.380928 69.857913 0 0 -1.680747,5.23567 4.3368638,3.380928 69.857913 0 0 4.667299,2.90752 4.3368638,3.380928 69.857913 0 0 1.680748,-5.23597 4.3368638,3.380928 69.857913 0 0 -3.712688,-3.07034 z m 12.422764,4.86339 c -2.70778,-0.0428 -4.64175,2.20189 -4.64175,2.20189 0,0 -2.11654,2.19325 -4.05466,4.15686 -1.938109,1.96361 -1.810702,4.79416 -0.20411,6.91078 1.60659,2.11662 4.48833,2.14209 6.70696,0.89252 2.21862,-1.24958 4.08016,0.10206 4.20767,0.17856 0.12751,0.0765 3.62122,2.14222 6.37538,-0.40793 2.75416,-2.55015 1.07108,-6.12047 1.07108,-6.12047 0,0 -0.33136,-0.58648 -5.07463,-5.58477 -1.55639,-1.64007 -3.06353,-2.20653 -4.38594,-2.22744 z"/>
  <circle class="modtop4" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305-0" cx="108.22581" cy="225.67743" r="7.3629036"/>
</g>
</svg>
<span class="message" style="color: #3ca5dd;">
${message}
</span>
</div>
</div>
</div>`);
      break;
      case "streamer": 
  element = $.parseHTML(`<div data-sender="${uid}" data-msgid="${msgId}" style="--accentcolor: #f47f88;" class="message-row animation1 ${msgId}" id="msg-${totalMessages}"> 
<div class="namebox"> 
<span class="name">
${username}
</span>
<span class="pronouns"></span>

<div class="badgescont">
<div class="badgesbox">${badges}</div></div>
</div>
<div class="msgcont">    
<div class="messagebox">  
<img class="collar" src={img1}>
<div class="lefticoncont">
<svg class="modtop" width="55.775311mm" height="106.05341mm" viewBox="0 0 55.775311 106.05341" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-19.094575,-116.00903)">
  <circle class="modtop1" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-1" cx="70.944481" cy="119.93443" r="3.9254031"/>
  <circle class="modtop2" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-2" cx="54.698132" cy="131.72716" r="3.9254031"/>
  <path class="modtop3" id="rect3517-0" style="fill:#ff667a;fill-opacity:1;stroke-width:0.574836;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 40.141219,141.78031 c -1.130337,0 -2.040185,0.94711 -2.040185,2.12338 v 3.75378 h -3.887102 c -1.176277,0 -2.123384,0.90985 -2.123384,2.04019 0,1.13033 0.947107,2.04018 2.123384,2.04018 h 3.887102 v 4.19716 c 0,1.17628 0.909848,2.12339 2.040185,2.12339 1.130338,0 2.040186,-0.94711 2.040186,-2.12339 v -4.19716 h 4.064351 c 1.176278,0 2.123385,-0.90985 2.123385,-2.04018 0,-1.13034 -0.947107,-2.04019 -2.123385,-2.04019 h -4.064351 v -3.75378 c 0,-1.17627 -0.909848,-2.12338 -2.040186,-2.12338 z"/>
  <circle class="modtop4" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0" cx="30.058573" cy="171.14383" r="3.9254031"/>
  <circle class="modtop5" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916" cx="27.788307" cy="191.50201" r="3.9254031"/>
  <path class="modtop6" id="rect3517-0-1" style="fill:#ff667a;fill-opacity:1;stroke-width:0.574836;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 27.145246,205.78435 c -1.130337,0 -2.040185,0.94711 -2.040185,2.12338 v 3.75378 h -3.887102 c -1.176277,0 -2.123384,0.90985 -2.123384,2.04019 0,1.13033 0.947107,2.04018 2.123384,2.04018 h 3.887102 v 4.19716 c 0,1.17628 0.909848,2.12339 2.040185,2.12339 1.130338,0 2.040186,-0.94711 2.040186,-2.12339 v -4.19716 h 4.064351 c 1.176278,0 2.123385,-0.90985 2.123385,-2.04018 0,-1.13034 -0.947107,-2.04019 -2.123385,-2.04019 h -4.064351 v -3.75378 c 0,-1.17627 -0.909848,-2.12338 -2.040186,-2.12338 z"/>
</g>
</svg>

<svg class="CherryBlossom" width="195.401" height="166.216" viewBox="0 0 51.7 43.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path style="fill:var(--accentcolor);fill-opacity:1;stroke-width:.230754;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="M46.073 127.32a6.65 9.034 0 0 0-6.65 9.035 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.65-9.034 6.65 9.034 0 0 0-6.65-9.034zm16.406.073a6.65 9.034 0 0 0-6.65 9.034 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.649-9.034 6.65 9.034 0 0 0-6.65-9.034zM33.375 141.07a7.463 5.818 72.968 0 0-1.232.2 7.463 5.818 72.968 0 0-3.377 8.84 7.463 5.818 72.968 0 0 7.749 5.43 7.463 5.818 72.968 0 0 3.377-8.839 7.463 5.818 72.968 0 0-6.517-5.63zm41.419.12a5.818 7.463 18.76 0 0-6.26 5.435 5.818 7.463 18.76 0 0 3.108 8.938 5.818 7.463 18.76 0 0 7.91-5.195 5.818 7.463 18.76 0 0-3.11-8.938 5.818 7.463 18.76 0 0-1.648-.24zm-20.627 5.644a15.394 18.646 0 0 0-15.023 14.614c-.23 1.806-.077 2.339-.036 2.44a6.74 7.155 0 0 0-.01.255 6.74 7.155 0 0 0 6.74 7.156 6.74 7.155 0 0 0 2.33-.446l.017.014a16.388 13.913 0 0 1 6.109-1.014 16.388 13.913 0 0 1 5.765.904 6.74 7.155 0 0 0 2.564.542 6.74 7.155 0 0 0 6.735-7.015c.045-.173.114-.634.015-1.713a15.394 18.646 0 0 0-15.206-15.737Z" transform="translate(-28.352 -127.32)"/>
</svg>
</div> 

<svg class="rightside" width="52.965431mm" height="180.79034mm" viewBox="0 0 52.965431 180.79034" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-82.214262,-52.249996)">
  <circle class="modtop1" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305" cx="108.31451" cy="59.6129" r="7.3629036"/>
  <path class="modtop2" id="path3045" style="fill:var(--accentcolor);fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 116.53008,95.459997 a 8.1197407,6.2796448 89.424514 0 0 -6.19548,8.185033 8.1197407,6.2796448 89.424514 0 0 6.3624,8.05326 8.1197407,6.2796448 89.424514 0 0 6.196,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.053263 z m -15.65744,0.75396 a 8.1197407,6.2796448 89.424514 0 0 -6.19549,8.185033 8.1197407,6.2796448 89.424514 0 0 6.36292,8.05325 8.1197407,6.2796448 89.424514 0 0 6.19549,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.053253 z m 28.99255,10.269663 a 5.8804598,7.5431223 18.760677 0 0 -6.32727,5.49475 5.8804598,7.5431223 18.760677 0 0 3.14193,9.03356 5.8804598,7.5431223 18.760677 0 0 7.99435,-5.25136 5.8804598,7.5431223 18.760677 0 0 -3.14245,-9.03356 5.8804598,7.5431223 18.760677 0 0 -1.66656,-0.24339 z m -42.48682,0.19792 a 7.5431223,5.8804598 69.857913 0 0 -1.66036,0.2837 7.5431223,5.8804598 69.857913 0 0 -2.92333,9.10642 7.5431223,5.8804598 69.857913 0 0 8.11785,5.05706 7.5431223,5.8804598 69.857913 0 0 2.92333,-9.10694 7.5431223,5.8804598 69.857913 0 0 -6.45749,-5.34024 z m 21.60695,8.45891 c -4.70965,-0.0745 -8.0734,3.82974 -8.0734,3.82974 0,0 -3.68132,3.81474 -7.05229,7.23005 -3.37096,3.41532 -3.14936,8.33849 -0.35501,12.01994 2.79435,3.68145 7.80656,3.72575 11.66543,1.55236 3.85886,-2.17339 7.09665,0.17752 7.31842,0.31058 0.22178,0.13307 6.29841,3.72596 11.08873,-0.70952 4.79031,-4.43548 1.86293,-10.64535 1.86293,-10.64535 0,0 -0.57634,-1.02007 -8.82633,-9.71362 -2.70703,-2.85258 -5.32841,-3.83781 -7.62848,-3.87418 z"/>
  <path class="modtop3" id="path3045-2" style="fill:var(--accentcolor);fill-opacity:1;stroke-width:0.338066;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 112.65014,165.44681 a 4.6683864,3.6104365 89.424514 0 0 -3.56204,4.70593 4.6683864,3.6104365 89.424514 0 0 3.65801,4.63016 4.6683864,3.6104365 89.424514 0 0 3.56235,-4.70592 4.6683864,3.6104365 89.424514 0 0 -3.65832,-4.63017 z m -9.00213,0.43348 a 4.6683864,3.6104365 89.424514 0 0 -3.56205,4.70593 4.6683864,3.6104365 89.424514 0 0 3.65831,4.63016 4.6683864,3.6104365 89.424514 0 0 3.56206,-4.70593 4.6683864,3.6104365 89.424514 0 0 -3.65832,-4.63016 z m 16.66906,5.90447 a 3.380928,4.3368638 18.760677 0 0 -3.63782,3.15917 3.380928,4.3368638 18.760677 0 0 1.80643,5.19378 3.380928,4.3368638 18.760677 0 0 4.59629,-3.01923 3.380928,4.3368638 18.760677 0 0 -1.80673,-5.19378 3.380928,4.3368638 18.760677 0 0 -0.95817,-0.13994 z m -24.427494,0.11379 a 4.3368638,3.380928 69.857913 0 0 -0.954612,0.16312 4.3368638,3.380928 69.857913 0 0 -1.680747,5.23567 4.3368638,3.380928 69.857913 0 0 4.667299,2.90752 4.3368638,3.380928 69.857913 0 0 1.680748,-5.23597 4.3368638,3.380928 69.857913 0 0 -3.712688,-3.07034 z m 12.422764,4.86339 c -2.70778,-0.0428 -4.64175,2.20189 -4.64175,2.20189 0,0 -2.11654,2.19325 -4.05466,4.15686 -1.938109,1.96361 -1.810702,4.79416 -0.20411,6.91078 1.60659,2.11662 4.48833,2.14209 6.70696,0.89252 2.21862,-1.24958 4.08016,0.10206 4.20767,0.17856 0.12751,0.0765 3.62122,2.14222 6.37538,-0.40793 2.75416,-2.55015 1.07108,-6.12047 1.07108,-6.12047 0,0 -0.33136,-0.58648 -5.07463,-5.58477 -1.55639,-1.64007 -3.06353,-2.20653 -4.38594,-2.22744 z"/>
  <circle class="modtop4" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305-0" cx="108.22581" cy="225.67743" r="7.3629036"/>
</g>
</svg>
<span class="message" style="color: #df4b60;">
${message}
</span>
</div>
</div>
</div>`);
      break;
    case "sub": 
     element = $.parseHTML(`<div data-sender="${uid}" data-msgid="${msgId}" style="--accentcolor: #e1bae7" class="message-row animation1 ${msgId}" id="msg-${totalMessages}"> 
<div class="namebox"> 
<div class="badgescont">
<div class="badgesbox">${badges}</div></div>
<span class="name">
${username}
</span>
<span class="pronouns"></span>
</div>
<div class="msgcont">    
<div class="messagebox">  
<img class="bone" src={img2}>
<div class="lefticoncont">
<svg class="modtop" width="55.775311mm" height="106.05341mm" viewBox="0 0 55.775311 106.05341" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-19.094575,-116.00903)">
  <circle class="modtop1" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-1" cx="70.944481" cy="119.93443" r="3.9254031"/>
  <circle class="modtop2" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-2" cx="54.698132" cy="131.72716" r="3.9254031"/>
  <path class="modtop3" id="rect3517-0" style="fill:#c766e3;fill-opacity:1;stroke-width:0.574836;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 40.141219,141.78031 c -1.130337,0 -2.040185,0.94711 -2.040185,2.12338 v 3.75378 h -3.887102 c -1.176277,0 -2.123384,0.90985 -2.123384,2.04019 0,1.13033 0.947107,2.04018 2.123384,2.04018 h 3.887102 v 4.19716 c 0,1.17628 0.909848,2.12339 2.040185,2.12339 1.130338,0 2.040186,-0.94711 2.040186,-2.12339 v -4.19716 h 4.064351 c 1.176278,0 2.123385,-0.90985 2.123385,-2.04018 0,-1.13034 -0.947107,-2.04019 -2.123385,-2.04019 h -4.064351 v -3.75378 c 0,-1.17627 -0.909848,-2.12338 -2.040186,-2.12338 z"/>
   </g>
</svg>
<svg class="CherryBlossom" width="195.401" height="166.216" viewBox="0 0 51.7 43.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path style="fill:var(--accentcolor);fill-opacity:1;stroke-width:.230754;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="M46.073 127.32a6.65 9.034 0 0 0-6.65 9.035 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.65-9.034 6.65 9.034 0 0 0-6.65-9.034zm16.406.073a6.65 9.034 0 0 0-6.65 9.034 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.649-9.034 6.65 9.034 0 0 0-6.65-9.034zM33.375 141.07a7.463 5.818 72.968 0 0-1.232.2 7.463 5.818 72.968 0 0-3.377 8.84 7.463 5.818 72.968 0 0 7.749 5.43 7.463 5.818 72.968 0 0 3.377-8.839 7.463 5.818 72.968 0 0-6.517-5.63zm41.419.12a5.818 7.463 18.76 0 0-6.26 5.435 5.818 7.463 18.76 0 0 3.108 8.938 5.818 7.463 18.76 0 0 7.91-5.195 5.818 7.463 18.76 0 0-3.11-8.938 5.818 7.463 18.76 0 0-1.648-.24zm-20.627 5.644a15.394 18.646 0 0 0-15.023 14.614c-.23 1.806-.077 2.339-.036 2.44a6.74 7.155 0 0 0-.01.255 6.74 7.155 0 0 0 6.74 7.156 6.74 7.155 0 0 0 2.33-.446l.017.014a16.388 13.913 0 0 1 6.109-1.014 16.388 13.913 0 0 1 5.765.904 6.74 7.155 0 0 0 2.564.542 6.74 7.155 0 0 0 6.735-7.015c.045-.173.114-.634.015-1.713a15.394 18.646 0 0 0-15.206-15.737Z" transform="translate(-28.352 -127.32)"/>
</svg>
</div>
<svg class="rightside" width="52.965431mm" height="130.66125mm" viewBox="0 0 52.965431 130.66125" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-45.311036,-104.33069)">
  <path class="modtop1" id="path3045" style="fill:var(--accentcolor);fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 79.626854,104.33096 a 8.1197407,6.2796448 89.424514 0 0 -6.19548,8.18503 8.1197407,6.2796448 89.424514 0 0 6.3624,8.05326 8.1197407,6.2796448 89.424514 0 0 6.196,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.05326 z m -15.65744,0.75396 a 8.1197407,6.2796448 89.424514 0 0 -6.19549,8.18503 8.1197407,6.2796448 89.424514 0 0 6.36292,8.05325 8.1197407,6.2796448 89.424514 0 0 6.19549,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.05325 z m 28.99255,10.26966 a 5.8804598,7.5431223 18.760677 0 0 -6.32727,5.49475 5.8804598,7.5431223 18.760677 0 0 3.14193,9.03356 5.8804598,7.5431223 18.760677 0 0 7.99435,-5.25136 5.8804598,7.5431223 18.760677 0 0 -3.14245,-9.03356 5.8804598,7.5431223 18.760677 0 0 -1.66656,-0.24339 z m -42.48682,0.19792 a 7.5431223,5.8804598 69.857913 0 0 -1.66036,0.2837 7.5431223,5.8804598 69.857913 0 0 -2.92333,9.10642 7.5431223,5.8804598 69.857913 0 0 8.11785,5.05706 7.5431223,5.8804598 69.857913 0 0 2.92333,-9.10694 7.5431223,5.8804598 69.857913 0 0 -6.45749,-5.34024 z m 21.60695,8.45891 c -4.70965,-0.0745 -8.0734,3.82974 -8.0734,3.82974 0,0 -3.68132,3.81474 -7.05229,7.23005 -3.37096,3.41532 -3.14936,8.33849 -0.35501,12.01994 2.79435,3.68145 7.80656,3.72575 11.66543,1.55236 3.85886,-2.17339 7.09665,0.17752 7.31842,0.31058 0.22178,0.13307 6.29841,3.72596 11.08873,-0.70952 4.79031,-4.43548 1.86293,-10.64535 1.86293,-10.64535 0,0 -0.57634,-1.02007 -8.82633,-9.71362 -2.70703,-2.85258 -5.32841,-3.83781 -7.62848,-3.87418 z"/>
  <circle class="modtop2" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305" cx="71.056442" cy="182.91936" r="7.3629036"/>
  <circle class="modtop3" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305-0" cx="70.790321" cy="227.62904" r="7.3629036"/>
</g>
</svg>


<span class="message" style="color: #be4fdf;">
${message}
</span>
</div>
</div>
</div>`);
      break;
     case "vip": 
     element = $.parseHTML(`<div data-sender="${uid}" data-msgid="${msgId}" style="--accentcolor: #fbcf9e" class="message-row animation1 ${msgId}" id="msg-${totalMessages}"> 
<div class="namebox"> 
<div class="badgescont">
<div class="badgesbox">${badges}</div></div>
<span class="name">
${username}
</span>
<span class="pronouns"></span>
</div>
<div class="msgcont">    
<div class="messagebox">  
<img class="collar" src={img1}>
<div class="lefticoncont">
<svg class="modtop" width="55.775311mm" height="106.05341mm" viewBox="0 0 55.775311 106.05341" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-19.094575,-116.00903)">
  <circle class="modtop1" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-1" cx="70.944481" cy="119.93443" r="3.9254031"/>
  <circle class="modtop2" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-2" cx="54.698132" cy="131.72716" r="3.9254031"/>
  <path class="modtop3" id="rect3517-0" style="fill:#e3aa78;fill-opacity:1;stroke-width:0.574836;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 40.141219,141.78031 c -1.130337,0 -2.040185,0.94711 -2.040185,2.12338 v 3.75378 h -3.887102 c -1.176277,0 -2.123384,0.90985 -2.123384,2.04019 0,1.13033 0.947107,2.04018 2.123384,2.04018 h 3.887102 v 4.19716 c 0,1.17628 0.909848,2.12339 2.040185,2.12339 1.130338,0 2.040186,-0.94711 2.040186,-2.12339 v -4.19716 h 4.064351 c 1.176278,0 2.123385,-0.90985 2.123385,-2.04018 0,-1.13034 -0.947107,-2.04019 -2.123385,-2.04019 h -4.064351 v -3.75378 c 0,-1.17627 -0.909848,-2.12338 -2.040186,-2.12338 z"/>
   </g>
</svg>
<svg class="CherryBlossom" width="195.401" height="166.216" viewBox="0 0 51.7 43.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path style="fill:var(--accentcolor);fill-opacity:1;stroke-width:.230754;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="M46.073 127.32a6.65 9.034 0 0 0-6.65 9.035 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.65-9.034 6.65 9.034 0 0 0-6.65-9.034zm16.406.073a6.65 9.034 0 0 0-6.65 9.034 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.649-9.034 6.65 9.034 0 0 0-6.65-9.034zM33.375 141.07a7.463 5.818 72.968 0 0-1.232.2 7.463 5.818 72.968 0 0-3.377 8.84 7.463 5.818 72.968 0 0 7.749 5.43 7.463 5.818 72.968 0 0 3.377-8.839 7.463 5.818 72.968 0 0-6.517-5.63zm41.419.12a5.818 7.463 18.76 0 0-6.26 5.435 5.818 7.463 18.76 0 0 3.108 8.938 5.818 7.463 18.76 0 0 7.91-5.195 5.818 7.463 18.76 0 0-3.11-8.938 5.818 7.463 18.76 0 0-1.648-.24zm-20.627 5.644a15.394 18.646 0 0 0-15.023 14.614c-.23 1.806-.077 2.339-.036 2.44a6.74 7.155 0 0 0-.01.255 6.74 7.155 0 0 0 6.74 7.156 6.74 7.155 0 0 0 2.33-.446l.017.014a16.388 13.913 0 0 1 6.109-1.014 16.388 13.913 0 0 1 5.765.904 6.74 7.155 0 0 0 2.564.542 6.74 7.155 0 0 0 6.735-7.015c.045-.173.114-.634.015-1.713a15.394 18.646 0 0 0-15.206-15.737Z" transform="translate(-28.352 -127.32)"/>
</svg>
</div>
<svg class="rightside" width="52.965431mm" height="130.66125mm" viewBox="0 0 52.965431 130.66125" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-45.311036,-104.33069)">
  <path class="modtop1" id="path3045" style="fill:var(--accentcolor);fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 79.626854,104.33096 a 8.1197407,6.2796448 89.424514 0 0 -6.19548,8.18503 8.1197407,6.2796448 89.424514 0 0 6.3624,8.05326 8.1197407,6.2796448 89.424514 0 0 6.196,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.05326 z m -15.65744,0.75396 a 8.1197407,6.2796448 89.424514 0 0 -6.19549,8.18503 8.1197407,6.2796448 89.424514 0 0 6.36292,8.05325 8.1197407,6.2796448 89.424514 0 0 6.19549,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.05325 z m 28.99255,10.26966 a 5.8804598,7.5431223 18.760677 0 0 -6.32727,5.49475 5.8804598,7.5431223 18.760677 0 0 3.14193,9.03356 5.8804598,7.5431223 18.760677 0 0 7.99435,-5.25136 5.8804598,7.5431223 18.760677 0 0 -3.14245,-9.03356 5.8804598,7.5431223 18.760677 0 0 -1.66656,-0.24339 z m -42.48682,0.19792 a 7.5431223,5.8804598 69.857913 0 0 -1.66036,0.2837 7.5431223,5.8804598 69.857913 0 0 -2.92333,9.10642 7.5431223,5.8804598 69.857913 0 0 8.11785,5.05706 7.5431223,5.8804598 69.857913 0 0 2.92333,-9.10694 7.5431223,5.8804598 69.857913 0 0 -6.45749,-5.34024 z m 21.60695,8.45891 c -4.70965,-0.0745 -8.0734,3.82974 -8.0734,3.82974 0,0 -3.68132,3.81474 -7.05229,7.23005 -3.37096,3.41532 -3.14936,8.33849 -0.35501,12.01994 2.79435,3.68145 7.80656,3.72575 11.66543,1.55236 3.85886,-2.17339 7.09665,0.17752 7.31842,0.31058 0.22178,0.13307 6.29841,3.72596 11.08873,-0.70952 4.79031,-4.43548 1.86293,-10.64535 1.86293,-10.64535 0,0 -0.57634,-1.02007 -8.82633,-9.71362 -2.70703,-2.85258 -5.32841,-3.83781 -7.62848,-3.87418 z"/>
  <circle class="modtop2" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305" cx="71.056442" cy="182.91936" r="7.3629036"/>
  <circle class="modtop3" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305-0" cx="70.790321" cy="227.62904" r="7.3629036"/>
</g>
</svg>


<span class="message" style="color: #e09655;">
${message}
</span>
</div>
</div>
</div>`);
      break;
         case "firsttime": 
     element = $.parseHTML(`<div data-sender="${uid}" data-msgid="${msgId}" style="--accentcolor: #ffa7d9" class="message-row animation1 ${msgId}" id="msg-${totalMessages}"> 
<div class="namebox"> 
<div class="badgescont">
<div class="badgesbox">${badges}</div></div>
<span class="name">
${username}
</span>
<span class="pronouns"></span>
</div>
<div class="msgcont">    
<div class="messagebox">  
<div class="lefticoncont">
<svg class="modtop" width="55.775311mm" height="106.05341mm" viewBox="0 0 55.775311 106.05341" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-19.094575,-116.00903)">
  <circle class="modtop1" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-1" cx="70.944481" cy="119.93443" r="3.9254031"/>
  <circle class="modtop2" style="fill:#ffffff;fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-2" cx="54.698132" cy="131.72716" r="3.9254031"/>
  <path class="modtop3" id="rect3517-0" style="fill:#ea8ac1;fill-opacity:1;stroke-width:0.574836;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 40.141219,141.78031 c -1.130337,0 -2.040185,0.94711 -2.040185,2.12338 v 3.75378 h -3.887102 c -1.176277,0 -2.123384,0.90985 -2.123384,2.04019 0,1.13033 0.947107,2.04018 2.123384,2.04018 h 3.887102 v 4.19716 c 0,1.17628 0.909848,2.12339 2.040185,2.12339 1.130338,0 2.040186,-0.94711 2.040186,-2.12339 v -4.19716 h 4.064351 c 1.176278,0 2.123385,-0.90985 2.123385,-2.04018 0,-1.13034 -0.947107,-2.04019 -2.123385,-2.04019 h -4.064351 v -3.75378 c 0,-1.17627 -0.909848,-2.12338 -2.040186,-2.12338 z"/>
   </g>
</svg>
<svg class="CherryBlossom" width="195.401" height="166.216" viewBox="0 0 51.7 43.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path style="fill:var(--accentcolor);fill-opacity:1;stroke-width:.230754;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="M46.073 127.32a6.65 9.034 0 0 0-6.65 9.035 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.65-9.034 6.65 9.034 0 0 0-6.65-9.034zm16.406.073a6.65 9.034 0 0 0-6.65 9.034 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.649-9.034 6.65 9.034 0 0 0-6.65-9.034zM33.375 141.07a7.463 5.818 72.968 0 0-1.232.2 7.463 5.818 72.968 0 0-3.377 8.84 7.463 5.818 72.968 0 0 7.749 5.43 7.463 5.818 72.968 0 0 3.377-8.839 7.463 5.818 72.968 0 0-6.517-5.63zm41.419.12a5.818 7.463 18.76 0 0-6.26 5.435 5.818 7.463 18.76 0 0 3.108 8.938 5.818 7.463 18.76 0 0 7.91-5.195 5.818 7.463 18.76 0 0-3.11-8.938 5.818 7.463 18.76 0 0-1.648-.24zm-20.627 5.644a15.394 18.646 0 0 0-15.023 14.614c-.23 1.806-.077 2.339-.036 2.44a6.74 7.155 0 0 0-.01.255 6.74 7.155 0 0 0 6.74 7.156 6.74 7.155 0 0 0 2.33-.446l.017.014a16.388 13.913 0 0 1 6.109-1.014 16.388 13.913 0 0 1 5.765.904 6.74 7.155 0 0 0 2.564.542 6.74 7.155 0 0 0 6.735-7.015c.045-.173.114-.634.015-1.713a15.394 18.646 0 0 0-15.206-15.737Z" transform="translate(-28.352 -127.32)"/>
</svg>
</div>
<svg class="rightside" width="52.965431mm" height="130.66125mm" viewBox="0 0 52.965431 130.66125" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
<defs id="defs2"/>
<g id="layer1" transform="translate(-45.311036,-104.33069)">
  <path class="modtop1" id="path3045" style="fill:var(--accentcolor);fill-opacity:1;stroke-width:0.587999;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 79.626854,104.33096 a 8.1197407,6.2796448 89.424514 0 0 -6.19548,8.18503 8.1197407,6.2796448 89.424514 0 0 6.3624,8.05326 8.1197407,6.2796448 89.424514 0 0 6.196,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.05326 z m -15.65744,0.75396 a 8.1197407,6.2796448 89.424514 0 0 -6.19549,8.18503 8.1197407,6.2796448 89.424514 0 0 6.36292,8.05325 8.1197407,6.2796448 89.424514 0 0 6.19549,-8.18503 8.1197407,6.2796448 89.424514 0 0 -6.36292,-8.05325 z m 28.99255,10.26966 a 5.8804598,7.5431223 18.760677 0 0 -6.32727,5.49475 5.8804598,7.5431223 18.760677 0 0 3.14193,9.03356 5.8804598,7.5431223 18.760677 0 0 7.99435,-5.25136 5.8804598,7.5431223 18.760677 0 0 -3.14245,-9.03356 5.8804598,7.5431223 18.760677 0 0 -1.66656,-0.24339 z m -42.48682,0.19792 a 7.5431223,5.8804598 69.857913 0 0 -1.66036,0.2837 7.5431223,5.8804598 69.857913 0 0 -2.92333,9.10642 7.5431223,5.8804598 69.857913 0 0 8.11785,5.05706 7.5431223,5.8804598 69.857913 0 0 2.92333,-9.10694 7.5431223,5.8804598 69.857913 0 0 -6.45749,-5.34024 z m 21.60695,8.45891 c -4.70965,-0.0745 -8.0734,3.82974 -8.0734,3.82974 0,0 -3.68132,3.81474 -7.05229,7.23005 -3.37096,3.41532 -3.14936,8.33849 -0.35501,12.01994 2.79435,3.68145 7.80656,3.72575 11.66543,1.55236 3.85886,-2.17339 7.09665,0.17752 7.31842,0.31058 0.22178,0.13307 6.29841,3.72596 11.08873,-0.70952 4.79031,-4.43548 1.86293,-10.64535 1.86293,-10.64535 0,0 -0.57634,-1.02007 -8.82633,-9.71362 -2.70703,-2.85258 -5.32841,-3.83781 -7.62848,-3.87418 z"/>
  <circle class="modtop2" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305" cx="71.056442" cy="182.91936" r="7.3629036"/>
  <circle class="modtop3" style="fill:#ffffff;fill-opacity:1;stroke-width:0.574164;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3305-0" cx="70.790321" cy="227.62904" r="7.3629036"/>
</g>
</svg>


<span class="message" style="color: #e364af;">
${message}
</span>
</div>
</div>
</div>`);
      break;
    case "default": 
       element = $.parseHTML(`<div data-sender="${uid}" style="--accentcolor: #ffaeb7" data-msgid="${msgId}" class="message-row animation1 ${msgId}" id="msg-${totalMessages}"> 
<div class="namebox"> 
<div class="badgescont">
<div class="badgesbox">${badges}</div></div>
<span class="name">
${username}
</span>
<span class="pronouns"></span>
</div>
<div class="msgcont">    
<div class="messagebox">  
<div class="lefticoncont">
<svg class="CherryBlossom" width="195.401" height="166.216" viewBox="0 0 51.7 43.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path style="fill:var(--accentcolor);fill-opacity:1;stroke-width:.230754;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="M46.073 127.32a6.65 9.034 0 0 0-6.65 9.035 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.65-9.034 6.65 9.034 0 0 0-6.65-9.034zm16.406.073a6.65 9.034 0 0 0-6.65 9.034 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.649-9.034 6.65 9.034 0 0 0-6.65-9.034zM33.375 141.07a7.463 5.818 72.968 0 0-1.232.2 7.463 5.818 72.968 0 0-3.377 8.84 7.463 5.818 72.968 0 0 7.749 5.43 7.463 5.818 72.968 0 0 3.377-8.839 7.463 5.818 72.968 0 0-6.517-5.63zm41.419.12a5.818 7.463 18.76 0 0-6.26 5.435 5.818 7.463 18.76 0 0 3.108 8.938 5.818 7.463 18.76 0 0 7.91-5.195 5.818 7.463 18.76 0 0-3.11-8.938 5.818 7.463 18.76 0 0-1.648-.24zm-20.627 5.644a15.394 18.646 0 0 0-15.023 14.614c-.23 1.806-.077 2.339-.036 2.44a6.74 7.155 0 0 0-.01.255 6.74 7.155 0 0 0 6.74 7.156 6.74 7.155 0 0 0 2.33-.446l.017.014a16.388 13.913 0 0 1 6.109-1.014 16.388 13.913 0 0 1 5.765.904 6.74 7.155 0 0 0 2.564.542 6.74 7.155 0 0 0 6.735-7.015c.045-.173.114-.634.015-1.713a15.394 18.646 0 0 0-15.206-15.737Z" transform="translate(-28.352 -127.32)"/>
</svg>
</div> 
<span class="message" style="color:#e05468;">
${message}
</span>
</div>
</div>
</div>`);   
      break;  
  }
    
    if (msgAlign === "bottom") {
            $(element).appendTo('.main-container');
           $(".main-container>div").last().hide();
        }
     else {
            $(element).prependTo('.main-container');
            $(".main-container>div").first().hide();
        } 
    if (msgHideOpt === true) {
            $(".animation1").addClass('animationOut');
        }
    if (badgesDisplay === false) {
  $('.badgesbox').css("display", "none")
  }
  if (badgesCustom === true) {
  $(".vip").html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.1" id="svg902" viewBox="0 0 96 96">
  <defs id="defs906"/>
  <g id="g908">
    <path fill="#FFFFFF" d="M 19.403191,10.959868 0.36376509,36.881015 47.159463,87.576356 95.560901,35.504671 76.292081,11.189259 Z" id="path916"/>
  </g>
</svg>`); 
  $(".moderator").html(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.1" id="svg966" viewBox="0 0 96 96">
  <defs id="defs970"/>
  <g id="g972">
    <path fill="#FFFFFF" d="m 5.514926,89.698649 6.163741,6.001538 19.302241,-12.65189 13.1385,12.489686 8.110185,-7.785778 L 39.253297,76.073538 90.671872,29.196667 90.509668,0.97322224 56.771297,1.7842408 23.843945,62.448427 10.705445,51.742982 4.8661112,59.690964 16.706982,70.396408 Z" id="path976"/>
  </g>
</svg>`)
  $(".broadcaster").html(`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 30.074135 21.467426" version="1.1" id="svg5" xml:space="preserve"><defs id="defs2"/>
<g id="layer1" transform="translate(-72.032296,-84.451693)"><path id="rect237" style="fill:#FFFFFF;stroke-width:1.32292" d="m 76.467684,84.451693 c -2.457256,0 -4.435388,1.978132 -4.435388,4.435388 v 12.596649 c 0,2.45725 1.978132,4.43539 4.435388,4.43539 h 12.774414 c 2.457256,0 4.435388,-1.97814 4.435388,-4.43539 v -1.44074 l 8.403624,3.88762 0.0253,-8.658906 -0.3328,-8.654252 -8.096144,4.028178 v -1.758549 c 0,-2.457256 -1.978132,-4.435388 -4.435388,-4.435388 z"/></g></svg>
`);
}
    if (msgAlign === "bottom") {
           $(".main-container>div").last().slideToggle(300);
   /* $(".main-container>div").last().animate({
     height: "toggle",
     transform: "none"
     }, 300);*/
        }
     else {
            $(".main-container>div").first().slideToggle(400);
    /*   $(".main-container>div").first().animate({
     height: "toggle",
     transform: "none"
     }, 300);*/
        }
      if (msgLimit === true) {
   if (totalMessages > msgLimitAmount) {
     if (msgAlign === "bottom") {
   $('.main-container').children().not(`.main-container div:nth-last-child(-n+{msgLimitAmount})`).fadeOut(500, function() { $(this).remove() });
     } else {
   $('.main-container').children().not(`.main-container div:nth-child(-n+{msgLimitAmount})`).fadeOut(500, function() { $(this).remove() });
     }
    }
  }
  }

window.addEventListener('onEventReceived', function (obj) {
        if (obj.detail.event.listener === 'widget-button') {
        let emulated;
        switch(obj.detail.event.field) {
          case 'testtestMessage':
            emulated = new CustomEvent("onEventReceived", testMessage);
            break;
          case "testMessageLong": 
            emulated = new CustomEvent("onEventReceived", testMessageLong);
             break;
          case "testMessageVip":
            emulated = new CustomEvent("onEventReceived", testMessageVip);
             break;
            case "testMessageSub":
            emulated = new CustomEvent("onEventReceived", testMessageSub);
             break;
          case "testMessageMod":
            emulated = new CustomEvent("onEventReceived", testMessageMod);
             break;
        case "testMessageFirst":
            emulated = new CustomEvent("onEventReceived", testMessageFirst);
             break;
        }
    window.dispatchEvent(emulated);
        return;
    }
       
  
  if (obj.detail.listener === "delete-message") {
        const msgId = obj.detail.event.msgId;
        $(`.message-row[data-msgid=${msgId}]`).remove();
        return;
    } else if (obj.detail.listener === "delete-messages") {
        const sender = obj.detail.event.userId;
        $(`.message-row[data-sender=${sender}]`).remove();
        return;
    }
    
  const type = obj.detail.listener;
    let event = obj.detail.event;
    if (fieldData.alertson === true) {
   if (type === "follower-latest" || type === "subscriber-latest" || type === "raid-latest" || type === "tip-latest" || type === "cheer-latest") {
    let alertText, accentevent;
    switch (type) {
        case "follower-latest":
            if (fieldData.alertsfollower) {
              alertText = `<span>${event.name}</span> just followed`;
              accentevent = "#ffa7d9";
            };
        break;
        case "subscriber-latest":
            if (fieldData.alertssub) {
              accentevent = "#e6beec";
              if (event.bulkGifted == true) {
               alertText = `<span>${event.sender}</span> just gifted ${event.amount} subs`;
            }  
            else if (event.gifted == true && event.isCommunityGift !== true) {
                alertText = `<span>${event.sender}</span> just gifted a sub`;
            } else if (event.gifted !== true && event.isCommunityGift !== true && event.amount > 1) {
             alertText = `<span>${event.name}</span> just resubbed x${event.amount} times`
            } else if (event.gifted !== true && event.isCommunityGift !== true) {
             alertText = `<span>${event.name}</span> just subscribed`;
            } else {
            return;}}
            break;
        case "tip-latest":
             if (fieldData.alertsdonation) { 
               accentevent = "#b9e5fe";
               alertText = `<span>${event.name}</span> tipped ${event["amount"].toFixed(0)}${currency}`;}
             break;
        case "cheer-latest":
            if (fieldData.alertsbits) { 
               accentevent = "#ffb3bd";
              alertText = `<span>${event.name}</span> cheered ${event["amount"]} bits`};
            break;
        case "raid-latest":
           if (fieldData.alertsraids) { 
              accentevent = "#fbce9d";
             alertText = `<span>${event.name}</span> raided with ${event["amount"]} viewers`};
            break;
    }
    let alertsicon;
    if (!alertText) return; 
    const alertMessage = $.parseHTML(`<div class="message-row animation1" style="--accentcolor: ${accentevent}">
<div class="alertcont"> 
<svg class="alertconnector" width="16.278597mm" height="57.500992mm" viewBox="0 0 16.278597 57.500992" version="1.1" id="svg5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
  <defs id="defs2"/>
  <g id="layer1" transform="translate(-91.681403,-199.9173)">
    <circle class="modtop1" style="fill:#ffffff;fill-opacity:1;stroke-width:0.677262;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-1" cx="100.26385" cy="204.43861" r="4.5213118"/>
    <circle class="modtop2" style="fill:#ffffff;fill-opacity:1;stroke-width:0.653772;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" id="path3916-0-2" cx="100.0499" cy="224.5007" r="4.3644938"/>
    <path class="modtop3" id="rect3517-0" style="fill:var(--accentcolor);fill-opacity:1;stroke-width:0.574836;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="m 99.732074,241.14021 c -1.130337,0 -2.040185,0.94711 -2.040185,2.12338 v 3.75378 h -3.887102 c -1.176277,0 -2.123384,0.90985 -2.123384,2.04019 0,1.13033 0.947107,2.04018 2.123384,2.04018 h 3.887102 v 4.19716 c 0,1.17628 0.909848,2.12339 2.040185,2.12339 1.130336,0 2.040186,-0.94711 2.040186,-2.12339 v -4.19716 h 4.06435 c 1.17628,0 2.12339,-0.90985 2.12339,-2.04018 0,-1.13034 -0.94711,-2.04019 -2.12339,-2.04019 h -4.06435 v -3.75378 c 0,-1.17627 -0.90985,-2.12338 -2.040186,-2.12338 z"/>
  </g>
</svg>
<div class="alerttext"> 
<svg class="alerttexticon" width="195.401" height="166.216" viewBox="0 0 51.7 43.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
  <path style="fill:var(--accentcolor);fill-opacity:1;stroke-width:.230754;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill" d="M46.073 127.32a6.65 9.034 0 0 0-6.65 9.035 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.65-9.034 6.65 9.034 0 0 0-6.65-9.034zm16.406.073a6.65 9.034 0 0 0-6.65 9.034 6.65 9.034 0 0 0 6.65 9.034 6.65 9.034 0 0 0 6.649-9.034 6.65 9.034 0 0 0-6.65-9.034zM33.375 141.07a7.463 5.818 72.968 0 0-1.232.2 7.463 5.818 72.968 0 0-3.377 8.84 7.463 5.818 72.968 0 0 7.749 5.43 7.463 5.818 72.968 0 0 3.377-8.839 7.463 5.818 72.968 0 0-6.517-5.63zm41.419.12a5.818 7.463 18.76 0 0-6.26 5.435 5.818 7.463 18.76 0 0 3.108 8.938 5.818 7.463 18.76 0 0 7.91-5.195 5.818 7.463 18.76 0 0-3.11-8.938 5.818 7.463 18.76 0 0-1.648-.24zm-20.627 5.644a15.394 18.646 0 0 0-15.023 14.614c-.23 1.806-.077 2.339-.036 2.44a6.74 7.155 0 0 0-.01.255 6.74 7.155 0 0 0 6.74 7.156 6.74 7.155 0 0 0 2.33-.446l.017.014a16.388 13.913 0 0 1 6.109-1.014 16.388 13.913 0 0 1 5.765.904 6.74 7.155 0 0 0 2.564.542 6.74 7.155 0 0 0 6.735-7.015c.045-.173.114-.634.015-1.713a15.394 18.646 0 0 0-15.206-15.737Z" transform="translate(-28.352 -127.32)"/>
</svg>
${alertText}
</div>
</div>
</div>
`);
     totalMessages += 1;
        if (msgAlign === "bottom") {
            $(alertMessage).appendTo('.main-container');
           $(".main-container>div").last().hide().slideToggle(300);;
        }
     else {
            $(alertMessage).prependTo('.main-container');
            $(".main-container>div").first().hide().slideToggle(300);;
        } 
     
    if (msgHideOpt === true) {
            $(".animation1").addClass('animationOut');
        }
      if (msgLimit === true) {
   if (totalMessages > msgLimitAmount) {
     if (msgAlign === "bottom") {
   $('.main-container').children().not(`.main-container div:nth-last-child(-n+{msgLimitAmount})`).fadeOut(500, function() { $(this).remove() });
     } else {
   $('.main-container').children().not(`.main-container div:nth-child(-n+{msgLimitAmount})`).fadeOut(500, function() { $(this).remove() });
     }
    }
   }
   }}
  
    if (obj.detail.listener !== "message") return;
    let data = obj.detail.event.data;
    if (data.text.startsWith("!") && hideCommands === "yes") return;
    if (ignoredUsers.indexOf(data.nick) !== -1) return;
    let tags =  obj.detail.event.data.tags;
  
    userType = "default";
    if (tags.subscriber === "1") {userType = "sub"};
    if (tags.mod === "1") {userType = "mod"};
    if (tags.vip === "1") {userType = "vip"};
    if (tags["first-msg"] == "1") {userType = "firsttime"};
  
    let message = msgDiv(data);
    let badges = "", badge;
        for (let i = 0; i < data.badges.length; i++) {
        badge = data.badges[i];
          if (badge.type === "broadcaster") {
        userType = "streamer";
        }
        badges += `<div class="${badge.type} custombadge"><img alt="" src="${badge.url}" class="badge"></div>`;  
    }
    badges = `<div class="badges">${badges}</div>`;
  
    let username = data.displayName;  
    let pronounsDiv = `<span class="pronouns"></span>`;
    username = `${username}`;
  
    addMessage(username, badges, message, data.isAction, data.userId, data.msgId, userType);
  
let currDiv = $(`.${data.msgId}`)
if (data.tags.badges === "") {$(currDiv).find(".badgesbox").css("display", "none")}

let pronounsText = "";
  let pronounsEl;
  if (pronounsOn) {
  async function getP() {
    pronounsText = await getUserPronoun(data.displayName);
    if (pronounsText) {
      pronounsEl = ``
    $(currDiv).find(".pronouns").text(`${pronounsText} `).addClass("pronounsDiv");
    }}
    getP();
  }
  

});

window.addEventListener('onWidgetLoad', async obj => {
    fieldData = obj.detail.fieldData;
    currency = obj.detail.currency.symbol;
    nickColor = fieldData.nickColor;
    nameColor = fieldData.namescolor;
    hideCommands = fieldData.hideCommands;
    channelName = obj.detail.channel.username;
    msgAlign = fieldData.alignMessages;
    msgHideOpt = fieldData["msgHideOpt"];
    badgesCustom = fieldData.badgesCustom;
    largeEmotes = fieldData.largeEmotes;
    badgesDisplay = fieldData.badgesDisplay;
    msgLimit = fieldData.msgLimit;
    msgLimitAmount = +fieldData.msgLimitAmount;
    pronounsOn = fieldData.pronounsOn
    
  let fontname1 = fieldData["msgFont"];  
  let fontname2 = fieldData["namesFont"];  
  fontname1 = fontname1.split(" ").join("+");
  fontname2 = fontname2.split(" ").join("+");
  let font = document.createElement("style");
  let font2 = document.createElement("style");
  $(font).html(`<style>
  @import url('https://fonts.googleapis.com/css2?family=${fontname1}:wght@400;500;600;700&display=swap');
</style>`)
  $(font2).html(`<style>
  @import url('https://fonts.googleapis.com/css2?family=${fontname2}:wght@400;500;600;700&display=swap');
</style>`)
  $(font).prependTo($('body'));  
  $(font2).prependTo($('body'));  
    if (msgAlign === "bottom") {
      $(".main-container").css("display", "flex");
    }
    if (msgAlign === "top") {
      $(".main-container").css("display", "block");
    }
  
   msgGlow = fieldData["msgGlow"];
   nameGlow = fieldData["nameGlow"];
   outline = fieldData["outline"];
   ignoredUsers = fieldData.ignoredUsers.toLowerCase().replace(" ", "").split(",");
  if (pronounsOn) { await getPronouns() };
});


function msgDiv(message) {
  let text = html_encode(message.text);
  let data = message.emotes; 
 // let size = calcEmoteSize(text);
  let notext = text;
  for (let i = 0; i < data.length; i++) {
        notext = notext.replace(data[i]["name"], " ");
        notext = notext.replace(/\p{C}/gu, '');
    }
  return text
      .replace(
          /([^\s]*)/gi,
          function (m, key) {
              let result = data.filter(emote => {
                  return html_encode(emote.name) === key
              });
              let count = 0;
              if (typeof result[0] !== "undefined") {
                let emote;
                count = message.emotes.length;    
                if (notext.trim() === "" && largeEmotes === "on") {
    
                if (count === 1) {
                  let url = result[0]['urls'][4];
                  if (url.search(/cdn.frankerfacez.com/ !== -1)) {
                  url = url.replace("https:https:", "https:");
                  }
                  emote = `<img class="large" src="${url}"/>`
     
                } else if (count > 1) {         
                  let url = result[0]['urls'][2];
                  if (url.search(/cdn.frankerfacez.com/ !== -1)) {
                  url = url.replace("https:https:", "https:");
                  }
                  emote = `<img class="default" src="${url}"/>`;
                } 
              } else {
                let url = result[0]['urls'][1];
                if (url.search(/cdn.frankerfacez.com/ !== -1)) {
                  url = url.replace("https:https:", "https:");
                  }
                emote = `<img class="nolarge" src="${url}"/>`;
                } 
                return emote;
          } else return key;
        }
      );
}

function html_encode(e) {
    return e.replace(/[<>"^]/g, function (e) {
        return "&#" + e.charCodeAt(0) + ";";
    });
}

let testMessage = {detail: {
                    listener: "message", event: {
                        data: {
                            tags: {
                                badges: "moderator/1,partner/1",
                                color: "#1e90ff",
                                mod: "1",
                                subscriber: "1",
                                "user-id": "100135110",
                                "user-type": "mod"
                            },
                            userId: "100135110",
                            displayName: "Streamer",
                            displayColor: "#5B99FF",
                            badges: [
                              {
							    "type": "broadcaster",
   								"version": "1",
 							    "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3"
								}],
                            text: "This is a test message",
                            emotes: [],
                            msgId: "43285909-412c-4eee-b80d-89123f72ba53142"
                        },
                        renderedText: 'Test message in a custom chat'
                    }
                }}
let testMessageLong = {detail: {
                    listener: "message", event: {
                        data: {
                            tags: {
                                badges: "",
                                color: "#8a2be2",
                                mod: "0",
                                subscriber: "0",
                                "user-id": "100135110",
                                "user-type": "mod"
                            },
                            userId: "100135110",
                            displayName: "Follower user",
                            displayColor: "#8a2be2",
                            badges: [],
                            text: `This is a long long long long long long long long 
							long long long long long test message`,
                            emotes: [],
                            msgId: "43285909-412c-4eee-b80d-83452ba53142"
                        },
                        renderedText: 'Test message in a custom chat'
                    }
                }}
let testMessageSub = {detail: {
                    listener: "message", event: {
                        data: {
                            tags: {
                                badges: "subscriber/1",
                                color: "#ff69b4",
                                vip: "0",
                                subscriber: "1",
                                "user-id": "100135110",
                                "user-type": "subscriber"
                            },
                            userId: "100135110",
                            displayName: "Vryhoth",
                            displayColor: "#ff69b4",
                            badges: [{
                                type: "partner",
                                version: "1",
                                url: "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
                                description: "Verified"
                            }],
                            text: "This is subscriber user test message. Here you can test message style and pronouns",
                            emotes: [],
                            msgId: "43285909-412c-4eee-b80d-89f1482ba53142"
                        },
                        renderedText: 'Test message in a custom chat'
                    }
                }}
let testMessageMod = {detail: {
                    listener: "message", event: {
                        data: {
                            tags: {
                                badges: "moderator/1",
                                color: "#00ff7f",
                                mod: "1",
                                subscriber: "1",
                                "user-id": "100135110",
                                "user-type": "mod"
                            },
                            userId: "100135110",
                            displayName: "Moderator",
                            displayColor: "#00ff7f",
                            badges: [{
                                type: "moderator",
                                version: "1",
                                url: "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                                description: "Moderator"
                            }],
                            text: "This is a moderator test message",
                            emotes: [],
                            msgId: "43285909-412c-4eee-b80d-89228ba53142"
                        },
                        renderedText: 'Test message in a custom chat'
                    }
                }}

let testMessageVip = {detail: {
                    listener: "message", event: {
                        data: {
                            tags: {
                                badges: "subscriber/1",
                                color: "#ff69b4",
                                vip: "1",
                                subscriber: "1",
                                "user-id": "100135110",
                                "user-type": "subscriber"
                            },
                            userId: "100135110",
                            displayName: "milaeshop",
                            displayColor: "#ff69b4",
                            badges: [{
                                type: "vip",
                                version: "1",
                                url: "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3"
                            }],
                            text: "This is Vip user test message",
                            emotes: [],
                            msgId: "43285909-412c-4eee-b80d-89f1482ba53142"
                        },
                        renderedText: 'Test message in a custom chat'
                    }
                }}
let testMessageFirst = {detail: {
                    listener: "message", event: {
                        data: {
                            tags: {
                                badges: "",
                                color: "#b22222",
                                "first-msg": "1",
                                userId: `100998110`,
                            },
                             userId: `100995110`,
                            displayName: "Vryhoth",
                            displayColor: "#b22222",
                            badges: [],
                            text: `First time chat`,
                            emotes: [],
                            msgId: `43285909-412c-4eee-b80d-89228ba78142`
                        },
                        renderedText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                }}
 async function get(URL) {
  return await fetch(URL)
    .then(async res => {
      if (!res.ok) return null
      return res.json()
    })
    .catch(error => null)
}

 async function getUserPronoun(username) {
  const lowercaseUsername = username.toLowerCase()
  let pronouns = pronounsCache[lowercaseUsername]
  if (!pronouns || pronouns.expire < Date.now()) {
    const res = await get(PRONOUNS_API.user(lowercaseUsername))
    const [newPronouns] = res
    pronounsCache[lowercaseUsername] = {
      ...newPronouns,
      expire: Date.now() + 1000 * 60 * 5, // 5 minutes in the future
    }
    pronouns = pronounsCache[lowercaseUsername]
  }

  if (!pronouns.pronoun_id) {
    return null
  }
  return pronounsObj.pronouns[pronouns.pronoun_id];
}