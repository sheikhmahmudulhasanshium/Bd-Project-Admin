//import getBillboard from "@/actions/get-billboards";
import getProjects from "@/actions/get-projects";
import ProjectList from "@/components/project-list";
//import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Link from "next/link";

//prevent caching
export const revalidate = 0;

const HomePage = async () => {
  const projects = await getProjects();
  //console.log(products)
  //const billboard = await getBillboard("9825ba90-b41d-4f2c-a22e-9368b2e8d964");
      //console.log(billboard)


  return (
    <div className="pt-20 ">
    <Container>
      
        <div className="text-2xl text-center">PROJECTS PAGE</div>
        <div className="space-y-10 pb-10">
        
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            {/*<ProductList title="Featured Products" items={products} />*/}
            <ProjectList data={projects}/>
          </div>
          <Link href="/add-project">
            <div className=" justify-center items-center text-center bg-slate-600 m-10 text-2xl p-2 rounded-lg font-extrabold">
              <button >Add Project +</button>
            </div>
          </Link>
          
        </div>
        

    </Container>
    </div>
  )
};

export default HomePage;