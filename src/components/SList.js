import React, { useState } from 'react';

var active = 1;

function SList() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: 1,bangou: 2, text: '日本語の宿題', done: false },
    { key: 2,bangou: 3, text: 'reactを勉強する', done: false },
    { key: 3,bangou: 4, text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  
  return (
    <div className="panel">
      <div className="panel-heading">
        学生一覧
      </div>
      var renderIt = null;
      {items.map(item => (
      
        <label className="panel-block">
            位置：{item.bangou} <br/>
            名前：{item.text} <br/>
        </label>
      
      ))}
       <button onclick="">次に</button>
       <button onclick="">前に</button>
    </div>
   
  );
}

export default SList;
