import { calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({ input }) {
    const output = calculateInvestmentResults(input);
    const initialInvestment = output[0].valueEndOfYear - output[0].interest - output[0].annualInvestment;

    return (
        <>
            {
                <table id="result"> 
                   <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest</th>
                            <th>Total Interest</th>
                            <th> Capital Invested</th>
                    </tr>
                </thead>
                <tbody>
                        {output.map((value, index) => {
                            const totalInterest = value.valueEndOfYear - value.annualInvestment * value.year - initialInvestment;
                            const totalAmountInvested = value.valueEndOfYear - totalInterest;
                            return (
                                <tr key={index}>
                                    <td> {value.year}</td>
                                    <td> {formatter.format(value.valueEndOfYear)}</td>
                                    <td>{ formatter.format(value.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            )
                        
})}
                </tbody>
                    
                </table>
            }
        </>
    );
}