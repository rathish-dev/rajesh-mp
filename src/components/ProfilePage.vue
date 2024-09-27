<template>
  <div class="container mt-5" style="background-color: #333; color: #fff;">
    <div class="profile-header bg-dark p-4 rounded" style="animation: slideInLeft 1s ease-in-out;">
      <!-- Cover Photo -->


      <!-- Profile Photo and Basic Info -->
      <div class="row align-items-center">
        <div class="col-md-3 text-center">
          <img src="../assets/pro.jpg" class="rounded-circle mb-3" alt="Profile" style="filter: brightness(0.5); animation: slideInLeft 1s ease-in-out 0.5s; width: 110px; height: 110px;" />
        </div>
        <div class="col-md-6" style="animation: slideInUp 1s ease-in-out 1s;">
          <h2 style="color: #fff; animation: fadeIn 1s ease-in-out;">Rajesh</h2>
          <p class="text-muted" style=" color:orange !important;animation: fadeIn 1s ease-in-out 1.5s;">WEB DESINGNER</p>
          <p style="animation: fadeIn 1s ease-in-out 2s;"><i class="fas fa-map-marker-alt"></i> Madurai,Tamilnadu</p>
          <div style="animation: fadeIn 1s ease-in-out 2.5s;">
            <a href="https://twitter.com/rajesh" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://linkedin.com/in/rajesh" target="_blank"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div class="col-md-3 text-right" style="animation: slideInRight 1s ease-in-out 1.5s;">
  <a href="mailto:rajeshsaravan200@gmail.com?subject=Chat&body=Hi Rajesh, I would like to discuss something with you.">
    <!-- Changing button style to btn-success and adding a rounded-pill for a pill-shaped button -->
    <button class="btn btn-success rounded-pill btn-lg" style="animation: fadeIn 1s ease-in-out 3s;">
      Chat
    </button>
  </a>
</div>

      </div>
    </div>

    <!-- Contact Info and Rating -->
    <div class="profile-body mt-4 p-5" style="animation: slideInUp 1s ease-in-out;">
      <div class="row">
        <div class="col-md-4">
          <div class="contact-info bg-dark p-3 rounded" style="animation: slideInLeft 1s ease-in-out 3.5s;">
            <h5 style="color: #fff; animation: fadeIn 1s ease-in-out;">Contact Information</h5>
            <p style="animation: fadeIn 1s ease-in-out 4s;"><i class="fas fa-phone"></i> +79110018830 (Office)</p>
            <p style="animation: fadeIn 1s ease-in-out 4.5s;"><i class="fas fa-phone"></i> +74964714177 (Mobile)</p>
            <p style="animation: fadeIn 1s ease-in-out 5s;"><i class="fas fa-envelope"></i> rajesh.smith@stripe.com</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="rating bg-dark p-3 rounded text-center" style="animation: slideInUp 1s ease-in-out 5.5s;">
            <h5 style="color: #fff; animation: fadeIn 1s ease-in-out;">About Me</h5>
            <p style="animation: fadeIn 1s ease-in-out;">A web designer with a passion for creating visually appealing, user-friendly websites. Proficient in HTML, CSS, JavaScript, Vue.js, and Adobe Creative Suite. Experienced in responsive design, UI design, and front-end development. Strong understanding of web development principles and best practices. Skilled in creating wireframes, prototypes, and high-fidelity designs. Proficient in using version control systems such as Git. Knowledge of web accessibility guidelines and best practices. Ability to work independently and collaboratively as part of a team.</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="project-list bg-dark p-3 rounded text-center" style="animation: slideInRight 1s ease-in-out 9s;">
            <h5 style="color: #fff; animation: fadeIn 1s ease-in-out;">Projects</h5>
            <ul style="list-style: none; text-align: left;">
              <li style="animation: fadeIn 1s ease-in-out; border-bottom: 1px solid #333; padding-bottom: 10px;">
                <i class="fas fa-dot-circle mr-2"></i>College Website
              </li>
              <li style="animation: fadeIn 1s ease-in-out 1.5s; border-bottom: 1px solid #333; padding-bottom: 10px;">
                <i class="fas fa-dot-circle mr-2"></i>Shop website
              </li>
              <li style="animation: fadeIn 1s ease-in-out 2s; border-bottom: 1px solid #333; padding-bottom: 10px;">
                <i class="fas fa-dot-circle mr-2"></i>Digital Marketing
              </li>
              <li style="animation: fadeIn 1s ease-in-out 2.5s; border-bottom: 1px solid #333; padding-bottom: 10px;">
                <i class="fas fa-dot-circle mr-2"></i>Railnet projects
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Introduction Video -->
   
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style scoped>
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.cover-photo img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  filter: brightness(0.5);
}

.rating .stars i {
  font-size: 20px;
}
</style>
