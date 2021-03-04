function validation(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var text;

  error_message.style.padding="10px";

  if(name.length<5){
    text="Please Enter Valid Name";
    error_message.innerHTML=text;
    return false;
  }
}
