'use client';
import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header/Headercomponents';

const poppins = Poppins({
	subsets: [ 'latin' ],
	weight: [ '400', '600', '700' ]
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={poppins.className}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
