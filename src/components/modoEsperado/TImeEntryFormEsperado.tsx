import React, { useState } from 'react';

export interface TimeEntryEsperado {
  start: string;
  end: string;
  lunch: string;
}

interface Props {
  onAdd: (entry: TimeEntryEsperado) => void;
}

export const TimeEntryFormEsperado: React.FC<Props> = ({ onAdd }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [lunch, setLunch] = useState('');

  const handleAdd = () => {
    if (!start || !end) {
      alert('Preencha início e fim.');
      return;
    }
    onAdd({ start, end, lunch: lunch || '0h0' });
    setStart('');
    setEnd('');
    setLunch('');
  };

  return (
    <div className="form">
      <input placeholder="Início (ex: 7h30)" value={start} onChange={e => setStart(e.target.value)} />
      <input placeholder="Fim (ex: 12h00)" value={end} onChange={e => setEnd(e.target.value)} />
      <input placeholder="Tempo de almoço (ex: 1h12)" value={lunch} onChange={e => setLunch(e.target.value)} />
      <button onClick={handleAdd}>Adicionar entrada</button>
    </div>
  );
};
