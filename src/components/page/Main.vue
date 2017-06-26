<template>
    <div class="crumbs">
      <el-button type="primary" size="small" >创建</el-button>
      <el-button type="primary" size="small" >刷新</el-button>
      <el-autocomplete
       class="inline-input search"
       v-model="state2"
       placeholder="关键字或日期（格式：2014-01-01）搜索"
       :trigger-on-focus="false"
       size="small"
     ></el-autocomplete>

     <table class="order-list" border="0" cellspacing="0" cellpadding="0">
       <tr>
         <td class="first-td"></td>
         <td class="second-td">
           <div>
           <span class="title">洗衣清洗进度-15114606522</span>
           <el-button type="primary" class="dispatch" size="mini" >武汉调度</el-button>
           </div>
           <p class="info">订单号：17061185748869	洗鞋	魏先生	18202111574	上海-静安区-上海市静安区 四和花园1940弄1号楼506(非电梯1号楼) 回访差评用户，用户反馈自己的订单清洗周期长，送回慢，联系用户致歉，为用户体验补劵25-10处理，已补，用户认可，请知悉</p>
           <p class="tags">
             <span>异常工单</span>
             <span>未处理</span>
             <span>中</span>
             <span>段晓鑫</span>
             <span>2017-06-22</span>
           </p>
           <p class="tags"><span>0个评价</span></p>
         </td>
       </tr>
     </table>
          <table class="order-list" border="0" cellspacing="0" cellpadding="0">
       <tr>
         <td class="first-td"></td>
         <td class="second-td">
           <div>
           <span class="title">洗衣清洗进度-15114606522</span>
           <el-button type="primary" class="dispatch" size="mini" >武汉调度</el-button>
           </div>
           <p class="info">订单号：17061185748869 洗鞋  魏先生 18202111574 上海-静安区-上海市静安区 四和花园1940弄1号楼506(非电梯1号楼) 回访差评用户，用户反馈自己的订单清洗周期长，送回慢，联系用户致歉，为用户体验补劵25-10处理，已补，用户认可，请知悉</p>
           <p class="tags">
             <span>异常工单</span>
             <span>未处理</span>
             <span>中</span>
             <span>段晓鑫</span>
             <span>2017-06-22</span>
           </p>
           <p class="tags"><span>0个评价</span></p>
         </td>
       </tr>
     </table>
          <table class="order-list" border="0" cellspacing="0" cellpadding="0">
       <tr>
         <td class="first-td"></td>
         <td class="second-td">
           <div>
           <span class="title">洗衣清洗进度-15114606522</span>
           <el-button type="primary" class="dispatch" size="mini" >武汉调度</el-button>
           </div>
           <p class="info">订单号：17061185748869 洗鞋  魏先生 18202111574 上海-静安区-上海市静安区 四和花园1940弄1号楼506(非电梯1号楼) 回访差评用户，用户反馈自己的订单清洗周期长，送回慢，联系用户致歉，为用户体验补劵25-10处理，已补，用户认可，请知悉</p>
           <p class="tags">
             <span>异常工单</span>
             <span>未处理</span>
             <span>中</span>
             <span>段晓鑫</span>
             <span>2017-06-22</span>
           </p>
           <p class="tags"><span>0个评价</span></p>
         </td>
       </tr>
     </table>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
              state2: ''
            }
        }
    }
</script>

<style scoped>
  .search {
    margin-top: 0px;
    float: right;
    width: 280px;
    border-radius: 15px;
  }
  .order-list {
    border-top-left-radius:8px;
    border-bottom-left-radius:8px;
    margin-top: 5px;
    overflow: hidden;
    width: 100%;
    border:none;
    border: 1px solid #ddd;
  }
  .first-td {
    width:10px;
    background-color:#00d1b2;
  }
  .second-td {
    padding: 10px;
  }
  .dispatch {
    float: right;
  }
  .title {
    color: #08c;
    font-weight: bold;
  }
  .second-td p,.second-td p span {
    font-size: small;
    color: #bbb;
  }
  .info {
    margin:8px 0;
  }
  .tags {
    margin: 5px auto;
  }
  .tags span {
    border-radius: 4px;
    background-color: #f0f0f0;
    color: #b8b8b8;
    font-size: small;
    padding: 2px;
    border: 1px solid #ddd;
    min-width: 100px;
    display: inline-block;
    text-align: center;
  }
  .order-list table tr td:first-child {
    -moz-border-radius-topleft: 4px;
    -webkit-border-top-left-radius: 4px;
    border-top-left-radius: 4px;
    -moz-border-radius-bottomleft: 4px;
    -webkit-border-bottom-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #f00;
    border-bottom: 1px solid #ccc;
    width: 100px;
    padding: 0px;
}
</style>
