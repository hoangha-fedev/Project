<template>
  <v-card class="pa-2">
    <div>
      <div class="display-1">{{part.bookTitle}}</div>
      <div class="headline">{{part.partTitle}}</div>
      <v-divider class="black"></v-divider>
    </div>
    <div class="text-center mt-2 mb-2 primary">
      <youtube :video-id="part.youtube_id"></youtube>
    </div>
    <div class="mt-2">
        <v-tabs v-model="tabMode" color="accent" dark fixed-tabs slider-color="success">
            <v-tab :key="'tabs'" ripple>
                Tab 1
            </v-tab>
            <v-tab :key="'tabs-2'" ripple>
                Tab 2
            </v-tab>
            <v-tab-item :key="'tabs'">
                <div v-for="(paragraph, i) in part.content" :key="`parl${i}`">
                    <span>&nbsp;&nbsp;</span>
                    <span v-for="(sentence, j) in paragraph.sentences" :key="`parl${i}senl${j}`">
                        <span>
                            {{sentence.origText}}
                        </span>
                        <!-- <v-icon size="18" @click.prevent="toggleVisibility(i, j)">help</v-icon>
                        <span v-if="getVisibilityFlag(i, j).value" class="success--text" style="font-weight:bold">
                            {{sentence.transText}}
                        </span> -->
                    </span>
                </div>
            </v-tab-item>
            <v-tab-item :key="'tabs-2'">
                kEY TAB2
            </v-tab-item>
        </v-tabs>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    part: {
      type: Object,
      required: true
    },
  },
  data(){
      return {
          tabMode: 'tabs',
          visibilityKeys: []
      }
  },
  methods:{
    //   getVisibilityFlag(i, j){
    //       return this.visibilityKeys.find(k => k.key == `${i}${j}`)
    //   },
    //   toggleVisibility(i, j){
    //       let flag = this.getVisibilityFlag(i, j)
    //       flag.value == !flag.value
    //   }
  },
  created(){
    //   for(var i=0; i<this.part.content.length; i++) {
    //       for(var j=0; j<this.part.content[i]; j++) {
    //           this.visibilityKeys.push({
    //               key: `${i}${j}`,
    //               value: false
    //           })
    //       }
    //   }
  }
};
</script>