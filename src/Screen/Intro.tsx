import "../styles.css";
import intro from "../assets/intro.png";
export default function Intro() {
  return (
    <div className="Intro">
      <div className="Intro_frame">
        <div className="Intro_text">
          Hi there! This is <span>Adi</span>
          <br />
          Full Stack Web developer<span>.</span>
        </div>
        <div className="Intro_image">
          <img src={intro} alt="" width={600} height={600} />
        </div>
      </div>
      <div>
        <div className="Intro_card"></div>
        <div className="Intro_card"></div>
      </div>
    </div>
  );
}
