// Volunteer Send Mail

// function SendVolunteerMail(){

//     var params ={
//         from_name : document.getElementById("fullName").value,
//         email_id : document.getElementById("volunteerEmail").value,
//         message : document.getElementById("volunteer-reason").value

//     }
    

// }

// emailjs.send("service_1vzf7vg","template_ui1e62j",params).then(

//     res =>{

//         document.getElementById("fullName").value;
//         document.getElementById("volunteerEmail").value;
//         document.getElementById("volunteer-reason").value;
//         console.log(res);
//         alert("Your Message was successfully sent")

//     }


// )


function SendVolunteerMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_1vzf7vg";
    const templateID = "template_4n3ct9c";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }