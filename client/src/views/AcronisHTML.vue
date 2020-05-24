<template>
	<div class="container">
		<!-- Main Article -->
		<div class="main-article">
			<div class="main-article-small-title">
				Sync and Share
			</div>
			<div class="title main-article-title">
				Acronis Cyber Disaster Recovery Cloud
			</div>
			<div class="main-article-just-updated">
				Just Updated
			</div>
			<div class="main-article-content">
				A turnkey, self-service solution that lets you protect your customers’ workloads by recovering their IT systems
				and applications utilizing the Acronis cloud infrastructure.
			</div>
		</div>
		<!-- Article 1 -->
		<div class="article1">
			<img src="../assets/article-1.svg" alt="aritcle1 icon" class="article1-icon" />
			<div class="title article1-title">
				AAFP Connection to File Shares
			</div>
			<div class="article1-content">
				With Acronis Files Connect, Macs connect to and mount file shares on Windows file servers and NAS as native AFP
				volumes. This allows Mac users to continue using the same tools.
			</div>
		</div>
		<!-- Article 2 -->
		<div class="article2">
			<img src="../assets/article-2.svg" alt="aritcle2 icon" class="article2-icon" />
			<div class="title article2-title">
				File Access for Mobile Devices
			</div>
			<div class="article2-content">
				<span>Acronis Files Connect</span> isn’t limited to Macs. Seamless file access is also provided for mobile
				devices (iOS, Android, and Windows Phone) with intuitive browsing, searching, previewing.
			</div>
		</div>
		<!-- Article 3 -->
		<div class="article3">
			<img src="../assets/article-3.svg" alt="aritcle3 icon" class="article3-icon" />
			<div class="article3-exclusive">Exclusive</div>
			<div class="title article3-title">
				Full Content Spotlight Searching
			</div>
			<div class="article3-content">
				Acronis Files Connect links Mac Spotlight to a server-side index that seamlessly integrates with the native
				Windows Search service or a built-in <span>Acronis content indexer</span>.
			</div>
		</div>
		<!-- Article 4 -->
		<div class="article4">
			<img src="../assets/article-4.svg" alt="aritcle4 icon" class="article4-icon" />
			<div class="title article4-title">
				Time Machine Backup to File Shares
			</div>
			<div class="article4-content">
				With Acronis Files Connect, Mac users’ documents can be automatically backed up to a Windows file server or NAS,
				and users can selectively restore previous versions directly.
			</div>
		</div>
		<!-- Article 5 -->
		<div class="article5">
			<img src="../assets/article-5.svg" alt="aritcle5 icon" class="article5-icon" />
			<div class="title article5-title">
				Absolute VM Protection
			</div>
			<div class="article5-content">
				Defend more hypervisors, including RedHat, KVM, Oracle VM, Citrix Xen, VMware and Hyper-V, with simple licensing
				per host allowing protection for an unlimited number of VMs
			</div>
		</div>
		<!-- Article 6 -->
		<div class="article6">
			<img src="../assets/article-6.svg" alt="aritcle6 icon" class="article6-icon" />
			<div class="title article6-title">
				Acronis Instant Restore
			</div>
			<div class="article6-content">
				Reduce outage recovery time with best-in-industry RTO by starting any physical or virtual Windows or Linux
				system directly from the backup storage
			</div>
		</div>
		<!-- Learn More -->
		<router-link to="" class="learn-more">Learn More </router-link>
		<img src="../assets/union.svg" alt="" class="learn-more-arrow" />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
	text-align: left;

	.title {
		font-weight: 700;
	}

	.learn-more {
		position: absolute;
		width: 134px;
		height: 32px;
		left: 32px;
		top: 840px;
		font-size: 24px;
		line-height: 32px;
		color: #408bea;
		text-decoration: none;
	}

	.learn-more-arrow {
		position: absolute;
		width: 16px;
		height: 16px;
		left: 182px;
		top: 850px;
		cursor: pointer;
	}

	.article6 {
		&-icon {
			position: absolute;
			width: 48px;
			height: 48px;
			left: 683px;
			top: 656px;
		}

		&-title {
			position: absolute;
			width: 293px;
			height: 24px;
			left: 683px;
			top: 720px;
			color: #00204d;
		}

		&-content {
			position: absolute;
			width: 293px;
			height: 120px;
			left: 683px;
			top: 752px;
			color: rgba(36, 49, 67, 0.9);
		}
	}

	.article5 {
		&-icon {
			position: absolute;
			width: 48px;
			height: 48px;
			left: 357px;
			top: 656px;
		}

		&-title {
			position: absolute;
			width: 294px;
			height: 24px;
			left: 357px;
			top: 720px;
			color: #00204d;
		}

		&-content {
			position: absolute;
			width: 294px;
			height: 120px;
			left: 357px;
			top: 752px;
			color: rgba(36, 49, 67, 0.9);
		}
	}

	.article4 {
		&-icon {
			position: absolute;
			width: 48px;
			height: 48px;
			left: 683px;
			top: 384px;
		}

		&-title {
			position: absolute;
			width: 293px;
			height: 24px;
			left: 683px;
			top: 448px;
			color: #00204d;
		}

		&-content {
			position: absolute;
			width: 293px;
			height: 120px;
			left: 683px;
			top: 480px;
			color: rgba(36, 49, 67, 0.9);
		}
	}

	.article3 {
		&-icon {
			position: absolute;
			width: 48px;
			height: 48px;
			left: 357px;
			top: 384px;
		}

		&-exclusive {
			position: absolute;
			width: 75px;
			height: 16px;
			left: 357px;
			top: 432px;
			background: #9bc225;
			border-radius: 4px;
			font-weight: bold;
			font-size: 11px;
			line-height: 16px;
			text-align: center;
			letter-spacing: 1px;
			text-transform: uppercase;
			color: #ffffff;
		}

		&-title {
			position: absolute;
			width: 294px;
			height: 24px;
			left: 357px;
			top: 448px;
			color: #00204d;
		}

		&-content {
			position: absolute;
			width: 294px;
			height: 120px;
			left: 357px;
			top: 480px;
			color: rgba(36, 49, 67, 0.9);

			span {
				color: #8dbcff;
			}
		}
	}

	.article2 {
		&-icon {
			position: absolute;
			width: 48px;
			height: 48px;
			left: 683px;
			top: 88px;
		}

		&-title {
			position: absolute;
			width: 293px;
			height: 24px;
			left: 683px;
			top: 152px;
			color: #00204d;
		}

		&-content {
			position: absolute;
			width: 293px;
			height: 144px;
			left: 683px;
			top: 184px;
			color: rgba(36, 49, 67, 0.9);

			span {
				color: #8dbcff;
			}
		}
	}

	.article1 {
		&-icon {
			position: absolute;
			width: 48px;
			height: 48px;
			left: 357px;
			top: 88px;
		}

		&-title {
			position: absolute;
			width: 292px;
			height: 24px;
			left: 357px;
			top: 152px;
			color: #00204d;
		}

		&-content {
			position: absolute;
			width: 294px;
			height: 120px;
			left: 357px;
			top: 184px;
			color: rgba(36, 49, 67, 0.9);
		}
	}

	.main-article {
		&-small-title {
			position: absolute;
			width: 293px;
			height: 24px;
			left: 32px;
			top: 88px;
			color: rgba(36, 49, 67, 0.6);
			mix-blend-mode: normal;
		}

		&-title {
			position: absolute;
			width: 293px;
			height: 64px;
			left: 32px;
			top: 120px;
			font-size: 24px;
			line-height: 32px;
			color: #00204d;
		}

		&-just-updated {
			position: absolute;
			width: 293px;
			height: 24px;
			left: 32px;
			top: 192px;
			color: #9bc225;
			mix-blend-mode: normal;
		}

		&-content {
			position: absolute;
			width: 293px;
			height: 144px;
			left: 32px;
			top: 240px;
			font-size: 18px;
			color: #00204d;
		}
	}
}

