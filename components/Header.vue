<template>
  <div class="header">
    <div class="header__logo">
      <h1 class="header__logo__title">
        <span>N</span><span>e</span><span>w</span><span>s</span> <span>p</span
        ><span>o</span><span>r</span><span>t</span><span>a</span><span>l</span>
      </h1>
      <p>The latest news</p>
    </div>
    <div class="header__profile">
      <div class="header__profile__avatar">
        <img :src="user.avatar" alt="profile avatar" />
      </div>
      <div class="header__profile__info">
        <p>{{ user.name }}</p>
        <p>{{ user.rang }} @{{ user.login }}</p>
      </div>
    </div>
    <app-navigation></app-navigation>
  </div>
</template>
<style lang="scss">
.header {
  background: #909;
  color: #fff;
  padding: 20px 10px;
  &__logo {
    display: inline-block;
    &__title {
      color: #ff0;
      letter-spacing: -2px;
      font-size: 40px;
      transform: scaleY(1.8);
      border-bottom: 1px dashed #fff;
      padding-bottom: 2px;
      span:nth-child(2n) {
        color: #00f;
        font-weight: bold;
      }
    }
    p {
      margin-top: 20px;
      word-spacing: 13px;
      text-align: center;
      transform: scaleY(1.8);
    }
  }
  &__profile {
    float: right;
    margin-top: 30px;
    width: 300px;
    &__avatar {
      width: 60px;
      height: 60px;
      display: inline-block;
      margin: 0;
      padding: 0;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 2px solid #bad;
      }
    }
    &__info {
      display: inline-block;
      vertical-align: bottom;
      p {
        line-height: 10px;
        font-size: 14px;
      }
      p:nth-child(2) {
        color: #0ff;
      }
      p:nth-child(3) {
        color: #fad;
      }
    }
  }
}
@media screen and (max-width: 544px) {
  .header__profile {
    display: none;
  }
}
@media screen and (max-width: 760px) {
  .header__profile {
    margin-top: 0;
    width: 240px;
  }
}
</style>
<script>
import Navigation from "./Navigation.vue";

export default {
  components: {
    appNavigation: Navigation,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = this.$store.getters.user;
  },
};
</script>
