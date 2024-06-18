import { Gothic_A1 } from "next/font/google"; 
import "../app/ui/home.css"
import {contentfulContent} from "../scripts/contentful"
import clsx from 'clsx';
import HeroBanner from '../app/ui/herobanner'

export default async function Page() {
const sysID= "7TyEqYFwHZskPy1TVsMxz";
  const dataContent= await contentfulContent('checklist');
  const DataComponent = ({ data }) => {
    const orderAndValue = data.map(item => ({
      order: item.fields.order,
      value: item.fields.list.content[0].content[0].value
    }));
  
    return (
      <div>
        <ul className='font'>
          {orderAndValue.map((item, index) => (
            <li key={index} className={clsx(
              'flex gap-7 border-b p-2 border-lightgrey text-lightgrey font-normal',
              {
                'bg-lightgrey text-white': index === 0,
              },
            )}>
              <h3 className="">{item.order}</h3> 
              <p className="uppercase" style={{textTransform: "uppercase"}}> {item.value}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    
    <main className="flex min-h-screen flex-col">
      <div className="mt-4 flex grow flex-col gap-4">
        <HeroBanner data={sysID}/>
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
        <DataComponent data={dataContent} />
        
        </div>
       
      </div>
    </main>
  );
}
