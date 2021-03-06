<template>
  <div class="tags-nav">
    <!--<ul v-show="visible" :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}" class="contextmenu">-->
    <ul v-show="visible" class="contextmenu">
      <li v-for="(item, key) of menuList" @click="handleTagsOption(key)" :key="key">{{item}}</li>
    </ul>
    <div class="btn-con left-btn">
      <Button type="text" @click="handleScroll(240)">
        <Icon :size="18" type="ios-arrow-back"/>
      </Button>
    </div>
    <div class="btn-con right-btn">
      <Button type="text" @click="handleScroll(-240)">
        <Icon :size="18" type="ios-arrow-forward"/>
      </Button>
    </div>
    <div class="scroll-outer" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll"
         style="margin-left: 0px;">
      <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
        <transition-group name="taglist-moving-animation">
          <Tag
            type="dot"
            v-for="(item, index) in list"
            ref="tagsPageOpened"
            :key="`tag-nav-${index}`"
            :name="item.name"
            @on-close="handleClose(item)"
            @click.native="handleClick(item)"
            :closable="item.name !== 'home'"
            :color="isCurrentTag(item) ? 'primary' : 'default'"
            @contextmenu.prevent.native="contextMenu(item, $event)"
          >{{ showTitleInside(item) }}
          </Tag>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
  import {showTitle, routeEqual} from '@/libs/util'

  export default {
    name: 'TagsNav',
    props: {
      value: Object,
      list: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        tagBodyLeft: 0,
        rightOffset: 40,
        outerPadding: 4,
        contextMenuLeft: 0,
        contextMenuTop: 0,
        visible: true,
        current: {},
        menuList: {
          others: '关闭其他',
          // all: '关闭所有'
        }
      }
    },
    computed: {
      currentRouteObj () {
        const {name, params, query} = this.value
        return {name, params, query}
      }
    },
    methods: {
      handlescroll (e) {
        var type = e.type
        let delta = 0
        if (type === 'DOMMouseScroll' || type === 'mousewheel') {
          delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
        }
        this.handleScroll(delta)
      },
      handleScroll (offset) {
        const outerWidth = this.$refs.scrollOuter.offsetWidth
        const bodyWidth = this.$refs.scrollBody.offsetWidth
        if (offset > 0) {
          this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
        } else {
          if (outerWidth < bodyWidth) {
            if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
              this.tagBodyLeft = this.tagBodyLeft
            } else {
              this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
            }
          } else {
            this.tagBodyLeft = 0
          }
        }
      },
      handleTagsOption (type) {
        if (type === 'all') {
          // 关闭所有，除了home
          let res = this.list.filter(item => item.name === 'home')
          this.$emit('on-close', res, 'all')
        } else if (type === 'others') {
          // 关闭除当前页和home页的其他页
          let res = this.list.filter(item => routeEqual(this.currentRouteObj, item) || item.name === 'home')
          this.$emit('on-close', res, 'others', this.currentRouteObj)
          setTimeout(() => {
            this.getTagElementByName(this.currentRouteObj.name)
          }, 100)
        }
      },
      handleClose (current) {
        // this.current = current
        let res = this.list.filter(item => !routeEqual(current, item))
        this.$emit('on-close', res, undefined, current)
      },
      handleClick (item) {
        this.$emit('input', item)
      },
      showTitleInside (item) {
        return showTitle(item, this)
      },
      isCurrentTag (item) {
        return routeEqual(this.currentRouteObj, item)
      },
      moveToView (tag) {
        const outerWidth = this.$refs.scrollOuter.offsetWidth
        const bodyWidth = this.$refs.scrollBody.offsetWidth
        if (bodyWidth < outerWidth) {
          this.tagBodyLeft = 0
        } else if (tag.offsetLeft < -this.tagBodyLeft) {
          // 标签在可视区域左侧
          this.tagBodyLeft = -tag.offsetLeft + this.outerPadding
        } else if (tag.offsetLeft > -this.tagBodyLeft && tag.offsetLeft + tag.offsetWidth < -this.tagBodyLeft + outerWidth) {
          // 标签在可视区域
          this.tagBodyLeft = Math.min(0, outerWidth - tag.offsetWidth - tag.offsetLeft - this.outerPadding)
        } else {
          // 标签在可视区域右侧
          this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - this.outerPadding - tag.offsetWidth))
        }
      },
      getTagElementByName (name) {
        this.$nextTick(() => {
          this.refsTag = this.$refs.tagsPageOpened
          this.refsTag.forEach((item, index) => {
            if (name === item.name) {
              let tag = this.refsTag[index].$el
              this.moveToView(tag)
            }
          })
        })
      },
      contextMenu (item, e) {
        if (item.name === 'home') {
          return
        }
        this.visible = true
        const offsetLeft = this.$el.getBoundingClientRect().left
        this.contextMenuLeft = e.clientX - offsetLeft + 10
        this.contextMenuTop = e.clientY - 64
      },
      closeMenu () {
        this.visible = false
      }
    },
    watch: {
      '$route' (to) {
        this.getTagElementByName(to.name)
      },
      list () {
        for (let listItem of this.list) {
          let {path} = listItem
          if (path) {
            if (path.replace(/[^0-9]/ig, '')) {
              let res = this.list.filter(item => !routeEqual(listItem, item))
              this.$emit('on-close', res, undefined, listItem)
            }
          }
        }
      },
      visible (value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.getTagElementByName(this.$route.name)
      }, 200)
    }
  }
</script>

<style lang="less">
  @import './tags-nav.less';

  .tags-nav {
    background: #F0F0F0;
    width: 94%;
    margin-left: 6%;
  }
  .tags-nav .contextmenu {
    border: 1px solid #e8eaec !important;
    color: #515a6e !important;
    background: #fff !important;
    left: -72px;
    top: 4px;
    &:hover {
      background: #eee;
    }
  }
  .tags-nav .contextmenu li {
    padding: 0;
    padding: 0px 6px;
  }
</style>
