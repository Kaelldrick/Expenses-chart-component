import { motion } from 'framer-motion'
import data from '../../data.json'
import '../styles/BarPlot.css'

function height(h) {
  return Math.round(h * 2.88);
}

export function BarPlot() {

  const table = data.map((element, index) =>
    <tr key={element.day} className='content__row'>
      <td>{element.day}</td>
      <motion.td
        initial={{ scaleY: 0, transformOrigin: "bottom" }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: index * 0.3, ease: 'easeInOut' }}
        style={{ height: `${height(element.amount)}px`, backgroundColor: `${element.amount === 52.36 && "var(--Cyan)"}` }} data-content={`$${element.amount}`}>
      </motion.td>
    </tr>
  )
  return (
    <table className='content__table'>
      <tbody className='content__chart' >
        {table}
      </tbody>
    </table>
  )
}