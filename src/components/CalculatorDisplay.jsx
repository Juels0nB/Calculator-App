import { Delete } from "lucide-react";
import PropTypes from "prop-types";
function CalculatorDisplay({ handleButtonClick,num }) {
  return (
    <div className="space-y-6 p-8 bg-white/80 rounded-2x1 shadow-2x1 rounded-xl border border-slate-200">
   
      <div className="mb-6 bg-slate-100 rounded text-right p-4 text-2xl font-mono min-h-[48px]">
        {num}
      </div>
      <div className="grid grid-cols-4 gap-4 font-mono text-xl">
        
        <button onClick={() => handleButtonClick("D")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in"><Delete size={32} strokeWidth={1.5}/></button>
        <button onClick={() => handleButtonClick("C")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">C</button>
        <button onClick={() => handleButtonClick("%")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">%</button>
        <button onClick={() => handleButtonClick("÷")} className="p-5 bg-orange-400/80 rounded-md border shadow animate-fade-in">÷</button>

        <button onClick={() => handleButtonClick("7")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in ">7</button>
        <button onClick={() => handleButtonClick("8")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">8</button>
        <button onClick={() => handleButtonClick("9")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">9</button>
        <button onClick={() => handleButtonClick("×")} className="p-5 bg-orange-400/80 rounded-md border shadow animate-fade-in">×</button>

        <button onClick={() => handleButtonClick("4")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">4</button>
        <button onClick={() => handleButtonClick("5")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">5</button>
        <button onClick={() => handleButtonClick("6")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">6</button>
        <button onClick={() => handleButtonClick("-")} className="p-5 bg-orange-400/80 rounded-md border shadow animate-fade-in">−</button>

        <button onClick={() => handleButtonClick("1")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">1</button>
        <button onClick={() => handleButtonClick("2")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">2</button>
        <button onClick={() => handleButtonClick("3")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">3</button>
        <button onClick={() => handleButtonClick("+")} className="p-5 bg-orange-400/80 rounded-md border shadow animate-fade-in">+</button>

        <button onClick={() => handleButtonClick("0")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in col-span-2">0</button>
        <button onClick={() => handleButtonClick(",")} className="p-5 bg-slate-400/80 rounded-md border shadow animate-fade-in">,</button>
        <button onClick={() => handleButtonClick("=")} className="p-5 bg-orange-400/80 rounded-md border shadow animate-fade-in">=</button>
      </div>
      </div>
  );
}
CalculatorDisplay.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  num: PropTypes.string.isRequired,
};


export default CalculatorDisplay;
