<template>
    <div class="bg">
      <div class="ceshi">测试z-index
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
      </div>
        <ul class="bg-bubbles">
            <li v-for="i in 10" :key="i"></li>
        </ul>
        <div class="login">
            <div class="font"> 欢迎，请登录</div>
            <div class="long">
                <div class="number">
                    <Input size="large" placeholder="请输入账号"></Input>
                </div>
                <div>
                    <Input size="large" placeholder="请输入密码"></Input>
                </div>
            </div>

            <div>
                <Button class="btn">登录</Button>
            </div>
        </div>

    </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
// .box1{
//   background-color:#f36;
//   width:200px;
//   height:200px;
//   z-index:-1;
// }
// .box2{
//  background-color:#eee;
//   width:150px;
//   height:150px;
//   z-index: 2;
// }
.ceshi{
  position: relative;
}
.box3{
  position: absolute;
  left:0;
  top:0;
 background:#fff;
  width:50px;
  height:50px;
  z-index: -1;
}
.bg {
  background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
  height: 100%;
  position: relative;
}
.login {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
}
.font {
  font-size: 19px;
  font-weight: bold;
  padding-top: 300px;
  padding-left: 40px;
}
.long {
  margin: 10px 0;
  width: 200px;
}
.number {
  margin-bottom: 10px;
}
.btn {
  color: #fff;
  background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
  width: 200px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
}
.bg-bubbles {
  position: absolute;
  // 使气泡背景充满整个屏幕；
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
  overflow: hidden;
  li {
    position: absolute;
    // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
    bottom: -160px;
    // 默认的气泡大小；
    width: 40px;
    height: 40px;
    border-radius:10px;
    background-color: rgba(255, 255, 255, 0.15);
    list-style: none;
    // 使用自定义动画使气泡渐现、上升和翻滚；
    animation: square 15s infinite;
    transition-timing-function: linear;
    // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
    &:nth-child(1) {
      left: 10%;
    }
    &:nth-child(2) {
      left: 20%;
      width: 90px;
      height: 90px;
      animation-delay: 2s;
      animation-duration: 7s;
    }
    &:nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-duration: 8s;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(5) {
      left: 70%;
    }
    &:nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;
      animation-delay: 3s;
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;
      animation-delay: 2s;
    }
    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
      animation-duration: 15s;
    }
    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;
      animation-delay: 2s;
      animation-duration: 12s;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(10) {
      left: 85%;
      width: 160px;
      height: 160px;
      animation-delay: 5s;
    }
  }
  // 自定义 square 动画；
  @keyframes square {
    0% {
      opacity: 0.5;
      transform: translateY(0px) rotate(45deg);
    }
    25% {
      opacity: 0.75;
      transform: translateY(-400px) rotate(90deg);
    }
    50% {
      opacity: 1;
      transform: translateY(-600px) rotate(135deg);
    }
    100% {
      opacity: 0;
      transform: translateY(-1000px) rotate(180deg);
    }
  }
}
</style>


