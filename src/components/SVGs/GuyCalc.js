import React, { useEffect } from 'react';
// gsap
import gsap from 'gsap';

export const GuyCalc = () => {
	useEffect(() => {
		gsap
			.timeline({ defaults: { duration: 1, ease: 'power2.in.out' } })
			.fromTo(
				'#guyCalc',
				{ y: 10 },
				{ y: -10, yoyo: true, duration: 5, repeat: -1 }
			);
	}, []);

	return (
		<svg
			preserveAspectRatio='xMidYMid meet'
			width='100%'
			// height='306'
			viewBox='0 0 406 306'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='mortgageLanding'>
				<path
					id='background'
					d='M399.349 240.096C398.943 243.413 398.233 246.685 397.226 249.872C391.779 267.175 378.111 282.2 362.123 291.519C343.567 302.361 327.951 306.959 311.942 306.959C303.785 306.884 295.665 305.841 287.753 303.852C286.718 303.604 285.682 303.334 284.574 303.055C281.913 302.351 279.19 301.574 276.404 300.704L273.028 299.669L271.309 299.089C269.011 298.323 266.681 297.505 264.289 296.635L260.675 295.299C248.963 290.929 237.687 284.83 226.172 279.839C215.558 275.252 204.727 271.555 193.212 271.13C164.218 269.95 138.331 289.231 109.689 294.181C75.3001 300.093 38.6952 283.308 18.7308 254.728C17.7367 253.306 16.7875 251.867 15.8832 250.41C15.6036 249.975 15.3447 249.53 15.0755 249.095C14.361 247.914 13.6879 246.744 13.0045 245.543C12.7042 245.005 12.4143 244.456 12.1347 243.907C11.8551 243.358 11.5134 242.706 11.2235 242.105L11.151 241.96C10.8403 241.349 10.5504 240.749 10.2708 240.138C7.60739 234.434 5.46553 228.5 3.87143 222.41C-1.91794 200.042 -0.773193 176.443 7.15395 154.74C7.86845 152.804 8.63472 150.888 9.47347 148.993C13.5533 139.653 19.1554 130.82 26.8491 124.121C42.3816 110.607 64.127 107.366 82.766 98.6785C91.775 94.3828 100.242 89.0333 107.991 82.7422C135.204 61.1728 156.659 30.8845 187.351 13.9955C200.469 6.87808 214.931 2.58534 229.807 1.39351C254.806 -0.64976 279.822 5.14085 301.38 17.9615C315.401 26.3594 328.49 36.0516 339.808 61.9494C346.072 76.26 351.778 95.5306 356.821 122.246C357.407 125.349 358.157 128.418 359.068 131.442C365.778 153.788 380.534 175.015 390.309 196.927C395.279 208.058 398.935 219.387 399.628 231.098C399.808 234.1 399.714 237.112 399.349 240.096Z'
					fill='#FFF'
					fillOpacity={0.1}
				/>
				<g id='guyCalc'>
					<path
						id='Vector'
						d='M279.118 264.039L212.359 263.645C211.243 263.645 210.138 263.425 209.107 262.998C208.076 262.571 207.14 261.944 206.351 261.155C205.563 260.365 204.937 259.428 204.511 258.396C204.085 257.365 203.867 256.26 203.868 255.144V141.384C203.868 139.132 204.763 136.972 206.355 135.38C207.947 133.788 210.107 132.893 212.359 132.893H281.189C283.441 132.893 285.6 133.788 287.193 135.38C288.785 136.972 289.68 139.132 289.68 141.384L287.66 255.548C287.659 256.667 287.437 257.774 287.006 258.807C286.576 259.84 285.946 260.778 285.152 261.567C284.358 262.356 283.417 262.98 282.381 263.405C281.346 263.829 280.237 264.044 279.118 264.039Z'
						fill='#5A6FAF'
					/>
					<path
						id='Vector_2'
						opacity='0.1'
						d='M282.369 167.334L271.869 170.005C255.177 174.251 237.687 174.251 220.995 170.005L210.526 167.334V140.411H282.338L282.369 167.334Z'
						fill='#020202'
					/>
					<path
						id='Vector_3'
						d='M278.652 144.449H214.854V161.328H278.652V144.449Z'
						fill='white'
					/>
					<path
						id='Vector_4'
						opacity='0.1'
						d='M228.585 184.347H214.885V198.461H228.585V184.347Z'
						fill='#020202'
					/>
					<path
						id='Vector_5'
						opacity='0.1'
						d='M245.246 184.347H231.547V198.461H245.246V184.347Z'
						fill='#020202'
					/>
					<path
						id='Vector_6'
						opacity='0.1'
						d='M261.897 184.347H248.198V198.461H261.897V184.347Z'
						fill='#020202'
					/>
					<path
						id='Vector_7'
						opacity='0.1'
						d='M278.051 184.347H264.351V198.461H278.051V184.347Z'
						fill='#020202'
					/>
					<path
						id='Vector_8'
						opacity='0.1'
						d='M228.585 202.168H214.885V216.282H228.585V202.168Z'
						fill='#020202'
					/>
					<path
						id='Vector_9'
						opacity='0.1'
						d='M245.246 202.168H231.547V216.282H245.246V202.168Z'
						fill='#020202'
					/>
					<path
						id='Vector_10'
						opacity='0.1'
						d='M261.897 202.168H248.198V216.282H261.897V202.168Z'
						fill='#020202'
					/>
					<path
						id='Vector_11'
						opacity='0.1'
						d='M278.051 202.168H264.351V216.282H278.051V202.168Z'
						fill='#020202'
					/>
					<path
						id='Vector_12'
						opacity='0.1'
						d='M278.051 219.989H264.351V251.913H278.051V219.989Z'
						fill='#020202'
					/>
					<path
						id='Vector_13'
						opacity='0.1'
						d='M228.585 219.989H214.885V234.103H228.585V219.989Z'
						fill='#020202'
					/>
					<path
						id='Vector_14'
						opacity='0.1'
						d='M245.246 219.989H231.547V234.103H245.246V219.989Z'
						fill='#020202'
					/>
					<path
						id='Vector_15'
						opacity='0.1'
						d='M261.897 219.989H248.198V234.103H261.897V219.989Z'
						fill='#020202'
					/>
					<path
						id='Vector_16'
						opacity='0.1'
						d='M228.585 237.799H214.885V251.913H228.585V237.799Z'
						fill='#020202'
					/>
					<path
						id='Vector_17'
						opacity='0.1'
						d='M245.246 237.799H231.547V251.913H245.246V237.799Z'
						fill='#020202'
					/>
					<path
						id='Vector_18'
						opacity='0.1'
						d='M261.897 237.799H248.198V251.913H261.897V237.799Z'
						fill='#020202'
					/>
					<path
						id='Vector_19'
						d='M145.776 104.437C145.901 104.437 145.776 104.251 145.694 104.21C145.091 104.1 144.482 104.028 143.871 103.992C143.253 103.953 142.676 103.67 142.266 103.205C141.998 102.789 141.841 102.311 141.811 101.818L140.671 94.0928C139.74 87.8177 140.268 81.5633 139.947 75.2261C139.879 74.5727 139.91 73.9129 140.04 73.269C140.195 72.7575 140.382 72.2561 140.599 71.7675C141.21 69.8067 141.401 67.739 141.158 65.6995C141.187 65.4326 141.153 65.1627 141.06 64.9111C140.967 64.6595 140.816 64.4331 140.62 64.2498C139.802 63.7217 138.901 64.7675 138.497 65.6581L137.461 67.9776C137.42 68.1026 137.345 68.2137 137.244 68.2986C137.147 68.3446 137.041 68.3685 136.933 68.3685C136.826 68.3685 136.72 68.3446 136.623 68.2986C134.914 67.8326 133.04 67.2631 132.139 65.7202C131.476 64.5915 131.331 62.9554 130.068 62.4584C129.523 62.314 128.944 62.3798 128.445 62.6425C127.946 62.9053 127.565 63.3459 127.376 63.877C127.044 64.9541 126.99 66.0976 127.22 67.201C127.5 69.4169 127.842 71.7468 129.24 73.4761C129.89 74.1469 130.492 74.8632 131.041 75.6195C131.561 76.7249 131.803 77.9407 131.745 79.161L132.45 103.329C132.512 105.732 132.636 108.279 134.024 110.236C135.753 112.659 138.932 113.477 141.852 114.026C143.317 114.397 144.842 114.471 146.336 114.244C147.08 114.113 147.774 113.782 148.344 113.286C148.913 112.789 149.336 112.147 149.566 111.427C149.653 110.778 149.611 110.118 149.442 109.486C149.274 108.853 148.981 108.26 148.583 107.741C147.889 106.643 146.263 105.649 145.776 104.437Z'
						fill='#F9D0B4'
					/>
					<path
						id='Vector_20'
						d='M135.1 71.374C133.906 71.6935 132.662 71.7814 131.435 71.6329C130.592 71.6865 129.76 71.4202 129.105 70.8873C128.85 70.5202 128.675 70.1042 128.589 69.6658C128.504 69.2273 128.51 68.7759 128.608 68.34C128.604 68.2113 128.648 68.0858 128.732 67.9879C128.852 67.9114 128.997 67.8854 129.136 67.9155L134.966 68.4229C135.825 68.4953 137.637 68.2261 137.275 69.4584C137.076 69.9183 136.778 70.3286 136.402 70.6598C136.026 70.9909 135.582 71.2349 135.1 71.374Z'
						fill='#E2B596'
					/>
					<path
						id='Vector_21'
						d='M226.949 123.17L217.05 125.054L211.634 126.09L206.457 118.437C203.951 116.087 203.992 115.6 202.573 118.727C198.68 127.281 192.291 142.927 191.794 154.638L188.687 154.286L148.976 149.616L160.035 113.829L145.466 115.321L142.898 103.257L166.642 95.5011C169.125 94.8124 171.671 94.3786 174.242 94.2068C181.801 93.7304 195.377 93.1713 203.909 96.5056C215.269 100.834 226.949 123.17 226.949 123.17Z'
						fill='#5A6FAF'
					/>
					<path
						id='Vector_22'
						d='M225.396 122.497C225.396 122.497 229.631 129.02 228.575 131.557C227.519 134.094 205.597 143.414 205.597 143.414C204.044 143.476 202.977 145.101 202.491 146.593C202.112 148.177 201.842 149.786 201.683 151.408C201.521 153.045 200.753 154.563 199.529 155.664C199.067 156.05 198.485 156.262 197.883 156.264C197.479 156.231 197.087 156.111 196.733 155.912C195.907 155.4 195.216 154.695 194.72 153.859C194.225 153.022 193.938 152.078 193.886 151.107C193.813 149.16 194.2 147.224 195.014 145.454H192.446C192.032 144.584 193.275 143.931 194.176 143.631C198.059 142.337 215.227 129.238 215.352 128.295C215.476 127.353 212.742 125.189 212.742 125.189C216.7 123.341 221.028 122.42 225.396 122.497V122.497Z'
						fill='#F9D0B4'
					/>
					<path
						id='Vector_23'
						d='M176.427 84.0899C176.414 85.0494 176.543 86.0057 176.81 86.9272C177.14 87.9709 177.728 88.9147 178.519 89.6713C179.296 90.4168 180.352 90.8931 180.59 92.0425C180.691 92.7559 180.641 93.4825 180.445 94.1757C180.211 95.013 180.048 95.8686 179.958 96.7333C179.868 97.6037 180.1 98.4769 180.611 99.1875C181.007 99.6086 181.49 99.9388 182.026 100.155C182.563 100.371 183.14 100.469 183.717 100.44C184.549 100.498 185.382 100.367 186.157 100.059C186.931 99.7509 187.626 99.2725 188.191 98.6594C188.881 97.6022 189.388 96.4366 189.692 95.2112C190.168 93.8236 190.541 92.405 191.059 91.0692C192.159 88.4198 193.117 85.7133 193.927 82.9612C194.801 80.0829 194.721 76.9991 193.699 74.1699C192.664 71.8296 189.423 70.7113 187.041 70.6699C184.479 70.6667 181.998 71.573 180.041 73.2276C178.55 74.5426 177.773 76.9243 177.225 78.7468C176.693 80.478 176.425 82.279 176.427 84.0899Z'
						fill='#F9D0B4'
					/>
					<path
						id='Vector_24'
						d='M178.415 72.3577C177.952 71.8448 177.6 71.2421 177.38 70.587C176.722 68.9764 176.56 67.2061 176.914 65.5027C177.095 64.6604 177.471 63.8718 178.01 63.1996C178.549 62.5274 179.237 61.99 180.02 61.63C180.791 61.328 181.616 61.1871 182.443 61.2158C182.873 61.2121 183.3 61.2821 183.707 61.4229C185.384 62.0649 185.778 64.3637 187.279 65.3888C187.359 65.0654 187.543 64.7775 187.804 64.5696C188.064 64.3618 188.385 64.2457 188.718 64.2394C189.044 64.2599 189.359 64.3569 189.64 64.5224C189.921 64.688 190.158 64.9174 190.334 65.1921C190.691 65.7315 191.002 66.2995 191.266 66.8903C191.825 67.9368 192.61 68.8458 193.565 69.5515C193.697 69.6769 193.869 69.7505 194.051 69.7586C194.269 69.7586 194.445 69.5826 194.652 69.4894C195.263 69.2409 195.905 69.8311 196.112 70.4524C196.222 71.0992 196.371 71.7389 196.557 72.3681C196.92 73.1447 197.748 73.59 198.307 74.232C198.826 74.9354 199.137 75.771 199.203 76.6428C199.269 77.5147 199.088 78.3874 198.68 79.161C197.83 80.6883 196.694 82.0382 195.335 83.1373C195.192 82.9405 194.977 82.8077 194.738 82.767C194.498 82.7264 194.251 82.7812 194.051 82.9198C193.65 83.2044 193.3 83.5545 193.016 83.9553C192.875 84.156 192.689 84.3213 192.474 84.4381C192.258 84.5549 192.018 84.62 191.773 84.6284C191.711 83.1373 192.498 81.729 192.633 80.2379C192.659 79.1003 192.373 77.9772 191.805 76.9912C191.237 76.0051 190.41 75.194 189.412 74.6462C187.391 73.5853 185.089 73.18 182.826 73.4864C181.48 73.6107 179.461 73.445 178.415 72.3577Z'
						fill='#473F47'
					/>
					<path
						id='Vector_25'
						d='M194.207 82.0811C194.632 81.889 195.108 81.8418 195.563 81.9465C195.858 82.0788 196.107 82.2966 196.276 82.5716C196.446 82.8467 196.53 83.1664 196.516 83.4894C196.502 84.2049 196.247 84.8946 195.791 85.4464C195.332 85.9912 194.799 86.4688 194.207 86.8651C193.887 87.1365 193.501 87.3187 193.088 87.3932C192.748 87.4141 192.41 87.3246 192.125 87.138C191.839 86.9515 191.622 86.6778 191.504 86.3577C191.401 86.027 191.365 85.6794 191.397 85.3347C191.429 84.9899 191.529 84.6549 191.69 84.3488C191.926 83.8148 192.273 83.3368 192.706 82.946C193.14 82.5551 193.651 82.2604 194.207 82.0811Z'
						fill='#F9D0B4'
					/>
					<path
						id='Vector_26'
						d='M132.833 69.6655C145.443 69.6655 155.665 59.4429 155.665 46.8327C155.665 34.2226 145.443 24 132.833 24C120.223 24 110 34.2226 110 46.8327C110 59.4429 120.223 69.6655 132.833 69.6655Z'
						fill='#F8C244'
					/>
					<path
						id='Vector_27'
						d='M152.045 49.9611C153.767 39.3542 146.564 29.3597 135.957 27.638C125.35 25.9162 115.356 33.1191 113.634 43.7261C111.912 54.3331 119.115 64.3275 129.722 66.0492C140.329 67.771 150.323 60.5681 152.045 49.9611Z'
						fill='#E8A825'
					/>
					<path
						id='Vector_28'
						d='M131.041 59.093V55.9865C129.372 55.9662 127.74 55.4822 126.33 54.5886L127.065 52.5176C128.384 53.3694 129.917 53.8291 131.487 53.843C133.692 53.843 135.163 52.5797 135.163 50.8194C135.163 49.059 133.961 48.0753 131.683 47.133C128.525 45.9008 126.578 44.4718 126.578 41.7898C126.578 39.1079 128.401 37.2854 131.248 36.8194V33.713H133.164V36.7055C134.57 36.7043 135.952 37.0607 137.182 37.741L136.416 39.812C135.243 39.1114 133.898 38.7527 132.532 38.7765C130.151 38.7765 129.26 40.1952 129.26 41.4274C129.26 43.0324 130.399 43.8401 133.081 44.9481C136.26 46.2425 137.876 47.8475 137.876 50.6019C137.851 51.9237 137.339 53.1899 136.44 54.1584C135.54 55.1269 134.315 55.7299 132.998 55.8519V59.0619L131.041 59.093Z'
						fill='#F8C244'
					/>
					<path
						id='Vector_29'
						d='M138.352 65.6788C138.465 65.171 138.682 64.692 138.988 64.2716C139.295 63.8511 139.684 63.4983 140.133 63.235C140.202 63.2019 140.279 63.1847 140.356 63.1847C140.433 63.1847 140.509 63.2019 140.578 63.235C140.704 63.3482 140.8 63.4904 140.858 63.6492C141.102 64.4575 141.207 65.3013 141.168 66.1448C141.205 66.7172 141.205 67.2913 141.168 67.8637C141.143 68.4438 140.985 69.0103 140.706 69.5199C140.428 70.0296 140.037 70.469 139.563 70.8045C139.046 71.0841 137.492 71.1876 137.492 69.9657C137.576 69.2656 137.715 68.5732 137.907 67.8947C138.012 67.148 138.16 66.4081 138.352 65.6788V65.6788Z'
						fill='#F9D0B4'
					/>
					<path
						id='Vector_30'
						d='M148.987 149.606C148.987 149.606 149.66 200.977 152.29 220.02C154.868 238.586 156.629 253.156 156.701 254.481L162.914 253.684L169.023 173.236L176.779 206.714L192.364 207.842L191.763 154.587L148.987 149.606Z'
						fill='#473F47'
					/>
					<path
						id='Vector_31'
						d='M142.773 237.799C142.773 237.799 194.134 217.68 192.363 207.884L176.738 206.672L138.6 233.947L142.773 237.799Z'
						fill='#473F47'
					/>
					<path
						id='Vector_32'
						d='M155.593 259.514C155.531 259.673 155.531 259.851 155.593 260.011C155.701 260.141 155.851 260.229 156.017 260.259C160.584 261.688 165.213 263.138 169.997 263.293C170.649 263.293 171.457 263.2 171.643 262.589C171.71 262.201 171.62 261.803 171.395 261.481C170.14 259.241 168.319 257.37 166.114 256.055C164.767 255.247 163.183 254.574 162.479 253.166C161.459 253.415 160.42 253.577 159.372 253.653C158.668 253.653 157.415 253.404 156.887 253.953C156.472 254.72 156.224 255.568 156.162 256.438C155.893 257.453 155.738 258.488 155.593 259.514Z'
						fill='#473F47'
					/>
					<path
						id='Vector_33'
						d='M143.913 238.1C143.724 237.733 143.666 237.313 143.747 236.909C142.801 238.633 142.357 240.588 142.463 242.552C142.574 244.503 142.529 246.459 142.328 248.403C142.316 248.754 142.214 249.095 142.033 249.396C141.852 249.697 141.597 249.946 141.293 250.122C140.475 250.463 139.605 249.79 139.025 249.086C137.55 247.353 136.456 245.329 135.816 243.145C135.175 240.961 135.002 238.667 135.308 236.412C135.321 236.196 135.385 235.987 135.494 235.801C135.765 235.505 136.132 235.315 136.53 235.262C138.497 234.765 139.346 233.45 140.837 232.311C142.225 233.73 143.022 236.35 143.913 238.1Z'
						fill='#473F47'
					/>
					<path
						id='Vector_34'
						d='M217.05 125.054L211.634 126.09L206.457 118.437C203.951 116.087 203.992 115.6 202.574 118.727C198.68 127.281 192.291 142.927 191.794 154.638L188.688 154.286C188.117 153.444 187.801 152.456 187.776 151.439C187.538 148.26 188.594 144.625 186.544 142.192C186.068 141.633 185.405 141.053 185.509 140.317C185.618 139.865 185.868 139.459 186.223 139.158C189.332 135.855 191.854 132.044 193.679 127.891C194.714 125.541 195.522 123.087 196.723 120.809C197.935 118.63 199.32 116.553 200.865 114.596C201.901 113.198 203.143 111.696 204.852 111.324C206.809 110.889 208.818 112.131 210.029 113.736C211.097 115.439 211.979 117.251 212.659 119.142C213.118 120.259 213.766 121.289 214.575 122.186C215.145 122.776 216.366 123.004 216.801 123.542C216.974 123.749 217.088 123.999 217.131 124.265C217.175 124.53 217.147 124.803 217.05 125.054V125.054Z'
						fill='black'
						fillOpacity='0.2'
					/>
				</g>
			</g>
		</svg>
	);
};
