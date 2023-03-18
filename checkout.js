function sendEmail(argument) {
    Email.send({
        SecureToken: "04a4eb0d-c9bc-40b3-9153-2a4f1e242f50",
        To: 'saitejapalegarthuli@gmail.com',
        From: "saitejapalegarthuli4@gmail.com",
        Subject: document.getElementById("total").innerHTML + "  " + "Roll : " + rollnum,
        Body: document.getElementById("cartItem").innerHTML ,
    }).then(
        message => alert(message)
    );
}