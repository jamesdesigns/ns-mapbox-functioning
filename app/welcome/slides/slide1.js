const slide = `
<GridLayout row="0" rows="*, 2*, *">
	<GridLayout width="100%" row="0" horizontalAlignment="center" verticalAlignment="center">
		<Label class="lobster-regular carousel-item-head" text="Welcome to UTA MOTION" textWrap="true"></Label>
		<Image src="~/images/UTA-MOTION-APP-FINAL.jpg" horizontalAlignment="center" stretch="aspectFill" ></Image>
		</GridLayout>
	<GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
		<Label class="fa carousel-item-icon" text="&#xf041;" textWrap="true"></Label>
	</GridLayout>
	<GridLayout width="49%" row="2" horizontalAlignment="center" verticalAlignment="center">
		<Label class="opensans-regular carousel-item-desc" text="Let's take a quick overview of all our features." textWrap="true"></Label>
	</GridLayout>
</GridLayout>
`
module.exports = { slide }
