import React from 'react';

export const MasterCardLogo = ({ active, className }) => {
	const classes = {
		container: {
			border: '1px solid #D9D9D9',
			background: active ? 'white' : '#FAFAFC',
			borderRadius: '6px',
			width: '50px',
			height: '40px',
			padding: '6px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			transition: 'all 0.2s ease',
			transform: active ? 'scale(1.1)' : null,
			boxShadow: active ? '1px 2px 3px rgba(0,0,0,0.2)' : null,
		},
	};
	return (
		<div style={classes.container} className={className}>
			<svg
				preserveAspectRatio='xMidYMid meet'
				width='100%'
				viewBox='0 0 82 51'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M29.8845 5.3512H52.0341V44.6869H29.8845V5.3512Z'
					fill='#FF5F00'
				/>
				<path
					d='M31.291 25.0192C31.291 17.0271 35.088 9.93817 40.9241 5.3512C36.6351 2.01537 31.2209 0 25.3143 0C11.3208 0 0 11.189 0 25.0192C0 38.8492 11.3208 50.0385 25.314 50.0385C31.2205 50.0385 36.6348 48.0231 40.9241 44.6869C35.088 40.1696 31.291 33.0114 31.291 25.0192Z'
					fill='#EB001B'
				/>
				<path
					d='M81.9186 25.0192C81.9186 38.8492 70.5978 50.0385 56.6047 50.0385C50.6981 50.0385 45.2839 48.0231 40.9946 44.6869C46.9011 40.1003 50.6279 33.0114 50.6279 25.0192C50.6279 17.0271 46.8306 9.93817 40.9946 5.3512C45.2835 2.01537 50.6981 0 56.6047 0C70.5978 0 81.919 11.2586 81.919 25.0192H81.9186Z'
					fill='#F79E1B'
				/>
			</svg>
		</div>
	);
};
