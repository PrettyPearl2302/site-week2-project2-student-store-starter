import "./About.css"

export default function About() {
    return (
		<>
			<h3 id="about" className="about-header">About</h3>
			<div className="about-container">
				<div className="about-desc">
					<p>
					The codepath student store offers great products at great
					prices from a great team and for a great cause. 
					</p>
					<p>
					We've
					searched far and wide for items that perk the interests of
					even the most eccentric students and decided to offer them
					all here in one place.
					</p>
					<p>
					All proceeds go towards bringing high
					quality CS education to college students around the country.
					</p>
				</div>
				<div className="about-image-container">
					<img
						className="about-image"
						src="/codepath-logo.png"
						alt="logo"
					/>
				</div>
			</div>
		</>
	)
};