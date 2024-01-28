import Container from "@/components/ui/container";

const AddProjectPage = () => {
    return ( 
        <div className="bg-white pt-20">
            <Container>
                <div className="flex justify-center items-center flex-col">
                    <div className="text-2xl text-center">ADD PROJECT FORM</div>
                    <div className="bg-slate-600 ">
                        <form>
                            Name<input type="text" />
                        </form>
                    </div>
                </div>
                
            </Container>
        </div>
     );
}
 
export default AddProjectPage;