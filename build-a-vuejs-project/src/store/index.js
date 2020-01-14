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
        videoUrl: "https://r12---sn-8qj-i5ozd.googlevideo.com/videoplayback?expire=1579012193&ei=AXwdXvuqMoSnkgaon4KwDw&ip=2604%3A180%3A3%3A376%3A8090%3A3d85%3Ab51d%3A98c3&id=o-AAwgwcBTWYoT-LR4l0I-qNCyZyh1UBolBs0mY3hdUAno&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=8717480&ratebypass=yes&dur=197.462&lmt=1575222944638522&fvip=2&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAO-UXAlDBqfslRRR_tn5q9RKcUe0XKJ_utgvG66YOaVJAiEA3HBficiBNGhY0LkajNpzpFI3WaWTilXj0DmRShq2AJE=&redirect_counter=1&rm=sn-n4ves7l&req_id=7658e4f674e7a3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozd&ms=au&mt=1578990530&mv=m&mvi=11&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIfJRBwzCsltqJpeWEc6SI_-VGsq844OM5ACfR4hgH1RAIhALz6kbwGikYNdzIMVZ_OUikSYLIdHVTsTZmK3FNMUWYy"
      },
      {
        id: "2",
        name: "Jordy Chandra - School Time [Lofi Album]",
        description: `<p>Jordy Chandra reflects on nostalgic school days</p>
                      <p>in his latest EP released on The Jazz Hop Café Records</p>`,
        thumbnail: "https://i.ytimg.com/vi/q7AX9rw-LXI/maxresdefault.jpg",
        videoUrl: "https://r6---sn-8qj-i5ozd.googlevideo.com/videoplayback?expire=1579012280&ei=WHwdXuW6KIjokgbqmo7gDQ&ip=2604%3A180%3A3%3A376%3A8090%3A3d85%3Ab51d%3A98c3&id=o-AHUFW36EH89Wj1Kib9HIq5tuo6J_2fLfhYZhLgLpSeHB&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=36007993&ratebypass=yes&dur=800.066&lmt=1578840284610296&fvip=1&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgEB8HhAd3bFJfLD9ujpS0PFE8qcPKPieweqaaIBBa2XgCIQDytOgJCFo1EQTQDKrYQWc5zDx2WlpiyZglf0qqzeDlXw%3D%3D&redirect_counter=1&rm=sn-n4ved7d&req_id=1b7f93a0be16a3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozd&ms=au&mt=1578990584&mv=m&mvi=5&pcm2cms=yes&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AHylml4wRgIhAMWNI-DSmE1uv8p5phGywTv2Ym2-wyVYkH2Bl8wpVR2XAiEAnU13j3VmxFtIe9cb6DdBgw3Qlnu4hF2HE1ppgRmE4hE="
      },
      {
        id: "3",
        name: "kudasai - technicolor",
        description: `<p>Subscribe for Chill Music Daily  波</p>`,
        thumbnail: "https://i.ytimg.com/vi/T9qVyDbnF3I/maxresdefault.jpg",
        videoUrl: "https://r1---sn-8qj-i5ozd.googlevideo.com/videoplayback?expire=1579012320&ei=gHwdXv29G5CQkgbJ5qjQCw&ip=2604%3A180%3A3%3A376%3A8090%3A3d85%3Ab51d%3A98c3&id=o-AKQvXCNuOZGCojN0FnNWHIqkrduU9yY3hUvcsJayaDis&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=11229174&ratebypass=yes&dur=243.205&lmt=1575728967110262&fvip=1&fexp=23842630&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgR-91Uqhp81cymlA1QX1KCBZP50DtI_bSX9WFryTTerACIQCoaMgerDN8NEEQtV8-G47uRbmFHNgMzRCetIkenrwquA==&redirect_counter=1&rm=sn-n4vez7e&req_id=7daf20111c4fa3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozd&ms=au&mt=1578990643&mv=m&mvi=0&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgYpk3t7rXPlABtiJT-fqRoFeL5Ynb1PsJVVwuAUERIMQCIQDsuzJbshRIthwpFYENSFairmUUTZCLhvSTqh81kobtVQ=="
      },
      {
        id: "4",
        name: `" I'm not going anywhere " - lofi cute vibes mix`,
        description: `<p>cute songs to makes you feel safe</p>`,
        thumbnail: "https://i.ytimg.com/vi/oS6pJDb7bog/maxresdefault.jpg",
        videoUrl: "https://r8---sn-8qj-i5ozr.googlevideo.com/videoplayback?expire=1579012366&ei=rnwdXujMA4yOkgbfy4S4CQ&ip=2604%3A180%3A3%3A376%3A8090%3A3d85%3Ab51d%3A98c3&id=o-AANJO3w4Skf4NR2THxmcLxc4EFAamdiwExCp_9gR8qpp&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=15130547&ratebypass=yes&dur=799.509&lmt=1576353718198365&fvip=1&fexp=9466588,23842630&beids=9466588&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhALd59rvYjm6RHqvc5qRLL0zqLeIlasysdnf_eCnZtGMkAiBs7rXNH_PkxbQIOgW7Ivl2xKdHaz-ZHBzjKfZqyOolpQ==&redirect_counter=1&rm=sn-n4ved7e&req_id=44d698cf5144a3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozr&ms=au&mt=1578990643&mv=m&mvi=7&pcm2cms=yes&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AHylml4wRQIgaAV_SUZNNU4GC6YX-pUc--4DPr73GqgOblqSBw1t9sQCIQDI-jJhCHgY7iF6quxhzA0_bz_XcCJ51FdgX6qbf30Q3Q=="
      },
      {
        id: "5",
        name: "리쌍 (Leessang) - 행복을 찾아서 (Instrumental)",
        description: `<p>Was considering writing lyrics and recording vocals, but I lost interest.</p>`,
        thumbnail: "https://i.ytimg.com/vi/yzihy9kWtEA/maxresdefault.jpg",
        videoUrl: "https://r3---sn-8qj-i5ozr.googlevideo.com/videoplayback?expire=1579012391&ei=x3wdXoasB4TzkgbMq7_YCg&ip=2604%3A180%3A3%3A376%3A8090%3A3d85%3Ab51d%3A98c3&id=o-AGqhAKKWDd9HqcCUSmuJ8DwYbU5UAMZyZefUSloC7-8v&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=20276409&ratebypass=yes&dur=223.840&lmt=1578196840753915&fvip=3&fexp=23842630&c=WEB&txp=5311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAPNHQcSBTZt0FvK4R_-nFN_7M8XJXfJHNOU6OSvHKDuuAiABFGRgeeNQXA0weViiuD1WncrP6lSBX3PbCZWc74j9Hg%3D%3D&redirect_counter=1&rm=sn-n4vll7s&req_id=1fa57d2dbb9da3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozr&ms=au&mt=1578990710&mv=m&mvi=2&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAMjXxIgb1l44OPSdlpAmSu1PKEF7Qio3f0lqaLYoi_P6AiEAyuwhPCYZdFz5AE1hTQ0dItAD5dG1NQYRfDKkQ5EpnWI="
      },
      {
        id: "6",
        name: "Lauv - Paris in the Rain [Official Video]",
        description: `<p>Lauv’s debut album ~how i’m feeling~ is available March 6th. Pre-Save/Pre-Order now: </p>
                      <p>http://ffm.to/howimfeeling</p>`,
        thumbnail: "https://i.ytimg.com/vi/kOCkne-Bku4/maxresdefault.jpg",
        videoUrl: "https://r8---sn-8qj-i5ozr.googlevideo.com/videoplayback?expire=1579012417&ei=4XwdXoj3D6iBsfIPr7ONuAg&ip=2604%3A180%3A3%3A376%3A8090%3A3d85%3Ab51d%3A98c3&id=o-AMUDu7SAZVSJteSx5xz7SW-DMa_kHrNrecoSyN23sXLR&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=9992138&ratebypass=yes&dur=216.851&lmt=1575731905475036&fvip=6&fexp=23842630&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgYtn4gwZyY0ItK83qiOWSEr1CSDuAEOTNznjAaBS-7qMCIHmN7kIXEYWtBi0b8ndz9EGEXHg3Z-UfjvkVDX5hhrpJ&redirect_counter=1&rm=sn-n4vls76&req_id=1e5311dae883a3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozr&ms=au&mt=1578990710&mv=m&mvi=7&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgfLsM7DSpoBnIeYVVcaoaG8Da0aZr9FG1_seYXOY-yQwCIQD4AeDo6zgpAmo3dkNJjN_NqjpzFuBRAG0Izqjgeisrvw=="
      },
      {
        id: "7",
        name: "Jeremy Zucker - comethru",
        description: `<p>Music video by Jeremy Zucker performing comethru. © 2018 Republic Records, a division of UMG Recordings, Inc.</p>`,
        thumbnail: "https://i.ytimg.com/vi/jO2viLEW-1A/maxresdefault.jpg",
        videoUrl: "https://r6---sn-8qj-i5ozd.googlevideo.com/videoplayback?expire=1579013457&ei=8YAdXrDEAt6dkwb1o5SoAQ&ip=2604%3A180%3A3%3A376%3A8090%3A3d85%3Ab51d%3A98c3&id=o-APZ0a8ZH5RxISJexKxJd3UKT5DApVjbHXYJDH-buD4Hw&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=7871053&ratebypass=yes&dur=181.069&lmt=1576215218072724&fvip=6&fexp=23842630&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAJS-eBS2p0QnYvxywruvsDvS9WLvCA4-TzgCUwj0Tb5WAiASNUs76uLxeQJIpOOKuwURZI1kEc9dunzceGo5g4g2-Q==&redirect_counter=1&rm=sn-n4ved7d&req_id=5c42a15f580ea3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozd&ms=au&mt=1578991797&mv=m&mvi=5&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhALOWB4QSEM9z9nvrb8wiKMCkqt169_HKBbiHoAP8h92AAiAMoTPBAsSmzB0hrn3IlokqrU5MaxjXJe_MbaCX9-4baA=="
      },
      {
        id: "8",
        name: "Khalid - Talk (Lyrics)",
        description: `<p>If you are an artist and don't want your music or your image on my channel, please contact me via my channel email and I will remove your content within 24 hours.</p>`,
        thumbnail: "https://i.ytimg.com/vi/Y1QZOprK7PQ/maxresdefault.jpg",
        videoUrl: "https://r4---sn-8qj-i5ozd.googlevideo.com/videoplayback?expire=1579012492&ei=LH0dXr2XOdbzkgaitIG4CQ&ip=2604%3A180%3A3%3A376%3A8090%3A3d85%3Ab51d%3A98c3&id=o-ABFf-VSbGE3cUXfF_1wAW7cEekecDoKOPohe--WFFzNQ&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=8894404&ratebypass=yes&dur=198.623&lmt=1576589586465532&fvip=4&fexp=23842630,23860862&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAPyOm5PVuPnviUlkQ7UlGr3YCU06bn1xmVUBMZc2y6b2AiEAgZw8bSdmbtzVMiBKIp00lcvH65vmDKmwNqVsSSEh9TI=&redirect_counter=1&rm=sn-o09lk7z&req_id=e318ebca9e92a3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozd&ms=au&mt=1578990826&mv=m&mvi=3&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgRvR0yIrtnQh8TToDcUNjZmIWSrVTS9tizDMwlp9SfQICIGi2Vskjvforo581SuIKDFIgdi4bXULM-8TpEmavDiya"
      },
      {
        id: "9",
        name: "Có Chàng Trai Viết Lên Cây - Phan Mạnh Quỳnh | MẮT BIẾC OST",
        description: `<p>Video này như một hành trình của Có chàng trai viết lên cây đi cùng mối tình Mắt Biếc. Phiên bản đã thay đổi 1 câu hát để trở thành phiên bản hoàn hảo của Mắt Biếc.</p>`,
        thumbnail: "https://i.ytimg.com/vi/MNm77lvTfi4/maxresdefault.jpg",
        videoUrl: "https://r6---sn-8qj-i5ozr.googlevideo.com/videoplayback?expire=1579012521&ei=SX0dXp6kDdGJkgaAzZ2QBw&ip=2604%3A180%3A3%3A376%3A8090%3A3d85%3Ab51d%3A98c3&id=o-AKCZuOrUbSGT08-F_g9txHK7eazH40eKkd35o3-cPCE_&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=23975571&ratebypass=yes&dur=304.576&lmt=1576531908820949&fvip=5&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhANQ2ed2b3VVhOsNwKipnHm5vmNqwTuDtneD14QaBUpOZAiEA8YVrTMChJ1ORx2OJRYSu0wOfn4s8Hq0IpTSAe3XSSGI%3D&redirect_counter=1&rm=sn-n4vl676&req_id=2124ab58d68ca3ee&cms_redirect=yes&ipbypass=yes&mip=14.160.24.90&mm=31&mn=sn-8qj-i5ozr&ms=au&mt=1578990826&mv=m&mvi=5&pl=23&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhANpZBtTe3za4_kBjlfzS7CRe5jfrwqglfKcy6xwvuMgBAiA2-N0Mrpy0H-Iyv4OIiZHRAeg0yHXNwIaqE55eNawcMw=="
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
