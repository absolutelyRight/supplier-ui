<template>
    <div>
        <textarea :id= "Id"></textarea>
    </div>
</template>
<script>
    import '../../static/langs/zh_CN.js'
    export default {
        data () {
            const Id = Date.now()
            return {
                Id: Id,
                Editor: null,
                DefaultConfig: {}
            }
        },
        props: {
            value: {
                default: '',
                type: String
            },
            config: {
                type: Object,
                default: () => {
                    return {
                        theme: 'modern',
                        height: 300
                    }
                }
            }
        },
        mounted () {
            this.init()
        },
        beforeDestroy () {
            // 销毁tinymce
            this.$emit('on-destroy')
            window.tinymce.remove(`$#{this.Id}`)
        },
        methods: {
            init () {
                const self = this
                this.Editor = window.tinymce.init({
                    // 默认配置
                    ...this.DefaultConfig,

                    // prop内传入的的config
                    ...this.config,

                    // 挂载的DOM对象
                    selector: `#${this.Id}`,

                    setup: (editor) => {
                        // 抛出 'on-ready' 事件钩子
                        editor.on(
                            'init', () => {
                                self.loading = false
                                self.$emit('on-ready')
                                editor.setContent(self.value)
                            }
                        )
                        // 抛出 'input' 事件钩子，同步value数据
                        editor.on(
                            'input change undo redo', () => {
                                self.$emit('input', editor.getContent())
                            }
                        )
                    }
                })
            }
        }
    }
</script>