<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				<img src="../assets/logo/banner.png" />
			</el-col>
			<el-col v-if=this.isLogin :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner">{{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="navi">
			<aside>
				<el-menu mode="horizontal"
						 :default-active="$route.path"
						 class="el-menu-vertical-demo"
						 @open="handleopen"
						 @close="handleclose"
						 @select="handleselect"
						 unique-opened
						 router
						 v-show="!collapsed"
						 background-color="#f2f2f2"
						 text-color="#303133"
						 active-text-color="#409EFF">
					<template
							v-for="(item,index) in $router.options.routes"
							v-if="!item.hidden && isContained(role,item.role)">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item
									v-for="child in item.children"
									:index="child.path"
									:key="child.path"
									v-if="!child.hidden&& (!child.role||isContained(role,child.role))">
								{{child.name}}
							</el-menu-item>
						</el-submenu>
						<el-menu-item
								v-if="item.leaf&&item.children.length>0"
								:index="item.children[0].path">
							<i :class="item.iconCls"></i>
							{{item.children[0].name}}
						</el-menu-item>
					</template>
				</el-menu>
			</aside>
		</el-col>
		<el-col>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
	export default {
        inject : ['reload'],
		data() {
			return {
				sysName:'VUEADMIN',
				collapsed:false,
				sysUserName: '',
				isLogin: false,
				role: ['admin'],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
                activeIndex: '1',
                activeIndex2: '1'
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					if (this.$route.path === '/'){
                        this.reload();
					}
					this.$router.push('/');
                    this.reload();
				}).catch(() => {

				});


			},
            login: function () {
                this.$router.push('/login');
            },
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
            isContained:function(aa,bb) {
                if (!(aa instanceof Array) || !(bb instanceof Array) || ((aa.length < bb.length))) {
                    return false;
                }
                var aaStr = aa.toString();
                for (var i = 0; i < bb.length; i++) {
                    if (aaStr.indexOf(bb[i]) < 0) return false;
                }
                return true;
            },
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.isLogin = true;
                this.role.push('user');
				this.sysUserName = user.sShortName || '';
			}else {
                this.isLogin = false;
                this.role = ['admin'];
			}

		}
	}

</script>
<style type="text/scss" scoped lang="scss">
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.content-container {
			flex: 1;
			width: 100%;
			overflow-y: auto;
			/*padding: 0px 20px 20px 20px;*/
			position: absolute;
			top: 120px;
			bottom: 0;
			.content-wrapper {
				padding-left: 20px;
				padding-right: 20px;
				padding-bottom: 20px;
				padding-top: 20px;
				background-color: #fff;
				box-sizing: border-box;
			}
		}
		.header {
			height: 60px;
			line-height: 60px;
			background: #409EFF;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				height:60px;
				padding-left:20px;
				img {
					width: 200px;
					float: left;
				}
			}
			.logo-width{
				width:268px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.navi {
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				width: 100%;
				.el-menu{
					z-index: 999;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 268px;
				width: 230px;
			}
		}
	}
</style>