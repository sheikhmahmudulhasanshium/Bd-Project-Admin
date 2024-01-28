import { Projects } from "@/type"

const URL="https://unnoyone-bdserver-production.up.railway.app/projects"

const getProjects=async (): Promise <Projects[]>=>{
    const res=await fetch(URL)
    return res.json()
} 
export default getProjects
