<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="Description" content="IRCTC Next Generation eTicketing System">
  <meta name="theme-color" content="#213d77"/>
  <title>IRCTC Next Generation eTicketing System</title>
  <base href="/nget/">  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD9/Pz//////9u6uf+5enj/woqJ/8KKif/CjIr/r2hm/92/vv/Po6L/2rm4/8ucmv+waWf/48nJ///////+/f3//fz8///////Uraz/sGpo/6NRT/+rX13/sGln/8qbmf/dv7//tnVz/8GJh/+0cG7/z6Sj/+LHxv///////v39//7+/v//////7Nra/+LIx//XsrH/2rm4/+/h4P/Gk5H/4cTD/9Clo//Xs7L/6NTU/8mYlv/x5eT///////7+/v///////v7+///////t3dz/7Nzc//7+/v///////////+/y8f/t8vL/8uXl/+bR0P/27u3///////7+/v////////////////+9goH/xJCP//jy8v///v7/9/T0/9rV1P/Z1dT/8vX1/7Z4dv9/DQn/hhoX/7Nwbv/+/Pz////////////PpKP/m0JA////////////9fb2/+ft7P/5/Pz////////////v5uX/0ayq/9Gnpv+RMC3/0Kel////////////s29s/6BMSf//////9/j4/+DX1//YtbT/1Kuq/+rY2P/u3t7/8+vq//f7+///////4cbF/72CgP///////////8qamf+EFhP/1LKx//z////kzMz/hRcU/6VVU//NoJ//lTc0/+nU1P/w8vL/+/v6//Tq6v/Uraz////////////17ez/ljc0/8uiof//////5c7O/48sKf/iycj/yJiW/4khHf/w4OD/8vX1//Lz8v/48PD/7d7e///////+/v7//////+TU1P/18PD//////+XOzf+NJyT/iB0a/8qbmv+nWFb/6NDQ//f7+//o5uX///////37+//////////////////k5eX/1NHQ//f7+//r2Nj/nkZE/51FQv/TrKv/rmdl/+vX1//4+/v/4d/e///////+/v7//////////////////Pv7/+rp6P/Z19b/4N7d/+7r6v/7+fn//fv7//z5+f//////8fHw/9vZ2f////////////////////////////////////////////Pz8//o5+b/6Ofm//Dv7v/y7u3/8OXl/+zo6P/i4eH///////////////////////////////////////v39//79vb/////////////////plpY/5Q3NP/38fH///////7+/v/////////////////////////////////+/v7/2rq5/9/Cwf/z6en/wIeF/4MUEP/JmZf///////78/P///////////////////////////////////v7///////r29v/HlJP/nENA/44qJ//Bion//v39////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==" rel="icon" type="image/x-icon" />
  <link href="data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD9/Pz//////9u6uf+5enj/woqJ/8KKif/CjIr/r2hm/92/vv/Po6L/2rm4/8ucmv+waWf/48nJ///////+/f3//fz8///////Uraz/sGpo/6NRT/+rX13/sGln/8qbmf/dv7//tnVz/8GJh/+0cG7/z6Sj/+LHxv///////v39//7+/v//////7Nra/+LIx//XsrH/2rm4/+/h4P/Gk5H/4cTD/9Clo//Xs7L/6NTU/8mYlv/x5eT///////7+/v///////v7+///////t3dz/7Nzc//7+/v///////////+/y8f/t8vL/8uXl/+bR0P/27u3///////7+/v////////////////+9goH/xJCP//jy8v///v7/9/T0/9rV1P/Z1dT/8vX1/7Z4dv9/DQn/hhoX/7Nwbv/+/Pz////////////PpKP/m0JA////////////9fb2/+ft7P/5/Pz////////////v5uX/0ayq/9Gnpv+RMC3/0Kel////////////s29s/6BMSf//////9/j4/+DX1//YtbT/1Kuq/+rY2P/u3t7/8+vq//f7+///////4cbF/72CgP///////////8qamf+EFhP/1LKx//z////kzMz/hRcU/6VVU//NoJ//lTc0/+nU1P/w8vL/+/v6//Tq6v/Uraz////////////17ez/ljc0/8uiof//////5c7O/48sKf/iycj/yJiW/4khHf/w4OD/8vX1//Lz8v/48PD/7d7e///////+/v7//////+TU1P/18PD//////+XOzf+NJyT/iB0a/8qbmv+nWFb/6NDQ//f7+//o5uX///////37+//////////////////k5eX/1NHQ//f7+//r2Nj/nkZE/51FQv/TrKv/rmdl/+vX1//4+/v/4d/e///////+/v7//////////////////Pv7/+rp6P/Z19b/4N7d/+7r6v/7+fn//fv7//z5+f//////8fHw/9vZ2f////////////////////////////////////////////Pz8//o5+b/6Ofm//Dv7v/y7u3/8OXl/+zo6P/i4eH///////////////////////////////////////v39//79vb/////////////////plpY/5Q3NP/38fH///////7+/v/////////////////////////////////+/v7/2rq5/9/Cwf/z6en/wIeF/4MUEP/JmZf///////78/P///////////////////////////////////v7///////r29v/HlJP/nENA/44qJ//Bion//v39////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==" rel="apple-touch-icon" type="image/x-icon" />
  <link async='async' rel="stylesheet" as="style" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
  <link rel="preconnect" crossorigin href="https://cdn.jsdelivr.net">
  <link async='async' crossorigin rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/npm/primeng@9.0.5/resources/primeng.min.css" />
  <link async='async' crossorigin rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/npm/primeng@9.0.5/resources/themes/nova-light/theme.css" />
  <link async='async' crossorigin rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" />
  <script async='async' as="script" src="https://www.googletagservices.com/tag/js/gpt.js"></script>
  <link rel="manifest" href="manifest.json">
  <link rel="preload" crossorigin href="https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2" as="font">
  <meta name="theme-color" content="#1976d2">
  <script> window._izq = window._izq || []; window._izq.push(["init" ]); </script>
  <script async='async' src="https://cdn.truenotify.co.in/scripts/da004191678d8e062dab7ecdea625a5251b9dfde.js"></script>
