import { idText } from "typescript";

const Page: React.FC = ({data_categories}) => {
  return (
    <div>
      <h1>Event Page</h1>
      <div>
        {data_categories.map((index: any) => {
           
          return (
            <>
              <a key={index.title} href={`/event/${index.id}`}>
                <h3>{index.title}</h3>
                <center><img src={index.image} style={{height:'150px',width:'150px'}}/></center>
              </a>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
export async function getStaticProps() {
  const data = await import("../../data/data.json");
  return {
    props: {
      data_categories: data['events_categories'],
    },
  };
}
