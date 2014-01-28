function checkIfIsValidEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email);
}

function checkIfListHasValidEmails(emailList) {
    var listHasInValidEmailsFlag = false, emailListEnh, invalidEmailList = "";
    
    emailListEnh = emailList;
    emailListEnh = emailListEnh.replace(/;/g, ",").replace(/ /g, "").replace(/,,/g, ",");

    if (emailListEnh.length > 0) {
        emailListEnh = emailListEnh + ",";
        $.each(emailListEnh.split(",").slice(0, -1), function (index, item) {
            //$.each(emailListEnh.split(","), function (index, item) {
            if (!checkIfIsValidEmail(item)) {
                if (invalidEmailList != "")
                    invalidEmailList += ",";
                listHasInValidEmailsFlag = true;
                invalidEmailList += item;
            }
        });
    }
    
    return { error: listHasInValidEmailsFlag, invalidEmailList: invalidEmailList };
}