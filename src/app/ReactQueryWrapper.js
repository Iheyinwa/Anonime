import Header from '@/components/Header/Headercomponents';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
export default function ReactQueryWrapper({ children }) {
	return (
		<QueryClientProvider client={queryClient}>
			{' '}
			<Header />
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
