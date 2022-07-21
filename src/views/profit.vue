<template>
  <div class="c-pt64">
    <div class="c-hh456 c-linebg-xorange c-ph24 c-p">
      <div class="c-hh440 c-pt72 c-ww592 c-bg-white c-pa c-p-t60 c-p-tl50 c-translate-x-50 c-br10 c-box-shadow12">
        <div class="c-hh160 c-flex-column c-justify-sb c-aligni-center">
          <div class="c-fs24 c-fc-xblack c-fw400">账户余额（元）</div>
          <div class="c-fs56 c-fc-xblack c-fw500">{{ profit.balance }}</div>
          <div class="c-fs20 c-fc-sblack">其中不可提现金额{{ profit.unwithdrawal }}元</div>
        </div>
        <div class="c-hh80 c-mt80 c-flex-row c-justify-sa c-alignc-center">
          <div class="c-flex-column c-justify-sb c-aligni-center">
            <div class="c-fs24 c-fc-gray">累计收入</div>
            <div class="c-fs28 c-fc-xblack">{{ profit.accumulatedIncome }}</div>
          </div>
          <div class="c-flex-column c-justify-sb c-aligni-center">
            <div class="c-fs24 c-fc-gray">今日收入</div>
            <div class="c-fs28 c-fc-xblack">{{ profit.todayIncome }}</div>
          </div>
          <div class="c-flex-column c-justify-sb c-aligni-center">
            <div class="c-fs24 c-fc-gray">本周收入</div>
            <div class="c-fs28 c-fc-xblack">{{ profit.incomeOfWeek }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-pt80 c-bg-white">
      <!-- 提现到银行卡 -->
      <div class="c-bd-b1 c-pv24 c-ph24" @click="goWithdrawal">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">提现到银行卡</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <i class="iconfont c-fs28 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
      <!-- 提现到微信钱包 -->
      <div class="c-bd-b1 c-pv24 c-ph24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">提现到微信钱包</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <i class="iconfont c-fs28 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
      <!-- 添加到银行卡 -->
      <div class="c-bd-b1 c-pv24 c-ph24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">添加到银行卡</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <i class="iconfont c-fs28 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
    </div>
    <!--  -->
    <div class="c-mt12 c-bg-white">
      <!-- 收入明细 -->
      <div class="c-bd-b1 c-pv24 c-ph24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">收入明细</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <i class="iconfont c-fs28 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
      <!-- 提现明细 -->
      <div class="c-bd-b1 c-pv24 c-ph24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">提现明细</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <i class="iconfont c-fs28 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
      <!-- 消费记录 -->
      <div class="c-bd-b1 c-pv24 c-ph24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">消费记录</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <i class="iconfont c-fs28 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
    </div>
  </div>
</template>

<script>
import cell from '../components/cell.vue';
export default {
  name: 'Profit',
  components: { cell },
  data() {
    return {
      profit: {}
    };
  },
  methods: {
    getProfit() {
      this.profit = {
        balance: '800.00',
        unwithdrawal: '200.00',
        accumulatedIncome: '9.00',
        todayIncome: '2.00',
        incomeOfWeek: '2.00'
      };
    },
    goWithdrawal() {
      this.$router.push('/withdrawal');
    }
  },
  created() {
    this.getProfit();
  }
};
</script>

<style></style>
