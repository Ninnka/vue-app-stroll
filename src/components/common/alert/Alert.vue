<template lang="html">
  <div class="alert-box">
    <div>
      <p>{{content}}</p>
      <div>
        <slot name="btn1"></slot><slot name="btn2"></slot> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'content'
  ]
}
</script>

<style lang="css" type="text/css" scoped>
.alert-box{
  position: fixed;
  z-index: 10000;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
}
.alert-box>div{
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -40%;
  margin-top: -.9rem;
  background: #fff;
  width: 80%;
  height: 1.8rem;
  border-radius: .15rem;
}
.alert-box>div>div{
  position: absolute;
  width: 100%;
  bottom: .2rem;
  display: flex;
  justify-content: space-around;
}
.alert-box>div p{
  /*padding-left: .1rem;*/
  margin-top: .55rem;
  text-align: center;
  font-size: .23rem;
}
</style>
