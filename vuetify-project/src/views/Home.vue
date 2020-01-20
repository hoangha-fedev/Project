<template>
  <div class="home">
    <section>
      <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="450">
        <v-layout column align-center justify-center class="white--text">
          <img src="https://cdn.countryflags.com/thumbs/vietnam/flag-waving-250.png" alt="" height="200px">
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
                  <v-card-text class="layout justify-center">
                    Description Demo
                  </v-card-text>
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
                  <v-card-text class="layout justify-center">
                    description demo 2
                  </v-card-text>
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
                  <v-card-text class="layout justify-center">
                    description demo 3
                  </v-card-text>
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
                  <v-carousel-item v-for="(book, i) in books" :key="i" :src="book.imageUrl" @click="goToBook(book.id)">
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
              <v-card-text>
                description demo 3
              </v-card-text>
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
  name: 'home',
  compoted:{
    books(){
      let books = this.$store.getters.getBooks
      if(!books) return []

      const shuffled = books.sort(() => .5 - Math.random())
      let result = []
      if (shuffled.length < 5)
        result = shuffled
      else  
        result = shuffled.slice(0,5)
      return result
    }
  },
  data() {
    return {
      books: [
			{
				id: '1',
				title: 'Harry Potter und der Stein der Weisen',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
				imageId: '1',
				imageUrl:'https://i.pinimg.com/474x/b8/65/a1/b865a148919f86e9802c50343e9b93ee.jpg',
				level: [ 'B2', 'C1' ],
				rating: 4,
				ratingsCount: 100,
				youtube_playlist_id: '1',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '2',
				title: 'Harry Potter und der Stein der Weisen - 2',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
        imageId: '2',
        imageUrl:'https://i.pinimg.com/474x/b8/65/a1/b865a148919f86e9802c50343e9b93ee.jpg',
				level: [ 'B1', 'C2' ],
				rating: 4.5,
				ratingsCount: 40,
				youtube_playlist_id: '2',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '3',
				title: 'Harry Potter und der Stein der Weisen - 3',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
        imageId: '3',
        imageUrl:'https://i.pinimg.com/474x/b8/65/a1/b865a148919f86e9802c50343e9b93ee.jpg',
				level: [ 'A2', 'C1' ],
				rating: 5,
				ratingsCount: 80,
				youtube_playlist_id: '3',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '4',
				title: 'Harry Potter und der Stein der Weisen - 4',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
        imageId: '4',
        imageUrl:'https://i.pinimg.com/474x/b8/65/a1/b865a148919f86e9802c50343e9b93ee.jpg',
				level: [ 'A1', 'C2' ],
				rating: 3.5,
				ratingsCount: 100,
				youtube_playlist_id: '4',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '5',
				title: 'Harry Potter und der Stein der Weisen - 5',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
        imageId: '5',
        imageUrl:'https://i.pinimg.com/474x/b8/65/a1/b865a148919f86e9802c50343e9b93ee.jpg',
				level: [ 'A1', 'C1' ],
				rating: 3,
				ratingsCount: 70,
				youtube_playlist_id: '5',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '6',
				title: 'Harry Potter und der Stein der Weisen - 6',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
        imageId: '6',
        imageUrl:'https://i.pinimg.com/474x/b8/65/a1/b865a148919f86e9802c50343e9b93ee.jpg',
				level: [ 'A2', 'C2' ],
				rating: 4.5,
				ratingsCount: 80,
				youtube_playlist_id: '6',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '7',
				title: 'Harry Potter und der Stein der Weisen - 7',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
        imageId: '7',
        imageUrl:'https://i.pinimg.com/474x/b8/65/a1/b865a148919f86e9802c50343e9b93ee.jpg',
				level: [ 'A1', 'C1' ],
				rating: 3.5,
				ratingsCount: 50,
				youtube_playlist_id: '7',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			}
        ],
    }
  },
  methods: {
    goToBook(id){
      this.$router.push({name: 'book', params: {id:id}})
    }
  }
}
</script>

<style lang="scss">
.bookTitle { position: absolute; color: white; font-size: 2em; padding: 15px; background-color: rgba(0,0,0,0.5); width: 100%; text-align: center; cursor: pointer;}
</style>