<link rel="stylesheet" href="/nget/styles.ccc59605d048d8ceaefa.css"></head>
<body>
  <style type="text/css">
    .loading_div {
      background-image: url("./assets/images/loading-min.gif");
      background-repeat: no-repeat;
      height: 100px;
      width:  100px;
      background-size: 100px 100px;
    }
    #outer {
      padding-top: 20vh;
      width: 100%;
      text-align: center;
    }
    .grecaptcha-badge {
      display: none;
    }
    #inner {
      display: inline-block;
    }
    #preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background: #fff	;
}
#loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 80px;
    height: 80px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #FB792B;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}
#loader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #213D77;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
}
#loader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #2394F2;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
    0%   {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
  }
  @keyframes spin {
      0%   {
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
      }
      100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
      }
  }
  </style>

  <app-root>
    <div id="outer">
      <div id="inner">
        <div id="preloader">
          <div id="loader"></div>
        </div>
      </div>
    </div>
  </app-root>

  <!-- <script>
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-49954655-1', 'auto', {'sampleRate': '5.0'});
    ga('send', 'pageview');
  </script> -->
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SHTZYKNHG2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-SHTZYKNHG2');
  </script>
  <script src = "https://excalibur.pinacalabs.com/674387.js" onerror="not_loaded()"></script>
  <script>
  (function(_0x10ed2e,_0x29a383){const _0x177a6f=_0x5cf6,_0x4464bc=_0x10ed2e();while(!![]){try{const _0xf2e5cf=parseInt(_0x177a6f(0x0))/0x1+parseInt(_0x177a6f(0x1))/0x2+-parseInt(_0x177a6f(0x2))/0x3*(-parseInt(_0x177a6f(0x3))/0x4)+parseInt(_0x177a6f(0x4))/0x5+parseInt(_0x177a6f(0x5))/0x6*(-parseInt(_0x177a6f(0x6))/0x7)+-parseInt(_0x177a6f(0x7))/0x8+-parseInt(_0x177a6f(0x8))/0x9;if(_0xf2e5cf===_0x29a383)break;else _0x4464bc['push'](_0x4464bc['shift']());}catch(_0x142a68){_0x4464bc['push'](_0x4464bc['shift']());}}}(_0x1500,0x1bc5c));function _0x5cf6(_0x1bb70b,_0x15001a){const _0x5cf69c=_0x1500();return _0x5cf6=function(_0x46950d,_0x1c26fd){_0x46950d=_0x46950d-0x0;let _0x29b327=_0x5cf69c[_0x46950d];return _0x29b327;},_0x5cf6(_0x1bb70b,_0x15001a);}function not_loaded(){const _0x1178ec=_0x5cf6;document[_0x1178ec(0x9)]='excal=notloaded;\x20path=/',document[_0x1178ec(0x9)]='excalcookie=unauthorised;\x20path=/';const _0x1bd0b0=new XMLHttpRequest(),_0x3ca78a=_0x1178ec(0xa);_0x1bd0b0[_0x1178ec(0xb)](_0x1178ec(0xc),_0x3ca78a);const _0x422e32={'url':document[_0x1178ec(0xd)][_0x1178ec(0xe)]};_0x1bd0b0[_0x1178ec(0xf)](JSON[_0x1178ec(0x10)](_0x422e32));}function _0x1500(){const _0x273fd2=['cookie','https://excalibur.pinacalabs.com/loaderror','open','POST','location','href','send','stringify','214903GNNPpE','13244NPqURl','1167DUSPWn','868GHhRCP','940735PUKTMg','6dgTlHb','1287944gRFHvM','950368zCnaoP','697869aJSOBV'];_0x1500=function(){return _0x273fd2;};return _0x1500();}
  </script>
  <noscript>Please enable JavaScript to continue using this application.</noscript>
<script src="/nget/runtime-es2015.cacd3dafbefdb40acc26.js" type="module"></script><script src="/nget/runtime-es5.cacd3dafbefdb40acc26.js" nomodule defer></script><script src="/nget/polyfills-es5.4391c03b6c61167dd2e0.js" nomodule defer></script><script src="/nget/polyfills-es2015.a8f29f173d5f450a625f.js" type="module"></script><script src="/nget/main-es2015.5c2b542de66a9f27b82d.js" type="module"></script><script src="/nget/main-es5.5c2b542de66a9f27b82d.js" nomodule defer></script></body>
</html>