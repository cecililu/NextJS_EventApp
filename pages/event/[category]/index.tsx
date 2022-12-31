const Page:React.FC=({filter})=>{
    console.log('filter',filter)
    return(
    <div>
      
        {filter.map((index:any)=>{
             return(<>
              <>
              <div>
                <h3>{index.title}</h3>
                <center><img src={index.image} style={{height:'150px',width:'150px'}}/></center>
                <p>{index.description}</p>
              </div>
            </>
             </>)
        })}
    </div>
    )
}
export default Page;

export async function getStaticPaths(){
    const  data=await import( '../../../data/data.json')
    const allPaths=data.events_categories.map(ev=>{
        return({
            params:{
                category:ev.id
            }
        })
        console.log(allPaths);
    })
    return {
         paths:allPaths,
         fallback:false,
        
             
      }
  }

  export async function  getStaticProps(context:any){
    const  data=await import( '../../../data/data.json') 
    const id=context.params.category;
    console.log('asdads',id)
    const filter=data['allEvents'].filter(ev=>ev.city===id);
  return {
      props:{ filter}
  }
}
