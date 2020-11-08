<template>
  <div>
    <h1>showです</h1>
    <div>{{ tweet.text }}</div>
    <div>{{ tweet.createdAt}}</div>
  </div>
</template>

<script>
import db from "@/firebase";
export default {
    data(){
    return{
      tweet: {
        text: null,
        createdAt: null
      }
    }
  },
  created() {
    var docRef = db.collection("tweets").doc(this.$route.params.id);
    docRef.get().then((doc) => {
       console.log(doc.data());
        if (doc.exists) {
          const tweet = doc.data();
          this.tweet.text = tweet.text
          this.tweet.createdAt = tweet.createdAt
          console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }
}
</script>
<style lang="scss" scoped>

</style>