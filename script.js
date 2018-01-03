AOS.init();

new Vue({
  el: '#app',
  data: {
    projects: []
  },
  methods: {
    fetch() {
      axios.get('projects.json')
        .then((response) => {
          console.log(response);
          this.projects = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mounted () {
    this.fetch();
  }
});