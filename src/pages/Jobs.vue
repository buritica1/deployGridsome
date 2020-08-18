<template>
  <Layout>
    <h1>Welcome Cafeto Jobs :)</h1>
  <div>
    <b-form-group label="Using options array:">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Using sub-components:">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <div>Selected: <strong>{{ selected }}</strong></div>
  </div>
    <ul class="post-list">
        <li v-for="{ node } in $page.allJobPost.edges" :key="node.id">
            <div>
                <h2 v-html="node.title" />
                <p>{{ node.fields.country }}</p>
                <g-link :to="node.path">
                Read More
                </g-link>
            </div>
        </li>
    </ul>
  </Layout>
</template>

<page-query>
query jobs {
  allJobPost {
    totalCount
    pageInfo {
      totalPages
    }
    edges {
  		node {
        id
        title
        path
        fields {
          link
          country
          app
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Jobs Cafeto'
  },
  data() {
    return {
      selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ]
    }
  }
}
</script>
