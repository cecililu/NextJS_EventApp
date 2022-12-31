const Page:React.FC=()=>{
    return(
    <div>
        <h1>Event in London</h1>
            <a href='/event/event1'>Event 1</a>
            <a href='/event/event2'>Event 2</a>
            <a href='/event/event3'>Event 3</a>
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
    console.log(context);
  return {
      props:{
        
        
      }
  }
}
