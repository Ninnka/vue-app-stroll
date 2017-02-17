<template lang="html">
  <div>
    <form>
      <p class="all">
        <input type="radio" name="b" value="0" />
        <span>★</span>
        <input type="radio" name="b" value="1" />
        <span>★</span>
        <input type="radio" name="b" value="2" />
        <span>★</span>
        <input type="radio" name="b" value="3" />
        <span>★</span>
        <input type="radio" name="b" value="4" />
        <span>★</span>
        <input type="radio" name="b" value="5" />
        <span>★</span>
      </p>    
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'score'
  ],
  data() {
    return {
      // check1: false,
      // check2: false,
      // check3: false,
      // check4: true,
      // check5: false
    }
  }
}
</script>

<style lang="css" type="text/css">
form{width:90%;max-width:200px;margin:0 auto;}
h2{text-align:center;margin-top:5em;}
.all>input{opacity:0;position:absolute;width:2em;height:2em;margin:0;cursor:pointer;}
.all>input:nth-of-type(1),
.all>span:nth-of-type(1){display:none;}
.all>span{font-size:1.5em;color:gold;
      -webkit-transition:color .8s;
      transition:color .8s;}
.all>input:checked~span{color:#666;}
.all>input:checked+span{color:gold;}
</style>
