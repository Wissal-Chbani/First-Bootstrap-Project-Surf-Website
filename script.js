const navEl = document.querySelector('.navbar');

        window.addEventListener('scroll', ()=>{
            if (window.scrollY >= 56){
                navEl.classList.add('navbar-scrolled')
            } else if (window.scrollY <56){
                navEl.classList.remove('navbar-scrolled');
            }
        })




// Add event listener to the button
document.getElementById('signupButton').addEventListener('click', function() {
    // Redirect to the sign-up form page
    window.location.href = 'signup.html'; 
  });

  // Add event listener to the button
  document.getElementById('loginButton').addEventListener('click', function() {
      // Redirect to the sign-up form page
      window.location.href = 'login.html'; 
    });