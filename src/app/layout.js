'use client';
import './globals.css';
import { Poppins } from 'next/font/google';
import ReactQueryWrapper from './ReactQueryWrapper';

const poppins = Poppins({
	subsets: [ 'latin' ],
	weight: [ '400', '600', '700' ]
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={poppins.className}>
			<body>
				<ReactQueryWrapper>{children}</ReactQueryWrapper>
			</body>
		</html>
	);
}
