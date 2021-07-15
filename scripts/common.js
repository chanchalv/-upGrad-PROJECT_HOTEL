


let createHeaderTemplate = () => {
 let  headerCreation = `<a href="index.html">
  <img src="assests/images/logo.png" alt="logo" class="website-logo"></a>
  <div class="nav-links">           
  <button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false" data-target="#loginModal" onclick="mainLogin(event)">LOGIN</button>
  </div>`;
  document.getElementById('header').innerHTML += headerCreation;
};

let createLoginTemplate = () => {
  let loginCreation = `<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="loginModalLabel">Please Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
          <form>
          <div class="form-group">
              <label for="loginInputUsername">Username</label>
              <input type="text"  id="loginInputUsername" aria-describedby="usernameHelp" placeholder="Enter Username"></div><br>
              <div class="form-group">
              <label for="loginInputPassword">Password</label>
              <input type="password"  id="loginInputPassword" aria-describedby="passwordHelp" placeholder="Enter Password"></div>
          </div>
          <div class="modal-footer justify-content-center">
          <button id="login-button" type="button" class="btn btn-primary" data-dismiss="modal" onclick = "doLogin(event)">Login</button>
            
          </div>
</div>
</div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<p>Thank you for reaching out!!!</p>
<p>Please Enter your Email and we wil get back to you.</p>
<form>
  <label for="email">Email:</label>
  <input type="email" placeholder="Enter your Email id">
              </form>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
          </div>
      </div>
  </div>
</div>`;
 
     
document.getElementById('login-container').innerHTML += loginCreation;
};

let createFooterTemplate = () => {
  let footerCreation = `<div class="contact-container">
  <a href="#" target="_self">
 <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">Contact Us</button>
</a>
 
</div>

<div class="nav-links">
<a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" class="social-media-icons"></a>
<a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png" class="social-media-icons"></a>
<a href="https://www.twitter.com" target="_blank"><img src="assests/images/twitter.png" class="social-media-icons"></a></div>
</br>
<div class="copyright"><p>&copy; 2020 ROOM SEARCH PVT. LTD.</p></div>`;
document.getElementById('footer').innerHTML += footerCreation;
};
createHeaderTemplate();
createLoginTemplate();
createFooterTemplate();



let doLogin = e => {
  localStorage.setItem('username', 'admin');
  localStorage.setItem('password','admin');
  e.preventDefault();
  let userElement = document.getElementById('loginInputUsername');
  let passwordElement = document.getElementById('loginInputPassword');
  if(userElement.value === localStorage.getItem('username') && passwordElement.value === localStorage.getItem('password') ){
    alert('Successfully logged in!');
    let loginElement = document.getElementById('login')
        loginElement.dataset.target = '';
        loginElement.innerText = 'LOGOUT';
  }
  else{
    alert('Incorrect Credentials!'); 
    userElement.value = '';
    passwordElement.value = ''; }
};