@media (max-width: 1023px) {
	.container {
		.learn-more {
			width: 134px;
			height: 32px;
			left: 32px;
			top: 1112px;
		}

		.learn-more-arrow {
			left: 182px;
			top: 1122px;
		}

		.article6 {
			&-icon {
				left: 392px;
				top: 840px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 392px;
				top: 904px;
			}

			&-content {
				width: 328px;
				height: 96px;
				left: 392px;
				top: 936px;
			}
		}

		.article5 {
			&-icon {
				left: 32px;
				top: 840px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 32px;
				top: 904px;
			}

			&-content {
				width: 328px;
				height: 120px;
				left: 32px;
				top: 936px;
			}
		}

		.article4 {
			&-icon {
				left: 392px;
				top: 568px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 392px;
				top: 632px;
			}

			&-content {
				width: 328px;
				height: 120px;
				left: 392px;
				top: 664px;
			}
		}

		.article3 {
			&-icon {
				left: 32px;
				top: 568px;
			}

			&-exclusive {
				left: 32px;
				top: 616px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 32px;
				top: 632px;
			}

			&-content {
				width: 328px;
				height: 96px;
				left: 32px;
				top: 664px;
			}
		}

		.article2 {
			&-icon {
				left: 392px;
				top: 296px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 392px;
				top: 360px;
			}

			&-content {
				width: 328px;
				height: 120px;
				left: 392px;
				top: 392px;
			}
		}

		.article1 {
			&-icon {
				left: 32px;
				top: 296px;
			}

			&-title {
				width: 326px;
				height: 24px;
				left: 32px;
				top: 360px;
			}

			&-content {
				width: 328px;
				height: 120px;
				left: 32px;
				top: 392px;
			}
		}

		.main-article {
			&-small-title {
				width: 704px;
				height: 24px;
				left: 32px;
				top: 64px;
			}

			&-title {
				width: 704px;
				height: 32px;
				left: 32px;
				top: 96px;
			}

			&-just-updated {
				width: 704px;
				height: 24px;
				left: 32px;
				top: 136px;
			}

			&-content {
				width: 704px;
				height: 72px;
				left: 32px;
				top: 184px;
			}
		}
	}
}

