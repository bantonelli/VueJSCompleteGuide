<template>
    <ul class="nav nav-pills">
        <router-link 
            to="/" 
            active-class="active" 
            tag="li" 
            exact>
            <a>Home</a>
        </router-link>
        <router-link 
            to="/user" 
            active-class="active" 
            tag="li" 
            exact>
            <a>User</a>            
        </router-link>
        <!--<router-link 
            to="/user/2" 
            active-class="active" 
            tag="li" 
            exact>
            <a>User 2</a>            
        </router-link>-->
    </ul>
</template>