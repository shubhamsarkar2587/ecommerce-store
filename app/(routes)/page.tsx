import getBillboard from "@/actions/get-billboard";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";

export const revalidate = 0;

const Homepage = async () => {
  const billboard = await getBillboard('6cf16b3c-29d7-4c20-851c-effb3ff35297')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
};

export default Homepage;