@media (max-width: 575px) {
	.container {
		.learn-more {
			width: 134px;
			height: 32px;
			left: 16px;
			top: 1952px;
		}

		.learn-more-arrow {
			left: 166px;
			top: 1962px;
		}

		.article6 {
			&-icon {
				left: 16px;
				top: 1704px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 16px;
				top: 1768px;
			}

			&-content {
				width: 328px;
				height: 96px;
				left: 16px;
				top: 1800px;
			}
		}

		.article5 {
			&-icon {
				left: 16px;
				top: 1440px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 16px;
				top: 1504px;
			}

			&-content {
				width: 328px;
				height: 120px;
				left: 16px;
				top: 1536px;
			}
		}

		.article4 {
			&-icon {
				left: 16px;
				top: 1168px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 16px;
				top: 1232px;
			}

			&-content {
				width: 328px;
				height: 120px;
				left: 16px;
				top: 1264px;
			}
		}

		.article3 {
			&-icon {
				left: 16px;
				top: 920px;
			}

			&-exclusive {
				left: 16px;
				top: 968px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 16px;
				top: 984px;
			}

			&-content {
				width: 328px;
				height: 96px;
				left: 16px;
				top: 1016px;
			}
		}

		.article2 {
			&-icon {
				left: 16px;
				top: 648px;
			}

			&-title {
				width: 328px;
				height: 24px;
				left: 16px;
				top: 712px;
			}

			&-content {
				width: 328px;
				height: 120px;
				left: 16px;
				top: 744px;
			}
		}

		.article1 {
			&-icon {
				left: 16px;
				top: 376px;
			}

			&-title {
				width: 326px;
				height: 24px;
				left: 16px;
				top: 440px;
			}

			&-content {
				width: 328px;
				height: 120px;
				left: 16px;
				top: 472px;
			}
		}

		.main-article {
			&-small-title {
				width: 328px;
				height: 96px;
				left: 392px;
				top: 936px;
			}

			&-title {
				width: 328px;
				height: 64px;
				left: 16px;
				top: 96px;
			}

			&-just-updated {
				width: 328px;
				height: 24px;
				left: 16px;
				top: 168px;
			}

			&-content {
				width: 328px;
				height: 120px;
				left: 16px;
				top: 216px;
			}
		}
	}
}

