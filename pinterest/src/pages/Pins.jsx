import PinList from "../components/Pins/PinList";

function Pins({searchTerm}) {
    return (
        <section class="block">
        <div class="container">
            <h1 class="title">Все пины</h1>
            <PinList searchTerm={searchTerm} />
        </div>
        </section>
    );
}
export default Pins;