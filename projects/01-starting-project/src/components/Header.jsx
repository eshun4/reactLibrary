import img from "../assets/investment-calculator-logo.png";

export default function Header() {
    return (
        <header id="header">
            <img src={img} alt="This is the investment app image." />
            <h1 >
                Investment Calculator
            </h1>
        </header>
            
        
    );
}