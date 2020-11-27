import React from 'react';
// import falcon from '../../falcon-1.png';
// import RelaxWrapper from 'react-rellax-wrapper';
import { ParallaxProvider } from 'react-scroll-parallax'

import './features.css';

const rocketImages =  {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship',
}


const Features = ({
			name, 
			height, 
			diameter, 
			mass, 
			payload_weights:payloadWeights, 
			description
		}) => (
		<section className="features">
			<h2 className="features-title">
				{name} <br/>Overview
			</h2>
			<div className="overview">
				<table className="table">
					<caption className="table-title">
						Size
					</caption>
					<thead>
						<tr>
							<td className="table-column">HEIGHT</td>
							<td className="table-column">{height.meters} m / {height.feet} ft</td>
						</tr>
						<tr>
							<td className="table-column">DIAMETERS</td>
							<td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
						</tr>
						<tr>
							<td className="table-column">MASS</td>
							<td className="table-column">{mass.kg} kg / {mass.kg} lb</td>
						</tr>

						{payloadWeights.map((item) => (
							<tr key={item.id}>
								<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
								<td className="table-column">{item.kg} kg / {item.lb} lb</td>
							</tr>							
						))}

					</thead>
				</table>
				<div className="rocket-container">
					<ParallaxProvider y={[50, -200]}>
						<img 
							src={`img/${rocketImages[name]}.png`} 
							alt="rocket"
							className="rocket" 							
						/>
					</ParallaxProvider>
				</div>
				{/* <RelaxWrapper speed={14}>
				</RelaxWrapper> */}
				{/* <RellaxWrapper speed={7}>
					<h1>I am really fast!</h1>
				</RellaxWrapper> */}
				<article>
					<h3 className="features-subtitle">DESCRIPTION</h3>
					<p className="features-text">
						{description}
					</p>
				</article>
			</div>
		</section>
	); 

export default Features;