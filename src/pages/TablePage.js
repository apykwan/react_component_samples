// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

export default function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score:3 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1},
    { name: 'Lime', color: 'bg-emerald-500', score: 4 },
    { name: 'Mango', color: 'bg-amber-500', score: 4 },
    { name: 'Avocado', color: 'bg-slate-700', score: 2 },
    { name: 'Grape', color: 'bg-purple-700', score: 5 },
  ];

  const config = [
    { 
      label: 'Name' ,
      render: fruit => fruit.name,
      sortValue: fruit => fruit.name
    },
    { 
      label: 'Color',
      render: fruit => <div className={`p-5 m-3 ${fruit.color}`}></div>
    },
    { 
      label: 'Score',
      render: fruit => fruit.score,
      sortValue: fruit => fruit.score
    },
    {
      label: 'Square',
      render: fruit => fruit.score **2,
      sortValue: fruit => fruit.score **2
    }
  ];

  const keyFn = fruit => fruit.name;

  return <div>
    <SortableTable data={data} config={config} keyFn={keyFn} />
  </div>;
}