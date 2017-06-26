<template>
	<div class="container">
		<div style="display:inline">
			<div class="left-main">
				<el-input v-model="input" placeholder="请填写标题"></el-input>
				<table class="table-list">
					<tr>
						<td>
							<p>*工单类别</p>
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
		  				</el-select>		
						</td>
						<td>
							<p>*工单优先级</p>
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
		  				</el-select>		
						</td>
					</tr>
					<tr>
						<td>
							<p>*发布部门</p>
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
		  				</el-select>		
						</td>
						<td>
							<p>*分配给</p>
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
		  				</el-select>		
						</td>
					</tr>
					<tr>
						<td>
							<p>*订单号</p>
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
		  				</el-select>		
						</td>
						<td>
							<p>*所属城市</p>
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
		  				</el-select>		
						</td>
					</tr>
					<tr>
						<td>
							<p>*工单类别</p>
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
		  				</el-select>		
						</td>
						<td>
							<p>*工单类别</p>
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
		  				</el-select>		
						</td>
					</tr>
				</table>
				<table style="width:90%;background-color:#ddd;">
					<tr>
		              <th width="30%">衣物名称</th>
		              <th width="20%">衣物颜色</th>
		              <th width="20%">衣物品牌</th>
		              <th width="30%">衣物备注</th>
		            </tr>
				</table>
 			</div>
			<div class="right-tags">
				<p style="color: #08c;font-weight: bold;">点击事件添加标签</p>
				<table class="table-tags">
					<tr><td><el-button style="border:none">价格调整</el-button></td></tr>
					<tr><td><el-button style="border:none">活动问题（返利、投诉等）</el-button></td></tr>
					<tr><td><el-button style="border:none">预约送件时间</el-button></td></tr>
					<tr><td><el-button style="border:none">银联联合活动</el-button></td></tr>
					<tr><td><el-button style="border:none">信用白条活动</el-button></td></tr>
					<tr><td><el-button style="border:none">洗衣质量</el-button></td></tr>
				</table>
			</div>
		</div>
	

	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          isContinueNew: false
        },
				input: '',
				options: [{
	          value: '选项1',
	          label: '咨询'
	        }, {
	          value: '选项2',
	          label: '投诉'
	        }, {
	          value: '选项3',
	          label: '建议意见'
	        },{
	          value: '选项4',
	          label: '其他'
	        },{
	          value: '选项3',
	          label: '异常工单'
	        }],
	        value: ''
			}
		}
	}
</script>

<style scoped>
	.container {
		border: 1px solid #ddd;
	    background: none repeat scroll 0 0 #fff;
	    position: absolute;
	    left: 220px;
	    right: 220px;
	    top: 70px;
	    bottom:20px;
	    width: auto;
	    padding:10px;
	    box-sizing: border-box;
	    overflow-y: scroll;
	    border: 1px solid #ddd;
	}
	.left-main {
		width: 64%;
		float: left;
	}
	.right-tags {
		width: 33%;
		float: left;
		/*border: 1px solid red;*/
		text-align: center;
		height: 15px;
		line-height: 15px;
		padding-left: 5px;
		padding-bottom: 10px;
		/*border-bottom:1px solid #ddd;*/
	}
	.table-list {
		/*border:1px solid red;*/
		width: 90%;
		text-align: center;
		margin-top: 30px;
	}
	.table-list p {
		float: left;
		margin-left: 30px;
		margin-bottom: 10px;
	}
	.table-list tr td{
		width: 50%;
		/*border:1px solid blue;*/
		padding-bottom: 30px;
	}
	.table-tags {
		/*border:1px solid red;*/
		width: 90%;
		margin-left: 18px;
		text-align: center;
		margin-top: 30px;
	}
	.table-tags tr td {
		border:1px solid #ddd;
		border-radius: 3px;
		font-size: small;
	}
</style>