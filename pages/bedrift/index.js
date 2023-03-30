import MainPageBedrift from "@/pages/bedrift/MainPageBedrift";
import LayoutBedrift from "@/pages/components/layouts/LayoutBedrift";

export default function BedriftPage() {
    return (
        <>
            <LayoutBedrift title="arbeidsplassen.no">
                <MainPageBedrift />
            </LayoutBedrift>
        </>
    );
}
