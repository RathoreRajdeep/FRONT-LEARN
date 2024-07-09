document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const offsetHeight = 500; // Adjust this value as needed

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior of anchor tag
            const targetId = this.getAttribute('href').substring(1); // Get target section id

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden'); // Show the target section
                } else {
                    section.classList.add('hidden'); // Hide other sections
                }
            });

            // Scroll to the top of the target section with an offset
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - offsetHeight; // Adjusted top position
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});




// Updated JavaScript code


  window.addEventListener('scroll', function() {
    var jsUpper = document.querySelector('.js-upper');
    var scrollPosition = window.scrollY;
    var sidebar = document.querySelector('.js-sidebar');

    if (scrollPosition > 50) { // Adjust this value based on when you want the shrink effect to occur
      jsUpper.classList.add('shrink');
      sidebar.style.display = 'flex';
    } else {
      jsUpper.classList.remove('shrink');
      sidebar.style.display = 'none';
    }
  });
  
  window.addEventListener('scroll', function() {
    var htmlUpper = document.querySelector('.html-upper');
    var scrollPosition = window.scrollY;
    var sidebar = document.querySelector('.html-sidebar');
  
    if (scrollPosition > 50) { // Adjust this value based on when you want the shrink effect to occur
      htmlUpper.classList.add('shrink');
      sidebar.style.display = 'flex';
    } else {
      htmlUpper.classList.remove('shrink');
      sidebar.style.display = 'none';
    }
  });

  window.addEventListener('scroll', function() {
    var cssUpper = document.querySelector('.css-upper');
    var scrollPosition = window.scrollY;
    var sidebar = document.querySelector('.css-sidebar');

    if (scrollPosition > 50) { // Adjust this value based on when you want the shrink effect to occur
      cssUpper.classList.add('shrink');
      sidebar.style.display = 'flex';
    } else {
      cssUpper.classList.remove('shrink');
      sidebar.style.display = 'none';
    }
  });

  function copyToClipboard(codeId, button) {
    var codeToCopy = document.getElementById(codeId).textContent.trim();

    navigator.clipboard.writeText(codeToCopy).then(function() {
        var message = button.querySelector('.copied-message');
        var icon = button.querySelector('.icon-copy-button');

        message.style.display = 'inline'; // Display the "Copied" message
        icon.style.backgroundColor = 'grey'; // Change button background color
        icon.style.border = '2px solid rgb(50, 45, 45)'; // Add circular border
        setTimeout(function() {
            message.style.display = 'none'; // Hide the "Copied" message after 5 seconds
            icon.style.backgroundColor = 'transparent'; // Reset button background color
            icon.style.border = '2px solid transparent'; // Remove circular border
        button.style.borderRadius = '5px';
        }, 1000);
    }).catch(function(error) {
        console.error("Error copying code: ", error);
    });
}

function changeText() {
  var document_name = document.getElementById("english-name");
  document_name.innerHTML = 'राजदीप<img height="40px" width="40px" src="./Images/love.gif" alt="">';
}
function changeTextAgain(){
  var document_name = document.getElementById("english-name");
  document_name.innerHTML = 'Rajdeep ';
}

function changeTextAboutUs() {
  var document_name = document.getElementById("english-name-about-us");
  document_name.innerHTML = 'राजदीप<img height="40px" width="40px" src="./Images/love.gif" alt="">';
}
function changeTextAgainAboutUs(){
  var document_name = document.getElementById("english-name-about-us");
  document_name.innerHTML = 'Rajdeep ';
}

function changeTextHome() {
  var document_name = document.getElementById("english-name-home");
  document_name.innerHTML = 'राजदीप<img height="40px" width="40px" src="./Images/love.gif" alt="">';
}
function changeTextAgainHome(){
  var document_name = document.getElementById("english-name-home");
  document_name.innerHTML = 'Rajdeep ';
}



