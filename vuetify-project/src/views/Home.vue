<template>
  <div class="home">
    <section>
      <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="450">
        <v-layout column align-center justify-center class="white--text">
          <img
            src="https://cdn.countryflags.com/thumbs/vietnam/flag-waving-250.png"
            alt
            height="200px"
          />
          <h1 class="white--text mb-2 display-2 text-xs-center">Demo</h1>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout class="my-2" column wrap align-center>
        <v-flex class="my-3" xs12 sm4>
          <div class="text-xs-center">
            <h2 class="headline">Demo 2</h2>
          </div>
        </v-flex>
        <v-flex xs12 style="width: 100%">
          <v-container grid-list-xl>
            <v-layout row wrap align-center class="text-center">
              <v-flex xs12 md4>
                <v-card class="elevation--0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">book</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Title</div>
                  </v-card-title>
                  <v-card-text class="layout justify-center">Description Demo</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation--0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon class="blue--text text--lighten-2">spellcheck</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Title 2</div>
                  </v-card-title>
                  <v-card-text class="layout justify-center">description demo 2</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation--0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon class="blue--text text--lighten-2">devices</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Title 3</div>
                  </v-card-title>
                  <v-card-text class="layout justify-center">description demo 3</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <section v-if="books.length">
      <v-container grid-list-xl>
        <v-layout class="my-2" row wrap justify-center>
          <v-flex xs12 sm8>
            <v-card class="elevation-0 transparent">
              <v-card-title class="layout justify-center" primary-title>
                <div class="headline">Demo 3</div>
              </v-card-title>
              <v-card-text class="layout justify-center">
                <v-carousel xs12 md4>
                  <v-carousel-item
                    v-for="(book, i) in books"
                    :key="i"
                    :src="book.imageUrl"
                    @click="goToBook(book.id)"
                  >
                    <div class="bookTitle">{{book.title}}</div>
                  </v-carousel-item>
                </v-carousel>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout class="my-1" row wrap justify-center>
          <v-flex xs12 sm6>
            <v-card class="elevation-0 transparent">
              <v-card-title class="layout justify-center" primary-title>
                <div class="headline">Demo 3</div>
              </v-card-title>
              <v-card-text>description demo 3</v-card-text>
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>hoangha.fedev@gmail.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  compoted: {
    books() {
      let books = this.$store.getters.getBooks;
      if (!books) return [];

      const shuffled = books.sort(() => 0.5 - Math.random());
      let result = [];
      if (shuffled.length < 5) result = shuffled;
      else result = shuffled.slice(0, 5);
      return result;
    }
  },
  data() {
    return {
      books: [
        {
          id: "1",
          title: "Mình yêu nhau bình yên thôi",
          description: "Đinh Hương - Hà Anh Tuấn",
          imageId: "1",
          imageUrl:
            "https://photo-zmp3.zadn.vn/covers/1/b/1b352fa8373feb08c631eb7a4f7cfb02_1494299663.jpg",
          level: ["V-Pop", "Easy"],
          views: "7,553,824",
          rating: 4,
          ratingsCount: 100,
          youtube_playlist_id: "bkQamlyEVLw",
          parts: [
            {
              id: "1",
              title: "Thông tin chi tiết",
              youtube_id: "bkQamlyEVLw"
            }
          ]
        },
        {
          id: "2",
          title: "Có tất cả nhưng thiếu anh",
          description: "Erik",
          imageId: "2",
          imageUrl: "https://i.ytimg.com/vi/LSjFMH1tsFc/maxresdefault.jpg",
          level: ["V-Pop", "Medium"],
          views: "48,332,214",
          rating: 4.5,
          ratingsCount: 40,
          youtube_playlist_id: "LSjFMH1tsFc",
          parts: [
            {
              id: "2",
              title: "Thông tin chi tiết",
              youtube_id: "LSjFMH1tsFc"
            }
          ]
        },
        {
          id: "3",
          title: "Hết thương cạn nhớ",
          description: "Đức Phúc",
          imageId: "3",
          imageUrl: "https://i.ytimg.com/vi/g4KFkVQu-7g/maxresdefault.jpg",
          level: ["V-Pop", "Easy"],
          views: "49,060,949",
          rating: 5,
          ratingsCount: 80,
          youtube_playlist_id: "DZDYZ9nRHfU",
          parts: [
            {
              id: "3",
              title: "Thông tin chi tiết",
              youtube_id: "DZDYZ9nRHfU"
            }
          ]
        },
        {
          id: "4",
          title: "Giá như cô ấy chưa xuất hiện",
          description: "Miu Lê",
          imageId: "4",
          imageUrl: "https://i.ytimg.com/vi/c0cWr5sYP9s/hqdefault.jpg",
          level: ["V-Pop", "Easy"],
          views: "19,861,855",
          rating: 3.5,
          ratingsCount: 100,
          youtube_playlist_id: "c0cWr5sYP9s",
          parts: [
            {
              id: "4",
              title: "Thông tin chi tiết",
              youtube_id: "c0cWr5sYP9s"
            }
          ]
        },
        {
          id: "5",
          title: "Thuận theo ý trời",
          description: "Bùi Anh Tuấn",
          imageId: "5",
          imageUrl: "https://i.ytimg.com/vi/b1UtffzfG64/maxresdefault.jpg",
          level: ["V-Pop", "Difficult"],
          views: "12,966,675",
          rating: 3,
          ratingsCount: 70,
          youtube_playlist_id: "b1UtffzfG64",
          parts: [
            {
              id: "5",
              title: "Thông tin chi tiết",
              youtube_id: "b1UtffzfG64"
            }
          ]
        },
        {
          id: "6",
          title: "I'm not her",
          description: "Clara Mae",
          imageId: "6",
          imageUrl: "https://i.ytimg.com/vi/UOb172nPB2E/maxresdefault.jpg",
          level: ["US-UK", "Medium"],
          views: "3,532,659",
          rating: 4.5,
          ratingsCount: 80,
          youtube_playlist_id: "iUNxOzxPEVI",
          parts: [
            {
              id: "6",
              title: "Thông tin chi tiết",
              youtube_id: "iUNxOzxPEVI"
            }
          ]
        },
        {
          id: "7",
          title: "Pursuing The Happiness(행복을 찾아서)",
          description: "LeeSSang ft Jo Hyuna of Urban Zakapa",
          imageId: "7",
          imageUrl: "https://i.ytimg.com/vi/le0GI8FtB2o/maxresdefault.jpg",
          level: ["K-Pop", "Difficult"],
          views: "4,178,690",
          rating: 3.5,
          ratingsCount: 50,
          youtube_playlist_id: "le0GI8FtB2o",
          parts: [
            {
              id: "7",
              title: "Thông tin chi tiết",
              youtube_id: "le0GI8FtB2o"
            }
          ]
        }
      ]
    };
  },
  methods: {
    goToBook(id) {
      this.$router.push({ name: "book", params: { id: id } });
    }
  }
};
</script>

<style lang="scss">
.bookTitle {
  position: absolute;
  color: white;
  font-size: 2em;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  cursor: pointer;
}
</style>
