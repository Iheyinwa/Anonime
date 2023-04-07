'use client';

import Explore from '@/components/Explore/Explorecomponents';
import Release from '@/components/Release/Releasecomponents';

export const metadata = {
	title: 'Anonime'
};

export default function Home() {
	return (
		<main>
			<Explore />
			<Release />
		</main>
	);
}
