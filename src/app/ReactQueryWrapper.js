import Header from '@/components/Header/Headercomponents';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function ReactQueryWrapper({ children }) {
	return (
		<QueryClientProvider client={queryClient}>
			{' '}
			<Header />
			{children}
		</QueryClientProvider>
	);
}
