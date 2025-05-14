import DisciplineList from "../components/Disciplines/DisciplineList";
import prev from "../assets/images/ico-prev.svg";
import logo from "../assets/images/logo-sm-white.png";

function Disciplines() {
  return (
    <section class="block">
            <div class="flex-container">
                <div class="block-header">
                    <button class="back-btn">
                        <img src={prev} alt="Back" />
                    </button>
                    <img src={logo} alt="Logo SM" class="logo-sm" />
                    <span class="space"></span>
                </div>
                <h1 class="title">Disciplines</h1>
                <DisciplineList />
            </div>
        </section>
  );
}
export default Disciplines;