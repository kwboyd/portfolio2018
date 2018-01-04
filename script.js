AOS.init();

new Vue({
  el: '#app',
  data: {
    loading: true,
    domLoaded: false,
    projects: []
  },
  methods: {
    fetch() {
      axios.get('projects.json')
        .then((response) => {
          console.log(response);
          this.projects = response.data;
          this.finishLoading();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    finishLoading() {
      if (this.domLoaded && this.projects.length > 0) {
        setTimeout(() => {
          this.loading = false;          
        }, 100)
      }
    }
  },
  mounted () {
    this.fetch();
    window.addEventListener('load', () => {
      this.domLoaded = true;
      this.finishLoading();
    })
  }
});