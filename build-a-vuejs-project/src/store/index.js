import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [
      {
        id: "1",
        name: "I'm not her",
        description: `<p>Clara Mae - “I’m Not Her” Available Now - https://BigBeat.lnk.to/imnotherAY</p>`,
        thumbnail: "https://i.ytimg.com/vi/UOb172nPB2E/maxresdefault.jpg",
        videoUrl: "https://r2---sn-8qj-i5ozr.googlevideo.com/videoplayback?expire=1579095338&ei=ysAeXtiAOaiL2LYPq7Sb2Ac&ip=2604%3A180%3A2%3A3b5%3A192c%3A7df7%3Aa22d%3A902b&id=o-ANcd7xNewBy8jK2w6El0iaOlGBPuy6gK1LUyaOolEVMc&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=6655078&ratebypass=yes&dur=192.516&lmt=1574935371608956&fvip=2&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgE33yPPVh3RNpdHpEe7uP-Df9BGuIOA3rAM29PVz8pJwCIEXl7Mxre37OPu2_m5KN-z8G74eXKLV4Ez0mUN2xezsu&redirect_counter=1&rm=sn-5uadz7l&req_id=d4127e79ab14a3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozr&ms=au&mt=1579073624&mv=m&mvi=1&pcm2cms=yes&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AHylml4wRQIhAKZBrDi60YwJ1MqiahiRjaGidjoz4lmTI10jkMmeY-gGAiAJYoawtV_fvL-iaXo9h8PqJo0QNYxqTcLju2HKETCHgg=="
      },
      {
        id: "2",
        name: "Jordy Chandra - School Time [Lofi Album]",
        description: `<p>Jordy Chandra reflects on nostalgic school days</p>
                      <p>in his latest EP released on The Jazz Hop Café Records</p>`,
        thumbnail: "https://i.ytimg.com/vi/q7AX9rw-LXI/maxresdefault.jpg",
        videoUrl: "https://r6---sn-8qj-i5ozd.googlevideo.com/videoplayback?expire=1579095533&ei=jcEeXrPRJIubhwbElI-ABQ&ip=2604%3A180%3A2%3A3b5%3A192c%3A7df7%3Aa22d%3A902b&id=o-AFeKnORhLl7WBMolt1PfNSs3eusTPMwgjqgl7U_9_Dcp&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=36007993&ratebypass=yes&dur=800.066&lmt=1578840284610296&fvip=6&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAM9_1PqhmhKIVPjYI6xVy5abz4pfW9tEJwM7KA45rVIVAiBK3PVxYSfqTVZgJYty3EQh472ia0Mh75YgoQe1AkUJjg%3D%3D&redirect_counter=1&rm=sn-5uake7d&req_id=83675a990f2da3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozd&ms=au&mt=1579073952&mv=m&mvi=5&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhAMpptdjwAV2jhtErRggtB0YsIgc5LvkWuzbO7_KNgXqZAiBP8XsrzycBf6kC4vRCntKscMrdyggTVhDozdrDNC7S2A=="
      },
      {
        id: "3",
        name: "kudasai - technicolor",
        description: `<p>Subscribe for Chill Music Daily  波</p>`,
        thumbnail: "https://i.ytimg.com/vi/T9qVyDbnF3I/maxresdefault.jpg",
        videoUrl: "https://r1---sn-8qj-i5ozd.googlevideo.com/videoplayback?expire=1579095890&ei=8sIeXtjcE-jv8gT5iYDgAQ&ip=2604%3A180%3A2%3A3b5%3A192c%3A7df7%3Aa22d%3A902b&id=o-AGi5t8MfgGZzI_WMmkxgGPqBEnyLVTXdZvnNeTuq1Pbx&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=11229174&ratebypass=yes&dur=243.205&lmt=1575728967110262&fvip=1&fexp=23842630,23860862&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhALb2-BTrjtbws-misnAmPmg9MsDgQ_Na_yHXIBmA1NUmAiAZhuZ72RpepQVqFEf3yGvnPsfXXi2-65sqo54CPcQdyw==&redirect_counter=1&rm=sn-5uark7e&req_id=7d2f0cdcd675a3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozd&ms=au&mt=1579074191&mv=m&mvi=0&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgImqrTrm7Ld4d1NF31tYcPoOqHAtPt5aJzBlX_n9dx9ICIQD_yJuUfHlpWDNrtZjBqq_qfnT3XaHMdq7BMZGlFEnMlA=="
      },
      {
        id: "4",
        name: `" I'm not going anywhere " - lofi cute vibes mix`,
        description: `<p>cute songs to makes you feel safe</p>`,
        thumbnail: "https://i.ytimg.com/vi/oS6pJDb7bog/maxresdefault.jpg",
        videoUrl: "https://r8---sn-8qj-i5ozr.googlevideo.com/videoplayback?expire=1579095934&ei=HsMeXoi0A4e_gwPurIXgCQ&ip=2604%3A180%3A2%3A3b5%3A192c%3A7df7%3Aa22d%3A902b&id=o-APjdkHIwdWmUDYuVzjgJfWPHfNnKtbc8fIyLm-WDej9l&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=15130547&ratebypass=yes&dur=799.509&lmt=1576353718198365&fvip=1&fexp=23842630&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgD1SHgwiQ52yE2KjPLhZpbM6-RHESqaH86etd6o5tgPsCIAH--aByLjm980pqCbfCCDAF7kPIBeLqX83JzwRCopqU&redirect_counter=1&rm=sn-5uad67e&req_id=56cfdf96b7a8a3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozr&ms=au&mt=1579074256&mv=m&mvi=7&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhAJVZYhnjkRNmw7ho0ePTSRDewSps0qVWQY1LceI1FYZeAiBQe81db2iJRqxqGDoWEMHXgNbaZMgrTFEgWJZZQuHxrA=="
      },
      {
        id: "5",
        name: "리쌍 (Leessang) - 행복을 찾아서 (Instrumental)",
        description: `<p>Was considering writing lyrics and recording vocals, but I lost interest.</p>`,
        thumbnail: "https://i.ytimg.com/vi/yzihy9kWtEA/maxresdefault.jpg",
        videoUrl: "https://r3---sn-npoe7ne7.googlevideo.com/videoplayback?expire=1579095982&ei=TsMeXorCEYmRhwal1ruwBw&ip=2604%3A180%3A2%3A3b5%3A192c%3A7df7%3Aa22d%3A902b&id=o-AP6KIeCfj5y_ia77zS48Ikz9gTmnAiWgHxQvJD85rsur&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=20276409&ratebypass=yes&dur=223.840&lmt=1578196840753915&fvip=3&fexp=23842630,23860862&c=WEB&txp=5311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgFhbpjzHWTEqsS01_yTip7SqVgU8Sx40buDvlL80pd9kCIQCmP1QUJ6eyaY5B9I988K5uMBmzhmvJ4SWwBXGL41c9sQ%3D%3D&redirect_counter=1&cm2rm=sn-5uad67s&req_id=b08377bde5f8a3ee&cms_redirect=yes&mip=14.160.24.90&mm=34&mn=sn-npoe7ne7&ms=ltu&mt=1579074287&mv=m&mvi=2&pl=23&lsparams=mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgAeQjH9Aq9W19G0UXV1V-g4aoysnBbBRph_XOGR4jVBICIQDCRgHOh73UTstkm9xouCndkKwcG7jr4mgrnAOHI5bo3w=="
      },
      {
        id: "6",
        name: "Lauv - Paris in the Rain [Official Video]",
        description: `<p>Lauv’s debut album ~how i’m feeling~ is available March 6th. Pre-Save/Pre-Order now: </p>
                      <p>http://ffm.to/howimfeeling</p>`,
        thumbnail: "https://i.ytimg.com/vi/kOCkne-Bku4/maxresdefault.jpg",
        videoUrl: "https://r8---sn-8qj-i5ozr.googlevideo.com/videoplayback?expire=1579096022&ei=dsMeXsH0G6K18gTc1rzADg&ip=2604%3A180%3A2%3A3b5%3A192c%3A7df7%3Aa22d%3A902b&id=o-ABe5yRuNufm2Dg6J_dBjUlHADsZYwwJ_la-9jtO3poSx&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=9992138&ratebypass=yes&dur=216.851&lmt=1575731905475036&fvip=6&fexp=23842630,23860863&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgXzqF19r_BWqiFZeVIs3o-b9Ax72IObsGCos9IZbOf3cCIQCdyXkEy3AOfssSNB_R6b3m98t7cTHNFphSc2I9lD7Uzg==&redirect_counter=1&rm=sn-5uare7d&req_id=3fa284f6846aa3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozr&ms=au&mt=1579074332&mv=m&mvi=7&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgJ_6CIamkTQPhJ2jvixkglsKtGJBuaziFru6n-7HsAYACIFKh2GTan5MYr4TFUiDNt0Vey1vLUL9L5aUgwCtBRvq2"
      },
      {
        id: "7",
        name: "Jeremy Zucker - comethru",
        description: `<p>Music video by Jeremy Zucker performing comethru. © 2018 Republic Records, a division of UMG Recordings, Inc.</p>`,
        thumbnail: "https://i.ytimg.com/vi/jO2viLEW-1A/maxresdefault.jpg",
        videoUrl: "https://r6---sn-8qj-i5ozd.googlevideo.com/videoplayback?expire=1579096348&ei=vMQeXvZNoYiHBofEifAH&ip=2604%3A180%3A2%3A3b5%3A192c%3A7df7%3Aa22d%3A902b&id=o-AFJD9ZgTCIXNEnNNU-kM3DHCJaXwDKWpGdpd_mbHMTqM&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=7871053&ratebypass=yes&dur=181.069&lmt=1576215218072724&fvip=6&fexp=23842630&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAP8jID4mEVUqJ7QxpMjnx9DcxznIrXrWJU0KTuMoVEDlAiEAioYRbmeMYlMl7YV7qliI_D4bC8oHJI-Iu4Aut66fanA=&redirect_counter=1&rm=sn-5uadl7d&req_id=b97780582d0ea3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozd&ms=au&mt=1579074688&mv=m&mvi=5&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgFpGXK7LGP_Fku5t4bMiAE2Fu9W3u0Q0ak-f0Pr_eHzMCIH7pzRusy9H4ABfzy0mlynEst31d-Dd0WadMHKGWk6Tg"
      },
      {
        id: "8",
        name: "Khalid - Talk (Lyrics)",
        description: `<p>If you are an artist and don't want your music or your image on my channel, please contact me via my channel email and I will remove your content within 24 hours.</p>`,
        thumbnail: "https://i.ytimg.com/vi/Y1QZOprK7PQ/maxresdefault.jpg",
        videoUrl: "https://r4---sn-8qj-i5ozd.googlevideo.com/videoplayback?expire=1579096208&ei=MMQeXra2IYTzkgbBn6rQDg&ip=107.178.99.154&id=o-ACs15CYzsgy2dYaUDvVqaU2STxEeYcMNTBhLZyP9D1qK&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=8894404&ratebypass=yes&dur=198.623&lmt=1576589586465532&fvip=4&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAIr163XqlhLzplmi921AoY5AVkKt1pse6iL_BRcq58jVAiEA3QlT7SxmIVXLdwDrKmBUDd-FMxCRlrg2eyhmrOAUr64=&title=Khalid+-+Talk+(Lyrics)&dl=1&redirect_counter=1&rm=sn-a5mky7z&req_id=a74bcffad37ca3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozd&ms=au&mt=1579074500&mv=m&mvi=3&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgJ6d1iX_ASTrG7BC5U_bklJU-l2jZLw-WNp-mdlQDUbsCIQDR9qhwGNMl7u8ctlXJKoxI2BJl-rZkvsizrjCkmQundg=="
      },
      {
        id: "9",
        name: "Có Chàng Trai Viết Lên Cây - Phan Mạnh Quỳnh | MẮT BIẾC OST",
        description: `<p>Video này như một hành trình của Có chàng trai viết lên cây đi cùng mối tình Mắt Biếc. Phiên bản đã thay đổi 1 câu hát để trở thành phiên bản hoàn hảo của Mắt Biếc.</p>`,
        thumbnail: "https://i.ytimg.com/vi/MNm77lvTfi4/maxresdefault.jpg",
        videoUrl: "https://r6---sn-8qj-i5ozr.googlevideo.com/videoplayback?expire=1579096387&ei=48QeXqGhLZPDhgbMmqCoBg&ip=2604%3A180%3A2%3A3b5%3A192c%3A7df7%3Aa22d%3A902b&id=o-AD6JanrHIuNuUDpXpQq-EvgmS1mcebUrftA0hnsnflNU&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=23975571&ratebypass=yes&dur=304.576&lmt=1576531908820949&fvip=6&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAKVazKT1YrocpvvPaMl0VqyYPaoXk-gLCLE-AUMCuLHYAiBiaQ3EiykrywfcpsoeftkUhc4bSfACVkStopL-63HSxg%3D%3D&redirect_counter=1&rm=sn-5uad67d&req_id=185e7cf6158fa3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozr&ms=au&mt=1579074688&mv=m&mvi=5&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgCnuY1zVnEtXw2D0PlN9jiCBvgaHnqkcHRq4El9RPF64CIQC8a0SlcDNRiRwpzWY5BBRWZw_0yN_GpcaE5qPpdZpPvg=="
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})