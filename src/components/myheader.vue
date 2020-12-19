<template>
    <div class="header-container">
            <router-link to="/" exact active-class="header--link--active" class="header-link header-home">Home</router-link>
        <nav>
            <router-link to="/HowToUse" exact active-class="header--link--active" class="header-link">HowToUse</router-link>
            <router-link to="/Schedule" exact active-class="header--link--active" class="header-link">Schedule</router-link>
        </nav>
    </div>
</template>

<style scoped>
    .header-container {
        background-color: rgba(70, 200, 200, 0.9);
        padding: 10px 0;
        display: flex;
        position: fixed;
        justify-content: space-between;
        width: 100%;
        height: 50px;
    }
    
    .header-link {
        width: 100px;
        padding: 0 20px;
        color: rgb(255, 255, 255);
        text-decoration: none;
    }

    .header--link--active{
        border-bottom: 1px solid rgb(255, 100, 247);
    }

    .header-home {
        font-size: 200%;
        margin-left: 20px;
    }

    nav {
        font-size: 150%;
        padding-top:10px;
    }
</style>