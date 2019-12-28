import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="head">
      <div className="head_icon">
          <a className="head_icon">HUCEEN</a>
      </div>
      <div className="head_item">
        <div className="item">
            <a href="/">首页</a>
        </div>
        <div className="item">
            <a>产品</a>
        </div>
        <div className="item">
            <a>收藏夹</a>
        </div>
        <div className="item">
            <a>个人中心</a>
        </div>
        <div className="item">
          <input></input>
        </div>
      </div>
      <div className="head_right">
        <div className="head_right__register">
          注册
      </div>
        <div className="head_right__input">
          登录
      </div>
      </div>
    </div>
  );
}

export default Header;