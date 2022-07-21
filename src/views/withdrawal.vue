<template>
  <div class="c-h c-bg-lwhite c-pt64">
    <div class="c-ph24 c-bg-white">
      <div class="c-pt40">
        <div class="c-fs24 c-fc-xblack">账户余额（元）：{{ details.balance }}</div>
      </div>
      <div class="c-pt40 c-flex-row c-justify-sb c-aligni-center">
        <div class="c-ww290 c-ph24 c-pv24 c-hh144 c-br8 c-flex-row c-aligni-center" :class="incomeType === 1 ? 'c-bd2-orange c-fc-sorange' : 'c-bd2-f6 c-fc-gray'" @click="incomeType = 1">
          <div class="iconfont c-fs30 c-pr24">&#xe7d8;</div>
          <div class="c-h c-flex-1 c-flex-column c-justify-sb">
            <div class="c-fs24">知识收入(元)</div>
            <div class="c-fs24">{{ details.knowledgeIncome }}</div>
          </div>
        </div>
        <div class="c-ww286 c-hh144 c-ph24 c-pv24 c-br8 c-flex-row c-aligni-center" :class="incomeType === 2 ? 'c-bd2-orange c-fc-sorange' : 'c-bd2-f6 c-fc-gray'" @click="incomeType = 2">
          <div class="iconfont c-fs30 c-pr24">&#xe7d8;</div>
          <div class="c-h c-flex-1 c-flex-column c-justify-sb">
            <div class="c-fs24">分销收入(元)</div>
            <div class="c-fs24">{{ details.distributionIncome }}</div>
          </div>
        </div>
      </div>
      <div class="c-pb24 c-pt60 c-bd-b1 c-flex-row c-justify-sb c-aligni-center">
        <input class="c-bd0 c-fs32 c-fw400" type="text" placeholder="请输入提现金额" />
        <div class="c-fc-sorange c-fs24">全部</div>
      </div>
      <div class="c-pv24 c-bd-b1 c-fs20 c-flex-row c-justify-sb c-aligni-center">
        <div>有{{ details.unwithdrawal }}元不可提现</div>
        <div class="c-fc-sorange">查看原因</div>
      </div>
      <div class="c-pv24 c-bd-b1 c-fs20 c-flex-row c-aligni-center">
        <div class="c-w100">
          <span>收取10.00% &nbsp;(</span><span class="c-fc-sorange">{{ details.collect }}元</span><span>)手续费</span>
        </div>
        <div class="c-w100">
          <span>实际到账金额为&nbsp;</span><span class="c-fc-sorange">{{ details.actualAmount }}元</span>
        </div>
      </div>
    </div>
    <div class="c-fc-gray c-ph24">
      <div class="c-fs22 c-pv30">
        手续费说明：手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户手续分是客户
      </div>
      <div class="c-hh70 c-lh70 c-bg-lorange c-fc-white c-textAlign-c c-fs24 c-br10" @click="confirm">确定</div>
      <div class="c-fs22 c-pt30 c-pb10">
        <div class="c-pb18">备注：</div>
        <div class="c-pb18">1、请进行微信实名人证后再提现，否则会提现失败</div>
        <div class="c-pb18">2、每日提现2次，每次1元起提</div>
        <div class="c-pb18">3、每次提现上限5000元</div>
        <div class="c-pb18">4、预计72小时到账，提现手续费为10.00%</div>
      </div>
    </div>
    <popup v-if="isShowPopup">
      <div slot="title" class="c-fs28">不可提现原因</div>
      <div slot="content" class="c-fs24 c-fc-sblack">用户在苹果手机APP上充值的金额不可提现</div>
      <div slot="button" class="c-fs22">
        <button class="c-bd0 c-ww230 c-fc-white c-hh50 c-br25 c-linebg-xblue" @click="cancel">我知道了</button>
      </div>
    </popup>
  </div>
</template>

<script>
import popup from '../components/popup.vue';
export default {
  name: 'withdrawal',
  components: {
    popup
  },
  data() {
    return {
      details: {},
      isShowPopup: false,
      incomeType: 1
    };
  },
  methods: {
    getDetails() {
      this.details = {
        balance: '99900.00',
        knowledgeIncome: '99900.00',
        distributionIncome: '99900.00',
        unwithdrawal: '200.00',
        collect: '0.00',
        actualAmount: '0.00'
      };
    },
    confirm() {
      this.isShowPopup = true;
    },
    cancel() {
      this.isShowPopup = false;
    }
  },
  created() {
    this.getDetails();
  }
};
</script>

<style></style>
