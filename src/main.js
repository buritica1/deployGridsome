import DefaultLayout from '~/layouts/Default.vue'

// bootstrap
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//global stylesheet
import '~/assets/style/styles.scss'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  head.link.push({
    rel: 'stylesheet',
    href: encodeURI('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap')
  })
}
