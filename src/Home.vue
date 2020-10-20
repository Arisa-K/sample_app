<template>
  <div class="home">
    <input type="text" v-model="newItem">
    <button v-on:click="postTweet">ツイート</button>
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.text }}
        {{ tweet.createdAt.toDate().toLocaleString() }}
      </p>
      <pre>{{ $data }}</pre>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"; // Firebase SDK 本体を import する
import db from "@/firebase";

export default {
  name: "home",
  data() {
    return {
      newItem: "",
      /* 変更点１ */
      tweets: [
        // {
        //   id: "0GwoGZuhTNhqHQDBeiVW",
        //   text: "こんにちは、ツイートの本文です。"
        // }
      ]
    };
  },
  methods: {
    postTweet() {
      /* 変更点 */
      const tweet = {
        text: this.newItem,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()      };
        db.collection("tweets")
          .add(tweet)
          .then(ref => {
            this.tweets.push({
              id: ref.id,
              createdAt: ref.createdAt,
              ...tweet
          });
        });
    }
  },
  /* 変更点２ */
  created() {
   const ref = db
      .collection("tweets")
      .orderBy("createdAt")
      .limitToLast(5);
       this.unsubscribe = ref.onSnapshot(snapshot => {
      let tweets = [];
      snapshot.forEach(doc => {
        tweets.push(doc.data());
      });
      this.tweets = tweets;
    });
  },

  destroyed(){
    this.unsubscribe();
    this.unsubscribe = null;
  }
};
</script>
