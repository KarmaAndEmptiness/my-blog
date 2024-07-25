<template>
    <div>
        <article-list></article-list>
    </div>
</template>
<script>
export default {
    name: 'Articles',
    components: {
        ArticleList: () => ({ component: import('@/components/ArticleList.vue') })
    },
}
</script>
<style lang="scss" scoped></style>
