<template>
  <div class="container">
    <div class="login_section">
      <div class="login_logo"><h3>客户关系管理系统</h3></div>
      <div class="login_form">
        <form class="new_user" id="new_user" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="7FjQp8JeUou25zD1SogWqs8rS7TWWAzxF2T0l/r8Yhd00SrZoHwfqDv5XqJYomUGXsZGJydYj55a5y+dvR32gw==" />
          <div class="field row">
            <i class="iconfont icon-icon"></i><input autofocus="autofocus" autocomplete="off" value="" id="user" /></div>
          <div class="field row">
            <i class="iconfont icon-mima"></i><input autocomplete="off" type="password" id="password" /></div>
          <div class="field" style="margin-top:5px; text-align:right;">
            <div class="login_link">
              <a href="">忘记密码？</a><br />
            </div>
          </div>
          <div class="actions"><input type="submit" name="commit" value="登录" class="btn" style="letter-spacing: 6px;" /></div>

        </form>
      </div>
      <div id="errDisplay">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {

    }
  }
}
</script>
<style>
  @import '../../static/iconfont/iconfont.css';
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #337ab7;
  }
  /*通过媒体查询的方式在不同的屏幕的宽度下来显示不同的样式*/

  .container {
    display: flex;
    justify-content: center;
  }

  .login_logo {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .login_logo img {
    display: block;
    width: 220px;
    height: 60px;
  }

  .login_form {
    box-shadow: 0 0 7px #C8C8C8;
    background: white;
    border-radius: 7px;
    padding: 10px 20px 20px 20px;
  }

  .login_form input {
    margin-top: 20px;
    flex: 1;
    border: 1px solid #dcdcdc;
    padding-left: 12px;
  }

  .login_link {
    margin-top: 10px;
  }

  .login_link a {
    font-size: 16px;
  }

  .actions {
    width: 100%;
    padding: 5px 0;
  }

  .actions .btn {
    color: #F7F7F7;
    background-color: #555555;
    width: 100%;
    font-size: 22px;
    border-radius: 5px;
    cursor: pointer;
  }

  .row {
    display: flex;
    align-items: center;
  }

  .row i.iconfont {
    display: inline-block;
    color: #000;
    margin-top: 20px;
    margin-right: 10px;
  }

  #errDisplay {
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #a94442;
    position: fixed;
    top: 13%;
    right: 5%;
    display: none;
    z-index: 9999;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    border-radius: 3px;
    padding: 0 10px;
  }

  @media (min-width:998px) {
    .login_section {
      width: 350px;
    }
    .login_form input {
      height: 42px;
    }
    .actions {
      height: 52px;
    }
    .row i.iconfont {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 998px) and (min-width: 720px) {
    .login_section {
      width: 100%;
    }
    .login_form input {
      height: 52px;
    }
    .icon i {
      font-size: 22px;
    }
  }

  @media screen and (max-width:720px) and (min-width:320px) {
    .login_section {
      width: 360px;
    }
    .login_form input {
      height: 50px;
    }
    .actions .btn {
      height: 40px;
      font-size: 20px;
    }
    .row i {
      font-size: 22px;
      display: inline-block;
    }
  }

  @media (max-width: 320px) {
    .login_section {
      width: 332px;
    }
    .login_form input {
      height: 42px;
    }
    .actions .btn {
      height: 30px;
      font-size: 16px;
    }
    .row i {
      font-size: 22px;
      display: inline-block;
    }
  }
</style>
