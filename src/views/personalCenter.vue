<template>
  <div>
    <div class="c-ph24 c-pt64 c-bg-white">
      <!-- 头像 -->
      <div class="c-bd-b1 c-pv20">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">头像</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <img class="c-ww70 c-hh70 c-brp50" :src="userInfo.pic" alt="" />
            <i class="iconfont c-fs22 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
      <!-- 昵称 -->
      <div class="c-bd-b1 c-pv24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">昵称</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <div class="c-fs24">{{ userInfo.nickname }}</div>
            <i class="iconfont c-fs22 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
      <!-- 真实姓名 -->
      <div class="c-bd-b1 c-pv24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">真实姓名</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <div class="c-fs24">{{ userInfo.name }}</div>
            <i class="iconfont c-fs22 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
      <!-- 性别 -->
      <div class="c-bd-b1 c-pv24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">性别</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <div class="c-fs24">{{ userInfo.gender }}</div>
            <i class="iconfont c-fs22 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
      <!-- 手机号 -->
      <div class="c-bd-b1 c-pv24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">手机号</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <div class="c-fs24">{{ userInfo.phone }}</div>
            <i class="iconfont c-fs22 c-ml16">&#xe635;</i>
          </div>
        </cell>
      </div>
      <!-- 地区 -->
      <div class="c-pv24">
        <cell>
          <div slot="title" class="c-fs24 c-fc-xblack">地区</div>
          <div slot="right" class="c-flex-row c-aligni-center">
            <div class="c-fs24" v-if="userInfo.region">{{ userInfo.region }}</div>
            <div class="c-fs24" v-else>请选择地址</div>
          </div>
        </cell>
      </div>
    </div>
    <!-- 修改支付密码 -->
    <div class="c-pv24 c-mt12 c-bg-white c-ph24">
      <cell>
        <div slot="title" class="c-fs24 c-fc-xblack">修改支付密码</div>
        <div slot="right" class="c-flex-row c-aligni-center">
          <i class="iconfont c-fs22 c-ml16">&#xe635;</i>
        </div>
      </cell>
    </div>
    <!-- 我的收获地址 -->
    <div class="c-pv24 c-mt12 c-bg-white c-ph24">
      <cell>
        <div slot="title" class="c-fs24 c-fc-xblack">我的收获地址</div>
        <div slot="right" class="c-flex-row c-aligni-center">
          <i class="iconfont c-fs22 c-ml16">&#xe635;</i>
        </div>
      </cell>
    </div>
    <!-- 邀请人 -->
    <div class="c-mt12 c-bg-white c-ph24">
      <cell>
        <div slot="title" class="c-fs24 c-fc-xblack">邀请人</div>
        <div slot="right" class="c-flex-row c-aligni-center">
          <div>
            <div class="c-pb10 c-pt24">{{ userInfo.Invitee }}</div>
            <div class="c-pb20">ID:{{ userInfo.id }}</div>
          </div>
          <i class="iconfont c-fs22 c-ml16">&#xe635;</i>
        </div>
      </cell>
    </div>
    <!-- 更换个人信息 -->
    <div class="c-mt12 c-bg-white c-ph24 c-flex-row c-justify-center c-aligni-center">
      <div class="c-fs24 c-fc-xblack c-pv24">更换个人信息</div>
    </div>
    <div class="c-hh153 c-fs22 c-pt48 c-flex-row c-justify-center c-fc-xlyellow">
      <div class="c-ph30">《用户使用协议》</div>
      <div>|</div>
      <div class="c-ph30">《用户使用协议》</div>
    </div>
  </div>
</template>

<script>
import cell from '../components/cell.vue';
export default {
  name: 'PersonalCenter',
  components: { cell },
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
    getUserInfo() {
      this.userInfo = {
        pic: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
        nickname: 'Kelly',
        name: '欧文',
        gender: '女',
        phone: '1758654235',
        region: '',
        Invitee: 'Kelly',
        id: '25654556'
      };
    }
  },
  created() {
    this.getUserInfo();
  }
};
</script>

<style></style>
