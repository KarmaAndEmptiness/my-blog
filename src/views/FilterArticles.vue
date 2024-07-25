<template>
    <div>
        <article-list :params="$route.params"></article-list>
    </div>
</template>
<script>
export default {
    name: 'FilterArticles',
    components: {
        ArticleList: () => ({ component: import('@/components/ArticleList.vue') })
    }
}
</script>
