function deleteFreeOrPremiumRegistrationCookie(hasCookie,cookieName,cookieDomain){if(!hasCookie||!navigator.cookieEnabled)return;var domain="";if(cookieDomain)domain="; domain\x3d"+cookieDomain;document.cookie=cookieName+"\x3dfalse; max-age\x3d0; path\x3d/"+domain};