document.writeln("<div class=\"feedbackForm\">");
document.writeln("<form name=\"feedbackForm\" action='' id=\"feedbackForm\" method=\"post\">");
document.writeln("<table width=\"640\" border=\"0\" align=\"center\" cellspacing=\"0\" cellpadding=\"0\">");
document.writeln("<tr>");
document.writeln("<td width=\"220\"><div class=\"lable\"><span class=\"xh\">*</span>姓名:</div></td>");
document.writeln("<td width=\"420\"><input id=\"SubmitName\" name=\"SubmitName\" class=\"text\" maxlength=\"40\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><div class=\"lable\">电子邮件:</div></td>");
document.writeln("<td><input id=\"SubmitEmail\" name=\"SubmitEmail\" class=\"text\"  maxlength=\"50\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><div class=\"lable\"><span class=\"xh\">*</span>电话:</div></td>");
document.writeln("<td><input id=\"SubmitPhone\" name=\"SubmitPhone\" class=\"text\"  maxlength=\"40\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><div class=\"lable\">公司名:</div></td>");
document.writeln("<td><input id=\"SubmitCompanyName\" name=\"SubmitCompanyName\" class=\"text\"  maxlength=\"140\"  /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><div class=\"lable\"><span class=\"xh\">*</span>标题:</div></td>");
document.writeln("<td><input id=\"SubmitTitle\" name=\"SubmitTitle\" class=\"text\"  maxlength=\"340\"  /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td valign=\"top\"><div class=\"lable\"><span class=\"xh\">*</span>内容:</div></td>");
document.writeln("<td><textarea name=\"SubmitContent\" id=\"SubmitContent\" class=\"atextarea\" cols=\"50\" rows=\"5\"  maxlength=\"2000\" ></textarea></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td></td>");
document.writeln("<td class=\"smtcss\"><button class=\"submita\" id=\"ImgSend\" >提交</button><span id=\"msg\" style=\"color: red; margin: 0px 14px;\"></span></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("</form>");
document.writeln("</div>");


function FixJqText(str) {
    var tempstr = str.replace(/\+/g, "＋");
    return tempstr;
}
$.fn.formreset = function () {
    $(this).each(function () { this.reset(); });
    $("#msg").text("");
}
$("#ImgSend").click(function () {
    var vRealName = $.trim($("#SubmitName").val());
    if (vRealName == "") {
        alert("请输入姓名");
        $("#SubmitName").focus();
        return false;
    }
    if (vRealName.length > 400) {
        alert("您输入姓名太长了");
        $("#SubmitName").focus();
        return false;
    }
    var vEmail = $.trim($("#SubmitEmail").val());
    //if (vEmail == "") {
    //    alert("请输入电子邮件");
    //    $("#SubmitEmail").focus();
    //    return false;
    //}
    if (vEmail != "") {
        var mail_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!mail_filter.test(vEmail)) {
            alert("请输入格式正确的电子邮件");
            $("#SubmitEmail").focus();
            return false;
        }
    }
    var vSubmitPhone = $.trim($("#SubmitPhone").val());
    if (vSubmitPhone == "") {
        alert("请输入电话");
        $("#SubmitPhone").focus();
        return false;
    }


    var vTitle = $.trim($("#SubmitTitle").val());
    if (vTitle == "") {
        alert("请输入标题");
        $("#SubmitTitle").focus();
        return false;
    }
    if (vTitle.length > 340) {
        alert("您输入的标题太长了");
        $("#SubmitTitle").focus();
        return false;
    }
    var vContent = $.trim($("#SubmitContent").val());
    if (vContent == "") {
        alert("请输入内容");
        $("#SubmitContent").focus();
        return false;
    }
    if (vContent.length > 2000) {
        alert("内容字符个数不能超过2000个！");
        $("#SubmitContent").focus();
        return false;
    }
    $(this).attr("disabled", "disabled");
    $("#msg").text("提交中...");
    $.ajax({
        type: "POST",
        url: "/OutOpen/AddInquiry",
        data: {
            name: escape(FixJqText(vRealName)),
            company: escape(FixJqText($("#SubmitCompanyName").val())),
            siteLangId: vSiteLangId,
            ipAddress: vIpAddress,
            proId: $("#productID").val(),
            phone: $("#SubmitPhone").val().trim(),
            email: vEmail,
            title: escape(FixJqText(vTitle)),
            content: escape(FixJqText(vContent)),
            pageUrl: document.URL
        },
        dataType: "json",
        error: function (data) {
            alert('发送请求失败');
            $("#ImgSend").removeAttr("disabled");
        },
        success: function (data) {
            if (data>0) {
                $("#ImgSend").removeAttr("disabled");
                alert('发送成功');
                $("#feedbackForm").formreset();
            } else {
                alert('发送失败。');
                $("#ImgSend").removeAttr("disabled");
            }
            
           
        },
        async: false
    });
    return false;
});