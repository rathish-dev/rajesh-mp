

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Rajesh's App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>  <!-- Link to Home -->
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">Profile</router-link>  <!-- Link to Profile -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />  <!-- This is where the routed components will be rendered -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
background-image: url("assets/2.png") !important;
}
</style>
