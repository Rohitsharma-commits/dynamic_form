<template>
    <div class="card">
        <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="input-group mb-3">
              <input type="text" class="form-control " v-model="searchT" placeholder="Search By Title">
            </div>
          </div>
        </div>

            <h5 class="card-title">User List</h5>
           <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, key) in UserList" :key="key">
                    <td>{{user.id}}</td>
                    <td>{{user.title}}</td>
                    <td>{{user.completed ? 'Completed' : 'Not-Completed'}}</td>
                    </tr>
                </tbody>
                </table>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
   computed: {
    UserList(){
      if (this.$store.getters.User) {
        return this.$store.getters.User.filter(d => {
          return d.title.toLowerCase().includes(this.searchT ? this.searchT.toLowerCase() : '');
        })
      }
    },
   },
   data() {
    return {
       searchT: null,
    }
   },
   created() {
    this.getuserDetails()
   },
   methods: {
    getuserDetails() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          this.$store.dispatch('setUser', res.data)
        })
        .catch(err=> {
          console.log(err);
        })
    },
   }
}
</script>

<style scoped>
.logout_class {
   background-color: transparent !important;
   color: black !important;
   border-color: transparent !important;
}
</style>