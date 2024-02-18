function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ehsanulrehman1@gmail.com",
        // Password: "140E5711D99F6E59CD64D4451143F3A69BE9",
        Password: "F9F480E9A5F24451573B4524582F1656C8BE",
        To: 'ehsanulrehman6@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}