@media (min-width: 1280px) {
	.container {
		.learn-more {
			width: 134px;
			height: 32px;
			left: 66px;
			top: 744px;
		}

		.learn-more-arrow {
			left: 216px;
			top: 754px;
		}

		.article6 {
			&-icon {
				left: 843px;
				top: 584px;
			}

			&-title {
				width: 357px;
				height: 24px;
				left: 843px;
				top: 648px;
			}

			&-content {
				width: 357px;
				height: 96px;
				left: 843px;
				top: 680px;
			}
		}

		.article5 {
			&-icon {
				left: 453px;
				top: 584px;
			}

			&-title {
				width: 358px;
				height: 24px;
				left: 453px;
				top: 648px;
			}

			&-content {
				width: 358px;
				height: 96px;
				left: 453px;
				top: 680px;
			}
		}

		.article4 {
			&-icon {
				left: 843px;
				top: 336px;
			}

			&-title {
				width: 357px;
				height: 24px;
				left: 843px;
				top: 400px;
			}

			&-content {
				width: 357px;
				height: 96px;
				left: 843px;
				top: 432px;
			}
		}

		.article3 {
			&-icon {
				left: 453px;
				top: 336px;
			}

			&-exclusive {
				left: 453px;
				top: 384px;
			}

			&-title {
				width: 358px;
				height: 24px;
				left: 453px;
				top: 400px;
			}

			&-content {
				width: 358px;
				height: 96px;
				left: 453px;
				top: 432px;
			}
		}

		.article2 {
			&-icon {
				left: 453px;
				top: 88px;
			}

			&-title {
				width: 357px;
				height: 24px;
				left: 843px;
				top: 152px;
			}

			&-content {
				width: 357px;
				height: 96px;
				left: 843px;
				top: 184px;
			}
		}

		.article1 {
			&-icon {
				left: 453px;
				top: 88px;
			}

			&-title {
				width: 358px;
				height: 24px;
				left: 453px;
				top: 152px;
			}

			&-content {
				width: 358px;
				height: 96px;
				left: 453px;
				top: 184px;
			}
		}

		.main-article {
			&-small-title {
				width: 357px;
				height: 24px;
				left: 64px;
				top: 88px;
			}

			&-title {
				width: 357px;
				height: 64px;
				left: 64px;
				top: 120px;
			}

			&-just-updated {
				width: 357px;
				height: 24px;
				left: 64px;
				top: 192px;
			}

			&-content {
				width: 357px;
				height: 120px;
				left: 64px;
				top: 240px;
			}
		}
	}
}

@media (min-width: 1440px) {
	.container {
		.learn-more {
			width: 134px;
			height: 32px;
			left: 64px;
			top: 744px;
		}

		.learn-more-arrow {
			left: 214px;
			top: 754px;
		}

		.article6 {
			&-icon {
				left: 949px;
				top: 584px;
			}

			&-title {
				width: 340px;
				height: 24px;
				left: 949px;
				top: 648px;
			}

			&-content {
				width: 360px;
				height: 72px;
				left: 949px;
				top: 680px;
			}
		}

		.article5 {
			&-icon {
				left: 507px;
				top: 584px;
			}

			&-title {
				width: 410px;
				height: 24px;
				left: 507px;
				top: 648px;
			}

			&-content {
				width: 360px;
				height: 96px;
				left: 507px;
				top: 680px;
			}
		}

		.article4 {
			&-icon {
				left: 949px;
				top: 336px;
			}

			&-title {
				width: 411px;
				height: 24px;
				left: 949px;
				top: 400px;
			}

			&-content {
				width: 340px;
				height: 96px;
				left: 949px;
				top: 432px;
			}
		}

		.article3 {
			&-icon {
				left: 507px;
				top: 336px;
			}

			&-exclusive {
				left: 507px;
				top: 384px;
			}

			&-title {
				width: 340px;
				height: 24px;
				left: 507px;
				top: 400px;
			}

			&-content {
				width: 340px;
				height: 96px;
				left: 507px;
				top: 432px;
			}
		}

		.article2 {
			&-icon {
				left: 949px;
				top: 88px;
			}

			&-title {
				width: 411px;
				height: 24px;
				left: 949px;
				top: 152px;
			}

			&-content {
				width: 360px;
				height: 96px;
				left: 949px;
				top: 184px;
			}
		}

		.article1 {
			&-icon {
				left: 507px;
				top: 88px;
			}

			&-title {
				width: 408px;
				height: 24px;
				left: 507px;
				top: 152px;
			}

			&-content {
				width: 360px;
				height: 96px;
				left: 507px;
				top: 184px;
			}
		}

		.main-article {
			&-small-title {
				width: 411px;
				height: 24px;
				left: 64px;
				top: 88px;
			}

			&-title {
				width: 395px;
				height: 64px;
				left: 64px;
				top: 120px;
			}

			&-just-updated {
				width: 411px;
				height: 24px;
				left: 64px;
				top: 192px;
			}

			&-content {
				width: 355px;
				height: 96px;
				left: 64px;
				top: 240px;
			}
		}
	}
}
</style>
