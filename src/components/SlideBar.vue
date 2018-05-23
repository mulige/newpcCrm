<template>

	<el-row id="slider">
		<el-col>
			<el-menu :default-openeds="['0','1','2','3']">
				<template v-for="(nav,navIndex) in sliderArr">
					<el-submenu v-if="nav.child" :index="navIndex.toString()">
						<template slot="title"><i class="el-icon-message"></i>{{nav.name}}</template>
						<el-menu-item v-for="(child,index) in nav.child" :index="navIndex + '-' + index" :key="index">
							<a class="nav" :href="'#'+child.id" :class="{'selected':flag==child.id}" @click="flag=child.id">{{child.name}}</a>
						</el-menu-item>
					</el-submenu>

					<el-submenu v-else :index="navIndex.toString()">
						<template slot="title">
							<a class="nav" @click="flag=nav.id" :class="flag==nav.id?'selected':''" :href="'#'+nav.id">{{nav.name}}</a>
						</template>
					</el-submenu>
				</template>
			</el-menu>

		</el-col>
	</el-row>

</template>

<script>
export default {
  name: 'sliderBar',
  props: ['sliderArr'],
  data () {
    return {
      flag: null,
      idList: []
    }
  },
  methods: {

    getIdList () {
      let idList = []
      for (var i = 0; i < this.sliderArr.length; i++) {
        if (this.sliderArr[i].child) {
          if (this.sliderArr[i].id) {
            idList.push(this.sliderArr[i].id)
          }
          for (let j = 0; j < this.sliderArr[i].child.length; j++) {
            idList.push(this.sliderArr[i].child[j].id)
          }
        }
      }
      return idList
    }
  },
  created () {
    this.idList = this.getIdList()
    console.log(this.idList)
    this.flag = this.idList[0]
  },

  mounted () {
    var _this = this
    this.$nextTick(() => {
      var oDiv = document.getElementById('content')
      var oList = []
      for (var i = 0; i < _this.idList.length; i++) {
        console.log(document.getElementById(_this.idList[i]))
        oList.push(document.getElementById(_this.idList[i]).offsetTop - oDiv.offsetHeight / 2)
      }
      oDiv.addEventListener('scroll', function () {
        for (let j = 0; j < oList.length; j++) {
          if (oList[j] <= oDiv.scrollTop) {
            _this.flag = _this.idList[j]
          }
        }
      })
    })
  }

}
</script>

<style lang="scss" scoped>
	a {
		display: block;
		width: 100%;
		text-decoration: none;
		color: #ccc;
	}

	#slider {
		width: 100%;
	}

	#first {
		height: 500px;
		background: blue;
	}

	#seconed {
		height: 600px;
		background: yellow;
	}

	#third {
		height: 450px;
		background: chocolate;
	}

	#forth {
		height: 700px;
		background: skyblue;
	}

	.selected {
		color: #409EFF;
	}

	.nav:hover {
		color: #409EFF;
	}
</style>
