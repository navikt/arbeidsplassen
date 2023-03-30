import LayoutPerson from "./components/layouts/LayoutPerson";
import MainPage from "@/pages/MainPage";

export default function Page() {
    return (
        <LayoutPerson title="arbeidsplassen.no">
            <MainPage />
        </LayoutPerson>
    );
}
