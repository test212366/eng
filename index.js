(() => {
	class MainFuncSite {
		infoButton = document.getElementById('info-btn')
		consultationButton = document.getElementById('consult-btn')
	 
		
		constructor() {
			this.infoButton.addEventListener("click", () => this.showBlock(document.getElementById('edication-price')))
			this.consultationButton.addEventListener("click", () => this.showBlock(document.getElementById('order')))
		}
		 
		showBlock(block) {
			block.scrollIntoView({
				behavior: 'smooth',
		
			})
		}
		
	}
	new MainFuncSite()
})()