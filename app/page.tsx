import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
        id="123"
        name="Neural the brainy explorer"
        topic="Neural Network of thhr Brain"
        subject="science"
        duration={45}
        color="#ffda6e" 
        />
        <CompanionCard
        id="1235"
        name="Countsy the Number Wizard"
        topic="Derivatives & Integrals"
        subject="maths"
        duration={50} 
        color="#e5d0ff" 
        />
        <CompanionCard
        id="1234"
        name="climate"
        topic="weather"
        subject="geography"
        duration={45}
        color="#add8e6" 
        />
        

      </section>

      <section className="home-section">
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>

      </section>
    </main>
  )
}

export default Page