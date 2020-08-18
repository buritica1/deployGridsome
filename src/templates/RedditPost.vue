<template>
    <Layout>
        <h1>{{ $page.redditPost.title }}</h1>
        <img :src="$page.redditPost.fields.img" alt="img">
    </Layout>
</template>

<page-query>
query RedditPost ( $id: ID! ) {
    redditPost: redditPost ( id: $id ) {
        title
        path
        fields {
            thumbnail
            img
        }
    }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.redditPost.title
        }
    }
}
</script>