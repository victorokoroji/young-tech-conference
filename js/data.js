const projectDatas = [
	{
		featuredImage: './assets/images/speaker-one.jpg',
		name: 'Fatiu Ibrahim',
		qualification: 'Content Writer, University of Lagos',
		description:
			'Fatiu is a content creator, who lectures in the university and also in high school.',
	},
	{
		featuredImage: './assets/images/speaker-two.jpg',
		name: 'Victor Okoroji',
		qualification: 'President, Nigeria Union of Teachers',
		description:
			'Victor is a computer teacher in Roemichs college who enjoys building young ones in tech.',
	},
	{
		featuredImage: './assets/images/speaker-three.jpg',
		name: 'Musa Opaluwa',
		qualification: 'Executive Director of Tech specialist',
		description:
			'Musa founded a fellowship with the sole purpose of training aspiring software developers and easing their journey into software development.',
	},
	{
		featuredImage: './assets/images/speaker-six.jpg',
		name: 'Pamela Odeh',
		qualification: 'Product Manager, TIIDELab Initiative',
		description:
			'She has contributed to bulding over 40 products over her 12 years experience. She has involved herself in sponsoring tech fellowships to train young aspiring developers.',
	},
	{
		featuredImage: './assets/images/speaker-four.jpg',
		name: 'Christopher Abraham',
		qualification: 'DevOps Engineer, K-Solutions limited',
		description:
			'A professional software enginner with numerous experiences in building amazing products.',
	},
	{
		featuredImage: './assets/images/speaker-five.jpg',
		name: 'Adeyemi Buhari',
		qualification: 'Founder, NovuStack',
		description:
			'Buhari helped introduce innovate for Africa, with the sole purpose of giving young developers enabling environment to showcase there skills in engineering technolog.',
	},
]

document.querySelector('.keynote-speakers').innerHTML = projectDatas
	.map(
		data => `
    	<div class="speaker">
					<img src=${data.featuredImage} alt="speaker" />
					<div class="speaker-description">
						<h3>${data.name}</h3>
						<p class="speaker-qualification">${data.qualification}</p>
						<p
							>${data.description}</p
						>
					</div>
				</div>
`,
	)
	.join('')
