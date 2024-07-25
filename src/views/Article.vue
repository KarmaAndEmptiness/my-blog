<template>
    <div class="d-md-flex d-block row">
        <div class="content col-12 col-md-9" value="" v-html="htmlContent"></div>
        <div class="directory d-none d-md-block col-md-3">
            <h3 align="center">目录</h3>
            <div class="toc"></div>
        </div>
    </div>
</template>
<script>
import 'tocbot/src/scss/tocbot.scss';
import tocbot from 'tocbot'
export default {
    name: 'Article',
    data() {
        return {
            markdownContent: '',
            htmlContent: ''
        }
    },

    methods: {
        renderMarkdown() {
            this.htmlContent = this.$marked(this.markdownContent)
        },
        initTocbot() {
            this.$nextTick(() => {
                tocbot.init({
                    tocSelector: '.toc',
                    contentSelector: '.content',
                    headingSelector: 'h1,h2,h3',
                    headingsOffset: 40,
                    scrollSmoothOffset: -40
                })
            })
        }
    },
    created() {
        this.$store.dispatch('getArticle', this.$route.params.id).then(() => {
            this.markdownContent = this.$store.state.article.article[0].content
            this.renderMarkdown();
            this.initTocbot();
        })
    }
}
</script>
