<template>
    <div class="sidebar">
      <table class="sidebar-list">
        <th>根据属性过滤</th>
        <tr><td>所有工单</td></tr>
        <tr><td>待处理工单</td></tr>
        <tr><td>处理中工单</td></tr>
        <tr><td>已申请关闭工单</td></tr>
        <tr><td>已确认关闭工单</td></tr>
        <tr><td>我提交的待处理工单</td></tr>
        <tr><td>我提交的处理中工单</td></tr>
        <tr><td>我提交的已申请关闭工单</td></tr>
        <tr><td>我提交的已确认关闭工单</td></tr>
        <tr><td>7天未关闭工单</td></tr>
      </table>
      <div>
        <p class="sidebar-title">根据关键字过滤</p>
        <el-tree class="key-list" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          label: '工单类别',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '工单优先级',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '状态',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        },{
          label: '提交部门',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        },{
          label: '分配给',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        },{
          label: '提交者',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        },{
          label: '标签',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        },{
          label: '工单来源',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        },{
          label: '未关单原因',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        },],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 248px;
        left: 0;
        top: 70px;
        bottom:40px;
        margin: 0 30px;
        padding: 15px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 0px;
        box-shadow: 0px 1px 3px rgba(0,0,0,0.25);
    }
    .sidebar-list {
      /*border: 1px solid red;*/
      width: 100%;
      margin-bottom: 30px;
    }
  table th,.sidebar-title{
      background-color: #13ce66;
      height: 30px;
      line-height: 30px;
      padding-left: 8px;
      text-align: left;
      border-radius: 6px;
      overflow: hidden;
      color: #fff;
    }
    table tr td:first-child {
      padding-top: 8px;
      padding-left: 20px;
      /*border: 1px solid blue;*/
    }
    .key-list {
      border: none;
      padding-left: 10px;
    }
</style>



<!-- <template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '自述'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '表格',
                        subs: [
                            {
                                index: 'basetable',
                                title: '基础表格'
                            },
                            {
                                index: 'vuetable',
                                title: 'Vue表格组件'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '表单',
                        subs: [
                            {
                                index: 'baseform',
                                title: '基本表单'
                            },
                            {
                                index: 'vueeditor',
                                title: '编辑器'
                            },
                            {
                                index: 'markdown',
                                title: 'markdown'
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'basecharts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: 'drag',
                        title: '拖拽'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style> -->
