import { Metadata } from "next"
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
    }>;
}) {
    const searchParams = await props.searchParams
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);

    return (
        <div className="w-full">
            <CustomersTable customers={customers} />
        </div>
    );
}
