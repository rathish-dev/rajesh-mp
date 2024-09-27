<!-- src/components/HomePage.vue -->
<template>
  <div class="container mt-5 card animate-fade-in">
    <div class="row" style="width: 100%;">
      <div class="col-md-6 order-md-2 img-container animate-slide-in-right">
        <img src="../assets/pro.jpg" class="img-fluid rounded" alt="Rajesh">
      </div>
      <div class="col-md-6 order-md-1 text-container animate-slide-in-left">
        <h1>Rajesh's</h1>
        <p>Hello, my name is Rajesh and I'm a freelance web developer. I have about 5 years of experience in developing web applications using various technologies such as HTML, CSS, JavaScript, Vue.js, Node.js, and Ruby on Rails. I love working with clients to understand their needs and develop solutions that meet their expectations.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.card {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
}

p {
  border-left: 1px solid orange;
  margin: 10px;
  padding: 10px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

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

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-slide-in-left {
  animation: slideInLeft 1s ease-in-out;
}

.animate-slide-in-right {
  animation: slideInRight 1s ease-in-out;
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
