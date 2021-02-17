<template>
  <div id="footer-container">
    <nav>
      <router-link
        to="/"
        exact
        active-class="footer--link--active"
        class="footer-link"
      >
        Home
      </router-link>
      <router-link
        to="/HowToUse"
        exact
        active-class="footer--link--active"
        class="footer-link"
      >
        HowToUse
      </router-link>
      <router-link
        to="/Schedule"
        exact
        active-class="footer--link--active"
        class="footer-link footer-schedule"
      >
        Schedule
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
    #footer-container {
        width: 100%;
        background-color: rgb(116, 218, 218);
        line-height: 40px;
        text-align: center;
        margin-bottom: 30px;
    }
    .footer-link {
        display: inline-block;
        width: 10%;
        text-decoration: none;
        color: rgb(255, 255, 255);
        border-left: 1px solid white;
    }
    .footer-schedule {
        border-right: 1px solid white;
    }
    .footer-link:hover {
        background-color: rgb(169, 243, 243);
    }
    .footer--link--active {
        color: rgb(255, 196, 0);
    }
</style>