import MainPageBedrift from "@/src/common/components/bedrift/MainPageBedrift";
import Layout from "@/src/common/components/layout/Layout";

export default function BedriftPage() {
    return (
        <>
            <Layout active="bedrift" title="arbeidsplassen.no">
                <MainPageBedrift />
            </Layout>
        </>
    );
}
