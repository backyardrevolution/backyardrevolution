function getQueryUrl(a){for(hu=window.location.search.substring(1),gy=hu.split("&"),i=0;i<gy.length;i++)if(ft=gy[i].split("="),ft[0]==a)return unescape(ft[1]);return null}function trim(a){return a.replace(/^\s*|\s*$|\n|\r/g,"")}function encode64(a){var b,c,d,e,f,g="",h="",i="",j=0;do b=a.charCodeAt(j++),c=a.charCodeAt(j++),h=a.charCodeAt(j++),d=b>>2,e=(3&b)<<4|c>>4,f=(15&c)<<2|h>>6,i=63&h,isNaN(c)?f=i=64:isNaN(h)&&(i=64),g=g+keyStr.charAt(d)+keyStr.charAt(e)+keyStr.charAt(f)+keyStr.charAt(i),b=c=h="",d=e=f=i="";while(j<a.length);return g}function trackEngage(){var a=document.createElement("img");a.src=hidLocation.value+"adeng.php?rnd="+Math.random(),a.setAttribute("style","display:none"),hidLocation.parentNode.appendChild(a)}function checkdirect(a,b,c){void 0===c&&(c="");var d=document.createElement("img");d.src=hidLocation.value+"adck.php?c="+a+"&l="+b+"&id="+c+"&"+window.location.search.substring(1)+"&r="+encode64(trim(document.referrer))+"&rnd="+Math.random(),d.setAttribute("style","display:none"),hidLocation.parentNode.appendChild(d)}function desktopDetails(){var a=document.createElement("img");a.src=hidLocation.value+"addesk.php?w="+screen.width+"&h="+screen.height+"&rnd="+Math.random(),a.setAttribute("style","display:none"),hidLocation.parentNode.appendChild(a)}function resetCookie(a){void 0===a&&(a=1);var b=document.createElement("img");b.src=hidLocation.value+"resetcookie.php?l="+a+"&t=image&rnd="+Math.random(),b.setAttribute("style","display:none"),hidLocation.parentNode.appendChild(b)}function appendParamToLink(a,b,c){var d=document.getElementById(c);if(null!=a&&null!=d){var e=-1==a.href.indexOf("?")?"?":"&";a.href+=e+b+"="+d.value}return!0}function appendParamToLinkID(a,b,c){var d=document.getElementById(a);return null!=d&&appendParamToLink(d,b,c),!0}var queryEngSec=getQueryUrl("engsec"),hidLocation=document.getElementById("hidLocation");null==queryEngSec||"0"==queryEngSec||isNaN(queryEngSec)||null==hidLocation||""==hidLocation.value||setTimeout("trackEngage()",1e3*queryEngSec);var queryCaptureResolution=getQueryUrl("clcsr");null!=queryCaptureResolution&&"1"==queryCaptureResolution&&null!=hidLocation&&""!=hidLocation.value&&desktopDetails();var keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";