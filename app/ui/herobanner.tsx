import styles from "../ui/home.module.css"
import {contentfulContent} from "../../scripts/contentful"


export default async function HeroBanner(data) {
    const dataContent= await contentfulContent('herobanner');
   const sysID=data;
    const DataComponent = ({ data }) => {
        
        return (
          <div className=" text-white border-l-8 border-white mt-64 mr-auto ml-auto pl-14 mb-14">          
              {data.map((item, index) => {
                if(item.sys.id === sysID.data){
                    return(
                    <div key={index} >
                    <p className="mb-10">{item.fields.description}</p>
                      <h1 className="uppercase">
                          <p className="text-xxxl">{item.fields.subtitle}</p>
                          <p className="text-large">{item.fields.title}</p>
                      </h1>
                    </div>)  
                }           
              })}
          </div>
        );
      };
       
  return (
    <div className={`flex h-full flex-col ${styles.herobackgroundImage}`}>
      <DataComponent data={dataContent} />
     
    </div>
  );
}
