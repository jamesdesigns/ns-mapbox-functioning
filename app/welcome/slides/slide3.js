let slide = `
<GridLayout row="0" rows="*, 2*, *">
	<GridLayout width="56%" row="0" horizontalAlignment="center" verticalAlignment="center">
		<Label class="lobster-regular carousel-item-head" text="Save Time" textWrap="true"></Label>
	</GridLayout>
	<GridLayout class="carousel-item-circle" row="1" horizontalAlignment="center" verticalAlignment="center">
		<Label class="fa carousel-item-icon" text="&#xf017;" textWrap="true"></Label>
	</GridLayout>
	<GridLayout width="49%" row="2" horizontalAlignment="center" verticalAlignment="center">
		<Label class="opensans-regular carousel-item-desc" text="Find your destination and never miss your departure again." textWrap="true"></Label>
	</GridLayout>
</GridLayout>
`
module.exports = { slide }