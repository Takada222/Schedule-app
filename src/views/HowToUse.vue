<template>
  <div class="top-container">
    <h1>使い方</h1>
    <div class="nav-wrapper">
      <h2 class="nav-head">
        もくじ
      </h2>
      <nav>
        <div>
          <a
            href="#create-task"
            class="navigation"
          >作成<span class="btn-arrow">➜</span></a>
        </div>
        <div>
          <a
            href="#edit-task"
            class="navigation"
          >編集<span class="btn-arrow">➜</span></a>
        </div>
        <div>
          <a
            href="#move-task"
            class="navigation"
          >入れ替え<span class="btn-arrow">➜</span></a>
        </div>
        <div>
          <a
            href="#complete-task"
            class="navigation"
          >完了<span class="btn-arrow">➜</span></a>
        </div>
        <div>
          <a
            href="#delete-task"
            class="navigation"
          >削除<span class="btn-arrow">➜</span></a>
        </div>
      </nav>
    </div>
    <div class="procedures">
      <div
        id="create-task"
        class="procedure"
      >
        <h2>タスクを作成する</h2>
        <div class="descriptions">
          <div class="description">
            <div class="description-text">
              <p>「タスクを作成」<br>↓<br>タスク名(必須)<br>時間、詳細を入力<br>↓<br>「作成」</p>
            </div>
            <video
              src="../../public/video/create-task-video.mp4"
              loop
              autoplay
              muted
            />
          </div>
        </div>
      </div>
      <div
        id="edit-task"
        class="procedure"
      >
        <h2>タスクを編集する</h2>
        <div class="descriptions">
          <div class="description">
            <div class="description-text">
              <p>矢印ボタン<br>↓<br>要素を変更<br>↓<br>「変更」</p>
            </div>
            <video
              src="../../public/video/edit-task-video.mp4"
              loop
              autoplay
              muted
            />
          </div>
        </div>
      </div>
      <div
        id="move-task"
        class="procedure"
      >
        <h2>タスクを入れ替える</h2>
        <div class="descriptions">
          <div class="description">
            <div class="description-text">
              <p>ドラッグアンド<br>ドロップ<br>↓<br>タスク入れ替え</p>
            </div>
            <video
              src="../../public/video/move-tasks-video.mp4"
              loop
              autoplay
              muted
            />
          </div>
        </div>
      </div>
      <div
        id="complete-task"
        class="procedure"
      >
        <h2>タスクを完了する</h2>
        <div class="descriptions">
          <div class="description">
            <div class="description-text">
              <p>チェックボタン<br>↓<br>完了</p>
            </div>
            <video
              src="../../public/video/complete-task-video.mp4"
              loop
              autoplay
              muted
            />
          </div>
        </div>
      </div>
      <div
        id="delete-task"
        class="procedure"
      >
        <h2>タスクを削除する</h2>
        <div class="descriptions">
          <div class="description">
            <div class="description-text">
              <p>矢印ボタン<br>↓<br>「削除」</p>
            </div>
            <video
              src="../../public/video/delete-task-video.mp4"
              loop
              autoplay
              muted
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .nav-wrapper {
    width: 90%;
    margin: 100px 5% 0;
    padding: 20px 0;
    text-align: center;
    h2 {
      font-weight: normal;
      font-size: 40px;
      letter-spacing: 20px;
    }
    nav {
      display: flex;
      border-top: 5px dotted rgb(255, 200, 150);
      border-bottom: 5px dotted rgb(255, 200, 150);
      div {
        width: 15%;
        height: 50px;
        line-height: 50px;
        padding: 1px 2px;
        margin: 50px 2.5%;
        border: #333 3px solid;
        border-radius: 3px;
        position: relative;
        a {
          display: block;
          border-radius: 5px;
          font-size: 25px;
          text-decoration: none;
          color: #333;
          transition: .3s;
          &:hover {
            color: white;
            background-color: #333;
            transition: .3s;
          }
        }
        .btn-arrow {
          position: absolute;
          right: 10%;
          font-size: 15px;
          display: inline;
          color: rgb(255, 100, 100);
        }
      }
    }
  }


  .procedures {
    text-align: center;
    color: #666;
    margin-bottom: 100px;
  }

  .procedure {
    width: 80%;
    margin: 0 10%;
    padding-top: 50px;
    margin-top: -50px;
    h2 {
      width: 80%;
      padding: 20px 0;
      margin: 100px 10% 50px;
      // border-bottom: 5px dotted rgb(255, 200, 150);
      border-bottom: 3px solid rgb(150, 150, 150);
      font-weight: normal;
      font-size: 30px;
    }
    .description {
      display: flex;
      margin: 20px 0;
      height: 400px;
        .description-text {
          width: 20%;
          position: relative;
          p {
            position: absolute;
            top: 30%;
            left: 0;
            right: 0;
            padding: 0 10px;
            font-size: 20px;
            line-height: 35px;
            z-index: -1;
          }
        }
        img {
          width: 80%;
          height: 380px;
          object-fit: cover;
          object-position: 50% 0%;
          box-shadow: black 0px 0px 5px;
        }
        video {
          width: 80%;
          height: 380px;
          object-fit: cover;
          object-position: 50% 42%;
          box-shadow: black 0px 0px 5px;
        }
    }
  }
</style>