<template>
  <v-card color="info" class="white--text">
    <v-container fluid>
      <v-layout row class="hidden-sm-and-down">
        <v-flex xs4 md3>
          <v-card>
            <v-img :src="book.imageUrl"></v-img>
          </v-card>
          <div class="text-xs-center">
            <v-btn depressed color="white" class="mt-5">
              <v-icon left>mdi-eye</v-icon>
              <span>youtube</span>
            </v-btn>
          </div>
        </v-flex>
        <v-flex xs8 md9>
          <v-card-title>
            <div>
              <div class="headline">{{book.title}}</div>
              <div class="body-2">{{book.description}}</div>
              <v-divider class="white"></v-divider>
              <div class="body-2">{{book.views}} lượt xem , level: {{getBookLevel(book.level)}}, {{book.parts.length}} Parts</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
            <div class="ml-1">
              <span>{{book.rating}}</span>
              <span>({{book.ratingsCount}})</span>
            </div>
            <v-spacer></v-spacer>
            <v-btn class="primary" :to="{name: 'book', params: {id: book.id}}">Read more</v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
      <div class="hidden-md-and-up">
        <v-layout row>
          <v-flex xs4 md3>
            <v-card>
              <v-img :src="book.imageUrl"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs8 md9>
            <v-card-title>
              <div>
                <h4>{{book.title}}</h4>
                <div class="text-xs-center">
                  <v-btn depressed color="white" class="mt-5">
                    <v-icon left>mdi-eye</v-icon>
                    <span>youtube</span>
                  </v-btn>
                </div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <div class="subtitle-1">{{book.description}}</div>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <div>{{book.views}} lượt xem,level: {{getBookLevel(book.level)}}, {{book.parts.length}} Parts</div>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
              <div class="ml-1">
                <span>{{book.rating}}</span>
                <span>({{book.ratingsCount}})</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn class="primary" :to="{name: 'book', params: {id: book.id}}">Read more</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import * as bookHelper from '../helpers/book'
export default {
  props: {
    "book": {
      type: Object,
      reqired: true
    }
  },
  methods: {
      getBookLevel: bookHelper.getBookLevel
  }
};
</script>