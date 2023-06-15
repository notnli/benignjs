// This file was automatically generated from template-hdfc-footer.soy.
// Please don't edit this file by hand.

if (typeof templates_templateHdfcFooter == 'undefined') { var templates_templateHdfcFooter = {}; }


templates_templateHdfcFooter.templateHdfcFooter = function(opt_data, opt_ignored) {
  var output = '<footer id="footer-accordion"><div class="row"><div class="bp-container B-template-hdfc-footer container hide-in-mobileApp" data-pid="' + soy.$$escapeHtml(opt_data.item.name) + '"><div class="bp-area B-template-hdfc-footer--area col-lg-12 col-md-12 col-sm-12 col-xs-12">';
  var childList6 = opt_data.item.children;
  var childListLen6 = childList6.length;
  for (var childIndex6 = 0; childIndex6 < childListLen6; childIndex6++) {
    var childData6 = childList6[childIndex6];
    output += soy.$$filterNoAutoescape("");
  }
  output += '</div></div></div></footer>';
  return output;
};
