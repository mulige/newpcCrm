<template>
    <div id="dateContainer">
      <div class="nowTime">
        <button class="preMon">上个月</button>
        <div class="thisMon">
            <span v-text="ynow"></span>/
          <span v-text="mnow+1"></span>
        </div>
        <button class="nextMon">下个月</button>
      </div>
      <table border="1" id="table">

      </table>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        newDate: '',//当前的日期的信息
        ynow: '',//当前的年数
        mnow: '',//当前的月份
        dnow: '',//当前的天数
        firstDay: '',//第一天
        firstnow: '',//当前的星期
        m_days: [],
        tr_str: '',
      }
    },
    methods: {
      getDaysInfo() {
        var _this = this;
        this.newDate = new Date();
        this.ynow = this.newDate.getFullYear();
        this.mnow=this.newDate.getMonth(); //月份
        this.dnow=this.newDate.getDate(); //今日日期
        this.firstDay = new Date(this.ynow,this.mnow,1);
        this.firstnow=this.firstDay.getDay();
        this.m_days = [31,28+this.is_leap(this.ynow),31,30,31,30,31,31,30,31,30,31];
        this.tr_str = Math.ceil((_this.m_days[this.mnow] + this.firstnow)/7);
        console.log(this.firstDay)
        this.drawTable();
      },
      is_leap(year) {
        return (year%100==0?(year%400==0?1:0):(year%4==0?1:0));
      },
      drawTable() {
        var _this = this;
        var str = `
        <tr>
          <td>星期日</td>
          <td>星期一</td>
          <td>星期二</td>
          <td>星期三</td>
          <td>星期四</td>
          <td>星期五</td>
          <td>星期六</td>
        </tr>`;
        var idx = '',date_str = '';
        for(var i = 0; i< _this.tr_str; i++) {
          str+='<tr>';
          for(var k = 0; k < 7; k++) {
            idx = i*7+k;
            date_str=idx-_this.firstnow+1;
            (date_str<=0 || date_str>this.m_days[this.mnow]) ? date_str="&nbsp;" : date_str=idx-_this.firstnow+1;
            date_str==_this.dnow?str+='<td class="thisDay">'+date_str+'</td>':str+='<td >'+date_str+'</td>';
          }
          str+='</tr>';
        }
        var table = document.getElementById('table');
        table.innerHTML = str;
      }
    },
    mounted() {
      this.getDaysInfo()
    }
  }
</script>
<style lang="scss">
  #dateContainer {
    width: 100%;
    .nowTime {
      display: flex;
      justify-content: center;
      height: 30px;
      line-height: 30px;
      .thisMon {
        height: 30px;
        line-height: 30px;
        span {

        }
      }
    }
    table {
      width: 100%;
      border: 1px solid #333;
      tr {
        width: 100%;
        border: 1px solid #333;
        border-right: none;
        border-left: none;
        display: flex;
        justify-content: space-around;
        td {
            flex: 1;
          border-right: 1px solid #333;
          text-align: center;
        }
        tr:last-child {
          border: none;
        }
        td.thisDay {
          background-color: red;
        }
      }
    }
  }
</style>
