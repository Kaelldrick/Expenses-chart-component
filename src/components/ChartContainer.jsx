import '../styles/ChartContainer.css'
import { BarPlot } from './BarPlot'

export function ChartContainer() {
  return (
    <div className="container">
      <header className="container__header">
        <div className="container__balance">
          <p>My balance</p>
          <p>$921.48</p>
        </div>
        <svg className="container__logo" width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24" /><circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" /></g></svg>
      </header>
      <div className="container__content">
        <h2>Spending - Last 7 days</h2>
        <BarPlot />
        <hr style={{ margin: '35px 0', color: '#f8e9dd', opacity: '0.2' }} />
        <div className="container__result">
          <div className='result__total'>
            <p>Total this month</p>
            <p>$478.33</p>
          </div>
          <div className='result__percentage'>
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  )
}