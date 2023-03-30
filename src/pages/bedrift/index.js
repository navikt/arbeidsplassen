import MainPageBedrift from "@/src/common/components/bedrift/MainPageBedrift";
import LayoutBedrift from "@/src/common/components/layouts/LayoutBedrift";

export default function BedriftPage() {
    return (
        <>
            <LayoutBedrift title="arbeidsplassen.no">
                <MainPageBedrift />
            </LayoutBedrift>
        </>
    );
}
