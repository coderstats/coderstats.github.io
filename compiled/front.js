Vue.component('user-link',{props:['login','avatar_url'],template:`
    <div class="col-1-xl col-2-l col-4-m col-12">
        <a v-bind:href="'/github#' + login">
            <img :src="avatar_url" :alt="login"/><br>
            <i class="fa fa-user" aria-hidden="true"></i> {{ login }}
        </a>
    </div>
    `}),new Vue({el:'#active-users',data:{events:null},computed:{users:function(){return d3.nest().key((a)=>a.actor.login).entries(this.events.filter((a)=>'PushEvent'===a.type)).sort((c,a)=>a.values.length-c.values.length)}},created:function(){this.$http.get('https://api.github.com/events').then((a)=>{this.events=a.body})}}),new Vue({el:'#followed-users',data:{users:[]},created:function(){this.$http.get('/data/users.json').then((a)=>{this.users=a.body.items})}}),new Vue({el:'#most-repos-users',data:{users:[]},created:function(){this.$http.get('/data/most-repos-users.json').then((a)=>{this.users=a.body.items})}}),new Vue({el:'#earliest-users',data:{users:[]},created:function(){this.$http.get('/data/earliest-users.json').then((a)=>{this.users=a.body.items})}});