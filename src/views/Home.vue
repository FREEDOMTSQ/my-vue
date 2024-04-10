<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div class="user">
            <img class="userImg" src="../assets/logo.png" alt="">
            <div class="userInfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2024-3-1</span></p>
            <p>上次登录地点：<span>上海</span></p>
          </div>
        </el-card>
        <el-card shadow="hover" style="margin-top:20px;height: 460px">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              v-for="(val,key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val"/>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding: 0}">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
            <div class="detail">
              <p class="price">￥{{item.value}}</p>
              <p class="des">{{item.name}}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height:280px">
          <div ref="echart1" style="height:280px"></div>
        </el-card>
        <div class="graph">
          <el-card style="height:260px">
            <div ref="echart2" style="height:260px"></div>
          </el-card>
          <el-card style="height:260px">
            <div ref="echart3" style="height:240px"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {getData} from '../api'
import * as echarts from 'echarts'
export default {
  data() {
    return { 
      tableData:[],
      tableLabel:{
        name:'课程',
        todayBuy:'今日购买',
        monthBuy:'本月购买',
        totalBuy:'总购买'
      },
      orderData:{},
      userData:[],
      videoData:[],
      countData:[
        {
          name:'今日支付订单',
          value:1234,
          icon:'success',
          color:'#2ec7c9'
        },
        {
          name:'今日收藏订单',
          value:210,
          icon:'star-on',
          color:'#ffb980'
        },
        {
          name:'今日未支付订单',
          value:1234,
          icon:'s-goods',
          color:'#5ab1ef'
        },
        {
          name:'本月支付订单',
          value:1234,
          icon:'success',
          color:'#2ec7c9'
        },
        {
          name:'本月收藏订单',
          value:210,
          icon:'star-on',
          color:'#ffb980'
        },
        {
          name:'本月未支付订单',
          value:1234,
          icon:'s-goods',
          color:'#5ab1ef'
        }
      ]
    }
  },
  mounted(){
    getData().then( (data) => {
      console.log(data);
      let {tableData,orderData,userData,videoData} = data.data.data
      this.tableData = tableData
      this.orderData = orderData
      this.userData = userData
      this.videoData = videoData
      this.initEchart1()
      this.initEchart2()
      this.initEchart3()
      
    })
  },
  methods:{
    initEchart1(){
      //基于准备好的dom，初始化echarts实例
      const echart1 = echarts.init(this.$refs.echart1)
      //指定图表的配置项和数据
      const legend1 = Object.keys(this.orderData.data[0])
      const seriesData1 = []
      legend1.forEach(key => {
        seriesData1.push({
          name: key,
          data:this.orderData.data.map(item => item[key]),
          type:'line'
        })
      })
      let echart1Option = {
        xAxis: {
          data: this.orderData.date
        },
        legend: {
          data: legend1
        },
        yAxis:{},
        series:seriesData1
      }
      echart1.setOption(echart1Option)
    },
    initEchart2(){
      //基于准备好的dom，初始化echarts实例
      const echart2 = echarts.init(this.$refs.echart2)
      //指定图表的配置项和数据
      const xAxis2 = this.userData.map(item => item.date)
      let echart2Option = {
        xAxis: {
          data: xAxis2
        },
        legend: {
          data: ['新增用户','活跃用户']
        },
        tooltip:{
          show:true
        },
        yAxis:{},
        series:[
          {
            name:'新增用户',
            data:this.userData.map(item => item.new),
            type:'bar'
          },
          {
            name:'活跃用户',
            data:this.userData.map(item => item.active),
            type:'bar'
          }
        ],
        color:[ '#73c0de',  '#ea7ccc']
      }
      echart2.setOption(echart2Option)
    },
    initEchart3(){
      const echart3 = echarts.init(this.$refs.echart3)
      let echart3Option = {
        legend: {
          data: ['新增用户','活跃用户']
        },
        tooltip:{
          show:true
        },
        series:{
          data:this.videoData,
          type:'pie'
        }
      }
      echart3.setOption(echart3Option)
    }
  }
}
</script>
<style lang="less" scoped>
.user{
  display: flex;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom:20px;

  img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .userInfo{
    .name{
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access{
      color:#999;
    }
  }
}
.login-info{
  p{
    font-size: 14px;
    color: #999;
    line-height: 28px;

    span{
      color: #666;
      margin-left: 50px;
    }
  }
}
.num{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;

  .icon{
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
    font-size: 30px;
  }
  .detail{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price{
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
    }
    .des{
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  .el-card{
    width: 48%;
  }
}
  
</style>