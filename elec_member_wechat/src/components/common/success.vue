<template>


  <div>
      <figure>
          <img src="static/img/smile.png" alt=""/>
          <figcaption>
               <slot></slot>
          </figcaption>
      </figure>

  </div>
</template>

<style lang="less" scoped>
  div{
    max-width: 640px;
    margin-top: 0.12rem;
    border-top: 0.5px solid #e1e1e1;
    border-bottom: 0.5px solid #e1e1e1;
    height: 1.5rem;
    line-height: 1.2rem;
    background-color: #fff;
    text-align: center;
  }
  figure{
     margin: 0.3rem 0 0 40%;
  }
  figure figcaption{
    color:#06c1ae;
    position: relative;
    top:-0.4rem;
    right: 35%;


  }
  img{
    height: 0.7rem;
    width: 0.7rem;
  }

</style>

<script>



</script>
